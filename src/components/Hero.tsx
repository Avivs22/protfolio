import { Button } from "@/components/ui/button";
import ThreeScene from "./ThreeScene";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Three.js Background */}
      <div className="absolute inset-0 z-0">
        <ThreeScene className="w-full h-full" />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/80 z-10" />
      
      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <div className="space-y-6 slide-in-left">
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="text-glow">Hello, I'm</span>
            <br />
            <span className="bg-gradient-cyber bg-clip-text text-transparent text-glow">
              Aviv Smadja
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Full-Stack Developer crafting digital experiences with modern technologies
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button 
              size="lg" 
              className="neon-glow hover:shadow-purple transition-all duration-300 bg-primary hover:bg-primary/90"
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="glass border-primary text-primary hover:bg-primary/10 hover:shadow-neon transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>
        </div>
        
        {/* Floating indicators */}
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 floating">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm text-muted-foreground">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;