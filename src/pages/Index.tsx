import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border/50 py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Your Name. Built with React, Three.js, and modern web technologies.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
