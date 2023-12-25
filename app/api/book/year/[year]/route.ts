import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";


export async function GET(req: Request) {
  try {
    const year = req.url.split("year/")[1];
    const intYear = parseInt(year);
    const datapost = await prisma.bookPost.findMany({
        where: {
            createdAt: {
              gte: new Date(intYear, 0, 1), // Start of the target year
              lt: new Date(intYear + 1, 0, 1), // Start of the next year
            },
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
