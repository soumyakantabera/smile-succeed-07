import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/sections/Breadcrumb";
import CTASection from "@/components/sections/CTASection";
import { STATS, WHATSAPP_URL } from "@/lib/constants";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { ArrowRight, Heart, Target, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-about.jpg";
import successImage from "@/assets/success-celebration.jpg";

const values = [
  { icon: Heart, title: "Passion for Teaching", desc: "We genuinely care about each student's progress and success." },
  { icon: Target, title: "Goal-Oriented", desc: "Every session is designed to bring you closer to your objectives." },
  { icon: Users, title: "Personalized Approach", desc: "One-on-one attention ensures learning at your pace." },
  { icon: Award, title: "Proven Results", desc: "98% of our students recommend us to others." },
];

const About = () => {
  return (
    <Layout>
      <Breadcrumb />
      
      {/* Hero with Image */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Friendly teacher smiling in classroom setting with learning materials" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>
        <div className="container-custom section-padding relative">
          <AnimatedSection animation="fade-up" className="max-w-2xl">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="text-primary">LEARN WITH SMILE</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Kolkata-based offline classes + Online training across Pan-India. We're on a mission to make quality English education and career guidance accessible to everyone.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-up">
              <h2 className="font-heading text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We believe everyone deserves access to quality English education and career guidance. Our mission is to help students and professionals overcome communication barriers, build confidence, and accelerate their careers through personalized, affordable training.
              </p>
              <h3 className="font-heading text-xl font-semibold mb-3">Who We Help</h3>
              <ul className="text-muted-foreground space-y-2 mb-6">
                <li>• Working professionals seeking confidence in meetings and interviews</li>
                <li>• Job seekers preparing for their dream careers</li>
                <li>• Students aiming for IELTS or academic English proficiency</li>
                <li>• Anyone looking to improve their spoken English and communication skills</li>
              </ul>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={100}>
              <div className="grid grid-cols-3 gap-4 bg-background rounded-xl p-6 border border-border">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">{STATS.recommend}</div>
                  <div className="text-sm text-muted-foreground">{STATS.recommendText}</div>
                </div>
                <div className="text-center border-x border-border">
                  <div className="text-3xl font-bold text-primary">{STATS.lessons}</div>
                  <div className="text-sm text-muted-foreground">{STATS.lessonsText}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">{STATS.results}</div>
                  <div className="text-sm text-muted-foreground">{STATS.resultsText}</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold">Our Values</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              What sets us apart and drives everything we do
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={i} animation="fade-up" delay={i * 100}>
                <div className="bg-card rounded-xl p-6 border border-border text-center h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <v.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Success Image Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={successImage} 
            alt="Happy students celebrating their learning success in Kolkata" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
        <div className="container-custom section-padding relative text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Be Part of Our Growing Family
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Join hundreds of students who've transformed their lives through better communication and career skills.
            </p>
            <a href={`${WHATSAPP_URL}&text=${encodeURIComponent("Hi! I'd like to know more about Learn With Smile.")}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="cta-primary gap-2">Connect With Us <ArrowRight className="w-5 h-5" /></Button>
            </a>
          </AnimatedSection>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default About;