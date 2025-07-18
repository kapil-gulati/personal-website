"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

export function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with product management, shopping cart, and payment processing.",
      image: "https://placehold.co/600x400/png?text=E-Commerce+Platform",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      demoLink: "https://example.com/demo",
      githubLink: "https://github.com/username/project",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, task assignment, and progress tracking.",
      image: "https://placehold.co/600x400/png?text=Task+Management+App",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      demoLink: "https://example.com/demo",
      githubLink: "https://github.com/username/project",
      featured: true
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A responsive portfolio website built with modern web technologies to showcase projects and skills.",
      image: "https://placehold.co/600x400/png?text=Portfolio+Website",
      technologies: ["Next.js", "Tailwind CSS", "shadcn/ui"],
      demoLink: "https://example.com/demo",
      githubLink: "https://github.com/username/project",
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Featured Projects</h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          A selection of my recent work and personal projects that showcase my skills and interests.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col bg-white dark:bg-gray-700 overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg">
              <div className="relative h-48 w-full overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform hover:scale-105"
                />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-blue-600 dark:text-blue-400">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <p className="text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
              </CardContent>
              
              <CardFooter className="flex justify-between pt-2 border-t border-gray-200 dark:border-gray-600">
                <Button asChild variant="outline" size="sm">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild className="bg-blue-600 hover:bg-blue-700 px-8 py-6 text-lg">
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
