import { UserX, Users, Mic, BookOpen, Mail, Clock, LucideIcon } from "lucide-react";
import { PROBLEMS } from "@/lib/constants";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

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
    <section className="section-padding bg-card">
      <div className="container-custom">
        {/* Section Header */}
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Struggling with These Challenges?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            You're not alone. These are the exact problems we help you solve every day.
          </p>
        </AnimatedSection>

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROBLEMS.map((problem, index) => {
            const IconComponent = iconMap[problem.icon];
            return (
              <AnimatedSection 
                key={index}
                animation="fade-up"
                delay={index * 80}
              >
                <div className="group bg-background rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 card-hover h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection animation="fade" delay={500} className="text-center mt-12">
          <p className="text-foreground font-medium text-lg">
            Ready to overcome these challenges?{" "}
            <span className="text-primary">We're here to help.</span>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProblemSolution;