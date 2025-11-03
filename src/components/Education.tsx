import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Award, BookOpen, ChevronDown } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const education = [
  {
    institution: "BITS Pilani",
    degree: "BSc Computer Science",
    year: "2nd Year",
    icon: GraduationCap,
    description: "Pursuing Bachelor of Science in Computer Science",
    gradient: "from-primary/20 to-accent/20"
  },
  {
    institution: "NxtWave Institute of Advanced Technology",
    degree: "Advanced Tech Skills",
    year: "In Progress",
    icon: BookOpen,
    description: "Learning industry-relevant technology skills and best practices",
    gradient: "from-accent/20 to-primary/20"
  }
];

const certifications = [
  {
    title: "Gemini for Data Scientists and Analysts by Google Cloud",
    issuer: "Google",
    icon: Award,
    gradient: "https://www.skills.google/public_profiles/bd8e870c-864a-4098-baac-9bb48da9e045/badges/17181964",
    link : "https://www.skills.google/public_profiles/bd8e870c-864a-4098-baac-9bb48da9e045/badges/17181964"
  },
  {
    title: "Machine Learning Operations (MLOps) for Generative AI",
    issuer: "Google",
    icon: Award,
    gradient: "https://www.skills.google/public_profiles/bd8e870c-864a-4098-baac-9bb48da9e045/badges/17153853",
    link : "https://www.skills.google/public_profiles/bd8e870c-864a-4098-baac-9bb48da9e045/badges/17153853"
  },
  {
    title: "Build Real World AI Applications with Gemini and Imagen",
    issuer: "Google",
    icon: Award,
    gradient: "https://www.skills.google/public_profiles/bd8e870c-864a-4098-baac-9bb48da9e045/badges/16361436",
    link : "https://www.skills.google/public_profiles/bd8e870c-864a-4098-baac-9bb48da9e045/badges/16361436"
  },
  {
    title: "Prompt Design in Vertex AI",
    issuer: "Google",
    icon: Award,
    gradient: "https://www.skills.google/public_profiles/bd8e870c-864a-4098-baac-9bb48da9e045/badges/16356378",
    link : "https://www.skills.google/public_profiles/bd8e870c-864a-4098-baac-9bb48da9e045/badges/16356378"
  }
];

const Education = () => {
  const [expandedEducation, setExpandedEducation] = useState(false);
  const [expandedCertifications, setExpandedCertifications] = useState(false);
  const [educationHeight, setEducationHeight] = useState(0);
  const [certHeight, setCertHeight] = useState(0);
  const educationRef = useRef<HTMLDivElement>(null);
  const certRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (educationRef.current) {
      setEducationHeight(educationRef.current.scrollHeight);
    }
  }, []);

  useEffect(() => {
    if (certRef.current) {
      setCertHeight(certRef.current.scrollHeight);
    }
  }, []);

  return (
    <section id="education" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal delay={1000}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Education & <span className="text-accent">Certifications</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Academic background and professional certifications
            </p>
          </div>
        </ScrollReveal>

        <div className="mb-16">
          <ScrollReveal delay={1100}>
            <h3 className="text-2xl font-bold mb-8 text-center">Education</h3>
          </ScrollReveal>
          <div className="flex justify-center px-4">
            <div className="w-full max-w-2xl">
              <ScrollReveal delay={1100}>
                <Card
                  onClick={() => setExpandedEducation(!expandedEducation)}
                  className="p-4 md:p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 group h-full cursor-pointer"
                >
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="p-4 bg-primary/10 group-hover:bg-primary/20 rounded-lg transition-colors">
                      <GraduationCap className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      Click on me to see Education Details
                    </h4>
                    <p className="text-sm md:text-base text-muted-foreground">
                      Expand to view your education information
                    </p>
                    <ChevronDown
                      className={`h-6 w-6 text-primary transition-transform duration-300 mt-2 ${
                        expandedEducation ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </Card>
              </ScrollReveal>

              <div
                ref={educationRef}
                className={`overflow-hidden transition-all duration-500 ease-out ${
                  expandedEducation ? "opacity-100 mt-6" : "opacity-0"
                }`}
                style={{
                  maxHeight: expandedEducation ? `${educationHeight}px` : "0px"
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {education.map((edu, index) => (
                    <div
                      key={edu.institution}
                      className={`transition-all duration-500 ease-out transform ${
                        expandedEducation
                          ? "translate-y-0 opacity-100"
                          : "-translate-y-4 opacity-0"
                      }`}
                      style={{
                        transitionDelay: expandedEducation ? `${index * 150}ms` : "0ms"
                      }}
                    >
                      <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 group h-full">
                        <div className={`h-2 w-full rounded-t-lg bg-gradient-to-r ${edu.gradient} mb-6 group-hover:h-3 transition-all`} />

                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                            <edu.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                              {edu.institution}
                            </h4>
                            <p className="text-lg font-semibold mb-1 text-muted-foreground">
                              {edu.degree}
                            </p>
                            <p className="text-sm text-accent font-medium mb-3">
                              {edu.year}
                            </p>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {edu.description}
                            </p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <ScrollReveal delay={1300}>
            <h3 className="text-2xl font-bold mb-8 text-center">Certifications</h3>
          </ScrollReveal>
          <div className="flex justify-center px-4">
            <div className="w-full max-w-4xl">
              <ScrollReveal delay={1300}>
                <Card
                  onClick={() => setExpandedCertifications(!expandedCertifications)}
                  className="p-4 md:p-8 bg-card border-border hover:border-accent/50 transition-all duration-300 group h-full cursor-pointer"
                >
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="p-4 bg-accent/10 group-hover:bg-accent/20 rounded-lg transition-colors">
                      <Award className="h-8 w-8 text-accent" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                      Click on me to see Certifications
                    </h4>
                    <p className="text-sm md:text-base text-muted-foreground">
                      Expand to view your certifications
                    </p>
                    <ChevronDown
                      className={`h-6 w-6 text-accent transition-transform duration-300 mt-2 ${
                        expandedCertifications ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </Card>
              </ScrollReveal>

              <div
                ref={certRef}
                className={`overflow-hidden transition-all duration-500 ease-out ${
                  expandedCertifications ? "opacity-100 mt-6" : "opacity-0"
                }`}
                style={{
                  maxHeight: expandedCertifications ? `${certHeight}px` : "0px"
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {certifications.map((cert, index) => (
                    <div
                      key={cert.title}
                      className={`transition-all duration-500 ease-out transform ${
                        expandedCertifications
                          ? "translate-y-0 opacity-100"
                          : "-translate-y-4 opacity-0"
                      }`}
                      style={{
                        transitionDelay: expandedCertifications ? `${index * 150}ms` : "0ms"
                      }}
                    >
                      <Card className="p-6 bg-card border-border hover:border-accent/50 transition-all duration-300 group h-full">
                        <div className={`h-2 w-full rounded-t-lg bg-gradient-to-r ${cert.gradient} mb-6 group-hover:h-3 transition-all`} />

                        <div className="flex flex-col items-center text-center">
                          <div className="p-4 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors mb-4">
                            <cert.icon className="h-8 w-8 text-accent" />
                          </div>
                          <h4 className="text-lg font-bold mb-2 text-foreground group-hover:text-accent transition-colors">
                            {cert.title}
                          </h4>
                          <p className="text-sm text-muted-foreground font-medium mb-4">
                            Issued by {cert.issuer}
                          </p>
                          <Button
                            onClick={() => window.open(cert.link, '_blank')}
                            className="w-full"
                          >
                            See the Cert
                          </Button>
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

export default Education;
