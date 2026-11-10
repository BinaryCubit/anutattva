// lib/courses-content.ts
// All course copy lives here. To add a course, push another object to COURSES.
//
// FROM YOUR SITE / YOU: title, 6-month duration, Beginner level, the tools
// (Excel, SQL, Python, Power BI, Tableau), and the fee of 30,000.
// DRAFT (review before publishing): the module breakdown, outcomes and FAQ answers.

export type Module = { title: string; topics: string[] };

export type Course = {
  id: string;
  title: string;
  tagline: string;
  summary: string;
  fee: number; // in rupees
  duration: string;
  level: string;
  mode: string;
  tools: string[];
  audience: string[];
  outcomes: string[];
  modules: Module[];
  features: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
};

export const COURSES_META = {
  organisation: "Anutattva Foundation",
  email: "info@anutattvafoundation.in",
  tagline:
    "Industry-relevant, career-oriented programmes you can take from anywhere. Learn the skills that matter in the real world.",
};

export function formatFee(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export const COURSES: Course[] = [
  {
    id: "data-analytics",
    title: "Data Analytics",
    tagline: "Turn raw data into actionable insights.",
    summary:
      "Learn data cleaning, analysis and visualization using Excel, SQL, Python, Power BI and Tableau, and build a portfolio of real projects.",
    fee: 30000,
    duration: "6 Months",
    level: "Beginner",
    // TODO: confirm delivery format (live classes, recorded, or both) and add it here.
    mode: "Online",
    tools: ["Excel", "SQL", "Python", "Power BI", "Tableau"],

    // ---- DRAFT CONTENT below: review and edit ----
    audience: [
      "Students who want a practical, job-oriented start in data.",
      "Job seekers aiming for data analyst and business analyst roles.",
      "Working professionals who want to use data in their current work or switch careers.",
    ],
    outcomes: [
      "Clean, prepare and analyse real-world datasets with confidence.",
      "Write SQL queries to extract and summarise business data.",
      "Use Python for data analysis and exploration.",
      "Build interactive dashboards in Power BI and Tableau.",
      "Present findings as clear, decision-ready insights.",
      "Complete portfolio projects you can show to employers.",
    ],
    modules: [
      {
        title: "Module 1: Foundations of Data Analytics and Excel",
        topics: [
          "The data analytics lifecycle and common analyst roles",
          "Spreadsheet fundamentals, formulas and functions",
          "Data cleaning and preparation in Excel",
          "Pivot tables, charts and basic reporting",
        ],
      },
      {
        title: "Module 2: SQL for Data Analysis",
        topics: [
          "Relational database concepts",
          "SELECT queries, filtering, sorting and aggregation",
          "Joins, subqueries and set operations",
          "Window functions and analytical queries",
        ],
      },
      {
        title: "Module 3: Python for Data Analysis",
        topics: [
          "Python basics for analysts",
          "Data handling with Pandas and NumPy",
          "Exploratory data analysis",
          "Visualisation with Python libraries",
        ],
      },
      {
        title: "Module 4: Power BI",
        topics: [
          "Connecting to and transforming data",
          "Data modelling and relationships",
          "DAX fundamentals",
          "Designing interactive dashboards",
        ],
      },
      {
        title: "Module 5: Tableau",
        topics: [
          "Connecting to data sources and preparing data",
          "Building charts and calculated fields",
          "Dashboards and storytelling with data",
          "Sharing and presenting insights",
        ],
      },
      {
        title: "Module 6: Capstone Project and Career Preparation",
        topics: [
          "End-to-end capstone project on a real-world dataset",
          "Portfolio and resume building",
          "Mock interviews and interview preparation",
          "Career guidance",
        ],
      },
    ],
    features: [
      {
        title: "Industry-endorsed curriculum",
        text: "Designed with input from experts to keep the content relevant to real work.",
      },
      {
        title: "Project-based learning",
        text: "Build real-time projects that strengthen concepts and enhance your portfolio.",
      },
      {
        title: "Experienced mentors",
        text: "Learn from trainers with hands-on experience in industry and research.",
      },
      {
        title: "Career guidance & placement support",
        text: "Personal mentorship, mock interviews and placement assistance to kickstart your career.",
      },
    ],
    faqs: [
      {
        q: "Is this course beginner-friendly?",
        a: "Yes. The Data Analytics programme is designed for beginners, and you do not need prior experience with data tools.",
      },
      {
        q: "Will I get a certificate?",
        a: "A course completion certificate is issued once you meet the applicable attendance and assessment requirements. The issuing authority and eligibility conditions are communicated before you enrol.",
      },
      {
        q: "Are there instalment options?",
        a: "Where instalments are offered, they follow the payment schedule agreed in your admission documents. Please confirm the options available with our admissions team before paying.",
      },
      {
        q: "Does the course guarantee a job?",
        a: "No. We provide career guidance, resume and interview preparation and placement assistance, but hiring decisions remain with employers. Any specific written placement commitment is governed by the relevant programme agreement.",
      },
      {
        q: "What is the refund policy?",
        a: "Refunds and cancellations follow the Refund and Cancellation Policy and the admission agreement disclosed before enrolment. See Section 7 of our Terms & Conditions for the principles.",
      },
    ],
  },
];
