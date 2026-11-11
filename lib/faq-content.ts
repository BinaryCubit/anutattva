// lib/faq-content.ts
// All FAQ copy lives here. Add, edit or reorder questions freely.
//
// Answers are written from your website, Terms & Conditions and Privacy Policy.
// Where something depends on a decision only you can make (exact payment
// options, whether a batch is live or recorded), the answer points people to
// the admissions team instead of guessing. Review before publishing.

export type FaqLink = { label: string; href: string };

export type FaqItem = {
  id: string;
  category: string; // matches a FAQ_CATEGORIES id
  q: string;
  a: string; // plain text (also used for FAQ structured data)
  links?: FaqLink[];
};

export const FAQ_META = {
  organisation: "Anutattva Foundation",
  email: "info@anutattvafoundation.in",
  tagline: "Quick answers about our courses, admissions, fees, certificates and your data.",
};

export const FAQ_CATEGORIES = [
  { id: "courses", label: "Courses & learning" },
  { id: "admission", label: "Admission & fees" },
  { id: "careers", label: "Certificates, internships & placement" },
  { id: "privacy", label: "Privacy & your data" },
  { id: "general", label: "General" },
] as const;

export const FAQS: FaqItem[] = [
  // ---------------- Courses & learning ----------------
  {
    id: "courses-offered",
    category: "courses",
    q: "Which courses do you offer?",
    a: "We offer AI & Machine Learning, Data Science, Data Analytics, Full Stack Web Development, and Quantum Computing & Quantum Machine Learning.",
    links: [{ label: "View all courses", href: "/courses" }],
  },
  {
    id: "beginner-friendly",
    category: "courses",
    q: "Are the courses beginner-friendly?",
    a: "Several are. Data Analytics is designed for beginners, Data Science and Full Stack Web Development start at beginner level, while AI & Machine Learning is intermediate to advanced and Quantum Computing is advanced. If you are unsure where to start, our team can suggest a learning path.",
  },
  {
    id: "course-duration",
    category: "courses",
    q: "How long are the courses?",
    a: "Data Analytics and Full Stack Web Development run for about 6 months, Data Science for 7–8 months, Quantum Computing for 8–9 months, and AI & Machine Learning for 10–12 months.",
  },
  {
    id: "live-or-recorded",
    category: "courses",
    q: "Are the classes live or recorded?",
    a: "Programmes may be delivered through live online classes, offline classroom sessions, hybrid models and, where applicable, recorded learning materials. The format for your specific batch is confirmed during admission.",
  },
  {
    id: "technical-requirements",
    category: "courses",
    q: "What do I need to attend online classes?",
    a: "A suitable device and a stable internet connection. Students in online programmes are responsible for having the necessary technical set-up.",
  },
  {
    id: "projects",
    category: "courses",
    q: "Will I work on real projects?",
    a: "Yes. Our learning is project-based, with practical projects and case studies designed to strengthen what you learn and build your portfolio.",
  },

  // ---------------- Admission & fees ----------------
  {
    id: "how-to-enroll",
    category: "admission",
    q: "How do I enroll?",
    a: "Submit the enrollment form and our team will contact you with the next steps. You may be asked for supporting documents. Admission depends on programme eligibility, seat availability, verification of your information, completion of admission formalities and payment of fees. Submitting an enquiry does not by itself guarantee admission.",
    links: [{ label: "Go to the enrollment form", href: "/enroll" }],
  },
  {
    id: "course-fees",
    category: "admission",
    q: "What are the course fees?",
    a: "Fees are shared through official admission documents, our authorised representatives, fee schedules or the website. For example, the online Data Analytics course is listed at ₹30,000. Applicable GST and other statutory taxes are charged as per prevailing laws.",
    links: [{ label: "See online courses", href: "/online-courses" }],
  },
  {
    id: "payment-options",
    category: "admission",
    q: "What payment options are available?",
    a: "Fees must be paid through authorised payment channels. Where instalments are offered, they follow the payment schedule agreed in your admission documents. Please confirm the options available for your course with the admissions team before paying.",
  },
  {
    id: "pay-personal-account",
    category: "admission",
    q: "Can I pay a trainer or staff member directly?",
    a: "No. No unauthorised individual may collect fees into a personal account. Always pay through the Foundation’s authorised channels, and keep your payment receipt and transaction reference.",
  },
  {
    id: "receipt",
    category: "admission",
    q: "Will I get a receipt for my payment?",
    a: "Yes. The Foundation provides appropriate payment acknowledgement or receipts. Please keep them for your records.",
  },
  {
    id: "refunds",
    category: "admission",
    q: "What is the refund and cancellation policy?",
    a: "Refunds and cancellations follow the programme-specific Refund and Cancellation Policy and the admission agreement you receive before enrolling. Requests are reviewed based on factors such as the course start date and services delivered, and any deductions must be disclosed in advance. Your statutory consumer rights are not affected.",
    links: [{ label: "Read Section 7 of the Terms", href: "/terms#refund-cancellation" }],
  },
  {
    id: "under-18",
    category: "admission",
    q: "Can I enroll if I am under 18?",
    a: "Individuals under 18 need the consent of a parent or lawful guardian where required by law. Our team will contact the parent or guardian to complete the admission.",
  },

  // ---------------- Certificates, internships & placement ----------------
  {
    id: "certificate",
    category: "careers",
    q: "Will I get a certificate after completing the course?",
    a: "Certificates are issued once you meet the applicable academic, attendance and assessment requirements. Depending on the programme, these may include course completion, training, internship or project completion certificates. The issuing authority and eligibility conditions are communicated in advance.",
  },
  {
    id: "internships",
    category: "careers",
    q: "Do you provide internships?",
    a: "We may provide or facilitate internship opportunities directly or through industry partners, subject to availability and selection criteria. An internship certificate is issued after you complete the requirements. An internship does not automatically create an employment relationship with the Foundation.",
  },
  {
    id: "placement-guarantee",
    category: "careers",
    q: "Do you guarantee a job after the course?",
    a: "No. We offer career support such as resume and interview preparation, career counselling, employer connections and placement assistance, but hiring decisions rest with employers. A guarantee applies only if a separate written programme agreement expressly provides one.",
  },
  {
    id: "work-with-us",
    category: "careers",
    q: "Are you hiring?",
    a: "Open roles and internships are listed on our careers page.",
    links: [{ label: "View careers", href: "/careers" }],
  },

  // ---------------- Privacy & your data ----------------
  {
    id: "data-collected",
    category: "privacy",
    q: "What personal information do you collect?",
    a: "Only what is needed for the purpose you have been told about, such as your name, contact details, educational background, course preferences and payment references. We do not intend to collect full card numbers, CVV, banking passwords or UPI PINs through our website forms.",
    links: [{ label: "Read the Privacy Policy", href: "/privacy" }],
  },
  {
    id: "data-retention",
    category: "privacy",
    q: "How long do you keep my details?",
    a: "Website enquiry data is ordinarily deleted within 90 days of your last interaction. For enrolled students, personal data is kept while the course is active and reviewed for deletion within 90 days after completion, subject to records we must keep by law, such as accounting and tax records.",
    links: [{ label: "See data retention in the Privacy Policy", href: "/privacy#retention-deletion" }],
  },
  {
    id: "data-requests",
    category: "privacy",
    q: "How can I correct or delete my data, or withdraw consent?",
    a: "Email us with your name, your registered email or mobile number and what you would like us to do. We may verify your identity first and will respond within the applicable legal timelines.",
    links: [{ label: "How to make a request", href: "/privacy#how-to-request" }],
  },

  // ---------------- General ----------------
  {
    id: "contact",
    category: "general",
    q: "How can I contact you?",
    a: "Write to info@anutattvafoundation.in or use the contact page and our team will get back to you.",
    links: [{ label: "Contact us", href: "/contact-us" }],
  },
  {
    id: "partner",
    category: "general",
    q: "Can my college or organisation partner with you?",
    a: "We collaborate with educational institutions, corporate organisations and industry partners. The scope of each collaboration is set out in a separate agreement. Get in touch to discuss it.",
    links: [{ label: "Become a partner", href: "/become-a-partner" }],
  },
];
