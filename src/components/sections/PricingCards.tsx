import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PRICING, WHATSAPP_URL } from "@/lib/constants";

interface PricingCardsProps {
  showFullDetails?: boolean;
}

const PricingCards = ({ showFullDetails = false }: PricingCardsProps) => {
  return (
    <section className={`section-padding ${showFullDetails ? "bg-background" : "bg-card"}`}>
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Invest in yourself with affordable monthly plans. No hidden fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Plan A */}
          <div className="bg-background rounded-2xl p-6 md:p-8 border border-border hover:border-primary/50 transition-all duration-300 card-hover">
            <div className="mb-6">
              <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                {PRICING.planA.name}
              </h3>
              <p className="text-muted-foreground text-sm">
                {PRICING.planA.description}
              </p>
            </div>
            
            <div className="mb-6">
              <span className="font-heading text-4xl font-bold text-foreground">
                {PRICING.planA.price}
              </span>
              <span className="text-muted-foreground ml-2">
                {PRICING.planA.period}
              </span>
            </div>

            <ul className="space-y-3 mb-8">
              {PRICING.planA.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mb-4">
              <p className="text-xs text-muted-foreground">
                <strong>Ideal for:</strong> {PRICING.planA.idealFor}
              </p>
            </div>

            <a
              href={`${WHATSAPP_URL}&text=${encodeURIComponent("Hi! I'm interested in Plan A (₹1,000/month). Please share more details.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button className="w-full cta-secondary gap-2">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>

          {/* Plan B - Featured */}
          <div className="relative bg-background rounded-2xl p-6 md:p-8 border-2 border-primary shadow-lg">
            {/* Popular Badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-accent text-accent-foreground text-xs font-semibold px-4 py-1 rounded-full">
                MOST POPULAR
              </span>
            </div>

            <div className="mb-6">
              <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                {PRICING.planB.name}
              </h3>
              <p className="text-muted-foreground text-sm">
                {PRICING.planB.description}
              </p>
            </div>
            
            <div className="mb-6">
              <span className="font-heading text-4xl font-bold text-primary">
                {PRICING.planB.price}
              </span>
              <span className="text-muted-foreground ml-2">
                {PRICING.planB.period}
              </span>
            </div>

            <ul className="space-y-3 mb-8">
              {PRICING.planB.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mb-4">
              <p className="text-xs text-muted-foreground">
                <strong>Ideal for:</strong> {PRICING.planB.idealFor}
              </p>
            </div>

            <a
              href={`${WHATSAPP_URL}&text=${encodeURIComponent("Hi! I'm interested in Plan B (₹1,500/month). Please share more details.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button className="w-full cta-primary gap-2">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>

        {/* Duration Note */}
        <div className="text-center mt-10">
          <p className="text-muted-foreground text-sm">
            💡 <strong>Pro tip:</strong> Commit 3–6 months for best results. Most students see visible improvement within the first month.
          </p>
        </div>

        {/* View Full Pricing (if not on pricing page) */}
        {!showFullDetails && (
          <div className="text-center mt-8">
            <Link to="/pricing">
              <Button variant="outline" className="gap-2">
                View Full Pricing Details
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default PricingCards;
