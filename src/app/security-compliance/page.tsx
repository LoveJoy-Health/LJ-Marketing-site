import type { Metadata } from "next";
import {
  LegalDocument,
  LegalList,
  LegalSection,
} from "@/components/LegalDocument";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Security & Compliance",
  description:
    "How LoveJoy Health protects sensitive health information with HIPAA-aligned security practices.",
};

export default function SecurityCompliancePage() {
  return (
    <LegalDocument
      eyebrow="Trust"
      title="Security & Compliance"
      description="Your privacy. Protected. Your care. Trusted."
    >
      {/* Adapted from https://lovejoy.health/security-compliance/ (live WordPress). */}
      <p className="text-base leading-relaxed text-muted">
        At LoveJoy Health, we are committed to protecting sensitive health
        information and building a secure, trusted platform for individuals,
        providers, and partners.
      </p>

      <LegalSection title="Section 1: Our Commitment">
        <p className="font-semibold text-navy-deep">
          Built with Privacy and Security at the Core
        </p>
        <p>
          LoveJoy Health is designed to support the safe and secure exchange of
          health information. We prioritize data protection, user privacy, and
          responsible technology practices across our platform.
        </p>
        <p>
          Our infrastructure and processes are aligned with industry standards,
          including the Health Insurance Portability and Accountability Act, to
          ensure we are building a platform that organizations and users can
          trust.
        </p>
      </LegalSection>

      <LegalSection title="Section 2: How We Protect Data">
        <p className="font-semibold text-navy-deep">Security You Can Rely On</p>
        <ul className="list-disc space-y-3 pl-5 text-muted marker:text-navy">
          <li>
            <strong className="text-navy-deep">Encrypted Data</strong>
            <br />
            All sensitive data is encrypted both in transit and at rest
          </li>
          <li>
            <strong className="text-navy-deep">
              Secure Cloud Infrastructure
            </strong>
            <br />
            Hosted on Amazon Web Services with enterprise-grade security
            controls
          </li>
          <li>
            <strong className="text-navy-deep">Role-Based Access Control</strong>
            <br />
            Users can only access the information necessary for their role
          </li>
          <li>
            <strong className="text-navy-deep">Continuous Monitoring</strong>
            <br />
            Systems are monitored to detect and respond to potential risks
          </li>
          <li>
            <strong className="text-navy-deep">Secure Authentication</strong>
            <br />
            Strong authentication methods are used to protect user accounts
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Section 3: Partner & Vendor Security">
        <p className="font-semibold text-navy-deep">
          Working with Trusted Partners
        </p>
        <p>
          We work with carefully selected technology partners that meet strict
          security and privacy standards. Where applicable, we maintain Business
          Associate Agreements (BAAs) to ensure all parties handling sensitive
          health information are aligned with regulatory requirements.
        </p>
      </LegalSection>

      <LegalSection title="Section 4: Designed for Healthcare Organizations">
        <p className="font-semibold text-navy-deep">
          Supporting Providers, Health Systems, and Community Organizations
        </p>
        <p>
          LoveJoy Health is built to support organizations serving underserved
          communities, including providers, community health organizations, and
          health plans.
        </p>
        <p>Our platform is designed to:</p>
        <LegalList
          items={[
            "Enable secure communication between patients and providers",
            "Support care coordination and engagement",
            "Provide tools for tracking outcomes and improving care delivery",
          ]}
        />
      </LegalSection>

      <LegalSection title="Section 5: Compliance Positioning">
        <p className="font-semibold text-navy-deep">
          HIPAA-Aligned Infrastructure
        </p>
        <p>
          LoveJoy Health is built on a HIPAA-ready infrastructure and is designed
          to support compliance with applicable healthcare privacy and security
          regulations.
        </p>
        <p>
          We implement administrative, technical, and physical safeguards to
          protect sensitive health information and continuously improve our
          security practices as we scale.
        </p>
      </LegalSection>

      <LegalSection title="Section 6: Contact">
        <p className="font-semibold text-navy-deep">
          Questions About Security or Compliance?
        </p>
        <p>
          If you are a provider, organization, or partner and would like to learn
          more about our security practices, please contact us at{" "}
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="font-medium text-navy underline-offset-2 hover:underline"
          >
            {siteConfig.contactEmail}
          </a>
          .
        </p>
      </LegalSection>
    </LegalDocument>
  );
}
