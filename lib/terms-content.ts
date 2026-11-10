// lib/terms-content.ts
// All Terms & Conditions copy lives here so legal text can be edited
// without touching any layout code.

export type KV = { label: string; value: string; href?: string };

export type Block =
  | { t: "p"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] }
  | { t: "kv"; items: KV[] };

export type TermsSection = {
  id: string;
  number: number;
  title: string;
  blocks: Block[];
};

export const TERMS_META = {
  title: "Terms & Conditions",
  organisation: "Anutattva Foundation",
  website: "https://anutattvafoundation.in",
  effectiveDate: "10 November 2026",
  lastUpdated: "10 November 2026",
};

const ADDRESS =
  "OLD HNO 57/17 NEW 722/17, NAI BASTI, Gurgaon Sector 17, Sector-17, Gurgaon – 122001, Haryana, India.";

export const TERMS_SECTIONS: TermsSection[] = [
  {
    id: "introduction",
    number: 1,
    title: "Introduction",
    blocks: [
      { t: "p", text: "Welcome to the official website of Anutattva Foundation." },
      {
        t: "p",
        text: "Anutattva Foundation (“Foundation”, “we”, “us” or “our”) is a Section 8 company incorporated under the Companies Act, 2013, engaged in educational initiatives, Information Technology training, skill development, professional education, internships, career development and related educational activities.",
      },
      {
        t: "p",
        text: "These Terms and Conditions govern access to and use of our website, online platforms, educational programmes, training services and other services provided by the Foundation.",
      },
      {
        t: "p",
        text: "By accessing this website, submitting an enquiry, registering for a programme or enrolling in any of our services, you acknowledge that you have read and agreed to these Terms and Conditions.",
      },
      {
        t: "p",
        text: "If you do not agree with these Terms, please discontinue using our website and services.",
      },
    ],
  },
  {
    id: "legal-identity",
    number: 2,
    title: "Legal Identity and Corporate Information",
    blocks: [
      { t: "p", text: "The website and services are operated by:" },
      {
        t: "kv",
        items: [
          { label: "Legal Name", value: "ANUTATTVA FOUNDATION" },
          { label: "Corporate Identity Number (CIN)", value: "U88900HR2025NPL134938" },
          { label: "Date of Incorporation", value: "08 August 2025" },
          { label: "Legal Constitution", value: "Section 8 Company under the Companies Act, 2013." },
          { label: "Address as recorded in the Certificate of Incorporation", value: ADDRESS },
          { label: "Official Website", value: "https://anutattvafoundation.in", href: "https://anutattvafoundation.in" },
          { label: "Official Email", value: "info@anutattvafoundation.in", href: "mailto:info@anutattvafoundation.in" },
          { label: "Contact Number", value: "+91-9183330569", href: "tel:+919183330569" },
        ],
      },
      {
        t: "p",
        text: "The corporate information above is based on the Certificate of Incorporation issued by the Ministry of Corporate Affairs, Government of India. The current registered office address shall be verified against the latest MCA records.",
      },
    ],
  },
  {
    id: "services",
    number: 3,
    title: "Nature and Scope of Services",
    blocks: [
      {
        t: "p",
        text: "Anutattva Foundation undertakes and facilitates educational, professional and skill development activities, including:",
      },
      {
        t: "ol",
        items: [
          "Information Technology Training and Education.",
          "Data Analytics and Data Science.",
          "Data Engineering and Big Data Technologies.",
          "Full Stack Development and Software Engineering.",
          "Artificial Intelligence and Machine Learning.",
          "Cloud Computing and DevOps.",
          "Professional and technical skill development.",
          "Internship and practical training programmes.",
          "Placement assistance and career guidance.",
          "Corporate and institutional training.",
          "Online, offline and hybrid educational programmes.",
          "Workshops, seminars, webinars and technology awareness programmes.",
          "Industry-oriented learning and practical projects.",
          "Other educational and professional development initiatives.",
        ],
      },
      {
        t: "p",
        text: "The Foundation may introduce, modify or discontinue programmes in accordance with applicable laws and existing contractual commitments.",
      },
    ],
  },
  {
    id: "website-access",
    number: 4,
    title: "Website Access and User Eligibility",
    blocks: [
      {
        t: "p",
        text: "The website may be accessed by students, parents, educational institutions, corporate organisations, professionals and other interested individuals.",
      },
      { t: "p", text: "Users must:" },
      {
        t: "ul",
        items: [
          "Provide accurate information.",
          "Use the website for lawful purposes.",
          "Avoid fraudulent or misleading activities.",
          "Comply with applicable Indian laws.",
          "Respect the intellectual property and rights of others.",
        ],
      },
      {
        t: "p",
        text: "Individuals below 18 years of age must obtain parental or lawful guardian consent wherever required under applicable law.",
      },
    ],
  },
  {
    id: "registration",
    number: 5,
    title: "Registration and Admission",
    blocks: [
      {
        t: "p",
        text: "Applicants registering for any educational programme must provide accurate personal, contact and educational information.",
      },
      { t: "p", text: "The Foundation may request supporting documents for admission verification." },
      { t: "p", text: "Admission shall be subject to:" },
      {
        t: "ul",
        items: [
          "Programme eligibility requirements.",
          "Availability of seats.",
          "Verification of submitted information.",
          "Completion of admission formalities.",
          "Payment of applicable fees.",
        ],
      },
      { t: "p", text: "Submission of an enquiry or application does not automatically guarantee admission." },
      {
        t: "p",
        text: "The Foundation reserves the right to reject or cancel an application involving material misrepresentation, fraudulent documents or violation of admission conditions, subject to applicable law.",
      },
    ],
  },
  {
    id: "fees-payment",
    number: 6,
    title: "Course Fees and Payment Terms",
    blocks: [
      {
        t: "p",
        text: "Course fees shall be communicated through official admission documents, authorised representatives, fee schedules or the website.",
      },
      { t: "p", text: "The following conditions apply:" },
      {
        t: "ol",
        items: [
          "Students must pay fees through authorised payment channels.",
          "Applicable GST and other statutory taxes shall be charged according to prevailing laws.",
          "Students must retain payment receipts and transaction references.",
          "Instalment facilities shall be governed by the agreed payment schedule.",
          "Late payment may result in temporary restriction of services after reasonable notice, subject to applicable law and contractual obligations.",
          "Any applicable additional charges shall be communicated before payment.",
          "No unauthorised individual shall collect fees into a personal account.",
          "The Foundation shall provide appropriate payment acknowledgement or receipts.",
        ],
      },
      {
        t: "p",
        text: "The fee and payment conditions applicable to an enrolled student shall be recorded in the relevant admission documents or written agreement.",
      },
    ],
  },
  {
    id: "refund-cancellation",
    number: 7,
    title: "Refund and Cancellation Policy",
    blocks: [
      {
        t: "p",
        text: "Refunds and cancellations shall be governed by the applicable programme-specific Refund and Cancellation Policy and the admission agreement disclosed before enrolment.",
      },
      { t: "p", text: "The following principles shall apply:" },
      {
        t: "ul",
        items: [
          "Students may submit refund requests through official communication channels.",
          "Refund requests shall be reviewed based on the course commencement date, services delivered, applicable admission terms and the reason for cancellation.",
          "Any applicable deductions must be disclosed in advance and must be lawful and reasonable.",
          "Approved refunds shall be processed through the original payment method or another mutually accepted lawful method.",
          "Refund decisions shall not override statutory consumer rights.",
          "The Foundation shall not deny legally available remedies in cases involving deficiency in service, misleading representations or non-delivery of promised services.",
          "Any specific written placement guarantee or fee refund commitment shall be governed by the relevant programme agreement, subject to applicable law.",
        ],
      },
      { t: "p", text: "The detailed Refund and Cancellation Policy shall be published separately on the website." },
    ],
  },
  {
    id: "training-delivery",
    number: 8,
    title: "Training and Course Delivery",
    blocks: [
      { t: "p", text: "Educational programmes may be delivered through:" },
      {
        t: "ul",
        items: [
          "Live online classes.",
          "Offline classroom sessions.",
          "Hybrid learning models.",
          "Practical laboratory sessions.",
          "Assignments and projects.",
          "Online learning platforms.",
          "Recorded learning materials, wherever applicable.",
          "Workshops and industry interactions.",
        ],
      },
      {
        t: "p",
        text: "The Foundation may make reasonable changes to class schedules, faculty allocation, teaching methodologies or delivery platforms for academic and operational reasons.",
      },
      { t: "p", text: "Material changes affecting the programme shall be communicated to enrolled students." },
      {
        t: "p",
        text: "Students participating in online programmes are responsible for maintaining suitable internet connectivity, devices and necessary technical requirements.",
      },
    ],
  },
  {
    id: "attendance",
    number: 9,
    title: "Attendance and Student Responsibilities",
    blocks: [
      { t: "p", text: "Students are expected to:" },
      {
        t: "ol",
        items: [
          "Attend scheduled classes regularly.",
          "Complete assignments and practical exercises.",
          "Participate in assessments and projects.",
          "Maintain discipline during training sessions.",
          "Respect trainers, faculty members, employees and fellow students.",
          "Avoid plagiarism, cheating and academic misconduct.",
          "Follow academic and operational guidelines.",
          "Maintain confidentiality of restricted learning resources.",
        ],
      },
      { t: "p", text: "Programme-specific attendance and assessment requirements shall be communicated separately." },
      {
        t: "p",
        text: "Failure to satisfy prescribed academic requirements may affect eligibility for completion certificates, internship opportunities or placement assistance, subject to the applicable programme agreement.",
      },
    ],
  },
  {
    id: "certificates",
    number: 10,
    title: "Certificates and Credentials",
    blocks: [
      {
        t: "p",
        text: "Certificates may be issued upon successful completion of the applicable academic, attendance and assessment requirements.",
      },
      { t: "p", text: "Depending on the programme, certificates may include:" },
      {
        t: "ul",
        items: [
          "Course Completion Certificates.",
          "Training Certificates.",
          "Internship Certificates.",
          "Project Completion Certificates.",
          "Third-party certification credentials, where separately applicable.",
        ],
      },
      {
        t: "p",
        text: "The Foundation shall communicate the issuing authority, eligibility requirements and applicable examination conditions.",
      },
      {
        t: "p",
        text: "Third-party certifications shall remain subject to the respective issuing organisation’s requirements.",
      },
      {
        t: "p",
        text: "The Foundation shall not claim government recognition, university accreditation or third-party authorisation without appropriate approval.",
      },
    ],
  },
  {
    id: "internship",
    number: 11,
    title: "Internship Policy",
    blocks: [
      {
        t: "p",
        text: "The Foundation may provide or facilitate internship opportunities directly or through authorised industry partners.",
      },
      {
        t: "p",
        text: "Internship duration, responsibilities, supervision, assessment and certification shall be governed by the relevant internship guidelines.",
      },
      { t: "p", text: "An internship certificate shall be issued only after completion of the applicable requirements." },
      {
        t: "p",
        text: "Internship participation does not automatically create an employment relationship with the Foundation.",
      },
      { t: "p", text: "Internship opportunities may be subject to availability and selection criteria." },
    ],
  },
  {
    id: "placement",
    number: 12,
    title: "Placement Assistance and Employment Disclaimer",
    blocks: [
      {
        t: "p",
        text: "The Foundation may provide career development and placement assistance through:",
      },
      {
        t: "ul",
        items: [
          "Resume preparation.",
          "Interview preparation.",
          "Career counselling.",
          "Employer connections.",
          "Job application assistance.",
          "Interview scheduling.",
          "Recruitment coordination.",
          "Employment opportunity notifications.",
        ],
      },
      {
        t: "p",
        text: "Unless expressly stated in a separate written programme agreement, the Foundation does not guarantee:",
      },
      {
        t: "ul",
        items: [
          "Selection by a particular employer.",
          "A specific salary package.",
          "A particular job designation.",
          "Employment within a specified period.",
          "Selection in every recruitment process.",
        ],
      },
      { t: "p", text: "Employment decisions remain with the respective employers." },
      {
        t: "p",
        text: "Placement opportunities depend on the student’s qualifications, skills, attendance, performance, interview results, employer requirements and prevailing recruitment conditions.",
      },
      {
        t: "p",
        text: "Where a programme includes a specific written placement guarantee, minimum salary commitment or fee refund undertaking, the relevant programme agreement shall govern, subject to applicable law.",
      },
    ],
  },
  {
    id: "partnerships",
    number: 13,
    title: "Partnerships and Third-Party Collaborations",
    blocks: [
      { t: "p", text: "The Foundation may collaborate with:" },
      {
        t: "ul",
        items: [
          "Educational institutions.",
          "Universities and colleges.",
          "Corporate organisations.",
          "Technology companies.",
          "Certification providers.",
          "Recruitment organisations.",
          "Industry experts.",
          "Training and educational partners.",
        ],
      },
      { t: "p", text: "The scope of each collaboration shall be governed by the relevant agreement." },
      {
        t: "p",
        text: "Third-party services, certifications, examination vouchers, internships and recruitment opportunities may be subject to the respective third party’s conditions.",
      },
      {
        t: "p",
        text: "The Foundation shall not represent any organisation as an authorised partner or accreditation body without appropriate permission.",
      },
    ],
  },
  {
    id: "intellectual-property",
    number: 14,
    title: "Intellectual Property Rights",
    blocks: [
      { t: "p", text: "All original content published on this website, including:" },
      {
        t: "ul",
        items: [
          "Text and educational articles.",
          "Logos, graphics and designs.",
          "Videos, photographs and presentations.",
          "Course structures and learning resources.",
          "Training materials and documentation.",
          "Website design and branding.",
          "Original software and other proprietary content.",
        ],
      },
      {
        t: "p",
        text: "shall remain the intellectual property of the Foundation or its respective licensors, as applicable.",
      },
      {
        t: "p",
        text: "Users and students shall not reproduce, distribute, modify, sell or commercially exploit such materials without prior written authorisation from the relevant rights holder.",
      },
      { t: "p", text: "Authorised educational materials may be used for personal learning purposes only." },
    ],
  },
  {
    id: "prohibited-activities",
    number: 15,
    title: "Prohibited Activities",
    blocks: [
      { t: "p", text: "Users shall not:" },
      {
        t: "ul",
        items: [
          "Use the website for unlawful or fraudulent purposes.",
          "Attempt unauthorised access to website systems.",
          "Distribute malicious software or harmful code.",
          "Copy or redistribute copyrighted learning materials without permission.",
          "Harass, threaten or abuse faculty members, employees or students.",
          "Submit forged documents or impersonate another person.",
          "Interfere with classes, examinations or online learning systems.",
          "Publish confidential information without authorisation.",
          "Upload unlawful, defamatory, obscene or infringing content.",
          "Violate applicable Indian laws.",
        ],
      },
      {
        t: "p",
        text: "The Foundation may restrict access or take appropriate action against violations, subject to applicable law.",
      },
    ],
  },
  {
    id: "availability",
    number: 16,
    title: "Website Availability and Technical Disclaimer",
    blocks: [
      { t: "p", text: "The Foundation endeavours to maintain its website in a secure and accessible manner." },
      { t: "p", text: "However, uninterrupted availability cannot be guaranteed." },
      { t: "p", text: "Temporary interruptions may occur due to:" },
      {
        t: "ul",
        items: [
          "Scheduled maintenance.",
          "Server or hosting failures.",
          "Internet connectivity issues.",
          "Cybersecurity incidents.",
          "Third-party service interruptions.",
          "Events beyond reasonable operational control.",
        ],
      },
      {
        t: "p",
        text: "The Foundation may temporarily suspend website access for maintenance, security or operational purposes.",
      },
    ],
  },
  {
    id: "third-party-links",
    number: 17,
    title: "Third-Party Links and Services",
    blocks: [
      {
        t: "p",
        text: "The website may contain links to external websites, payment gateways, learning platforms, certification providers and recruitment portals.",
      },
      { t: "p", text: "Such services are independently operated." },
      {
        t: "p",
        text: "The Foundation does not control external websites and shall not be responsible for their independent content, privacy practices or availability.",
      },
      {
        t: "p",
        text: "Users are advised to review third-party terms and privacy policies before using such services.",
      },
    ],
  },
  {
    id: "privacy",
    number: 18,
    title: "Privacy and Personal Data Protection",
    blocks: [
      { t: "p", text: "The Foundation may collect and process personal information for:" },
      {
        t: "ul",
        items: [
          "Student registration and admission.",
          "Enquiry management.",
          "Course delivery and communication.",
          "Attendance and academic records.",
          "Payment processing and accounting.",
          "Certification and internship administration.",
          "Placement assistance.",
          "Legal and regulatory compliance.",
        ],
      },
      {
        t: "p",
        text: "Personal information may include names, phone numbers, email addresses, educational qualifications, identity details, payment references and other information necessary for the relevant services.",
      },
      {
        t: "p",
        text: "The Foundation shall process personal data in accordance with applicable Indian data protection laws, including the Digital Personal Data Protection Act, 2023 and the Digital Personal Data Protection Rules, 2025, as and when their respective provisions become applicable.",
      },
      {
        t: "p",
        text: "A separate Privacy Policy and appropriate privacy notices shall explain:",
      },
      {
        t: "ul",
        items: [
          "Categories of personal data collected.",
          "Purposes of processing.",
          "Consent requirements.",
          "Data sharing and disclosures.",
          "Retention and deletion practices.",
          "Security safeguards.",
          "Available data principal rights.",
          "Methods of raising privacy-related complaints.",
        ],
      },
      {
        t: "p",
        text: "Where consent is required, it shall be obtained through an appropriate affirmative action.",
      },
      {
        t: "p",
        text: "Accessing the website shall not be treated as blanket consent for unrelated marketing activities.",
      },
    ],
  },
  {
    id: "communication",
    number: 19,
    title: "Communication and Promotional Activities",
    blocks: [
      {
        t: "p",
        text: "The Foundation may communicate with users and students regarding:",
      },
      {
        t: "ul",
        items: [
          "Admission-related updates.",
          "Course schedules.",
          "Payment confirmations.",
          "Academic announcements.",
          "Student support.",
          "Internship opportunities.",
          "Placement assistance.",
        ],
      },
      {
        t: "p",
        text: "Promotional communications shall be handled in accordance with applicable consent, privacy and telecommunications requirements.",
      },
      {
        t: "p",
        text: "Users may opt out of non-essential promotional communications through the available communication channels.",
      },
    ],
  },
  {
    id: "limitation-of-liability",
    number: 20,
    title: "Limitation of Liability",
    blocks: [
      {
        t: "p",
        text: "To the extent permitted by applicable law, the Foundation shall not be responsible for indirect or consequential losses arising from:",
      },
      {
        t: "ul",
        items: [
          "Temporary website interruptions.",
          "Third-party platform failures.",
          "Internet connectivity problems.",
          "A student’s failure to meet published programme requirements.",
          "Independent recruitment decisions by employers.",
          "Circumstances beyond reasonable operational control.",
        ],
      },
      {
        t: "p",
        text: "Nothing in these Terms shall exclude or limit liability where such exclusion or limitation is prohibited by applicable law, including statutory consumer rights, fraud, wilful misconduct or other non-excludable obligations.",
      },
    ],
  },
  {
    id: "indemnification",
    number: 21,
    title: "Indemnification",
    blocks: [
      {
        t: "p",
        text: "Users shall be responsible for losses or claims arising directly from their unlawful conduct, fraud, infringement of third-party rights or material breach of these Terms, to the extent permitted by applicable law.",
      },
      { t: "p", text: "Nothing in this clause shall require a consumer to waive statutory rights or remedies." },
    ],
  },
  {
    id: "suspension-termination",
    number: 22,
    title: "Suspension and Termination",
    blocks: [
      {
        t: "p",
        text: "The Foundation may suspend or terminate access to its website, learning platform or programmes in cases involving:",
      },
      {
        t: "ul",
        items: [
          "Material violation of these Terms.",
          "Fraudulent registration.",
          "Unauthorised use of learning resources.",
          "Serious misconduct.",
          "Non-payment of agreed fees after due notice.",
          "Legal or regulatory requirements.",
        ],
      },
      {
        t: "p",
        text: "Any termination affecting paid educational services shall be handled in accordance with the applicable admission agreement, refund policy and law.",
      },
    ],
  },
  {
    id: "force-majeure",
    number: 23,
    title: "Force Majeure",
    blocks: [
      {
        t: "p",
        text: "The Foundation shall not be responsible for delays or failure in performance caused by circumstances beyond reasonable control, including natural disasters, epidemics, government restrictions, civil disturbances, major infrastructure failures, power failures or cybersecurity incidents.",
      },
      {
        t: "p",
        text: "The Foundation shall make reasonable efforts to minimise disruption and resume affected services.",
      },
    ],
  },
  {
    id: "grievance-redressal",
    number: 24,
    title: "Grievance Redressal",
    blocks: [
      {
        t: "p",
        text: "The Foundation shall maintain an appropriate mechanism for receiving and resolving complaints relating to its website, educational services, student admissions, payments, certificates and other activities.",
      },
      { t: "p", text: "Grievance Officer Details" },
      {
        t: "kv",
        items: [
          { label: "Organisation", value: "Anutattva Foundation" },
          // TODO: replace with the actual officer's name before publishing.
          { label: "Name", value: "[Designated Grievance Officer]" },
          { label: "Designation", value: "Grievance Officer" },
          { label: "Email", value: "info@anutattvafoundation.in", href: "mailto:info@anutattvafoundation.in" },
          { label: "Contact Number", value: "+91-9183330569", href: "tel:+919183330569" },
          { label: "Address", value: ADDRESS },
        ],
      },
      {
        t: "p",
        text: "Complaints shall be acknowledged and resolved within the timelines prescribed under applicable law.",
      },
      {
        t: "p",
        text: "Where the Consumer Protection (E-Commerce) Rules, 2020 apply, the applicable grievance requirements, including acknowledgement within 48 hours and redressal within one month, shall be followed.",
      },
      {
        t: "p",
        text: "Privacy-related complaints may also be submitted through the designated data protection contact mechanism described in the Privacy Policy.",
      },
    ],
  },
  {
    id: "governing-law",
    number: 25,
    title: "Governing Law and Jurisdiction",
    blocks: [
      { t: "p", text: "These Terms and Conditions shall be governed by the laws of India." },
      {
        t: "p",
        text: "Disputes shall be subject to the jurisdiction of competent courts and statutory authorities in accordance with applicable Indian law.",
      },
      {
        t: "p",
        text: "Nothing in this clause shall restrict consumers from approaching a competent Consumer Commission or any other statutory authority having jurisdiction under applicable law.",
      },
    ],
  },
  {
    id: "amendments",
    number: 26,
    title: "Amendments to These Terms",
    blocks: [
      {
        t: "p",
        text: "The Foundation may revise these Terms from time to time to reflect changes in its services, operations or applicable laws.",
      },
      {
        t: "p",
        text: "Updated Terms shall be published on the official website with the revised effective date.",
      },
      {
        t: "p",
        text: "Material changes affecting existing students or contractual commitments shall be handled in accordance with applicable agreements and law.",
      },
    ],
  },
  {
    id: "severability",
    number: 27,
    title: "Severability",
    blocks: [
      {
        t: "p",
        text: "If any provision of these Terms is held invalid or unenforceable by a competent authority, the remaining provisions shall continue to remain effective to the extent permitted by law.",
      },
    ],
  },
  {
    id: "entire-agreement",
    number: 28,
    title: "Entire Agreement",
    blocks: [
      {
        t: "p",
        text: "These Terms, together with the Privacy Policy, Refund and Cancellation Policy, programme-specific admission documents and other applicable written agreements, constitute the contractual framework governing the relevant services.",
      },
      {
        t: "p",
        text: "Where a programme-specific written agreement contains additional or more specific conditions, those conditions shall govern the relevant programme to the extent of any inconsistency, subject to applicable law.",
      },
    ],
  },
  {
    id: "contact",
    number: 29,
    title: "Contact Information",
    blocks: [
      {
        t: "p",
        text: "For general enquiries, admissions, educational services, internship-related matters, placement assistance or complaints, please contact:",
      },
      {
        t: "kv",
        items: [
          { label: "Organisation", value: "ANUTATTVA FOUNDATION" },
          { label: "CIN", value: "U88900HR2025NPL134938" },
          { label: "Website", value: "https://anutattvafoundation.in", href: "https://anutattvafoundation.in" },
          { label: "Email", value: "info@anutattvafoundation.in", href: "mailto:info@anutattvafoundation.in" },
          { label: "Contact Number", value: "+91-9183330569", href: "tel:+919183330569" },
          { label: "Address as recorded in Certificate of Incorporation", value: ADDRESS },
        ],
      },
      {
        t: "p",
        text: "By accessing this website or enrolling in our services, users acknowledge that they have been provided an opportunity to read and understand these Terms and Conditions.",
      },
    ],
  },
];
