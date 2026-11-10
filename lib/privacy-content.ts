// lib/privacy-content.ts
// Privacy Policy copy and its types. Self-contained: no dependency on the Terms files.

export type KV = { label: string; value: string; href?: string };

export type Block =
  | { t: "p"; text: string }
  | { t: "h3"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] }
  | { t: "kv"; items: KV[] };

export type PrivacySectionData = {
  id: string;
  number: number;
  title: string;
  blocks: Block[];
};

export const PRIVACY_META = {
  title: "Privacy Policy",
  organisation: "Anutattva Foundation",
  website: "https://anutattvafoundation.in",
  effectiveDate: "10 November 2026",
  lastUpdated: "10 November 2026",
};

const ADDRESS =
  "OLD HNO 57/17 NEW 722/17, NAI BASTI, Gurgaon Sector 17, Sector-17, Gurgaon – 122001, Haryana, India.";

export const PRIVACY_SECTIONS: PrivacySectionData[] = [
  {
    id: "introduction",
    number: 1,
    title: "Introduction",
    blocks: [
      {
        t: "p",
        text: "Anutattva Foundation (“Foundation”, “we”, “us” or “our”) is committed to protecting the privacy, confidentiality and personal information of students, website visitors, applicants, parents, institutional representatives and other individuals interacting with our website and services.",
      },
      {
        t: "p",
        text: "This Privacy Policy explains how the Foundation collects, uses, processes, stores, protects, retains and deletes personal information.",
      },
      {
        t: "p",
        text: "The Foundation follows a privacy-first approach based on transparency, consent, data minimisation, purpose limitation, confidentiality and responsible data retention.",
      },
      { t: "p", text: "This Policy is prepared with reference to applicable Indian laws, including:" },
      {
        t: "ul",
        items: [
          "Digital Personal Data Protection Act, 2023.",
          "Digital Personal Data Protection Rules, 2025.",
          "Information Technology Act, 2000.",
          "Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, to the extent applicable.",
          "Consumer Protection Act, 2019, where relevant.",
          "Other applicable Indian laws and regulations.",
        ],
      },
      {
        t: "p",
        text: "The Foundation shall comply with the respective provisions as and when they become applicable.",
      },
    ],
  },
  {
    id: "organisation-details",
    number: 2,
    title: "Organisation Details",
    blocks: [
      {
        t: "kv",
        items: [
          { label: "Legal Name", value: "ANUTATTVA FOUNDATION" },
          { label: "CIN", value: "U88900HR2025NPL134938" },
          { label: "Date of Incorporation", value: "08 August 2025" },
          { label: "Website", value: "https://anutattvafoundation.in", href: "https://anutattvafoundation.in" },
          { label: "Official Email", value: "info@anutattvafoundation.in", href: "mailto:info@anutattvafoundation.in" },
          { label: "Contact Number", value: "+91-9183330569", href: "tel:+919183330569" },
          { label: "Address as recorded in the Certificate of Incorporation", value: ADDRESS },
        ],
      },
      {
        t: "p",
        text: "The Foundation acts as the Data Fiduciary for personal data for which it determines the purpose and means of processing, subject to applicable law.",
      },
    ],
  },
  {
    id: "privacy-principle",
    number: 3,
    title: "Our Privacy Principle – No Consent, No Unnecessary Data Collection",
    blocks: [
      { t: "p", text: "The Foundation follows a strict privacy-first approach." },
      { t: "p", text: "Our commitment includes:" },
      {
        t: "ol",
        items: [
          "Personal information submitted through website enquiry, registration and admission forms shall be collected only after providing an appropriate privacy notice and obtaining consent wherever required.",
          "Consent shall be obtained through a clear affirmative action.",
          "Pre-selected consent checkboxes shall not be used.",
          "Consent shall not be assumed merely because an individual visits our website.",
          "Marketing consent shall remain separate from essential educational service consent.",
          "Only information necessary for the specified purpose shall be requested.",
          "Personal information shall not be collected for unrelated or undisclosed purposes.",
          "Refusal of optional promotional consent shall not prevent access to unrelated educational services.",
        ],
      },
      {
        t: "p",
        text: "Where applicable law specifically permits processing without consent, the Foundation may rely on that lawful basis only for the relevant permitted purpose.",
      },
      {
        t: "p",
        text: "Essential technical information processed automatically for website security, operation or legal compliance shall be limited to what is necessary and handled according to applicable law.",
      },
    ],
  },
  {
    id: "information-collected",
    number: 4,
    title: "Personal Information That May Be Collected",
    blocks: [
      {
        t: "p",
        text: "Depending on the services requested, the Foundation may collect the following categories of personal information.",
      },
      { t: "h3", text: "A. Basic Personal Information" },
      {
        t: "ul",
        items: ["Full name.", "Mobile number.", "Email address.", "Age or date of birth, where necessary."],
      },
      { t: "h3", text: "B. Educational Information" },
      {
        t: "ul",
        items: [
          "Educational qualifications.",
          "Academic background.",
          "College or institution details.",
          "Course preferences.",
          "Skills and learning interests.",
        ],
      },
      { t: "h3", text: "C. Admission and Academic Information" },
      {
        t: "ul",
        items: [
          "Registration details.",
          "Admission application information.",
          "Attendance records.",
          "Academic progress.",
          "Assessment and project information.",
          "Programme completion status.",
        ],
      },
      { t: "h3", text: "D. Payment Information" },
      {
        t: "ul",
        items: [
          "Payment transaction reference.",
          "Payment status.",
          "Fee receipt information.",
          "Necessary accounting information.",
        ],
      },
      {
        t: "p",
        text: "The Foundation does not intend to collect complete payment card numbers, CVV details, banking passwords or UPI PINs through its website forms.",
      },
      { t: "h3", text: "E. Internship and Career Information" },
      {
        t: "ul",
        items: [
          "Resume information, where voluntarily submitted.",
          "Skills and project details.",
          "Internship application information.",
          "Job preferences.",
          "Interview-related information.",
        ],
      },
      { t: "h3", text: "F. Technical Information" },
      {
        t: "p",
        text: "Limited technical information, such as website access logs, device information and security-related records, may be processed where necessary for website operation, security and compliance.",
      },
      {
        t: "p",
        text: "Non-essential tracking technologies shall not be activated without the required consent.",
      },
    ],
  },
  {
    id: "purpose-of-processing",
    number: 5,
    title: "Purpose of Data Processing",
    blocks: [
      {
        t: "p",
        text: "Personal information shall be processed only for clearly disclosed and legitimate purposes.",
      },
      { t: "p", text: "These may include:" },
      {
        t: "ol",
        items: [
          "Responding to enquiries.",
          "Processing student registration and admission.",
          "Delivering educational and training services.",
          "Managing academic activities and attendance.",
          "Processing payments and issuing receipts.",
          "Managing internships and practical training.",
          "Providing placement assistance where requested.",
          "Issuing eligible certificates.",
          "Communicating essential academic updates.",
          "Maintaining legally required accounting records.",
          "Protecting website and service security.",
          "Resolving complaints and providing student support.",
        ],
      },
      {
        t: "p",
        text: "The Foundation shall not use personal information for unrelated purposes without appropriate consent or another lawful basis.",
      },
    ],
  },
  {
    id: "consent-transparency",
    number: 6,
    title: "Consent and Transparency",
    blocks: [
      {
        t: "p",
        text: "Where consent is required, the Foundation shall obtain it before processing personal information.",
      },
      { t: "p", text: "Consent mechanisms may include:" },
      {
        t: "ul",
        items: [
          "An unchecked consent checkbox.",
          "An affirmative digital registration confirmation.",
          "A clearly presented digital consent form.",
          "Another legally valid mechanism.",
        ],
      },
      {
        t: "p",
        text: "Before consent, individuals shall be provided with an appropriate notice describing:",
      },
      {
        t: "ul",
        items: [
          "The personal information being requested.",
          "The specific purposes of processing.",
          "The educational or other service involved.",
          "Relevant data-sharing arrangements.",
          "Applicable retention periods.",
          "How consent can be withdrawn.",
          "Available grievance and privacy contact details.",
        ],
      },
      { t: "p", text: "Consent for marketing shall be separate and optional." },
      {
        t: "p",
        text: "Withdrawal of consent shall be as easy as providing consent, subject to applicable law.",
      },
      {
        t: "p",
        text: "The Foundation shall maintain appropriate consent records and related processing documentation.",
      },
    ],
  },
  {
    id: "retention-deletion",
    number: 7,
    title: "Data Retention and 90-Day Deletion Policy",
    blocks: [
      { t: "p", text: "The Foundation follows a 90-day data review and deletion cycle." },
      {
        t: "p",
        text: "Our objective is to avoid unnecessary long-term storage of personal information.",
      },
      {
        t: "p",
        text: "However, the Foundation recognises that active students may need their information to remain available for the delivery of educational services.",
      },
      { t: "p", text: "Accordingly, the following retention schedule shall apply." },

      { t: "h3", text: "A. Website Enquiries and Unenrolled Applicants" },
      {
        t: "p",
        text: "Personal information collected through website enquiry forms, course enquiries and unsuccessful or abandoned admission applications shall ordinarily be deleted within 90 days from the last relevant interaction, unless a shorter period is requested or a lawful retention requirement applies.",
      },
      {
        t: "p",
        text: "Individuals who separately consent to future communication may be contacted during the period covered by that consent, subject to the disclosed purpose and applicable law.",
      },

      { t: "h3", text: "B. Enrolled Students – During Active Courses" },
      {
        t: "p",
        text: "Personal information necessary for delivering an active educational programme may be retained during the student’s course period.",
      },
      { t: "p", text: "This may include:" },
      {
        t: "ul",
        items: [
          "Student name and registration reference.",
          "Contact details required for academic communication.",
          "Attendance and academic progress.",
          "Assessment and project records.",
          "Course completion status.",
          "Necessary internship and placement assistance records.",
        ],
      },
      {
        t: "p",
        text: "This information shall be accessible only to authorised personnel and shall not be used for unrelated purposes.",
      },

      { t: "h3", text: "C. After Course Completion" },
      {
        t: "p",
        text: "Within 90 days after the completion, withdrawal or termination of the relevant programme, the Foundation shall initiate deletion of personal information that is no longer necessary.",
      },
      {
        t: "p",
        text: "The following information shall ordinarily be deleted from active website and student management systems:",
      },
      {
        t: "ul",
        items: [
          "Student contact details.",
          "Personal profile information.",
          "Unnecessary educational documents.",
          "Attendance details no longer required.",
          "Unnecessary academic records.",
          "Unnecessary resumes and interview information.",
          "Other personal information no longer required for the disclosed purpose.",
        ],
      },

      { t: "h3", text: "D. Certificates and Verification" },
      {
        t: "p",
        text: "Where long-term certificate verification is required, the Foundation may retain a limited certificate reference or verification record only where there is an appropriate lawful basis or separate valid consent.",
      },
      {
        t: "p",
        text: "The Foundation shall prefer minimal, non-identifying verification methods wherever practical.",
      },

      { t: "h3", text: "E. Financial and Statutory Records" },
      {
        t: "p",
        text: "Notwithstanding the above deletion periods, the Foundation may retain limited information required under applicable laws, including:",
      },
      {
        t: "ul",
        items: [
          "GST and taxation records.",
          "Accounting and financial records.",
          "Payment and transaction records.",
          "Records required by competent authorities.",
          "Records required under a court order.",
          "Records necessary to establish, exercise or defend legal claims.",
        ],
      },
      {
        t: "p",
        text: "Such information shall be segregated or access-restricted wherever practical and retained only for the applicable legal period.",
      },

      { t: "h3", text: "F. Backup and Recovery Systems" },
      {
        t: "p",
        text: "The Foundation shall maintain a defined deletion and backup expiry schedule.",
      },
      {
        t: "p",
        text: "Personal data deleted from active systems shall also be removed from backup systems according to the applicable backup lifecycle.",
      },
      {
        t: "p",
        text: "Where immediate deletion from an isolated backup is technically impracticable, such information shall remain inaccessible for ordinary use and shall be deleted when the backup expires or is securely overwritten.",
      },

      { t: "h3", text: "G. No Unauthorised Duplicate Copies" },
      {
        t: "p",
        text: "The Foundation shall not intentionally maintain unauthorised duplicate copies of student personal information.",
      },
      {
        t: "p",
        text: "Personal data shall not be stored in personal devices, private email accounts, unauthorised spreadsheets, external drives or unrelated databases without a legitimate and disclosed purpose.",
      },
      {
        t: "p",
        text: "Authorised service providers shall be subject to appropriate confidentiality, security and deletion obligations.",
      },

      { t: "h3", text: "H. Deletion Requests" },
      { t: "p", text: "Individuals may request deletion of their personal information at any time." },
      {
        t: "p",
        text: "The Foundation shall delete information that is no longer necessary for its disclosed purpose, subject to applicable legal retention requirements and the rights of other individuals.",
      },
      {
        t: "p",
        text: "The Foundation shall not claim that all copies have been erased where legally required records or unavoidable backup copies remain within their permitted retention periods.",
      },
    ],
  },
  {
    id: "data-sharing",
    number: 8,
    title: "Data Sharing and Third-Party Processing",
    blocks: [
      {
        t: "p",
        text: "The Foundation does not sell or commercially trade student personal information.",
      },
      {
        t: "p",
        text: "Personal information shall not be shared with unrelated third parties for independent commercial use without appropriate consent or another lawful basis.",
      },
      { t: "p", text: "Limited information may be processed by authorised service providers for:" },
      {
        t: "ul",
        items: [
          "Website hosting and maintenance.",
          "Secure payment processing.",
          "Educational programme delivery.",
          "Student communication.",
          "Internship administration.",
          "Certification processing.",
          "Technical support.",
          "Legal and regulatory compliance.",
        ],
      },
      {
        t: "p",
        text: "Where third-party processors are engaged, the Foundation shall use appropriate contractual and organisational safeguards to ensure:",
      },
      {
        t: "ol",
        items: [
          "Processing is restricted to authorised purposes.",
          "Access is limited to authorised personnel.",
          "Appropriate security measures are maintained.",
          "Personal data is not independently used for unrelated marketing.",
          "Data is deleted or returned when its authorised purpose ends, subject to applicable legal requirements.",
        ],
      },
      {
        t: "p",
        text: "Where required, individuals shall be informed about relevant data processors and data-sharing arrangements through appropriate privacy notices.",
      },
    ],
  },
  {
    id: "marketing",
    number: 9,
    title: "Marketing and Promotional Communication",
    blocks: [
      {
        t: "p",
        text: "The Foundation shall distinguish essential academic communication from promotional communication.",
      },
      { t: "p", text: "Essential communications may include:" },
      {
        t: "ul",
        items: [
          "Admission confirmation.",
          "Class schedules.",
          "Fee acknowledgements.",
          "Academic announcements.",
          "Internship-related updates.",
          "Student support notifications.",
        ],
      },
      { t: "p", text: "Promotional communication may include:" },
      {
        t: "ul",
        items: [
          "New course announcements.",
          "Admission campaigns.",
          "Promotional offers.",
          "Marketing newsletters.",
          "Other non-essential promotional messages.",
        ],
      },
      {
        t: "p",
        text: "Promotional communications shall be sent only in accordance with applicable consent and telecommunications requirements.",
      },
      { t: "p", text: "Individuals may withdraw promotional consent at any time." },
      {
        t: "p",
        text: "Refusal or withdrawal of marketing consent shall not affect access to unrelated educational services.",
      },
    ],
  },
  {
    id: "cookies",
    number: 10,
    title: "Cookies and Tracking Technologies",
    blocks: [
      {
        t: "p",
        text: "The website may use essential technical cookies necessary for security, session management and website functionality.",
      },
      {
        t: "p",
        text: "Non-essential cookies, analytics tools, advertising pixels and behavioural tracking technologies shall not be activated without the required consent.",
      },
      {
        t: "p",
        text: "Users shall be provided with appropriate information about cookie categories and consent preferences.",
      },
      {
        t: "p",
        text: "The Foundation shall not knowingly undertake unauthorised behavioural tracking or profiling of students.",
      },
    ],
  },
  {
    id: "security",
    number: 11,
    title: "Data Security and Confidentiality",
    blocks: [
      {
        t: "p",
        text: "The Foundation shall implement reasonable technical and organisational security measures to protect personal information against:",
      },
      {
        t: "ul",
        items: [
          "Unauthorised access.",
          "Accidental disclosure.",
          "Data theft.",
          "Unauthorised modification.",
          "Data loss.",
          "Destruction or misuse.",
        ],
      },
      { t: "p", text: "Measures may include:" },
      {
        t: "ul",
        items: [
          "Restricted access permissions.",
          "Strong authentication and password controls.",
          "Secure hosting arrangements.",
          "Encryption where appropriate.",
          "Administrative access controls.",
          "Periodic security reviews.",
          "Secure data transmission.",
          "Backup and recovery safeguards.",
          "Appropriate confidentiality obligations for authorised personnel.",
        ],
      },
      {
        t: "p",
        text: "Access to student information shall be restricted to individuals who need it for authorised work.",
      },
      {
        t: "p",
        text: "The Foundation shall take reasonable measures to prevent unauthorised copying, downloading or disclosure of personal information.",
      },
    ],
  },
  {
    id: "data-breach",
    number: 12,
    title: "Personal Data Breach",
    blocks: [
      {
        t: "p",
        text: "In the event of a personal data breach, the Foundation shall take appropriate steps to:",
      },
      {
        t: "ol",
        items: [
          "Identify and investigate the incident.",
          "Contain and mitigate the breach.",
          "Assess the information affected.",
          "Implement corrective security measures.",
          "Maintain appropriate incident records.",
          "Notify affected individuals and competent authorities within applicable legal timelines and in the prescribed manner, where required.",
        ],
      },
      {
        t: "p",
        text: "The Foundation shall cooperate with competent authorities where legally required.",
      },
    ],
  },
  {
    id: "childrens-privacy",
    number: 13,
    title: "Children’s Privacy",
    blocks: [
      {
        t: "p",
        text: "The Foundation recognises the additional privacy protections applicable to children.",
      },
      {
        t: "p",
        text: "Under the Digital Personal Data Protection Act, 2023, a child is an individual who has not completed 18 years of age.",
      },
      {
        t: "p",
        text: "Where required by applicable law, the Foundation shall obtain verifiable consent from the parent or lawful guardian before processing a child’s personal data.",
      },
      { t: "p", text: "The Foundation shall:" },
      {
        t: "ul",
        items: [
          "Provide appropriate information to parents or guardians.",
          "Use suitable age and consent verification procedures.",
          "Avoid unnecessary collection of children’s personal information.",
          "Not knowingly undertake prohibited tracking or behavioural monitoring of children.",
          "Not undertake targeted advertising directed at children where prohibited by law.",
          "Implement appropriate safeguards for educational activities involving minors.",
        ],
      },
      {
        t: "p",
        text: "Any applicable statutory exemption shall be relied upon only where its legal conditions are satisfied.",
      },
    ],
  },
  {
    id: "individual-rights",
    number: 14,
    title: "Rights of Individuals",
    blocks: [
      {
        t: "p",
        text: "Subject to the commencement and applicability of relevant provisions of Indian data protection law, individuals may exercise the rights available to them.",
      },
      { t: "p", text: "These may include:" },
      { t: "h3", text: "A. Right to Access Information" },
      {
        t: "p",
        text: "Request information about personal data processed by the Foundation and relevant processing activities.",
      },
      { t: "h3", text: "B. Right to Correction and Updating" },
      {
        t: "p",
        text: "Request correction, completion or updating of inaccurate or incomplete personal information.",
      },
      { t: "h3", text: "C. Right to Erasure" },
      {
        t: "p",
        text: "Request deletion of personal information that is no longer required for the disclosed purpose, subject to lawful retention obligations.",
      },
      { t: "h3", text: "D. Right to Withdraw Consent" },
      {
        t: "p",
        text: "Withdraw previously provided consent through the available communication channels.",
      },
      { t: "h3", text: "E. Right to Grievance Redressal" },
      { t: "p", text: "Submit complaints relating to the processing of personal information." },
      { t: "h3", text: "F. Right to Nominate" },
      {
        t: "p",
        text: "Exercise the right to nominate another individual in accordance with applicable law and prescribed procedures.",
      },
      {
        t: "p",
        text: "The Foundation shall facilitate applicable rights requests within the timelines prescribed by law.",
      },
    ],
  },
  {
    id: "how-to-request",
    number: 15,
    title: "How to Request Data Deletion or Withdraw Consent",
    blocks: [
      { t: "p", text: "Individuals may submit a request through the following official channels:" },
      {
        t: "kv",
        items: [
          { label: "Email", value: "info@anutattvafoundation.in", href: "mailto:info@anutattvafoundation.in" },
          { label: "Contact Number", value: "+91-9183330569", href: "tel:+919183330569" },
          { label: "Website", value: "https://anutattvafoundation.in", href: "https://anutattvafoundation.in" },
        ],
      },
      { t: "p", text: "Requests may include:" },
      {
        t: "ul",
        items: [
          "Full name.",
          "Registered email address or mobile number.",
          "Relevant registration reference, if available.",
          "Nature of the request.",
          "Specific information requested to be corrected or deleted, where known.",
        ],
      },
      {
        t: "p",
        text: "The Foundation may undertake reasonable identity verification to prevent unauthorised disclosure or deletion.",
      },
      { t: "p", text: "The Foundation shall process requests within the applicable legal timelines." },
      {
        t: "p",
        text: "Where a legal obligation prevents complete deletion, the Foundation shall explain the relevant limitation where appropriate.",
      },
    ],
  },
  {
    id: "international-transfers",
    number: 16,
    title: "International Data Transfers",
    blocks: [
      {
        t: "p",
        text: "The Foundation shall handle personal data transfers outside India in accordance with applicable Indian laws and government restrictions.",
      },
      {
        t: "p",
        text: "Where an authorised hosting or service provider processes information outside India, appropriate contractual and security measures shall be implemented.",
      },
    ],
  },
  {
    id: "third-party-websites",
    number: 17,
    title: "Third-Party Websites",
    blocks: [
      {
        t: "p",
        text: "Our website may contain links to external websites, payment gateways, learning platforms or other services.",
      },
      {
        t: "p",
        text: "Such external platforms operate independently and have their own privacy policies.",
      },
      {
        t: "p",
        text: "Users are encouraged to review the applicable privacy policies before submitting information to third-party websites.",
      },
      {
        t: "p",
        text: "The Foundation shall not be responsible for independent privacy practices outside its control.",
      },
    ],
  },
  {
    id: "policy-updates",
    number: 18,
    title: "Privacy Policy Updates",
    blocks: [
      { t: "p", text: "The Foundation may update this Privacy Policy to reflect:" },
      {
        t: "ul",
        items: [
          "Changes in applicable laws.",
          "Changes in educational services.",
          "Changes in data processing practices.",
          "Improvements in security and privacy procedures.",
          "Regulatory directions.",
        ],
      },
      {
        t: "p",
        text: "Updated policies shall be published on the official website with the revised effective date.",
      },
      {
        t: "p",
        text: "Where a material change requires renewed consent, the Foundation shall obtain appropriate consent before continuing the relevant processing.",
      },
    ],
  },
  {
    id: "privacy-contact",
    number: 19,
    title: "Privacy and Grievance Contact",
    blocks: [
      {
        t: "p",
        text: "For privacy-related questions, consent withdrawal, access requests, correction requests, deletion requests or complaints, please contact:",
      },
      {
        t: "kv",
        items: [
          { label: "Organisation", value: "ANUTATTVA FOUNDATION" },
          { label: "CIN", value: "U88900HR2025NPL134938" },
          { label: "Website", value: "https://anutattvafoundation.in", href: "https://anutattvafoundation.in" },
          { label: "Email", value: "info@anutattvafoundation.in", href: "mailto:info@anutattvafoundation.in" },
          { label: "Contact Number", value: "+91-9183330569", href: "tel:+919183330569" },
          { label: "Address as recorded in the Certificate of Incorporation", value: ADDRESS },
          // TODO: name the actual officer before publishing.
          { label: "Privacy and Data Protection Contact", value: "Designated Privacy Contact / Grievance Officer." },
        ],
      },
      {
        t: "p",
        text: "The Foundation shall maintain an effective grievance mechanism and respond within the applicable statutory timelines.",
      },
    ],
  },
  {
    id: "governing-law",
    number: 20,
    title: "Governing Law",
    blocks: [
      {
        t: "p",
        text: "This Privacy Policy shall be governed by the laws of India, including applicable data protection, information technology and consumer protection legislation.",
      },
      {
        t: "p",
        text: "Any dispute shall be addressed through competent courts and statutory authorities in accordance with applicable Indian law.",
      },
    ],
  },
  {
    id: "privacy-commitment",
    number: 21,
    title: "Our Privacy Commitment",
    blocks: [
      {
        t: "p",
        text: "Anutattva Foundation believes that personal information belongs to the individual and must be handled responsibly.",
      },
      { t: "p", text: "We are committed to:" },
      {
        t: "ul",
        items: [
          "Collecting only necessary personal information.",
          "Obtaining consent wherever legally required.",
          // TODO: the supplied text was cut off here ("Being transparent about data pro…").
          // Paste the remaining commitments and the closing lines of the policy below.
        ],
      },
    ],
  },
];
