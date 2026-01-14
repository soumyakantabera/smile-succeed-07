import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/sections/Breadcrumb";
import CTASection from "@/components/sections/CTASection";
import FAQAccordion from "@/components/sections/FAQAccordion";
import { MapPin, Clock, Users, Award, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BUSINESS_INFO } from "@/lib/constants";

const ballygungeFAQs = [
  {
    question: "How far is your centre from Ballygunge?",
    answer: "Our centre at Raja Ram Mohan Roy Road is just 15-20 minutes from Ballygunge. We also offer convenient online classes for those who prefer learning from home."
  },
  {
    question: "Do you offer IELTS preparation for Ballygunge students?",
    answer: "Absolutely! We offer comprehensive IELTS preparation covering all 4 modules - Listening, Reading, Writing, and Speaking with personalized feedback."
  },
  {
    question: "What's the batch size for Ballygunge area students?",
    answer: "We maintain small batches of maximum 5 students to ensure personalized attention and maximum speaking practice for each learner."
  },
  {
    question: "Are weekend classes available?",
    answer: "Yes, we offer Saturday and Sunday batches specifically designed for working professionals from Ballygunge and nearby areas."
  }
];

const Ballygunge = () => {
  return (
    <Layout>
      <Breadcrumb />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              Serving Ballygunge, South Kolkata
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Premium English Courses in{" "}
              <span className="text-primary">Ballygunge</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Elevate your English speaking skills and career prospects with expert training. 
              Trusted by professionals across Ballygunge and South Kolkata.
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
            Why Ballygunge Chooses <span className="text-primary">Learn With Smile</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, title: "Convenient Location", desc: "Just 15-20 mins from Ballygunge or learn online" },
              { icon: Users, title: "Elite Training", desc: "Premium coaching for discerning learners" },
              { icon: Award, title: "IELTS Experts", desc: "Specialized IELTS & Business English" },
              { icon: CheckCircle, title: "Quick Results", desc: "Visible improvement in 7-21 days" }
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
            Services for Ballygunge Residents
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Tailored programs for the ambitious professionals and students of Ballygunge
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="font-heading text-2xl font-bold mb-4 text-primary">English Learning</h3>
              <ul className="space-y-3">
                {["Spoken English Mastery", "Business Communication", "IELTS Preparation", "Presentation Skills", "Corporate English"].map((item, idx) => (
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
              <h3 className="font-heading text-2xl font-bold mb-4 text-primary">Career Accelerator</h3>
              <ul className="space-y-3">
                {["Executive Resume Writing", "LinkedIn Optimization", "Interview Coaching", "Salary Negotiation", "Career Transition Support"].map((item, idx) => (
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
            FAQs for Ballygunge Students
          </h2>
          <FAQAccordion faqs={ballygungeFAQs} />
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Ballygunge;
