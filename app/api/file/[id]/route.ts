import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import crypto from "crypto";
import axios from "axios";

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
      { dataPostById: getDataPostById },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({
      message: "Ada kesalahan saat mengambil data" + error.message,
    });
  }
}

// export async function PACTH(req: Request) {
//   const session = await getServerSession(authOptions);

//   if (!session) {
//     return NextResponse.json({ message: "Unauthorized" }, { status: 400 });
//   }
//   const id = req.url.split("file/")[1];

//   const getDataPostById = await prisma.dataPost.findUnique({
//     where: {
//       id: id,
//       uploader: {
//         role: session.user.role,
//       },
//     },
//     include: {
//       uploader: {
//         select: {
//           username: true,
//           role: true,
//         },
//       },
//     },
//   });

//   if (!getDataPostById) {
//     return NextResponse.json(
//       { message: "data tidak ditemukan!" },
//       { status: 404 }
//     );
//   }

//   const formData = await req.formData();

//   const file = formData.get("file") as File;
//   const title = formData.get("title") as string;
//   const description = formData.get("description") as string;
//   const category = formData.get("category") as string;
//   const dateAt = formData.get("dateat") as string;

//   if (!title || !description || !category || !file) {
//     return NextResponse.json(
//       { message: "Please provide a title and select a file!" },
//       { status: 400 }
//     );
//   }

//   const fileExtension = getFileExtension(file.name);
//   const fileMaxSize = 2 * 1024 * 1024;

//   if (file.size > fileMaxSize) {
//     return NextResponse.json(
//       { message: "File terlalu besar upload menggunakan Link Google Drive" },
//       { status: 400 }
//     );
//   }

//   if (fileExtension !== "xlsx" && fileExtension !== "xls") {
//     return NextResponse.json(
//       { error: "Only Excel files are allowed" },
//       { status: 400 }
//     );
//   }

//   const fileBuffer = await file.arrayBuffer();
//   const fileNameHash = crypto
//     .createHash("md5")
//     .update(Buffer.from(fileBuffer))
//     .digest("hex");

//   const currentDate = new Date();
//   const dateString = `${currentDate.getFullYear()}${(currentDate.getMonth() + 1)
//     .toString()
//     .padStart(2, "0")}${currentDate
//     .getDate()
//     .toString()
//     .padStart(2, "0")}-${currentDate
//     .getHours()
//     .toString()
//     .padStart(2, "0")}${currentDate
//     .getMinutes()
//     .toString()
//     .padStart(2, "0")}${currentDate.getSeconds().toString().padStart(2, "0")}`;

//   const fileNameHashed = `${fileNameHash}-${dateString}.${fileExtension}`;
//   formData.append("fileName", fileNameHashed);

//   try {
//     const updateFileDataPost = axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/products/edit/${getDataPostById.filename}`, {

//     })

//     const updateDataPost = await prisma.dataPost.update({
//       where: {
//         id: id,
//         uploader: {
//           role: session.user.role
//         }
//       },
//       data: {
//         title,
//         description,
//         category,
//         filename: fileNameHashed,
//         linkdrive: null,
//       }
//     });
//   } catch (error) {}
// }

function getFileExtension(filename: string): string {
  return filename.split(".").pop()?.toLowerCase() || "";
}
