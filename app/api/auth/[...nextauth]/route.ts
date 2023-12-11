import { authOptions } from "@/lib/auth";
import nextAuth from "next-auth";
import { NextRequest, NextResponse } from "next/server";

const handler = nextAuth(authOptions)

export const GET = async (req: NextRequest, res: NextResponse) => {
    // Logic for GET requests
    return handler(req, res);
  };
  
  export const POST = async (req: NextRequest, res: NextResponse) => {
    // Logic for POST requests
    return handler(req, res);
  };