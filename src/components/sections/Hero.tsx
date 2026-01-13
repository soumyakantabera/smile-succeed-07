import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { STATS, WHATSAPP_URL } from "@/lib/constants";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-background to-secondary">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="container-custom section-padding relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <span className="text-lg">🎓</span>
            <span>Kolkata-based offline + Online Pan-India</span>
          </div>

          {/* Headline */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance animate-fade-in">
            Master English.{" "}
            <span className="gradient-text">Accelerate Your Career.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in">
            Overcome interview fear, meeting nerves, and communication gaps. 
            Build confidence that transforms your professional life.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
            <Link to="/english-learning">
              <Button size="lg" className="cta-primary w-full sm:w-auto text-base gap-2">
                Explore English Learning
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/career-counselling">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Explore Career Counselling
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Trust Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-lg mx-auto animate-fade-in">
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
          <div className="mt-10 animate-fade-in">
            <a
              href={`${WHATSAPP_URL}&text=${encodeURIComponent("Hi! I'm interested in a free first session. Please share more details.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors"
            >
              <span className="text-lg">✨</span>
              <span className="underline">Book your FREE first session today</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
