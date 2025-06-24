
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

type SocialLinkProps = {
  className?: string;
  size?: "default" | "lg";
};

export default function SocialLinks({ className, size = "default" }: SocialLinkProps) {
  const iconSize = size === "lg" ? 24 : 18;
  
  const links = [
    {
      name: "Email",
      icon: <Mail size={iconSize} />,
      href: "mailto:contact@nileshpawar.dev",
      className: "bg-red-500 hover:bg-red-600",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={iconSize} />,
      href: "https://linkedin.com/in/nileshpawar",
      className: "bg-blue-600 hover:bg-blue-700",
    },
    {
      name: "GitHub",
      icon: <Github size={iconSize} />,
      href: "https://github.com/nileshpawar",
      className: "bg-gray-800 hover:bg-gray-900",
    },
    {
      name: "Resume",
      icon: <FileText size={iconSize} />,
      href: "#",
      className: "bg-emerald-600 hover:bg-emerald-700",
    },
  ];
  
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      {links.map((link) => (
        <Button
          key={link.name}
          size={size === "lg" ? "default" : "sm"}
          className={cn(
            "text-white rounded-full transition-transform transform-gpu hover:scale-105 m-2", 
            link.className
          )}
          asChild
        >
          <a 
            href={link.href} 
            target={link.name !== "Email" ? "_blank" : undefined} 
            rel="noopener noreferrer"
            aria-label={link.name}
          >
            {link.icon}
            {size === "lg" && <span className="ml-2">{link.name}</span>}
          </a>
        </Button>
      ))}
    </div>
  );
}
