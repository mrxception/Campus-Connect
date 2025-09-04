"use client"

import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white z-10 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] py-2 px-4 sm:px-6 lg:px-8 border-b">
      <div className="mx-auto max-w-7xl flex justify-between items-center">
        <div className="flex justify-center items-center space-x-2">
          <Image src="/logo.png" alt="Campus Connect" width={40} height={40} />
          <div className="flex flex-col justify-center">
            <span className="text-[#1E293B] font-bold">Campus Connect</span>
            <span className="text-xs text-[#8B1538] font-semibold">Student Community</span>
          </div>
        </div>

        <div className="hidden md:flex justify-center items-center space-x-4 text-[#64748B] font-medium">
          <Link href="/#">Home</Link>
          <Link href="/#">Forum</Link>
          <Link href="/#">Lost & Found</Link>
          <Link href="/#">About</Link>
        </div>

        <div className="hidden md:flex justify-center items-center space-x-2">
          <Button variant="default" className="text-white font-medium border-[#8B1538]" asChild>
            <Link href="/login">Sign In</Link>
          </Button>

          <Button variant="outline" className="text-[#8B1538] font-medium border-[#8B1538]" asChild>
            <Link href="/login">Join Community</Link>
          </Button>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#64748B] focus:outline-none"
          >
            {isOpen ? (
              <span className="text-2xl">&#10005;</span>
            ) : (
              <span className="text-2xl">&#9776;</span> 
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-2 flex flex-col items-center space-y-2 text-[#64748B] font-medium">
          <Link href="/#">Home</Link>
          <Link href="/#">Forum</Link>
          <Link href="/#">Lost & Found</Link>
          <Link href="/#">About</Link>
          <Button variant="outline" className="text-[#8B1538] font-medium border-[#8B1538]" asChild>
            <Link href="/login">Join Community</Link>
          </Button>
        </div>
      )}
    </header>
  );
}
