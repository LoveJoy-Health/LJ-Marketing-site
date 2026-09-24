import { siteConfig } from "@/lib/site";

export type FAQLink = {
  href: string;
  label: string;
  external?: boolean;
};

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
  links?: FAQLink[];
};

export type FAQCategory = {
  id: string;
  label: string;
  intro?: string;
  items: FAQItem[];
};

export const FAQ_CATEGORIES: FAQCategory[] = [
  {
    id: "individuals",
    label: "Individuals",
    intro:
      "Answers for people looking for behavioral healthcare through LoveJoy.",
    items: [
      {
        id: "individuals-find-provider",
        question: "How do I find a behavioral health provider?",
        answer:
          "You can search for LoveJoy providers through the patient portal and start from there.",
        links: [
          {
            href: siteConfig.findProviderUrl,
            label: "Find a Provider",
            external: true,
          },
        ],
      },
      {
        id: "individuals-crisis",
        question: "What if I am in crisis?",
        answer:
          "LoveJoy Health is not an emergency service. If you or someone else is in immediate danger, call 911. For 24/7 crisis support, call or text 988.",
        links: [{ href: "/resources/crisis", label: "Crisis Resources" }],
      },
      {
        id: "individuals-app",
        question: "Where can I download the patient app?",
        answer:
          "The LoveJoy patient app is available for iPhone and Android.",
        links: [{ href: "/download/patient", label: "Download the patient app" }],
      },
    ],
  },
  {
    id: "providers",
    label: "Providers",
    intro:
      "How behavioral health providers join LoveJoy, complete onboarding, and use the provider portal.",
    items: [
      {
        id: "onboarding-walkthrough",
        question: "How do I join LoveJoy as a provider?",
        answer:
          "Complete the provider application online in about 8–10 minutes. The walkthrough shows every signup screen, what to have ready, and what happens after you submit.",
        links: [
          {
            href: "/faqs/providers/onboarding",
            label: "Open the provider onboarding walkthrough",
          },
        ],
      },
    ],
  },
  {
    id: "care-navigators",
    label: "Care Navigators",
    intro: "Access and support for care navigators coordinating LoveJoy care.",
    items: [
      {
        id: "navigators-access",
        question: "How do I get access to the navigator portal?",
        answer:
          "Navigators are typically invited. If you coordinate care and need access, contact LoveJoy and we will help you get set up.",
        links: [
          { href: "/for-navigators", label: "Care Navigators" },
          { href: "/about/contact", label: "Contact LoveJoy" },
          {
            href: siteConfig.navigatorSignInUrl,
            label: "Navigator Sign In",
            external: true,
          },
        ],
      },
    ],
  },
  {
    id: "organizations",
    label: "Organizations",
    intro:
      "Questions from clinics, FQHCs, CCBHCs, and other organizations exploring LoveJoy.",
    items: [
      {
        id: "organizations-learn",
        question: "How can my organization learn more about LoveJoy?",
        answer:
          "Review the organization pages for platform, navigation, and implementation details, or contact LoveJoy to talk through your setting.",
        links: [
          { href: "/for-organizations", label: "For Organizations" },
          { href: "/about/contact", label: "Contact LoveJoy" },
        ],
      },
    ],
  },
  {
    id: "account-access",
    label: "Account & Access",
    intro: "Where to sign in and how to reach the right LoveJoy portal.",
    items: [
      {
        id: "access-provider-signin",
        question: "Where do I sign in as a provider?",
        answer:
          "Use the LoveJoy Provider Portal with the email and password from your provider account.",
        links: [
          {
            href: siteConfig.providerSignInUrl,
            label: "Provider Sign In",
            external: true,
          },
        ],
      },
      {
        id: "access-patient-signin",
        question: "Where do I sign in as a patient?",
        answer: "Patients sign in through the LoveJoy patient portal.",
        links: [
          {
            href: siteConfig.patientPortalUrl,
            label: "Patient portal",
            external: true,
          },
        ],
      },
      {
        id: "access-apps",
        question: "Where do I download the LoveJoy apps?",
        answer:
          "Patient and provider apps are listed on the LoveJoy download pages.",
        links: [{ href: "/download", label: "Download the apps" }],
      },
    ],
  },
  {
    id: "privacy-security",
    label: "Privacy & Security",
    intro: "How LoveJoy publishes privacy, security, and legal information.",
    items: [
      {
        id: "privacy-policy",
        question: "Where can I read LoveJoy’s privacy policy?",
        answer:
          "The LoveJoy Privacy Policy is published on this website and explains how personal information is handled.",
        links: [{ href: "/privacy-policy", label: "Privacy Policy" }],
      },
      {
        id: "notice-of-privacy-practices",
        question: "Where can I read LoveJoy’s HIPAA Notice of Privacy Practices?",
        answer:
          "The Notice of Privacy Practices describes how LoveJoy Health may use and disclose protected health information and your rights regarding that information.",
        links: [
          {
            href: "/notice-of-privacy-practices",
            label: "Notice of Privacy Practices",
          },
        ],
      },
      {
        id: "privacy-security",
        question: "Where can I read about security and compliance?",
        answer:
          "LoveJoy publishes a Security & Compliance page with the current public description of our security practices.",
        links: [
          { href: "/security-compliance", label: "Security & Compliance" },
        ],
      },
    ],
  },
];

