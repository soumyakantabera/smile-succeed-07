import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/sections/Breadcrumb";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CTASection from "@/components/sections/CTASection";
import { ArrowRight, GraduationCap, Building2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/constants";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-ielts-business.jpg";
import successImage from "@/assets/success-celebration.jpg";

const faqs = [
  { question: "How long is the IELTS preparation course?", answer: "Most students prepare for 2-3 months. We customize based on your target score and current level." },
  { question: "Do you provide mock tests?", answer: "Yes! Regular mock tests with detailed feedback are a core part of our IELTS preparation." },
  { question: "What level is Business English for?", answer: "Our Business English program is designed for B2-C1 level professionals who need advanced workplace communication skills." },
];

const IeltsBusiness = () => {
  return (
    <Layout>
      <Breadcrumb />
      
      {/* Hero with Image */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Student preparing for IELTS with books and headphones in professional setting" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>
        <div className="container-custom section-padding relative">
          <AnimatedSection animation="fade-up" className="max-w-2xl">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              IELTS & Business English <span className="text-primary">Training</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Specialized programs for IELTS aspirants and working professionals. Online classes across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`${WHATSAPP_URL}&text=${encodeURIComponent("Hi! I'm interested in IELTS/Business English training.")}`} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="cta-primary gap-2">Get Started <ArrowRight className="w-5 h-5" /></Button>
              </a>
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">View Pricing</Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Programs */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold">Specialized Training Programs</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Choose the program that matches your goals for academic or professional success
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            {/* IELTS */}
            <AnimatedSection animation="fade-up" delay={100}>
              <div className="bg-background rounded-2xl p-8 border border-border h-full">
                <GraduationCap className="w-12 h-12 text-primary mb-4" />
                <h2 className="font-heading text-2xl font-bold mb-4">IELTS Preparation</h2>
                <p className="text-muted-foreground mb-6">Comprehensive prep covering all four modules with timing drills and writing review.</p>
                <ul className="space-y-3 mb-6">
                  {["Listening & Reading strategies", "Speaking mock tests", "Writing task feedback", "Timing drills"].map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 text-success" />{f}</li>
                  ))}
                </ul>
                <a href={`${WHATSAPP_URL}&text=${encodeURIComponent("Hi! I'm interested in IELTS Preparation.")}`} target="_blank" rel="noopener noreferrer">
                  <Button className="cta-primary gap-2 w-full">Get Started <ArrowRight className="w-4 h-4" /></Button>
                </a>
              </div>
            </AnimatedSection>
            
            {/* Business English */}
            <AnimatedSection animation="fade-up" delay={200}>
              <div className="bg-background rounded-2xl p-8 border border-border h-full">
                <Building2 className="w-12 h-12 text-accent mb-4" />
                <h2 className="font-heading text-2xl font-bold mb-4">Business English (B2-C1)</h2>
                <p className="text-muted-foreground mb-6">Advanced workplace communication for presentations, negotiations, and professional updates.</p>
                <ul className="space-y-3 mb-6">
                  {["Presentation skills", "Negotiation language", "Meeting participation", "Email & report writing"].map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 text-success" />{f}</li>
                  ))}
                </ul>
                <a href={`${WHATSAPP_URL}&text=${encodeURIComponent("Hi! I'm interested in Business English training.")}`} target="_blank" rel="noopener noreferrer">
                  <Button className="cta-secondary gap-2 w-full">Get Started <ArrowRight className="w-4 h-4" /></Button>
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <FAQAccordion faqs={faqs} />

      {/* Success Image Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={successImage} 
            alt="Students celebrating their IELTS and career success" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
        <div className="container-custom section-padding relative text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Achieve Your Target Score
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Join hundreds of successful students who achieved their IELTS goals and advanced their careers with us.
            </p>
            <a href={`${WHATSAPP_URL}&text=${encodeURIComponent("Hi! I want to start my IELTS preparation.")}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="cta-primary gap-2">Start Preparation Today <ArrowRight className="w-5 h-5" /></Button>
            </a>
          </AnimatedSection>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default IeltsBusiness;