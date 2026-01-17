import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/sections/Breadcrumb";
import HowItWorks from "@/components/sections/HowItWorks";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CTASection from "@/components/sections/CTASection";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ENGLISH_PROGRAMS, WHATSAPP_URL } from "@/lib/constants";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import heroImage from "@/assets/hero-english-learning.jpg";
import successImage from "@/assets/success-celebration.jpg";

const faqs = [
  { question: "How long does it take to become fluent in English?", answer: "Most students see noticeable improvement within 7-21 days of consistent practice. Full fluency typically develops over 3-6 months depending on your starting level and practice frequency." },
  { question: "Are classes available online?", answer: "Yes! We offer both offline classes in Kolkata and online sessions for students across India. Online classes are just as effective with personalized 1-on-1 attention." },
  { question: "What is your teaching methodology?", answer: "We use a structured approach: Controlled Practice → Semi-Controlled Practice → Free Speaking. This builds confidence gradually while ensuring grammar and pronunciation accuracy." },
  { question: "Can I join if I'm a complete beginner?", answer: "Absolutely! We welcome learners at all levels. Your first session includes an assessment to understand your current level and customize your learning path." },
  { question: "How often are the sessions?", answer: "Most students attend weekly sessions. However, we can customize the frequency based on your goals and schedule. Intensive programs are also available." },
];

const EnglishLearning = () => {
  return (
    <Layout>
      <Breadcrumb />
      
      {/* Hero with Image */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Professionals having an engaging English conversation in a modern Kolkata office" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>
        <div className="container-custom section-padding relative">
          <AnimatedSection animation="fade-up" className="max-w-2xl">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Spoken English Classes in <span className="text-primary">Kolkata</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Build fluency, confidence, and clarity. Online classes available across India.
            </p>
            <a href={`${WHATSAPP_URL}&text=${encodeURIComponent("Hi! I'm interested in Spoken English classes.")}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="cta-primary gap-2">Book Free Session <ArrowRight className="w-5 h-5" /></Button>
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Programs */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold">Our English Learning Tracks</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Choose the program that fits your goals and accelerate your English mastery
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6">
            {ENGLISH_PROGRAMS.map((program, i) => (
              <AnimatedSection key={i} animation="fade-up" delay={i * 100}>
                <div className="bg-background rounded-xl p-6 border border-border h-full">
                  <h3 className="font-heading text-xl font-semibold mb-3">{program.title}</h3>
                  <p className="text-muted-foreground mb-4">{program.description}</p>
                  <ul className="space-y-2">
                    {program.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-success" />{f}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <HowItWorks variant="english" />
      <FAQAccordion faqs={faqs} />

      {/* Success Image Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={successImage} 
            alt="Happy students celebrating their English learning success in Kolkata" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
        <div className="container-custom section-padding relative text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Join Our Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Hundreds of students have transformed their communication skills and careers with us. You could be next!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`${WHATSAPP_URL}&text=${encodeURIComponent("Hi! I want to start my English learning journey.")}`} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="cta-primary gap-2">Start Your Journey <ArrowRight className="w-5 h-5" /></Button>
              </a>
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">View Pricing</Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default EnglishLearning;