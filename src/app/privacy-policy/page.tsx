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
    "How LoveJoy Health collects, uses, discloses, and protects information across our websites, applications, portals, and healthcare services.",
  path: "/privacy-policy",
});

function Subheading({ children }: { children: string }) {
  return <h3 className="type-card text-navy-deep">{children}</h3>;
}

export default function PrivacyPolicyPage() {
  return (
    <LegalDocument
      eyebrow="Legal"
      title="Privacy Policy"
      description="How we collect, use, disclose, and protect information when you use LoveJoy Health."
    >
      <p className="type-eyebrow text-navy">
        Effective Date: September 24, 2026
        <br />
        Last Updated: September 24, 2026
      </p>

      <div className="type-body mt-6 space-y-4 text-muted">
        <p>
          LoveJoy Health Inc. (“LoveJoy Health,” “LoveJoy,” “we,” “our,” or
          “us”) respects your privacy and is committed to protecting your
          personal information.
        </p>
        <p>
          This Privacy Policy explains how we collect, use, disclose, and
          protect information when you use our websites, applications, portals,
          healthcare services, and other products and services that link to this
          Privacy Policy (collectively, the “Services”).
        </p>
        <p>
          Depending on how you interact with LoveJoy Health, certain health
          information may be subject to additional protections under the Health
          Insurance Portability and Accountability Act of 1996 (“HIPAA”) or
          other applicable healthcare privacy laws. Where applicable, our use
          and disclosure of protected health information (“PHI”) is also
          governed by the applicable{" "}
          <a
            href="/notice-of-privacy-practices"
            className="font-medium text-navy underline-offset-2 hover:underline"
          >
            Notice of Privacy Practices
          </a>
          . If there is a conflict between this Privacy Policy and an applicable
          Notice of Privacy Practices concerning PHI, the Notice of Privacy
          Practices controls.
        </p>
      </div>

      <LegalSection title="1. Information We Collect">
        <p>
          The information we collect depends on your relationship with LoveJoy
          Health and how you use our Services.
        </p>

        <Subheading>Information You Provide to Us</Subheading>
        <p>
          We may collect information you provide directly to us, including:
        </p>
        <LegalList
          items={[
            "Name, email address, telephone number, date of birth, and other contact or identifying information;",
            "Account credentials and profile information;",
            "Information submitted through forms, applications, referrals, or support requests;",
            "Communications with LoveJoy Health, healthcare providers, care teams, or other authorized users;",
            "Information you choose to provide through community or interactive features; and",
            "Other information you voluntarily provide through the Services.",
          ]}
        />

        <Subheading>Health and Care Information</Subheading>
        <p>
          When you use LoveJoy Health in connection with healthcare, care
          navigation, or care coordination, we may collect or process
          health-related information, including:
        </p>
        <LegalList
          items={[
            "Health history, symptoms, diagnoses, medications, and treatment-related information;",
            "Behavioral and mental health information;",
            "Information provided through assessments, questionnaires, screenings, check-ins, and similar tools;",
            "Information relating to social needs or factors that may affect health and access to care;",
            "Appointment, referral, care coordination, and treatment information;",
            "Communications with healthcare providers or care teams;",
            "Insurance, eligibility, billing, and claims-related information; and",
            "Other information related to the healthcare services you receive.",
          ]}
        />
        <p>Some of this information may constitute PHI under HIPAA.</p>

        <Subheading>Provider and Professional Information</Subheading>
        <p>
          If you are a healthcare provider, care navigator, administrator, or
          other professional using the Services, we may collect professional and
          business information such as your contact information, credentials,
          licenses, specialties, practice information, professional identifiers,
          affiliations, availability, and information necessary to administer
          your access to or participation in the Services.
        </p>

        <Subheading>Information From Other Sources</Subheading>
        <p>
          We may receive information about you from other sources when permitted
          by law, including healthcare providers, organizations, referral
          partners, health plans, government healthcare programs, authorized
          representatives, service providers, and other parties involved in
          providing or coordinating services.
        </p>

        <Subheading>Information Collected Automatically</Subheading>
        <p>
          When you use our Services, we may automatically collect certain
          technical and usage information, such as:
        </p>
        <LegalList
          items={[
            "IP address;",
            "Browser and device information;",
            "Operating system;",
            "Device or application identifiers;",
            "Login and authentication activity;",
            "Pages, screens, and features accessed;",
            "Dates and times of access;",
            "General usage information; and",
            "Diagnostic, performance, and security information.",
          ]}
        />
        <p>
          We may use cookies and similar technologies to operate, secure,
          analyze, and improve our Services.
        </p>
      </LegalSection>

      <LegalSection title="2. How We Use Information">
        <p>We may use information we collect to:</p>
        <LegalList
          items={[
            "Provide, operate, maintain, and support the Services;",
            "Provide or facilitate healthcare and related services;",
            "Connect individuals with healthcare providers and other appropriate resources;",
            "Coordinate care and manage referrals;",
            "Schedule and manage appointments;",
            "Facilitate communications between authorized users;",
            "Administer assessments, screenings, check-ins, and other care-related activities;",
            "Support care navigation and engagement;",
            "Process eligibility, billing, payment, reimbursement, and healthcare program requirements where applicable;",
            "Create and maintain user accounts;",
            "Authenticate users and protect account security;",
            "Communicate about appointments, referrals, services, accounts, and other operational matters;",
            "Respond to questions and support requests;",
            "Monitor, maintain, and improve the functionality, reliability, safety, and security of the Services;",
            "Detect and prevent fraud, misuse, unauthorized access, and other security incidents;",
            "Conduct analytics, quality improvement, and service development;",
            "Comply with legal, regulatory, contractual, and healthcare requirements; and",
            "Enforce our agreements, policies, and terms.",
          ]}
        />
        <p>
          We may also use aggregated or de-identified information for lawful
          purposes, including analytics, research, quality improvement, and
          service development.
        </p>
      </LegalSection>

      <LegalSection title="3. Artificial Intelligence and Automated Technologies">
        <p>
          Certain Services may use artificial intelligence, automation, or
          similar technologies to provide functionality such as informational
          support, navigation, assistance, or other features.
        </p>
        <p>
          When you use these features, information you submit may be processed
          to provide the requested functionality. We may provide additional
          notices or disclosures when you interact with these features.
        </p>
        <p>
          AI-enabled features do not replace professional medical advice,
          diagnosis, treatment, or emergency services.
        </p>
        <p>
          Information subject to HIPAA will be handled in accordance with
          applicable healthcare privacy requirements when those requirements
          apply.
        </p>
      </LegalSection>

      <LegalSection title="4. Community and Interactive Features">
        <p>
          Certain Services may allow users to post, share, or interact with
          information that can be viewed by other users.
        </p>
        <p>
          Information you voluntarily make available through these features may
          be visible to others. You should not post information you do not want
          other participants to see.
        </p>
        <p>
          We may moderate, restrict, or remove content when necessary to operate
          the Services, enforce our policies, promote safety, investigate
          reports, or comply with law.
        </p>
        <p>
          Additional rules may apply to community or interactive features.
        </p>
      </LegalSection>

      <LegalSection title="5. How We Disclose Information">
        <p>
          We may disclose information as necessary to provide our Services and
          operate LoveJoy Health, including in the following circumstances.
        </p>
        <p>
          We do not sell or share your SMS opt-in data or personal information
          with third parties for marketing purposes.
        </p>

        <Subheading>Healthcare Providers and Care Teams</Subheading>
        <p>
          We may disclose information to healthcare providers, care navigators,
          and other authorized members of a care team when appropriate for
          treatment, care coordination, healthcare operations, or services
          requested by the individual.
        </p>

        <Subheading>Organizations and Referral Partners</Subheading>
        <p>
          When you receive services through, are referred by, or otherwise
          interact with a participating organization, we may disclose
          information to that organization as permitted by applicable law,
          authorization, contractual arrangements, and the organization’s
          relationship with you.
        </p>

        <Subheading>Service Providers</Subheading>
        <p>
          We may engage companies that perform services on our behalf, such as
          hosting, communications, security, analytics, customer support,
          payment processing, and technology infrastructure.
        </p>
        <p>
          These providers may access information only as necessary to perform
          services for us and are subject to applicable contractual, privacy,
          and security obligations.
        </p>
        <p>
          Where required by HIPAA, appropriate Business Associate Agreements or
          other required healthcare privacy arrangements are used.
        </p>

        <Subheading>Health Plans, Payers, and Healthcare Programs</Subheading>
        <p>
          Where applicable, we may disclose information to health plans, payers,
          government healthcare programs, clearinghouses, billing partners, or
          similar entities for purposes such as eligibility, payment,
          reimbursement, claims, healthcare operations, reporting, and program
          administration.
        </p>

        <Subheading>Legal, Regulatory, and Safety Purposes</Subheading>
        <p>We may disclose information when permitted or required to:</p>
        <LegalList
          items={[
            "Comply with applicable law, regulation, court order, or legal process;",
            "Respond to lawful requests from governmental authorities;",
            "Protect the rights, property, health, or safety of individuals, LoveJoy Health, or others;",
            "Detect, investigate, or prevent fraud, abuse, or security incidents; or",
            "Establish, exercise, or defend legal claims.",
          ]}
        />

        <Subheading>Business Transactions</Subheading>
        <p>
          Information may be disclosed or transferred as part of a merger,
          acquisition, financing, restructuring, sale of assets, or similar
          business transaction, subject to applicable law and healthcare privacy
          requirements.
        </p>
      </LegalSection>

      <LegalSection title="6. How We Handle Health Information">
        <p>
          LoveJoy Health operates in healthcare environments where different
          privacy requirements may apply depending on the service, information,
          and relationship involved.
        </p>
        <p>
          In certain circumstances, LoveJoy Health may handle PHI subject to
          HIPAA. In other circumstances, we may process information on behalf of
          healthcare organizations or other entities under applicable
          contractual and legal requirements.
        </p>
        <p>
          When HIPAA applies, PHI is used and disclosed only as permitted by
          HIPAA and other applicable law.
        </p>
        <p>
          Individuals may have additional rights regarding PHI. Those rights and
          our responsibilities concerning PHI are described in the applicable
          Notice of Privacy Practices.
        </p>
      </LegalSection>

      <LegalSection title="7. Communications">
        <p>
          We may communicate with you through email, telephone, text message,
          push notification, or other communication channels regarding your
          account, appointments, referrals, care coordination, services,
          security, and other matters related to your use of LoveJoy Health.
        </p>
        <p>
          Where required, we obtain consent before sending certain
          communications.
        </p>
        <p>
          You may be able to opt out of certain non-essential communications.
          Opting out of marketing or optional communications will not
          necessarily stop operational, healthcare, security, or legally
          required communications.
        </p>
        <p>
          Message and data rates may apply to text messages. You may reply STOP
          to opt out of SMS from LoveJoy Health, or HELP for help. We do not
          sell or share your SMS opt-in data or personal information with third
          parties for marketing purposes.
        </p>
      </LegalSection>

      <LegalSection title="8. Cookies and Similar Technologies">
        <p>
          We may use cookies, local storage, pixels, and similar technologies to
          operate and secure our Services, maintain user sessions, remember
          preferences, understand usage, troubleshoot problems, and improve
          performance.
        </p>
        <p>
          Where required by law, we provide appropriate choices regarding
          non-essential cookies or similar technologies.
        </p>
        <p>
          Additional information may be provided in our{" "}
          <a
            href="/cookie-policy"
            className="font-medium text-navy underline-offset-2 hover:underline"
          >
            Cookie Policy
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="9. Data Security">
        <p>
          We use administrative, technical, and physical safeguards designed to
          protect information against unauthorized access, use, disclosure,
          alteration, or destruction.
        </p>
        <p>
          Our security practices may include access controls, authentication
          measures, encryption, monitoring, logging, security reviews, and other
          safeguards appropriate to the nature of the information we handle.
        </p>
        <p>
          No method of electronic transmission or storage is completely secure,
          and we cannot guarantee absolute security.
        </p>
        <p>
          Users are responsible for protecting their account credentials and
          should contact us if they believe their account or information has
          been compromised.
        </p>
      </LegalSection>

      <LegalSection title="10. Data Retention">
        <p>
          We retain information for as long as reasonably necessary to provide
          our Services and fulfill the purposes described in this Privacy
          Policy, including satisfying healthcare recordkeeping, legal,
          regulatory, contractual, security, billing, dispute resolution, and
          operational requirements.
        </p>
        <p>
          Retention periods may vary depending on the type of information, the
          services involved, applicable law, and our relationship with the
          individual or organization.
        </p>
        <p>
          When information is no longer required, we may delete, de-identify, or
          otherwise dispose of it in accordance with applicable law and our
          retention practices.
        </p>
      </LegalSection>

      <LegalSection title="11. Your Privacy Rights and Choices">
        <p>
          Depending on where you live, the type of information involved, and
          applicable law, you may have rights regarding your personal
          information.
        </p>
        <p>These rights may include the ability to:</p>
        <LegalList
          items={[
            "Request access to certain information;",
            "Request correction of inaccurate information;",
            "Request deletion of certain information;",
            "Obtain a copy of certain information;",
            "Withdraw certain consents;",
            "Manage certain communication preferences; or",
            "Exercise other rights provided by applicable privacy laws.",
          ]}
        />
        <p>
          These rights are not absolute. For example, we may be required to
          retain certain healthcare records or other information even after a
          deletion request.
        </p>
        <p>
          If information is subject to HIPAA, additional rights may apply as
          described in the applicable Notice of Privacy Practices.
        </p>
        <p>
          To submit a privacy request, contact us using the information below.
          We may need to verify your identity before fulfilling certain
          requests.
        </p>
      </LegalSection>

      <LegalSection title="12. Children and Minors">
        <p>
          Our Services are not intended for children under 13 to independently
          create accounts or provide personal information without appropriate
          authorization.
        </p>
        <p>
          When healthcare services are provided to minors, information is
          handled in accordance with applicable laws governing consent,
          confidentiality, parental or guardian access, and healthcare records.
        </p>
      </LegalSection>

      <LegalSection title="13. Third-Party Services">
        <p>
          Our Services may contain links to or integrate with services operated
          by third parties.
        </p>
        <p>
          When a third party independently determines how it collects and uses
          information, its own privacy policy and practices apply. We encourage
          users to review the privacy practices of third-party services they
          choose to use.
        </p>
      </LegalSection>

      <LegalSection title="14. State Privacy Rights">
        <p>
          Residents of certain U.S. states may have additional rights under
          state privacy laws.
        </p>
        <p>
          The applicability of these rights may depend on the nature of the
          information and whether it is already regulated by healthcare privacy
          laws such as HIPAA.
        </p>
        <p>
          We will process valid privacy requests in accordance with applicable
          law.
        </p>
      </LegalSection>

      <LegalSection title="15. United States Services">
        <p>
          LoveJoy Health is based in the United States, and our Services are
          primarily intended for use within the United States.
        </p>
        <p>
          Information may be processed and stored in the United States in
          accordance with applicable law.
        </p>
      </LegalSection>

      <LegalSection title="16. Changes to This Privacy Policy">
        <p>
          We may update this Privacy Policy periodically to reflect changes to
          our Services, privacy practices, technology, or legal requirements.
        </p>
        <p>
          When we update this Privacy Policy, we will revise the “Last Updated”
          date above.
        </p>
        <p>
          If required by law, we will provide additional notice or obtain
          consent before material changes take effect.
        </p>
      </LegalSection>

      <LegalSection title="17. Contact Us">
        <p>
          Questions, concerns, or requests regarding this Privacy Policy or our
          privacy practices may be directed to:
        </p>
        <p>
          <strong className="text-navy-deep">LoveJoy Health Inc.</strong>
          <br />
          24 Greenway Plaza
          <br />
          Houston, Texas 77046
          <br />
          United States
        </p>
        <p>
          Email:{" "}
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="font-medium text-navy underline-offset-2 hover:underline"
          >
            {siteConfig.contactEmail}
          </a>
          <br />
          Phone:{" "}
          <a
            href={`tel:${siteConfig.contactPhoneTel}`}
            className="font-medium text-navy underline-offset-2 hover:underline"
          >
            {siteConfig.contactPhone}
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
        <p>
          Healthcare privacy questions concerning protected health information
          may also be addressed through the contact information provided in the{" "}
          <a
            href="/notice-of-privacy-practices"
            className="font-medium text-navy underline-offset-2 hover:underline"
          >
            Notice of Privacy Practices
          </a>
          .
        </p>
      </LegalSection>
    </LegalDocument>
  );
}
