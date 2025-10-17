import { IconType } from "react-icons";
import { BiLogoPostgresql, BiLogoSpringBoot } from "react-icons/bi";
import { DiMsqlServer } from "react-icons/di";
import { FaReact, FaNodeJs, FaPython, FaJava, FaDocker } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiTailwindcss, SiCloudinary, SiNestjs, SiTypescript, SiNumpy, SiOpencv, SiStreamlit, SiRender } from "react-icons/si";

export type PortfolioItem = {
  id: string; // ใช้ string
  title: string;
  description: string;
  image: string;
  tech: { label: string; icon: IconType }[];
  linkURL?: string;
};

const portfolioData: PortfolioItem[] = [
  {
    id: "1",
    title: "NangNaiDee",
    description:
      "I designed the database schema and core system architecture, implemented REST APIs and the project structure for a working prototype, and built key flows including login, bookings, payments with slip upload, reviews, and admin pages for locations/units. On the frontend, I developed a reusable Next.js + Tailwind UI (tables, forms, filters, pagination) with basic state and error handling and Cloudinary image upload, while on the backend I implemented JWT-based authentication and validation in Spring Boot with clear error responses. I also wrote API specifications with basic tests and set up a Dockerized development environment that brings up the backend, MSSQL database, and frontend together.",
    image: "/images/Portfolio/project1.png",
    tech: [
      { label: "Next.js", icon: SiNextdotjs },
      { label: "Java", icon: FaJava  },
      { label: "Spring Boot", icon: BiLogoSpringBoot  },
      { label: "Microsoft SQL Server", icon: DiMsqlServer },
      { label: "TailwindCSS", icon: SiTailwindcss },
      { label: "Cloudinary", icon: SiCloudinary },
      { label: "Docker", icon: FaDocker },
    ],
    linkURL: "",
  },
  {
    id: "2",
    title: "SOS Backoffice Dashboard",
    description:
      "I contributed to the SOS Backoffice by implementing additional frontend features in Next.js/TypeScript, integrating them with a NestJS backend to extend end-to-end management across the system. Working closely with UI/UX, I translated Figma specs into responsive, accessible views using Tailwind CSS and reusable components. My work focused on production-grade flows adding and refining data tables, forms, filters, and pagination while strengthening state management and error handling. I also collaborated with backend to clarify and adjust API contracts, delivered features from real product requirements, and fixed issues that improved reliability and usability in the live environment.",
    image: "/images/Portfolio/project2.png",
    tech: [
      { label: "Next.js", icon: SiNextdotjs },
      { label: "Nest.js", icon: SiNestjs  },
      { label: "TailwindCSS", icon: SiTailwindcss },
      { label: "TypeScript", icon: SiTypescript  },
      { label: "PostgreSQL", icon: BiLogoPostgresql  },
    ],
    linkURL: "",
  },
  {
    id: "3",
    title: "INSCENCE",
    description:
      "INSCENCE is a responsive, API-driven platform that guides users to real Thai locations featured in films and TV series. I led the frontend, delivering a clean, mobile-first UI with seamless API integration. Built for the SSPI Hackathon 2024 Prototype Competition (Science Thammasat), the project won First Place and earned strong praise from the judging panel.",
    image: "/images/Portfolio/project3.jpg",
    tech: [
      { label: "React.js", icon: FaReact },
      { label: "TailwindCSS", icon: SiTailwindcss },
      { label: "Node.js", icon: FaNodeJs },
      { label: "MongoDB", icon: SiMongodb },
      { label: "Cloudinary", icon: SiCloudinary},

      
    ],
    linkURL: "",
  },
  {
    id: "4",
    title: "Wasty-website",
    description:
      "Wasty-website is a fully responsive landing page for SOS Spark Project (Spark.Everloaf) an innovation program that leverages AI, gamified experiences, and community action to turn surplus food into meaningful support for people in need. The site showcases the project story and goals, statistical effects of donations, detailed partner profiles, a feature tour of the in-game system, and reviews from contributors whose participation has changed lives on both sides. Built to real client requirements, it focuses on clarity, accessibility, and conversion with strong “Join Us” calls to action.",
    image: "/images/Portfolio/project4.png",
    tech: [
      { label: "Next.js", icon: SiNextdotjs },
      { label: "TailwindCSS", icon: SiTailwindcss },
    ],
    linkURL: "https://sos.sparkworld.org/",
  },
  {
    id: "5",
    title: "Overlay Generator",
    description:
      "Overlay Generator is a lightweight, browser-based tool built with Streamlit that merges (overlays) image tiles exported from Label Studio into clean, per-group composites. Users simply upload a .zip export; the app writes it to a temporary file, unpacks it, and calls process_zip from auto_overlay.py to parse filenames, group images by Task ID / Annotation ID / Tag, and generate the corresponding overlay images using OpenCV and NumPy. When processing completes, the app automatically re-packages outputs into a single results archive and exposes it via a Download button complete with success and error messaging for a smooth user experience. Designed for research and annotation workflows (e.g., dental X-ray overlays), it focuses on clarity, correctness (no cross-mixing between groups), and zero-install convenience.",
    image: "/images/Portfolio/project5.png",
    tech: [
      { label: "Python", icon: FaPython },
      { label: "OpenCV", icon: SiOpencv },
      { label: "Numpy", icon: SiNumpy  },
      { label: "Streamlit", icon: SiStreamlit },
      { label: "Render", icon: SiRender },
    ],
    linkURL: "https://overlay-generator-cstu.onrender.com/",
  },
];

export default portfolioData;
