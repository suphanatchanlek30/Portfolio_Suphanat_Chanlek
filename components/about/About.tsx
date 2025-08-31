// components/about/About.tsx
"use client";

import Image from "next/image";
import aboutData from "@/instances/about-data";
import AboutCard from "./AboutCard";

export default function About() {
  return (
    <section className="relative bg-black text-white py-12 md:py-24 px-6 overflow-hidden">
      {/* Background Blur */}
      <div className="absolute left-[210px] sm:left-[1100px] top-100 sm:top-80 -translate-x-1/2 z-0 w-full flex justify-center pointer-events-none">
        <div className="w-[280px] h-[180px] md:w-[400px] md:h-[300px] bg-white/20 rounded-full blur-[100px] md:blur-[180px]"></div>
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        {/* Title */}
        <div className="flex justify-center mb-3 md:mb-4">
          <span className="px-4 md:px-5 py-1 rounded-[8px] bg-[#191919] text-white text-xs md:text-sm">
            About Me
          </span>
        </div>
        <h1 className="text-base md:text-xl font-normal text-center mb-8 md:mb-12 text-[#929CA5]">
          {aboutData.title}
        </h1>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Left: Image */}
          <div className="flex justify-center">
            <Image
              src={aboutData.image}
              alt="About photo"
              width={400}
              height={500}
              className="rounded-xl object-cover max-w-[280px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-[400px] w-full h-auto mx-auto"
            />
          </div>

          {/* Right: Text */}
          <div className="text-center lg:text-left">
            <h2
              className="text-lg md:text-xl lg:text-2xl text-[#929CA5] font-normal mb-4"
              dangerouslySetInnerHTML={{ __html: aboutData.subtitle }}
            ></h2>
            <p className="text-[#7A7B85] mb-6 text-sm md:text-base leading-relaxed">
              {aboutData.description}
            </p>

            {/* Education */}
            <h3 className="text-lg md:text-xl font-medium mb-4">Education</h3>
            <div className="space-y-6 md:space-y-8 w-full max-w-[500px] mx-auto lg:mx-0">
              <AboutCard
                title={aboutData.education.degree}
                subtitle={aboutData.education.university}
                badge={aboutData.education.year}
              />
              <AboutCard email subtitle={aboutData.email} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}