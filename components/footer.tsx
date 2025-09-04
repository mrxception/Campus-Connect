import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bottom-0 left-0 right-0 z-10 border-t border-[#E2E8F0] bg-white text-center text-sm text-gray-500 py-4 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
        <span className="text-[#64748B] text-center sm:text-left">
          © 2025 Campus Connect. A student community initiative.
        </span>

        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-10">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-[#64748B]">
            <Link href="/#">Community Guidelines</Link>
            <Link href="/#">Privacy</Link>
            <Link href="/#">Contact Us</Link>
          </div>

          <div className="flex flex-row space-x-2 mt-2 sm:mt-0">
            <Link
              href="/#"
              className="bg-[#F8FAFC] rounded-lg p-2 hover:bg-gray-100 transition-all duration-300 border-[#E2E8F0] border"
            >
              <Image src="/Google.png" alt="Google" width={20} height={20} />
            </Link>

            <Link
              href="/#"
              className="bg-[#F8FAFC] rounded-lg p-2 hover:bg-gray-100 transition-all duration-300 border-[#E2E8F0] border"
            >
              <Image
                src="/Facebook.png"
                alt="Facebook"
                width={20}
                height={20}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
