import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiTailwindcss } from "react-icons/si";

export type PortfolioItem = {
  id: string; // ใช้ string
  title: string;
  description: string;
  image: string;
  tech: { label: string; icon: any }[];
};

const portfolioData: PortfolioItem[] = [
  {
    id: "1",
    title: "Test Project Name",
    description:
      "I enjoy turning complex problems into simple, beautiful and intuitive designs. My aim is to bring across your message and identity in the most creative way.",
    image: "/images/About/Tonkit.jpg",
    tech: [
      { label: "React.js", icon: FaReact },
      { label: "Next.js", icon: SiNextdotjs },
      { label: "Node.js", icon: FaNodeJs },
      { label: "MongoDB", icon: SiMongodb },
      { label: "Tailwind", icon: SiTailwindcss },
    ],
  },
  {
    id: "2",
    title: "Test Project Name",
    description:
      "I enjoy turning complex problems into simple, beautiful and intuitive designs. My aim is to bring across your message and identity in the most creative way.",
    image: "/images/About/Tonkit.jpg",
    tech: [
      { label: "Python", icon: FaPython },
      { label: "Next.js", icon: SiNextdotjs },
    ],
  },
  {
    id: "3",
    title: "Test Project Name",
    description:
      "I enjoy turning complex problems into simple, beautiful and intuitive designs. My aim is to bring across your message and identity in the most creative way.",
    image: "/images/About/Tonkit.jpg",
    tech: [
      { label: "Python", icon: FaPython },
      { label: "Next.js", icon: SiNextdotjs },
    ],
  },
  {
    id: "4",
    title: "Test Project Name",
    description:
      "I enjoy turning complex problems into simple, beautiful and intuitive designs. My aim is to bring across your message and identity in the most creative way.",
    image: "/images/About/Tonkit.jpg",
    tech: [
      { label: "Python", icon: FaPython },
      { label: "Next.js", icon: SiNextdotjs },
    ],
  },
  {
    id: "5",
    title: "Test Project Name",
    description:
      "I enjoy turning complex problems into simple, beautiful and intuitive designs. My aim is to bring across your message and identity in the most creative way.",
    image: "/images/About/Tonkit.jpg",
    tech: [
      { label: "Python", icon: FaPython },
      { label: "Next.js", icon: SiNextdotjs },
    ],
  },
  {
    id: "6",
    title: "Test Project Name",
    description:
      "I enjoy turning complex problems into simple, beautiful and intuitive designs. My aim is to bring across your message and identity in the most creative way.",
    image: "/images/About/Tonkit.jpg",
    tech: [
      { label: "Python", icon: FaPython },
      { label: "Next.js", icon: SiNextdotjs },
    ],
  },
];

export default portfolioData;
