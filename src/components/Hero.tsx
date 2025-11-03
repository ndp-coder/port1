import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, Trophy } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      
      {/* Glow effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-glow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-glow" style={{ animationDelay: "1s" }} />
      
      <ScrollReveal delay={1000}>
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="block text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent mb-3">
              Backend Developer & Data Analyst
            </span>
            <span className="block text-foreground">Naga Durga Prasad Chunduru</span>
          </h1>
          
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Crafting robust systems and transforming data into actionable insights
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center pt-6">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground group"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/50 hover:bg-primary/10"
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </Button>
          </div>
          
          <div className="flex gap-6 justify-center pt-8">
            <a
              href="https://github.com/ndp-coder"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/naga-durga-prasad/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:nagadurga20054@gmail.com"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
            <button
              onClick={() => scrollToSection("achievements")}
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="Achievements"
            >
              <Trophy className="h-6 w-6" />
            </button>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Hero;
