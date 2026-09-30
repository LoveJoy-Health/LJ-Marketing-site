import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import {
  LegalDocument,
  LegalList,
  LegalSection,
} from "@/components/LegalDocument";
import { SmsConsentExample } from "@/components/SmsConsentExample";

const PAGE_TITLE = "SMS Messaging & Consent";
const PAGE_DESCRIPTION =
  "Learn how LoveJoy Health obtains consent for patient SMS communications and how patients can manage text message preferences.";

export const metadata: Metadata = buildPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/sms-consent",
});

const linkClassName =
  "font-medium text-navy underline-offset-2 hover:underline";

export default function SmsConsentPage() {
  return (
    <LegalDocument
      eyebrow="Legal"
      title={PAGE_TITLE}
      description="How LoveJoy Health obtains optional SMS consent for patient care messages."
    >
      <div className="type-body mt-0 space-y-4 text-muted">
        <p>
          LoveJoy Health uses text messaging to help patients stay connected
          with their behavioral health care. Text messages may include referral
          updates, scheduling information, appointment confirmations and
          reminders, care navigation, assessment reminders, and follow-up
          related to care.
        </p>
        <p>
          This page documents LoveJoy Health’s SMS consent and opt-in process
          for patients and for carrier review. Viewing this page does not enroll
          anyone in text messages. SMS consent is separate from acceptance of
          the Privacy Policy or Terms, and it is not required to receive
          healthcare services.
        </p>
      </div>

      <LegalSection title="How patients opt in">
        <p>
          Patients may be offered the option to receive text messages from
          LoveJoy Health during the referral, scheduling, or patient intake
          process.
        </p>
        <p>
          Before SMS messages are sent, the patient provides their mobile phone
          number and affirmatively agrees to receive LoveJoy Health text
          messages.
        </p>
        <p>
          SMS consent is optional and is not required to receive LoveJoy Health
          services.
        </p>
      </LegalSection>

      <LegalSection title="Example SMS consent">
        <p>
          The following example shows the consent experience presented during
          patient intake and referral. The checkbox starts unchecked. Completing
          this example does not send a message or record consent.
        </p>
        <SmsConsentExample />
      </LegalSection>

      <LegalSection title="What messages patients may receive">
        <p>Messages may include:</p>
        <LegalList
          items={[
            "Behavioral health referral notifications",
            "Scheduling links",
            "Appointment confirmations",
            "Appointment reminders",
            "Care navigation follow-up",
            "Assessment reminders",
            "Post-visit follow-up",
          ]}
        />
        <p>
          LoveJoy Health does not use this SMS program to send marketing or
          promotional messages.
        </p>
      </LegalSection>

      <LegalSection title="Message frequency">
        <p>
          Message frequency varies based on your care activity. You may receive
          messages when you are referred to LoveJoy Health, schedule or change
          an appointment, have an upcoming appointment, need to complete an
          assessment, or receive care-navigation follow-up.
        </p>
        <p>Message and data rates may apply.</p>
      </LegalSection>

      <LegalSection title="Opting out">
        <p>
          You can stop receiving LoveJoy Health text messages at any time by
          replying STOP. After opting out, you will no longer receive messages
          through this SMS program unless you opt in again.
        </p>
      </LegalSection>

      <LegalSection title="Getting help">
        <p>
          Reply HELP to a LoveJoy Health text message for assistance. You may
          also contact LoveJoy Health through the contact information provided
          on our website.
        </p>
      </LegalSection>

      <LegalSection title="Privacy">
        <p>
          LoveJoy Health does not sell or share SMS opt-in data, consent
          records, or mobile phone numbers with third parties or affiliates for
          their marketing or promotional purposes.
        </p>
        <p>
          For more information, review our{" "}
          <a href="/privacy-policy" className={linkClassName}>
            Privacy Policy
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="SMS Terms">
        <LegalList
          items={[
            "Program name: LoveJoy Health SMS Messaging",
            "Message frequency varies.",
            "Message and data rates may apply.",
            "Reply STOP to opt out.",
            "Reply HELP for help.",
            "Carriers are not liable for delayed or undelivered messages.",
            "Participation in SMS messaging is optional and is not required to receive LoveJoy Health services.",
          ]}
        />
        <p>
          These SMS terms should be read together with our{" "}
          <a href="/terms" className={linkClassName}>
            Terms of Service
          </a>
          .
        </p>
      </LegalSection>
    </LegalDocument>
  );
}
