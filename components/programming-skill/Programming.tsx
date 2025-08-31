"use client";

import programmingData from "@/instances/programming-data";
import SkillRow from "./SkillRow";
import { motion } from "framer-motion";

export default function Programming() {
  const { title, subtitle, skills } = programmingData;

  const third = Math.ceil(skills.length / 3);
  const row1 = skills.slice(0, third);
  const row2 = skills.slice(third, third * 2);
  const row3 = skills.slice(third * 2);

  return (
    <section className="relative bg-black text-white py-12 md:py-24 px-6 overflow-hidden">
      {/* ไฟมุมตกแต่ง */}
      <div className="absolute top-0 left-0 w-40 h-40 md:w-72 md:h-72 bg-gray-500/30 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-40 h-40 md:w-72 md:h-72 bg-gray-500/30 blur-3xl rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-32 h-32 md:w-56 md:h-56 bg-gray-500/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Title */}
        <div className="flex justify-center mb-3 md:mb-4">
          <span className="px-4 md:px-5 py-1 rounded-[8px] bg-[#191919] text-white text-xs md:text-sm">
            Programming Skill
          </span>
        </div>
        <h1 className="text-base md:text-xl font-normal text-center mb-8 md:mb-12 text-[#929CA5]">
          {subtitle}
        </h1>

        {/* Card with glowing border light */}
        <div className="relative rounded-xl overflow-hidden p-[2px]">
          {/* Border ปกติ */}
          <div className="absolute inset-0 rounded-xl border border-[#2a2a2a]" />

          {/* หัวไฟลูกกลมวิ่งรอบกรอบ */}
          <motion.div
            className="absolute inset-0 rounded-xl border-2 border-transparent"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          >
            <div className="absolute -top-2 left-1/2 w-12 h-12 rounded-full bg-white blur-md shadow-[0_0_20px_8px_rgba(255,255,255,0.8)]" />
          </motion.div>

          {/* เนื้อหาหลัก */}
          <div className="relative bg-[#0A0A0A] rounded-xl shadow-lg px-6 py-8 md:px-10 md:py-12 space-y-6">
            <h2 className="text-lg md:text-xl font-semibold mb-2 text-white">
              {title}
            </h2>
            <p className="text-sm md:text-base text-[#929CA5] mb-6">
              {subtitle}
            </p>

            {/* Rows */}
            <div className="space-y-4">
              <SkillRow skills={row1} direction="right" />
              <SkillRow skills={row2} direction="left" />
              <SkillRow skills={row3} direction="right" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
