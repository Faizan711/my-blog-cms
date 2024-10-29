"use client";

import { LoginButton } from "@/components/login-button";
import { Card } from "@/components/ui/card";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    router.push("/");
  }

  return (
    <div className="flex flex-col min-h-screen w-full items-center justify-center  bg-gray-800">
      <Card className="w-full flex flex-col gap-y-4 items-center justify-center max-w-md p-8 bg-transparent bg-opacity-20  rounded-xl shadow-2xl transform transition-all hover:scale-105">
        Welcome to Faizan Writes
        <LoginButton />
      </Card>
    </div>
  );
}
