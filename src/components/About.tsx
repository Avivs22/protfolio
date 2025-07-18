import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js", "Python", "SQL", "Docker", "Next.js","C#"
  ];

  const stats = [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "5+" },
    { label: "Technologies", value: "10+" },
  ];

  return (
    <section className="py-24 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 slide-in-left">
          <span className="bg-gradient-cyber bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        <div className="w-20 h-1 bg-gradient-cyber mx-auto mb-8 rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* About Content */}
        <div className="space-y-6 slide-in-left">
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate full-stack developer with a love for creating innovative 
              digital solutions. With expertise in modern web technologies, I transform 
              complex problems into elegant, user-friendly applications.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in software development spans across frontend frameworks, 
              backend architectures, and cloud technologies. I believe in writing 
              clean, maintainable code and staying current with industry trends.
            </p>
          </div>

          {/* Skills */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-primary">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge 
                  key={skill} 
                  variant="outline" 
                  className="glass border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-6 slide-in-right">
          {stats.map((stat, index) => (
            <Card 
              key={stat.label} 
              className="glass hover-lift border-border/50 hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;