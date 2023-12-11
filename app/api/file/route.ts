import { NextRequest, NextResponse } from "next/server";
import { existsSync } from "fs";
import fs from "fs/promises";
import path from "path";
import crypto from "crypto";
import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import prisma from "./../../../lib/prisma"

export async function POST(req: NextRequest, res: NextResponse) {
  const session = await getServerSession(authOptions);
  const idUser = session?.user.id;
  
  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 400 });
  }

  const formData = await req.formData();

  const file = formData.get("file") as File;
  const title = formData.get("title") as string;

  if (!title || !file) {
    return NextResponse.json({ message: "Please provide a title and select a file!" }, { status: 400 });
  }

  const fileExtension = getFileExtension(file.name);

  if (fileExtension !== "xlsx" && fileExtension !== "xls") {
    return NextResponse.json({ error: "Only Excel files are allowed" }, { status: 400 });
  }

  const destinationDirPath = path.join(process.cwd(), "public/upload");

  const fileBuffer = await file.arrayBuffer();
  const fileNameHash = crypto.createHash('md5').update(Buffer.from(fileBuffer)).digest('hex');
  

  if (!existsSync(destinationDirPath)) {
    try {
      await fs.mkdir(destinationDirPath, { recursive: true });
    } catch (err) {
      console.error("Error creating directory:", err);
      return NextResponse.json({ error: "Directory creation failed" }, { status: 500 });
    }
  }

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
  const filePath = path.join(destinationDirPath, fileNameHashed);

  try {
    const createdDataPost = await prisma.dataPost.create({
      data: {
        title,
        filename: fileNameHashed,
        uploaderId: session.user.id,
      },
    });  
    await fs.writeFile(filePath, Buffer.from(fileBuffer));

    return NextResponse.json({
      fileName: file.name,
      size: file.size,
      lastModified: new Date(file.lastModified),
    }, { status: 200 });
    
  } catch (err) {
    console.error("Error Upload File:", err);
    return NextResponse.json({ error: "Failed to upload data" }, { status: 500 });
  }
}


function getFileExtension(filename: string): string {
  return filename.split(".").pop()?.toLowerCase() || "";
}


export async function GET() {
  try {

    const getAllDataPost = await prisma.dataPost.findMany({
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