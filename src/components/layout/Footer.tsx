import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, FileImage } from "lucide-react";
import { BUSINESS_INFO, NAVIGATION } from "@/lib/constants";
import { LogoIcon } from "@/components/brand/Logo";

const LOCATION_PAGES = [
  { name: "Behala", path: "/spoken-english-behala" },
  { name: "Ballygunge", path: "/spoken-english-ballygunge" },
  { name: "Tollygunge", path: "/spoken-english-tollygunge" },
  { name: "Rashbehari Avenue", path: "/spoken-english-rashbehari-avenue" },
  { name: "Gariahat", path: "/spoken-english-gariahat" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background" role="contentinfo">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Brand & Contact */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <LogoIcon size={44} id="footer-logo" className="transition-transform duration-300 group-hover:scale-105" />
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg leading-tight">Learn With Smile</span>
                <span className="text-[10px] text-background/60 font-medium tracking-wider uppercase">English Academy</span>
              </div>
            </Link>
            <p className="text-background/80 mb-5 text-sm leading-relaxed">
              Master English & Accelerate Your Career. Kolkata-based offline classes + Online training across India.
            </p>
            
            <div className="space-y-2.5">
              <a 
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center gap-3 text-background/80 hover:text-background transition-colors group"
              >
                <Phone className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
                <span className="text-sm">{BUSINESS_INFO.phone}</span>
              </a>
              <a 
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-center gap-3 text-background/80 hover:text-background transition-colors group"
              >
                <Mail className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
                <span className="text-sm">{BUSINESS_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-base mb-4">Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                {NAVIGATION.map((item) => (
                  <li key={item.path}>
                    <Link 
                      to={item.path}
                      className="text-background/75 hover:text-background hover:translate-x-1 transition-all inline-block text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Locations */}
          <div>
            <h3 className="font-heading font-semibold text-base mb-4">Our Locations</h3>
            <ul className="space-y-2">
              {LOCATION_PAGES.map((location) => (
                <li key={location.path}>
                  <Link 
                    to={location.path}
                    className="text-background/75 hover:text-background hover:translate-x-1 transition-all inline-block text-sm"
                  >
                    {location.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h4 className="font-heading font-semibold text-sm mt-5 mb-2.5">Programs</h4>
            <ul className="space-y-1.5 text-sm text-background/75">
              <li>
                <Link to="/english-learning" className="hover:text-background transition-colors">
                  Spoken English
                </Link>
              </li>
              <li>
                <Link to="/career-counselling" className="hover:text-background transition-colors">
                  Career Counselling
                </Link>
              </li>
              <li>
                <Link to="/ielts-business" className="hover:text-background transition-colors">
                  IELTS Prep
                </Link>
              </li>
            </ul>
          </div>

          {/* Location & Hours */}
          <div>
            <h3 className="font-heading font-semibold text-base mb-4">Visit Us</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <address className="text-sm text-background/80 not-italic leading-relaxed">
                  {BUSINESS_INFO.address.street}<br />
                  {BUSINESS_INFO.address.city} — {BUSINESS_INFO.address.postalCode}
                </address>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <div className="text-sm text-background/80 space-y-0.5">
                  <p>Mon–Fri: {BUSINESS_INFO.hours.monFri}</p>
                  <p>Sat: {BUSINESS_INFO.hours.sat}</p>
                  <p>Sun: {BUSINESS_INFO.hours.sun}</p>
                </div>
              </div>
            </div>

            <div className="mt-5 flex gap-3 flex-wrap">
              <a 
                href={BUSINESS_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent hover:text-accent/80 underline underline-offset-2 transition-colors"
              >
                Get Directions
              </a>
              <span className="text-background/30">|</span>
              <a 
                href={BUSINESS_INFO.googleBusinessUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent hover:text-accent/80 underline underline-offset-2 transition-colors"
              >
                View on Google
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-background/15">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60">
              © {currentYear} LEARN WITH SMILE. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link 
                to="/brand-assets" 
                className="flex items-center gap-2 text-sm text-background/60 hover:text-background transition-colors"
              >
                <FileImage className="w-4 h-4" />
                Brand Assets
              </Link>
              <span className="text-background/30">|</span>
              <p className="text-sm text-background/60">
                Kolkata, India | Online across Pan-India
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
