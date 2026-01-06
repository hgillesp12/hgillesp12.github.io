import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Globe, Youtube } from "lucide-react";

export default function Projects() {
    const projects = [
      {
        title: "Sustainable Seaweed Farming",
        description: "A systems thinking approach analyzing pathways for sustainable seaweed farming expansion, exploring ecological and economic impacts.",
        technologies: ["Causal Loop Diagram", "MICMAC Matrix"],
        countries: ["🇵🇭", "🇮🇩", "🇲🇾", "🇹🇿", "🇬🇧"],
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/fd7356cb-78eb-41c8-9e6e-ac71139d03d8/Screenshot-2026-01-06-at-11.16.58-AM-resized-1767698241072.webp?width=8000&height=8000&resize=contain",
        links: [
          { label: "Website", href: "https://seaweed-growth-pathways.vercel.app/", icon: Globe },
          { label: "Presentation", href: "https://youtu.be/1f9LoW8mZTM?si=4lRp8IB-VXa-6Tn9", icon: Youtube },
        ],
      },
      {
        title: "Task Management System",
        description: "Collaborative project management tool with real-time updates, team collaboration features, and Kanban boards.",
        technologies: ["Next.js", "TypeScript", "Prisma", "WebSocket"],
        countries: ["🇺🇸", "🇨🇦"],
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
        links: [
          { label: "Code", href: "https://github.com", icon: Github },
          { label: "Demo", href: "https://example.com", icon: ExternalLink },
        ],
      },
      {
        title: "AI-Powered Chat Application",
        description: "Real-time messaging app with AI-powered features like smart replies, sentiment analysis, and content moderation.",
        technologies: ["React", "Python", "FastAPI", "OpenAI", "Redis"],
        countries: ["🇩🇪", "🇫🇷"],
        image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&h=400&fit=crop",
        links: [
          { label: "Code", href: "https://github.com", icon: Github },
          { label: "Demo", href: "https://example.com", icon: ExternalLink },
        ],
      },
      {
        title: "Data Visualization Dashboard",
        description: "Interactive analytics dashboard for visualizing complex datasets with custom charts, filters, and export capabilities.",
        technologies: ["Vue.js", "D3.js", "Express", "MongoDB"],
        countries: ["🇯🇵", "🇦🇺"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
        links: [
          { label: "Code", href: "https://github.com", icon: Github },
          { label: "Demo", href: "https://example.com", icon: ExternalLink },
        ],
      },
    ];

    return (
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.title} className="overflow-hidden">
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <div className="flex gap-1 text-2xl" aria-label="Associated Countries">
                      {project.countries.map((flag, idx) => (
                        <span key={idx} title="Country Flag">{flag}</span>
                      ))}
                    </div>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                {project.links.map((link) => (
                  <Button key={link.label} variant="outline" size="sm" asChild>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <link.icon className="h-4 w-4 mr-2" />
                      {link.label}
                    </a>
                  </Button>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
