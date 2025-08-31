// components/about/AboutCard.tsx
"use client";

type AboutCardProps = {
  title?: string;
  subtitle?: string;
  badge?: string;
  email?: boolean;
  children?: React.ReactNode;
};

import { IoMailUnreadOutline } from "react-icons/io5";

export default function AboutCard({
  title,
  subtitle,
  badge,
  email,
  children,
}: AboutCardProps) {
  return (
    <div className="bg-[#000000] rounded-xl px-4 py-4 md:px-6 md:py-5 border border-[#FFFFFF] hover:border-gray-400 transition shadow-sm flex flex-col w-full">
      {email ? (
        <div className="flex items-center gap-4 md:gap-5 text-left">
          {/* Icon */}
          <div className="text-white flex items-center justify-center">
            <span className="text-3xl md:text-[38px]">
              <IoMailUnreadOutline />
            </span>
          </div>
          {/* Email Text */}
          <div className="flex flex-col">
            <span className="text-xs md:text-sm text-[#929CA5]">Email Me</span>
            <span className="text-white text-sm md:text-lg font-normal break-words">
              {subtitle}
            </span>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-2 text-left">
          {/* Degree */}
          <span className="text-[#929CA5] text-xs md:text-sm font-normal">
            {title}
          </span>
          {/* University + Badge */}
          <div className="flex flex-row sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-2">
            <span className="text-white text-base md:text-xl font-medium">
              {subtitle}
            </span>
            {badge && (
              <span className="px-2 py-1 md:px-3 md:py-1 rounded-md bg-[#191919] text-xs md:text-sm text-white w-fit sm:self-auto">
                {badge}
              </span>
            )}
          </div>
        </div>
      )}
      {children}
    </div>
  );
}
