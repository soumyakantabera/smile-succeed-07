import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sample Student A",
    role: "Working Professional",
    content: "The personalized approach helped me overcome my interview fear. I can now speak confidently in meetings.",
    initials: "SA",
  },
  {
    name: "Sample Student B",
    role: "IELTS Aspirant",
    content: "The structured practice method really works. My pronunciation and fluency improved noticeably within weeks.",
    initials: "SB",
  },
  {
    name: "Sample Student C",
    role: "Job Seeker",
    content: "The career coaching transformed my resume and LinkedIn. I felt much more prepared for interviews.",
    initials: "SC",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Students Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Sample testimonials representing typical student experiences
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            (These are representative examples)
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 md:p-8 border border-border relative"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
              
              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
