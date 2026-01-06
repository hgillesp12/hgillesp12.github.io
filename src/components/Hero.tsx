"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
            <Avatar className="h-48 w-48 border-4 border-primary/20 shadow-xl">
              <AvatarImage 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/fd7356cb-78eb-41c8-9e6e-ac71139d03d8/1762187849939-1767698093761.jpeg?width=8000&height=8000&resize=contain" 
                className="object-cover"
              />
            <AvatarFallback className="text-3xl font-bold">HG</AvatarFallback>
          </Avatar>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
          Hannah Gillespie
        </h1>

        <p className="text-xl sm:text-2xl text-muted-foreground mb-4">
          Engineer, Researcher, and Entrepreneur
        </p>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          Passionate about building elegant solutions to complex problems.
          Specializing in autonomous systems, human-centered design, and engineering for international development.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button
            onClick={() => scrollToSection("#contact")}
            size="lg"
            className="gap-2"
          >
            <Mail className="h-4 w-4" />
            Get in Touch
          </Button>
          <Button
            onClick={() => scrollToSection("#projects")}
            variant="outline"
            size="lg"
          >
            View Projects
          </Button>
        </div>

        <div className="flex justify-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com/hgillesp12"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://www.linkedin.com/in/hannahgillespie/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="mailto:contact@example.com"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume"
            >
              <FileText className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}