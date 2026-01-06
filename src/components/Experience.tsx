import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, FlaskConical, Users } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Autonomous Systems Engineer",
      company: "Boeing Commercial Airplanes",
      period: "Current",
      icon: <Briefcase className="h-6 w-6 text-primary" />,
      description: [
        "Developing autonomous systems and advanced flight technologies for commercial aircraft",
        "Completed Engineering Rotational Program, gaining cross-functional experience across Boeing",
        "Previously served as a summer intern for two consecutive years",
      ],
    },
    {
      title: "Treasurer, Board of Directors",
      company: "Ascend NW",
      period: "Current",
      icon: <Users className="h-6 w-6 text-primary" />,
      description: [
        "Managing financial operations and strategic planning for a Catholic non-profit in the Pacific Northwest",
        "Collaborating with the board to support community-driven initiatives and mission growth",
      ],
    },
    {
      title: "Marshall Scholar",
      company: "University of Cambridge",
      period: "2023 - 2024",
      icon: <FlaskConical className="h-6 w-6 text-primary" />,
      description: [
        "MPhil in Engineering for Sustainable Development",
        "Focused on human-centered design and sustainable infrastructure in developing regions",
      ],
    },
    {
      title: "Research Assistant",
      company: "University of Notre Dame / Imperial College London",
      period: "2016 - 2020",
      icon: <FlaskConical className="h-6 w-6 text-primary" />,
      description: [
        "Morph Lab (Imperial College London): Developed robotic proxy finger for remote haptic feedback evaluation",
        "Kellogg Institute (Haiti): Conducted NSF-funded reconnaissance survey logic and code development",
        "Hypersonic Aerodynamics Lab: Assisted in high-speed flight research and experimental testing",
        "AIAA Design/Build/Fly: Served as Club President, leading technical design and competition strategy",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    {exp.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <CardDescription className="text-base font-medium text-primary/80">
                      {exp.company}
                    </CardDescription>
                    <p className="text-sm text-muted-foreground mt-1">{exp.period}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="leading-relaxed">{item}</li>
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
