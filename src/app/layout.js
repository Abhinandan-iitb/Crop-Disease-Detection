import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { Scan } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import LoginBtn from "@/components/LoginBtn";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Crop Diagnose",
  description: "Diagnose your sick crop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <header className="sticky top-0 w-full h-20 bg-transparent backdrop-blur-md flex items-center justify-between shadow-lg p-2">
            <Link href={"/"} className="flex items-center gap-2">
              <Scan className="w-8 h-8" />
              <h1 className="text-3xl font-bold">Diagnose</h1>
            </Link>
            <LoginBtn />
          </header>
          <main className="flex flex-col gap-2">{children}</main>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
