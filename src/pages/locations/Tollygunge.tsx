import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/sections/Breadcrumb";
import CTASection from "@/components/sections/CTASection";
import FAQAccordion from "@/components/sections/FAQAccordion";
import { MapPin, Clock, Users, Award, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BUSINESS_INFO } from "@/lib/constants";

const tollygungeFAQs = [
  {
    question: "Do you have a branch in Tollygunge?",
    answer: "Our main centre is at Raja Ram Mohan Roy Road, easily accessible from Tollygunge. We also offer online classes that you can attend from anywhere in Tollygunge."
  },
  {
    question: "What courses are popular among Tollygunge students?",
    answer: "Spoken English and Interview Preparation are the most popular among Tollygunge residents, especially young professionals and job seekers."
  },
  {
    question: "How can Tollygunge students reach your centre?",
    answer: "You can take the Metro to Kalighat and then a short auto ride, or take a direct bus from Tollygunge to Raja Ram Mohan Roy Road. Online classes are also available."
  },
  {
    question: "Do you offer job placement assistance?",
    answer: "We focus on making you job-ready with comprehensive training. While we don't guarantee placements, 98% of our students report significant improvement in their interview success rate."
  }
];

const Tollygunge = () => {
  return (
    <Layout>
      <Breadcrumb />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              Serving Tollygunge, South Kolkata
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              English Speaking Course in{" "}
              <span className="text-primary">Tollygunge</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transform your English communication and career prospects. 
              Join hundreds of successful learners from Tollygunge.
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
            Why Tollygunge Trusts <span className="text-primary">Learn With Smile</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, title: "Easy Access", desc: "Metro + auto or direct bus from Tollygunge" },
              { icon: Users, title: "1000+ Alumni", desc: "Join our growing community of learners" },
              { icon: Award, title: "Practical Focus", desc: "Real-world English for real situations" },
              { icon: CheckCircle, title: "Affordable", desc: "Quality training starting ₹1,000/month" }
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
            Programs for Tollygunge
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Comprehensive training designed for job seekers and professionals from South Kolkata
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="font-heading text-2xl font-bold mb-4 text-primary">English Learning</h3>
              <ul className="space-y-3">
                {["Spoken English for Beginners", "Advanced Fluency Training", "Grammar Correction", "Interview English", "Group Discussion Practice"].map((item, idx) => (
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
              <h3 className="font-heading text-2xl font-bold mb-4 text-primary">Career Services</h3>
              <ul className="space-y-3">
                {["Resume Building", "LinkedIn Profile Setup", "Mock Interviews", "Career Guidance", "Soft Skills Training"].map((item, idx) => (
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
            FAQs for Tollygunge Students
          </h2>
          <FAQAccordion faqs={tollygungeFAQs} />
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Tollygunge;
