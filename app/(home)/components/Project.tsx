import Title from "@/components/Title";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import {
  SiCss3,
  SiHtml5,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function Project() {
  const projects = [
    {
      title: "Project 1",
      tech: [SiNextdotjs, SiTypescript, SiTailwindcss],
      link: "https://travel-app-liard-nine.vercel.app/",
      cover: "/project1.png",
      background: "bg-red-500",
    },
    {
      title: "Project 2",
      tech: [SiNextdotjs, SiTypescript, SiTailwindcss],
      link: "/",
      cover: "/project2.png",
      background: "bg-blue-500",
    },
    {
      title: "Project 3",
      tech: [SiReact, SiHtml5, SiCss3],
      link: "esada-portfolio.vercel.app",
      cover: "/project3.png",
      background: "bg-green-500",
    },
    {
      title: " Project 4",
      tech: [SiNextdotjs, SiTypescript, SiReact, SiTailwindcss],
      link: "https://jotion-dusky-gamma.vercel.app/",
      cover: "/project4.png",
      background: "bg-yellow-500",
    },
  ];
  return (
    <div className="py-20 p-5 sm:p-0">
      <Title
        text="Projects 🎨"
        className="flex flex-col items-center justify-center rotate-6 mb-20"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 pb-20 gap-5">
        {projects.map((project, index) => {
          return (
            <Link key={index} href={project.link}>
              <div
                className={cn(
                  "p-5 rounded-md",
                  project.background,
                  "cursor-pointer"
                )}
              >
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full space-y-5 cursor-pointer"
                >
                  <div className="space-y-5">
                    <h1 className="text-2xl font-bold">{project.title}</h1>
                    <div className="flex items-center gap-5">
                      {project.tech.map((Icon, index) => {
                        return <Icon key={index} className="w-8 h-8" />;
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
