import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { BUSINESS_INFO, NAVIGATION } from "@/lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background" role="contentinfo">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand & Contact */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <svg 
                className="w-10 h-10 transition-transform group-hover:scale-105" 
                viewBox="0 0 48 48" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(173, 58%, 50%)" />
                    <stop offset="100%" stopColor="hsl(173, 58%, 40%)" />
                  </linearGradient>
                  <linearGradient id="footerAccentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(16, 85%, 60%)" />
                    <stop offset="100%" stopColor="hsl(16, 85%, 50%)" />
                  </linearGradient>
                </defs>
                <rect x="2" y="2" width="44" height="44" rx="12" fill="url(#footerLogoGradient)" />
                <path 
                  d="M14 12V32H30" 
                  stroke="white" 
                  strokeWidth="4" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  opacity="0.95"
                />
                <path 
                  d="M20 26C20 26 24 32 32 32" 
                  stroke="url(#footerAccentGradient)" 
                  strokeWidth="3.5" 
                  strokeLinecap="round"
                />
                <circle cx="36" cy="12" r="3" fill="white" opacity="0.6" />
              </svg>
              <span className="font-heading font-bold text-xl">LEARN WITH SMILE</span>
            </Link>
            <p className="text-background/80 mb-6 text-sm leading-relaxed">
              Master English & Accelerate Your Career. Kolkata-based offline classes + Online training across India.
            </p>
            
            <div className="space-y-3">
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
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                {NAVIGATION.map((item) => (
                  <li key={item.path}>
                    <Link 
                      to={item.path}
                      className="text-background/80 hover:text-background hover:underline transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Our Programs</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <Link to="/english-learning" className="hover:text-background hover:underline transition-colors">
                  Spoken English Classes
                </Link>
              </li>
              <li>
                <Link to="/career-counselling" className="hover:text-background hover:underline transition-colors">
                  Interview Preparation
                </Link>
              </li>
              <li>
                <Link to="/ielts-business" className="hover:text-background hover:underline transition-colors">
                  IELTS Preparation
                </Link>
              </li>
            </ul>
            
            <h4 className="font-heading font-semibold text-base mt-6 mb-3">Serving South Kolkata</h4>
            <ul className="space-y-1.5 text-sm text-background/80">
              <li>
                <Link to="/spoken-english-behala" className="hover:text-background hover:underline transition-colors">
                  Behala
                </Link>
              </li>
              <li>
                <Link to="/spoken-english-ballygunge" className="hover:text-background hover:underline transition-colors">
                  Ballygunge
                </Link>
              </li>
              <li>
                <Link to="/spoken-english-tollygunge" className="hover:text-background hover:underline transition-colors">
                  Tollygunge
                </Link>
              </li>
              <li>
                <Link to="/spoken-english-rashbehari-avenue" className="hover:text-background hover:underline transition-colors">
                  Rashbehari Avenue
                </Link>
              </li>
              <li>
                <Link to="/spoken-english-gariahat" className="hover:text-background hover:underline transition-colors">
                  Gariahat
                </Link>
              </li>
            </ul>
          </div>

          {/* Location & Hours */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Visit Us</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <address className="text-sm text-background/80 not-italic leading-relaxed">
                  {BUSINESS_INFO.address.street}<br />
                  {BUSINESS_INFO.address.city} — {BUSINESS_INFO.address.postalCode}
                </address>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <div className="text-sm text-background/80 space-y-1">
                  <p>Mon–Fri: {BUSINESS_INFO.hours.monFri}</p>
                  <p>Sat: {BUSINESS_INFO.hours.sat}</p>
                  <p>Sun: {BUSINESS_INFO.hours.sun}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <a 
                href={BUSINESS_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent hover:text-accent/80 underline transition-colors"
              >
                Get Directions
              </a>
              <span className="text-background/40">|</span>
              <a 
                href={BUSINESS_INFO.googleBusinessUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent hover:text-accent/80 underline transition-colors"
              >
                View on Google
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
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
