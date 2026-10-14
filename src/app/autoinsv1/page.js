"use client";

import { useState } from "react";

const CheckIcon = ({ className = "h-4 w-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle
      cx="12"
      cy="12"
      r="8.5"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="m8.5 12 2.2 2.2 4.8-5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ShieldIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 3 19 6v5.4c0 4.5-2.7 7.3-7 9.6-4.3-2.3-7-5.1-7-9.6V6l7-3Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path
      d="m9 12 2 2 4-4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LockIcon = ({ className = "h-3.5 w-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
    <rect
      x="6.5"
      y="10"
      width="11"
      height="8.5"
      rx="2"
      strokeWidth="1.8"
    />
    <path
      d="M9 10V7.8a3 3 0 0 1 6 0V10"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const BundleIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <rect
      x="5"
      y="9"
      width="6"
      height="9"
      rx="1.5"
      strokeWidth="1.8"
    />
    <rect
      x="13"
      y="5"
      width="6"
      height="13"
      rx="1.5"
      strokeWidth="1.8"
    />
    <path
      d="M7.5 9V6.8A1.8 1.8 0 0 1 9.3 5H13"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const CarsIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path
      d="m3.5 15 1.4-4.2A2 2 0 0 1 6.8 9.5h3.8a2 2 0 0 1 1.9 1.3L14 15"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
    <path
      d="M3 15h11v3H3z"
      strokeWidth="1.7"
    />
    <circle cx="5.5" cy="18" r="1.1" fill="currentColor" />
    <circle cx="11.5" cy="18" r="1.1" fill="currentColor" />
    <path
      d="m13.5 12.5.8-2.3a1.6 1.6 0 0 1 1.5-1.1h2.8a1.6 1.6 0 0 1 1.5 1.1l.9 2.8"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M15.2 13h5.6v2.7h-5.1"
      strokeWidth="1.5"
    />
  </svg>
);

const CardIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <rect
      x="4"
      y="6"
      width="16"
      height="12"
      rx="2"
      strokeWidth="1.8"
    />
    <path
      d="M4 10h16M8 14h4"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const ClockIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <circle
      cx="12"
      cy="12"
      r="8"
      strokeWidth="1.8"
    />
    <path
      d="M12 8v4.3l2.8 1.7"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const faqs = [
  {
    q: "Am I required to buy a policy?",
    a: "No. You can compare available options without being required to purchase a policy.",
  },
  {
    q: "What information do you collect on this page?",
    a: "This page may collect the details you choose to provide so matching partners can show relevant insurance options.",
  },
  {
    q: "Are you an insurance company?",
    a: "No. ClearLane is an independent marketing website and is not an insurance company, agent, or broker.",
  },
  {
    q: "Why can rates differ between providers?",
    a: "Providers use different rating methods and may weigh factors such as location, vehicle, driving profile, and coverage differently.",
  },
  {
    q: "Will the price I see be my final rate?",
    a: "Not necessarily. Final pricing depends on the provider, your submitted details, eligibility, selected coverage, and underwriting.",
  },
];

export default function Page() {
  const [openFaq, setOpenFaq] = useState(null);
  const [answer, setAnswer] = useState(null);

  const scrollToQuote = () => {
    document.getElementById("quote-card")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const handleAnswer = (choice) => {
    setAnswer(choice);
  };

  return (
    <main className="min-h-screen bg-[#f6f5ff] font-sans text-[#2f2b68] pb-[68px]">
      {/* Top Header */}
      <header className="h-[52px] w-full bg-[#312e81] text-white">
        <div className="mx-auto flex h-full max-w-4xl items-center justify-between px-5">
          <div className="flex items-center gap-2 text-[14px] font-bold tracking-tight">
            <span className="text-[#8b57ff]">
              <ShieldIcon />
            </span>
            <span>ClearLane</span>
          </div>

          <div className="flex items-center gap-1.5 text-[10.5px] font-medium text-[#d0cef4]">
            <LockIcon className="h-3.5 w-3.5" />
            <span>Secure SSL connection</span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <section className="relative overflow-hidden">
        {/* Soft Lavender Background Arch / Dome */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[265px] w-[370px] -translate-x-1/2 rounded-b-[48%] bg-[#ebe7ff]" />
        <div className="pointer-events-none absolute left-1/2 top-[28px] h-[195px] w-[275px] -translate-x-1/2 rounded-full bg-[#e1dbff]/80" />

        <div className="relative mx-auto max-w-4xl px-5 pb-16 pt-9">
          {/* Hero Section */}
          <section className="mx-auto max-w-[620px] text-center">
            <div className="mx-auto mb-4 inline-flex items-center rounded-full bg-white/85 px-4 py-1.5 text-[10.5px] font-semibold text-[#704be6] shadow-xs border border-[#e5e0fb]/60">
              Compare auto insurance quotes in about 2 minutes
            </div>

            <h1 className="text-[34px] font-extrabold leading-[1.08] tracking-[-0.8px] text-[#312e81] sm:text-[44px]">
              Compare Auto Insurance
              <br />
              Quotes &amp; Discover How You
              <br />
              Could Save
            </h1>

            <p className="mx-auto mt-4 max-w-[480px] text-[12.5px] leading-5 text-[#747190] sm:text-[13px]">
              Answer a few quick questions, then compare auto insurance
              <br className="hidden sm:block" />
              quotes from multiple providers in your area. No obligation to
              <br className="hidden sm:block" />
              buy or switch.
            </p>
          </section>

          {/* As Low As $39/month* Card */}
          <section className="mx-auto mt-7 max-w-[490px]">
            <div className="rounded-[16px] border border-[#e8e6f5] bg-white px-7 pb-4 pt-6 shadow-[0_10px_28px_rgba(49,46,129,0.06)]">
              <div className="grid grid-cols-[1fr_205px] items-center gap-4 max-[480px]:grid-cols-[1fr_140px] max-[480px]:gap-2">
                <div>
                  <div className="text-[24px] font-extrabold leading-none text-[#737380] sm:text-[27px]">
                    As Low As
                  </div>

                  <div className="mt-2 text-[28px] font-extrabold leading-none tracking-tight text-[#1d64d8] sm:text-[33px]">
                    $39/month*
                  </div>
                </div>

                <div className="flex items-center justify-end">
                  <img
                    src="/blue-car.png"
                    alt="Blue car"
                    className="h-auto w-[205px] object-contain max-[480px]:w-[140px]"
                  />
                </div>
              </div>

              <p className="mt-2 text-center text-[7.5px] leading-3 text-[#a09cb0]">
                *Rates vary by driver, vehicle, location, coverage selected, and provider. Actual rates may vary.
              </p>
            </div>

            {/* Trust checkmarks under car card */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[10.5px] sm:text-[11px] font-semibold text-[#484464]">
              {["No obligation", "Multiple providers", "No sign-up required"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-1.5">
                    <span className="text-[#16b85a]">
                      <CheckIcon className="h-[15px] w-[15px]" />
                    </span>
                    <span>{item}</span>
                  </div>
                )
              )}
            </div>
          </section>

          {/* Yes / No Question Card */}
          <section
            id="quote-card"
            className="mx-auto mt-8 max-w-[500px] rounded-[16px] border border-[#e8e6f5] bg-white px-6 py-6 shadow-[0_10px_28px_rgba(49,46,129,0.07)]"
          >
            <h2 className="text-center text-[13.5px] sm:text-[14px] font-bold text-[#443e75]">
              Want to see how much you could save?
            </h2>

            <div className="mt-4 grid grid-cols-2 gap-3.5">
              <button
                type="button"
                onClick={() => handleAnswer("yes")}
                className={`flex h-[50px] items-center justify-center gap-2.5 rounded-[10px] bg-[#16a34a] hover:bg-[#15803d] text-[15px] font-bold text-white shadow-sm transition hover:-translate-y-0.5 active:translate-y-0 cursor-pointer ${
                  answer === "yes" ? "ring-2 ring-[#15803d] ring-offset-2" : ""
                }`}
              >
                <span className="text-[20px] leading-none">😄</span>
                <span>Yes</span>
              </button>

              <button
                type="button"
                onClick={() => handleAnswer("no")}
                className={`flex h-[50px] items-center justify-center gap-2.5 rounded-[10px] bg-[#dc2626] hover:bg-[#b91c1c] text-[15px] font-bold text-white shadow-sm transition hover:-translate-y-0.5 active:translate-y-0 cursor-pointer ${
                  answer === "no" ? "ring-2 ring-[#b91c1c] ring-offset-2" : ""
                }`}
              >
                <span className="text-[20px] leading-none">😳</span>
                <span>No</span>
              </button>
            </div>

            {answer && (
              <p className="mt-3 text-center text-[11px] font-medium text-[#443e75]">
                {answer === "yes"
                  ? "Great! Explore your personalized quotes below."
                  : "No problem. You can still compare and explore rates anytime."}
              </p>
            )}

            <div className="mt-4 border-t border-[#f0eefa] pt-3">
              <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-[9.5px] sm:text-[10px] font-medium text-[#65617c]">
                <div className="flex items-center gap-1">
                  <span className="text-[#16b85a]">
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  <span>SSL secured</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[#16b85a]">
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  <span>No obligation</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[#16b85a]">
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  <span>No payment asked here</span>
                </div>
              </div>
              <div className="mt-1 flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-[9.5px] sm:text-[10px] font-medium text-[#65617c]">
                <div className="flex items-center gap-1">
                  <span className="text-[#16b85a]">
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  <span>Multiple providers</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[#16b85a]">
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  <span>No sign-up required</span>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="mt-12 text-center">
            <h2 className="text-[23px] sm:text-[25px] font-bold text-[#312e81]">
              How it works
            </h2>

            <div className="mx-auto mt-6 grid max-w-[560px] grid-cols-3 gap-3 text-center">
              {[
                {
                  n: "1",
                  title: "Answer a few questions",
                  text: "No sign up required to start.",
                },
                {
                  n: "2",
                  title: "Compare your options",
                  text: "See quotes side by side.",
                },
                {
                  n: "3",
                  title: "Choose what fits",
                  text: "Or keep your current policy.",
                },
              ].map((step) => (
                <div key={step.n} className="flex flex-col items-center px-1 text-center">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#7b35f2] text-[11px] font-bold text-white shadow-xs">
                    {step.n}
                  </div>

                  <h3 className="mt-2.5 text-[11px] sm:text-[12px] font-bold text-[#35325b] leading-tight">
                    {step.title}
                  </h3>

                  <p className="mt-1 text-[9.5px] sm:text-[10px] text-[#7d7997] leading-normal">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Discounts Section */}
          <section className="mt-14 text-center">
            <h2 className="text-[23px] sm:text-[25px] font-bold text-[#312e81]">
              Discounts you could explore
            </h2>

            <p className="mt-1.5 text-[11px] sm:text-[12px] text-[#7d7997]">
              Available discounts depend on the provider, your state and your
              situation.
            </p>

            <div className="mx-auto mt-5 grid max-w-[620px] grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="flex h-[88px] flex-col items-center justify-center rounded-[12px] border border-[#eceaf8] bg-white shadow-xs transition hover:shadow-sm">
                <div className="text-[#8445ff]">
                  <BundleIcon />
                </div>
                <span className="mt-2.5 text-[11px] font-semibold text-[#37334e]">
                  Bundling
                </span>
              </div>

              <div className="flex h-[88px] flex-col items-center justify-center rounded-[12px] border border-[#eceaf8] bg-white shadow-xs transition hover:shadow-sm">
                <div className="text-[#8445ff]">
                  <CarsIcon />
                </div>
                <span className="mt-2.5 text-[11px] font-semibold text-[#37334e]">
                  Multi-car
                </span>
              </div>

              <div className="flex h-[88px] flex-col items-center justify-center rounded-[12px] border border-[#eceaf8] bg-white shadow-xs transition hover:shadow-sm">
                <div className="text-[#8445ff]">
                  <CardIcon />
                </div>
                <span className="mt-2.5 text-[11px] font-semibold text-[#37334e]">
                  Pay in full
                </span>
              </div>

              <div className="flex h-[88px] flex-col items-center justify-center rounded-[12px] border border-[#eceaf8] bg-white shadow-xs transition hover:shadow-sm">
                <div className="text-[#8445ff]">
                  <ClockIcon />
                </div>
                <span className="mt-2.5 text-[11px] font-semibold text-[#37334e]">
                  Safe driving
                </span>
              </div>
            </div>

            <p className="mt-3.5 text-[9.5px] sm:text-[10px] text-[#8e8ba0]">
              You could qualify for discounts depending on your provider and
              situation.
            </p>
          </section>

          {/* Have These Handy Section */}
          <section className="mt-14 text-center">
            <h2 className="text-[23px] sm:text-[25px] font-bold text-[#312e81]">
              Have these handy
            </h2>

            <p className="mt-1.5 text-[11px] sm:text-[12px] text-[#7d7997]">
              A few details on hand can make comparing quotes faster.
            </p>

            <div className="mx-auto mt-5 max-w-[490px] rounded-[14px] border border-[#e8e6f6] bg-white px-6 py-4 shadow-xs text-left">
              {[
                "Vehicle year, make and model",
                "Basic driver details",
                "Your current policy, if you have one",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 py-1.5 text-[11.5px] font-medium text-[#4b4764]"
                >
                  <span className="shrink-0 text-[#16b85a]">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Frequently Asked Questions */}
          <section className="mx-auto mt-14 max-w-[620px]">
            <h2 className="mb-4 text-center text-[23px] sm:text-[25px] font-bold text-[#312e81]">
              Frequently asked questions
            </h2>

            <div className="space-y-2">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    key={faq.q}
                    className="overflow-hidden rounded-[12px] border border-[#ebe9fb] bg-white shadow-xs"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 bg-white px-5 py-3.5 text-left cursor-pointer transition hover:bg-slate-50/50"
                    >
                      <span className="text-[13px] sm:text-[13.5px] font-semibold text-[#272251]">
                        {faq.q}
                      </span>

                      <span className="text-lg font-bold text-[#7c3cff]">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="border-t border-[#f2f0fc] px-5 pb-4 pt-3 text-[12px] leading-relaxed text-[#6b6783]">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Ready to Compare Quotes Banner */}
          <section className="mx-auto mt-14 max-w-[620px] rounded-[20px] bg-gradient-to-r from-[#4d32bb] via-[#6332ce] to-[#7931ee] px-6 py-8 text-center text-white shadow-md">
            <h2 className="text-[22px] sm:text-[24px] font-bold">
              Ready to compare quotes?
            </h2>

            <button
              type="button"
              onClick={scrollToQuote}
              className="mt-4 inline-flex min-w-[210px] items-center justify-center rounded-[9px] bg-[#16a34a] hover:bg-[#15803d] px-8 py-3 text-[13px] font-bold text-white shadow transition hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              Check Rates →
            </button>
          </section>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-14 bg-[#312e81] text-[#c9c6e8]">
        <div className="mx-auto max-w-4xl px-5 pb-12 pt-8 text-[9px] sm:text-[9.5px] leading-[1.65]">
          <p>
            This website is an advertisement operated by ClearLane Media, LLC,
            an independent marketing company. We are not an insurance company,
            agent, or broker, and we do not provide insurance quotes, set rates,
            or make coverage decisions. By continuing, you will be directed to
            a third-party comparison service. We may receive compensation when
            you click links or request quotes, which may influence how offers
            are presented.
          </p>

          <p className="mt-3">
            ClearLane is an independent marketing website, not an insurance
            company, agent or broker. We connect you with a third-party
            comparison service where you can view quotes. We may be paid when
            you continue to that service. This never costs you anything extra,
            and you are never required to purchase a policy.
          </p>

          <p className="mt-3">
            *Rates and savings vary based on driver profile, vehicle, location,
            coverage selected, and provider. Not all consumers will qualify for
            the lowest rates or for every discount shown. Results may vary.
            Terms and conditions apply.
          </p>

          <p className="mt-3">
            Discounts mentioned are examples of discounts commonly offered by
            insurance providers; availability varies by provider and state.
          </p>

          <div className="mt-4 flex flex-wrap gap-4 text-white font-medium">
            <a href="/privacy" className="underline underline-offset-2 hover:text-white/80">
              Privacy Policy
            </a>

            <a href="/terms" className="underline underline-offset-2 hover:text-white/80">
              Terms of Use
            </a>

            <a href="/disclosure" className="underline underline-offset-2 hover:text-white/80">
              Contact
            </a>
          </div>

          <p className="mt-4 text-[#a3a0c4]">
            © 2026 ClearLane Media, LLC · [Street Address], [City], [State] [ZIP]
          </p>

          <p className="mt-20 text-center text-[8px] text-[#a3a0c4]">
            Advertisement · Independent comparison website. Not an insurance
            company.
          </p>
        </div>
      </footer>

      {/* Fixed Bottom Sticky Bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#e5e3f0] bg-white px-4 py-2.5 shadow-[0_-4px_16px_rgba(0,0,0,0.06)]">
        <div className="mx-auto max-w-4xl">
          <button
            type="button"
            onClick={scrollToQuote}
            className="flex h-[40px] w-full items-center justify-center rounded-[8px] bg-[#16a34a] hover:bg-[#15803d] text-[13px] font-bold text-white shadow-sm transition hover:brightness-105 active:translate-y-0.5 cursor-pointer"
          >
            Continue →
          </button>
        </div>
      </div>
    </main>
  );
}
