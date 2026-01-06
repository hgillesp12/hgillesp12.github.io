import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Newspaper, Award, Sparkles } from "lucide-react";

export default function News() {
    const newsItems = [
      {
        title: "Engineering: putting people first",
        source: "University of Cambridge",
        date: "May 2024",
        description: "An in-depth look at Hannah's empathetic approach to engineering, her work in Haiti, and her journey as a Marshall Scholar at Cambridge.",
        link: "https://www.cai.cam.ac.uk/news/engineering-putting-people-first",
        icon: <Sparkles className="h-6 w-6 text-primary" />,
      },
      {
        title: "The 2023 Class of Marshall Scholars Has Been Selected",
        source: "Forbes",
        date: "December 2022",
        description: "Hannah Gillespie is featured as one of the 40 American students selected for the prestigious 2023 class of Marshall Scholars.",
        link: "https://www.forbes.com/sites/michaeltnietzel/2022/12/14/the-2023-class-of-marshall-scholars-has-been-selected/",
        icon: <Award className="h-6 w-6 text-primary" />,
      },
      {
        title: "Alumna Hannah Gillespie Named 2023 Marshall Scholar",
        source: "Notre Dame News",
        date: "December 2022",
        description: "Hannah is recognized as Notre Dame's 10th Marshall Scholar, highlighting her commitment to mechanical engineering and international development.",
        link: "https://news.nd.edu/news/alumna-hannah-gillespie-named-2023-marshall-scholar/",
        icon: <Award className="h-6 w-6 text-primary" />,
      },
    ];

  const designEthos = {
    title: "Design Ethos",
    content: "Engineering is about more than technology; it's about people. My approach centers on human-centered design that respects the dignity of every person, ensuring solutions for sustainable development are economically viable and community-driven.",
    icon: <Sparkles className="h-6 w-6 text-primary" />,
  };

  return (
    <section id="news" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured News & Ethos</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Design Ethos Card - Takes up 1 column on large screens */}
          <Card className="lg:col-span-1 border-primary/20 shadow-lg bg-card/50 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                {designEthos.icon}
              </div>
              <CardTitle className="text-2xl">{designEthos.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed italic">
                "{designEthos.content}"
              </p>
            </CardContent>
          </Card>

          {/* News Articles - Takes up 2 columns on large screens */}
          <div className="lg:col-span-2 space-y-6">
            {newsItems.map((item, index) => (
              <Card key={index} className="hover:shadow-md transition-all duration-300 border-l-4 border-l-primary">
                <CardHeader className="flex flex-row items-start justify-between gap-4 pb-2">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Newspaper className="h-4 w-4" />
                      <span>{item.source}</span>
                      <span>•</span>
                      <span>{item.date}</span>
                    </div>
                    <CardTitle className="text-xl pt-1">{item.title}</CardTitle>
                  </div>
                  <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline group"
                  >
                    Read full article
                    <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
