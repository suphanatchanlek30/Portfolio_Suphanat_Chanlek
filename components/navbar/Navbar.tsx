// components/layout/Navbar.tsx
"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
    return (
        <nav className="mx-auto w-full bg-black text-white py-4 border-b border-[#212429]">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo / Name */}
                <div className="my-manrope-text text-[24px] font-semibold">Suphanat</div>

                {/* Menu */}
                <ul className="flex space-x-8 text-[16px] font-normal">
                    <li>
                        <Link href="#home" className="hover:text-gray-300 transition">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="#what-i-do" className="hover:text-gray-300 transition">
                            What I do
                        </Link>
                    </li>
                    <li>
                        <Link href="#about" className="hover:text-gray-300 transition">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="#portfolio" className="hover:text-gray-300 transition">
                            Portfolio
                        </Link>
                    </li>
                </ul>

                {/* Social Icons */}
                <div className="flex space-x-3">
                    <Link
                        href="https://github.com/your-username"
                        target="_blank"
                        className="flex items-center justify-center bg-white text-black h-[35px] w-[60px] rounded-[8px] hover:bg-gray-200 transition"
                    >
                        <FaGithub size={24} />
                    </Link>
                    <Link
                        href="https://linkedin.com/in/your-username"
                        target="_blank"
                        className="flex items-center justify-center bg-white text-black h-[35px] w-[60px] rounded-[8px] hover:bg-gray-200 transition"
                    >
                        <FaLinkedin size={24} />
                    </Link>
                </div>
            </div>
        </nav>
    );
}
