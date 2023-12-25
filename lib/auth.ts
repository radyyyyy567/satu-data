import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "./prisma";
import argon2 from "argon2";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 1200, // 30 minutes in seconds
    updateAge: 60, // Refresh every 60 seconds
  },
  pages: {
    signIn: "/admin/login",
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      credentials: {
        username: {
          label: "username",
          type: "text",
          placeholder: "Isi email anda disini",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          return null;
        }

        const existingUser = await prisma.user.findUnique({
          where: { username: credentials?.username },
        });
        if (!existingUser) {
          return null;
        }

        const passwordMatch = await argon2.verify(
          existingUser.password,
          credentials.password
        );

        if (!passwordMatch) {
          return null;
        }

        const verificationUser = existingUser.verification;

        if (!verificationUser) {
          return null;
        }

        return {
          id: `${existingUser.id}`,
          username: existingUser.username,
          role: existingUser.role,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          id: user.id,
          username: user.username,
          role: user.role,
        };
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id as string,
          username: token.username as string,
          role: token.role as string,
        },
      };
    },
  },
};