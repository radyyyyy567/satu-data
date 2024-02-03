import { NextResponse } from "next/server";
import prisma from "./../../../../lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import argon2 from "argon2";

interface User {
  username: string;
  email: string;
  password: string;
  confPassword: string;
  role: string;
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = req.url.split("user/")[1];
  const session = await getServerSession(authOptions);
  if (session?.user.role != "admin") {
    return NextResponse.json({ message: "Authorized!" }, { status: 401 });
  }
  try {
    const getUser = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    if (!getUser) {
      return NextResponse.json(
        { message: "Data user not Found!" },
        { status: 404 }
      );
    }

    const deleteUser = await prisma.user.delete({
      where: {
        id: id,
      },
    });
    return NextResponse.json(
      { message: "User berhasil dihapus!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "User gagal dihapus" + error });
  }
}

export async function PATCH(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const id = req.url.split("user/")[1];
    const selectedUser = await prisma.user.findUnique({
      where: {
        id: id,
      },
      select: {
        username: true,
        role: true,
      }
    });
    if (!selectedUser) {
      return NextResponse.json({ message: "user tidak ditemukan"}, {status: 404});
    }
    if(session.user.role != "admin"){
      if(session.user.role != selectedUser.role){
        return NextResponse.json({ message: "Kamu tidak bisa mengubah akun ini"}, {status: 401});
      }   
    } 

    const body: User = await req.json();
    const { username, email, password, confPassword, role } = body;

    const existingUserByUsername = await prisma.user.findUnique({
      where: { username: username },
    });

    const confPasswordNotMatch = confPassword != password;

    
    if (existingUserByUsername) {
      return NextResponse.json(
        { user: null, message: "User dengan username ini sudah ada!" },
        { status: 409 }
      );
    }
    if (confPasswordNotMatch) {
      return NextResponse.json(
        {
          user: null,
          message: "Silahkan cocokkan password dengan Konfirmasi Password!",
        },
        { status: 400 }
      );
    }
    const hashedPassword = await argon2.hash(body.password);
    try {
      const updateUser = await prisma.user.update({
        where: { id: id },
        data: {
          username,
          password: hashedPassword,
          role,
        },
      });

      return NextResponse.json(
        {
          message: "Data akun berhasil di ubah",
        },
        { status: 200 }
      );
    } catch (error: any) {
      return NextResponse.json(
        { message: error.response.data },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Data akun gagal di ubah" + error },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);
  
   if(!session){
      return NextResponse.json({ message: "Unauthorized" }, { status: 400 });
    }
    const id = req.url.split("user/")[1];
    const selectedUser = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    if (!selectedUser) {
      NextResponse.json({ message: "User tidak ditemukan" }, {status: 404});
    }

    return NextResponse.json(
      { selectedUser: selectedUser, message: "Data User berhasil diambil" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Gagal mengambil data User" + error },
      { status: 500 }
    );
  }
}