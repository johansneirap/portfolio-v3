import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import reviusImg from "@/public/revius.png";
import mochilasMinerasImg from "@/public/mochilasmineras.png";
import taskifyImg from "@/public/taskify.png";
import tictactoeImg from "@/public/tictactoe.png";

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
    title: "Graduated Computer Science",
    location: "Viña del Mar, CL",
    description:
      "I graduated after 4 years of studying. I immediately found a job as a web developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2021",
  },
  {
    title: "Freelance Web Developer",
    location: "Villa Alemana, CL",
    description:
      "I worked as a freelance web developer for about 3 years where I made a couple of web pages and sites, landing pages, and a user maintainer for a private server of Lineage 2 game. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Viña del Mar, CL",
    description:
      "I'm now a full-stack developer working at Evalueserve Chile. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Revius",
    tags: ["React", "Next.js", "Tailwind", "NestJS", "Prisma", "Postgres"],
    imageUrl: reviusImg,
    siteUrl: "https://revius.cl",
  },
  {
    title: "Taskify",
    tags: ["React", "Next.js", "Typescript"],
    imageUrl: taskifyImg,
    siteUrl: "https://taskify.johansneira.site",
  },
  {
    title: "Mochilas Mineras",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: mochilasMinerasImg,
    siteUrl: "https://mochilasmineras.cl",
  },
  {
    title: "Tic Tac Toe Game",
    tags: ["React", "TypeScript", "Vite", "CSS"],
    imageUrl: tictactoeImg,
    siteUrl: "https://tictactoe.johansneira.site",
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
