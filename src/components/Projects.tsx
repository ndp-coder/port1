import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, FolderGit2, Clock, ChevronDown, Code2, Server, BarChart3, Zap, ArrowLeft } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const projectCategories = [
  {
    id: "fullstack",
    title: "Full Stack Applications",
    description: "Complete web applications with frontend and backend",
    icon: Code2,
    gradient: "from-primary/20 to-accent/20",
    count: 3
  },
  {
    id: "backend",
    title: "Backend Projects",
    description: "Robust backend systems and APIs",
    icon: Server,
    gradient: "from-accent/20 to-primary/20",
    count: 5
  },
  {
    id: "powerbi",
    title: "Power BI Dashboards",
    description: "Data visualization and analytics dashboards",
    icon: BarChart3,
    gradient: "from-primary/20 to-secondary/40",
    count: 0
  },
  {
    id: "powerautomate",
    title: "Power Automate Flows",
    description: "Automation workflows and integrations",
    icon: Zap,
    gradient: "from-secondary/40 to-accent/20",
    count: 0
  }
];

const projectsByCategory = {
  fullstack: [
    {
      title: "Q and A generator",
      description: "Built an AI-powered Question and Answer generator using Gemini API to dynamically create answers based on user input. Implemented Razorpay Payment Gateway for secure transaction handling, allowing users to access premium features after successful payment.",
      tags: ["html", "css", "js", "express.js", "node.js"],
      gradient: "from-primary/20 to-accent/20",
      github: "https://github.com/ndp-coder",
      demo: "https://qandagenerator.netlify.app/"
    },
    {
      title: "Mentor.ai",
      description: "Developed the front-end user interface using HTML, CSS, and JavaScript, focusing on responsive design and accessibility. Implemented client-side data fetching and manipulation using asynchronous JavaScript, interacting with the Gemini API for AI-powered mentorship suggestions. It is built by giving 1000+ lines of prompt. Designed and implemented a PostgreSQL database schema to store user profiles, mentorship preferences, and AI interaction history.",
      tags: ["HTML", "CSS", "JavaScript", "postgresql", "gemini api"],
      gradient: "from-accent/20 to-primary/20",
      github: "https://github.com/ndp-coder",
      demo: "https://coustmizeai.netlify.app/"
    },
    {
      title: "Auto Swaggers",
      description: "Just drag and drop your project files (or pick them from your file manager). The AI reads your code, understands your APIs, and instantly generates Swagger annotations and JSON docs.",
      tags: ["node.js", "postgresql", "gemini api"],
      gradient: "from-primary/20 to-secondary/40",
      github: "https://github.com/ndp-coder",
      demo: "https://auto-swagger-mind.lovable.app/"
    }
  ],
  backend: [
    {
      title: "Prescription Dispensing System",
      description: "Built in Go, this system streamlines pharmacy operations by automating prescription verification, stock management, and safe medicine dispensing with complete traceability.",
      tags: ["go", "postgresql", "redis", "rest api", "gin"],
      gradient: "from-primary/20 to-secondary/40",
      github: "https://github.com/ndp-coder/pds"
    },
    {
      title: "Offline-First Data Sync Platform",
      description: "Developed a Go-based backend using Gin, Redis, and PostgreSQL to handle offline data collection in rural healthcare projects. Redis stores records when the network is unavailable. PostgreSQL sync ensures data consistency once online. RESTful APIs for saving, fetching, and syncing data. Improved data reliability and reduced manual entry errors.",
      tags: ["go", "postgresql", "redis", "rest api", "gin"],
      gradient: "from-primary/20 to-secondary/40",
      github: "https://github.com/ndp-coder/dataCollectionFromPeople"
    },
    {
      title: "Movie Ticket Booking Backend",
      description: "A Go-based web application enabling real-time seat selection, payment integration, and booking management with concurrency-safe APIs and database-backed scheduling.",
      tags: ["go", "postgresql", "redis", "rest api", "gin"],
      gradient: "from-primary/20 to-secondary/40",
      github: "https://github.com/ndp-coder/bookmyshow-go1"
    },
    {
      title: "Ecommerce Backend",
      description: "A scalable Go-powered backend handling product management, user authentication, and order processing with secure APIs and optimized database performance.",
      tags: ["go", "postgresql", "redis", "rest api"],
      gradient: "from-primary/20 to-secondary/40",
      github: "https://github.com/ndp-coder/ecommers-go1"
    },
    {
      title: "Finance Tracker",
      description: "A Go-based backend system for managing income, expenses, and analytics with secure data storage and real-time financial summaries.",
      tags: ["go", "postgresql", "redis", "rest api", "gin"],
      gradient: "from-primary/20 to-secondary/40",
      github: "https://github.com/ndp-coder/fainance-tracker-go"
    }
  ],
  powerbi: [],
  powerautomate: []
};

