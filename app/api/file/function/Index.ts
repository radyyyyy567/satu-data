import { authOptions } from "@/lib/auth";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function getData() {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      NextResponse.json({ msg: "Authorized" }, { status: 401 });
    }
    const response = await prisma.dataPost.findMany({
      where: {
        uploader: {
          role: session?.user.role,
        },
      },
      include: {
        uploader: {
          select: {
            username: true,
            role: true,
          },
        },
      },
    });
    return response;
  } catch (error: any) {
    return NextResponse.json(
      { msg: "Error fetching data: " + error.message },
      { status: 500 }
    );
  }
}

export async function getDataPublish() {
    try {
      const response = await prisma.dataPost.findMany({
      where: {
        archive: false,
      },
      include: {
        uploader: {
          select: {
            username: true,
            role: true,
          },
        },
      },
    });
      return response;
    } catch (error: any) {
      return NextResponse.json(
        { msg: "Error fetching data: " + error.message },
        { status: 500 }
      );
    }
  }
