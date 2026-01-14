import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/sections/Breadcrumb";
import CTASection from "@/components/sections/CTASection";
import FAQAccordion from "@/components/sections/FAQAccordion";
import { MapPin, Clock, Users, Award, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BUSINESS_INFO } from "@/lib/constants";

const gariahatFAQs = [
  {
    question: "Is Learn With Smile accessible from Gariahat?",
    answer: "Yes! Our centre at Raja Ram Mohan Roy Road is just 15-20 minutes from Gariahat. You can also opt for our convenient online classes."
  },
  {
    question: "Do you offer specialized courses for IT professionals?",
    answer: "Absolutely! We have tailored programs for IT professionals focusing on technical presentations, client communication, and global team collaboration."
  },
  {
    question: "What's the duration of your courses?",
    answer: "Our programs are flexible. We recommend 3-6 months for best results, but you'll see visible improvement within the first 7-21 days."
  },
  {
    question: "Do you provide course materials?",
    answer: "Yes, all students receive comprehensive study materials, practice exercises, and recorded sessions for revision at no extra cost."
  }
];

const Gariahat = () => {
  return (
    <Layout>
      <Breadcrumb />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              Serving Gariahat, South Kolkata
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Best English Classes Near{" "}
              <span className="text-primary">Gariahat</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Premium English training and career development for Gariahat's ambitious professionals. 
              Join South Kolkata's most trusted learning destination.
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
            Why Gariahat Chooses <span className="text-primary">Learn With Smile</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, title: "Flexible Schedule", desc: "Morning, evening & weekend options" },
              { icon: Users, title: "IT Professional Focus", desc: "Specialized tech industry training" },
              { icon: Award, title: "Study Materials", desc: "Comprehensive resources included" },
              { icon: CheckCircle, title: "98% Satisfaction", desc: "Highest rated in South Kolkata" }
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
            Programs for Gariahat Professionals
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Designed for the tech-savvy, ambitious professionals of Gariahat and South Kolkata
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="font-heading text-2xl font-bold mb-4 text-primary">English Excellence</h3>
              <ul className="space-y-3">
                {["Technical Presentations", "Client Communication", "Global Team Collaboration", "Business Writing", "Conference Speaking"].map((item, idx) => (
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
              <h3 className="font-heading text-2xl font-bold mb-4 text-primary">Career Advancement</h3>
              <ul className="space-y-3">
                {["Tech Resume Optimization", "LinkedIn for IT Professionals", "Technical Interview Prep", "Salary Negotiation", "Career Path Planning"].map((item, idx) => (
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
            FAQs for Gariahat Students
          </h2>
          <FAQAccordion faqs={gariahatFAQs} />
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Gariahat;
