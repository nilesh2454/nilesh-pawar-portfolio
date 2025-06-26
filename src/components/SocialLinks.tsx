import { Github, Linkedin, Mail, FileText, Instagram } from "lucide-react";
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
      name: "LinkedIn",
      icon: <Linkedin size={iconSize} />,
      href: "https://www.linkedin.com/in/nilesh-pawar-33aaa7287",
      className: "bg-blue-600 hover:bg-blue-700",
    },
    {
      name: "GitHub",
      icon: <Github size={iconSize} />,
      href: "https://github.com/nilesh2454",
      className: "bg-gray-800 hover:bg-gray-900",
    },
    {
      name: "Instagram",
      icon: <Instagram size={iconSize} />,
      href: "https://www.instagram.com/tech_ndp?igsh=dHBtZHczbnh4ZDk=",
      className: "bg-pink-500 hover:bg-pink-600",
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
