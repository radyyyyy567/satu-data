import { getDataPublish } from "../file/function/Index";
import prisma from "./../../../lib/prisma"
import { NextResponse } from "next/server";


export const dynamic = "force-dynamic";

export async function GET(req: Request) {
    try {
      const result = await getDataPublish();

      if (!result) {
        return NextResponse.json({ message: "Tidak ada data yang di publish"});
      }
      return NextResponse.json(
        {
          allPublishDataPost: result,
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
