// components/layout/Navbar.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black text-white border-b border-[#212429]">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo / Name */}
        <div className="my-manrope-text text-[24px] font-semibold">Suphanat</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-[16px] font-normal">
          <li>
            <Link href="/#home" className="hover:text-gray-300 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/#what-i-do" className="hover:text-gray-300 transition">
              What I do
            </Link>
          </li>
          <li>
            <Link href="/#about" className="hover:text-gray-300 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/#portfolio" className="hover:text-gray-300 transition">
              Portfolio
            </Link>
          </li>
        </ul>

        {/* Social Icons (Desktop) */}
        <div className="hidden md:flex space-x-3">
          <Link
            href="https://github.com/suphanatchanlek30"
            target="_blank"
            className="flex items-center justify-center bg-white text-black h-[35px] w-[60px] rounded-[8px] hover:bg-gray-200 transition"
          >
            <FaGithub size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/suphanat-chanlek-944802305/"
            target="_blank"
            className="flex items-center justify-center bg-white text-black h-[35px] w-[60px] rounded-[8px] hover:bg-gray-200 transition"
          >
            <FaLinkedin size={24} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <FiMenu size={28} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex flex-col">
          <div className="flex items-center justify-between px-4 py-4 border-b border-[#212429]">
            <div className="my-manrope-text text-[24px] font-semibold">Suphanat</div>
            <button
              className="text-white"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <FiX size={32} />
            </button>
          </div>
          <ul className="flex flex-col items-center justify-start flex-1 space-y-8 text-[20px] font-normal mt-20">
            <li>
              <Link href="/#home" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/#what-i-do" onClick={() => setMenuOpen(false)}>
                What I do
              </Link>
            </li>
            <li>
              <Link href="/#about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="/#portfolio" onClick={() => setMenuOpen(false)}>
                Portfolio
              </Link>
            </li>
            <li className="flex space-x-3 pt-4">
              <Link
                href="https://github.com/suphanatchanlek30"
                target="_blank"
                className="flex items-center justify-center bg-white text-black h-[35px] w-[60px] rounded-[8px] hover:bg-gray-200 transition"
              >
                <FaGithub size={24} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/suphanat-chanlek-944802305/"
                target="_blank"
                className="flex items-center justify-center bg-white text-black h-[35px] w-[60px] rounded-[8px] hover:bg-gray-200 transition"
              >
                <FaLinkedin size={24} />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
