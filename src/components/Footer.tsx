import { Github, Linkedin, Mail, Trophy } from "lucide-react";

const Footer = () => {
  const handleAchievementsClick = () => {
    const achievementsSection = document.getElementById("achievements");
    if (achievementsSection) {
      achievementsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © 2025 Naga Durga Prasad Chunduru
            </p>
          </div>

          <div className="flex gap-6">
            <button
              onClick={handleAchievementsClick}
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="Achievements"
              title="View Achievements"
            >
              <Trophy className="h-5 w-5" />
            </button>
            <a
              href="https://github.com/ndp-coder"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/naga-durga-prasad/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:nagadurga20054@gmail.com"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
