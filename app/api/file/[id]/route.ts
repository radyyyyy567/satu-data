import { NextResponse } from "next/server";
import prisma from '@/lib/prisma';


export async function GET(req: Request) {
  try {
    const id = req.url.split("file/")[1];
    const getDataPostById = await prisma.dataPost.findUnique({
        where: {
            id: id
        },
      include: {
        uploader: {
          select: {
            username: true,
            role: true
          }
        }
      }
    })

    if(!getDataPostById) {
      return NextResponse.json({ message: "tida ditemukan id"}, {status: 404})
    } 
    

    return NextResponse.json({ dataPostById: getDataPostById }, { status: 200 })
  } catch (error: any) {
    return NextResponse.json({ message: "Ada kesalahan saat mengambil data" + error.message})
  }
}