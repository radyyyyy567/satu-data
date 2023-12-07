import { authOptions } from "@/lib/auth";
import nextAuth from "next-auth";
import { NextApiRequest, NextApiResponse } from 'next';

const handler = nextAuth(authOptions)

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
    // Logic for GET requests
    return handler(req, res);
  };
  
  export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
    // Logic for POST requests
    return handler(req, res);
  };