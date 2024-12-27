import Title from "@/components/Title";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import {
  SiCss3,
  SiHtml5,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function Project() {
  const projects = [
    {
      title: "MediBook Rezervacija Termina",
      tech: [SiNextdotjs, SiTypescript, SiTailwindcss, SiPostgresql],
      link: "https://medibook-pi.vercel.app/",
      cover: "/mobile-logo.png",
      background: "bg-red-500",
    },
    {
      title: "Dalmatinske Vizure",
      tech: [SiNextdotjs, SiTypescript, SiTailwindcss],
      link: "https://dalmatinske-vizure.com",
      cover: "/dalmatinske-vizure.png",
      background: "bg-blue-500",
    },
    {
      title: "Travel App",
      tech: [SiReact, SiHtml5, SiCss3],
      link: "https://travel-app-liard-nine.vercel.app/",
      cover: "/project3.PNG",
      background: "bg-green-500",
    },
    {
      title: "Duolingo Clone",
      tech: [SiNextdotjs, SiTypescript, SiReact, SiTailwindcss],
      link: "https://duolingo-clone-orcin.vercel.app/",
      cover: "/duolingo-clone.png",
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
                  className="w-full space-y-5 cursor-pointer h-60"
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
