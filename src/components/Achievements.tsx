import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { ChevronDown, Trophy, Code, GitBranch, Target } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const achievementCategories = [
  {
    id: "leetcode",
    title: "LeetCode",
    description: "Solved 200+ coding problems",
    icon: Code,
    gradient: "from-primary/20 to-accent/20",
    count: 1
  },
  {
    id: "github",
    title: "GitHub Contributions",
    description: "Open source projects and contributions",
    icon: GitBranch,
    gradient: "from-accent/20 to-primary/20",
    count: 0
  },
  {
    id: "awards",
    title: "Awards & Recognition",
    description: "Certifications and recognition",
    icon: Trophy,
    gradient: "from-primary/20 to-secondary/40",
    count: 0
  },
  {
    id: "milestones",
    title: "Milestones",
    description: "Career and learning milestones",
    icon: Target,
    gradient: "from-secondary/40 to-accent/20",
    count: 0
  }
];

const achievementsByCategory = {
  leetcode: [
    {
      title: "Solved 200+ Problems",
      description: "Successfully solved over 200 LeetCode problems covering arrays, strings, dynamic programming, graphs, trees, and more.",
      stats: "200+",
      category: "LeetCode",
      badge: "Code Master",
      icon: Code,
      gradient: "from-primary/20 to-accent/20",
      difficulty: "Intermediate to Hard"
    }
  ],
  github: [],
  awards: [],
  milestones: []
};

const Achievements = () => {
  const [expandedAchievements, setExpandedAchievements] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [categoriesHeight, setCategoriesHeight] = useState(0);
  const [achievementsHeight, setAchievementsHeight] = useState(0);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const achievementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (categoriesRef.current) {
      setCategoriesHeight(categoriesRef.current.scrollHeight);
    }
  }, [expandedAchievements]);

  useEffect(() => {
    if (achievementsRef.current) {
      setAchievementsHeight(achievementsRef.current.scrollHeight);
    }
  }, [selectedCategory]);

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
  };

  const selectedCategoryAchievements = selectedCategory ? achievementsByCategory[selectedCategory as keyof typeof achievementsByCategory] : [];

  return (
    <section id="achievements" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal delay={1000}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-accent">Achievements</span> & Milestones
            </h2>
            <p className="text-muted-foreground text-lg">
              Recognition of skills, contributions, and accomplishments
            </p>
          </div>
        </ScrollReveal>

        <div className="flex justify-center px-4">
          <div className="w-full max-w-6xl">
            <ScrollReveal delay={1100}>
              <Card
                onClick={() => {
                  setExpandedAchievements(!expandedAchievements);
                  if (!expandedAchievements) {
                    setSelectedCategory(null);
                  }
                }}
                className="p-4 md:p-8 bg-card border-border hover:border-accent/50 transition-all duration-300 group h-full cursor-pointer"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-4 bg-accent/10 group-hover:bg-accent/20 rounded-lg transition-colors">
                    <Trophy className="h-8 w-8 text-accent" />
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                    Click on me to see Achievements
                  </h4>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Expand to view achievement categories
                  </p>
                  <ChevronDown
                    className={`h-6 w-6 text-accent transition-transform duration-300 mt-2 ${
                      expandedAchievements ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </Card>
            </ScrollReveal>

            {!selectedCategory ? (
              <div
                ref={categoriesRef}
                className={`overflow-hidden transition-all duration-500 ease-out ${
                  expandedAchievements ? "opacity-100 mt-6" : "opacity-0"
                }`}
                style={{
                  maxHeight: expandedAchievements ? `${categoriesHeight}px` : "0px"
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {achievementCategories.map((category, index) => (
                    <div
                      key={category.id}
                      className={`transition-all duration-500 ease-out transform ${
                        expandedAchievements
                          ? "translate-y-0 opacity-100"
                          : "-translate-y-4 opacity-0"
                      }`}
                      style={{
                        transitionDelay: expandedAchievements ? `${index * 150}ms` : "0ms"
                      }}
                    >
                      <Card
                        onClick={() => handleCategoryClick(category.id)}
                        className="p-6 bg-card border-border hover:border-accent/50 transition-all duration-300 group h-full cursor-pointer flex flex-col"
                      >
                        <div className={`h-2 w-full rounded-t-lg bg-gradient-to-r ${category.gradient} mb-6 group-hover:h-3 transition-all`} />

                        <div className="flex flex-col items-center text-center flex-grow">
                          <div className="p-4 bg-accent/10 group-hover:bg-accent/20 rounded-lg transition-colors mb-4">
                            <category.icon className="h-8 w-8 text-accent" />
                          </div>

                          <h4 className="text-lg font-bold mb-2 text-foreground group-hover:text-accent transition-colors">
                            {category.title}
                          </h4>

                          <p className="text-sm text-muted-foreground mb-4 flex-grow">
                            {category.description}
                          </p>

                          <div className="mt-auto">
                            <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                              {category.count} {category.count === 1 ? 'Achievement' : 'Achievements'}
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
                ref={achievementsRef}
                className={`overflow-hidden transition-all duration-500 ease-out ${
                  expandedAchievements && selectedCategory ? "opacity-100 mt-6" : "opacity-0"
                }`}
                style={{
                  maxHeight: expandedAchievements && selectedCategory ? `${achievementsHeight}px` : "0px"
                }}
              >
                <div className="mb-6">
                  <button
                    onClick={handleBackToCategories}
                    className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
                  >
                    <ChevronDown className="h-5 w-5 rotate-90" />
                    Back to Categories
                  </button>
                </div>

                {selectedCategoryAchievements.length > 0 ? (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {selectedCategoryAchievements.map((achievement, index) => (
                      <div
                        key={achievement.title}
                        className={`transition-all duration-500 ease-out transform ${
                          selectedCategory
                            ? "translate-y-0 opacity-100"
                            : "-translate-y-4 opacity-0"
                        }`}
                        style={{
                          transitionDelay: selectedCategory ? `${index * 150}ms` : "0ms"
                        }}
                      >
                        <Card className="p-8 bg-card border-border hover:border-accent/50 transition-all duration-300 group h-full flex flex-col">
                          <div className={`h-2 w-full rounded-t-lg bg-gradient-to-r ${achievement.gradient} mb-8 group-hover:h-3 transition-all`} />

                          <div className="text-center mb-6">
                            <div className="inline-flex items-center justify-center">
                              <div className="p-4 bg-accent/20 rounded-full">
                                <achievement.icon className="h-12 w-12 text-accent" />
                              </div>
                            </div>
                          </div>

                          <div className="text-center mb-6">
                            <span className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-bold rounded-full mb-4">
                              {achievement.badge}
                            </span>
                            <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors mb-2">
                              {achievement.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4">
                              {achievement.category}
                            </p>
                          </div>

                          <p className="text-foreground mb-6 leading-relaxed flex-grow text-center">
                            {achievement.description}
                          </p>

                          <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border/50">
                            <div className="text-center">
                              <div className="text-3xl font-bold text-accent mb-1">
                                {achievement.stats}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                Problems Solved
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="text-xl font-bold text-primary mb-1">
                                {achievement.difficulty}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                Difficulty Level
                              </div>
                            </div>
                          </div>
                        </Card>
                      </div>
                    ))}
                  </div>
                ) : (
                  <Card className="p-8 bg-card border-border text-center">
                    <p className="text-muted-foreground text-lg">
                      No achievements in this category yet. Coming soon!
                    </p>
                  </Card>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
