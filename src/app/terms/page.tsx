import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import {
  LegalDocument,
  LegalList,
  LegalSection,
} from "@/components/LegalDocument";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Terms & Conditions",
  description:
    "Terms of Use for LoveJoy Health websites, applications, portals, and healthcare-related services.",
  path: "/terms",
});

function Subheading({ children }: { children: string }) {
  return <h3 className="type-card text-navy-deep">{children}</h3>;
}

export default function TermsPage() {
  return (
    <LegalDocument
      eyebrow="Legal"
      title="Terms & Conditions"
      description="Terms of Use for accessing LoveJoy Health websites, applications, portals, and related services."
    >
      <p className="type-eyebrow text-navy">
        Effective Date: September 24, 2026
        <br />
        Last Updated: September 24, 2026
      </p>

      <div className="type-body mt-6 space-y-4 text-muted">
        <p>
          These Terms of Use (“Terms”) govern your access to and use of the
          websites, applications, portals, technology, healthcare-related
          services, and other products and services provided by LoveJoy Health
          Inc. (“LoveJoy Health,” “LoveJoy,” “we,” “our,” or “us”) that link to
          these Terms (collectively, the “Services”).
        </p>
        <p>
          Please read these Terms carefully. By creating an account, accessing,
          or using the Services, you agree to these Terms and our{" "}
          <a
            href="/privacy-policy"
            className="font-medium text-navy underline-offset-2 hover:underline"
          >
            Privacy Policy
          </a>
          .
        </p>
        <p>
          Certain Services may be subject to additional agreements, notices,
          consents, policies, or terms. These may include healthcare consent
          forms, telehealth consent, a Notice of Privacy Practices, provider
          agreements, organization agreements, Business Associate Agreements,
          community guidelines, and other applicable documents.
        </p>
        <p>
          If additional terms apply to a particular Service, those terms will
          control to the extent they conflict with these Terms regarding that
          Service.
        </p>
      </div>

      <LegalSection title="1. About LoveJoy Health">
        <p>
          LoveJoy Health provides technology and services designed to support
          access to healthcare, care navigation, care coordination,
          communication, assessment, engagement, and related healthcare
          activities.
        </p>
        <p>
          Depending on the circumstances, LoveJoy Health may provide technology
          services, administrative or care-navigation services, or healthcare
          services through appropriately licensed healthcare professionals.
        </p>
        <p>
          Not every feature or Service is available to every user, in every
          location, or through every participating organization.
        </p>
      </LegalSection>

      <LegalSection title="2. Eligibility">
        <p>
          You must be legally permitted to use the Services and enter into these
          Terms.
        </p>
        <p>
          If you are using the Services on behalf of an organization, you
          represent that you have authority to act on behalf of that
          organization with respect to your use of the Services.
        </p>
        <p>
          Certain healthcare services may have additional eligibility
          requirements based on age, location, insurance coverage, provider
          licensure, clinical appropriateness, or applicable law.
        </p>
        <p>
          Services involving minors may require authorization from a parent,
          guardian, or other legally authorized representative.
        </p>
      </LegalSection>

      <LegalSection title="3. User Accounts">
        <p>Certain Services require an account.</p>
        <p>
          You agree to provide accurate and current information and to update
          your information when necessary.
        </p>
        <p>You are responsible for:</p>
        <LegalList
          items={[
            "Maintaining the confidentiality of your login credentials;",
            "Using reasonable measures to secure your account and devices;",
            "Activities occurring through your account to the extent permitted by law; and",
            "Promptly notifying LoveJoy if you suspect unauthorized access or use.",
          ]}
        />
        <p>
          You may not share account credentials with another person unless
          expressly permitted by LoveJoy.
        </p>
        <p>
          We may require identity verification or additional authentication
          before granting access to certain Services or information.
        </p>
      </LegalSection>

      <LegalSection title="4. Healthcare Services">
        <p>
          Certain LoveJoy Services may facilitate or involve healthcare services
          provided by licensed healthcare professionals.
        </p>
        <p>
          Healthcare professionals are responsible for exercising their own
          professional and clinical judgment in providing care.
        </p>
        <p>
          Use of LoveJoy’s website, applications, educational materials,
          assessments, navigation tools, community features, or other
          non-clinical functionality does not by itself establish a
          provider-patient relationship.
        </p>
        <p>
          A provider-patient relationship may be established when you receive
          healthcare services from a healthcare professional in accordance with
          applicable law and the provider’s clinical practices.
        </p>
        <p>
          LoveJoy does not guarantee that any particular treatment, provider,
          medication, diagnosis, referral, or healthcare service will be
          appropriate or available to you.
        </p>
        <p>
          Healthcare decisions should be made between you and an appropriately
          qualified healthcare professional.
        </p>
      </LegalSection>

      <LegalSection title="5. Not for Emergencies">
        <p>
          <strong className="text-navy-deep">
            The Services are not an emergency service.
          </strong>
        </p>
        <p>
          Do not use LoveJoy applications, messaging, community features,
          artificial intelligence features, or other Services to obtain
          emergency assistance.
        </p>
        <p>
          If you believe you or another person is experiencing a medical
          emergency, call <strong className="text-navy-deep">911</strong> or go
          to the nearest emergency department.
        </p>
        <p>
          If you are experiencing a mental health or suicide crisis in the
          United States, call or text{" "}
          <strong className="text-navy-deep">988</strong> to reach the Suicide
          &amp; Crisis Lifeline.
        </p>
        <p>
          LoveJoy cannot guarantee that communications submitted through the
          Services will be reviewed immediately.
        </p>
      </LegalSection>

      <LegalSection title="6. Telehealth">
        <p>
          Certain healthcare services may be provided through telehealth.
        </p>
        <p>
          Telehealth may involve electronic communications between you and a
          healthcare professional using video, audio, messaging, or other
          technologies.
        </p>
        <p>
          Availability of telehealth services may depend on your physical
          location, provider licensure, clinical appropriateness, and applicable
          law.
        </p>
        <p>
          You may be asked to confirm your identity and physical location before
          or during a telehealth encounter.
        </p>
        <p>
          Telehealth involves limitations and risks, including potential
          technical failures, interruptions, delays, or limitations on a
          provider’s ability to conduct a physical examination.
        </p>
        <p>
          Where required, additional telehealth disclosures and informed consent
          will be presented separately.
        </p>
        <p>
          You are responsible for using a reasonably private and secure
          environment when participating in telehealth services.
        </p>
      </LegalSection>

      <LegalSection title="7. Assessments and Health Information">
        <p>
          The Services may include questionnaires, assessments, screenings,
          check-ins, educational information, or similar tools.
        </p>
        <p>
          These tools may help individuals and healthcare professionals
          understand or monitor health-related information, but results should
          not be interpreted independently as a definitive medical diagnosis or
          substitute for professional clinical judgment unless expressly
          communicated by an appropriately qualified healthcare professional.
        </p>
        <p>
          If an assessment or other information suggests a potential health or
          safety concern, you should seek appropriate professional assistance.
        </p>
      </LegalSection>

      <LegalSection title="8. Artificial Intelligence and Automated Features">
        <p>
          Certain Services may use artificial intelligence, machine learning,
          automation, or similar technologies.
        </p>
        <p>
          AI-enabled functionality may provide information, navigation,
          assistance, summaries, or other supportive functionality.
        </p>
        <p>
          AI-generated information may be incomplete, inaccurate, or
          inappropriate for a particular circumstance.
        </p>
        <p>
          AI-enabled features are not healthcare professionals and should not be
          relied upon as a substitute for professional medical advice,
          diagnosis, treatment, or emergency assistance.
        </p>
        <p>
          You should seek guidance from an appropriately qualified healthcare
          professional when making healthcare decisions.
        </p>
        <p>
          LoveJoy may provide additional disclosures regarding particular
          AI-enabled functionality.
        </p>
        <p>
          Your use of AI-enabled functionality is also subject to our Privacy
          Policy and any additional notices presented when you use the
          applicable feature.
        </p>
      </LegalSection>

      <LegalSection title="9. Community and Interactive Features">
        <p>
          Certain Services may allow users to communicate, post content,
          participate in communities, or interact with other users.
        </p>
        <p>
          Information you voluntarily share in areas visible to other users may
          be seen, copied, or discussed by those users.
        </p>
        <p>
          You are responsible for deciding what information you choose to share.
        </p>
        <p>
          Community interactions are not healthcare services and should not be
          treated as professional medical advice.
        </p>
        <p>When using community or interactive features, you may not:</p>
        <LegalList
          items={[
            "Harass, threaten, intimidate, or abuse another person;",
            "Encourage violence or self-harm;",
            "Post unlawful, fraudulent, defamatory, or intentionally misleading content;",
            "Impersonate another person;",
            "Violate another person’s privacy or intellectual property rights;",
            "Post malicious software or attempt to compromise the Services;",
            "Use the community for unauthorized commercial solicitation or spam; or",
            "Otherwise violate applicable Community Guidelines.",
          ]}
        />
        <p>
          We may moderate, restrict, remove, or preserve content and may
          restrict access to community features when reasonably necessary to
          enforce our policies, protect users, maintain safety, or comply with
          law.
        </p>
      </LegalSection>

      <LegalSection title="10. Providers and Other Professionals">
        <p>
          Healthcare providers and other professionals using LoveJoy are
          responsible for maintaining all licenses, credentials, registrations,
          certifications, professional insurance, and other qualifications
          required for their activities.
        </p>
        <p>
          Providers are responsible for complying with applicable professional
          standards and laws governing their practice.
        </p>
        <p>
          LoveJoy may provide technology, administrative tools, navigation,
          scheduling, communication, documentation, billing support, or other
          services to providers. The availability of those services does not
          alter a provider’s independent responsibility for professional
          clinical judgment and patient care.
        </p>
        <p>Additional provider agreements may apply.</p>
      </LegalSection>

      <LegalSection title="11. Organizations and Referrals">
        <p>
          Healthcare organizations, community organizations, employers,
          educational institutions, referral partners, or other entities may use
          LoveJoy to facilitate referrals, navigation, coordination, engagement,
          or other services.
        </p>
        <p>A referral through LoveJoy does not guarantee:</p>
        <LegalList
          items={[
            "Acceptance by a particular provider;",
            "Availability of an appointment;",
            "Eligibility for a particular service;",
            "Insurance coverage;",
            "Payment by an insurer or healthcare program; or",
            "A particular clinical outcome.",
          ]}
        />
        <p>
          Organizations using LoveJoy may be subject to separate agreements
          governing their use of the platform, access to information, privacy
          obligations, fees, and other responsibilities.
        </p>
      </LegalSection>

      <LegalSection title="12. Appointments">
        <p>
          You are responsible for providing accurate scheduling information and
          attending scheduled appointments.
        </p>
        <p>
          Providers may establish their own policies regarding cancellations,
          missed appointments, late arrivals, and rescheduling.
        </p>
        <p>
          LoveJoy does not guarantee that any provider will be available at a
          particular date or time.
        </p>
        <p>
          Appointments may need to be changed or canceled due to provider
          availability, technical issues, clinical circumstances, emergencies,
          or other events.
        </p>
      </LegalSection>

      <LegalSection title="13. Insurance, Billing, and Payment">
        <p>
          Certain Services may be billed to you, an insurer, a government
          healthcare program, an organization, or another responsible party.
        </p>
        <p>
          Information regarding applicable fees or financial responsibility may
          be provided before or in connection with the relevant service.
        </p>
        <p>
          Insurance eligibility or benefit information provided through the
          Services is not a guarantee of coverage or payment.
        </p>
        <p>
          Health plans and other payers ultimately determine coverage, benefits,
          reimbursement, deductibles, copayments, coinsurance, and other
          financial responsibility according to the applicable plan or program.
        </p>
        <p>
          You are responsible for amounts that are properly your responsibility
          under applicable agreements and law.
        </p>
        <p>
          Additional payment or billing terms may apply to particular services.
        </p>
      </LegalSection>

      <LegalSection title="14. Electronic Communications">
        <p>
          By using the Services, you agree that LoveJoy may send electronic
          communications necessary to operate the Services or manage your
          relationship with us.
        </p>
        <p>
          These may include account notices, security alerts, appointment
          communications, referral communications, care-related notifications,
          and other transactional or operational messages.
        </p>
        <p>
          Where required by law, we will obtain appropriate consent before
          sending certain text messages, marketing communications, or other
          communications requiring separate consent.
        </p>
        <p>Message and data rates may apply.</p>
        <p>
          You may manage certain communication preferences as described in the
          applicable message or Service.
        </p>

        <Subheading>SMS Terms</Subheading>
        <p>
          LoveJoy Health may send transactional SMS messages about referrals,
          visit scheduling, appointment reminders, care coordination, and
          follow-up assessments after you or an authorized referring
          organization has provided SMS consent. Message frequency is low and
          tied to a referral or appointment. Message and data rates may apply.
          Reply STOP to opt out of SMS from LoveJoy Health. Reply HELP for
          help. We do not send marketing or promotional text messages. Consent
          to SMS is not a condition of receiving healthcare services. We do not
          sell or share your SMS opt-in data or personal information with third
          parties for marketing purposes. Additional details are in our Privacy
          Policy.
        </p>
      </LegalSection>

      <LegalSection title="15. Privacy and Health Information">
        <p>
          Your use of the Services is subject to our{" "}
          <a
            href="/privacy-policy"
            className="font-medium text-navy underline-offset-2 hover:underline"
          >
            Privacy Policy
          </a>
          .
        </p>
        <p>
          Certain health information may also be governed by an applicable{" "}
          <a
            href="/notice-of-privacy-practices"
            className="font-medium text-navy underline-offset-2 hover:underline"
          >
            Notice of Privacy Practices
          </a>{" "}
          and federal or state healthcare privacy laws.
        </p>
        <p>
          The Privacy Policy and applicable Notice of Privacy Practices explain
          how information may be collected, used, disclosed, and protected.
        </p>
        <p>
          Acceptance of these Terms does not constitute an authorization for
          uses or disclosures of protected health information when a separate
          authorization is required by law.
        </p>
      </LegalSection>

      <LegalSection title="16. Acceptable Use">
        <p>You agree not to:</p>
        <LegalList
          items={[
            "Use the Services for an unlawful purpose;",
            "Attempt to gain unauthorized access to another account, system, or information;",
            "Interfere with or disrupt the operation or security of the Services;",
            "Circumvent security or access controls;",
            "Introduce viruses, malware, or other harmful code;",
            "Scrape, crawl, harvest, or systematically extract information from the Services without authorization;",
            "Reverse engineer or attempt to derive source code except where such restriction is prohibited by law;",
            "Use automated systems to access the Services in a manner that places unreasonable demands on our systems;",
            "Misrepresent your identity or affiliation;",
            "Use another person’s account without authorization;",
            "Violate the privacy, confidentiality, intellectual property, or other rights of another person;",
            "Use the Services to engage in fraud, harassment, exploitation, or other harmful activity; or",
            "Use the Services in a manner that violates these Terms or other applicable policies.",
          ]}
        />
      </LegalSection>

      <LegalSection title="17. Intellectual Property">
        <p>
          The Services, including software, interfaces, designs, graphics, text,
          trademarks, logos, functionality, and other materials provided by
          LoveJoy, are owned by or licensed to LoveJoy Health and are protected
          by applicable intellectual property laws.
        </p>
        <p>
          Subject to these Terms, LoveJoy grants you a limited, personal,
          non-exclusive, non-transferable, revocable right to access and use the
          Services for their intended purposes.
        </p>
        <p>
          No ownership interest in the Services or LoveJoy intellectual property
          is transferred to you.
        </p>
        <p>
          “LoveJoy Health,” associated logos, and other LoveJoy marks may not be
          used without our written permission except as permitted by law.
        </p>
      </LegalSection>

      <LegalSection title="18. User Content">
        <p>
          You retain ownership of content you submit to the Services to the
          extent you have ownership rights in that content.
        </p>
        <p>
          You grant LoveJoy a limited right to host, store, process, transmit,
          reproduce, and otherwise use that content as reasonably necessary to
          provide, secure, maintain, and operate the Services and as otherwise
          permitted by our Privacy Policy, applicable healthcare privacy
          requirements, and law.
        </p>
        <p>
          You represent that you have the rights necessary to submit content you
          provide through the Services.
        </p>
        <p>
          This section does not give LoveJoy unrestricted ownership of your
          health information or medical records.
        </p>
      </LegalSection>

      <LegalSection title="19. Third-Party Services">
        <p>
          The Services may integrate with or link to products or services
          provided by third parties.
        </p>
        <p>
          LoveJoy does not control third-party services and is not responsible
          for their independent practices, availability, content, or terms.
        </p>
        <p>
          Your use of a third-party service may be subject to that provider’s
          own terms and privacy policies.
        </p>
        <p>
          Nothing in this section limits responsibilities LoveJoy may have under
          applicable healthcare privacy laws for vendors acting on our behalf.
        </p>
      </LegalSection>

      <LegalSection title="20. Availability and Changes to the Services">
        <p>
          We work to maintain reliable Services but do not guarantee
          uninterrupted or error-free availability.
        </p>
        <p>
          Services may occasionally be unavailable because of maintenance,
          upgrades, technical failures, security issues, third-party outages,
          emergencies, or circumstances beyond our reasonable control.
        </p>
        <p>
          We may modify, add, suspend, or discontinue features or Services when
          reasonably necessary, subject to contractual or legal obligations.
        </p>
        <p>
          Where appropriate, we will provide notice of material changes.
        </p>
      </LegalSection>

      <LegalSection title="21. Suspension and Termination">
        <p>
          We may suspend or restrict access to the Services when reasonably
          necessary to:
        </p>
        <LegalList
          items={[
            "Protect the security or integrity of the Services;",
            "Protect users or other persons;",
            "Investigate suspected fraud, abuse, or unlawful activity;",
            "Enforce these Terms or other applicable policies;",
            "Comply with legal or regulatory requirements; or",
            "Address material nonpayment where applicable.",
          ]}
        />
        <p>
          Where reasonably practicable, we may provide notice before terminating
          access.
        </p>
        <p>
          Termination of access to technology Services does not necessarily
          terminate an established provider-patient relationship or eliminate
          healthcare recordkeeping obligations. Continuity of care will be
          handled in accordance with applicable professional and legal
          requirements.
        </p>
      </LegalSection>

      <LegalSection title="22. Disclaimers">
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, SERVICES THAT ARE NOT
          HEALTHCARE SERVICES PROVIDED BY A LICENSED HEALTHCARE PROFESSIONAL ARE
          PROVIDED “AS IS” AND “AS AVAILABLE.”
        </p>
        <p>
          LOVEJOY DOES NOT WARRANT THAT THE TECHNOLOGY SERVICES WILL ALWAYS BE
          UNINTERRUPTED, ERROR-FREE, OR FREE FROM HARMFUL COMPONENTS.
        </p>
        <p>
          LOVEJOY DOES NOT GUARANTEE A PARTICULAR HEALTHCARE OUTCOME, PROVIDER
          AVAILABILITY, INSURANCE DETERMINATION, REFERRAL RESULT, OR RESULT FROM
          USING THE SERVICES.
        </p>
        <p>
          NOTHING IN THESE TERMS DISCLAIMS OR LIMITS RESPONSIBILITIES THAT
          CANNOT LAWFULLY BE DISCLAIMED, INCLUDING RESPONSIBILITIES ARISING FROM
          HEALTHCARE SERVICES WHERE APPLICABLE LAW DOES NOT PERMIT SUCH
          LIMITATION.
        </p>
      </LegalSection>

      <LegalSection title="23. Limitation of Liability">
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, LOVEJOY HEALTH AND
          ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS WILL NOT BE LIABLE FOR
          INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, PUNITIVE, OR CONSEQUENTIAL
          DAMAGES ARISING FROM OR RELATED TO THE TECHNOLOGY SERVICES OR THESE
          TERMS.
        </p>
        <p>
          ANY LIMITATION OF LIABILITY WILL APPLY ONLY TO THE EXTENT PERMITTED BY
          LAW.
        </p>
        <p>
          NOTHING IN THESE TERMS LIMITS LIABILITY THAT CANNOT LAWFULLY BE
          LIMITED, INCLUDING LIABILITY THAT APPLICABLE LAW REQUIRES LOVEJOY OR A
          HEALTHCARE PROFESSIONAL TO BEAR.
        </p>
        <p>
          Additional agreements with providers or organizations may contain
          separate liability provisions.
        </p>
      </LegalSection>

      <LegalSection title="24. Indemnification">
        <p>
          To the extent permitted by law, if you use the Services on behalf of a
          business or organization, that organization agrees to defend,
          indemnify, and hold harmless LoveJoy Health from third-party claims
          arising from the organization’s unlawful use of the Services,
          violation of these Terms, or violation of another person’s rights.
        </p>
        <p>
          This section does not require individual patients or consumers to
          indemnify LoveJoy for receiving healthcare services or exercising
          rights provided by law.
        </p>
      </LegalSection>

      <LegalSection title="25. Governing Law">
        <p>
          These Terms are governed by the laws of the State of Texas, without
          regard to conflict-of-law principles, except where federal law or
          another jurisdiction’s law is required to apply.
        </p>
        <p>
          Subject to applicable law and any separate written agreement, disputes
          arising from these Terms or the Services may be brought in a court of
          competent jurisdiction in Texas.
        </p>
        <p>
          Nothing in these Terms prevents a user from exercising rights or
          remedies that cannot lawfully be waived.
        </p>
      </LegalSection>

      <LegalSection title="26. Changes to These Terms">
        <p>
          We may update these Terms to reflect changes in our Services, business
          practices, technology, or applicable law.
        </p>
        <p>
          When we make changes, we will update the “Last Updated” date.
        </p>
        <p>
          If changes materially affect your rights or obligations, we may
          provide additional notice or request renewed acceptance when
          appropriate or required by law.
        </p>
        <p>
          Continued use of the Services after updated Terms become effective
          constitutes acceptance to the extent permitted by law.
        </p>
      </LegalSection>

      <LegalSection title="27. General Terms">
        <p>
          If any provision of these Terms is found unenforceable, the remaining
          provisions will remain in effect to the extent permitted by law.
        </p>
        <p>
          Our failure to enforce a provision of these Terms does not waive our
          right to enforce it later.
        </p>
        <p>
          You may not transfer your rights or obligations under these Terms
          without our consent except where applicable law provides otherwise.
        </p>
        <p>
          LoveJoy may assign these Terms in connection with a merger,
          acquisition, restructuring, financing, sale of assets, or similar
          transaction.
        </p>
        <p>
          These Terms, together with any applicable additional agreements and
          policies, constitute the agreement governing your use of the
          applicable Services.
        </p>
      </LegalSection>

      <LegalSection title="28. Contact Us">
        <p>Questions regarding these Terms may be directed to:</p>
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
      </LegalSection>
    </LegalDocument>
  );
}
