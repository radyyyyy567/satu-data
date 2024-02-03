import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import prisma from "./../../../lib/prisma"
import axios from "axios";
import { cookies } from "next/headers";
import { getData } from "./function/Index";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json({message: "Masalah Autentikasi"}, {status: 401});
    }

    const formData = await req.formData();

    const file = formData.get('file') as File;
    const realFile = formData.get('realfile') as File | undefined;
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const category = formData.get('category') as string;
    const dateAt = formData.get('dateat') as string;

    if (!title || !description || !category || !file) {
      return NextResponse.json({ message: "Tolong kirimkan data yang ditentukan" }, {status: 400})
    }

    const fileExtension = getFileExtension(file.name);
    const realFileExtension = realFile ? getFileExtension(realFile.name) : undefined;
    const fileMaxSize = 2 * 1024 * 1024;

    if (realFile && realFile.size > fileMaxSize) {
      return NextResponse.json({ message: "Ukuran file harus dibawah 2 MB" }, {status: 400})
    }

    if (fileExtension !== 'xlsx' && fileExtension !== 'xls') {
      return NextResponse.json({ message: "Hanya file excel yang boleh disimpan" }, {status: 400})
    }

    const fileBuffer = await file.arrayBuffer();
    const realFileBuffer = realFile ? await realFile.arrayBuffer() : undefined;
    const fileNameHash = crypto.createHash('md5').update(Buffer.from(fileBuffer)).digest('hex');
    const realFileNameHash = realFile ? crypto.createHash('md5').update(Buffer.from(realFileBuffer!)).digest('hex') : undefined;

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

    const fileNameHashed = `${fileNameHash}-${dateString}.${fileExtension}`;
    const realFileNameHashed = realFile ? `${realFileNameHash}-${dateString}.${realFileExtension}` : undefined;
    
    formData.append('fileName', fileNameHashed);
    if (realFile) {
      formData.append('realFileName', realFileNameHashed!);
    }

    const createdDataPost = await prisma.dataPost.create({
      data: {
        title,
        description,
        category,
        dataAt: dateAt,
        archive: false,
        filename: fileNameHashed,
        realfilename: realFileNameHashed || null,
        uploaderId: session.user.id,
      },
    });

    if (!createdDataPost) {
      return NextResponse.json({ message: "Data gagal disimpan" }, {status: 599})
    }

    console.log(createdDataPost)
    const cookieStore = cookies();
    const token = cookieStore.get('next-auth.session-token');

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/products`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `${token?.value}`,
        },
      });
    } catch (error: any) {
      const errorMessage = error.response?.data || 'Unknown error occurred';
      console.log(errorMessage);
      return NextResponse.json({ message: "Gagal menyimpan file tautan atau file komponen data" }, {status: 400})
    }

    return NextResponse.json({ message: "Data berhasil disimpan" }, {status: 201})
  } catch (err) {
    console.error('Error Upload File:', err);
    return NextResponse.json({ message: "Data gagal disimpan" }, {status: 500})
  }
}



function getFileExtension(filename: string): string {
  return filename.split(".").pop()?.toLowerCase() || "";
}


export async function GET() {
  try {
    const result = await getData();

    return NextResponse.json({ AllDataPost: result, message: "Data Berhasil di Dapat" },{ status: 200})
  } catch (error: any) {
    return NextResponse.json({ message: "Ada kesalahan saat mengambil data" + error.message})
  }
}