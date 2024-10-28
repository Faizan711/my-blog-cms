import { clsx, type ClassValue } from "clsx";
import { NextAuthOptions } from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";
import { GoogleProfile } from "next-auth/providers/google";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      profile(profile: GoogleProfile) {
        return {
          id: profile.sub.toString(),
          name: ` ${profile.given_name} ${profile.family_name}`,
          image: profile.picture,
          email: profile.email,
          role: profile.role ? profile.role : "user",
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return { ...token, ...user, email: user.email ?? "" };
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = { ...session.user, ...token };
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
    signOut: "/login",
  },
};
