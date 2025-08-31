"use client";

import SkillCard from "./SkillCard";
import { IconType } from "react-icons";

type SkillRowProps = {
  skills: { label: string; icon: IconType }[];
  direction?: "left" | "right";
  speed?: number; // วินาทีต่อ loop
};

export default function SkillRow({
  skills,
  direction = "right",
  speed = 30,
}: SkillRowProps) {
  // ✅ render skills ซ้ำหลายรอบ เพื่อให้ scroll ได้เนียน
  const repeated = Array(5).fill(skills).flat();

  return (
    <div className="overflow-hidden w-full">
      <div
        className={`
          flex gap-4 py-2 min-w-max
          ${direction === "right" ? "animate-scroll-right" : "animate-scroll-left"}
        `}
        style={{
          animationDuration: `${speed}s`,
          willChange: "transform",
        }}
      >
        {repeated.map((skill, index) => (
          <SkillCard key={index} label={skill.label} icon={skill.icon} />
        ))}
      </div>
    </div>
  );
}
