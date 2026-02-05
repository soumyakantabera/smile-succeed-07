import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Briefcase, GraduationCap, Building2, Sparkles, Users, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const programs = [
  {
    title: "Spoken English",
    subtitle: "Build Fluency & Confidence",
    description: "Master everyday conversations with our proven 3-stage method: Controlled Practice → Guided Practice → Free Speaking.",
    icon: BookOpen,
    link: "/english-learning",
    gradient: "from-primary to-primary/70",
    features: ["Daily Speaking Practice", "Pronunciation Mastery", "Real-life Conversations"],
    popular: true,
  },
  {
    title: "Career Accelerator",
    subtitle: "Land Your Dream Job",
    description: "Complete career transformation: ATS-optimized resume, LinkedIn makeover, mock interviews, and salary negotiation.",
    icon: Briefcase,
    link: "/career-counselling",
    gradient: "from-accent to-accent/70",
    features: ["Resume & LinkedIn", "Interview Coaching", "Salary Negotiation"],
    popular: false,
  },
  {
    title: "IELTS Preparation",
    subtitle: "Score 7+ Bands",
    description: "Comprehensive prep for all four modules with timing drills, mock tests, and detailed writing feedback.",
    icon: GraduationCap,
    link: "/ielts-business",
    gradient: "from-success to-success/70",
    features: ["Full Mock Tests", "Band 7+ Strategies", "Writing Reviews"],
    popular: false,
  },
  {
    title: "Business English",
    subtitle: "Professional Communication",
    description: "B2-C1 level training for presentations, negotiations, meetings, and corporate email writing.",
    icon: Building2,
    link: "/ielts-business",
    gradient: "from-warning to-warning/70",
    features: ["Presentation Skills", "Meeting English", "Email Writing"],
    popular: false,
  },
];

const stats = [
  { icon: Users, value: "500+", label: "Happy Students" },
  { icon: Clock, value: "10,000+", label: "Hours Taught" },
  { icon: Award, value: "95%", label: "Success Rate" },
];

const ProgramCards = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative">
        {/* Section Header */}
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Our Programs
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Choose Your Path to
            <span className="gradient-text"> Success</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Personalized programs designed to transform your communication skills and accelerate your career growth.
          </p>
        </AnimatedSection>

        {/* Stats Bar */}
        <AnimatedSection animation="fade-up" delay={100} className="mb-16">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-6 md:p-8">
            <div className="grid grid-cols-3 gap-6 md:gap-12">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">
                      <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-foreground font-heading">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <AnimatedSection 
                key={index}
                animation="fade-up" 
                delay={index * 100 + 200}
              >
                <Link
                  to={program.link}
                  className="group relative bg-card rounded-3xl overflow-hidden border border-border hover:border-transparent transition-all duration-500 card-hover block h-full"
                >
                  {/* Gradient top bar */}
                  <div className={`h-2 bg-gradient-to-r ${program.gradient}`} />
                  
                  {/* Popular badge */}
                  {program.popular && (
                    <div className="absolute top-6 right-6 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold">
                      🔥 Most Popular
                    </div>
                  )}
                  
                  <div className="p-6 md:p-8">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="mb-6">
                      <p className="text-sm text-muted-foreground font-medium mb-1">{program.subtitle}</p>
                      <h3 className="font-heading font-bold text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                        {program.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {program.description}
                      </p>
                    </div>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {program.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${program.gradient} flex items-center justify-center`}>
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-primary font-semibold group-hover:underline">
                        Explore Program
                      </span>
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection animation="fade-up" delay={600} className="text-center">
          <div className="bg-card rounded-2xl p-8 border border-border">
            <p className="text-muted-foreground mb-4">
              Not sure which program is right for you?
            </p>
            <Link to="/pricing">
              <Button size="lg" className="gap-2">
                View All Pricing Plans
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProgramCards;
