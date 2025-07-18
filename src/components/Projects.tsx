import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "GoldenPath",
      description: "A real-time interactive map that tracks global flight paths, lets users simulate bomb deployments with custom parameters, and calculates potential collisions using vector math to alert endangered planes and suggest evasive action.",
      tech: ["React", "Node.js", "Typescript", "FastAPI","PortguseSQL"],
      github: "https://github.com/Avivs22/GoldenPathProject",
      demo: "https://goldenpathfrontend.netlify.app/",
      featured: true
    },
    {
      title: "SafeScan",
      description: "A sleek, animated frontend dashboard built for a cybersecurity company that analyzes URLs for malicious behavior, showing detailed scan results by time, device, and threat level—with support for uploading new URLs for real-time analysis.",
      tech: ["React", "TypeScript", "FastAPI"],
      github: "https://github.com/Avivs22/planet9Job",
      demo: "https://planet9job.netlify.app/",
      featured: true
    },
  ];

  return (
    <section className="py-24 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 slide-in-left">
          <span className="bg-gradient-cyber bg-clip-text text-transparent">
            My Projects
          </span>
        </h2>
        <div className="w-20 h-1 bg-gradient-cyber mx-auto mb-8 rounded-full" />
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A collection of projects that showcase my skills and passion for development
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card 
            key={project.title}
            className={`group glass hover-lift border-border/50 hover:border-primary/50 transition-all duration-300 ${
              project.featured ? 'md:col-span-2 lg:col-span-1' : ''
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start mb-2">
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                {project.featured && (
                  <Badge className="bg-gradient-cyber text-primary-foreground border-0">
                    Featured
                  </Badge>
                )}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {project.description}
              </p>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge 
                    key={tech} 
                    variant="outline" 
                    className="text-xs border-primary/30 text-primary/80 hover:bg-primary/10 transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-2">
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="flex-1 glass border-primary/50 hover:bg-primary/10 hover:border-primary transition-all"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
                <Button 
                  size="sm" 
                  className="flex-1 bg-primary hover:bg-primary/90 hover:shadow-neon transition-all"
                  onClick={() => window.open(project.demo, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;