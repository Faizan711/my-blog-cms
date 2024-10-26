"use client";

import { ModeToggle } from "./mode-toggle";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { LogOut } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  const { data: session } = useSession();

  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full flex items-center justify-end p-3 gap-x-2">
        <Link href="/admin">
          <Button variant="outline">Admin CMS</Button>
        </Link>

        <Button variant="ghost">
          <GitHubLogoIcon />
        </Button>
        <ModeToggle />
        {session && session.user ? (
          <>
            {/* <p className="text-sky-600">{session.user.name}</p> */}
            <Image
              src={session.user.image ?? ""}
              alt={session.user.name ?? ""}
              className=" rounded-full"
              width={32}
              height={32}
            />
            <Button variant="destructive" onClick={() => signOut()}>
              Logout <LogOut />
            </Button>
          </>
        ) : (
          <Button onClick={() => signIn()}>Sign In</Button>
        )}
      </div>
    </header>
  );
}
