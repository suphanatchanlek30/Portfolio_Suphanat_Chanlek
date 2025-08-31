"use client";

import { IconType } from "react-icons";

type SkillCardProps = {
  label: string;
  icon: IconType;
};

export default function SkillCard({ label, icon: Icon }: SkillCardProps) {
  return (
    <div
      className="
        flex items-center gap-2 
        px-4 py-2 
        bg-[#0A0A0A] 
        rounded-lg 
        text-white text-sm md:text-base 
        whitespace-nowrap
        border 
        [border-image:linear-gradient(10deg,#FFFFFF,#726969)_1] 
      "
    >
      <Icon className="text-lg md:text-xl text-white" />
      <span className="text-[#FFFFFF]">{label}</span>
    </div>
  );
}
