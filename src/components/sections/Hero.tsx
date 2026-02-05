import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Play, CheckCircle2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { STATS, WHATSAPP_URL } from "@/lib/constants";
import heroImage from "@/assets/hero-homepage.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Background with enhanced gradient overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Students learning English in a modern Kolkata classroom" 
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/95 via-foreground/80 to-primary/40" />
        {/* Animated gradient orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container-custom section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-background">
            {/* Top Badge */}
            <div 
              className="inline-flex items-center gap-2 bg-background/10 backdrop-blur-md border border-background/20 text-background px-5 py-2.5 rounded-full text-sm font-medium mb-8 animate-fade-in"
              style={{ animationDelay: '0.1s', animationFillMode: 'backwards' }}
            >
              <Star className="w-4 h-4 text-accent fill-accent" />
              <span>Trusted by 500+ Students in Kolkata</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              <span 
                className="block animate-fade-in"
                style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}
              >
                Speak English
              </span>
              <span 
                className="block text-accent animate-fade-in"
                style={{ animationDelay: '0.4s', animationFillMode: 'backwards' }}
              >
                With Confidence
              </span>
            </h1>

            {/* Subheadline */}
            <p 
              className="text-xl md:text-2xl text-background/80 max-w-lg mb-8 leading-relaxed animate-fade-in"
              style={{ animationDelay: '0.6s', animationFillMode: 'backwards' }}
            >
              Transform your career with fluent English. 
              <span className="text-accent font-semibold"> No more interview fear.</span>
            </p>

            {/* Feature Pills */}
            <div 
              className="flex flex-wrap gap-3 mb-10 animate-fade-in"
              style={{ animationDelay: '0.7s', animationFillMode: 'backwards' }}
            >
              {["Spoken English", "IELTS Prep", "Career Coaching", "Interview Training"].map((feature, i) => (
                <span 
                  key={feature}
                  className="inline-flex items-center gap-2 bg-background/10 backdrop-blur-sm px-4 py-2 rounded-lg text-sm border border-background/10"
                >
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  {feature}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div 
              className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-in"
              style={{ animationDelay: '0.8s', animationFillMode: 'backwards' }}
            >
              <a
                href={`${WHATSAPP_URL}&text=${encodeURIComponent("Hi! I'm interested in a free first session. Please share more details.")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto text-lg h-14 px-8 gap-3 shadow-xl shadow-accent/25"
                >
                  <Sparkles className="w-5 h-5" />
                  Book FREE Session
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <Link to="/english-learning">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto text-lg h-14 px-8 gap-2 bg-background/10 border-background/30 text-background hover:bg-background/20 backdrop-blur-sm"
                >
                  <Play className="w-5 h-5" />
                  Explore Programs
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div 
              className="flex items-center gap-6 animate-fade-in"
              style={{ animationDelay: '1s', animationFillMode: 'backwards' }}
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-background/20 flex items-center justify-center text-xs font-bold"
                  >
                    {["S", "R", "A", "P"][i-1]}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-1 text-accent">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-background/70">4.9/5 from 200+ reviews</span>
              </div>
            </div>
          </div>

          {/* Right Side - Stats Card */}
          <div 
            className="hidden lg:block animate-fade-in"
            style={{ animationDelay: '1.2s', animationFillMode: 'backwards' }}
          >
            <div className="relative">
              {/* Main Stats Card */}
              <div className="bg-background/10 backdrop-blur-xl border border-background/20 rounded-3xl p-8 shadow-2xl">
                <h3 className="text-background font-heading text-2xl font-bold mb-6 text-center">
                  Why Students Choose Us
                </h3>
                
                <div className="space-y-6">
                  <div className="bg-background/10 rounded-2xl p-5 backdrop-blur-sm border border-background/10">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center">
                        <span className="text-2xl">🎯</span>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-accent font-heading">{STATS.recommend}</div>
                        <div className="text-background/70 text-sm">{STATS.recommendText}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-background/10 rounded-2xl p-5 backdrop-blur-sm border border-background/10">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center">
                        <span className="text-2xl">📚</span>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-primary font-heading">{STATS.lessons}</div>
                        <div className="text-background/70 text-sm">{STATS.lessonsText}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-background/10 rounded-2xl p-5 backdrop-blur-sm border border-background/10">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-success/20 rounded-xl flex items-center justify-center">
                        <span className="text-2xl">🚀</span>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-success font-heading">{STATS.results}</div>
                        <div className="text-background/70 text-sm">{STATS.resultsText}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-bounce">
                🔥 Limited Seats!
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Stats */}
        <div 
          className="lg:hidden mt-12 grid grid-cols-3 gap-4 animate-fade-in"
          style={{ animationDelay: '1s', animationFillMode: 'backwards' }}
        >
          <div className="bg-background/10 backdrop-blur-sm rounded-xl p-4 text-center border border-background/10">
            <div className="text-2xl font-bold text-accent font-heading">{STATS.recommend}</div>
            <div className="text-xs text-background/70">{STATS.recommendText}</div>
          </div>
          <div className="bg-background/10 backdrop-blur-sm rounded-xl p-4 text-center border border-background/10">
            <div className="text-2xl font-bold text-primary font-heading">{STATS.lessons}</div>
            <div className="text-xs text-background/70">{STATS.lessonsText}</div>
          </div>
          <div className="bg-background/10 backdrop-blur-sm rounded-xl p-4 text-center border border-background/10">
            <div className="text-2xl font-bold text-success font-heading">{STATS.results}</div>
            <div className="text-xs text-background/70">{STATS.resultsText}</div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
