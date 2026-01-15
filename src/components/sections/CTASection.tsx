import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS_INFO, WHATSAPP_URL } from "@/lib/constants";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  variant?: "default" | "accent";
}

const CTASection = ({
  title = "Ready to Transform Your Communication Skills?",
  subtitle = "Book your free first session today. No commitment, just a conversation about your goals.",
  variant = "default",
}: CTASectionProps) => {
  const bgClass = variant === "accent" 
    ? "bg-gradient-to-br from-primary to-primary/80" 
    : "bg-foreground";

  return (
    <section className={`section-padding ${bgClass}`}>
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-background mb-4">
            {title}
          </h2>
          <p className="text-background/80 text-lg mb-8">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`${WHATSAPP_URL}&text=${encodeURIComponent("Hi! I'm interested in booking a free first session. Please share more details.")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="w-full sm:w-auto gap-2 bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Book Free First Session
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
            <a href={`tel:${BUSINESS_INFO.phone}`}>
              <Button 
                size="lg" 
                variant="secondary"
                className="w-full sm:w-auto gap-2 bg-background text-foreground hover:bg-background/90 shadow-lg hover:shadow-xl transition-all"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </Button>
            </a>
          </div>

          <p className="text-background/60 text-sm mt-6">
            ✨ First session is absolutely free. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;