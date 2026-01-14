import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/sections/Breadcrumb";
import CTASection from "@/components/sections/CTASection";
import FAQAccordion from "@/components/sections/FAQAccordion";
import { MapPin, Clock, Users, Award, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BUSINESS_INFO } from "@/lib/constants";

const rashbehariFAQs = [
  {
    question: "How close is your centre to Rashbehari Avenue?",
    answer: "Our centre is very conveniently located at Raja Ram Mohan Roy Road, just 10-15 minutes from Rashbehari Avenue by auto or bus."
  },
  {
    question: "Do you offer evening classes for working professionals?",
    answer: "Yes! We have dedicated evening batches from 6 PM to 9 PM, perfect for professionals working in and around Rashbehari Avenue."
  },
  {
    question: "What makes your teaching methodology different?",
    answer: "We use the Controlled → Semi-Controlled → Free Speaking method, which ensures you build a strong foundation before advancing to fluent, spontaneous communication."
  },
  {
    question: "Can I switch between online and offline classes?",
    answer: "Absolutely! We offer flexible hybrid learning. Attend offline when convenient, switch to online when needed - your learning never stops."
  }
];

const RashbehariAvenue = () => {
  return (
    <Layout>
      <Breadcrumb />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              Serving Rashbehari Avenue, South Kolkata
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              English Classes Near{" "}
              <span className="text-primary">Rashbehari Avenue</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Professional English communication and career coaching for Rashbehari Avenue residents. 
              Elevate your professional presence with expert guidance.
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
            Why Rashbehari Residents Choose <span className="text-primary">Us</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, title: "Prime Location", desc: "Just 10-15 mins from Rashbehari Avenue" },
              { icon: Users, title: "Hybrid Learning", desc: "Switch between online and offline freely" },
              { icon: Award, title: "Expert Faculty", desc: "Trained professionals with industry experience" },
              { icon: CheckCircle, title: "Guaranteed Results", desc: "See improvement in 7-21 days" }
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
            Programs for Rashbehari Avenue
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Comprehensive programs tailored for the dynamic professionals of South Kolkata
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="font-heading text-2xl font-bold mb-4 text-primary">English Mastery</h3>
              <ul className="space-y-3">
                {["Conversational English", "Business Communication", "Accent Neutralization", "Email & Report Writing", "Meeting English"].map((item, idx) => (
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
              <h3 className="font-heading text-2xl font-bold mb-4 text-primary">Career Excellence</h3>
              <ul className="space-y-3">
                {["Professional Resume", "LinkedIn Branding", "Interview Mastery", "Negotiation Skills", "Leadership Communication"].map((item, idx) => (
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
            FAQs for Rashbehari Avenue Students
          </h2>
          <FAQAccordion faqs={rashbehariFAQs} />
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default RashbehariAvenue;
