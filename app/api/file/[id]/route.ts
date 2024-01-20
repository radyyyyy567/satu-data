import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import crypto from "crypto";
import axios from "axios";
import { cookies } from "next/headers";
import * as utils from "../utils/filename";

export async function GET(req: Request) {
  try {
    const id = req.url.split("file/")[1];
    const getDataPostById = await prisma.dataPost.findUnique({
      where: {
        id: id,
      },
      include: {
        uploader: {
          select: {
            username: true,
            role: true,
          },
        },
      },
    });

    if (!getDataPostById) {
      return NextResponse.json(
        { message: "tida ditemukan id" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { getDataPostById: getDataPostById },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({
      message: "Ada kesalahan saat mengambil data" + error.message,
    });
  }
}

export async function PATCH(req: Request) {
  const id = req.url.split("file/")[1];
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const checkDataPost = await prisma.dataPost.findUnique({
    where: {
      id,
      uploader: {
        role: session.user.role,
      },
    },
  });

  if (!checkDataPost) {
    return NextResponse.json({ message: "File Tidak Ditemukan" }, { status: 401 });
  }

  const formData = await req.formData();
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const category = formData.get("category") as string;
  const dateAt = formData.get("dateat") as string;

  if (!title || !description || !category) {
    return NextResponse.json({ message: "Data yang diedit tidak boleh kosong" }, { status: 400 });
  }

  const file = formData.get("file") as File | undefined;
  let fileNameCurrent: string | undefined = checkDataPost?.filename;

  if (file) {
    const fileMaxSize = 2 * 1024 * 1024;
    const fileExtension = utils.getFileExtension(file.name);

    if (file.size > fileMaxSize) {
      return NextResponse.json(
        { message: "File terlalu besar untuk diupload" },
        { status: 400 }
      );
    }

    if (fileExtension !== "xlsx" && fileExtension !== "xls") {
      return NextResponse.json({ error: "Hanya file excel yang dibolehkan" }, { status: 400 });
    }

    const fileBuffer: ArrayBuffer = await file.arrayBuffer();
    const fileNameHashed: string = utils.generateUniqueFileName(fileBuffer, fileExtension);

    formData.append("fileName", fileNameHashed);
    fileNameCurrent = fileNameHashed;

    const cookieStore = cookies();
    const token = cookieStore.get("next-auth.session-token");

    if (checkDataPost?.filename) {
      try {
        await axios.delete(
          `${process.env.NEXT_PUBLIC_API_URL}/products/${checkDataPost.filename}`,
          {
            headers: {
              Authorization: `${token?.value}`,
            },
          }
        );
      } catch (error: any) {
        // Handle the error if the delete request fails
        console.error("Error deleting file:", error.message);
      }
    }

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/products`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `${token?.value}`,
          },
        }
      );
      // Handle the response if needed
    } catch (error: any) {
      // Handle the error if the post request fails
      console.error("Error uploading file:", error.message);
    }
  }

  try {
    const updateBookPost = await prisma.dataPost.update({
      where: { id: id },
      data: {
        title: title || checkDataPost.title,
        filename: fileNameCurrent || checkDataPost.filename,
        description: description || checkDataPost.description,
        category: category || checkDataPost.category,
        dataAt: dateAt || checkDataPost.dataAt,
      },
    });

    return NextResponse.json(
      {
        SelectedBook: updateBookPost,
        message: "Data Open Data Berhasil diubah",
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ message: error.response?.data || "Internal Server Error" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  const id = req.url.split("file/")[1];
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const checkDataPost = await prisma.dataPost.findUnique({
    where: {
      id,
      uploader: {
        role: session.user.role,
      },
    },
  });

  if (!checkDataPost) {
    return NextResponse.json({ message: "File Tidak Ditemukan" }, { status: 401 });
  }

  const cookieStore = cookies();
  const token = cookieStore.get("next-auth.session-token");  

  try {
  //   Attempt to delete the file
    const deleteFile = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/products/${checkDataPost.filename}`,
      {
        headers: {
          Authorization: `${token?.value}`,
        },
      }
  );
  
    // File deletion succeeded, proceed to delete data
    try {
      const deleteData = await prisma.dataPost.delete({
        where: {
          id,
          uploader: {
            role: session.user.role,
          }
        }
      });
  
      // Return success response
      return NextResponse.json({ message: "File and data deleted successfully" });
    } catch (dataError: any) {
      // Handle error if data deletion fails
      return NextResponse.json({ message: "Failed to delete data: " + dataError.message }, {status: 500});
    }
  } catch (fileError: any) {
    // Handle error if file deletion fails
    return NextResponse.json({ message: "Failed to delete file: " + fileError.message });
  }
  
}
function getFileExtension(filename: string): string {
  return filename.split(".").pop()?.toLowerCase() || "";
}