const upcomingProjects = [
  {
    title: "DocuMind AI",
    description: "Just drag and drop your project files (or pick them from your file manager). The AI reads your code, understands your APIs, and instantly generates front-end code in React",
    tags: ["gemini api", "node.js"],
    gradient: "from-primary/20 to-accent/20",
    status: "Building"
  }
];

const Projects = () => {
  const [expandedProjects, setExpandedProjects] = useState(false);
  const [expandedUpcoming, setExpandedUpcoming] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [categoriesHeight, setCategoriesHeight] = useState(0);
  const [projectsHeight, setProjectsHeight] = useState(0);
  const [upcomingHeight, setUpcomingHeight] = useState(0);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const upcomingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (categoriesRef.current) {
      setCategoriesHeight(categoriesRef.current.scrollHeight);
    }
  }, [expandedProjects]);

  useEffect(() => {
    if (projectsRef.current) {
      setProjectsHeight(projectsRef.current.scrollHeight);
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (upcomingRef.current) {
      setUpcomingHeight(upcomingRef.current.scrollHeight);
    }
  }, []);

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
  };

  const selectedCategoryProjects = selectedCategory ? projectsByCategory[selectedCategory as keyof typeof projectsByCategory] : [];

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal delay={1000}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-accent">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Some of my recent work and upcoming initiatives
            </p>
          </div>
        </ScrollReveal>

        <div className="mb-16">
          <ScrollReveal delay={1100}>
            <h3 className="text-2xl font-bold mb-8 text-center">Completed Projects</h3>
          </ScrollReveal>
          <div className="flex justify-center px-4">
            <div className="w-full max-w-6xl">
              <ScrollReveal delay={1100}>
                <Card
                  onClick={() => {
                    setExpandedProjects(!expandedProjects);
                    if (!expandedProjects) {
                      setSelectedCategory(null);
                    }
                  }}
                  className="p-4 md:p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 group h-full cursor-pointer"
                >
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="p-4 bg-primary/10 group-hover:bg-primary/20 rounded-lg transition-colors">
                      <FolderGit2 className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      Click on me to see Completed Projects
                    </h4>
                    <p className="text-sm md:text-base text-muted-foreground">
                      Expand to view project categories
                    </p>
                    <ChevronDown
                      className={`h-6 w-6 text-primary transition-transform duration-300 mt-2 ${
                        expandedProjects ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </Card>
              </ScrollReveal>

              {!selectedCategory ? (
                <div
                  ref={categoriesRef}
                  className={`overflow-hidden transition-all duration-500 ease-out ${
                    expandedProjects ? "opacity-100 mt-6" : "opacity-0"
                  }`}
                  style={{
                    maxHeight: expandedProjects ? `${categoriesHeight}px` : "0px"
                  }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {projectCategories.map((category, index) => (
                      <div
                        key={category.id}
                        className={`transition-all duration-500 ease-out transform ${
                          expandedProjects
                            ? "translate-y-0 opacity-100"
                            : "-translate-y-4 opacity-0"
                        }`}
                        style={{
                          transitionDelay: expandedProjects ? `${index * 150}ms` : "0ms"
                        }}
                      >
                        <Card
                          onClick={() => handleCategoryClick(category.id)}
                          className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 group h-full cursor-pointer flex flex-col"
                        >
                          <div className={`h-2 w-full rounded-t-lg bg-gradient-to-r ${category.gradient} mb-6 group-hover:h-3 transition-all`} />

                          <div className="flex flex-col items-center text-center flex-grow">
                            <div className="p-4 bg-primary/10 group-hover:bg-primary/20 rounded-lg transition-colors mb-4">
                              <category.icon className="h-8 w-8 text-primary" />
                            </div>

                            <h4 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                              {category.title}
                            </h4>

                            <p className="text-sm text-muted-foreground mb-4 flex-grow">
                              {category.description}
                            </p>

                            <div className="mt-auto">
                              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                                {category.count} {category.count === 1 ? 'Project' : 'Projects'}
                              </span>
                            </div>
                          </div>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div
                  ref={projectsRef}
                  className={`overflow-hidden transition-all duration-500 ease-out ${
                    expandedProjects && selectedCategory ? "opacity-100 mt-6" : "opacity-0"
                  }`}
                  style={{
                    maxHeight: expandedProjects && selectedCategory ? `${projectsHeight}px` : "0px"
                  }}
                >
                  <div className="mb-6">
                    <Button
                      onClick={handleBackToCategories}
                      variant="outline"
                      className="border-primary/50 hover:bg-primary/10"
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Back to Categories
                    </Button>
                  </div>

                  {selectedCategoryProjects.length > 0 ? (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {selectedCategoryProjects.map((project, index) => (
                        <div
                          key={project.title}
                          className={`transition-all duration-500 ease-out transform ${
                            selectedCategory
                              ? "translate-y-0 opacity-100"
                              : "-translate-y-4 opacity-0"
                          }`}
                          style={{
                            transitionDelay: selectedCategory ? `${index * 150}ms` : "0ms"
                          }}
                        >
                          <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 group h-full flex flex-col">
                            <div className={`h-2 w-full rounded-t-lg bg-gradient-to-r ${project.gradient} mb-6 group-hover:h-3 transition-all`} />

                            <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                              {project.title}
                            </h3>

                            <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
                              {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                              {project.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="text-xs px-3 py-1 bg-secondary border border-border rounded-full text-muted-foreground"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            <div className="flex gap-3">
                              <Button
                                variant="outline"
                                size="sm"
                                className="border-primary/50 hover:bg-primary/10"
                                onClick={() => window.open(project.github, "_blank")}
                              >
                                <Github className="h-4 w-4 mr-2" />
                                Code
                              </Button>
                              {project.demo && (
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="border-accent/50 hover:bg-accent/10"
                                  onClick={() => window.open(project.demo, "_blank")}
                                >
                                  <ExternalLink className="h-4 w-4 mr-2" />
                                  Demo
                                </Button>
                              )}
                            </div>
                          </Card>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <Card className="p-8 bg-card border-border text-center">
                      <p className="text-muted-foreground text-lg">
                        No projects in this category yet. Coming soon!
                      </p>
                    </Card>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        <div>
          <ScrollReveal delay={1300}>
            <h3 className="text-2xl font-bold mb-8 text-center">Upcoming Projects</h3>
          </ScrollReveal>
          <div className="flex justify-center px-4">
            <div className="w-full max-w-6xl">
              <ScrollReveal delay={1300}>
                <Card
                  onClick={() => setExpandedUpcoming(!expandedUpcoming)}
                  className="p-4 md:p-8 bg-card border-border hover:border-accent/50 transition-all duration-300 group h-full cursor-pointer"
                >
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="p-4 bg-accent/10 group-hover:bg-accent/20 rounded-lg transition-colors">
                      <Clock className="h-8 w-8 text-accent" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                      Click on me to see Upcoming Projects
                    </h4>
                    <p className="text-sm md:text-base text-muted-foreground">
                      Expand to view projects in development
                    </p>
                    <ChevronDown
                      className={`h-6 w-6 text-accent transition-transform duration-300 mt-2 ${
                        expandedUpcoming ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </Card>
              </ScrollReveal>

              <div
                ref={upcomingRef}
                className={`overflow-hidden transition-all duration-500 ease-out ${
                  expandedUpcoming ? "opacity-100 mt-6" : "opacity-0"
                }`}
                style={{
                  maxHeight: expandedUpcoming ? `${upcomingHeight}px` : "0px"
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {upcomingProjects.map((project, index) => (
                    <div
                      key={project.title}
                      className={`transition-all duration-500 ease-out transform ${
                        expandedUpcoming
                          ? "translate-y-0 opacity-100"
                          : "-translate-y-4 opacity-0"
                      }`}
                      style={{
                        transitionDelay: expandedUpcoming ? `${index * 150}ms` : "0ms"
                      }}
                    >
                      <Card className="p-6 bg-card border-border hover:border-accent/50 transition-all duration-300 group h-full flex flex-col">
                        <div className={`h-2 w-full rounded-t-lg bg-gradient-to-r ${project.gradient} mb-6 group-hover:h-3 transition-all`} />

                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                            {project.title}
                          </h3>
                        </div>

                        <div className="mb-4">
                          <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                            {project.status}
                          </span>
                        </div>

                        <p className="text-muted-foreground mb-4 leading-relaxed flex-grow text-sm">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-3 py-1 bg-secondary border border-border rounded-full text-muted-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
