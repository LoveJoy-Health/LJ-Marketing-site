import { siteConfig } from "@/lib/site";

export const PROVIDER_SIGNUP_URL = siteConfig.providerJoinUrl;
export const PROVIDER_SIGN_IN_URL = siteConfig.providerSignInUrl;
export const PROVIDER_SUPPORT_EMAIL = siteConfig.contactEmail;

/** Clinical specialties shown in the current provider signup interface. */
export const PROVIDER_SIGNUP_SPECIALTIES = [
  "Anxiety",
  "Depression",
  "Trauma",
  "PTSD",
  "ADHD",
  "Bipolar Disorder",
  "Grief",
  "Substance Use",
  "Stress Management",
  "Relationship Issues",
  "Men's Mental Health",
  "Women's Mental Health",
  "Maternal Mental Health",
  "Anger Management",
  "Life Transitions",
] as const;

/** Populations shown in the current provider signup interface. */
export const PROVIDER_SIGNUP_POPULATIONS = [
  "Children",
  "Adolescents",
  "Adults",
  "Seniors",
  "Couples",
  "Families",
  "Veterans",
  "Men",
  "Women",
] as const;

export const PROVIDER_SIGNUP_PAYMENT_METHODS = [
  "Insurance",
  "Medicare",
  "Medicaid",
  "Medicare + Medicaid (Dual Eligible)",
  "Self Pay",
] as const;

export const PROVIDER_SIGNUP_AGREEMENTS = [
  "Independent Contractor Agreement",
  "HIPAA Confidentiality Agreement",
  "Telehealth Standards & Crisis Protocol Manual",
  "Provider Platform Terms of Service",
] as const;

/** Portal navigation shown while an application is under review. */
export const PROVIDER_PORTAL_SECTIONS = [
  "Dashboard",
  "Patients",
  "Appointments",
  "Care navigation",
  "Assessments",
  "Intakes",
  "Encounters",
  "Telehealth",
  "Messages",
  "Notifications",
  "Earnings",
  "My profile",
  "Settings",
] as const;

export const BEFORE_YOU_START_ITEMS = [
  "Personal and contact information",
  "Professional credentials",
  "Provider type and professional title",
  "Degrees and years of experience",
  "NPI number, if applicable",
  "CAQH ID, if available",
  "Professional bio",
  "Specialties",
  "Populations served",
  "States where you are licensed",
  "Practice information",
  "Availability",
  "Accepted payment methods",
  "Insurance participation information, if applicable",
  "Self-pay fee, if applicable",
  "Professional license",
  "Resume or CV",
  "Malpractice insurance certificate",
  "W-9, optional",
] as const;

export type GuideField = {
  label: string;
  optional?: boolean;
};

export type GuideImage = {
  src: string;
  alt: string;
  priority?: boolean;
};

export type GuideLink = {
  href: string;
  label: string;
  external?: boolean;
};

export type GuideSubsection = {
  title: string;
  body?: string;
  items?: readonly string[];
  instructions?: readonly string[];
  notes?: readonly string[];
};

export type OnboardingGuideStep = {
  id: string;
  numberLabel: string;
  title: string;
  description: string;
  images: GuideImage[];
  fields?: GuideField[];
  needHeading?: string;
  instructions?: readonly string[];
  explanations?: { label: string; body: string }[];
  notes?: readonly string[];
  callout?: { title?: string; body: string };
  subsections?: GuideSubsection[];
  links?: GuideLink[];
};

