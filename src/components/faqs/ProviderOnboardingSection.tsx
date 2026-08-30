import { BeforeYouStart } from "@/components/faqs/BeforeYouStart";
import { OnboardingStep } from "@/components/faqs/OnboardingStep";
import { ProviderCTA } from "@/components/faqs/ProviderCTA";
import { ScreenshotPanel } from "@/components/faqs/ScreenshotPanel";
import {
  AFTER_SUBMIT_PROGRESS,
  ONBOARDING_GUIDE_STEPS,
  PROVIDER_PORTAL_SECTIONS,
} from "@/lib/providerOnboardingGuide";

export function ProviderOnboardingSection() {
  return (
    <div id="provider-onboarding" className="scroll-mt-28 space-y-8">
      <ProviderCTA
        title="How to Join LoveJoy Health as a Provider"
        description="Complete your provider application online in approximately 8–10 minutes. This guide explains what you should have ready, every step of the application, and what happens after you submit."
      />

      <BeforeYouStart />

      <div className="space-y-6">
        <div>
          <h2 className="font-display text-3xl tracking-tight text-navy-deep md:text-4xl">
            Provider application walkthrough
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
            These screens match the current LoveJoy provider signup. Open a step
            if you want the field list or a closer look at the screen.
          </p>
        </div>
        {ONBOARDING_GUIDE_STEPS.map((step) => (
          <OnboardingStep key={step.id} step={step} />
        ))}
      </div>

      <section
        id="missing-documents"
        className="scroll-mt-28 grid items-start gap-8 rounded-[1.75rem] bg-white p-6 shadow-[0_10px_32px_rgba(2,24,72,0.08)] ring-1 ring-black/[0.04] md:p-8 lg:grid-cols-2"
      >
        <div>
          <h2 className="font-display text-2xl tracking-tight text-navy-deep md:text-3xl">
            What if I don’t have all my documents yet?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
            You can continue signup and return later to upload outstanding
            documents from your provider profile.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
            However, your account will not be approved until all required
            documentation has been submitted and reviewed.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-[#ecfdf3] px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#047857]">
                Continue signup
              </p>
              <p className="mt-1 text-sm text-navy-deep">Allowed</p>
            </div>
            <div className="rounded-2xl bg-[#eef3ff] px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-navy">
                Provider approval
              </p>
              <p className="mt-1 text-sm text-navy-deep">
                Not available until required documents are complete
              </p>
            </div>
          </div>
        </div>
        <ScreenshotPanel
          images={[
            {
              src: "/images/faqs/step-8-documents-needed.png",
              alt: "LoveJoy Health provider signup modal explaining documentation is still needed but signup can continue",
            },
          ]}
        />
      </section>

      <section
        id="submit-application"
        className="scroll-mt-28 grid items-start gap-8 rounded-[1.75rem] bg-white p-6 shadow-[0_10px_32px_rgba(2,24,72,0.08)] ring-1 ring-black/[0.04] md:p-8 lg:grid-cols-2"
      >
        <div>
          <h2 className="font-display text-2xl tracking-tight text-navy-deep md:text-3xl">
            Submit Your Provider Application
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
            Once you have completed the application and accepted the required
            agreements, select Submit Application.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
            Submitting your application sends your information to LoveJoy Health
            for review.
          </p>
          <p className="mt-5 rounded-2xl bg-navy-soft px-4 py-3 text-sm leading-relaxed text-navy-deep">
            Submission does not mean that your provider account has been approved
            or activated.
          </p>
        </div>
        <ScreenshotPanel
          images={[
            {
              src: "/images/faqs/step-8-documents.png",
              alt: "LoveJoy Health provider signup Step 8 showing the Submit Application button after documents and agreements",
            },
          ]}
        />
      </section>

      <section
        id="after-you-submit"
        className="scroll-mt-28 grid items-start gap-8 rounded-[1.75rem] bg-white p-6 shadow-[0_10px_32px_rgba(2,24,72,0.08)] ring-1 ring-black/[0.04] md:p-8 lg:grid-cols-2"
      >
        <div>
          <h2 className="font-display text-2xl tracking-tight text-navy-deep md:text-3xl">
            What Happens After You Submit?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
            After submission, you will be taken to your onboarding status page.
          </p>
          <ul className="mt-5 space-y-2">
            {AFTER_SUBMIT_PROGRESS.map((item) => (
              <li
                key={item.label}
                className="flex items-center justify-between gap-3 rounded-xl bg-[#f8fbff] px-3 py-2.5 text-sm"
              >
                <span className="font-medium text-navy-deep">{item.label}</span>
                <span className="text-xs font-semibold uppercase tracking-[0.06em] text-muted">
                  {item.state}
                </span>
              </li>
            ))}
          </ul>
          <ul className="mt-5 space-y-2 text-sm leading-relaxed text-muted">
            <li>
              While your application is being reviewed, clinical modules in the
              provider portal remain locked.
            </li>
            <li>
              You can return to the onboarding page at any time to check your
              status.
            </li>
            <li>
              LoveJoy may contact you if additional documents, information, or
              credentialing steps are needed.
            </li>
            <li>
              When review is successfully completed, your provider portal can be
              activated.
            </li>
          </ul>
        </div>
        <ScreenshotPanel
          images={[
            {
              src: "/images/faqs/after-submit-status.png",
              alt: "LoveJoy Health provider portal onboarding status page showing an application under review",
            },
          ]}
        />
      </section>

      <section
        id="after-approval"
        className="scroll-mt-28 rounded-[1.75rem] bg-white p-6 shadow-[0_10px_32px_rgba(2,24,72,0.08)] ring-1 ring-black/[0.04] md:p-8"
      >
        <h2 className="font-display text-2xl tracking-tight text-navy-deep md:text-3xl">
          What becomes available after approval?
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted md:text-base">
          Once your provider account is approved and activated, the appropriate
          clinical and account areas of the LoveJoy Provider Portal become
          available based on your role and permissions. Access can depend on
          role, organization, configuration, and permissions.
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {PROVIDER_PORTAL_SECTIONS.map((section) => (
            <li
              key={section}
              className="rounded-full border border-border bg-[#f8fbff] px-3 py-1 text-xs font-medium text-navy-deep"
            >
              {section}
            </li>
          ))}
        </ul>
      </section>

      <ProviderCTA
        title="Ready to join LoveJoy?"
        description="Complete your provider application and take the first step toward delivering connected behavioral healthcare through LoveJoy Health."
        support
      />
    </div>
  );
}
