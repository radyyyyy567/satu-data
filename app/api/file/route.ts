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
  const idUser = await session?.user.id;
  
  if (!idUser) {
    console.log(session);
  }
  if (!session) {
    return NextResponse.json({message: "Unauthorized"}, { status: 400 });
  }

  const formData = await req.formData();
  console.log(formData);

  const file = formData.get("file") as File;
  const title = formData.get("title") as string;

  if (!title || !file) {
    return NextResponse.json({message: "Silahkan isi judul atau Pilih File terlebih dahulu!"}, {status: 400});
  }

  const fileExtension = getFileExtension(file.name);

  if (fileExtension !== "xlsx" && fileExtension !== "xls") {
    return NextResponse.json({ error: "Only Excel files are allowed" }, { status: 400 });
  }

  console.log(`File name: ${file.name}`);
  console.log(`Content-Length: ${file.size}`);

  const destinationDirPath = path.join(process.cwd(), "public/upload");
  console.log(destinationDirPath);

  const fileArrayBuffer = await file.arrayBuffer();

  // Encrypt the file using a symmetric encryption algorithm like AES
  const algorithm = "aes-256-cbc";
  const encryptionKey = crypto.randomBytes(32); // 32 bytes for AES-256
  const iv = crypto.randomBytes(16); // Initialization vector for AES

  const cipher = crypto.createCipheriv(algorithm, encryptionKey, iv);
  const encryptedBuffer = Buffer.concat([cipher.update(Buffer.from(fileArrayBuffer)), cipher.final()]);

  if (!existsSync(destinationDirPath)) {
    try {
      await fs.mkdir(destinationDirPath, { recursive: true });
    } catch (err) {
      console.error("Error creating directory:", err);
      // Handle directory creation error
      return NextResponse.json({ error: "Directory creation failed" }, { status: 500 });
    }
  }

  const fileHash = crypto.createHash("sha256").update(file.name).digest("hex");
  const hashedFileName = `${fileHash}.xlsx`; // Use hash with .xlsx extension
  const hashedFilePath = path.join(destinationDirPath, hashedFileName);

  try {
    const createdDataPost = await prisma.dataPost.create({
      data: {
        title,
        filename: hashedFileName,
        uploaderId: session.user.id,
      },
    });  
    await fs.writeFile(hashedFilePath, encryptedBuffer);

    return NextResponse.json({
      fileName: hashedFileName, // Return the hashed file name with .xlsx extension
      size: file.size,
      lastModified: new Date(file.lastModified),
    }, {status: 200});
    
  } catch (err) {
    console.error("Error Upload File:", err);
    return NextResponse.json({ error: "Gagal untuk Menupload Data" }, { status: 500 });
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