export const ONBOARDING_GUIDE_STEPS: OnboardingGuideStep[] = [
  {
    id: "provider-step-1",
    numberLabel: "1",
    title: "Create Your Provider Account",
    description: "Start by creating your secure LoveJoy provider login.",
    images: [
      {
        src: "/images/faqs/step-1-create-account.png",
        alt: "LoveJoy Health provider signup Step 1 showing Create your account fields for name, email, and password",
        priority: true,
      },
    ],
    fields: [
      { label: "First Name" },
      { label: "Last Name" },
      { label: "Email Address" },
      { label: "Password" },
      { label: "Confirm Password" },
    ],
    needHeading: "What to complete",
    instructions: [
      "Enter your name and email address, then create and confirm your password. Your email address and password will be used to access your provider account.",
      "After selecting Continue, LoveJoy will send a verification email before you can continue the application.",
    ],
    notes: [
      "Already have a provider account? Use the Sign In option instead of creating a new account.",
    ],
    links: [
      { href: PROVIDER_SIGN_IN_URL, label: "Provider Sign In", external: true },
    ],
  },
  {
    id: "provider-step-1a",
    numberLabel: "1A",
    title: "Verify Your Email Address",
    description:
      "LoveJoy requires email verification before the rest of the application becomes available.",
    images: [
      {
        src: "/images/faqs/step-1a-verify-email.png",
        alt: "LoveJoy Health provider signup email verification screen asking you to check your inbox",
      },
    ],
    needHeading: "What to complete",
    instructions: [
      "Open the verification message sent to the email address you entered.",
      "Select the verification link in the email.",
      "Return to the LoveJoy provider application.",
      "Select “I’ve verified — continue.”",
      "If the email did not arrive, select “Resend verification email.”",
    ],
    notes: [
      "Email verification is part of Step 1. It is not a separate numbered application step.",
    ],
  },
  {
    id: "provider-step-2",
    numberLabel: "2",
    title: "Personal Information",
    description:
      "Provide information that helps LoveJoy and patients identify and communicate with you.",
    images: [
      {
        src: "/images/faqs/step-2-personal.png",
        alt: "LoveJoy Health provider signup Step 2 showing personal information fields for phone, date of birth, gender, photo, and languages",
      },
    ],
    fields: [
      { label: "Phone Number" },
      { label: "Date of Birth" },
      { label: "Gender" },
      { label: "Profile Photo" },
      { label: "Languages Spoken" },
    ],
    needHeading: "What you’ll need",
    instructions: [
      "Enter a phone number where the LoveJoy team can reach you.",
      "Add your date of birth and gender.",
      "Upload a professional profile photo.",
      "Select all languages in which you can provide care.",
    ],
  },
  {
    id: "provider-step-3",
    numberLabel: "3",
    title: "Credentials & Experience",
    description:
      "Tell LoveJoy about your professional background and qualifications.",
    images: [
      {
        src: "/images/faqs/step-3-credentials.png",
        alt: "LoveJoy Health provider signup Step 3 showing credentials fields including provider type, title, organization, and bio",
      },
    ],
    fields: [
      { label: "Provider Type / Category" },
      { label: "Title" },
      { label: "Degree(s)" },
      { label: "Years of Experience" },
      { label: "Organization" },
      { label: "NPI Number" },
      { label: "CAQH ID", optional: true },
      { label: "Bio" },
      { label: "Educational Journey", optional: true },
    ],
    needHeading: "What to complete",
    explanations: [
      {
        label: "Provider Type / Category",
        body: "Choose the option that best represents your professional role.",
      },
      {
        label: "Title",
        body: "Enter your professional designation, such as LCSW, LPC, LMFT, psychologist, psychiatrist, or other appropriate credential.",
      },
      {
        label: "Degree(s)",
        body: "Enter your relevant academic or professional degrees.",
      },
      {
        label: "Years of Experience",
        body: "Enter your years of professional experience.",
      },
      {
        label: "Organization",
        body: "Select the appropriate LoveJoy organization association shown in the signup flow.",
      },
      {
        label: "NPI Number",
        body: "Enter your 10-digit NPI when applicable.",
      },
      {
        label: "CAQH ID",
        body: "Enter your CAQH ID if available.",
      },
      {
        label: "Bio",
        body: "Write a brief patient-facing professional biography.",
      },
      {
        label: "Educational Journey",
        body: "Optionally describe relevant education, training, certifications, or professional background.",
      },
    ],
  },
  {
    id: "provider-step-4",
    numberLabel: "4",
    title: "Specialties & Populations",
    description:
      "Select the areas in which you provide care and the populations you serve.",
    images: [
      {
        src: "/images/faqs/step-4-specialties.png",
        alt: "LoveJoy Health provider signup Step 4 showing clinical specialties and populations served as selectable pills",
      },
    ],
    needHeading: "What to complete",
    instructions: [
      "Select every option that accurately represents your practice.",
    ],
    subsections: [
      {
        title: "Clinical specialties",
        items: PROVIDER_SIGNUP_SPECIALTIES,
      },
      {
        title: "Populations served",
        items: PROVIDER_SIGNUP_POPULATIONS,
      },
    ],
  },
  {
    id: "provider-step-5",
    numberLabel: "5",
    title: "Practice Information",
    description: "Tell LoveJoy how and where you provide care.",
    images: [
      {
        src: "/images/faqs/step-5-practice.png",
        alt: "LoveJoy Health provider signup Step 5 showing practice information for online care, in-person care, licensed states, and time zone",
      },
    ],
    fields: [
      { label: "Online Consultation" },
      { label: "In-Person Consultation" },
      { label: "Licensed States" },
      { label: "Accepting New Patients" },
      { label: "Time Zone" },
    ],
    needHeading: "What to complete",
    instructions: [
      "Indicate whether you provide online consultations.",
      "Indicate whether you provide in-person consultations.",
      "Select each state where you are licensed to provide care.",
      "Tell LoveJoy whether you are currently accepting new patients.",
      "Select your time zone.",
    ],
    callout: {
      body: "Providers are responsible for accurately identifying the states where they are licensed and authorized to provide care.",
    },
  },
  {
    id: "provider-step-6",
    numberLabel: "6",
    title: "Set Your Availability",
    description: "Define when patients can schedule appointments with you.",
    images: [
      {
        src: "/images/faqs/step-6-availability.png",
        alt: "LoveJoy Health provider signup Step 6 showing weekly availability settings and appointment lengths",
      },
    ],
    fields: [
      { label: "Appointment Length" },
      { label: "New Patient Length" },
      { label: "Follow-up Length" },
    ],
    needHeading: "What to complete",
    instructions: [
      "Enable the days you are available.",
      "Set your Start time.",
      "Set your End time.",
      "Add a Break Start and Break End time if needed.",
      "Then complete Appointment Length, New Patient Length, and Follow-up Length.",
    ],
    notes: [
      "Your availability helps determine which appointment times can be presented to patients.",
    ],
  },
  {
    id: "provider-step-7",
    numberLabel: "7",
    title: "Payment Methods & Insurance",
    description:
      "Tell patients how they can pay for visits with you. The fields on this step change based on the payment methods you select.",
    images: [
      {
        src: "/images/faqs/step-7-payment-methods.png",
        alt: "LoveJoy Health provider signup Step 7 showing the accepted payment methods field before a selection is made",
      },
      {
        src: "/images/faqs/step-7-payment-dropdown.png",
        alt: "LoveJoy Health provider signup Step 7 showing payment method options including Insurance, Medicare, Medicaid, dual eligible, and Self Pay",
      },
      {
        src: "/images/faqs/step-7-insurance.png",
        alt: "LoveJoy Health provider signup Step 7 showing self-pay fee, insurance network participation, and Medicaid state fields",
      },
    ],
    needHeading: "What to complete",
    subsections: [
      {
        title: "Accepted payment methods",
        body: "Select all payment types that accurately apply to your practice.",
        items: PROVIDER_SIGNUP_PAYMENT_METHODS,
      },
      {
        title: "Self-pay",
        body: "When Self Pay is selected, enter the consultation fee that patients paying out of pocket should see during booking.",
        notes: [
          "Connecting Stripe for self-pay is optional during signup and can be completed later from the provider profile.",
        ],
      },
      {
        title: "Insurance network participation",
        body: "Add each payer and applicable product or network individually. Only indicate that you are in-network when you are contracted for that specific payer product or network. LoveJoy may verify coverage during the booking workflow. Selecting an insurance company does not credential or contract you with that payer.",
        items: [
          "Payer",
          "Product / Network",
          "Network Status",
          "Accepts This Insurance",
        ],
      },
      {
        title: "Medicaid / dual-eligible states",
        body: "Select the states where you accept Medicaid or Medicare and Medicaid dual-eligible patients, when applicable.",
      },
    ],
  },
  {
    id: "provider-step-8",
    numberLabel: "8",
    title: "Documents & Agreements",
    description:
      "Provide credentialing documents and review the agreements required before submitting your provider application.",
    images: [
      {
        src: "/images/faqs/step-8-documents.png",
        alt: "LoveJoy Health provider signup Step 8 showing document uploads and required agreements",
      },
    ],
    fields: [
      { label: "Professional License" },
      { label: "Resume / CV" },
      { label: "Malpractice Insurance Certificate" },
      { label: "W-9", optional: true },
    ],
    needHeading: "What you’ll need",
    instructions: [
      "Upload documents as PDF, JPG, or PNG.",
      "Select View Agreement to review each document in the signup flow.",
      "Review and accept each required agreement before the application can be submitted.",
    ],
    subsections: [
      {
        title: "Required agreements",
        body: "Open each agreement from the application. This FAQ does not summarize or replace the legal text.",
        items: PROVIDER_SIGNUP_AGREEMENTS,
      },
    ],
    links: [
      {
        href: PROVIDER_SIGNUP_URL,
        label: "Open the provider application to view agreements",
        external: true,
      },
    ],
  },
];

export const AFTER_SUBMIT_PROGRESS = [
  { label: "Create Account", state: "Complete" },
  { label: "Personal Information", state: "Complete" },
  { label: "Credentials", state: "Complete" },
  { label: "Specialties & Populations", state: "Complete" },
  { label: "Practice Information", state: "Complete" },
  { label: "Availability", state: "Complete" },
  { label: "Accepted Payments", state: "Complete" },
  { label: "Documents & Agreements", state: "Complete when applicable" },
  { label: "Application Review", state: "In Progress" },
  { label: "Portal Activation", state: "Upcoming" },
] as const;
