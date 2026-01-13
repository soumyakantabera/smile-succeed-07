import { useState } from "react";
import { Send, User, Mail, Phone, MessageSquare, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BUSINESS_INFO } from "@/lib/constants";

const goals = [
  { value: "english", label: "English Learning" },
  { value: "career", label: "Career Counselling" },
  { value: "ielts", label: "IELTS Preparation" },
  { value: "business", label: "Business English" },
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    goal: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build WhatsApp message
    const goalLabel = goals.find(g => g.value === formData.goal)?.label || formData.goal;
    
    let message = `Hi! I'm interested in your services.\n\n`;
    message += `*Name:* ${formData.name}\n`;
    message += `*Email:* ${formData.email}\n`;
    if (formData.phone) {
      message += `*Phone:* ${formData.phone}\n`;
    }
    message += `*Interest:* ${goalLabel}\n`;
    if (formData.message) {
      message += `\n*Message:*\n${formData.message}`;
    }
    
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${BUSINESS_INFO.phoneClean}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <div className="relative">
        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Your Name *"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="pl-11"
        />
      </div>

      {/* Email */}
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          type="email"
          placeholder="Email Address *"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="pl-11"
        />
      </div>

      {/* Phone (Optional) */}
      <div className="relative">
        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          type="tel"
          placeholder="Phone Number (Optional)"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="pl-11"
        />
      </div>

      {/* Goal Dropdown */}
      <div className="relative">
        <Target className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground z-10" />
        <Select
          value={formData.goal}
          onValueChange={(value) => setFormData({ ...formData, goal: value })}
          required
        >
          <SelectTrigger className="pl-11">
            <SelectValue placeholder="What are you interested in? *" />
          </SelectTrigger>
          <SelectContent>
            {goals.map((goal) => (
              <SelectItem key={goal.value} value={goal.value}>
                {goal.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Message */}
      <div className="relative">
        <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
        <Textarea
          placeholder="Tell us about your goals (optional)"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="pl-11 min-h-[100px] resize-none"
        />
      </div>

      {/* Submit Button */}
      <Button type="submit" className="w-full cta-primary gap-2">
        <Send className="w-4 h-4" />
        Send via WhatsApp
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        By submitting, you'll be redirected to WhatsApp to complete your inquiry.
      </p>
    </form>
  );
};

export default ContactForm;
