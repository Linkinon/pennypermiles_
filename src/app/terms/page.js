import React from "react";

export default function Terms() {
  return (
    <main className="min-h-screen bg-white px-6 py-12">
      <div className="mx-auto max-w-4xl text-gray-800">

        {/* Title */}
        <h1 className="mb-2 text-3xl font-bold text-gray-900">
          Terms of Use
        </h1>

        <p className="mb-6 text-sm text-gray-600">
          Last Updated: <span className="font-medium">01-16-2026</span>
        </p>

        {/* Intro */}
        <p className="mb-6 text-sm leading-relaxed">
          Welcome to <strong>pennypermiles.com</strong> (“Website”). The Website
          is owned and operated by <strong>Linkinon Inc.</strong>, located at
          1007 N Orange St. 4th Floor Ste 1382, Wilmington, Delaware 19801,
          United States.
        </p>

        <p className="mb-8 text-sm leading-relaxed">
          By accessing or using this Website, you acknowledge that you have
          read, understood, and agree to be bound by these Terms of Use and our
          Privacy Policy. If you do not agree, please stop using the Website
          immediately.
        </p>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="mb-2 text-lg font-semibold">1. Eligibility</h2>
          <p className="text-sm leading-relaxed">
            Access to this Website is strictly limited to individuals 18 years
            of age or older. By using this Website, you confirm that you meet
            this requirement.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="mb-2 text-lg font-semibold">2. Scope of Service</h2>
          <p className="mb-3 text-sm leading-relaxed">
            Dailypennyguide.com is an information and referral website. We:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-sm">
            <li>Do not provide financial, insurance, legal, or professional advice.</li>
            <li>Do not offer or sell products directly.</li>
            <li>May refer users to third-party providers, advertisers, or service partners.</li>
            <li>
              All information on this site is general and should not be taken
              as personal advice.
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-8">
          <h2 className="mb-2 text-lg font-semibold">3. Affiliate Disclosure</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
            <li>
              We may receive compensation when users click links or complete
              actions on partner websites.
            </li>
            <li>We do not represent all providers in any category.</li>
            <li>
              We do not guarantee availability, suitability, or results from
              any third-party service.
            </li>
            <li>
              This Website is a paid advertisement / referral website, not a
              news article, consumer report, or advisory publication.
            </li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="mb-8">
          <h2 className="mb-2 text-lg font-semibold">4. User Responsibilities</h2>
          <p className="mb-3 text-sm">You agree not to:</p>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
            <li>Use the Website for unlawful purposes.</li>
            <li>Copy, reuse, or distribute any content without written permission.</li>
            <li>Attempt to interfere with the Website’s functionality.</li>
            <li>Use automated tools (bots, scrapers, crawlers) without authorization.</li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="mb-8">
          <h2 className="mb-2 text-lg font-semibold">5. Intellectual Property</h2>
          <p className="text-sm leading-relaxed">
            All content on this Website, including but not limited to text,
            layout, logos, graphics, and design, is the property of Linkinon
            Inc. or licensed partners. Unauthorized copying, distribution, or
            commercial use is strictly prohibited. Violation of our intellectual
            property rights may result in legal action and financial penalties
            (including liquidated damages).
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-8">
          <h2 className="mb-2 text-lg font-semibold">6. Third-Party Links</h2>
          <p className="mb-3 text-sm leading-relaxed">
            The Website contains links to third-party websites. We:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
            <li>Do not control these external pages.</li>
            <li>Are not responsible for their content, policies, or practices.</li>
            <li>Encourage you to review their terms.</li>
          </ul>
          <p className="mt-2 text-sm leading-relaxed">
            Your interactions with third-party websites are solely between you
            and the provider.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-8">
          <h2 className="mb-2 text-lg font-semibold">7. Changes to the Terms</h2>
          <p className="text-sm leading-relaxed">
            Linkinon Inc. reserves the right to update or modify these Terms at
            any time without prior notice. Continued use of the Website
            constitutes acceptance of the updated Terms.
          </p>
        </section>

        {/* Section 8 */}
        <section className="mb-8">
          <h2 className="mb-2 text-lg font-semibold">8. Limitation of Liability</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
            <li>The Website is provided “as is” without warranties of any kind.</li>
            <li>
              We are not liable for direct, indirect, incidental, or
              consequential damages.
            </li>
            <li>
              We do not guarantee uninterrupted or error-free operation.
            </li>
          </ul>
        </section>

        {/* Section 9 */}
        <section>
          <h2 className="mb-2 text-lg font-semibold">9. Contact Information</h2>
          <p className="text-sm leading-relaxed">
            For questions about these Terms of Use:
          </p>
          <p className="mt-2 text-sm">
            Email:{" "}
            <a
              href="mailto:adops@linkinon.com"
              className="text-blue-700 hover:underline">contact@pennypermiles.com
            </a>
          </p>
          <p className="text-sm leading-relaxed">
            Address: 1007 N Orange St. 4th Floor Ste 1382, Wilmington, Delaware
            19801, United States.
          </p>
        </section>

      </div>
    </main>
  );
}
