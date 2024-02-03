import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PATCH(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const id = req.url.split("publish/")[1];
    const archiveDataPost = await prisma.dataPost.update({
      where: {
        id: id,
        archive: true,
        uploader: {
          role: session?.user.role,
        },
      },
      data: {
        archive: false,
      },
    });

    if (!archiveDataPost) {
      return NextResponse.json({ message: "Tidak menemukan data OPD anda" }, { status: 404 });
    }

    return NextResponse.json(
      {
        status: "Publikasi",
        message: "Data Berhasil di Publikasi",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Gagal Mengpublikasikan" + error },
      { status: 500 }
    );
  }
}
