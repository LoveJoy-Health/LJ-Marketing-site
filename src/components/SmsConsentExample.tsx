"use client";

import { useState } from "react";

const SMS_CONSENT_DISCLOSURE =
  "I agree to receive text messages from LoveJoy Health regarding my behavioral health referral, scheduling, appointment reminders, care navigation, assessments, and follow-up. Message frequency varies based on your care activity. Message and data rates may apply. Reply STOP to opt out or HELP for help. Consent to receive text messages is not required to receive LoveJoy Health services.";

const linkClassName =
  "font-medium text-navy underline-offset-2 hover:underline";

export function SmsConsentExample() {
  const [consented, setConsented] = useState(false);

  return (
    <figure className="rounded-2xl border border-border bg-white p-5 shadow-sm md:p-6">
      <form
        noValidate
        autoComplete="off"
        onSubmit={(event) => event.preventDefault()}
        className="space-y-5"
        aria-describedby="sms-consent-example-caption"
      >
        <p className="type-eyebrow text-navy">Illustrative example</p>
        <div>
          <label
            htmlFor="sms-consent-example-phone"
            className="block text-sm font-semibold text-navy-deep"
          >
            Mobile phone number
          </label>
          <input
            id="sms-consent-example-phone"
            type="tel"
            inputMode="tel"
            defaultValue="(555) 555-5555"
            autoComplete="off"
            spellCheck={false}
            aria-describedby="sms-consent-example-caption"
            className="mt-2 w-full rounded-xl border border-border bg-white px-3.5 py-3 text-base text-navy-deep outline-none ring-navy/20 placeholder:text-muted focus:border-navy focus:ring-2"
          />
        </div>

        <div className="flex items-start gap-3">
          <input
            id="sms-consent-example"
            type="checkbox"
            checked={consented}
            onChange={(event) => setConsented(event.target.checked)}
            className="mt-1 h-4 w-4 shrink-0 rounded border-border accent-navy focus:outline-none focus:ring-2 focus:ring-navy/30"
          />
          <label
            htmlFor="sms-consent-example"
            className="type-body-sm text-muted"
          >
            {SMS_CONSENT_DISCLOSURE}
          </label>
        </div>

        <p className="type-body-sm text-muted">
          <a href="/privacy-policy" className={linkClassName}>
            Privacy Policy
          </a>
          <span className="mx-2 text-border" aria-hidden>
            ·
          </span>
          <a href="/terms" className={linkClassName}>
            Terms of Service
          </a>
        </p>

        <button
          type="button"
          className="type-button inline-flex items-center rounded-full bg-navy px-6 py-3 text-white transition hover:bg-navy-deep"
        >
          Continue
        </button>
      </form>
      <figcaption
        id="sms-consent-example-caption"
        className="type-body-sm mt-4 text-muted"
      >
        Example of the SMS consent presented during the LoveJoy Health patient
        intake and referral experience.
      </figcaption>
    </figure>
  );
}
