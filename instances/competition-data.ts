import { IconType } from "react-icons";
import { FaTrophy, FaPython } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

export type CompetitionItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  acquiredSkills: { label: string; icon: IconType }[];
};

const competitionData: CompetitionItem[] = [
  {
    id: "1",
    title: "Winner of SSPI Hackathon 2024 Prototype Competition by Science Thammasat",
    description:
      "I enjoy turning complex problems into simple, beautiful and intuitive designs. My aim is to bring across your message and identity in the most creative way.",
    image: "/images/About/Tonkit.jpg",
    acquiredSkills: [
      { label: "Python", icon: FaPython },
      { label: "Next.js", icon: SiNextdotjs },
      { label: "Teamwork", icon: FaTrophy },
    ],
  },
  {
    id: "2",
    title: "Winner of SSPI Hackathon 2024 Prototype Competition by Science Thammasat",
    description:
      "I enjoy turning complex problems into simple, beautiful and intuitive designs. My aim is to bring across your message and identity in the most creative way.",
    image: "/images/About/Tonkit.jpg",
    acquiredSkills: [
      { label: "Python", icon: FaPython },
      { label: "Next.js", icon: SiNextdotjs },
      { label: "Teamwork", icon: FaTrophy },
    ],
  },
  {
    id: "3",
    title: "Winner of SSPI Hackathon 2024 Prototype Competition by Science Thammasat",
    description:
      "I enjoy turning complex problems into simple, beautiful and intuitive designs. My aim is to bring across your message and identity in the most creative way.",
    image: "/images/About/Tonkit.jpg",
    acquiredSkills: [
      { label: "Python", icon: FaPython },
      { label: "Next.js", icon: SiNextdotjs },
      { label: "Teamwork", icon: FaTrophy },
    ],
  },
  {
    id: "4",
    title: "Winner of SSPI Hackathon 2024 Prototype Competition by Science Thammasat",
    description:
      "I enjoy turning complex problems into simple, beautiful and intuitive designs. My aim is to bring across your message and identity in the most creative way.",
    image: "/images/About/Tonkit.jpg",
    acquiredSkills: [
      { label: "Python", icon: FaPython },
      { label: "Next.js", icon: SiNextdotjs },
      { label: "Teamwork", icon: FaTrophy },
    ],
  },
  {
    id: "5",
    title: "Winner of SSPI Hackathon 2024 Prototype Competition by Science Thammasat",
    description:
      "I enjoy turning complex problems into simple, beautiful and intuitive designs. My aim is to bring across your message and identity in the most creative way.",
    image: "/images/About/Tonkit.jpg",
    acquiredSkills: [
      { label: "Python", icon: FaPython },
      { label: "Next.js", icon: SiNextdotjs },
      { label: "Teamwork", icon: FaTrophy },
    ],
  },
  {
    id: "6",
    title: "Winner of SSPI Hackathon 2024 Prototype Competition by Science Thammasat",
    description:
      "I enjoy turning complex problems into simple, beautiful and intuitive designs. My aim is to bring across your message and identity in the most creative way.",
    image: "/images/About/Tonkit.jpg",
    acquiredSkills: [
      { label: "Python", icon: FaPython },
      { label: "Next.js", icon: SiNextdotjs },
      { label: "Teamwork", icon: FaTrophy },
    ],
  },
  // สามารถเพิ่มข้อมูลการแข่งขันอื่น ๆ ได้ที่นี่
];

export default competitionData;
