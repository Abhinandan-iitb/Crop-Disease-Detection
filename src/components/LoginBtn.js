"use client";
import { signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import Link from "next/link";

const LoginBtn = () => {
  const session = useSession();

  const logout = async () => {
    await signOut();
  };

  if (session.status === "authenticated") {
    return <Button onClick={logout}>Logout</Button>;
  } else
    return (
      <Link href={"/login"}>
        <Button>Login</Button>
      </Link>
    );
};

export default LoginBtn;
