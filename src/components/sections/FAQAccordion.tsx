import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
}

const FAQAccordion = ({ 
  title = "Frequently Asked Questions",
  subtitle = "Got questions? We've got answers.",
  faqs 
}: FAQAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {subtitle}
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-secondary/50 transition-colors"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-medium text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-5 md:px-6 pb-5 md:pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
