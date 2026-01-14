import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/sections/Breadcrumb";
import CTASection from "@/components/sections/CTASection";
import FAQAccordion from "@/components/sections/FAQAccordion";
import { MapPin, Clock, Users, Award, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BUSINESS_INFO } from "@/lib/constants";

const behalaFAQs = [
  {
    question: "Do you offer classes in Behala?",
    answer: "Yes! While our main centre is in Central Kolkata, we offer online classes that are perfect for Behala residents. You get the same quality training from the comfort of your home."
  },
  {
    question: "What are the timings for Behala students?",
    answer: "We offer flexible timings including early morning (7 AM), evening (6-9 PM), and weekend batches to suit working professionals and students from Behala."
  },
  {
    question: "Is there any discount for Behala residents?",
    answer: "We offer the same competitive pricing for all students. Our plans start at just ₹1,000/month for comprehensive English and Career training."
  },
  {
    question: "How do online classes work?",
    answer: "Our online classes are conducted via video call with interactive sessions, screen sharing, and real-time feedback. You'll have the same engaging experience as in-person classes."
  }
];

const Behala = () => {
  return (
    <Layout>
      <Breadcrumb />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              Serving Behala, South Kolkata
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Spoken English & Career Training for{" "}
              <span className="text-primary">Behala</span> Residents
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Professional English speaking courses and career counselling services now accessible to Behala. 
              Join 1000+ successful learners from South Kolkata.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg">
                <a href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}>Book Free Trial</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg">
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
            Why Behala Residents Choose <span className="text-primary">Learn With Smile</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, title: "Flexible Timings", desc: "Morning, evening & weekend batches for Behala professionals" },
              { icon: Users, title: "Small Batches", desc: "Personal attention with max 5 students per batch" },
              { icon: Award, title: "Expert Trainers", desc: "Certified trainers with 10+ years experience" },
              { icon: CheckCircle, title: "Proven Results", desc: "98% of our students recommend us" }
            ].map((item, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
            Our Services for Behala
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Comprehensive English learning and career development programs designed for South Kolkata residents
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="font-heading text-2xl font-bold mb-4 text-primary">English Learning</h3>
              <ul className="space-y-3">
                {["Spoken English Classes", "Grammar & Vocabulary Building", "Pronunciation & Accent Training", "Public Speaking & Confidence", "Interview English"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-6 w-full">
                <Link to="/english-learning">Learn More</Link>
              </Button>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="font-heading text-2xl font-bold mb-4 text-primary">Career Counselling</h3>
              <ul className="space-y-3">
                {["Resume & ATS Optimization", "LinkedIn Profile Building", "Mock Interview Sessions", "Career Roadmap Planning", "SOP & Email Writing"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-6 w-full">
                <Link to="/career-counselling">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
            FAQs for Behala Students
          </h2>
          <FAQAccordion faqs={behalaFAQs} />
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Behala;
