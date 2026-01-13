import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/sections/Breadcrumb";
import CTASection from "@/components/sections/CTASection";
import { STATS } from "@/lib/constants";

const About = () => {
  return (
    <Layout>
      <Breadcrumb />
      <section className="section-padding bg-gradient-to-br from-secondary via-background to-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="text-primary">LEARN WITH SMILE</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Kolkata-based offline classes + Online training across Pan-India
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-custom max-w-3xl">
          <h2 className="font-heading text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            We believe everyone deserves access to quality English education and career guidance. Our mission is to help students and professionals overcome communication barriers, build confidence, and accelerate their careers through personalized, affordable training.
          </p>

          <h2 className="font-heading text-2xl font-bold mb-4">Who We Help</h2>
          <ul className="text-muted-foreground space-y-2 mb-8">
            <li>• Working professionals seeking confidence in meetings and interviews</li>
            <li>• Job seekers preparing for their dream careers</li>
            <li>• Students aiming for IELTS or academic English proficiency</li>
            <li>• Anyone looking to improve their spoken English and communication skills</li>
          </ul>

          <div className="grid grid-cols-3 gap-4 bg-background rounded-xl p-6 border border-border">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{STATS.recommend}</div>
              <div className="text-xs text-muted-foreground">{STATS.recommendText}</div>
            </div>
            <div className="text-center border-x border-border">
              <div className="text-2xl font-bold text-primary">{STATS.lessons}</div>
              <div className="text-xs text-muted-foreground">{STATS.lessonsText}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{STATS.results}</div>
              <div className="text-xs text-muted-foreground">{STATS.resultsText}</div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default About;
