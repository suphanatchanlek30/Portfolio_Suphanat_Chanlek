// app/competition/[id]/page.tsx
"use client";

// ===============================
// CompetitionDetail: แสดงรายละเอียดการแข่งขัน
// ===============================
import competitionData from "@/instances/competition-data";
import FooterSection from "@/sections/footer-section/page";
import NavbarSection from "@/sections/navbar-section/page";
import { notFound } from "next/navigation";
import React, { use } from "react";
import Image from "next/image";

// Props สำหรับ dynamic route
// params: { id: string }
type Props = {
  params: Promise<{ id: string }>;
};

export default function CompetitionDetail({ params }: Props) {
  const { id } = use(params); // unwrap params
  const competition = competitionData.find((c) => c.id === id);
  if (!competition) return notFound();

  return (
    <div>
      <NavbarSection />
      <section className="bg-black text-white py-16 px-6 min-h-screen pt-28">
        <div className="container mx-auto max-w-4xl">
          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            {competition.title}
          </h1>
          {/* Competition Image */}
          <div className="w-full flex justify-center mb-6">
            <Image
              src={competition.image}
              alt={competition.title}
              width={1200}
              height={800}
              className="rounded-lg object-contain h-auto w-auto max-w-full"
              priority
            />
          </div>
          {/* Description */}
          <p className="text-[#929CA5] mb-8 text-center">
            {competition.description}
          </p>
          {/* Acquired skills */}
          <h2 className="text-lg font-semibold mb-4">Acquired skills</h2>
          <div className="flex flex-wrap gap-4 mb-12">
            {competition.acquiredSkills.map((t, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-3 py-2 bg-[#191919] rounded-lg border border-[#2a2a2a]"
              >
                <t.icon className="text-xl" />
                <span>{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FooterSection />
    </div>
  );
}