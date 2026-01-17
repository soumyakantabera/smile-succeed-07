import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/sections/Breadcrumb";
import HowItWorks from "@/components/sections/HowItWorks";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CTASection from "@/components/sections/CTASection";
import { ArrowRight, FileText, Linkedin, Video, Users, Mail, Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/constants";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-career-counselling.jpg";
import successImage from "@/assets/success-celebration.jpg";

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
      
      {/* Hero with Image */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Career counselling session with mentor and job seeker reviewing resume" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>
        <div className="container-custom section-padding relative">
          <AnimatedSection animation="fade-up" className="max-w-2xl">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Career Counselling in <span className="text-primary">Kolkata</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Interview preparation, resume building, and career acceleration. Online coaching available across India.
            </p>
            <a href={`${WHATSAPP_URL}&text=${encodeURIComponent("Hi! I'm interested in Career Counselling.")}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="cta-primary gap-2">Book Free Consultation <ArrowRight className="w-5 h-5" /></Button>
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold">Career Accelerator Services</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Comprehensive career support to help you land your dream job and excel in your profession
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <AnimatedSection key={i} animation="fade-up" delay={i * 100}>
                <div className="bg-background rounded-xl p-6 border border-border card-hover h-full">
                  <s.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-heading text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <HowItWorks variant="career" />
      <FAQAccordion faqs={faqs} />

      {/* Success Image Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={successImage} 
            alt="Successful professionals celebrating career achievements" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
        <div className="container-custom section-padding relative text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Accelerate Your Career Today
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Don't let opportunities pass by. Get personalized career guidance and take control of your professional future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`${WHATSAPP_URL}&text=${encodeURIComponent("Hi! I want to accelerate my career.")}`} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="cta-primary gap-2">Get Started <ArrowRight className="w-5 h-5" /></Button>
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

export default CareerCounselling;