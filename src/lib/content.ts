// Content sourced from zentristraining.com. Items marked DEMO are placeholders
// for the landing-page demo and must be confirmed with the client.

export const company = {
  name: "ZENTRIS Management Training",
  shortName: "ZENTRIS",
  tagline:
    "Empowering Individuals and Elevating Organizations with Corporate & Safety Training",
  address: "Office No. 11, 8th Floor, Al Masraf Building, Al Rigga, Dubai, UAE",
  phone: "+971 58 160 4617",
  phoneHref: "tel:+971581604617",
  email: "info@zentristraining.com",
  hours: "Mon-Fri 9am-5pm | Sat 9am-1pm",
  services: "Corporate Training | Safety Training | Firefighting Training",
};

/** Navigation items.
 *  `href` starting with "#" are anchor links for the landing page.
 *  `href` starting with "/" are inner page links.
 *  `children` is for mega-dropdown sub-items (trainings).
 */
export const nav = [
  { label: "Home", href: "#top" },
  { label: "About", href: "/about" },
  {
    label: "Trainings",
    href: "/trainings",
    children: [
      { label: "Safety Training", href: "/trainings/safety" },
      { label: "Corporate Training", href: "/trainings/corporate" },
      { label: "Firefighting Training", href: "/trainings/firefighting" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const;

/** Simplified nav for the landing page (anchor links only) */
export const landingNav = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#why" },
  { label: "Trainings", href: "#products" },
  { label: "Pricing", href: "#pricing" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const socials = [
  { label: "Facebook", href: "https://facebook.com/ZentrisTraining", key: "facebook" },
  { label: "LinkedIn", href: "https://linkedin.com/company/zentristraining", key: "linkedin" },
  { label: "X", href: "https://x.com/ZentrisTraining", key: "x" },
  { label: "Instagram", href: "https://instagram.com/zentristraining", key: "instagram" },
  { label: "YouTube", href: "https://youtube.com/@ZentrisTraining", key: "youtube" },
] as const;

// DEMO numbers - the live site shows truncated counters.
export const stats = [
  { value: "12k+", label: "Professionals trained" },
  { value: "300+", label: "Organizations served" },
  { value: "26+", label: "Accredited programs" },
  { value: "98%", label: "Client satisfaction" },
];

export const whyChoose = [
  {
    title: "Tailored Training Programs",
    body: "Every program is customized to your industry, roles and risk profile, so teams learn what actually applies on site.",
    icon: "tailored",
  },
  {
    title: "Global Standards, Local Focus",
    body: "International best practice aligned with UAE regulations and KHDA-approved management curricula.",
    icon: "standards",
  },
  {
    title: "Hands-On Learning Approach",
    body: "Practical drills, live rescue scenarios and equipment-based sessions led by certified industry trainers.",
    icon: "handson",
  },
];

const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export type Course = {
  title: string;
  blurb: string;
  duration: string;
  level: string;
  image?: string;
  tag?: string;
  /** Background line illustration from /public/illustrations */
  art?: Art;
};

export type Art = "crane-slab" | "welder" | "truck" | "frame" | "timber" | "blueprint" | "hardhat";

// A - Featured / best-selling (hero products)
export const featuredCourses: Course[] = [
  {
    title: "Working in Confined Space",
    blurb: "Entry procedures, atmospheric testing, permit systems and emergency egress for confined-space workers and supervisors.",
    duration: "1 Day",
    level: "Operative",
    image: u("1516937941344-00b4e0337589"),
    tag: "Best seller",
  },
  {
    title: "Work at Height Rescue",
    blurb: "Suspension trauma, rope rescue techniques and rescue-plan development for teams working above two metres.",
    duration: "2 Days",
    level: "Advanced",
    image: u("1531834685032-c34bf0d84c77"),
    tag: "Popular",
  },
  {
    title: "Crane Operator",
    blurb: "Load charts, lift planning, signalling and safe operation of mobile and tower cranes to international standards.",
    duration: "3 Days",
    level: "Certification",
    image: u("1429497419816-9ca5cfb4571a"),
  },
  {
    title: "Emergency Response & Preparedness",
    blurb: "Evacuation planning, incident command and first-response coordination for facility emergency teams.",
    duration: "1 Day",
    level: "All levels",
    image: u("1589939705384-5185137a7f0f"),
    tag: "New",
  },
  {
    title: "Forklift Operator",
    blurb: "Pre-use inspection, stability principles, load handling and site traffic rules for counterbalance forklifts.",
    duration: "2 Days",
    level: "Certification",
    image: u("1553413077-190dd305871c"),
  },
  {
    title: "Authorised Gas Tester",
    blurb: "Gas detection instruments, calibration, bump testing and interpreting readings for hot-work and entry permits.",
    duration: "1 Day",
    level: "Specialist",
    image: u("1513828583688-c52646db42da"),
  },
];

// B - General purpose safety courses (grid)
export const generalCourses: Course[] = [
  { title: "Safe Lifting Operations", blurb: "Plan and supervise lifts safely.", duration: "1 Day", level: "Operative", image: u("1429497419816-9ca5cfb4571a", 800), art: "crane-slab" },
  { title: "Manhole Watcher", blurb: "Standby duties and gas monitoring.", duration: "Half Day", level: "Operative", image: u("1517089596392-fb9a9033e05b", 800), art: "hardhat" },
  { title: "Hazard Identification & Risk Assessment", blurb: "HIRA methodology and controls.", duration: "1 Day", level: "Supervisor", image: u("1581092160562-40aa08e78837", 800), art: "blueprint" },
  { title: "Confined Space Rescue", blurb: "Rescue techniques and equipment.", duration: "2 Days", level: "Advanced", image: u("1513828583688-c52646db42da", 800), art: "hardhat" },
  { title: "Scaffolding Inspector", blurb: "Inspection, tagging and reporting.", duration: "2 Days", level: "Certification", image: u("1508450859948-4e04fabaa4ea", 800), art: "frame" },
  { title: "Powered Pallet Truck", blurb: "Safe PPT operation in warehouses.", duration: "1 Day", level: "Operative", image: u("1586528116493-a029325540fa", 800), art: "timber" },
  { title: "MEWP Operator", blurb: "Mobile elevated work platforms.", duration: "1 Day", level: "Certification", image: u("1504307651254-35680f356dfd", 800), art: "frame" },
  { title: "Defensive Driving", blurb: "Hazard perception and vehicle control.", duration: "1 Day", level: "All levels", image: u("1601584115197-04ecc0da31d7", 800), art: "truck" },
  { title: "Awareness for Working at Height", blurb: "Fall prevention and PPE.", duration: "Half Day", level: "Awareness", image: u("1574359411659-15573a27fd0c", 800), art: "frame" },
  { title: "Welding Safely", blurb: "Hot-work hazards and controls.", duration: "1 Day", level: "Operative", image: u("1504917595217-d4dc5ebe6122", 800), art: "welder" },
  { title: "Scaffolding Erection & Dismantling", blurb: "Safe build and strike procedures.", duration: "3 Days", level: "Operative", image: u("1531834685032-c34bf0d84c77", 800), art: "timber" },
  { title: "Risk Assessment Awareness", blurb: "Five-step risk assessment.", duration: "Half Day", level: "Awareness", image: u("1503387762-592deb58ef4e", 800), art: "blueprint" },
  { title: "Rigging & Slinging Safely", blurb: "Sling selection and load security.", duration: "1 Day", level: "Operative", image: u("1578575437130-527eed3abbec", 800), art: "crane-slab" },
  { title: "Heat Stress Awareness", blurb: "Prevention and first response.", duration: "Half Day", level: "Awareness", image: u("1541888946425-d81bb19240f5", 800), art: "hardhat" },
  { title: "General Health & Safety Awareness", blurb: "Workplace H&S fundamentals.", duration: "Half Day", level: "Awareness", image: u("1589939705384-5185137a7f0f", 800), art: "hardhat" },
  { title: "Electrical Safety", blurb: "LOTO, arc flash and safe isolation.", duration: "1 Day", level: "Technician", image: u("1621905251189-08b45d6a269e", 800), art: "welder" },
  { title: "Dangerous Goods Handling", blurb: "Classification, storage and transport.", duration: "1 Day", level: "Operative", image: u("1494412574643-ff11b0a5c1c3", 800), art: "truck" },
  { title: "Chemical Handling Safety Awareness", blurb: "SDS, PPE and spill response.", duration: "Half Day", level: "Awareness", image: u("1581093588401-fbb62a02f120", 800), art: "hardhat" },
  { title: "Flagman / Banksman", blurb: "Vehicle marshalling and signals.", duration: "Half Day", level: "Operative", image: u("1503708928676-1cb796a0891e", 800), art: "truck" },
];

// C - Corporate & management development (DEMO additions beyond "Time Management Fundamentals")
export const corporateCourses: Course[] = [
  {
    title: "Time Management Fundamentals",
    blurb: "Time management vs. self management: a one-day program for professionals who want to maximise efficiency and productivity.",
    duration: "1 Day",
    level: "All levels",
    image: u("1522071820081-009f0129c71c", 900),
    tag: "KHDA approved",
  },
  {
    title: "Leadership & People Management",
    blurb: "Situational leadership, delegation, feedback and coaching skills for first-time and mid-level managers.",
    duration: "2 Days",
    level: "Managers",
    image: u("1552664730-d307ca884978", 900),
  },
  {
    title: "Effective Communication at Work",
    blurb: "Clear written and verbal communication, active listening and presenting with confidence.",
    duration: "1 Day",
    level: "All levels",
    image: u("1622675363311-3e1904dc1885", 900),
  },
  {
    title: "Sales Excellence",
    blurb: "Consultative selling, objection handling and pipeline discipline for B2B teams.",
    duration: "2 Days",
    level: "Sales teams",
    image: u("1600880292203-757bb62b4baf", 900),
  },
];

// DEMO pricing - indicative only.
export const pricing = [
  {
    name: "Individual",
    price: "AED 650",
    unit: "per seat",
    desc: "Open-enrolment courses at our Al Rigga training centre.",
    features: ["Certificate on completion", "Course materials included", "Weekday & weekend batches", "Lunch & refreshments"],
    cta: "Book a seat",
    featured: false,
  },
  {
    name: "Corporate Batch",
    price: "AED 4,900",
    unit: "per group of 10",
    desc: "On-site or in-centre training for your team, scheduled around operations.",
    features: ["Everything in Individual", "Delivery at your site", "Customised case studies", "Training needs analysis", "Attendance & competency report"],
    cta: "Request proposal",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    unit: "annual program",
    desc: "A yearly training calendar with dedicated account management.",
    features: ["Everything in Corporate", "Annual training calendar", "Dedicated account manager", "Compliance tracking dashboard", "Priority scheduling"],
    cta: "Talk to us",
    featured: false,
  },
];

// DEMO - only KHDA is confirmed on the live site.
export const accreditations = [
  { name: "KHDA", sub: "Approved Training Provider" },
  { name: "Dubai Municipality", sub: "Safety Training Approved" },
  { name: "OSHA", sub: "Aligned Curriculum" },
  { name: "IOSH", sub: "Approved Centre" },
  { name: "NEBOSH", sub: "Accredited Partner" },
  { name: "ISO 45001", sub: "Aligned Programs" },
];

// DEMO testimonials
export const testimonials = [
  {
    quote:
      "ZENTRIS delivered confined-space and work-at-height training for 140 of our site staff in under three weeks. The trainers were practical, bilingual and genuinely engaged with our crews.",
    name: "Ahmed Al Mansoori",
    role: "HSE Manager, Construction Group",
    featured: true,
  },
  {
    quote: "The KHDA-approved management program gave our supervisors tools they used the very next day.",
    name: "Priya Nair",
    role: "L&D Lead, Logistics Company",
    featured: false,
  },
  {
    quote: "Clear scheduling, proper documentation and zero fuss with certificates. Exactly what an audit-ready operation needs.",
    name: "James Whitfield",
    role: "Operations Director, Marine Services",
    featured: false,
  },
  {
    quote: "Our forklift incident rate dropped to zero the quarter after training.",
    name: "Mohammed Rashid",
    role: "Warehouse Manager, Retail Group",
    featured: false,
  },
];

// DEMO projects
export const projects = [
  {
    title: "Site-wide rescue competency program",
    client: "Mixed-use development, Business Bay",
    summary: "Trained 320 workers across confined space, work-at-height and emergency response over a six-week rolling schedule.",
    image: u("1531834685032-c34bf0d84c77"),
    tags: ["Safety", "Rescue"],
  },
  {
    title: "Leadership academy for frontline supervisors",
    client: "Regional logistics group",
    summary: "A four-module KHDA-approved pathway for 60 supervisors covering leadership, communication and time management.",
    image: u("1552664730-d307ca884978"),
    tags: ["Corporate", "Leadership"],
  },
  {
    title: "Warehouse equipment certification",
    client: "FMCG distribution hub, Jebel Ali",
    summary: "Forklift, MEWP and powered pallet truck certification for 95 operators with on-site practical assessments.",
    image: u("1586528116311-ad8dd3c8310d"),
    tags: ["Certification", "Equipment"],
  },
];

// FAQs
export const faqs = [
  {
    question: "Are your training certificates internationally recognised?",
    answer:
      "Yes. Our certificates are issued in line with international standards such as OSHA, IOSH and NEBOSH guidelines. They are accepted across the GCC, and our management programs carry KHDA approval from the Government of Dubai.",
  },
  {
    question: "Do you offer group or corporate discounts?",
    answer:
      "Absolutely. Our Corporate Batch and Enterprise plans are designed for teams. Groups of 10 or more receive preferential per-head pricing, and annual enterprise contracts include additional benefits like a dedicated account manager and compliance tracking.",
  },
  {
    question: "Can training be delivered on-site at our facility?",
    answer:
      "Yes. We regularly deliver on-site training across the UAE. Our trainers bring all required equipment, materials and documentation so your teams can learn in their actual working environment with minimal disruption to operations.",
  },
  {
    question: "What languages are courses delivered in?",
    answer:
      "Most courses are delivered in English with bilingual (English/Arabic) trainers available on request. For large workforce groups we also arrange Hindi and Urdu-speaking facilitators to ensure full comprehension.",
  },
  {
    question: "Can you customise a course to our industry or job roles?",
    answer:
      "Yes. Every Corporate Batch and Enterprise engagement begins with a training needs analysis. We tailor case studies, scenarios and assessments to your specific industry, equipment and risk profile.",
  },
  {
    question: "Are your programs KHDA approved?",
    answer:
      "Our management and corporate development programs are approved by the Knowledge and Human Development Authority (KHDA), the Government of Dubai's education regulator. Safety courses follow international accreditation standards.",
  },
  {
    question: "What is your cancellation and rescheduling policy?",
    answer:
      "Individual bookings can be rescheduled free of charge up to 5 working days before the course date. Cancellations within 5 days are subject to a 25% administrative fee. Corporate bookings follow the terms agreed in the service proposal.",
  },
  {
    question: "How can I verify a certificate issued by ZENTRIS?",
    answer:
      "Every certificate carries a unique verification code. Employers and auditors can verify authenticity by contacting us via email at info@zentristraining.com or by calling our office with the certificate number.",
  },
  {
    question: "How long are your certificates valid?",
    answer:
      "Validity depends on the program. Most safety certifications are valid for 2-3 years, after which a refresher course is recommended. Management and soft-skill certificates do not expire.",
  },
  {
    question: "Do you provide post-training support?",
    answer:
      "Yes. All participants receive digital course materials and reference guides. Enterprise clients benefit from ongoing support including refresher scheduling, competency tracking and access to our training advisory team.",
  },
];

// DEMO client wordmarks
export const clients = [
  "Al Futtaim", "Emaar", "DP World", "ADNOC", "Emirates", "Lulu Group", "Majid Al Futtaim", "Etisalat", "Dubai Holding", "ENOC", "Aldar", "Damac",
];
