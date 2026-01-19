// Business Information Constants
// LEARN WITH SMILE - Kolkata-based offline + Pan-India online

export const BUSINESS_INFO = {
  name: "LEARN WITH SMILE",
  tagline: "Master English. Accelerate Your Career.",
  phone: "+91 8981672404",
  phoneClean: "918981672404",
  whatsapp: "918981672404",
  email: "learnwithsmile@proton.me",
  address: {
    full: "75/2/4, Raja Ram Mohan Roy Road, Kolkata — 700008",
    street: "75/2/4, Raja Ram Mohan Roy Road",
    city: "Kolkata",
    state: "West Bengal",
    postalCode: "700008",
    country: "India",
  },
  hours: {
    monFri: "9:00 AM – 7:00 PM",
    sat: "10:30 AM – 8:00 PM",
    sun: "12:00 PM – 8:00 PM",
  },
  // Google Business URLs
  googleBusinessUrl: "https://share.google/56Kr6MJkC6oF0Lyw1",
  googleReviewUrl: "https://g.page/r/CY5ptQJYQVPVEBM/review",
  canonicalBase: "https://soumyakantabera.github.io/smile-succeed-07/",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7372.783206356567!2d88.327187!3d22.489486!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027b0735dcc47b%3A0xd553415802b5698e!2sLEARN%20WITH%20SMILE!5e0!3m2!1sen!2sit!4v1757682194625!5m2!1sen!2sit",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=75%2F2%2F4+Raja+Ram+Mohan+Roy+Road+Kolkata+700008+India",
} as const;

export const WHATSAPP_URL = `https://api.whatsapp.com/send?phone=${BUSINESS_INFO.phoneClean}`;

export const PRICING = {
  planA: {
    name: "Plan A",
    price: "₹1,000",
    period: "per month",
    description: "Spoken English OR Career Accelerator",
    features: [
      "Weekly 1-on-1 sessions",
      "Personalized learning path",
      "Practice materials included",
      "WhatsApp support",
      "Progress tracking",
    ],
    idealFor: "Beginners & working professionals",
  },
  planB: {
    name: "Plan B",
    price: "₹1,500",
    period: "per month",
    description: "IELTS Prep OR Business English B2–C1",
    features: [
      "Intensive weekly sessions",
      "Module-specific training",
      "Mock tests & feedback",
      "Writing review & correction",
      "Speaking practice drills",
      "Priority WhatsApp support",
    ],
    idealFor: "Professionals & IELTS aspirants",
  },
} as const;

export const STATS = {
  recommend: "98%",
  recommendText: "recommend us",
  lessons: "1,000+",
  lessonsText: "lessons delivered",
  results: "7–21 days",
  resultsText: "to visible change",
} as const;

export const NAVIGATION = [
  { name: "Home", path: "/" },
  { name: "English Learning", path: "/english-learning" },
  { name: "Career Counselling", path: "/career-counselling" },
  { name: "IELTS & Business English", path: "/ielts-business" },
  { name: "Pricing", path: "/pricing" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
] as const;

export const PROBLEMS = [
  {
    title: "Interview Fear",
    description: "Nervous in interviews? Learn to present yourself with confidence and clarity.",
    icon: "UserX",
  },
  {
    title: "Meeting Nerves",
    description: "Struggling to speak up in meetings? Build the confidence to share your ideas.",
    icon: "Users",
  },
  {
    title: "Accent Clarity",
    description: "Want clearer pronunciation? Master sounds that make you understood globally.",
    icon: "Mic",
  },
  {
    title: "Grammar Gaps",
    description: "Unsure about grammar rules? Build a solid foundation for professional communication.",
    icon: "BookOpen",
  },
  {
    title: "Email & SOP Writing",
    description: "Need better written communication? Craft emails and documents that impress.",
    icon: "Mail",
  },
  {
    title: "Time-Poor Schedules",
    description: "Too busy to learn? Flexible online sessions fit around your life.",
    icon: "Clock",
  },
] as const;

export const ENGLISH_PROGRAMS = [
  {
    title: "Spoken English",
    description: "Build fluency through structured practice from controlled to free speaking.",
    features: ["Pronunciation drills", "Conversation practice", "Real-world scenarios"],
  },
  {
    title: "Grammar Mastery",
    description: "Solid grammar foundation for professional and academic communication.",
    features: ["Tense usage", "Sentence structure", "Common error correction"],
  },
  {
    title: "Pronunciation & Accent",
    description: "Clear, confident pronunciation that makes you understood anywhere.",
    features: ["Sound training", "Intonation patterns", "Clarity exercises"],
  },
  {
    title: "Confidence Building",
    description: "Overcome hesitation and speak with natural confidence.",
    features: ["Public speaking", "Anxiety management", "Presentation skills"],
  },
] as const;

export const CAREER_SERVICES = [
  {
    title: "Resume & ATS Optimization",
    description: "Create resumes that pass ATS filters and impress recruiters.",
    icon: "FileText",
  },
  {
    title: "LinkedIn Profile",
    description: "Optimize your LinkedIn to attract opportunities and network effectively.",
    icon: "Linkedin",
  },
  {
    title: "Interview Preparation",
    description: "Mock interviews with feedback to help you ace any interview.",
    icon: "Video",
  },
  {
    title: "Meeting Skills",
    description: "Scripts and strategies for confident participation in professional meetings.",
    icon: "Users",
  },
  {
    title: "SOP & Email Writing",
    description: "Professional writing skills for statements, emails, and business documents.",
    icon: "Mail",
  },
  {
    title: "Career Roadmap",
    description: "Strategic career planning with actionable steps for growth.",
    icon: "Map",
  },
] as const;
