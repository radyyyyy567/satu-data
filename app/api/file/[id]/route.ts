import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import fs from 'fs/promises';
import path from 'path'; // Import path module

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    const roleSession = await session?.user.role;

    if (!session || roleSession !== "admin") {
      return NextResponse.json({ user: null, message: "Unauthorized" }, { status: 401 });
    }

    const datapost = await prisma.dataPost.findUnique({
      where: {
        id: params.id,
      },
    });

    if (!datapost) {
      return NextResponse.json({ message: "Data File tidak ditemukan!" }, { status: 404 });
    }

    const filePath = path.join(process.cwd(), 'src', 'upload', `${datapost.filename}`);
    
    try {
      await fs.access(filePath); // This line checks if the file exists
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code !== 'ENOENT') {
        await fs.unlink(filePath)
      }
    }


    await prisma.dataPost.delete({
      where: {
        id: params.id,
      },
    });

    return NextResponse.json({ message: "Data File berhasil dihapus" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Gagal menghapus data file" + error }, { status: 500 });
  }
}
