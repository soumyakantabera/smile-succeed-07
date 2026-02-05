export interface Festival {
  id: string;
  name: string;
  emoji: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    text: string;
  };
  taglines: string[];
  greetings: string[];
}

export const festivals: Festival[] = [
  {
    id: "diwali",
    name: "Diwali",
    emoji: "🪔",
    colors: {
      primary: "#FF6B00",
      secondary: "#FFD700",
      accent: "#8B0000",
      text: "#FFFFFF",
    },
    taglines: [
      "Light up your English skills this Diwali! ✨",
      "Brighten your future with fluent English 🪔",
      "This Diwali, gift yourself confidence in English!",
      "Illuminate your career with Learn With Smile",
      "Festival of Lights, Festival of Learning! 🎇",
      "Spark your English journey this festive season",
    ],
    greetings: [
      "Wishing you a Diwali filled with success!",
      "May this Diwali bring new opportunities",
      "Happy Diwali from Learn With Smile family!",
    ],
  },
  {
    id: "christmas",
    name: "Christmas",
    emoji: "🎄",
    colors: {
      primary: "#165B33",
      secondary: "#BB2528",
      accent: "#F8B229",
      text: "#FFFFFF",
    },
    taglines: [
      "Gift yourself fluent English this Christmas! 🎁",
      "Unwrap your potential with Learn With Smile",
      "Make English mastery your New Year resolution!",
      "Season's greetings & speaking success! 🎄",
      "Ho Ho Ho! Time to grow your English skills",
      "The best gift? Confidence in English!",
    ],
    greetings: [
      "Merry Christmas from Learn With Smile!",
      "Wishing you joy and fluency this season",
      "Happy Holidays & Happy Learning!",
    ],
  },
  {
    id: "newyear",
    name: "New Year",
    emoji: "🎊",
    colors: {
      primary: "#1A1A2E",
      secondary: "#FFD700",
      accent: "#C0C0C0",
      text: "#FFFFFF",
    },
    taglines: [
      "New Year, New English Skills! 🎉",
      "2025: Your year to master English!",
      "Start fresh, speak confidently! ✨",
      "Resolution: Fluent English with Learn With Smile",
      "Ring in success with better communication!",
      "New beginnings, new confidence in English!",
    ],
    greetings: [
      "Happy New Year from Learn With Smile!",
      "Cheers to a year of growth and learning!",
      "Wishing you success in 2025!",
    ],
  },
  {
    id: "holi",
    name: "Holi",
    emoji: "🎨",
    colors: {
      primary: "#FF1493",
      secondary: "#00FF00",
      accent: "#FFD700",
      text: "#FFFFFF",
    },
    taglines: [
      "Add colors of confidence to your English! 🎨",
      "This Holi, paint your future bright!",
      "Splash into fluent English with us! 💦",
      "Colorful conversations start here!",
      "Let your English bloom this Holi!",
      "Festival of colors, festival of expression!",
    ],
    greetings: [
      "Happy Holi from Learn With Smile!",
      "May your life be as colorful as your English!",
      "Wishing you a vibrant Holi!",
    ],
  },
  {
    id: "durga-puja",
    name: "Durga Puja",
    emoji: "🙏",
    colors: {
      primary: "#8B0000",
      secondary: "#FFD700",
      accent: "#FF6347",
      text: "#FFFFFF",
    },
    taglines: [
      "Embrace the power of English this Pujo! 🙏",
      "Shubho Bijoya! Celebrate with confidence",
      "This Pujo, conquer your English fears!",
      "Ma Durga's blessings for your success!",
      "Dhunuchi naach & English classes! 🪔",
      "Pandal hopping to career topping!",
    ],
    greetings: [
      "Shubho Durga Puja from Learn With Smile!",
      "May Ma Durga bless your journey!",
      "Subho Bijoya Dashami!",
    ],
  },
  {
    id: "independence-day",
    name: "Independence Day",
    emoji: "🇮🇳",
    colors: {
      primary: "#FF9933",
      secondary: "#138808",
      accent: "#000080",
      text: "#FFFFFF",
    },
    taglines: [
      "Free yourself from language barriers! 🇮🇳",
      "Independence in expression starts here!",
      "Speak freely, live proudly! ✨",
      "Your voice, your freedom, your English!",
      "Azadi from hesitation in English!",
      "Celebrate freedom with confident communication!",
    ],
    greetings: [
      "Happy Independence Day!",
      "Jai Hind! From Learn With Smile",
      "Proud to be Indian, proud to communicate!",
    ],
  },
  {
    id: "republic-day",
    name: "Republic Day",
    emoji: "🇮🇳",
    colors: {
      primary: "#FF9933",
      secondary: "#FFFFFF",
      accent: "#138808",
      text: "#000080",
    },
    taglines: [
      "Build your English republic! 🇮🇳",
      "Constitution of confidence in English",
      "Unity in diversity of languages!",
      "Your right to speak confidently!",
      "Parade your English skills with pride!",
      "Salute to your learning journey!",
    ],
    greetings: [
      "Happy Republic Day!",
      "Jai Hind from Learn With Smile!",
      "Celebrating India's spirit!",
    ],
  },
  {
    id: "eid",
    name: "Eid",
    emoji: "🌙",
    colors: {
      primary: "#006400",
      secondary: "#FFD700",
      accent: "#FFFFFF",
      text: "#FFFFFF",
    },
    taglines: [
      "Eid Mubarak! Gift yourself English skills 🌙",
      "New moon, new beginnings in English!",
      "Celebrate with confident conversations!",
      "May your English journey be blessed!",
      "Sweet success in English this Eid!",
      "From prayers to presentations - excel!",
    ],
    greetings: [
      "Eid Mubarak from Learn With Smile!",
      "May this Eid bring success!",
      "Wishing you peace and prosperity!",
    ],
  },
  {
    id: "teachers-day",
    name: "Teachers Day",
    emoji: "👨‍🏫",
    colors: {
      primary: "#4B0082",
      secondary: "#FFD700",
      accent: "#FF6347",
      text: "#FFFFFF",
    },
    taglines: [
      "Thank a teacher, become a speaker! 👨‍🏫",
      "Great teachers inspire great speakers!",
      "Learn today, lead tomorrow!",
      "Honoring those who shape futures!",
      "From learner to leader - our mission!",
      "Every expert was once a student!",
    ],
    greetings: [
      "Happy Teachers Day!",
      "Gratitude to all educators!",
      "Celebrating the gift of teaching!",
    ],
  },
  {
    id: "raksha-bandhan",
    name: "Raksha Bandhan",
    emoji: "🎀",
    colors: {
      primary: "#FF69B4",
      secondary: "#FFD700",
      accent: "#8B008B",
      text: "#FFFFFF",
    },
    taglines: [
      "Bond with English this Rakhi! 🎀",
      "Tie the thread of confidence!",
      "Sibling goals: Fluent English together!",
      "Protect your future with skills!",
      "Sweet gifts & sweeter communication!",
      "Brother-sister duo learning English!",
    ],
    greetings: [
      "Happy Raksha Bandhan!",
      "Celebrating the bond of love!",
      "From Learn With Smile family!",
    ],
  },
  {
    id: "ganesh-chaturthi",
    name: "Ganesh Chaturthi",
    emoji: "🐘",
    colors: {
      primary: "#FF6600",
      secondary: "#FFD700",
      accent: "#8B4513",
      text: "#FFFFFF",
    },
    taglines: [
      "Ganpati Bappa Morya! Learn & Grow! 🐘",
      "Remove obstacles in your English journey!",
      "Wisdom of Ganesha, fluency guaranteed!",
      "New beginnings with Lord Ganesha's blessings!",
      "Modak sweet, English sweeter!",
      "Visarjan fears, immerse in learning!",
    ],
    greetings: [
      "Happy Ganesh Chaturthi!",
      "Ganpati Bappa Morya!",
      "May Lord Ganesha bless you!",
    ],
  },
  {
    id: "summer-vacation",
    name: "Summer Vacation",
    emoji: "☀️",
    colors: {
      primary: "#FF4500",
      secondary: "#FFD700",
      accent: "#00CED1",
      text: "#FFFFFF",
    },
    taglines: [
      "Hot summer, cool English skills! ☀️",
      "Don't waste your vacation - upgrade!",
      "Summer camp for English excellence!",
      "Beat the heat, master English!",
      "Vacation mode: Learning ON! 🏖️",
      "This summer, transform your English!",
    ],
    greetings: [
      "Happy Summer Holidays!",
      "Make this vacation productive!",
      "Summer learning, lifetime earning!",
    ],
  },
];

