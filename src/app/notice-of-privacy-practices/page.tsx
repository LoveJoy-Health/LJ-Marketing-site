import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import {
  LegalDocument,
  LegalList,
  LegalSection,
} from "@/components/LegalDocument";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Notice of Privacy Practices",
  description:
    "HIPAA Notice of Privacy Practices describing how LoveJoy Health may use and disclose protected health information and your rights regarding that information.",
  path: "/notice-of-privacy-practices",
});

function Subheading({ children }: { children: string }) {
  return <h3 className="type-card text-navy-deep">{children}</h3>;
}

export default function NoticeOfPrivacyPracticesPage() {
  return (
    <LegalDocument
      eyebrow="Legal"
      title="Notice of Privacy Practices"
      description="Your Information. Your Rights. Our Responsibilities."
    >
      <p className="type-eyebrow text-navy">
        Effective Date: September 24, 2026
      </p>

      <div className="type-body mt-6 space-y-4 text-muted">
        <p className="font-semibold uppercase tracking-wide text-navy-deep">
          This notice describes how medical information about you may be used
          and disclosed and how you can get access to this information. Please
          review it carefully.
        </p>
        <p>
          This Notice of Privacy Practices (“Notice”) describes how LoveJoy
          Health Inc. (“LoveJoy Health,” “LoveJoy,” “we,” “our,” or “us”) may
          use and disclose your protected health information (“PHI”) and
          describes your rights regarding that information.
        </p>
        <p>
          This Notice applies to healthcare services provided by LoveJoy Health
          that are subject to the Health Insurance Portability and
          Accountability Act of 1996 (“HIPAA”).
        </p>
      </div>

      <LegalSection title="Your Rights">
        <p>When it comes to your health information, you have certain rights.</p>

        <Subheading>Get an electronic or paper copy of your medical record</Subheading>
        <p>
          You may ask to see or obtain an electronic or paper copy of your
          medical record and other health information we maintain about you.
        </p>
        <p>
          We will provide a copy or summary of your health information, usually
          within 30 days of your request, as required by law.
        </p>
        <p>
          We may charge a reasonable, cost-based fee where permitted by law.
        </p>

        <Subheading>Ask us to correct your medical record</Subheading>
        <p>
          You may ask us to correct health information that you believe is
          incorrect or incomplete.
        </p>
        <p>
          We may deny your request in certain circumstances, but if we do, we
          will explain why in writing as required by law.
        </p>

        <Subheading>Request confidential communications</Subheading>
        <p>
          You may ask us to contact you in a specific way or at a specific
          location.
        </p>
        <p>
          For example, you may ask us to contact you only through a particular
          telephone number, email address, or mailing address.
        </p>
        <p>We will accommodate reasonable requests as required by law.</p>

        <Subheading>Ask us to limit what we use or share</Subheading>
        <p>
          You may ask us not to use or disclose certain health information for
          treatment, payment, or healthcare operations.
        </p>
        <p>We are generally not required to agree to your request.</p>
        <p>
          If you pay for a healthcare service or item completely out of pocket,
          you may ask us not to disclose information about that service or item
          to your health plan for payment or healthcare operations. We will
          honor that request unless a law requires us to disclose the
          information.
        </p>

        <Subheading>Get a list of certain disclosures</Subheading>
        <p>
          You may request an accounting of certain disclosures of your health
          information made during the six years before the date of your request.
        </p>
        <p>
          The accounting will not include certain disclosures, such as many
          disclosures made for treatment, payment, healthcare operations, or
          disclosures you specifically authorized.
        </p>
        <p>
          We will provide one accounting during any 12-month period without
          charge. We may charge a reasonable, cost-based fee for additional
          requests within the same 12-month period.
        </p>

        <Subheading>Get a copy of this Notice</Subheading>
        <p>
          You may request a paper copy of this Notice at any time, even if you
          previously agreed to receive it electronically.
        </p>
        <p>
          You can also obtain the current Notice through the LoveJoy Health
          website.
        </p>

        <Subheading>Choose someone to act for you</Subheading>
        <p>
          If you have given someone medical power of attorney or if someone is
          your legal guardian or otherwise legally authorized to act for you,
          that person may exercise your rights and make choices regarding your
          health information as permitted by law.
        </p>
        <p>
          We may verify that the person has appropriate authority before taking
          action.
        </p>

        <Subheading>File a complaint if you believe your rights were violated</Subheading>
        <p>
          You may complain if you believe LoveJoy Health has violated your
          privacy rights.
        </p>
        <p>
          You may contact LoveJoy Health using the information at the end of
          this Notice.
        </p>
        <p>
          You may also file a complaint with the U.S. Department of Health and
          Human Services, Office for Civil Rights.
        </p>
        <p>
          <strong className="text-navy-deep">
            We will not retaliate against you for filing a complaint.
          </strong>
        </p>
      </LegalSection>

      <LegalSection title="Your Choices">
        <p>
          For certain health information, you may tell us your preferences about
          what we disclose.
        </p>

        <Subheading>Family, friends, and others involved in your care</Subheading>
        <p>
          You may tell us whether we may disclose relevant health information to
          family members, friends, caregivers, or other persons involved in
          your care or payment for your care.
        </p>
        <p>
          If you are unable to tell us your preference, such as during an
          emergency, we may disclose information when we determine that doing so
          is in your best interest and is permitted by law.
        </p>

        <Subheading>Disaster relief</Subheading>
        <p>
          We may disclose information to organizations assisting in
          disaster-relief efforts when permitted by law.
        </p>
        <p>You may tell us your preferences where circumstances allow.</p>

        <Subheading>Mental health information</Subheading>
        <p>
          Certain mental health information may receive additional protection
          under federal or state law.
        </p>
        <p>
          When a separate authorization or consent is legally required before we
          disclose particular mental health information, we will obtain it
          before making the disclosure unless another law permits or requires
          the disclosure.
        </p>

        <Subheading>Marketing</Subheading>
        <p>
          We generally must obtain your written authorization before using or
          disclosing your PHI for marketing when HIPAA requires authorization.
        </p>

        <Subheading>Sale of health information</Subheading>
        <p>LoveJoy Health does not sell your PHI.</p>
        <p>
          If a proposed disclosure would constitute a sale of PHI under HIPAA,
          we would obtain your written authorization as required by law.
        </p>
      </LegalSection>

      <LegalSection title="How We May Use and Disclose Your Health Information">
        <p>
          HIPAA permits or requires us to use and disclose health information in
          certain circumstances.
        </p>

        <Subheading>Treatment</Subheading>
        <p>
          We may use and disclose your health information to provide,
          coordinate, or manage your healthcare.
        </p>
        <p>
          For example, a healthcare professional treating you may disclose
          relevant information to another provider involved in your care.
        </p>
        <p>
          We may also use information to support referrals, care coordination,
          care navigation, follow-up, and communication among authorized
          members of your care team.
        </p>

        <Subheading>Payment</Subheading>
        <p>
          We may use and disclose your health information to bill and obtain
          payment for healthcare services.
        </p>
        <p>
          For example, we may provide information to Medicare, Medicaid, a
          health plan, or another payer so that it can determine eligibility,
          coverage, or payment for services.
        </p>

        <Subheading>Healthcare operations</Subheading>
        <p>
          We may use and disclose health information to operate and improve our
          healthcare activities.
        </p>
        <p>For example, we may use information for:</p>
        <LegalList
          items={[
            "Quality assessment and improvement;",
            "Care coordination;",
            "Patient safety activities;",
            "Credentialing and professional review;",
            "Training;",
            "Compliance activities;",
            "Auditing;",
            "Business planning;",
            "Healthcare analytics; and",
            "Other healthcare operations permitted by law.",
          ]}
        />

        <Subheading>Business associates</Subheading>
        <p>
          We may disclose health information to companies and individuals that
          perform services on our behalf and require access to PHI.
        </p>
        <p>These organizations are known as business associates.</p>
        <p>
          When required by HIPAA, we enter into agreements requiring business
          associates to appropriately safeguard PHI and use it only as permitted
          by law and their agreements with us.
        </p>

        <Subheading>Public health and safety</Subheading>
        <p>
          We may disclose health information for certain public health and
          safety activities permitted or required by law.
        </p>
        <p>These may include:</p>
        <LegalList
          items={[
            "Preventing or controlling disease;",
            "Reporting suspected abuse, neglect, or domestic violence where required or permitted;",
            "Reporting adverse reactions to medications or products;",
            "Preventing or reducing a serious and imminent threat to health or safety; and",
            "Other authorized public health activities.",
          ]}
        />

        <Subheading>Research</Subheading>
        <p>
          We may use or disclose health information for research when permitted
          by law.
        </p>
        <p>
          Research involving identifiable health information generally requires
          your authorization or another legally permitted approval or waiver.
        </p>

        <Subheading>Comply with the law</Subheading>
        <p>
          We will disclose health information when federal or state law requires
          us to do so.
        </p>

        <Subheading>Health oversight</Subheading>
        <p>
          We may disclose health information to health oversight agencies for
          activities authorized by law, such as audits, investigations,
          inspections, licensing activities, or government healthcare program
          oversight.
        </p>

        <Subheading>Judicial and administrative proceedings</Subheading>
        <p>
          We may disclose health information in response to a valid court or
          administrative order or in response to certain subpoenas, discovery
          requests, or other lawful processes when the requirements of
          applicable law have been satisfied.
        </p>

        <Subheading>Law enforcement</Subheading>
        <p>
          We may disclose health information for certain law-enforcement
          purposes when permitted or required by law.
        </p>

        <Subheading>Coroners, medical examiners, and funeral directors</Subheading>
        <p>
          We may disclose health information to coroners, medical examiners, or
          funeral directors when permitted or required by law.
        </p>

        <Subheading>Workers’ compensation</Subheading>
        <p>
          We may disclose health information as authorized by and to the extent
          necessary to comply with workers’ compensation or similar programs.
        </p>

        <Subheading>Government functions</Subheading>
        <p>
          We may disclose health information for certain specialized government
          functions when authorized by law, including certain military, national
          security, protective service, and correctional activities.
        </p>
      </LegalSection>

      <LegalSection title="Substance Use Disorder Records">
        <p>
          LoveJoy Health’s principal services are behavioral healthcare,
          including mental health assessment, treatment, care navigation, and
          related services. This Notice does not mean that LoveJoy Health
          operates a federally assisted substance use disorder program under 42
          CFR Part 2.
        </p>
        <p>
          Federal law provides additional confidentiality protections for
          certain records relating to substance use disorder treatment that are
          maintained by programs subject to 42 CFR Part 2.
        </p>
        <p>
          If LoveJoy Health maintains or receives records that are protected by
          42 CFR Part 2, those records will be used and disclosed in accordance
          with applicable Part 2 requirements.
        </p>
        <p>
          Part 2 records generally receive protections in addition to HIPAA
          protections, and certain uses and disclosures may require your consent
          or other legal authority.
        </p>
        <p>
          Records protected by Part 2, or testimony describing information
          contained in those records, may not be used or disclosed in civil,
          criminal, administrative, or legislative proceedings against an
          individual except as permitted by applicable federal law.
        </p>
        <p>
          Where applicable, you may provide consent for certain uses and
          disclosures of Part 2 records for treatment, payment, and healthcare
          operations as permitted by law.
        </p>
        <p>
          LoveJoy Health will comply with applicable federal requirements
          governing redisclosure and use of Part 2 records.
        </p>
      </LegalSection>

      <LegalSection title="Fundraising">
        <p>
          If LoveJoy Health engages in fundraising activities permitted under
          HIPAA and contacts you using information permitted for that purpose,
          you may tell us not to contact you again for fundraising.
        </p>
        <p>We will honor your choice as required by law.</p>
      </LegalSection>

      <LegalSection title="Uses and Disclosures Requiring Authorization">
        <p>
          Certain uses and disclosures of your health information require your
          written authorization.
        </p>
        <p>These may include uses and disclosures involving:</p>
        <LegalList
          items={[
            "Certain marketing activities;",
            "A sale of PHI;",
            "Certain psychotherapy notes; and",
            "Other uses or disclosures for which HIPAA or another applicable law requires authorization.",
          ]}
        />
        <p>
          If you give us written authorization, you may revoke it in writing at
          any time, except to the extent we have already acted in reliance on
          the authorization or where otherwise provided by law.
        </p>
        <p>
          We will not use or disclose your PHI for purposes not described in
          this Notice unless you authorize us or the use or disclosure is
          otherwise permitted or required by law.
        </p>
      </LegalSection>

      <LegalSection title="Additional Protections">
        <p>
          Some types of health information may receive greater protection under
          state or federal law.
        </p>
        <p>This may include certain information relating to:</p>
        <LegalList
          items={[
            "Mental and behavioral health;",
            "Substance use disorder treatment;",
            "HIV or other communicable diseases;",
            "Genetic information;",
            "Minors; and",
            "Other specially protected healthcare information.",
          ]}
        />
        <p>
          When another applicable law provides greater privacy protection than
          HIPAA, we will follow the more protective requirement where required.
        </p>
      </LegalSection>

      <LegalSection title="Our Responsibilities">
        <p>LoveJoy Health is required by law to:</p>
        <LegalList
          items={[
            "Maintain the privacy and security of your PHI;",
            "Provide you with this Notice describing our legal duties and privacy practices;",
            "Follow the duties and privacy practices described in the Notice currently in effect; and",
            "Notify you following a breach of unsecured PHI when notification is required by law.",
          ]}
        />
        <p>
          We will not use or disclose your PHI other than as described in this
          Notice unless you provide written authorization or another use or
          disclosure is permitted or required by law.
        </p>
        <p>
          If you provide authorization, you may revoke it as permitted by law.
        </p>
      </LegalSection>

      <LegalSection title="Electronic Health Information">
        <p>
          LoveJoy Health may maintain health information electronically and may
          provide access to certain health information through electronic
          services.
        </p>
        <p>
          You may request access to health information in an electronic form
          when required by law and when the information is readily producible in
          that form.
        </p>
        <p>
          Electronic communications may also be used in connection with
          healthcare services, care coordination, appointments, and other
          healthcare activities.
        </p>
      </LegalSection>

      <LegalSection title="Changes to This Notice">
        <p>We may change the terms of this Notice.</p>
        <p>
          Changes may apply to all PHI we maintain, including information
          created or received before the change.
        </p>
        <p>
          When we materially change this Notice, we will make the revised Notice
          available as required by law and update its effective date.
        </p>
        <p>
          The current Notice will be available on our website and upon request.
        </p>
      </LegalSection>

      <LegalSection title="Questions or Complaints">
        <p>
          If you have questions about this Notice, want to exercise your privacy
          rights, or believe your privacy rights have been violated, contact:
        </p>
        <p>
          <strong className="text-navy-deep">Privacy Officer</strong>
          <br />
          LoveJoy Health Inc.
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
        <p>You may also file a complaint with:</p>
        <p>
          <strong className="text-navy-deep">
            U.S. Department of Health and Human Services
          </strong>
          <br />
          <strong className="text-navy-deep">Office for Civil Rights</strong>
        </p>
        <p>
          Information about filing a HIPAA complaint is available through the{" "}
          <a
            href="https://www.hhs.gov/hipaa/filing-a-complaint/index.html"
            className="font-medium text-navy underline-offset-2 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            HHS Office for Civil Rights
          </a>
          .
        </p>
        <p>
          <strong className="text-navy-deep">
            LoveJoy Health will not retaliate against you for exercising your
            privacy rights or filing a complaint.
          </strong>
        </p>
      </LegalSection>
    </LegalDocument>
  );
}
