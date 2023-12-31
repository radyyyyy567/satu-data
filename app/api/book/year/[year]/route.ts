import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";


export async function GET(req: Request) {
  try {
    const year = req.url.split("year/")[1];
    const intYear = parseInt(year);
    const datapost = await prisma.bookPost.findMany({
        where: {
            year: intYear,
          },
    });

    console.log(datapost)

    if(!datapost) {
        NextResponse.json({message: "data yang dicari tidak ada" })
    }

    return NextResponse.json({ BookPostByYear: datapost, message: "Data File berhasil diambil" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Gagal mengambil data" + error }, { status: 500 });
  }
}
