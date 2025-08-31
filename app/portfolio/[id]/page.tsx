"use client";

import portfolioData from "@/instances/portfolio-data";
import FooterSection from "@/sections/footer-section/page";
import NavbarSection from "@/sections/navbar-section/page";
import { notFound, useRouter } from "next/navigation";
import React, { use } from "react"; // 👈 import use

type Props = {
  params: Promise<{ id: string }>;
};

export default function PortfolioDetail({ params }: Props) {
  const router = useRouter();
  const { id } = use(params); // 👈 unwrap params ด้วย use()

  const project = portfolioData.find((p) => p.id === id);
  if (!project) return notFound();

  return (
    <div>
      <NavbarSection />

      <section className="bg-black text-white py-16 px-6 min-h-screen pt-25 md:pt-28 lg:pt-30 ">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h1>

          <img
            src={project.image}
            alt={project.title}
            className="max-w-full h-auto rounded-lg mb-6 object-contain mx-auto"
          />

          <p className="text-[#929CA5] mb-6">{project.description}</p>

          <h2 className="text-lg font-semibold mb-3">Tech Stack</h2>
          <div className="flex flex-wrap gap-4 mb-10">
            {project.tech.map((t, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-2 py-1 bg-[#191919] rounded-lg border border-[#2a2a2a]"
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
