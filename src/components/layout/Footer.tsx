import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { BUSINESS_INFO, NAVIGATION } from "@/lib/constants";

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
            <Link to="/" className="flex items-center gap-2.5 mb-4 group">
              <svg 
                className="w-10 h-10 transition-transform group-hover:scale-105" 
                viewBox="0 0 48 48" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="footerLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(173, 58%, 50%)" />
                    <stop offset="100%" stopColor="hsl(173, 58%, 40%)" />
                  </linearGradient>
                  <linearGradient id="footerSmileGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(16, 90%, 58%)" />
                    <stop offset="100%" stopColor="hsl(24, 95%, 53%)" />
                  </linearGradient>
                  <linearGradient id="footerPageGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="white" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="white" stopOpacity="1" />
                  </linearGradient>
                </defs>
                <path d="M24 4C32 4 40 8 42 16C44 24 42 34 36 40C30 46 18 46 12 40C6 34 4 24 6 16C8 8 16 4 24 4Z" fill="url(#footerLogoGrad)"/>
                <path d="M10 17C10 15 12 13 17 13C22 13 24 15 24 17V33C24 33 22 31 17 31C12 31 10 33 10 33V17Z" fill="url(#footerPageGrad)"/>
                <path d="M38 17C38 15 36 13 31 13C26 13 24 15 24 17V33C24 33 26 31 31 31C36 31 38 33 38 33V17Z" fill="url(#footerPageGrad)"/>
                <circle cx="17" cy="20" r="2" fill="hsl(173, 58%, 35%)" />
                <circle cx="31" cy="20" r="2" fill="hsl(173, 58%, 35%)" />
                <path d="M17 26C19 29 24 30 31 27" stroke="url(#footerSmileGrad)" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                <path d="M40 8L41 10L43 9L41 11L42 13L40 11L38 12L40 10L39 8L40 8Z" fill="hsl(45, 100%, 60%)" opacity="0.9"/>
              </svg>
              <span className="font-heading font-bold text-lg">LEARN WITH SMILE</span>
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
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-sm text-background/60">
              © {currentYear} LEARN WITH SMILE. All rights reserved.
            </p>
            <p className="text-sm text-background/60">
              Kolkata, India | Online across Pan-India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;