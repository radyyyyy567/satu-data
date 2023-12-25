import { authOptions } from "@/lib/auth";
import { DataPost } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import prisma from '@/lib/prisma';


export async function POST(req: NextRequest, res: NextResponse) {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 400 });
    }

    const body: DataPost = await req.json();
    const { title, description, category,  linkdrive} = body;

    if(!linkdrive) {
        return NextResponse.json({message: "link tidak terbaca"}, {status: 400})
    }

    try {
      const createdDataPost = await prisma.dataPost.create({
        data: {
          title,
          description,
          category,        
          filename: title + "-file-cloud",
          linkdrive,
          uploaderId: session.user.id,
        },
      });  
      
  
      return NextResponse.json({
        message: "Upload Data Berhasil"
      }, { status: 200 });
      
    } catch (err) {
      console.error("Error Upload File:", err);
      return NextResponse.json({ error: "Failed to upload data" }, { status: 500 });
    }
  }