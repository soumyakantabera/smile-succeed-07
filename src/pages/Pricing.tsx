import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/sections/Breadcrumb";
import PricingCards from "@/components/sections/PricingCards";
import CTASection from "@/components/sections/CTASection";

const Pricing = () => {
  return (
    <Layout>
      <Breadcrumb />
      <section className="section-padding bg-gradient-to-br from-secondary via-background to-secondary">
        <div className="container-custom text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Affordable <span className="text-primary">Pricing Plans</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Invest in your future with transparent, monthly pricing. No hidden fees.
          </p>
        </div>
      </section>
      <PricingCards showFullDetails />
      <CTASection />
    </Layout>
  );
};

export default Pricing;
