import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import ProblemSolution from "@/components/sections/ProblemSolution";
import ProgramCards from "@/components/sections/ProgramCards";
import HowItWorks from "@/components/sections/HowItWorks";
import PricingCards from "@/components/sections/PricingCards";
import Testimonials from "@/components/sections/Testimonials";
import MapEmbed from "@/components/sections/MapEmbed";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ProblemSolution />
      <ProgramCards />
      <HowItWorks variant="general" />
      <PricingCards />
      <Testimonials />
      <MapEmbed />
      <CTASection />
    </Layout>
  );
};

export default Index;
