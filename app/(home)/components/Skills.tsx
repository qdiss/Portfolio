"use client";

import Title from "@/components/Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import React from "react";
import {
  SiExpress,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      text: "React",
      Icon: SiReact,
    },
    {
      text: "Next.js",
      Icon: SiNextdotjs,
    },
    {
      text: "TailwindCSS",
      Icon: SiTailwindcss,
    },
    {
      text: "JavaScript",
      Icon: SiJavascript,
    },
    {
      text: "TypeScript",
      Icon: SiTypescript,
    },
    {
      text: "Node.js",
      Icon: SiNodedotjs,
    },
    {
      text: "Express.js",
      Icon: SiExpress,
    },
    {
      text: "Git",
      Icon: SiGit,
    },
    {
      text: "MongoDB",
      Icon: SiMongodb,
    },
  ];
  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title
        text="Skills 🛠️"
        className="flex flex-col items-center justify-center -rotate-6"
      />
      <HoverEffect items={skills} />
    </div>
  );
}
