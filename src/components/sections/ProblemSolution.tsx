import { UserX, Users, Mic, BookOpen, Mail, Clock, LucideIcon, ArrowRight, Zap } from "lucide-react";
import { PROBLEMS, WHATSAPP_URL } from "@/lib/constants";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, LucideIcon> = {
  UserX,
  Users,
  Mic,
  BookOpen,
  Mail,
  Clock,
};

const ProblemSolution = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-background via-card to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/5 to-transparent" />
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative">
        {/* Section Header */}
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>😰</span>
            Sound Familiar?
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Struggling with
            <span className="text-accent"> These Challenges?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            You're not alone. <span className="text-foreground font-medium">80% of professionals</span> face these exact problems. Here's how we help.
          </p>
        </AnimatedSection>

        {/* Problem Cards - Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {PROBLEMS.map((problem, index) => {
            const IconComponent = iconMap[problem.icon];
            const isLarge = index === 0 || index === 3;
            
            return (
              <AnimatedSection 
                key={index}
                animation="fade-up"
                delay={index * 80}
                className={isLarge ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <div className="group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-500 h-full overflow-hidden">
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-500" />
                  
                  <div className="relative z-10">
                    {/* Icon with pulse effect */}
                    <div className="relative mb-5">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-7 h-7 text-primary" />
                      </div>
                      <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                    </div>
                    
                    <h3 className="font-heading font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                      {problem.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Solution CTA */}
        <AnimatedSection animation="fade-up" delay={500}>
          <div className="relative bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-8 md:p-12 text-center overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 bg-background rounded-full -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-background rounded-full translate-x-1/3 translate-y-1/3" />
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-background/20 backdrop-blur-sm px-4 py-2 rounded-full text-primary-foreground text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                The Solution
              </div>
              
              <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Overcome These Challenges?
              </h3>
              
              <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
                Join 500+ students who transformed their English and career confidence with personalized coaching.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`${WHATSAPP_URL}&text=${encodeURIComponent("Hi! I'm struggling with English confidence. Can you help?")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="lg" 
                    className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 h-14 px-8 shadow-xl"
                  >
                    Yes, Help Me Improve!
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProblemSolution;
