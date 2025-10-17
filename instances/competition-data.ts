import { IconType } from "react-icons";
import { FaTrophy, FaPython } from "react-icons/fa";
import { FaBrain, FaNodeJs, FaReact } from "react-icons/fa6";
import { GiSatelliteCommunication } from "react-icons/gi";
import { RiPresentationFill } from "react-icons/ri";

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
    title:
      "Winner, of SSPI Hackathon 2024 Prototype Competition by Science Thammasat",
    description:
      "I won a Hackathon in the prototype category with IN SCENE, a web application that recommends travel destinations based on locations from movies and TV series. I was responsible for frontend development, focusing on creating a visually appealing and user-friendly experience. The tech stack included React.js, Express.js, and MongoDB. This project allowed me to apply my skills in both development and design extensively.",
    image: "/images/Compettion/compettion1.jpg",
    acquiredSkills: [
      { label: "Teamwork", icon: FaTrophy },
      { label: "Communication", icon: GiSatelliteCommunication },
      { label: "Problem Solving", icon: FaBrain },
      { label: "Presentation", icon: RiPresentationFill },
      { label: "Frontend Development", icon: FaReact },
    ],
  },
  {
    id: "2",
    title: "1st Runner-up, Digital Innovation Workshop & Hackathon 2023",
    description:
      "I participated in a Hackathon with my project, Growth Work, a platform for job searching and recruitment across various professions. The project also aligns with several SDG (Sustainable Development Goals) topics. Throughout the competition, I received valuable feedback and praise for the project.",
    image: "/images/Compettion/compettion2.jpg",
    acquiredSkills: [
      { label: "Teamwork", icon: FaTrophy },
      { label: "Communication", icon: GiSatelliteCommunication },
      { label: "Problem Solving", icon: FaBrain },
      { label: "Presentation", icon: RiPresentationFill },
      { label: "Frontend Development", icon: FaReact },
    ],
  },
  {
    id: "3",
    title:
      "Rookie Star, Axtra Mile Hackathon 2025 (AXTRA PUBLIC COMPANY LIMITED)",
    description:
      "My team and I tackled real-world challenges faced by Makro and Lotus, earning the Rookie Star award. Our prototype, AmaMove, serves as a bridge for customers in rural and suburban areas enabling them to access and spend with Makro and Lotus more conveniently. We focused on secure, high performance technology and end-to-end delivery orchestration to improve reach, trust, and overall shopping experience.",
    image: "/images/Compettion/compettion3.jpg",
    acquiredSkills: [
      { label: "Teamwork", icon: FaTrophy },
      { label: "Communication", icon: GiSatelliteCommunication },
      { label: "Problem Solving", icon: FaBrain },
      { label: "Presentation", icon: RiPresentationFill },
      { label: "Frontend Development", icon: FaReact },
    ],
  },
  {
    id: "4",
    title:
      "Selected Participant (Top 20 out of 273 applicants), Young Webmaster Camp 20",
    description:
      "I was selected as one of the top 20 finalists out of 273 applicants in the Programming Track and spent 5 days and 4 nights working in a cross-functional team alongside design, marketing, and content. Our project focused on supporting artists across the art domain—delivering practical, user-centric solutions. Throughout the program, I advanced my production-ready coding skills for web and application development and developed stronger collaboration and communication capabilities in a team environment.",
    image: "/images/Compettion/compettion4.jpg",
    acquiredSkills: [
      { label: "Teamwork", icon: FaTrophy },
      { label: "Communication", icon: GiSatelliteCommunication },
      { label: "Problem Solving", icon: FaBrain },
      { label: "Presentation", icon: RiPresentationFill },
      { label: "Frontend Development", icon: FaReact },
    ],
  },
  {
    id: "5",
    title: "Finalist, 7-ELEVEN YOUNG GENIVERSITY 2025 Hackathon",
    description:
      "I was selected for the final round and joined a multi-disciplinary bootcamp that provided hands-on training across the product development lifecycle. During the program, our team crafted a solution aimed at boosting Gen Z employee retention and motivation using a hackathon-driven approach. We presented the concept to 7-ELEVEN’s executive team, where it was well received and praised for its practicality and impact potential.",
    image: "/images/Compettion/compettion5.jpg",
    acquiredSkills: [
      { label: "Teamwork", icon: FaTrophy },
      { label: "Communication", icon: GiSatelliteCommunication },
      { label: "Problem Solving", icon: FaBrain },
      { label: "Presentation", icon: RiPresentationFill },
    ],
  },
  {
    id: "6",
    title:
      "Finalist, SCGJWD Next Gen Logistics 2025 Hackathon (Bootcamp and Hackathon)",
    description:
      "I participated in a bootcamp and successfully passed the interview stage to join a 24-hour hackathon. During the event, I developed a solution focused on maximizing efficiency in warehouse storage and delivery fleet operations improving slotting, allocation, and routing decisions. I worked closely with peers from multiple universities, actively sharing methods, debating trade-offs, and iterating under time pressure, which sharpened both my technical problem-solving and cross-team collaboration skills.",
    image: "/images/Compettion/compettion6.jpg",
    acquiredSkills: [
      { label: "Teamwork", icon: FaTrophy },
      { label: "Communication", icon: GiSatelliteCommunication },
      { label: "Problem Solving", icon: FaBrain },
      { label: "Presentation", icon: RiPresentationFill },
    ],
  },
  {
    id: "7",
    title: "Finalist, GHB Open Innovation Hackathon 2025 (GHBank)",
    description:
      "I was tasked with developing a prototype for a banking money-management platform designed for ease of use and seamless operations. The solution also included a secure, robust loan-management module, implemented in strict compliance with the Hackathon’s requirements. This work addresses core priorities for the future of financial technology usability, security, and stability.",
    image: "/images/Compettion/compettion7.jpg",
    acquiredSkills: [
      { label: "Teamwork", icon: FaTrophy },
      { label: "Communication", icon: GiSatelliteCommunication },
      { label: "Problem Solving", icon: FaBrain },
      { label: "Presentation", icon: RiPresentationFill },
    ],
  },
  {
    id: "8",
    title: "Finalist, Learn Lab 2024 : Mega Trend Meta Learning Hackathon",
    description:
      "I reached the final pitching round of a Hackathon with Bupakaree, a chatbot designed to provide guidance and support for first-time parents. Through this experience, I not only developed the project but also gained valuable insights and advice from the competition.",
    image: "/images/Compettion/compettion8.jpg",
    acquiredSkills: [
      { label: "Teamwork", icon: FaTrophy },
      { label: "Communication", icon: GiSatelliteCommunication },
      { label: "Problem Solving", icon: FaBrain },
      { label: "Presentation", icon: RiPresentationFill },
    ],
  },
];

export default competitionData;
