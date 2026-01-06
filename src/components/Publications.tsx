import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Calendar, MapPin, User, FlaskRound } from "lucide-react";
import Image from "next/image";

export default function Publications() {
    const publications = [
    {
      title: "Perspectives on Risk Mitigation Among Homeowners Across the Disaster Recovery Life Cycle",
      authors: "T. Kijewski-Correa, D. Javeline, A. Chesler, K. Richman, H. Gillespie, A. Taflanidis",
      venue: "2nd International Conference on Natural Hazards & Infrastructure (ICONHIC 2019)",
      date: "23-26 June, 2019",
      location: "Chania, Greece",
      institution: "University of Notre Dame",
      link: "https://drive.google.com/file/d/1yjBAS4F-QQt9T5p3Q2IfQ4JJ6h0AEZsq/view",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/fd7356cb-78eb-41c8-9e6e-ac71139d03d8/Leogane.0ff8fb3659aa6ce610d2-1767701040140.png?width=8000&height=8000&resize=contain",
    },
    {
      title: "Investigation of a High Speed Inlet/Isolator with Global Surface Measurements and Background Oriented Schlieren",
      authors: "A. Bustard, H. Gillespie, J. Crane, S. Tan, and T. Juliano",
      venue: "AIAA SCITECH 2023 Forum",
      date: "January 2023",
        location: "National Harbor, Maryland",
        link: "https://arc.aiaa.org/doi/10.2514/6.2023-0119",
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/fd7356cb-78eb-41c8-9e6e-ac71139d03d8/image-1740685938171.png?width=8000&height=8000&resize=contain",
      },
  ];

    const patents = [
      {
        title: "Fastener Collar Retainer",
        id: "US20230030042A1",
        date: "Feb 2023",
        status: "Granted Patent",
        link: "https://patents.google.com/patent/US20230030042A1/en?oq=US-20230030042-A1",
      },
        {
          title: "Runway Incursion Detection (Patent Pending)",
          id: "US20250124796A1",
          date: "April 2025",
          status: "Patent Pending",
          link: "https://patents.google.com/patent/US20250124796A1/en?inventor=Hannah+G.+GILLESPIE",
        },
    ];


  return (
    <section id="publications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Publications & Patents</h2>
        
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            Selected Publications
          </h3>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  {pub.image && (
                    <div className="w-full md:w-48 lg:w-64 h-48 md:h-auto relative shrink-0">
                      <Image
                        src={pub.image}
                        alt={pub.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <CardHeader>
                      <CardTitle className="text-xl text-primary">{pub.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start gap-3">
                        <User className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0" />
                        <p className="text-sm font-medium">{pub.authors}</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3">
                          <BookOpen className="h-5 w-5 text-muted-foreground shrink-0" />
                          <p className="text-sm">{pub.venue}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Calendar className="h-5 w-5 text-muted-foreground shrink-0" />
                          <p className="text-sm">{pub.date}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <MapPin className="h-5 w-5 text-muted-foreground shrink-0" />
                          <p className="text-sm">{pub.location}</p>
                        </div>
                        {pub.institution && (
                          <div className="flex items-center gap-3">
                            <div className="h-5 w-5 text-muted-foreground flex items-center justify-center shrink-0">
                              <span className="text-[10px] font-bold">UNI</span>
                            </div>
                            <p className="text-sm">{pub.institution}</p>
                          </div>
                        )}
                      </div>
                      {pub.link && (
                        <div className="pt-2">
                          <a
                            href={pub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-primary hover:underline flex items-center gap-1"
                          >
                            View Publication
                          </a>
                        </div>
                      )}
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <FlaskConical className="h-6 w-6 text-primary" />
            Patents
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {patents.map((patent, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex justify-between items-start gap-4">
                    <CardTitle className="text-lg leading-tight">{patent.title}</CardTitle>
                    {patent.status && (
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary px-2 py-1 rounded-full whitespace-nowrap">
                        {patent.status}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-sm font-mono bg-muted px-2 py-0.5 rounded text-muted-foreground">
                      {patent.id}
                    </span>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {patent.date}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <a
                    href={patent.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline flex items-center gap-1"
                  >
                    View on Google Patents
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
