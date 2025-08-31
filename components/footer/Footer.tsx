"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white border-t border-[#212429]">
      <div className="container mx-auto px-4 py-4">
        {/* Desktop */}
        <div className="hidden md:flex items-center justify-between">
          {/* Left: Logo */}
          <div className="my-manrope-text text-lg font-semibold">Suphanat</div>

          {/* Center: Copyright */}
          <div className="text-xs text-[#444444]">
            Copyright 2025 © SuphanatChanlek
          </div>

          {/* Right: Menu */}
          <ul className="flex space-x-8 text-sm font-normal">
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
        </div>

        {/* Mobile */}
        <div className="md:hidden flex flex-col items-center space-y-3">
          {/* Logo + Menu ในแถวเดียวกัน */}
          <ul className="flex flex-wrap justify-center gap-5 text-sm font-normal items-center">
            <li className="my-manrope-text text-base font-semibold text-white">
              Suphanat
            </li>
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

          {/* Copyright */}
          <div className="text-xs text-gray-400 text-center">
            Copyright 2025 © SuphanatChanlek
          </div>
        </div>
      </div>
    </footer>
  );
}
