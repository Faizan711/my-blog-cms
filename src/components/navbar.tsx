import { ModeToggle } from "./mode-toggle";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full flex items-center justify-end p-3 gap-x-2">
        <Button variant="ghost">
          <GitHubLogoIcon />
        </Button>
        <ModeToggle />
        <Button>Login</Button>
      </div>
    </header>
  );
}
