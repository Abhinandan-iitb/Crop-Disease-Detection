"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();

  const login = async (e) => {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res.error) {
        return toast.error(res.error);
      }
      window.location.href = "/diagnose";
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <Card className="w-full max-w-xl bg-gray-200">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Login to Diagnose your sick crop</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={login} className="flex flex-col gap-4">
            <div className="space-y-2">
              <Label>Email</Label>
              <Input type="email" name="email" />
            </div>
            <div className="space-y-2">
              <Label>Password</Label>
              <Input type="password" name="password" />
            </div>
            <Button type="submit">Login</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
