// lib/careers-content.ts
// All career copy lives here. To add a role, push another object to JOBS.
//
// IMPORTANT: Only the job title was provided. Everything marked DRAFT below
// (responsibilities, requirements, perks, process) is suggested wording based
// on the Foundation's website. Review and edit it before publishing.
// Optional fields (stipend, duration, deadline...) are shown only when filled in.

export type Job = {
  id: string; // used for the #anchor
  title: string;
  type: string; // e.g. "Internship"
  department: string;
  location?: string;
  workMode?: string; // e.g. "On-site", "Hybrid", "Remote"
  duration?: string;
  stipend?: string;
  openings?: string;
  deadline?: string;
  summary: string;
  about: string[];
  responsibilities: string[];
  requirements: string[];
  preferred: string[];
  gains: string[];
  applySteps: string[];
};

export const CAREERS_META = {
  title: "Careers",
  organisation: "Anutattva Foundation",
  tagline:
    "Help us bridge the gap between academic knowledge and real-world skills, while building your own career.",
  email: "info@anutattvafoundation.in",
};

export const WHY_JOIN = [
  {
    title: "A mission that matters",
    text: "Work with a team focused on industry-relevant, career-oriented education in technology and data.",
  },
  {
    title: "Learn by doing",
    text: "Take on real responsibilities and see the results of your work, not just observe from the sidelines.",
  },
  {
    title: "Exposure to emerging fields",
    text: "Be part of an organisation teaching AI & ML, Data Science, Data Analytics, Full Stack Development and Quantum Computing.",
  },
  {
    title: "Guidance from experienced people",
    text: "Learn from a leadership and trainer team with industry and research backgrounds.",
  },
];

export const JOBS: Job[] = [
  {
    id: "intern-mba-sales-marketing",
    title: "Intern – MBA Student (Sales & Marketing)",
    type: "Internship",
    department: "Sales & Marketing",
    // TODO: confirm location and work mode before publishing.
    location: "Gurgaon, Haryana",
    // workMode: "On-site",
    // TODO: fill these in (they are hidden until set):
    // duration: "3 months",
    // stipend: "₹X per month",
    // openings: "2",
    // deadline: "30 November 2026",
    summary:
      "Join our sales and marketing team and help bring industry-relevant training in AI & ML, Data Science, Data Analytics, Full Stack Development and Quantum Computing to students and working professionals.",

    // ---- DRAFT CONTENT: review and edit ----
    about: [
      "Anutattva Foundation delivers hands-on, industry-aligned training in technology, data and emerging fields. We are looking for an MBA student who enjoys talking to people, understands what motivates learners, and wants practical experience in education-sector sales and marketing.",
      "You will work closely with our admissions, marketing and leadership teams, and learn how an education organisation reaches, advises and enrols learners.",
    ],
    responsibilities: [
      "Follow up on course enquiries from students, job seekers and working professionals, and help them find the right programme.",
      "Reach out to prospective learners through calls, emails and messages, and keep the lead tracker up to date.",
      "Support counselling and admission conversations for our programmes in AI & ML, Data Science, Data Analytics, Full Stack Development and Quantum Computing.",
      "Assist in planning and running marketing activities such as social media content, campaigns, webinars and workshops.",
      "Support outreach to colleges, institutions and potential partners.",
      "Research competitors, course pricing and market trends, and share findings with the team.",
      "Prepare simple weekly reports on enquiries, follow-ups and conversions.",
    ],
    requirements: [
      "Currently pursuing an MBA or PGDM, preferably with a specialisation in Marketing, Sales or a related area.",
      "Excellent verbal and written communication skills.",
      "Self-motivated, target-oriented and comfortable speaking with new people.",
      "Basic working knowledge of Excel or Google Sheets.",
      "Genuine interest in education and technology.",
    ],
    preferred: [
      "Prior internship or project experience in sales, marketing or business development.",
      "Familiarity with social media platforms and basic content tools such as Canva.",
      "Experience with a CRM or lead-tracking tool.",
      "Ability to communicate in both English and Hindi.",
    ],
    gains: [
      "Hands-on experience in education-sector sales and marketing.",
      "Mentorship and feedback from an experienced team.",
      "Practical exposure to lead management, counselling and campaign execution.",
      "An internship certificate on successful completion, in line with our Internship Policy.",
    ],
    applySteps: [
      "Email your updated resume to the address below.",
      "Mention your name, college, MBA specialisation and contact number, plus two or three lines on why you want this role.",
      "Shortlisted candidates will be contacted for an interview.",
    ],
  },
];
