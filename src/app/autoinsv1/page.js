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
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect
      x="6.5"
      y="10"
      width="11"
      height="8.5"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <path
      d="M9 10V7.8a3 3 0 0 1 6 0V10"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const BundleIcon = () => (
  <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none">
    <rect
      x="5"
      y="9"
      width="6"
      height="9"
      rx="1.5"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <rect
      x="13"
      y="5"
      width="6"
      height="13"
      rx="1.5"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <path
      d="M7.5 9V6.8A1.8 1.8 0 0 1 9.3 5H13"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const CarsIcon = () => (
  <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none">
    <path
      d="m3.5 15 1.4-4.2A2 2 0 0 1 6.8 9.5h3.8a2 2 0 0 1 1.9 1.3L14 15"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
    <path
      d="M3 15h11v3H3z"
      stroke="currentColor"
      strokeWidth="1.7"
    />
    <circle cx="5.5" cy="18" r="1.1" fill="currentColor" />
    <circle cx="11.5" cy="18" r="1.1" fill="currentColor" />
    <path
      d="m13.5 12.5.8-2.3a1.6 1.6 0 0 1 1.5-1.1h2.8a1.6 1.6 0 0 1 1.5 1.1l.9 2.8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M15.2 13h5.6v2.7h-5.1"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

const CardIcon = () => (
  <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none">
    <rect
      x="4"
      y="6"
      width="16"
      height="12"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <path
      d="M4 10h16M8 14h4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const ClockIcon = () => (
  <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none">
    <circle
      cx="12"
      cy="12"
      r="8"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <path
      d="M12 8v4.3l2.8 1.7"
      stroke="currentColor"
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

  const scrollToQuote = () => {
    document.getElementById("quote-card")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <main className="min-h-screen bg-[#f6f5ff] font-sans text-[#2f2b68]">
      <header className="h-[54px] bg-[#37348e] text-white">
        <div className="mx-auto flex h-full max-w-4xl items-center justify-between px-5">
          <div className="flex items-center gap-2 text-[14px] font-bold">
            <span className="text-[#8b57ff]">
              <ShieldIcon />
            </span>
            <span>ClearLane</span>
          </div>

          <div className="flex items-center gap-1.5 text-[10px] font-semibold text-[#e8e6ff]">
            <LockIcon />
            <span>Secure SSL connection</span>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[255px] w-[350px] -translate-x-1/2 rounded-b-[48%] bg-[#ebe7ff]" />
        <div className="pointer-events-none absolute left-1/2 top-[28px] h-[190px] w-[265px] -translate-x-1/2 rounded-full bg-[#e1dbff]/80" />

        <div className="relative mx-auto max-w-4xl px-5 pb-14 pt-10">
          <section className="mx-auto max-w-[620px] text-center">
            <div className="mx-auto mb-4 inline-flex rounded-full bg-white/80 px-4 py-2 text-[10px] font-semibold text-[#7556e8] shadow-sm">
              Compare auto insurance quotes in about 2 minutes
            </div>

            <h1 className="text-[38px] font-extrabold leading-[1.05] tracking-[-0.9px] text-[#363394] sm:text-[46px]">
              Compare Auto Insurance
              <br />
              Quotes &amp; Discover How You
              <br />
              Could Save
            </h1>

            <p className="mx-auto mt-5 max-w-[470px] text-[13px] leading-5 text-[#77738e]">
              Answer a few quick questions, then compare auto insurance
              <br className="hidden sm:block" />
              quotes from multiple providers in your area. No obligation to
              <br className="hidden sm:block" />
              buy or switch.
            </p>
          </section>

          <section className="mx-auto mt-7 max-w-[500px]">
            <div className="rounded-[14px] border border-[#e9e7f7] bg-white px-7 pb-4 pt-6 shadow-[0_12px_30px_rgba(50,45,120,0.08)]">
              <div className="grid grid-cols-[1fr_185px] items-center gap-4 max-[520px]:grid-cols-[1fr_125px] max-[520px]:gap-2">
                <div>
                  <div className="text-[26px] font-extrabold leading-none text-[#777] max-[520px]:text-[21px]">
                    As Low As
                  </div>

                  <div className="mt-2 text-[31px] font-extrabold leading-none tracking-[-1px] text-[#1e66d3] max-[520px]:text-[24px]">
                    $39/month*
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <img
                    src="/car.jpg"
                    alt="Blue car"
                    className="h-auto w-[185px] object-contain max-[520px]:w-[125px]"
                  />
                </div>
              </div>

              <p className="mt-1 text-center text-[7px] leading-3 text-[#a4a1af]">
                *Rates vary by driver, vehicle, location &amp; coverage. See
                terms below. Example promotional rate.
              </p>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[10px] font-semibold text-[#4e4965]">
              {["No obligation", "Multiple providers", "No sign-up required"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-1.5">
                    <span className="text-[#18ad58]">
                      <CheckIcon className="h-[15px] w-[15px]" />
                    </span>
                    <span>{item}</span>
                  </div>
                )
              )}
            </div>
          </section>

          <section
            id="quote-card"
            className="mx-auto mt-10 max-w-[520px] rounded-[18px] border border-[#e7e5f6] bg-white px-6 py-6 shadow-[0_12px_30px_rgba(50,45,120,0.08)] max-[520px]:px-4"
          >
            <h2 className="text-center text-[13px] font-bold text-[#51488b]">
              Want to see how much you could save?
            </h2>

            <div className="mt-4 grid grid-cols-2 gap-4 max-[390px]:grid-cols-1 max-[520px]:gap-3">
              <button className="flex h-[54px] items-center justify-center gap-3 rounded-[9px] border-0 bg-[#10ad4f] text-[14px] font-bold text-white shadow-sm transition hover:-translate-y-[1px] hover:brightness-95">
                <span className="text-[22px]">😄</span>
                <span>Yes</span>
              </button>

              <button className="flex h-[54px] items-center justify-center gap-3 rounded-[9px] border-0 bg-[#ef2026] text-[14px] font-bold text-white shadow-sm transition hover:-translate-y-[1px] hover:brightness-95">
                <span className="text-[22px]">😳</span>
                <span>No</span>
              </button>
            </div>

            <div className="mt-4 border-t border-[#efedf7] pt-3">
              <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[9px] font-medium text-[#68647d]">
                {[
                  "SSL secured",
                  "No obligation",
                  "No payment asked here",
                  "Multiple providers",
                  "No sign-up required",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-1">
                    <span className="text-[#15ae58]">
                      <CheckIcon className="h-[11px] w-[11px]" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-center text-[24px] font-bold text-[#3d398e] max-[520px]:text-[22px]">
              How it works
            </h2>

            <div className="relative mt-5 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-4">
              <div className="pointer-events-none absolute left-[17%] right-[17%] top-[14px] hidden h-px bg-[#e0ddf4] sm:block" />

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
                <div key={step.n} className="relative text-center">
                  <div className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-[#7b35f2] text-[11px] font-bold text-white">
                    {step.n}
                  </div>

                  <h3 className="mt-3 text-[11px] font-bold text-[#3c385d]">
                    {step.title}
                  </h3>

                  <p className="mt-1 text-[10px] text-[#838097]">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-14">
            <h2 className="text-center text-[24px] font-bold text-[#3d398e] max-[520px]:text-[22px]">
              Discounts you could explore
            </h2>

            <p className="mt-2 text-center text-[11px] text-[#848094]">
              Available discounts depend on the provider, your state and your
              situation.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="flex h-[92px] flex-col items-center justify-center rounded-[12px] border border-[#eceaf8] bg-white">
                <div className="text-[#7c3cff]">
                  <BundleIcon />
                </div>
                <span className="mt-3 text-[10px] font-semibold text-[#37334e]">
                  Bundling
                </span>
              </div>

              <div className="flex h-[92px] flex-col items-center justify-center rounded-[12px] border border-[#eceaf8] bg-white">
                <div className="text-[#7c3cff]">
                  <CarsIcon />
                </div>
                <span className="mt-3 text-[10px] font-semibold text-[#37334e]">
                  Multi-car
                </span>
              </div>

              <div className="flex h-[92px] flex-col items-center justify-center rounded-[12px] border border-[#eceaf8] bg-white">
                <div className="text-[#7c3cff]">
                  <CardIcon />
                </div>
                <span className="mt-3 text-[10px] font-semibold text-[#37334e]">
                  Pay in full
                </span>
              </div>

              <div className="flex h-[92px] flex-col items-center justify-center rounded-[12px] border border-[#eceaf8] bg-white">
                <div className="text-[#7c3cff]">
                  <ClockIcon />
                </div>
                <span className="mt-3 text-[10px] font-semibold text-[#37334e]">
                  Safe driving
                </span>
              </div>
            </div>

            <p className="mt-4 text-center text-[9px] text-[#9490a4]">
              You could qualify for discounts depending on your provider and
              situation.
            </p>
          </section>

          <section className="mt-14">
            <h2 className="text-center text-[24px] font-bold text-[#3d398e] max-[520px]:text-[22px]">
              Have these handy
            </h2>

            <p className="mt-2 text-center text-[11px] text-[#848094]">
              A few details on hand can make comparing quotes faster.
            </p>

            <div className="mx-auto mt-5 max-w-[520px] rounded-[13px] border border-[#e8e6f6] bg-white px-5 py-4">
              {[
                "Vehicle year, make and model",
                "Basic driver details",
                "Your current policy, if you have one",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 py-1.5 text-[11px] font-medium text-[#514d68]"
                >
                  <span className="shrink-0 text-[#13b65b]">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mx-auto mt-12 max-w-[700px]">
            <h2 className="mb-3 text-center text-[24px] font-bold text-[#3d398e] max-[520px]:text-[22px]">
              Frequently asked questions
            </h2>

            <div className="space-y-2.5">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    key={faq.q}
                    className="overflow-hidden rounded-xl border border-[#ebe9fb] bg-white"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 bg-white px-5 py-4 text-left"
                    >
                      <span className="text-[14px] font-semibold text-[#272251]">
                        {faq.q}
                      </span>

                      <span className="text-xl font-medium text-[#7c3cff]">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="border-t border-[#efedfa] px-5 pb-5 pt-4 text-[13px] leading-6 text-[#6b6783]">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          <section className="mx-auto mt-14 max-w-[700px] rounded-[20px] bg-gradient-to-r from-[#4933aa] to-[#7a31eb] px-6 py-8 text-center text-white max-[520px]:px-4">
            <h2 className="text-[24px] font-bold max-[520px]:text-[22px]">
              Ready to compare quotes?
            </h2>

            <button
              type="button"
              onClick={scrollToQuote}
              className="mt-4 min-w-[290px] rounded-[10px] border-0 bg-[#10ad4f] px-8 py-3.5 text-[13px] font-bold text-white transition hover:-translate-y-[1px] hover:brightness-95 max-[520px]:w-full max-[520px]:min-w-0"
            >
              Check Rates →
            </button>
          </section>
        </div>
      </section>

      <footer className="bg-[#37348e] text-[#d8d6f0]">
        <div className="mx-auto max-w-4xl px-5 pb-12 pt-8 text-[9px] leading-[1.65]">
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

          <div className="mt-4 flex flex-wrap gap-4">
            <a href="#" className="underline underline-offset-2 hover:text-white">
              Privacy Policy
            </a>

            <a href="#" className="underline underline-offset-2 hover:text-white">
              Terms of Use
            </a>

            <a href="#" className="underline underline-offset-2 hover:text-white">
              Contact
            </a>
          </div>

          <p className="mt-4">
            © 2026 ClearLane Media, LLC · [Street Address], [City], [State] [ZIP]
          </p>

          <p className="mt-24 text-center text-[8px]">
            Advertisement · Independent comparison website. Not an insurance
            company.
          </p>
        </div>
      </footer>
    </main>
  );
}