import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import crypto from "crypto";
import axios from "axios";
import { getServerSession } from "next-auth";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

function getFileExtension(filename: string): string {
  return filename.split(".").pop()?.toLowerCase() || "";
}

export async function GET(req: Request) {
  try {
    const id = req.url.split("book/")[1];
    const oneBookpost = await prisma.bookPost.findUnique({
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
    if (!oneBookpost) {
      NextResponse.json({ message: "Buku yang di cari tidak ada" });
    }

    return NextResponse.json(
      { selectedBook: oneBookpost, message: "Data Buku Berhasil diambil" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Gagal menghapus buku" + error },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ message: "Authorized" }, { status: 401 });
    }

    const id = req.url.split("book/")[1];
    const oneBookpost = await prisma.bookPost.findUnique({
      where: {
        id: id,
        uploader: {
          role: session?.user.role,
        },
      },
    });
    const bookpost = await prisma.bookPost.delete({
      where: {
        id: id,
        uploader: {
          role: session?.user.role,
        },
      },
    });
    if (!bookpost) {
      NextResponse.json({
        message: "Buku yang di hapus tidak ada atau Authorized",
      });
    }

    const cookieStore = cookies();
    const token = cookieStore.get("next-auth.session-token");
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/products/${oneBookpost?.filename}`,
        {
          headers: {
            Authorization: `${token?.value}`,
          },
        }
      );
    } catch (error: any) {
      return NextResponse.json(
        { message: error.response.data },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Buku berhasil di hapus" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Gagal menghapus buku" + error },
      { status: 500 }
    );
  }
}

export async function PATCH(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const id = req.url.split("book/")[1];
    const oneBookpost = await prisma.bookPost.findUnique({
      where: {
        id: id,
        uploader: {
          role: session.user.role,
        },
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

    if (!oneBookpost) {
      return NextResponse.json({ message: "Buku yang dicari tidak ada" });
    }

    const formData = await req.formData();

    const file = formData.get("file") as File;
    const title = formData.get("title") as string;
    const yearString = formData.get("year") as string;
    const year = parseInt(yearString);

    let fileNameCurrent: string | undefined = undefined;

    if (file) {
      const fileExtension = getFileExtension(file.name);

      if (fileExtension !== "pdf") {
        return NextResponse.json(
          { error: "Only PDF files are allowed" },
          { status: 400 }
        );
      }

      const fileBuffer = await file.arrayBuffer();
      const fileNameHash = crypto
        .createHash("md5")
        .update(Buffer.from(fileBuffer))
        .digest("hex");

      const currentDate = new Date();
      const dateString = `${currentDate.getFullYear()}${(
        currentDate.getMonth() + 1
      )
        .toString()
        .padStart(2, "0")}${currentDate.getDate().toString().padStart(2, "0")}-${
        currentDate.getHours().toString().padStart(2, "0")
      }${currentDate.getMinutes().toString().padStart(2, "0")}${currentDate
        .getSeconds()
        .toString()
        .padStart(2, "0")}`;

      const fileNameHashed = `${fileNameHash}-${dateString}.${fileExtension}`;
      formData.append("fileName", fileNameHashed);
      fileNameCurrent = fileNameHashed;

      const cookieStore = cookies();
      const token = cookieStore.get("next-auth.session-token");
      try {
        const responseDelete = await axios.delete(
          `${process.env.NEXT_PUBLIC_API_URL}/products/${oneBookpost?.filename}`,
          {
            headers: {
              Authorization: `${token?.value}`,
            },
          }
        );
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/products/pdf`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `${token?.value}`,
            },
          }
        );
      } catch (error: any) {
        return NextResponse.json(
          { message: error.response.data },
          { status: 500 }
        );
      }
    }

    try {
      const updateBookPost = await prisma.bookPost.update({
        where: { id: id },
        data: {
          title: title || oneBookpost.title,
          filename: fileNameCurrent || oneBookpost.filename,
          year: year || oneBookpost.year,
          linkdrive: null,
          uploaderId: session.user.id,
        },
      });

      return NextResponse.json(
        {
          SelectedBook: updateBookPost,
          message: "Data Buku Berhasil diubah",
        },
        { status: 200 }
      );
    } catch (error: any) {
      return NextResponse.json({ message: error.response.data }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Gagal mengubah buku" + error },
      { status: 500 }
    );
  }
}