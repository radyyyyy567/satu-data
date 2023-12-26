import { NextRequest, NextResponse } from "next/server";
import { existsSync } from "fs";
import fs from "fs/promises";
import path from "path";
import crypto from "crypto";
import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import prisma from '@/lib/prisma';


export async function GET(req: Request) {
  try {
    const id = req.url.split("id/")[1];
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

    return NextResponse.json({ dataPostById: getDataPostById }, { status: 200 })
  } catch (error: any) {
    return NextResponse.json({ message: "Ada kesalahan saat mengambil data" + error.message})
  }
}