import type { Metadata } from "next";
import {
  LegalDocument,
  LegalList,
  LegalSection,
} from "@/components/LegalDocument";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How LoveJoy Health uses cookies and similar technologies on our website.",
};

/**
 * No dedicated Cookie Policy page exists on the live WordPress site
 * (https://lovejoy.health). Content below is adapted from the Cookies
 * section and related cookie language on https://lovejoy.health/terms/.
 */
export default function CookiePolicyPage() {
  return (
    <LegalDocument
      eyebrow="Legal"
      title="Cookie Policy"
      description="How we use cookies and similar technologies when you visit lovejoy.health."
    >
      <LegalSection title="What are cookies?">
        <p>
          Cookies are small text files stored on your device when you visit a
          website. They help sites remember preferences, keep you signed in, and
          understand how the site is used.
        </p>
      </LegalSection>

      <LegalSection title="How we use cookies">
        <p>
          If you leave a comment on our site you may opt-in to saving your name,
          email address and website in cookies. These are for your convenience
          so that you do not have to fill in your details again when you leave
          another comment. These cookies will last for one year.
        </p>
        <p>
          If you visit our login page, we will set a temporary cookie to
          determine if your browser accepts cookies. This cookie contains no
          personal data and is discarded when you close your browser. When you
          log in, we will also set up several cookies to save your login
          information and your screen display choices. Login cookies last for
          two days, and screen options cookies last for a year. If you select
          “Remember Me”, your login will persist for two weeks.
        </p>
        <p>
          If you log out of your account, the login cookies will be removed.
        </p>
        <p>
          If you edit or publish an article, an additional cookie will be saved
          in your browser. This cookie includes no personal data and simply
          indicates the post ID of the article you just edited. It expires after
          1 day.
        </p>
      </LegalSection>

      <LegalSection title="Cookies from embedded content">
        <p>
          Articles on this site may include embedded content (e.g. videos,
          images, articles, etc.). Embedded content from other websites behaves
          in the exact same way as if the visitor has visited the other website.
        </p>
        <p>
          These websites may collect data about you, use cookies, embed
          additional third-party tracking, and monitor your interaction with that
          embedded content, including tracking your interaction with the embedded
          content if you have an account and are logged in to that website.
        </p>
      </LegalSection>

      <LegalSection title="Managing cookies">
        <p>You can typically control cookies through your browser settings:</p>
        <LegalList
          items={[
            "Block or delete cookies for this site or all sites",
            "Receive a prompt before a cookie is stored",
            "Clear cookies when you close your browser",
          ]}
        />
        <p>
          Disabling certain cookies may affect site features such as staying
          signed in or remembering form details.
        </p>
      </LegalSection>

      <LegalSection title="Related policies">
        <p>
          For broader information about how we handle personal data, see our{" "}
          <a
            href="/privacy-policy"
            className="font-medium text-navy underline-offset-2 hover:underline"
          >
            Privacy Policy
          </a>{" "}
          and{" "}
          <a
            href="/terms"
            className="font-medium text-navy underline-offset-2 hover:underline"
          >
            Terms & Conditions
          </a>
          .
        </p>
      </LegalSection>
    </LegalDocument>
  );
}
