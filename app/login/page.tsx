import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
    const desc = [
        "Share posts about campus life, events, and experiences",
        "Connect and chat with fellow students from your campus",
        "Post and find lost & found items around campus",
        "Join discussions about courses, professors, and study tips",
        "Discover student-organized events and meetups",
    ]
    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2">
                <div className="hidden md:block bg-gradient-to-b from-[#8B1538] to-[#6B1028]">
                    <div className="flex flex-col gap-y-4 justify-center items-center min-h-[calc(100vh-10rem)]">
                        <div className="rounded-lg w-20 h-20 bg-white flex justify-center items-center">
                            <Image
                                src="/Hat.png"
                                alt="Campus Connect"
                                width={40}
                                height={40}
                            />
                        </div>
                        <h1 className="text-white text-4xl font-bold text-center">Welcome to Campus Connect</h1>
                        <h2 className="text-white text-xl text-center">Join your student community platform</h2>

                        <div className="flex justify-center items-center mt-8">
                            <div className="flex flex-col rounded-lg p-6 bg-white w-auto gap-y-6">
                                <div className="flex items-center space-x-2">
                                    <Image
                                        src="/Check.png"
                                        alt="Features"
                                        width={20}
                                        height={20}
                                    />
                                    <span className="text-[#D4AF37] font-semibold">What You Can Do</span>
                                </div>

                                <span className="text-xs">A student-run community platform by students, for students</span>

                                <div className="flex flex-col items-left space-x-2 gap-y-4">
                                    {desc.map((desc, index) => (
                                        <div key={index} className="flex items-center space-x-2">
                                            <Image
                                                src="/Circle.png"
                                                alt="Features"
                                                width={10}
                                                height={10}
                                            />
                                            <span className="text-[#1E293B] text-xs ">{desc}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex items-center bg-gradient-to-r from-[#8B1538] to-[#6B1028] p-4 rounded-lg">
                                    <div className="rounded w-8 h-8 bg-[#D4AF37]" />
                                    <div className="flex flex-col ml-2">
                                        <span className="text-white text-sm font-semibold">100% Student-Run</span>
                                        <span className="text-[#D4AF37] text-xs">Made by students, for students</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center bg-white">
                    <div className="flex gap-y-6 flex-col justify-center items-center min-h-[calc(100vh-10rem)] px-4 lg:px-50">
                        <h1 className="text-3xl font-bold mb-5">Welcome to Campus Connect</h1>

                        <div className="flex flex-col gap-y-4 w-full">
                            <div className="flex flex-col gap-y-2">
                                <Label className="text-xs text-[#374151]" htmlFor="email">Student email</Label>
                                <Input type="text" id="email" placeholder="Enter your student email" className="w-full" />
                            </div>

                            <div className="flex flex-col gap-y-2">
                                <Label className="text-xs text-[#374151]" htmlFor="email">Password</Label>
                                <Input type="password" id="password" placeholder="Enter your password" className="w-full" />
                            </div>
                        </div>


                        <div className="flex justify-between w-full">
                            <div className="flex flex-row space-x-2">
                                <Input type="checkbox" id="remember" className="w-4 h-4" />
                                <Label className="text-xs text-[#64748B]" htmlFor="remember">Remember me</Label>
                            </div>
                            <Link className="text-xs text-[#8B1538] font-medium" href="/#">Forgot password?</Link>
                        </div>

                        <Button size="lg" className="w-full bg-gradient-to-r from-[#8B1538] to-[#6B1028] hover:brightness-110 text-white font-medium cursor-pointer rounded transition duration-300">
                            Sign In
                        </Button>

                        <div className="flex justify-center items-center space-x-2 w-full">
                            <hr className="flex-grow border-t border-[#E2E8F0] h-px" />
                            <span className="text-xs text-[#64748B] font-medium">Or sign in with</span>
                            <hr className="flex-grow border-t border-[#E2E8F0] h-px" />
                        </div>

                        <div className="flex justify-evenly w-full gap-x-2">
                            <Button className="w-1/2 cursor-pointer" variant="outline" size="lg">
                                <Image
                                    src="/Google.png"
                                    alt="Google"
                                    width={20}
                                    height={20}
                                />
                                <span className="ml-2">Google</span>
                            </Button>
                            <Button className="w-1/2 cursor-pointer" variant="outline" size="lg">
                                <Image
                                    src="/Facebook.png"
                                    alt="Facebook"
                                    width={20}
                                    height={20}
                                />
                                <span className="ml-2">Facebook</span>
                            </Button>
                        </div>

                        <span className="text-xs">New to Campus? <Link className="text-[#8B1538] font-medium" href="/#">Create an account</Link></span>
                    </div>
                </div>
            </div>
        </div>
    );
}