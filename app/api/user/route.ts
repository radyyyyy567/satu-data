import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { User } from "@prisma/client";
import argon2 from "argon2";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body: User = await req.json();
    const { username, email, password, role } = body;


    // check jika email sudah ada
    const existingUserByEmail = await prisma.user.findUnique({
      where: { email: email },
    });
    if (existingUserByEmail) {
      return NextResponse.json(
        { user: null, message: "User dengan email ini sudah ada!" },
        { status: 409 }
      );
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
        email,
        password: hashedPassword,
        role
      },
    });

    const { password: newUserPassword, ...rest } = newUser;

    return NextResponse.json({ user: rest, message: "Registrasi Berhasil!" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({message: "Ada sesuatu yang salah" }, {status: 500})
  }
}
