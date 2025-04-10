import {
  SiReact,
  SiFirebase,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs } from "react-icons/fa";
import Image from "next/image";

export const myTechStack = [
  { icon: <FaHtml5 />, label: "HTML5", color: "#e34c26" },
  { icon: <FaCss3Alt />, label: "CSS3", color: "#264de4" },
  { icon: <FaJs />, label: "JavaScript", color: "#f7df1e" },
  { icon: <SiTypescript />, label: "TypeScript", color: "#3178c6" },
  { icon: <FaReact />, label: "React", color: "#61dafb" },
  { icon: <SiNextdotjs />, label: "Next.js", color: "#fff" },
  { icon: <SiTailwindcss />, label: "Tailwind", color: "#38bdf8" },
  { icon: <FaNodeJs />, label: "Node.js", color: "#68a063" },
  { icon: <SiMongodb />, label: "MongoDB", color: "#ffca28" },
  { icon: <SiFirebase />, label: "Firebase", color: "#ffcb2b" },
  { icon: <SiNextdotjs />, label: "NestJS", color: "#e0234e" },
  { icon: <SiMongodb />, label: "PostgreSQL", color: "#336791" },
  {
    icon: (
      <Image
        src="/socketdotio.svg"
        alt="Your Portrait"
        width={30}
        height={30}
        clas
        sName="object-cover w-full h-full"
      />
    ),
    label: "WebSocket",
    color: "#333333",
  },

  {
    icon: (
      <Image
        src="/antdesign.svg"
        alt="Your Portrait"
        width={30}
        height={30}
        clas
        sName="object-cover w-full h-full"
      />
    ),
    label: "Ant Design",
    color: "#0170fe",
  },
  {
    icon: (
      <Image
        src="/c.png"
        alt="Your Portrait"
        width={30}
        height={30}
        clas
        sName="object-cover w-full h-full"
      />
    ),
    label: "C#",
    color: "#0081cb",
  },
  {
    icon: (
      <Image
        src="/unity.svg"
        alt="Your Portrait"
        width={30}
        height={30}
        clas
        sName="object-cover w-full h-full"
      />
    ),
    label: "Unity",
    color: "#000000",
  },
];

export const myProjects = [
  {
    title: "DevHub – Real-time Developer Chat Platform",
    description:
      "A modern, full-stack real-time chat application for developers. Allows users to exchange messages instantly, and manage conversations in dedicated rooms with seamless UX.",
    image: "/images/devhub.png",
    techStack: [
      "Next.js 14",
      "NestJS",
      "TypeScript",
      "WebSocket",
      "Prisma",
      "PostgreSQL",
      "TailwindCSS",
    ],
    github: "https://github.com/Armsss9988/DevHubChat_Nest",
    github2: "https://github.com/Armsss9988/DevHubChat_Next",
    live: "https://dev-hub-chat-next.vercel.app/",
  },
  {
    title: "AI Quiz App",
    description:
      "A quiz web app powered by Gemini AI, allowing AI-generated explanations.",
    image: "/images/quiz-app.png",
    techStack: ["Javascript", "TailwindCSS", "Firebase", "Gemini AI"],
    github: "https://github.com/bxthien/Quiz-Onl-OJT",
    live: "https://quizonl-dev.netlify.app/",
  },
  {
    title: "University Magazine Contribution System",
    description:
      "A system to collect and manage student contributions for the annual university magazine, with role-based access control and reporting features.",
    image: "/images/university-magazine.png",
    techStack: ["Node.js", "Express.js", "React.js", "MongoDB", "Google Mail"],
    github:
      "https://github.com/Armsss9988/University-Magazine-Contribution-System-BE",
    github2:
      "https://github.com/Armsss9988/University-Magazine-Contribution-System-FE",
    live: "#",
  },
  {
    title: "2D Forgotten Game",
    description:
      "A 2D top-down RPG game featuring inventory management, combat, quest systems, and cloud save functionality.",
    image: "/images/forgotten-game.png",
    techStack: ["Unity Engine", "C#", "Unity Cloud Save"],
    github: "https://github.com/Armsss9988/My-Course-Project/",
    live: "#",
  },
];

export const mySkills = [
  {
    name: "Back-End Development and APIs",
    icon: <FaNodeJs />, // Sử dụng icon Node.js để đại diện
    certImg: "/image.png", // Đường dẫn đến hình ảnh chứng chỉ (nếu có)
    certTitle: "FreeCodeCamp Back-End Development and APIs",
    certLink:
      "https://www.freecodecamp.org/certification/AnhMinh9988/back-end-development-and-apis",
  },
];

export const myExperiences = [
  {
    type: "education",
    year: "2020 - 2025",
    title: "FPT Greenwich Da Nang University",
    desc: "Pursuing advanced studies in software engineering, focusing on full-stack development and cloud computing.",
  },
  {
    type: "work",
    year: "05/2024 - 09/2024",
    title: "Intern at VNPT Quang Binh",
    desc: "Participated in an internship at VNPT Quang Binh, supporting the development and maintenance of internal software systems while gaining insights into corporate workflows.",
  },
  {
    type: "work",
    year: "02/2025-05/2025",
    title: "OJT at Devplus",
    desc: "Joined the On-the-Job Training (OJT) program at Devplus, focusing on developing modern web applications using technologies like React, Node.js, and TailwindCSS.",
  },
];
