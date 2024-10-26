"use client";

import { LoginButton } from "@/components/login-button";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    router.push("/");
  }

  return (
    <div className="flex flex-col min-h-screen w-full items-center justify-center">
      This is my login page
      <LoginButton />
    </div>
  );
}
