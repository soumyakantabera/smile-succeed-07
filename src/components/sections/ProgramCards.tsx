import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Briefcase, GraduationCap, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const programs = [
  {
    title: "Spoken English",
    description: "Build fluency and confidence in everyday English conversation. From controlled practice to free speaking.",
    icon: BookOpen,
    link: "/english-learning",
    color: "bg-primary/10 text-primary",
  },
  {
    title: "Career Accelerator",
    description: "Resume optimization, interview prep, LinkedIn makeover, and professional communication skills.",
    icon: Briefcase,
    link: "/career-counselling",
    color: "bg-accent/10 text-accent",
  },
  {
    title: "IELTS Preparation",
    description: "Comprehensive prep for all four modules with timing drills, mock tests, and writing review.",
    icon: GraduationCap,
    link: "/ielts-business",
    color: "bg-success/10 text-success",
  },
  {
    title: "Business English",
    description: "B2-C1 level training for presentations, negotiations, meetings, and professional updates.",
    icon: Building2,
    link: "/ielts-business",
    color: "bg-warning/10 text-warning",
  },
];

const ProgramCards = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Choose Your Path
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Whether you need English fluency or career guidance, we have a program designed for your goals.
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <Link
                key={index}
                to={program.link}
                className="group bg-card rounded-2xl p-6 md:p-8 border border-border hover:border-primary/50 transition-all duration-300 card-hover"
              >
                <div className={`w-14 h-14 ${program.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-7 h-7" />
                </div>
                
                <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                  {program.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {program.description}
                </p>
                
                <div className="flex items-center text-primary font-medium group-hover:gap-3 gap-2 transition-all">
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* View Pricing CTA */}
        <div className="text-center mt-12">
          <Link to="/pricing">
            <Button size="lg" variant="outline" className="gap-2">
              View Pricing Plans
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProgramCards;
