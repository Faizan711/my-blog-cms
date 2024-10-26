import { signIn } from "next-auth/react";
import { Button } from "./ui/button";

export function LoginButton() {
  const handleClick = () => {
    signIn("google");
  };
  return <Button onClick={handleClick}>Login with Google</Button>;
}
