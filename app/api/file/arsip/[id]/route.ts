import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PATCH(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      NextResponse.json({ message: "authorized" }, { status: 401 });
    }
    const id = req.url.split("arsip/")[1];
    const archiveDataPost = await prisma.dataPost.update({
      where: {
        id: id,
        archive: false,
        uploader: {
          role: session?.user.role,
        },
      },
      data: {
        archive: true,
      },
    });

    if(!archiveDataPost){
        return NextResponse.json({message: "Tidak menemukan data OPD anda"})
    }
    return NextResponse.json(
      {
        status: "Arsip",
        message: "Data Berhasil di Arsipkan",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Gagal Mengarsipkan" + error },
      { status: 500 }
    );
  }
}
