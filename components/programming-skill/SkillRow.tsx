"use client";

import SkillCard from "./SkillCard";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

type SkillRowProps = {
  skills: { label: string; icon: IconType }[];
  direction?: "left" | "right";
  speed?: number;
};

export default function SkillRow({
  skills,
  direction = "right",
  speed = 30,
}: SkillRowProps) {
  // ✅ render skills ซ้ำ 3 รอบ → ให้เต็ม container แน่ๆ
  const repeated = [...skills, ...skills, ...skills];

  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className="flex gap-4 py-2 min-w-max"
        initial={{ x: 0 }}
        animate={{
          x: direction === "right" ? ["0%", "-33.33%"] : ["-33.33%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          duration: speed,
          ease: "linear",
        }}
      >
        {repeated.map((skill, index) => (
          <SkillCard key={index} label={skill.label} icon={skill.icon} />
        ))}
      </motion.div>
    </div>
  );
}
