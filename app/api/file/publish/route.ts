import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getDataPublish } from "../function/Index";

export async function GET(req: Request) {
    try {
      const result = await getDataPublish();
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
