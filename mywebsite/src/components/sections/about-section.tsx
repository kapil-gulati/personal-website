"use client";

import { Card, CardContent } from "../ui/card";

export function AboutSection() {
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">About Me</h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Get to know more about my background, skills, and what drives me as a developer.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Background</h3>
            <Card className="bg-white dark:bg-gray-700 h-full">
              <CardContent className="p-6">
                <p className="text-lg mb-4">
                  I&apos;m a passionate software engineer with expertise in building modern web applications. 
                  With a strong foundation in full-stack development, I enjoy creating elegant solutions 
                  to complex problems.
                </p>
                <p className="text-lg mb-4">
                  I hold a degree in Computer Science and have over 5 years of professional experience 
                  working with various technologies and frameworks. My approach combines technical 
                  excellence with a keen eye for user experience and design.
                </p>
                <p className="text-lg">
                  When I&apos;m not coding, you can find me exploring new technologies, contributing to 
                  open-source projects, or sharing my knowledge through technical articles and mentorship.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Expertise</h3>
            <Card className="bg-white dark:bg-gray-700 h-full">
              <CardContent className="p-6">
                <div className="mb-6">
                  <h4 className="font-bold mb-2">Frontend Development</h4>
                  <p className="mb-3">React, Next.js, TypeScript, Tailwind CSS, Redux</p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-600">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-bold mb-2">Backend Development</h4>
                  <p className="mb-3">Node.js, Express, MongoDB, PostgreSQL, REST APIs</p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-600">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-bold mb-2">DevOps & Tools</h4>
                  <p className="mb-3">Git, GitHub Actions, Docker, AWS, Vercel</p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-600">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold mb-2">UI/UX Design</h4>
                  <p className="mb-3">Figma, Responsive Design, Accessibility</p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-600">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
