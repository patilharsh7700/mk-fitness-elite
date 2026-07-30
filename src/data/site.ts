export const BRAND = "M.K Fitness Club";

export const PHONES = ["8698967644", "9689167644"];
export const WHATSAPP = "918698967644";

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Membership", to: "/membership" },
  { label: "Training", to: "/personal-training" },
  { label: "Gallery", to: "/gallery" },
  { label: "Branches", to: "/branches" },
  { label: "Trainers", to: "/trainers" },
  { label: "Reviews", to: "/testimonials" },
  { label: "Contact", to: "/contact" },
] as const;

export const WHY_US = [
  "Certified Trainers",
  "Modern Equipment",
  "Separate Yoga Hall",
  "Strength Training",
  "Cardio Zone",
  "Functional Training",
  "Personal Training",
  "Nutrition Guidance",
  "Friendly Environment",
  "Affordable Membership",
];

export const FEATURES = [
  { icon: "Clock", title: "24 Hours Open", desc: "Punawale branch never sleeps — train on your schedule." },
  { icon: "BadgeCheck", title: "Certified Trainers", desc: "Qualified coaches guiding every rep and every plan." },
  { icon: "Snowflake", title: "AC Gym", desc: "Fully air-conditioned floors for comfortable sessions." },
  { icon: "Lock", title: "Locker Facility", desc: "Secure personal lockers and changing rooms." },
  { icon: "Cog", title: "Modern Machines", desc: "Imported, well-maintained strength and cardio machines." },
  { icon: "Dumbbell", title: "Weight Training", desc: "Full free-weight zone with racks, bars and plates." },
  { icon: "Flame", title: "CrossFit Area", desc: "Functional turf, ropes, kettlebells and sleds." },
  { icon: "Flower2", title: "Yoga Hall", desc: "A separate calm hall for yoga, mobility and stretching." },
  { icon: "Waves", title: "Steam Room", desc: "Recovery steam facility — coming soon at both branches." },
  { icon: "Car", title: "Parking", desc: "Ample two and four wheeler parking on site." },
  { icon: "Sparkles", title: "Clean Environment", desc: "Sanitised floors, fresh towels and daily deep cleaning." },
  { icon: "HeartPulse", title: "Cardio Equipment", desc: "Treadmills, cross trainers, bikes and rowers." },
];

export const STATS = [
  { value: 2, suffix: "+", label: "Branches" },
  { value: 350, suffix: "+", label: "Members" },
  { value: 15, suffix: "+", label: "Certified Trainers" },
  { value: 350, suffix: "+", label: "Happy Clients" },
  { value: 4.6, suffix: "★", label: "Google Rating", decimals: 1 },
];

export const PLANS = [
  {
    name: "Basic",
    tag: "Start strong",
    features: ["Gym Access", "Cardio Zone", "Strength Floor", "Locker Facility"],
    excluded: ["Trainer Support", "Diet Guidance"],
    featured: false,
  },
  {
    name: "Premium",
    tag: "Most chosen",
    features: [
      "Gym Access",
      "Cardio Zone",
      "Strength Floor",
      "Locker Facility",
      "Dedicated Trainer Support",
      "Personalised Diet Guidance",
    ],
    excluded: [],
    featured: true,
  },
  {
    name: "Standard",
    tag: "Balanced",
    features: ["Gym Access", "Cardio Zone", "Strength Floor", "Locker Facility", "Trainer Support"],
    excluded: ["Diet Guidance"],
    featured: false,
  },
];

export const TRAINING_GOALS = [
  "Fat Loss",
  "Muscle Gain",
  "Strength",
  "Weight Loss",
  "Body Transformation",
  "Customized Workout",
  "Customized Diet",
];

export const BRANCHES = [
  {
    name: "M.K Fitness Club — Punawale",
    area: "Punawale",
    address: "Kate Wasti, Near Mumbai Pune Highway, Punawale, Pune",
    timing: "Open 24 Hours",
    phone: "8698967644",
    rating: 4.6,
    reviews: 208,
    features: ["Yoga Hall", "AC", "Modern Machines", "Certified Trainers", "Parking"],
    map: "https://www.google.com/maps?q=Punawale%2C%20Pune&output=embed",
  },
  {
    name: "M.K Fitness Club — Marunji",
    area: "Marunji",
    address: "Front of Motherson Sony Company, Hinjawadi Kasarsai Road, Marunji, Pune",
    timing: "6 AM – 11 PM",
    phone: "9689167644",
    rating: 4.5,
    reviews: 140,
    features: ["Yoga Hall", "Functional Area", "Personal Training", "Modern Equipment"],
    map: "https://www.google.com/maps?q=Marunji%2C%20Pune&output=embed",
  },
];

export const REVIEWS = [
  {
    name: "Rohit Pawar",
    since: "Punawale · Google Review",
    rating: 5,
    text: "Modern equipment, supportive trainers and a genuinely clean environment. Best gym I have trained at in Punawale.",
  },
  {
    name: "Sneha Kulkarni",
    since: "Marunji · Google Review",
    rating: 5,
    text: "Great atmosphere and excellent guidance for beginners. The trainers correct your form from day one.",
  },
  {
    name: "Amit Deshmukh",
    since: "Punawale · Google Review",
    rating: 4,
    text: "Well maintained machines and personalized workout plans. The 24 hour access fits my shift timings perfectly.",
  },
];