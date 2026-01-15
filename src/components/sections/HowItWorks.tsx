import { MessageSquare, Target, Repeat, Trophy } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

interface HowItWorksProps {
  variant?: "english" | "career" | "general";
}

const steps = {
  english: [
    {
      icon: MessageSquare,
      title: "Free Consultation",
      description: "We assess your current level and understand your learning goals.",
    },
    {
      icon: Target,
      title: "Personalized Plan",
      description: "Get a customized learning path designed for your specific needs.",
    },
    {
      icon: Repeat,
      title: "Practice & Learn",
      description: "Weekly sessions with structured practice from controlled to free speaking.",
    },
    {
      icon: Trophy,
      title: "See Results",
      description: "Build confidence and fluency with visible progress in 7-21 days.",
    },
  ],
  career: [
    {
      icon: MessageSquare,
      title: "Discovery Call",
      description: "We understand your career goals, challenges, and current situation.",
    },
    {
      icon: Target,
      title: "Strategy Session",
      description: "Receive a personalized career roadmap with actionable steps.",
    },
    {
      icon: Repeat,
      title: "Skill Building",
      description: "Work on resume, interviews, LinkedIn, and communication skills.",
    },
    {
      icon: Trophy,
      title: "Career Success",
      description: "Gain the confidence and tools to ace interviews and advance your career.",
    },
  ],
  general: [
    {
      icon: MessageSquare,
      title: "Free Consultation",
      description: "Tell us your goals and we'll recommend the right program for you.",
    },
    {
      icon: Target,
      title: "Custom Plan",
      description: "Get a personalized learning or career plan tailored to your needs.",
    },
    {
      icon: Repeat,
      title: "Weekly Sessions",
      description: "Regular 1-on-1 sessions with practice materials and feedback.",
    },
    {
      icon: Trophy,
      title: "Visible Results",
      description: "See measurable progress in confidence and skills within weeks.",
    },
  ],
};

const HowItWorks = ({ variant = "general" }: HowItWorksProps) => {
  const currentSteps = steps[variant];

  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A simple, proven process to help you achieve your goals.
          </p>
        </AnimatedSection>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <AnimatedSection 
                key={index} 
                animation="scale"
                delay={index * 120}
                className="relative"
              >
                {/* Connector Line (hidden on mobile and last item) */}
                {index < currentSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-border" />
                )}
                
                <div className="text-center">
                  {/* Step Number */}
                  <div className="relative inline-flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-card rounded-full flex items-center justify-center border-2 border-primary shadow-md">
                      <IconComponent className="w-7 h-7 text-primary" />
                    </div>
                    <span className="absolute -top-1 -right-1 w-6 h-6 bg-accent text-accent-foreground rounded-full text-xs font-bold flex items-center justify-center">
                      {index + 1}
                    </span>
                  </div>
                  
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;