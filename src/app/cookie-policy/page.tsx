import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import {
  LegalDocument,
  LegalList,
  LegalSection,
} from "@/components/LegalDocument";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Cookie Policy",
  description:
    "How LoveJoy Health uses cookies and similar technologies on websites and web-based services that link to this policy.",
  path: "/cookie-policy",
});

function Subheading({ children }: { children: string }) {
  return <h3 className="type-card text-navy-deep">{children}</h3>;
}

export default function CookiePolicyPage() {
  return (
    <LegalDocument
      eyebrow="Legal"
      title="Cookie Policy"
      description="How we use cookies and similar technologies when you visit or use LoveJoy Health websites and web-based services."
    >
      <p className="type-eyebrow text-navy">
        Effective Date: September 24, 2026
        <br />
        Last Updated: September 24, 2026
      </p>

      <div className="type-body mt-6 space-y-4 text-muted">
        <p>
          This Cookie Policy explains how LoveJoy Health Inc. (“LoveJoy
          Health,” “LoveJoy,” “we,” “our,” or “us”) uses cookies and similar
          technologies when you visit or use websites and web-based services
          that link to this policy.
        </p>
        <p>
          This Cookie Policy should be read together with our{" "}
          <a
            href="/privacy-policy"
            className="font-medium text-navy underline-offset-2 hover:underline"
          >
            Privacy Policy
          </a>
          .
        </p>
      </div>

      <LegalSection title="1. What Are Cookies?">
        <p>
          Cookies are small files or pieces of information that websites may
          store on your browser or device.
        </p>
        <p>
          Cookies and similar technologies can help websites operate securely,
          remember preferences, maintain user sessions, understand how services
          are used, and improve performance.
        </p>
        <p>
          Similar technologies may include local storage, software development
          kits, pixels, and other technologies that perform comparable
          functions.
        </p>
      </LegalSection>

      <LegalSection title="2. How We Use Cookies">
        <p>
          Depending on the LoveJoy service you use, we may use the following
          categories of cookies and similar technologies.
        </p>

        <Subheading>Strictly Necessary Cookies</Subheading>
        <p>
          These technologies are necessary for our websites and web-based
          services to function properly.
        </p>
        <p>They may be used to:</p>
        <LegalList
          items={[
            "Authenticate users;",
            "Maintain secure sessions;",
            "Protect accounts and prevent fraud;",
            "Remember privacy or cookie preferences;",
            "Support security features; and",
            "Provide functionality requested by the user.",
          ]}
        />
        <p>
          Because these technologies are necessary to provide the Services, they
          generally cannot be disabled through our cookie controls.
        </p>

        <Subheading>Functional Cookies</Subheading>
        <p>
          Functional technologies may help remember choices and preferences to
          provide a more convenient experience.
        </p>
        <p>
          For example, they may remember certain settings or preferences between
          visits.
        </p>
        <p>
          Disabling functional cookies may affect the availability or operation
          of certain features.
        </p>

        <Subheading>Analytics and Performance Technologies</Subheading>
        <p>
          We may use analytics and performance technologies to understand how
          our public websites and Services are used, identify technical
          problems, measure performance, and improve the user experience.
        </p>
        <p>
          Where required by applicable law, non-essential analytics technologies
          will be used only after appropriate consent or choice has been
          provided.
        </p>
        <p>
          We seek to limit the information collected through analytics
          technologies and do not use analytics technologies to intentionally
          collect protected health information for advertising purposes.
        </p>

        <Subheading>Advertising and Marketing Technologies</Subheading>
        <p>
          If LoveJoy uses advertising or marketing technologies on
          public-facing websites, those technologies may help us understand the
          effectiveness of communications or campaigns.
        </p>
        <p>
          We do not use protected health information for targeted advertising.
        </p>
        <p>
          Where required by law, advertising or marketing technologies will not
          be activated without appropriate consent.
        </p>
      </LegalSection>

      <LegalSection title="3. Authenticated Healthcare Services">
        <p>
          LoveJoy provides web-based services that may involve healthcare, care
          navigation, or other sensitive information.
        </p>
        <p>
          We take additional care regarding tracking technologies used within
          authenticated healthcare experiences.
        </p>
        <p>
          We do not intentionally use third-party advertising technologies to
          disclose protected health information for targeted advertising.
        </p>
        <p>
          Technologies necessary for authentication, security, communications,
          service delivery, or other permitted operational purposes may still be
          used.
        </p>
      </LegalSection>

      <LegalSection title="4. Third-Party Technologies">
        <p>
          Some technologies used through our Services may be provided by
          companies that help us operate, secure, analyze, or improve our
          Services.
        </p>
        <p>
          These providers may process technical information according to their
          role in providing services to LoveJoy and subject to applicable
          privacy, security, and contractual requirements.
        </p>
        <p>
          Our use of third-party technologies may change as our Services and
          technology providers change.
        </p>
      </LegalSection>

      <LegalSection title="5. Your Cookie Choices">
        <p>You can control cookies in several ways.</p>
        <p>Most browsers allow you to:</p>
        <LegalList
          items={[
            "View cookies stored on your device;",
            "Delete existing cookies;",
            "Block some or all cookies;",
            "Restrict cookies from particular websites; or",
            "Receive notifications when cookies are being set.",
          ]}
        />
        <p>
          Blocking strictly necessary cookies may prevent certain parts of our
          Services from functioning correctly.
        </p>
        <p>
          Where LoveJoy provides a cookie preference tool, you may also use
          that tool to manage non-essential cookie categories.
        </p>
        <p>
          Your choices may need to be renewed if you clear your browser cookies,
          use another browser or device, or if our cookie practices materially
          change.
        </p>
      </LegalSection>

      <LegalSection title="6. Do Not Track and Browser-Based Privacy Signals">
        <p>
          Some browsers and devices provide privacy preference signals.
        </p>
        <p>
          Where applicable law requires us to recognize a legally valid
          browser-based opt-out preference signal, we will process that signal
          as required by law.
        </p>
        <p>
          Browser “Do Not Track” settings do not currently operate according to
          a single universally accepted standard.
        </p>
      </LegalSection>

      <LegalSection title="7. Changes to This Cookie Policy">
        <p>
          We may update this Cookie Policy periodically to reflect changes in
          our technology, Services, legal requirements, or privacy practices.
        </p>
        <p>
          When we update this policy, we will revise the “Last Updated” date
          above.
        </p>
        <p>
          If required by law, we will provide additional notice or obtain
          appropriate consent before materially changing how non-essential
          technologies are used.
        </p>
      </LegalSection>

      <LegalSection title="8. Contact Us">
        <p>
          If you have questions about this Cookie Policy or our privacy
          practices, contact:
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
          Website:{" "}
          <a
            href="https://lovejoy.health/"
            className="font-medium text-navy underline-offset-2 hover:underline"
          >
            lovejoy.health
          </a>
        </p>
        <p>
          For additional information about how LoveJoy Health collects, uses,
          discloses, and protects personal information, please review our{" "}
          <a
            href="/privacy-policy"
            className="font-medium text-navy underline-offset-2 hover:underline"
          >
            Privacy Policy
          </a>
          .
        </p>
      </LegalSection>
    </LegalDocument>
  );
}
