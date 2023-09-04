import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { MdOutlineSystemSecurityUpdateWarning } from "react-icons/md";
import pokepricer from "@/public/pokehome.png"
import quota from "@/public/quota.png"
import aiGen from "@/public/ai-gen.png"
import yariga from "@/public/yariga.png"

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
    title: "System Administrator",
    location: "Mendoza, Argentina",
    description:
      "System Maintenance and Troubleshooting, Server and Network Management, User Support and Training",
    icon: React.createElement(MdOutlineSystemSecurityUpdateWarning),
    date: "2017 - 2021",
  },
  {
    title: "Systems Department Manager",
    location: "Mendoza, Argentina",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Ssr Software Developer",
    location: "Mendoza, Argentina",
    description: "Maintenance and implementation of improvements in web projects and scripting. Development of new projects. Participations in project conception, feasibility and scope.",
    icon: React.createElement(FaReact),
    date: "2022 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Pokepricer",
    description:
      "Worked as an open source project completly made by me. It allows users to check current Pokemon TCG card prices in other pages, with the correct convertion to ARS",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: pokepricer,
  },
  {
    title: "Quota",
    description:
      "Full-stack app for an Internet Service Provider. It tracks customer internet consumption by bit, creating dashboards for analytics",
    tags: ["React", "Redux", "ApexCharts", "Express", "PostgreSQL"],
    imageUrl: quota,
  },
  {
    title: "AI Image Generator",
    description:
    "A mockup project that uses OpenAI API to generate images based on a prompt given by an user",
    tags: ["React", "MongoDB", "Tailwind", "NodeJS", "Express"],
    imageUrl: aiGen,
  },
  {
    title: "Yariga",
    description:
      "A mockup project to simulate a real admin dashboard, with properties to rent, similar to Airbnb and similar real apps.",
    tags: ["Next.js", "NodeJS", "Tailwind", "MongoDB", "Refine"],
    imageUrl: yariga,
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
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
] as const;