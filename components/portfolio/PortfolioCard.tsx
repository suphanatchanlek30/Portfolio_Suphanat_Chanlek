"use client";

import Link from "next/link";
import { PortfolioItem } from "@/instances/portfolio-data";
import { FiCode } from "react-icons/fi";
import Image from "next/image";

type Props = { item: PortfolioItem };

export default function PortfolioCard({ item }: Props) {
  return (
    <div className="bg-[#000000] rounded-xl border border-[#2a2a2a] p-6 flex flex-col justify-between w-[300px] flex-shrink-0">
      {/* Project Image */}
      <div className="w-full h-40 mb-4 relative">
        <Image
          src={item.image}
          alt={item.title}
          fill          // ทำให้เต็มพื้นที่ container
          sizes="300px"
          className="object-cover rounded-lg"
          loading="lazy"
        />
      </div>

      {/* Title */}
      <h3 className="text-white text-lg font-semibold mb-2">{item.title}</h3>

      {/* Description */}
      <p className="text-[#7A7B85] text-sm mb-4 line-clamp-3">
        {item.description}
      </p>

      {/* ปุ่ม More */}
      <div className="flex justify-center mt-4">
        <Link
          href={`/portfolio/${item.id}`}
          className="w-[96.45px] h-[34.5px] flex items-center justify-center gap-2 border border-[#1A1C29] rounded-lg text-sm text-[#CFD3DA] hover:bg-[#191919] transition"
        >
          <FiCode className="text-lg" />
          More
        </Link>
      </div>
    </div>
  );
}
