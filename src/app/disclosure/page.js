import React from "react";

export const metadata = {
  title: "Affiliate Disclosure | DailyPennyGuide",
  description:
    "Learn how Daily Debt Guide collects, uses, and protects your personal information. Read our Privacy Policy for full details.",
};

const page = () => {
  return (
    <main className="bg-white text-gray-900">
      <div className="min-h-screen max-w-5xl mx-auto px-20 py-20 bg-gray-200">
        <h3 className="font-semibold text-center text-xl" >Affiliate Disclosure</h3>
        <p className="text-justify mt-4">This website is owned and operated by Linkinon Inc, a referral and advertising service. We are not an insurance company, broker, or agent. We do not provide insurance ourselves. Instead, we connect users with a network of third-party insurance providers and comparison partners who may offer quotes based on the information you provide.

        When you click on links or submit your information on this website, Linkinon Inc may receive compensation from our advertising partners. This compensation may influence placement or order of products but does not affect the price you pay.</p>

        <h3 className="mt-10 font-semibold text-center text-xl">Scope Disclosure</h3>
        <ul className="text-justify mt-4">
            <li>
                • DailyPennyGuide represents only a limited network of insurance partners, not every provider in the marketplace.
            </li>
            <li>
                • All insurance decisions—including eligibility, pricing, underwriting, and approval—are made       exclusively by the participating providers.
            </li>
            <li>
                • This website is a paid advertisement and solicitation for insurance products, and is not a news article, blog, or consumer protection notice.
            </li>
            <li className="mb-2">
                • Savings and rates shown are not guaranteed. Actual options and pricing vary based on driving history, location, credit, coverage limits, insurer underwriting, and other personal factors.
            </li>
            By using this website, you acknowledge and agree to these disclosures.
        </ul>
      </div>


    </main>
  );
};

export default page;
