import NextAuth from "next-auth";

declare module "next-auth" {
    interface User {
        id:  string,
        username: string,
        role: string,
        token?: string
    }
    interface Session {
        user: {
            id: string,
            address: string,
            username: string,
            role: string,
            token: string
        },
        token: {
            id:  string,
            username: string,
            role: string,
            token: string
        }
    }
}