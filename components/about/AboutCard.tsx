"use client";

type AboutCardProps = {
  title?: string;
  subtitle?: string;
  badge?: string;
  email?: boolean;
  image?: string;
  children?: React.ReactNode;
};

import Image from "next/image";
import { IoMailUnreadOutline } from "react-icons/io5";

export default function AboutCard({
  title,
  subtitle,
  badge,
  email,
  image,
  children,
}: AboutCardProps) {
  return (
    <div className="bg-[#000000] rounded-xl px-4 py-4 md:px-6 md:py-5 border border-[#FFFFFF] hover:border-gray-400 transition shadow-sm w-full">
      {email ? (
        // Email Card
        <div className="flex items-center gap-4 md:gap-5 text-left">
          <IoMailUnreadOutline className="text-3xl md:text-[38px] text-white" />
          <div className="flex flex-col">
            <span className="text-xs md:text-sm text-[#929CA5]">Email Me</span>
            <span className="text-white text-sm md:text-lg font-normal break-words">
              {subtitle}
            </span>
          </div>
        </div>
      ) : image ? (
        // Experience Card
        <div className="flex flex-row items-center gap-4 text-left">
          {/* โลโก้ชิดซ้าย + ชัด */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <Image
              src={image}
              alt={title || "Company Logo"}
              width={50}   // ใช้ขนาดใหญ่พอ (เช่น 80px หรือไฟล์จริง)
              height={50}
              unoptimized   // โหลดภาพไฟล์จริงไม่บีบ
              className="object-contain"
            />
          </div>

          {/* เนื้อหา */}
          <div className="flex flex-col flex-1 gap-2">
            {/* บรรทัดบน: title + badge */}
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="text-[#929CA5] text-xs md:text-sm font-normal">
                {title}
              </span>
              {badge && (
                <span className="px-2 py-1 md:px-3 md:py-1 rounded-md bg-[#191919] text-xs md:text-sm text-white whitespace-nowrap">
                  {badge}
                </span>
              )}
            </div>
            {/* บรรทัดล่าง: subtitle */}
            <span className="text-white text-sm md:text-base font-medium">
              {subtitle}
            </span>
          </div>
        </div>
      ) : (
        // Education Card
        <div className="flex flex-col gap-2 text-left">
          <div className="flex items-center justify-between">
            <span className="text-[#929CA5] text-xs md:text-sm font-normal">
              {title}
            </span>
            {badge && (
              <span className="px-2 py-1 md:px-3 md:py-1 rounded-md bg-[#191919] text-xs md:text-sm text-white">
                {badge}
              </span>
            )}
          </div>
          <span className="text-white text-base md:text-lg font-medium">
            {subtitle}
          </span>
        </div>
      )}
      {children}
    </div>
  );
}
