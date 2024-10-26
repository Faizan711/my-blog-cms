"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export default function Unauthorized() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-2">401</h1>
          <h2 className="text-2xl font-semibold text-whitesmoke mb-4">
            Access Denied
          </h2>
          <p className="text-gray-600 mb-8">
            You don&apos;t have permission to access this area. Please Logout
            and log in again with an admin account to view this content.
          </p>
          <div className="space-y-4">
            <Button
              onClick={() => signOut({ callbackUrl: "/login", redirect: true })}
              className="inline-block bg-white text-black px-6 py-2 rounded-md  transition-colors"
            >
              Logout
            </Button>
            <br />
            <a
              href="/"
              className="inline-block text-white border border-white px-6 py-2 rounded-md transition-colors"
            >
              Return to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
