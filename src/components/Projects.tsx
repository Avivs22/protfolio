import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and real-time inventory tracking.",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Socket.io"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "WebSocket"],
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "AI Chat Application",
      description: "Intelligent chatbot application powered by OpenAI API with conversation history, context awareness, and custom training capabilities.",
      tech: ["React", "Python", "FastAPI", "OpenAI", "Redis"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather dashboard with location-based forecasts, interactive maps, and historical weather data visualization.",
      tech: ["Vue.js", "D3.js", "Express", "Weather API", "Chart.js"],
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "Social Media Analytics",
      description: "Comprehensive analytics platform for social media performance tracking with automated reporting and insights generation.",
      tech: ["React", "Python", "Django", "PostgreSQL", "AWS"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Portfolio Website",
      description: "This very portfolio website built with React, Three.js, and modern web technologies to showcase my work and skills.",
      tech: ["React", "Three.js", "TypeScript", "Tailwind", "Vite"],
      github: "#",
      demo: "#",
      featured: false
    }
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
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
                <Button 
                  size="sm" 
                  className="flex-1 bg-primary hover:bg-primary/90 hover:shadow-neon transition-all"
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