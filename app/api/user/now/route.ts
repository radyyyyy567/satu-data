import { authOptions } from "@/lib/auth";
import { stat } from "fs";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

interface Now {

}

export async function GET(req: Request){
    try {
        const session = await getServerSession(authOptions);
        const role = session?.user?.role;
        const username = session?.user?.username;
        const now = { role, username };

        return NextResponse.json({now: now}, {status:200})
    } catch (error) {
        return NextResponse.json({message: "Authorized"}, {status: 402})
    }
}