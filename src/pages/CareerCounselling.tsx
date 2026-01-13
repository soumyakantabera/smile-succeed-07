import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/sections/Breadcrumb";
import HowItWorks from "@/components/sections/HowItWorks";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CTASection from "@/components/sections/CTASection";
import { ArrowRight, FileText, Linkedin, Video, Users, Mail, Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/constants";

const services = [
  { icon: FileText, title: "Resume & ATS Optimization", desc: "Create resumes that pass ATS filters and impress recruiters." },
  { icon: Linkedin, title: "LinkedIn Profile", desc: "Optimize your profile to attract opportunities." },
  { icon: Video, title: "Interview Preparation", desc: "Mock interviews with detailed feedback." },
  { icon: Users, title: "Meeting Skills", desc: "Scripts and strategies for professional meetings." },
  { icon: Mail, title: "SOP & Email Writing", desc: "Professional writing for all business communication." },
  { icon: Map, title: "Career Roadmap", desc: "Strategic career planning with actionable steps." },
];

const faqs = [
  { question: "What's included in the Career Accelerator program?", answer: "Resume optimization, LinkedIn makeover, interview preparation, meeting scripts, email/SOP writing guidance, and a personalized career roadmap." },
  { question: "How many mock interviews do I get?", answer: "The number depends on your needs. Most students do 3-5 mock interviews before feeling fully prepared. We continue until you're confident." },
  { question: "Can you help with job applications?", answer: "We focus on making you the strongest candidate possible through skill-building. We provide templates, scorecards, and strategies for effective applications." },
  { question: "Is this suitable for freshers?", answer: "Absolutely! We help freshers build confidence, create impactful resumes, and prepare for their first professional interviews." },
];

const CareerCounselling = () => {
  return (
    <Layout>
      <Breadcrumb />
      
      <section className="section-padding bg-gradient-to-br from-secondary via-background to-secondary">
        <div className="container-custom text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Career Counselling in <span className="text-primary">Kolkata</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Interview preparation, resume building, and career acceleration. Online coaching available across India.
          </p>
          <a href={`${WHATSAPP_URL}&text=${encodeURIComponent("Hi! I'm interested in Career Counselling.")}`} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="cta-primary gap-2">Book Free Consultation <ArrowRight className="w-5 h-5" /></Button>
          </a>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-custom">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">Career Accelerator Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="bg-background rounded-xl p-6 border border-border card-hover">
                <s.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-heading text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HowItWorks variant="career" />
      <FAQAccordion faqs={faqs} />
      <CTASection />
    </Layout>
  );
};

export default CareerCounselling;
