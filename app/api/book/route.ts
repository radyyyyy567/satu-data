import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import prisma from "@/lib/prisma"
import { cookies } from "next/headers";
import axios from "axios";

export async function POST(req: NextRequest, res: NextResponse) {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 400 });
  }

  const formData = await req.formData();

  const file = formData.get("file") as File;
  const title = formData.get("title") as string;
  const yearString = formData.get("year") as string;
const year = parseInt(yearString);

  if (!title || !file) {
    return NextResponse.json({ message: "Please provide a title and select a file!" }, { status: 400 });
  }

  const fileExtension = getFileExtension(file.name);
//   const fileMaxSize = 2 * 1024 * 1024;

//   if (file.size > fileMaxSize) {
//     return NextResponse.json(
//       { message: "File terlalu besar upload menggunakan Link Google Drive" },
//       { status: 400 }
//     );
//   }

  if (fileExtension !== "pdf") {
    return NextResponse.json({ error: "Only PDF files are allowed" }, { status: 400 });
  }
  
  const fileBuffer = await file.arrayBuffer();
  const fileNameHash = crypto.createHash('md5').update(Buffer.from(fileBuffer)).digest('hex');
  
  const currentDate = new Date();
  const dateString = `${currentDate.getFullYear()}${(currentDate.getMonth() + 1)
    .toString()
    .padStart(2, '0')}${currentDate
    .getDate()
    .toString()
    .padStart(2, '0')}-${currentDate
    .getHours()
    .toString()
    .padStart(2, '0')}${currentDate
    .getMinutes()
    .toString()
    .padStart(2, '0')}${currentDate
    .getSeconds()
    .toString()
    .padStart(2, '0')}`;

  const fileNameHashed = `${fileNameHash}-${dateString}.${fileExtension}`
  formData.append("fileName", fileNameHashed);

  try {
    const createdDataPost = await prisma.bookPost.create({
      data: {
        title,     
        filename: fileNameHashed,
        year: year,
        linkdrive: null,
        uploaderId: session.user.id,
      },
    });  
    const cookieStore = cookies()
    const token = cookieStore.get('next-auth.session-token')
    try {
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
      return NextResponse.json({ message: error.response.data }, { status: 500 });
    }


    return NextResponse.json({
      fileName: file.name,
      size: file.size,
      lastModified: new Date(file.lastModified),
    }, { status: 200 });
    
  } catch (err) {
    console.error("Error Upload File:", err);
    return NextResponse.json({ error: "Gagal Upload Buku" }, { status: 500 });
  }
}


function getFileExtension(filename: string): string {
  return filename.split(".").pop()?.toLowerCase() || "";
}


export async function GET() {
  try {

    const getAllDataPost = await prisma.bookPost.findMany({
      include: {
        uploader: {
          select: {
            username: true,
            role: true
          }
        }
      }
    })

    return NextResponse.json({ AllDataPost: getAllDataPost }, { status: 200 })
  } catch (error: any) {
    return NextResponse.json({ message: "Ada kesalahan saat mengambil data" + error.message})
  }
}