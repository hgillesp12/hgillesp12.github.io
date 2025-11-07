import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Company Inc.",
      period: "2022 - Present",
      description: [
        "Led development of microservices architecture serving 1M+ users",
        "Mentored junior engineers and conducted code reviews",
        "Improved system performance by 40% through optimization",
      ],
    },
    {
      title: "Software Engineer",
      company: "Startup Solutions",
      period: "2020 - 2022",
      description: [
        "Built full-stack features for SaaS product from scratch",
        "Collaborated with design team to improve UX/UI",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
      ],
    },
    {
      title: "Software Development Intern",
      company: "Innovation Labs",
      period: "2019 - 2020",
      description: [
        "Developed internal tools to automate manual processes",
        "Worked on frontend features using React and TypeScript",
        "Participated in agile development and sprint planning",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Work Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle>{exp.title}</CardTitle>
                    <CardDescription>
                      {exp.company} • {exp.period}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
