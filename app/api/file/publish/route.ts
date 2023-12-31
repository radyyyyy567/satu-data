import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
      const allPublishDataPost = await prisma.dataPost.findMany({
        where: { archive: false },
        include: {
          uploader: {
            select: {
              role: true
            }
          }
        }
      });

      if (!allPublishDataPost) {
        return NextResponse.json({ message: "Tidak ada data yang di publish" });
      }
      return NextResponse.json(
        {
          allPublishDataPost: allPublishDataPost,
          message: "Data Publikasi Berhasil diambil",
        },
        { status: 200 }
      );
  } catch (error) {
    return NextResponse.json(
      { message: "Gagal mengubah buku" + error },
      { status: 500 }
    );
  }
}
