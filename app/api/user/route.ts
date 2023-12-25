import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import argon2 from "argon2";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";


const prisma = new PrismaClient();

interface User {
  username: string,
  email: string,
  password: string,
  confPassword: string,
  role: string,
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    const roleSession = await session?.user.role

    if (!session || roleSession !== "admin") {
    return NextResponse.json({ user: null, message: "Unauthorized" }, { status: 401 });
    }
    const body: User = await req.json();
    const { username, email, password, confPassword, role } = body;

    const registAdmin = await body.role == "admin";
    if(registAdmin){
      return NextResponse.json(
        { user: null, message: "Anda tidak bisa menambah admin lagi" },
        { status: 400 }
      )
    }

    const confPasswordNotMatch = await confPassword != password;
    if(confPasswordNotMatch) {
      return NextResponse.json(
        { user: null, message: "Silahkan cocokkan password dengan Konfirmasi Password!" },
        { status: 400 }
      )
    }
    
    // check jika username sudah ada
    const existingUserByUsername = await prisma.user.findUnique({
      where: { username: username },
    });
    if (existingUserByUsername) {
      return NextResponse.json(
        { user: null, message: "User dengan username ini sudah ada!" },
        { status: 409 }
      );
    }

    const hashedPassword = await argon2.hash(body.password);
    const newUser = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
        role
      },
    });

    const { id: newUserId ,password: newUserPassword, ...rest } = newUser;

    return NextResponse.json({ user: rest, message: "Registrasi Berhasil!" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({message: "Ada sesuatu yang salah" }, {status: 500})
  }
}
 

export async function GET(){
  try {
    const session = await getServerSession(authOptions)
    const roleSession = await session?.user.role

    if (!session || roleSession !== "admin") {
      return NextResponse.json({ user: null, message: "Unauthorized" }, { status: 401 });
    }

    const userData = await prisma.user.findMany({
      select: {
        username: true,
        verification: true,
        role: true
      }
    });

    return NextResponse.json({ user: userData, message: "ok" }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ user: null, message: "Gagal mengambil data user" + error.message }, { status: 500 });
  }
}