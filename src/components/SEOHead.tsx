import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BUSINESS_INFO } from "@/lib/constants";

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
}

const routeMeta: Record<string, { title: string; description: string }> = {
  "/": {
    title: "LEARN WITH SMILE | Spoken English Classes & Career Counselling in Kolkata",
    description: "Master English & Accelerate Your Career with LEARN WITH SMILE. Spoken English classes in Kolkata, online across India. Interview prep, IELTS, Business English.",
  },
  "/english-learning": {
    title: "Spoken English Classes in Kolkata | LEARN WITH SMILE",
    description: "Build fluency and confidence with our spoken English courses. Grammar, pronunciation, and conversation practice for all levels.",
  },
  "/career-counselling": {
    title: "Career Counselling & Interview Prep | LEARN WITH SMILE",
    description: "Resume optimization, LinkedIn profile building, mock interviews, and career roadmap planning to accelerate your professional growth.",
  },
  "/ielts-business": {
    title: "IELTS Preparation & Business English | LEARN WITH SMILE",
    description: "Intensive IELTS prep and Business English B2-C1 training for professionals and aspirants. Mock tests, writing review, and speaking drills.",
  },
  "/pricing": {
    title: "Affordable Pricing Plans | LEARN WITH SMILE",
    description: "Flexible and affordable pricing for spoken English, career counselling, IELTS prep, and business English courses.",
  },
  "/about": {
    title: "About Us | LEARN WITH SMILE",
    description: "Learn about LEARN WITH SMILE - Kolkata's trusted spoken English and career counselling institute with online classes across India.",
  },
  "/contact": {
    title: "Contact Us | LEARN WITH SMILE",
    description: "Get in touch with LEARN WITH SMILE. Visit us in Kolkata or join our online classes from anywhere in India.",
  },
  "/spoken-english-behala": {
    title: "Spoken English Classes in Behala | LEARN WITH SMILE",
    description: "Join spoken English classes near Behala, Kolkata. Build fluency with expert trainers at LEARN WITH SMILE.",
  },
  "/spoken-english-ballygunge": {
    title: "Spoken English Classes in Ballygunge | LEARN WITH SMILE",
    description: "Spoken English training near Ballygunge, Kolkata. Improve your communication skills with LEARN WITH SMILE.",
  },
  "/spoken-english-tollygunge": {
    title: "Spoken English Classes in Tollygunge | LEARN WITH SMILE",
    description: "English speaking courses near Tollygunge, Kolkata. Professional trainers at LEARN WITH SMILE.",
  },
  "/spoken-english-rashbehari-avenue": {
    title: "Spoken English Classes near Rashbehari Avenue | LEARN WITH SMILE",
    description: "Join spoken English classes near Rashbehari Avenue, Kolkata with LEARN WITH SMILE.",
  },
  "/spoken-english-gariahat": {
    title: "Spoken English Classes in Gariahat | LEARN WITH SMILE",
    description: "Spoken English training near Gariahat, Kolkata. Expert coaching at LEARN WITH SMILE.",
  },
};

export function SEOHead({ title, description, image }: SEOHeadProps) {
  const { pathname } = useLocation();
  
  const meta = routeMeta[pathname] || routeMeta["/"];
  const pageTitle = title || meta.title;
  const pageDescription = description || meta.description;
  const pageImage = image || `${BUSINESS_INFO.canonicalBase}og-image.png`;
  const canonicalUrl = `${BUSINESS_INFO.canonicalBase}${pathname === "/" ? "" : pathname.slice(1)}`;

  useEffect(() => {
    // Update document title
    document.title = pageTitle;

    // Helper to update or create meta tag
    const setMeta = (selector: string, content: string, attr = "content") => {
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (el) {
        el.setAttribute(attr, content);
      } else {
        el = document.createElement("meta");
        const [attrName, attrValue] = selector.match(/\[([^\]=]+)="([^"]+)"\]/)?.slice(1) || [];
        if (attrName && attrValue) {
          el.setAttribute(attrName, attrValue);
        }
        el.setAttribute(attr, content);
        document.head.appendChild(el);
      }
    };

    // Update canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonical) {
      canonical.href = canonicalUrl;
    }

    // Update meta description
    setMeta('meta[name="description"]', pageDescription);

    // Update OG tags
    setMeta('meta[property="og:title"]', pageTitle);
    setMeta('meta[property="og:description"]', pageDescription);
    setMeta('meta[property="og:url"]', canonicalUrl);
    setMeta('meta[property="og:image"]', pageImage);

    // Update Twitter tags
    setMeta('meta[name="twitter:title"]', pageTitle);
    setMeta('meta[name="twitter:description"]', pageDescription);
    setMeta('meta[name="twitter:image"]', pageImage);
  }, [pathname, pageTitle, pageDescription, pageImage, canonicalUrl]);

  return null;
}
