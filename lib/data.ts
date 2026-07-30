import reviusImg from "@/public/revius.png";
import faltaunoImg from "@/public/faltauno.png";
import sortedImg from "@/public/sortedcollections.png";
import datotecaImg from "@/public/datoteca.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Freelance Web Developer",
    location: "Villa Alemana, CL",
    description:
      "I worked as a freelance web developer for about 3 years where I made a couple of web pages and sites, landing pages, and a user maintainer for a private server of Lineage 2 game. I also upskilled to the full stack.",
    date: "2018 - 2021",
  },
  {
    title: "Graduated Computer Science",
    location: "Viña del Mar, CL",
    description:
      "I graduated after 4 years of studying. I immediately found a job as a web developer.",
    date: "2018 - 2021",
  },
  {
    title: "Software Developer at Evalueserve Chile",
    location: "Viña del Mar, CL",
    description:
      "I wroked as a fullstack developer working at Evalueserve Chile. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB.",
    date: "2021 - 2022",
  },
  {
    title: "Senior Developer at Evalueserve Chile",
    location: "Viña del Mar, CL",
    description:
      "As a senior developer, I worked on more complex projects and led a small team of developers. I also mentored junior developers and helped them improve their skills.",
    date: "2022 - 2023",
  },
  {
    title: "Senior Software Engineer | Tech Lead at BICE Hipotecaria",
    location: "Providencia, Santiago, CL",
    description:
      "I started by building Carpeta Digital, an internal system for managing credit-related documents, and led the migration of the authentication system from on-premise Keycloak to Auth0 for over 15,000 clients. Later, as Tech Lead, I led a team of 6 developers on integration projects during the Bice and Security merger, including rolling out the Toku payment gateway for over 30,000 clients.",
    date: "2024 - 2026",
  },
  {
    title: "Senior Software Engineer at Scotiabank Chile",
    location: "Remote, Villa Alemana, CL",
    description:
      "Focused on developing and maintaining internal systems for the bank, including a document management system and a customer relationship management system. I also worked on integrating third-party services and APIs to enhance the bank's digital offerings.",
    date: "2026 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Renduo",
    tags: ["SaaS", "React", "TypeScript", "API"],
    imageUrl: "/renduo/landing.png",
    siteUrl: "https://renduo.dev",
    gallery: [
      { label: "dashboard.png", src: "/renduo/dashboard.png" },
      { label: "docs.png", src: "/renduo/docs.png" },
    ],
  },
  {
    title: "Sorted Collections",
    tags: ["Open-source", "JavaScript", "Typescript"],
    imageUrl: sortedImg,
    siteUrl: "https://johansneirap.github.io/sorted-collections/",
  },
  {
    title: "Datoteca",
    tags: ["Open-source", "TypeScript", "JavaScript"],
    imageUrl: datotecaImg,
    siteUrl: "https://johansneirap.github.io/datoteca/",
  },
  {
    title: "Falta 1",
    tags: ["React", "TypeScript", "PWA", "Tailwind"],
    imageUrl: faltaunoImg,
    siteUrl: "https://www.faltauno.lat/",
  },
  {
    title: "Revius",
    tags: ["React", "Next.js", "Tailwind", "NestJS", "Prisma", "Postgres"],
    imageUrl: reviusImg,
    siteUrl: "https://revius.cl",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
