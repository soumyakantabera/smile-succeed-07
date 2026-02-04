import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { STATS, WHATSAPP_URL } from "@/lib/constants";
import heroImage from "@/assets/hero-homepage.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Students learning English in a modern Kolkata classroom" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/50" />
      </div>
      
      <div className="container-custom section-padding relative">
        <div className="max-w-2xl">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in"
            style={{ animationDelay: '0.1s', animationFillMode: 'backwards' }}
          >
            <span className="text-lg">🎓</span>
            <span>Kolkata-based offline + Online Pan-India</span>
          </div>

          {/* Animated Headline */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            <span 
              className="inline-block animate-fade-in"
              style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}
            >
              Master English.
            </span>{" "}
            <span 
              className="inline-block gradient-text animate-fade-in"
              style={{ animationDelay: '0.4s', animationFillMode: 'backwards' }}
            >
              Accelerate Your Career.
            </span>
          </h1>

          {/* Subheadline */}
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 animate-fade-in"
            style={{ animationDelay: '0.6s', animationFillMode: 'backwards' }}
          >
            Overcome interview fear, meeting nerves, and communication gaps. 
            Build confidence that transforms your professional life.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-in"
            style={{ animationDelay: '0.8s', animationFillMode: 'backwards' }}
          >
            <Link to="/english-learning">
              <Button size="lg" className="cta-primary w-full sm:w-auto text-base gap-2">
                Explore English Learning
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/career-counselling">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground backdrop-blur-sm">
                Explore Career Counselling
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Trust Stats */}
          <div 
            className="grid grid-cols-3 gap-4 md:gap-6 max-w-md bg-background/80 backdrop-blur-sm rounded-xl p-4 border border-border animate-fade-in"
            style={{ animationDelay: '1s', animationFillMode: 'backwards' }}
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary font-heading">
                {STATS.recommend}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">
                {STATS.recommendText}
              </div>
            </div>
            <div className="text-center border-x border-border">
              <div className="text-2xl md:text-3xl font-bold text-primary font-heading">
                {STATS.lessons}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">
                {STATS.lessonsText}
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary font-heading">
                {STATS.results}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">
                {STATS.resultsText}
              </div>
            </div>
          </div>

          {/* Free Session CTA */}
          <div 
            className="mt-8 animate-fade-in"
            style={{ animationDelay: '1.2s', animationFillMode: 'backwards' }}
          >
            <a
              href={`${WHATSAPP_URL}&text=${encodeURIComponent("Hi! I'm interested in a free first session. Please share more details.")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2">
                <span>✨</span>
                Book your FREE first session today
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;