export const posterFormats = [
  { id: "instagram", name: "Instagram Post", width: 1080, height: 1080 },
  { id: "instagram-story", name: "Instagram Story", width: 1080, height: 1920 },
  { id: "facebook", name: "Facebook Post", width: 1200, height: 630 },
  { id: "whatsapp", name: "WhatsApp Status", width: 1080, height: 1920 },
  { id: "poster-a4", name: "A4 Poster", width: 595, height: 842 },
  { id: "banner", name: "Web Banner", width: 1920, height: 600 },
];

export const customOccasions = [
  { id: "admission", name: "Admission Open", emoji: "📚" },
  { id: "discount", name: "Special Discount", emoji: "💰" },
  { id: "batch-start", name: "New Batch Starting", emoji: "🚀" },
  { id: "success-story", name: "Success Story", emoji: "🏆" },
  { id: "workshop", name: "Free Workshop", emoji: "🎓" },
  { id: "demo-class", name: "Demo Class", emoji: "📝" },
];

export const customTaglines: Record<string, string[]> = {
  admission: [
    "Admissions Open! Limited Seats! 📚",
    "Enroll now, transform forever!",
    "Your English journey starts here!",
    "Join the success story!",
    "Don't wait, communicate! Register today!",
  ],
  discount: [
    "Flat 20% OFF on all courses! 💰",
    "Early bird gets the discount!",
    "Limited time offer - Grab now!",
    "Invest in yourself at half the price!",
    "Scholarship available - Apply now!",
  ],
  "batch-start": [
    "New batch starting soon! 🚀",
    "Fresh start, fresh batch!",
    "Join our newest batch today!",
    "Limited seats in upcoming batch!",
    "Morning/Evening batches available!",
  ],
  "success-story": [
    "From shy to confident - Our student's journey! 🏆",
    "Real students, real success!",
    "They did it, so can you!",
    "Join our wall of fame!",
    "Your success story awaits!",
  ],
  workshop: [
    "FREE Workshop this weekend! 🎓",
    "Learn, practice, succeed - FREE!",
    "No fees, just learning!",
    "Experience excellence for free!",
    "Your free trial awaits!",
  ],
  "demo-class": [
    "Book your FREE demo class! 📝",
    "Try before you buy!",
    "Experience the difference - FREE!",
    "One class can change everything!",
    "FREE session - No obligations!",
  ],
};
