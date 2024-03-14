import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { SiGithub, SiLinkedin, SiStackoverflow } from "react-icons/si";

export default function Navbar({ className }: { className?: string }) {
  const socials = [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/klobodanovic-adis/",
      Icon: SiLinkedin,
    },
    {
      label: "GitHub",
      url: "https://github.com/qdiss",
      Icon: SiGithub,
    },
    {
      label: "Stack Overflow",
      url: "https://stackoverflow.com/users/20377718/klobodanovi%c4%87-adis",
      Icon: SiStackoverflow,
    },
  ];
  return (
    <nav
      className={cn(
        "py-10 flex justify-between items-center animate-move-down",
        className
      )}
    >
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
        qdiss 👨🏻‍💻
      </h1>
      <div className="flex items-center gap-5">
        {socials.map((social, index) => {
          const Icon = social.Icon;
          return (
            <Link href={social.url} key={index} aria-label={social.label}>
              <Icon className="w-5 h-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