export const PROVIDER_ONBOARDING_FAQS: FAQItem[] = [
  {
    id: "how-long",
    question: "How long does the provider application take?",
    answer:
      "The application is designed to take approximately 8–10 minutes if you have your information available.",
  },
  {
    id: "what-to-have-ready",
    question: "What should I have ready before I start?",
    answer:
      "Have your personal and contact details, credentials, specialties, licensed states, availability, payment methods, and credentialing documents ready. A full checklist is in Before You Start above.",
    links: [
      {
        href: "/faqs/providers/onboarding#before-you-start",
        label: "Before You Start checklist",
      },
    ],
  },
  {
    id: "npi",
    question: "Do I need an NPI number?",
    answer:
      "Enter an NPI when it applies to your role and participation. The current application includes an NPI field so you can provide it when applicable.",
  },
  {
    id: "caqh",
    question: "Do I need a CAQH ID?",
    answer:
      "The current application allows providers to enter a CAQH ID and marks it as optional.",
  },
  {
    id: "missing-document",
    question: "Can I finish the application if I’m missing a document?",
    answer:
      "Yes. Providers may continue signup, but approval cannot be completed until required documentation is submitted.",
    links: [
      {
        href: "/faqs/providers/onboarding#missing-documents",
        label: "What if I don’t have all my documents yet?",
      },
    ],
  },
  {
    id: "save-progress",
    question: "Can I save my progress?",
    answer:
      "Yes. After you create your account, completed steps are saved as you continue. You can sign back in and return to the application to finish remaining steps.",
    links: [
      {
        href: siteConfig.providerSignInUrl,
        label: "Provider Sign In",
        external: true,
      },
    ],
  },
  {
    id: "change-later",
    question: "Can I change my information later?",
    answer:
      "Certain provider information may be managed through the provider profile after signup, subject to review or credentialing requirements.",
  },
  {
    id: "after-submit",
    question: "What happens after I submit?",
    answer:
      "Your application enters review. Clinical modules remain locked until the provider application is approved and the portal is activated.",
    links: [
      {
        href: "/faqs/providers/onboarding#after-you-submit",
        label: "What happens after you submit?",
      },
    ],
  },
  {
    id: "approval-guarantee",
    question: "Does submitting my application guarantee approval?",
    answer:
      "No. All provider applications are subject to LoveJoy Health review and applicable onboarding and credentialing requirements.",
  },
  {
    id: "need-something-else",
    question: "How will I know if LoveJoy needs something else?",
    answer:
      "You can review onboarding status in the provider portal, and LoveJoy may contact you if additional information or documentation is required.",
  },
  {
    id: "check-status",
    question: "Where can I check my application status?",
    answer:
      "Sign into the LoveJoy Provider Portal and view the onboarding status page.",
    links: [
      {
        href: siteConfig.providerSignInUrl,
        label: "Provider Sign In",
        external: true,
      },
    ],
  },
  {
    id: "sign-in-after-account",
    question: "Where do I sign in after creating an account?",
    answer:
      "Use Provider Sign In with the email and password you created during Step 1.",
    links: [
      {
        href: siteConfig.providerSignInUrl,
        label: "Provider Sign In",
        external: true,
      },
    ],
  },
  {
    id: "apply-from-phone",
    question: "Can I apply from my phone?",
    answer:
      "Yes. The web provider application is designed to work on phones and larger screens. You can start or continue signup from a mobile browser.",
    links: [
      {
        href: siteConfig.providerJoinUrl,
        label: "Start Provider Application",
        external: true,
      },
    ],
  },
];

export function getFaqCategory(id: string): FAQCategory | undefined {
  return FAQ_CATEGORIES.find((category) => category.id === id);
}

export function getFaqCategoryItems(category: FAQCategory): FAQItem[] {
  if (category.id === "providers") {
    return [...category.items, ...PROVIDER_ONBOARDING_FAQS];
  }
  return category.items;
}

export function getFaqSchemaItems(
  items: FAQItem[] = [
    ...FAQ_CATEGORIES.flatMap((category) => getFaqCategoryItems(category)),
  ],
): { question: string; answer: string }[] {
  return items.map((item) => ({
    question: item.question,
    answer: item.answer,
  }));
}
