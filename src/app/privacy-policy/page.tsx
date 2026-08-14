import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import {
  LegalDocument,
  LegalList,
  LegalSection,
} from "@/components/LegalDocument";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy",
  description:
    "How LoveJoy Health collects, uses, and protects your information across our platform and services.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalDocument
      eyebrow="Legal"
      title="Privacy Policy"
      description="How we collect, use, and protect your information when you use LoveJoy Health."
    >
      {/* Adapted from https://lovejoy.health/privacy-policy/ (live WordPress). */}
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-navy">
        Effective date: 01/01/2025
      </p>

      <LegalSection title="1. Introduction">
        <p>
          LoveJoy Health (“LoveJoy,” “we,” “our,” or “us”) is committed to
          protecting your privacy and handling your information responsibly.
        </p>
        <p>
          This Privacy Policy explains how we collect, use, and protect your
          information when you use our platform, including our mobile
          applications, web applications, and related services.
        </p>
      </LegalSection>

      <LegalSection title="2. Information We Collect">
        <p>We may collect the following types of information:</p>
        <h3 className="font-display text-xl text-navy-deep">
          Personal Information
        </h3>
        <LegalList
          items={[
            "Name",
            "Email address",
            "Phone number",
            "Date of birth",
          ]}
        />
        <h3 className="font-display text-xl text-navy-deep">
          Health Information
        </h3>
        <LegalList
          items={[
            "Mood tracking data",
            "Assessments (e.g., PHQ-9, GAD-7)",
            "Messages with providers",
            "Appointment information",
          ]}
        />
        <h3 className="font-display text-xl text-navy-deep">
          Technical Information
        </h3>
        <LegalList
          items={["Device type", "IP address", "Browser/app usage data"]}
        />
      </LegalSection>

      <LegalSection title="3. How We Use Your Information">
        <p>We use your information to:</p>
        <LegalList
          items={[
            "Provide and improve our services",
            "Connect you with healthcare providers",
            "Facilitate appointments and communication",
            "Personalize your experience",
            "Monitor and improve platform performance",
            "Comply with legal and regulatory requirements",
          ]}
        />
      </LegalSection>

      <LegalSection title="4. How We Protect Your Information">
        <p>
          We implement industry-standard safeguards to protect your data. These
          include:
        </p>
        <LegalList
          items={[
            "Encryption of data in transit and at rest",
            "Secure cloud infrastructure via Amazon Web Services",
            "Role-based access controls",
            "Continuous monitoring and security practices",
          ]}
        />
      </LegalSection>

      <LegalSection title="5. HIPAA & Health Data">
        <p>
          LoveJoy Health is designed to support compliance with the Health
          Insurance Portability and Accountability Act.
        </p>
        <p>
          When applicable, your health information may be handled in accordance
          with HIPAA and other relevant healthcare regulations.
        </p>
      </LegalSection>

      <LegalSection title="6. Sharing of Information">
        <p>We do not sell your personal information.</p>
        <p>We may share your information only in the following situations:</p>
        <LegalList
          items={[
            "With healthcare providers involved in your care",
            "With trusted service providers (under strict agreements)",
            "To comply with legal obligations",
            "To protect the safety and security of users",
          ]}
        />
      </LegalSection>

      <LegalSection title="7. Third-Party Services">
        <p>
          We may use third-party services (e.g., cloud hosting, communication
          tools) to operate our platform.
        </p>
        <p>
          These partners are required to maintain appropriate security and
          privacy protections.
        </p>
      </LegalSection>

      <LegalSection title="8. Your Rights & Choices">
        <p>Depending on your location, you may have the right to:</p>
        <LegalList
          items={[
            "Access your information",
            "Request corrections",
            "Request deletion of your data",
            "Limit certain uses of your data",
          ]}
        />
        <p>
          To make a request, contact us at{" "}
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="font-medium text-navy underline-offset-2 hover:underline"
          >
            {siteConfig.contactEmail}
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="9. Data Retention">
        <p>We retain information only as long as necessary to:</p>
        <LegalList
          items={[
            "Provide services",
            "Meet legal and regulatory requirements",
          ]}
        />
      </LegalSection>

      <LegalSection title="10. Security Incidents">
        <p>
          In the event of a data breach, we will take appropriate steps to
          investigate, mitigate, and notify affected users as required by law.
        </p>
      </LegalSection>

      <LegalSection title="11. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. Updates will be
          posted on this page with a revised effective date.
        </p>
      </LegalSection>

      <LegalSection title="12. Contact Us">
        <p>
          If you have questions about this Privacy Policy, please contact us:
        </p>
        <p>
          LoveJoy Health
          <br />
          Email:{" "}
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="font-medium text-navy underline-offset-2 hover:underline"
          >
            {siteConfig.contactEmail}
          </a>
          <br />
          Website:{" "}
          <a
            href="https://lovejoy.health/"
            className="font-medium text-navy underline-offset-2 hover:underline"
          >
            https://lovejoy.health/
          </a>
        </p>
      </LegalSection>
    </LegalDocument>
  );
}
