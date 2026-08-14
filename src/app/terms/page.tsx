import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import {
  LegalDocument,
  LegalSection,
} from "@/components/LegalDocument";

export const metadata: Metadata = buildPageMetadata({
  title: "Terms & Conditions",
  description:
    "Terms and conditions for using the LoveJoy Health website and related services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalDocument
      eyebrow="Legal"
      title="Terms & Conditions"
      description="Information about how this website handles comments, media, cookies, and related visitor data."
    >
      {/* Adapted from https://lovejoy.health/terms/ (live WordPress). */}
      <LegalSection title="Comments">
        <p>
          When visitors leave comments on the site we collect the data shown in
          the comments form, and also the visitor’s IP address and browser user
          agent string to help spam detection. An anonymized string created from
          your email address (also called a hash) may be provided to the Gravatar
          service to see if you are using it. The Gravatar service privacy policy
          is available at{" "}
          <a
            href="https://automattic.com/privacy/"
            className="font-medium text-navy underline-offset-2 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            automattic.com/privacy
          </a>
          . After approval of your comment, your profile picture is visible to
          the public in the context of your comment.
        </p>
      </LegalSection>

      <LegalSection title="Media">
        <p>
          If you upload images to the website, you should avoid uploading images
          with embedded location data (EXIF GPS) included. Visitors to the
          website can download and extract any location data from images on the
          website.
        </p>
      </LegalSection>

      <LegalSection title="Cookies">
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
        <p>
          For a dedicated summary of cookie use on this site, see our{" "}
          <a
            href="/cookie-policy"
            className="font-medium text-navy underline-offset-2 hover:underline"
          >
            Cookie Policy
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="Embedded content from other websites">
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

      <LegalSection title="Who we share your data with">
        <p>
          If you request a password reset, your IP address will be included in
          the reset email.
        </p>
      </LegalSection>

      <LegalSection title="How long we retain your data">
        <p>
          If you leave a comment, the comment and its metadata are retained
          indefinitely. This is so we can recognize and approve any follow-up
          comments automatically instead of holding them in a moderation queue.
        </p>
        <p>
          For users that register on our website (if any), we also store the
          personal information they provide in their user profile. All users can
          see, edit, or delete their personal information at any time (except
          they cannot change their username). Website administrators can also see
          and edit that information.
        </p>
      </LegalSection>

      <LegalSection title="What rights you have over your data">
        <p>
          If you have an account on this site, or have left comments, you can
          request to receive an exported file of the personal data we hold about
          you, including any data you have provided to us. You can also request
          that we erase any personal data we hold about you. This does not include
          any data we are obliged to keep for administrative, legal, or security
          purposes.
        </p>
      </LegalSection>

      <LegalSection title="Where your data is sent">
        <p>
          Visitor comments may be checked through an automated spam detection
          service.
        </p>
      </LegalSection>
    </LegalDocument>
  );
}
