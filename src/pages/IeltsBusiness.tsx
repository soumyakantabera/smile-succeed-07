import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/sections/Breadcrumb";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CTASection from "@/components/sections/CTASection";
import { ArrowRight, GraduationCap, Building2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/constants";

const faqs = [
  { question: "How long is the IELTS preparation course?", answer: "Most students prepare for 2-3 months. We customize based on your target score and current level." },
  { question: "Do you provide mock tests?", answer: "Yes! Regular mock tests with detailed feedback are a core part of our IELTS preparation." },
  { question: "What level is Business English for?", answer: "Our Business English program is designed for B2-C1 level professionals who need advanced workplace communication skills." },
];

const IeltsBusiness = () => {
  return (
    <Layout>
      <Breadcrumb />
      
      <section className="section-padding bg-gradient-to-br from-secondary via-background to-secondary">
        <div className="container-custom text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            IELTS & Business English <span className="text-primary">Training</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Specialized programs for IELTS aspirants and working professionals. Online classes across India.
          </p>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {/* IELTS */}
            <div className="bg-background rounded-2xl p-8 border border-border">
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
            
            {/* Business English */}
            <div className="bg-background rounded-2xl p-8 border border-border">
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
          </div>
        </div>
      </section>

      <FAQAccordion faqs={faqs} />
      <CTASection />
    </Layout>
  );
};

export default IeltsBusiness;
