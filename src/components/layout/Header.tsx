import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { NAVIGATION, BUSINESS_INFO, WHATSAPP_URL } from "@/lib/constants";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-xl shadow-lg border-b border-border/50" 
          : "bg-background/80 backdrop-blur-md"
      }`}
    >
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-18 px-4">
          {/* Elegant Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2.5 hover:opacity-90 transition-all group"
          >
            <div className="relative">
              <svg 
                className="w-10 h-10 md:w-11 md:h-11 transition-transform group-hover:scale-105 group-hover:rotate-3" 
                viewBox="0 0 48 48" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="logoGradientMain" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(173, 58%, 48%)" />
                    <stop offset="50%" stopColor="hsl(173, 58%, 39%)" />
                    <stop offset="100%" stopColor="hsl(173, 50%, 28%)" />
                  </linearGradient>
                  <linearGradient id="smileGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(16, 90%, 58%)" />
                    <stop offset="100%" stopColor="hsl(24, 95%, 53%)" />
                  </linearGradient>
                  <linearGradient id="pageGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="white" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="white" stopOpacity="1" />
                  </linearGradient>
                  <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="1" stdDeviation="1" floodOpacity="0.15"/>
                  </filter>
                </defs>
                
                {/* Organic blob shape background */}
                <path 
                  d="M24 4C32 4 40 8 42 16C44 24 42 34 36 40C30 46 18 46 12 40C6 34 4 24 6 16C8 8 16 4 24 4Z" 
                  fill="url(#logoGradientMain)"
                />
                
                {/* Open book / speech bubble hybrid */}
                <g filter="url(#softShadow)">
                  {/* Left page */}
                  <path 
                    d="M12 18C12 16 14 14 18 14C22 14 24 16 24 18V32C24 32 22 30 18 30C14 30 12 32 12 32V18Z" 
                    fill="url(#pageGradient)"
                  />
                  {/* Right page */}
                  <path 
                    d="M36 18C36 16 34 14 30 14C26 14 24 16 24 18V32C24 32 26 30 30 30C34 30 36 32 36 32V18Z" 
                    fill="url(#pageGradient)"
                  />
                </g>
                
                {/* Smile curve on the book */}
                <path 
                  d="M16 24C18 28 24 30 32 26" 
                  stroke="url(#smileGradient)" 
                  strokeWidth="2.5" 
                  strokeLinecap="round"
                  fill="none"
                />
                
                {/* Happy eyes */}
                <circle cx="18" cy="20" r="1.5" fill="hsl(173, 58%, 35%)" />
                <circle cx="30" cy="20" r="1.5" fill="hsl(173, 58%, 35%)" />
                
                {/* Sparkle accent */}
                <g opacity="0.9">
                  <path d="M38 10L39 12L41 11L39 13L40 15L38 13L36 14L38 12L37 10L38 10Z" fill="hsl(45, 100%, 60%)" />
                </g>
              </svg>
            </div>
            
            <div className="flex flex-col leading-none">
              <span className="font-heading font-bold text-base md:text-lg text-foreground tracking-tight">
                <span className="hidden xs:inline">LEARN WITH SMILE</span>
                <span className="xs:hidden">LWS</span>
              </span>
              <span className="hidden md:block text-[10px] text-muted-foreground font-medium tracking-wider uppercase mt-0.5">
                English & Career Excellence
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
            {NAVIGATION.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-foreground/80 hover:text-foreground hover:bg-secondary/80"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-2.5">
            <a href={`tel:${BUSINESS_INFO.phone}`}>
              <Button 
                variant="outline" 
                size="sm" 
                className="gap-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button 
                size="sm" 
                className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground shadow-md hover:shadow-lg transition-all"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2.5 rounded-lg hover:bg-secondary/80 active:bg-secondary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation - Slide down animation */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav 
            className="border-t border-border/50 py-4 px-4"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-1">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-all ${
                    isActive(item.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-secondary/80"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            <div className="flex gap-3 mt-4 pt-4 border-t border-border/50">
              <a href={`tel:${BUSINESS_INFO.phone}`} className="flex-1">
                <Button 
                  variant="outline" 
                  className="w-full gap-2 h-12 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </Button>
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground gap-2 shadow-md">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </Button>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;