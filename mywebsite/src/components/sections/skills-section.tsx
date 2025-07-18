import { Card } from "@/components/ui/card";

export function SkillsSection() {
  const skills = [
    'JavaScript', 
    'TypeScript', 
    'React', 
    'Next.js', 
    'Node.js', 
    'Tailwind CSS', 
    'Git', 
    'UI/UX Design'
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <Card key={skill} className="bg-white dark:bg-gray-800 p-4 text-center">
              <p className="font-medium">{skill}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
