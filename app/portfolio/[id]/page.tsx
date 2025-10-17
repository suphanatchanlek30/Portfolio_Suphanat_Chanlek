// app/portfolio/[id]/page.tsx
"use client";

import portfolioData from "@/instances/portfolio-data";
import FooterSection from "@/sections/footer-section/page";
import NavbarSection from "@/sections/navbar-section/page";
import { notFound } from "next/navigation";
import React, { use } from "react"; 
import Image from "next/image"; // ใช้ Image ของ Next.js
import Link from "next/link";

type Props = {
  params: Promise<{ id: string }>;
};

export default function PortfolioDetail({ params }: Props) {
  const { id } = use(params); // unwrap params

  const project = portfolioData.find((p) => p.id === id);
  if (!project) return notFound();

  return (
    <div>
      <NavbarSection />

      <section className="bg-black text-white py-16 px-6 min-h-screen pt-28">
        <div className="container mx-auto max-w-4xl">
          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            {project.title}
          </h1>

          {/* Project Image */}
          <div className="w-full flex justify-center mb-8">
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={800}
              className="rounded-lg object-contain h-auto w-auto max-w-full"
              priority // ทำให้โหลดเร็วขึ้น
            />
          </div>

          {/* Description */}
          <p className="text-[#929CA5] mb-8 text-center">
            {project.description}
          </p>

          {/* Tech Stack */}
          <h2 className="text-lg font-semibold mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-4 mb-12">
            {project.tech.map((t, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-3 py-2 bg-[#191919] rounded-lg border border-[#2a2a2a]"
              >
                <t.icon className="text-xl" />
                <span>{t.label}</span>
              </div>
            ))}
          </div>

          {/* Back Button (optional) */}
          {/* 
          <button
            onClick={() => window.history.back()}
            className="px-5 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition"
          >
            ← Back
          </button> 
          */}
        </div>

        {/* Button Link (show only if linkURL exists) */}
        {(() => {
          const link = (project.linkURL ?? "").trim();
          if (!link) return null;
          const isExternal = /^https?:\/\//.test(link);
          return (
            <div className="flex justify-center mt-8">
              <Link
                href={link}
                className="px-5 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition"
                {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                Link to Project
              </Link>
            </div>
          );
        })()}
      </section>

      <FooterSection />
    </div>
  );
}
