import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center p-2 min-h-screen">
      <div className="flex md:flex-row flex-col items-center pt-10 sm:pt-0">
        <div className="flex flex-col gap-4 px-6">
          <h3 className="text-3xl font-semibold">Diagnose your sick crop</h3>
          <p className="text-black/65">
            Take a photo of your sick crop and get a free diagnosis and
            treatment suggestions - all in a few seconds!
          </p>
          <Link href={"/diagnose"}>
            <Button>Get a free diagnosis</Button>
          </Link>
        </div>
        <video autoPlay loop className="h-[calc(100vh-96px)] -mt-0 md:-mt-20">
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
