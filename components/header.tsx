import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 bg-white z-10 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] py-2 px-4 sm:px-6 lg:px-8 border-b">
      <div className="mx-auto max-w-7xl flex justify-between">
        <div className="flex justify-center items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Campus Connect"
            width={40}
            height={40}
          />
          <div className="flex flex-col">
            <span className="text-[#1E293B] font-bold">Campus Connect</span>
            <span className="text-xs text-[#8B1538] font-semibold">Student Community</span>
          </div>
        </div>

        <div className="flex justify-center items-center space-x-4 text-[#64748B] font-medium">
          <Link href="/#">Home</Link>
          <Link href="/#">Forum</Link>
          <Link href="/#">Lost & Found</Link>
          <Link href="/#">About</Link>
        </div>

        <div className="flex justify-center items-center space-x-2">
          <Button variant="outline" className="text-[#8B1538] font-medium border-[#8B1538]" asChild>
            <Link href="/login">Join Community</Link>
          </Button>
        </div>
      </div>
      
    </header>
  );
}