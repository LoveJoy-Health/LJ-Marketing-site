import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import {
  LegalDocument,
  LegalList,
  LegalSection,
} from "@/components/LegalDocument";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Security & Compliance",
  description:
    "How LoveJoy Health protects sensitive health information with administrative, technical, and physical safeguards.",
  path: "/security-compliance",
});

function Subheading({ children }: { children: string }) {
  return <h3 className="type-card text-navy-deep">{children}</h3>;
}

export default function SecurityCompliancePage() {
  return (
    <LegalDocument
      eyebrow="Trust"
      title="Security & Compliance"
      description="Protecting health information is part of how we operate."
    >
      <div className="type-body space-y-4 text-muted">
        <p>
          LoveJoy Health supports healthcare providers, organizations, care
          teams, and individuals who rely on us to handle sensitive information
          responsibly.
        </p>
        <p>
          We maintain administrative, technical, and physical safeguards
          designed to protect the confidentiality, integrity, and availability
          of information entrusted to LoveJoy.
        </p>
      </div>

      <LegalSection title="Data Protection">
        <Subheading>Encryption</Subheading>
        <p>
          Sensitive information is protected using encryption in transit and at
          rest.
        </p>

        <Subheading>Secure Infrastructure</Subheading>
        <p>
          LoveJoy uses cloud infrastructure and security controls designed to
          support the security, availability, and scalability requirements of
          healthcare technology.
        </p>

        <Subheading>Access Controls</Subheading>
        <p>
          Access to sensitive information is restricted based on user roles and
          responsibilities.
        </p>
        <p>
          We use authentication and access-control measures designed to prevent
          unauthorized access to accounts, systems, and health information.
        </p>

        <Subheading>Monitoring and Logging</Subheading>
        <p>
          We maintain logging and monitoring capabilities designed to help
          identify suspicious activity, operational issues, and potential
          security events.
        </p>
      </LegalSection>

      <LegalSection title="Healthcare Privacy & HIPAA">
        <p>
          LoveJoy Health operates in environments where the Health Insurance
          Portability and Accountability Act (HIPAA) and other healthcare
          privacy requirements may apply.
        </p>
        <p>
          Where LoveJoy creates, receives, maintains, or transmits protected
          health information subject to HIPAA, we apply appropriate
          administrative, technical, and physical safeguards and handle that
          information in accordance with applicable legal and contractual
          requirements.
        </p>
        <p>
          Our privacy practices are further described in our{" "}
          <a
            href="/privacy-policy"
            className="font-medium text-navy underline-offset-2 hover:underline"
          >
            Privacy Policy
          </a>{" "}
          and{" "}
          <a
            href="/notice-of-privacy-practices"
            className="font-medium text-navy underline-offset-2 hover:underline"
          >
            Notice of Privacy Practices
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="Vendor & Partner Security">
        <p>
          Technology vendors are evaluated based on the nature of the services
          they provide and the information they may access.
        </p>
        <p>
          Where a service provider handles protected health information on our
          behalf and HIPAA requires it, we maintain an appropriate Business
          Associate Agreement (BAA).
        </p>
        <p>
          We also use contractual and security requirements designed to limit
          how service providers may access, use, or disclose sensitive
          information.
        </p>
      </LegalSection>

      <LegalSection title="Access Management">
        <p>
          Access to LoveJoy systems and sensitive information is limited
          according to role and business need.
        </p>
        <p>Our access-management practices are designed around principles including:</p>
        <LegalList
          items={[
            "Role-based access;",
            "Least-necessary access;",
            "Authentication controls;",
            "Access review and management; and",
            "Removal or modification of access when responsibilities change.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Security Operations">
        <p>
          LoveJoy maintains security practices designed to identify, assess, and
          respond to risks affecting our systems and information.
        </p>
        <p>These practices may include:</p>
        <LegalList
          items={[
            "Security monitoring;",
            "Vulnerability and risk management;",
            "Access reviews;",
            "Audit logging;",
            "Incident investigation and response;",
            "Backup and recovery procedures; and",
            "Vendor security management.",
          ]}
        />
        <p>
          Our security program continues to evolve as our platform, healthcare
          operations, and regulatory responsibilities grow.
        </p>
      </LegalSection>

      <LegalSection title="Workforce Security">
        <p>
          Team members and authorized personnel with access to sensitive
          information are expected to follow LoveJoy’s privacy and security
          requirements.
        </p>
        <p>
          Access is provided according to job responsibilities, and personnel
          with access to protected health information are subject to applicable
          privacy, security, and confidentiality requirements.
        </p>
        <p>
          LoveJoy maintains privacy and security training appropriate to
          workforce roles and responsibilities.
        </p>
      </LegalSection>

      <LegalSection title="Incident Response">
        <p>
          LoveJoy maintains processes for identifying, investigating,
          containing, and responding to suspected security and privacy
          incidents.
        </p>
        <p>
          When an incident involves protected health information or other
          regulated information, we evaluate and respond to the incident
          according to applicable legal, contractual, and regulatory
          requirements, including notification obligations where required.
        </p>
      </LegalSection>

      <LegalSection title="Responsible Technology">
        <p>
          We evaluate privacy and security considerations when implementing
          technologies that may process sensitive or health-related
          information.
        </p>
        <p>
          This includes evaluating the information involved, access
          requirements, third-party service providers, and appropriate
          safeguards before sensitive information is shared or processed.
        </p>
      </LegalSection>

      <LegalSection title="Security for Healthcare Organizations">
        <p>
          Organizations evaluating LoveJoy may request additional information
          about our security and privacy practices.
        </p>
        <p>
          Depending on the relationship and applicable requirements, this may
          include information regarding:
        </p>
        <LegalList
          items={[
            "Security architecture;",
            "Privacy and security safeguards;",
            "Business Associate Agreements;",
            "Access controls;",
            "Data protection;",
            "Vendor management;",
            "Incident response; and",
            "Other security or compliance documentation relevant to an organization’s review.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Security Questions">
        <p>
          Healthcare organizations, providers, partners, and security teams may
          contact LoveJoy regarding security, privacy, compliance, or
          vendor-review questions.
        </p>
        <p>
          <strong className="text-navy-deep">LoveJoy Health Inc.</strong>
          <br />
          24 Greenway Plaza
          <br />
          Houston, Texas 77046
        </p>
        <p>
          Security & Compliance:{" "}
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
            lovejoy.health
          </a>
        </p>
      </LegalSection>
    </LegalDocument>
  );
}
