import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"],
    },
    {
      title: "Frontend",
      skills: ["React", "Next.js", "Vue.js", "Tailwind CSS", "HTML/CSS"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "Django", "Flask", "PostgreSQL", "MongoDB"],
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Docker", "AWS", "CI/CD", "REST APIs", "GraphQL"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title}>
              <CardHeader>
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
