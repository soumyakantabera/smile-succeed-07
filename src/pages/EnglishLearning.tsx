import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/sections/Breadcrumb";
import HowItWorks from "@/components/sections/HowItWorks";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CTASection from "@/components/sections/CTASection";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ENGLISH_PROGRAMS, WHATSAPP_URL } from "@/lib/constants";

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
      
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-secondary via-background to-secondary">
        <div className="container-custom text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Spoken English Classes in <span className="text-primary">Kolkata</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Build fluency, confidence, and clarity. Online classes available across India.
          </p>
          <a href={`${WHATSAPP_URL}&text=${encodeURIComponent("Hi! I'm interested in Spoken English classes.")}`} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="cta-primary gap-2">Book Free Session <ArrowRight className="w-5 h-5" /></Button>
          </a>
        </div>
      </section>

      {/* Programs */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">Our English Learning Tracks</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {ENGLISH_PROGRAMS.map((program, i) => (
              <div key={i} className="bg-background rounded-xl p-6 border border-border">
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
            ))}
          </div>
        </div>
      </section>

      <HowItWorks variant="english" />
      <FAQAccordion faqs={faqs} />
      <CTASection />
    </Layout>
  );
};

export default EnglishLearning;
