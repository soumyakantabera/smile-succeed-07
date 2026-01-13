import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/sections/Breadcrumb";
import ContactForm from "@/components/sections/ContactForm";
import MapEmbed from "@/components/sections/MapEmbed";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";

const Contact = () => {
  return (
    <Layout>
      <Breadcrumb />
      <section className="section-padding bg-gradient-to-br from-secondary via-background to-secondary">
        <div className="container-custom">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground text-center mb-12">
            Get in <span className="text-primary">Touch</span>
          </h1>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-heading text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4 mb-8">
                <a href={`tel:${BUSINESS_INFO.phone}`} className="flex items-center gap-3 text-foreground hover:text-primary">
                  <Phone className="w-5 h-5 text-primary" />{BUSINESS_INFO.phone}
                </a>
                <a href={`mailto:${BUSINESS_INFO.email}`} className="flex items-center gap-3 text-foreground hover:text-primary">
                  <Mail className="w-5 h-5 text-primary" />{BUSINESS_INFO.email}
                </a>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <address className="not-italic">{BUSINESS_INFO.address.full}</address>
                </div>
              </div>
              
              <h3 className="font-heading text-lg font-semibold mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" /> Business Hours
              </h3>
              <div className="text-muted-foreground space-y-1 text-sm">
                <p>Mon–Fri: {BUSINESS_INFO.hours.monFri}</p>
                <p>Sat: {BUSINESS_INFO.hours.sat}</p>
                <p>Sun: {BUSINESS_INFO.hours.sun}</p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-6 md:p-8 border border-border">
              <h2 className="font-heading text-xl font-bold mb-6">Send us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      <MapEmbed showFullMap />
    </Layout>
  );
};

export default Contact;
