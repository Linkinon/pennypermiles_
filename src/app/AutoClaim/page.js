// "use client";

// import { useEffect, useMemo, useRef, useState } from "react";

// const CONFIG = {
//   OFFER_URL: "https://example.com/offer",
//   BRAND_NAME: "AutoCompare",
//   BUSINESS_NAME: "Example Media LLC",
//   BUSINESS_ADDRESS: "123 Main Street, Suite 100, Austin, TX 78701",
//   CONTACT_EMAIL: "support@example.com",
//   PRIVACY_URL: "/privacy",
//   TERMS_URL: "/terms",
//   SAVINGS_TEXT: "See How Much You Could Save",
//   SAVINGS_SOURCE: "",
// };

// const AUTO_HERO_IMAGE = "/auto-hero.jpg"; // Replace with the actual path to your hero image

// const questions = [
//   {
//     key: "currentlyInsured",
//     title: "Do you currently have auto insurance?",
//     options: [
//       { label: "Yes, I'm currently insured", value: "yes" },
//       { label: "No, not right now", value: "no" },
//     ],
//   },
//   {
//     key: "vehicles",
//     title: "How many vehicles would you like to cover?",
//     hint: "Covering more than one vehicle may open up multi-car discounts.",
//     options: [
//       { label: "One", value: "one" },
//       { label: "Two", value: "two" },
//       { label: "Three or more", value: "three_or_more" },
//     ],
//   },
//   {
//     key: "home",
//     title: "Do you own or rent your home?",
//     hint: "Bundling auto with home or renters coverage could help you save more.",
//     options: [
//       { label: "I own my home", value: "own" },
//       { label: "I rent", value: "rent" },
//       { label: "Other", value: "other" },
//     ],
//   },
// ];

// const faqItems = [
//   {
//     q: "Am I required to buy a policy?",
//     a: "No. You can compare options and decide whether any available policy fits your needs. There is no obligation to buy or switch.",
//   },
//   {
//     q: "What information do you collect on this page?",
//     a: "This page asks only the quiz questions shown here and your ZIP code. Additional information may be requested after you continue to the comparison partner's website.",
//   },
//   {
//     q: "Are you an insurance company?",
//     a: `${CONFIG.BRAND_NAME} is an independent marketing website. We are not an insurance company, agent, or broker.`,
//   },
//   {
//     q: "Why can rates differ between providers?",
//     a: "Insurance providers use different rating factors, coverage options, underwriting rules, and discounts. Rates can also vary based on driver profile, vehicle, location, and selected coverage.",
//   },
//   {
//     q: "Will the price I see be my final rate?",
//     a: "Not necessarily. Any rate shown during the comparison process can change after a provider reviews the information required to issue a policy.",
//   },
// ];

// function ShieldCarIcon() {
//   return (
//     <svg
//       viewBox="0 0 64 64"
//       aria-hidden="true"
//       className="h-10 w-10 shrink-0 text-[#1557d6]"
//       fill="none"
//     >
//       <path
//         d="M32 4 52 11v16c0 14.2-8.2 25.8-20 32-11.8-6.2-20-17.8-20-32V11L32 4Z"
//         stroke="currentColor"
//         strokeWidth="4"
//         strokeLinejoin="round"
//       />
//       <path
//         d="M20 36h24l-2.5-8a5 5 0 0 0-4.8-3.5h-9.4a5 5 0 0 0-4.8 3.5L20 36Z"
//         stroke="currentColor"
//         strokeWidth="3"
//         strokeLinejoin="round"
//       />
//       <circle cx="25" cy="39" r="2.4" fill="currentColor" />
//       <circle cx="39" cy="39" r="2.4" fill="currentColor" />
//     </svg>
//   );
// }

// function LockIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       className="h-4 w-4"
//       aria-hidden="true"
//       fill="none"
//     >
//       <path
//         d="M7 10V7a5 5 0 0 1 10 0v3"
//         stroke="currentColor"
//         strokeWidth="1.8"
//       />
//       <rect
//         x="5"
//         y="10"
//         width="14"
//         height="10"
//         rx="2"
//         stroke="currentColor"
//         strokeWidth="1.8"
//       />
//     </svg>
//   );
// }

// function CheckIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       className="h-5 w-5 shrink-0"
//       aria-hidden="true"
//       fill="none"
//     >
//       <path
//         d="m5 12.5 4.2 4.2L19 7"
//         stroke="currentColor"
//         strokeWidth="2.4"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }

// function Chevron({ open }) {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       className={`h-5 w-5 transition-transform ${
//         open ? "rotate-180" : ""
//       }`}
//       aria-hidden="true"
//       fill="none"
//     >
//       <path
//         d="m6 9 6 6 6-6"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }

// export default function Page() {
//   const [step, setStep] = useState(1);
//   const [answers, setAnswers] = useState({});
//   const [zip, setZip] = useState("");
//   const [zipError, setZipError] = useState("");
//   const [openFaq, setOpenFaq] = useState(null);
//   const [quizVisible, setQuizVisible] = useState(true);

//   const quizRef = useRef(null);

//   const currentQuestion = questions[step - 1];
//   const progress = (step / 4) * 100;

//   const hasNumericSavingsClaim = useMemo(
//     () => /[$%]|\d/.test(CONFIG.SAVINGS_TEXT || ""),
//     []
//   );

//   useEffect(() => {
//     document.title = `Compare Auto Insurance Quotes | ${CONFIG.BRAND_NAME}`;

//     let robots = document.querySelector('meta[name="robots"]');

//     if (!robots) {
//       robots = document.createElement("meta");
//       robots.setAttribute("name", "robots");
//       document.head.appendChild(robots);
//     }

//     robots.setAttribute("content", "noindex,nofollow");

//     let description = document.querySelector(
//       'meta[name="description"]'
//     );

//     if (!description) {
//       description = document.createElement("meta");
//       description.setAttribute("name", "description");
//       document.head.appendChild(description);
//     }

//     description.setAttribute(
//       "content",
//       "Compare auto insurance quotes from multiple providers in your area."
//     );

//     if (
//       hasNumericSavingsClaim &&
//       !CONFIG.SAVINGS_SOURCE.trim()
//     ) {
//       console.warn(
//         "SAVINGS_TEXT contains a number, % or $ but SAVINGS_SOURCE is empty. A visible source is required."
//       );
//     }
//   }, [hasNumericSavingsClaim]);

//   useEffect(() => {
//     if (!quizRef.current) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setQuizVisible(entry.isIntersecting);
//       },
//       {
//         threshold: 0.18,
//       }
//     );

//     observer.observe(quizRef.current);

//     return () => observer.disconnect();
//   }, []);

//   function chooseAnswer(value) {
//     if (!currentQuestion) return;

//     setAnswers((prev) => ({
//       ...prev,
//       [currentQuestion.key]: value,
//     }));

//     setStep((prev) => Math.min(prev + 1, 4));
//   }

//   function handleBack() {
//     setZipError("");
//     setStep((prev) => Math.max(1, prev - 1));
//   }

//   function scrollToQuiz() {
//     quizRef.current?.scrollIntoView({
//       behavior: "smooth",
//       block: "center",
//     });
//   }

//   function handleSubmit(e) {
//     e.preventDefault();

//     if (!/^\d{5}$/.test(zip)) {
//       setZipError("Enter a valid 5-digit ZIP code.");
//       return;
//     }

//     const target = new URL(
//       CONFIG.OFFER_URL,
//       window.location.origin
//     );

//     const incoming = new URLSearchParams(
//       window.location.search
//     );

//     incoming.forEach((value, key) => {
//       if (!target.searchParams.has(key)) {
//         target.searchParams.append(key, value);
//       }
//     });

//     target.searchParams.set("zip", zip);

//     Object.entries(answers).forEach(([key, value]) => {
//       target.searchParams.set(key, value);
//     });

//     window.location.href = target.toString();
//   }

//   return (
//     <main className="min-h-screen overflow-x-hidden bg-[#f7f8fb] font-sans text-[#14213d]">

//       <div className="bg-[#0d2b5e] px-4 py-2 text-center text-[12px] font-semibold tracking-[0.01em] text-white sm:text-[13px]">
//         Advertisement · Independent comparison website. Not an insurance company.
//       </div>

//       <header className="border-b border-[#e5e8ef] bg-white">
//         <div className="mx-auto flex max-w-[1120px] items-center justify-between gap-4 px-4 py-4 sm:px-6">

//           <div className="flex items-center gap-3">
//             <ShieldCarIcon />

//             <span className="text-[20px] font-extrabold tracking-[-0.02em] text-[#0d2b5e] sm:text-[22px]">
//               {CONFIG.BRAND_NAME}
//             </span>
//           </div>

//           <div className="flex items-center gap-1.5 text-[12px] font-semibold text-[#52606d] sm:text-[13px]">
//             <LockIcon />
//             Secure SSL connection
//           </div>

//         </div>
//       </header>

//       <section className="bg-white">
//         <div className="mx-auto grid max-w-[1120px] gap-8 px-4 py-8 sm:px-6 sm:py-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:gap-10 lg:py-16">

//           <div className="pt-1 lg:pt-4">

//             <div className="mb-4 inline-flex rounded-full border border-[#cfe0ff] bg-[#eef5ff] px-3 py-1.5 text-[12px] font-bold text-[#1557d6] sm:text-[13px]">
//               Compare auto insurance quotes in about 2 minutes
//             </div>

//             <h1 className="max-w-[680px] text-[36px] font-extrabold leading-[1.08] tracking-[-0.04em] text-[#111827] sm:text-[48px] lg:text-[54px]">
//               Compare Auto Insurance Quotes &{" "}
//               <span className="text-[#0e9f6e]">
//                 {CONFIG.SAVINGS_TEXT}
//               </span>
//             </h1>

//             <p className="mt-5 max-w-[700px] text-[16px] leading-7 text-[#4b5563] sm:text-[18px]">
//               Answer a few quick questions, then compare auto insurance quotes from multiple providers in your area. No obligation to buy or switch.
//             </p>

//             <div className="mt-7 flex max-w-[650px] flex-col gap-3 rounded-[18px] border border-[#dce4ef] bg-[#f8fbff] p-5 sm:flex-row sm:items-center sm:justify-between">

//               <div>
//                 <div className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#607085]">
//                   Potential rate
//                 </div>

//                 <div className="mt-1 text-[28px] font-extrabold tracking-[-0.03em] text-[#0d2b5e]">
//                   Rates as low as $39/month*
//                 </div>
//               </div>

//               <p className="max-w-[245px] text-[12px] leading-5 text-[#64748b]">
//                 Results may vary based on driver, vehicle and location.
//               </p>

//             </div>

//             {/* AUTO HERO IMAGE */}
//             <div className="mt-6 overflow-hidden rounded-[22px] border border-[#dce4ef] bg-white shadow-[0_12px_32px_rgba(15,23,42,0.08)]">
//               <img
//                 src={AUTO_HERO_IMAGE}
//                 alt="Generic SUV driving on an open road at sunset"
//                 className="h-[240px] w-full object-cover sm:h-[300px]"
//               />
//             </div>

//             <p className="mt-2 text-[12px] leading-5 text-[#667085]">
//               AI generated image. Terms and conditions apply.
//             </p>

//             <div className="mt-6 grid gap-3 text-[14px] font-semibold text-[#334155] sm:grid-cols-3">

//               {[
//                 "No obligation",
//                 "Multiple providers",
//                 "Only your ZIP on this page",
//               ].map((item) => (
//                 <div
//                   key={item}
//                   className="flex items-center gap-2"
//                 >
//                   <span className="text-[#0e9f6e]">
//                     <CheckIcon />
//                   </span>

//                   <span>{item}</span>
//                 </div>
//               ))}

//             </div>

//           </div>

//           <div
//             ref={quizRef}
//             className="rounded-[22px] border border-[#e1e6ed] bg-white p-5 shadow-[0_18px_60px_rgba(15,23,42,0.12)] sm:p-7"
//           >

//             <div className="mb-5">

//               <div className="flex items-center justify-between gap-4">

//                 <div className="text-[13px] font-bold text-[#64748b]">
//                   Step {step} of 4
//                 </div>

//                 {step > 1 && (
//                   <button
//                     type="button"
//                     onClick={handleBack}
//                     className="min-h-11 rounded-lg px-3 text-[13px] font-bold text-[#1557d6] hover:bg-[#f3f7ff]"
//                   >
//                     ← Back
//                   </button>
//                 )}

//               </div>

//               <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#e7ecf3]">
//                 <div
//                   className="h-full rounded-full bg-[#1557d6] transition-all duration-300"
//                   style={{
//                     width: `${progress}%`,
//                   }}
//                 />
//               </div>

//             </div>

//             {step <= 3 && currentQuestion ? (
//               <div>

//                 <h2 className="text-[26px] font-extrabold leading-[1.2] tracking-[-0.03em] text-[#111827] sm:text-[30px]">
//                   {currentQuestion.title}
//                 </h2>

//                 {currentQuestion.hint && (
//                   <p className="mt-2 text-[13px] leading-5 text-[#64748b]">
//                     {currentQuestion.hint}
//                   </p>
//                 )}

//                 <div className="mt-6 grid gap-3">

//                   {currentQuestion.options.map((option) => (
//                     <button
//                       type="button"
//                       key={option.value}
//                       onClick={() =>
//                         chooseAnswer(option.value)
//                       }
//                       className="min-h-14 rounded-xl border border-[#cfd8e5] bg-white px-4 py-3 text-left text-[16px] font-bold text-[#14213d] transition hover:border-[#1557d6] hover:bg-[#f6f9ff] focus:outline-none focus:ring-4 focus:ring-[#dbe9ff]"
//                     >
//                       {option.label}
//                     </button>
//                   ))}

//                 </div>

//               </div>
//             ) : (

//               <form onSubmit={handleSubmit}>

//                 <h2 className="text-[26px] font-extrabold leading-[1.2] tracking-[-0.03em] text-[#111827] sm:text-[30px]">
//                   Enter your ZIP code
//                 </h2>

//                 <p className="mt-2 text-[13px] leading-5 text-[#64748b]">
//                   We use your ZIP to continue to quote options available in your area.
//                 </p>

//                 <label
//                   htmlFor="zip"
//                   className="mt-6 block text-[13px] font-bold text-[#334155]"
//                 >
//                   ZIP code
//                 </label>

//                 <input
//                   id="zip"
//                   name="zip"
//                   inputMode="numeric"
//                   autoComplete="postal-code"
//                   maxLength={5}
//                   value={zip}
//                   onChange={(e) => {
//                     setZip(
//                       e.target.value
//                         .replace(/\D/g, "")
//                         .slice(0, 5)
//                     );

//                     setZipError("");
//                   }}
//                   placeholder="5-digit ZIP"
//                   className="mt-2 min-h-14 w-full rounded-xl border border-[#cfd8e5] px-4 text-[18px] font-semibold outline-none transition focus:border-[#1557d6] focus:ring-4 focus:ring-[#dbe9ff]"
//                 />

//                 {zipError && (
//                   <p className="mt-2 text-[13px] font-semibold text-[#b42318]">
//                     {zipError}
//                   </p>
//                 )}

//                 <button
//                   type="submit"
//                   className="mt-5 min-h-14 w-full rounded-xl bg-[#0e9f6e] px-5 py-3 text-[17px] font-extrabold text-white shadow-[0_10px_24px_rgba(14,159,110,0.24)] transition hover:brightness-95 focus:outline-none focus:ring-4 focus:ring-[#bde9d9]"
//                 >
//                   Compare Quotes →
//                 </button>

//                 <div className="mt-4 rounded-xl border border-[#dce4ef] bg-[#f8fafc] p-4">

//                   <div className="text-[13px] font-extrabold text-[#0d2b5e]">
//                     What happens next
//                   </div>

//                   <p className="mt-1 text-[12px] leading-5 text-[#5b6777]">
//                     You'll continue to our comparison partner's website to answer a few more questions and view quotes available in your area. You're never obligated to buy.
//                   </p>

//                 </div>

//               </form>
//             )}

//             <div className="-mx-5 -mb-5 mt-6 grid grid-cols-3 gap-2 border-t border-[#e8edf4] bg-[#f8fafc] px-4 py-3 text-center text-[10px] font-bold text-[#607085] sm:-mx-7 sm:-mb-7 sm:text-[11px]">
//               <span>SSL secured</span>
//               <span>No obligation</span>
//               <span>No payment asked here</span>
//             </div>

//           </div>

//         </div>
//       </section>

//       <section className="border-y border-[#e7eaf0] bg-[#f7f8fb]">
//         <div className="mx-auto max-w-[1120px] px-4 py-12 sm:px-6 sm:py-16">

//           <div className="text-center">

//             <p className="text-[13px] font-extrabold uppercase tracking-[0.11em] text-[#1557d6]">
//               Simple process
//             </p>

//             <h2 className="mt-2 text-[30px] font-extrabold tracking-[-0.03em] text-[#111827] sm:text-[38px]">
//               How it works
//             </h2>

//           </div>

//           <div className="mt-8 grid gap-4 md:grid-cols-3">

//             {[
//               [
//                 "1",
//                 "Answer a few questions",
//                 "Tell us the basics needed to continue to the comparison process.",
//               ],
//               [
//                 "2",
//                 "Compare your options",
//                 "Review quote options that may be available through the comparison partner.",
//               ],
//               [
//                 "3",
//                 "Choose what fits",
//                 "Select a policy that works for you, or keep your current policy.",
//               ],
//             ].map(([n, title, body]) => (
//               <div
//                 key={n}
//                 className="rounded-[18px] border border-[#e0e5ec] bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.05)]"
//               >

//                 <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eaf2ff] text-[15px] font-extrabold text-[#1557d6]">
//                   {n}
//                 </div>

//                 <h3 className="mt-4 text-[19px] font-extrabold text-[#111827]">
//                   {title}
//                 </h3>

//                 <p className="mt-2 text-[14px] leading-6 text-[#64748b]">
//                   {body}
//                 </p>

//               </div>
//             ))}

//           </div>

//         </div>
//       </section>

//       <section className="bg-white">
//         <div className="mx-auto grid max-w-[1120px] gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2">

//           <div>

//             <p className="text-[13px] font-extrabold uppercase tracking-[0.11em] text-[#1557d6]">
//               Potential discounts
//             </p>

//             <h2 className="mt-2 text-[30px] font-extrabold tracking-[-0.03em] text-[#111827] sm:text-[36px]">
//               Discounts you could explore
//             </h2>

//             <div className="mt-6 grid gap-3 sm:grid-cols-2">

//               {[
//                 "Bundling",
//                 "Multi-car",
//                 "Pay in full",
//                 "Safe driving",
//               ].map((item) => (
//                 <div
//                   key={item}
//                   className="flex min-h-14 items-center gap-3 rounded-xl border border-[#e0e6ee] bg-[#fbfcfe] px-4 py-3 font-bold text-[#334155]"
//                 >

//                   <span className="text-[#0e9f6e]">
//                     <CheckIcon />
//                   </span>

//                   {item}

//                 </div>
//               ))}

//             </div>

//             <p className="mt-4 text-[13px] leading-5 text-[#6b7280]">
//               Available discounts depend on the provider, your state and your situation.
//             </p>

//           </div>

//           <div className="rounded-[20px] border border-[#dce4ef] bg-[#f8fbff] p-6 sm:p-7">

//             <h3 className="text-[24px] font-extrabold tracking-[-0.02em] text-[#0d2b5e]">
//               Have these handy
//             </h3>

//             <div className="mt-5 space-y-4">

//               {[
//                 "Vehicle year, make and model",
//                 "Basic driver details",
//                 "Current policy, if any",
//               ].map((item) => (
//                 <div
//                   key={item}
//                   className="flex items-start gap-3 text-[15px] font-semibold text-[#334155]"
//                 >

//                   <span className="mt-0.5 text-[#0e9f6e]">
//                     <CheckIcon />
//                   </span>

//                   <span>{item}</span>

//                 </div>
//               ))}

//             </div>

//           </div>

//         </div>
//       </section>

//       <section className="bg-[#f7f8fb]">
//         <div className="mx-auto max-w-[1120px] px-4 py-12 sm:px-6 sm:py-16">

//           <div className="rounded-[20px] border border-[#dce4ef] bg-white p-6 sm:p-8">

//             <div className="text-[13px] font-extrabold uppercase tracking-[0.1em] text-[#1557d6]">
//               Transparency
//             </div>

//             <p className="mt-3 text-[15px] leading-7 text-[#4b5563]">
//               {CONFIG.BRAND_NAME} is an independent marketing website, not an insurance company, agent or broker. We connect you with a third-party comparison service where you can view quotes. We may be paid when you continue to that service. This never costs you anything extra, and you are never required to purchase a policy.
//             </p>

//           </div>

//           <div className="mx-auto mt-12 max-w-[820px]">

//             <h2 className="text-center text-[30px] font-extrabold tracking-[-0.03em] text-[#111827] sm:text-[36px]">
//               Frequently asked questions
//             </h2>

//             <div className="mt-6 overflow-hidden rounded-[18px] border border-[#dde3eb] bg-white">

//               {faqItems.map((item, index) => {
//                 const open = openFaq === index;

//                 return (
//                   <div
//                     key={item.q}
//                     className={
//                       index
//                         ? "border-t border-[#e6eaf0]"
//                         : ""
//                     }
//                   >

//                     <button
//                       type="button"
//                       onClick={() =>
//                         setOpenFaq(open ? null : index)
//                       }
//                       className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left text-[15px] font-extrabold text-[#172033]"
//                       aria-expanded={open}
//                     >

//                       <span>{item.q}</span>

//                       <Chevron open={open} />

//                     </button>

//                     {open && (
//                       <div className="px-5 pb-5 text-[14px] leading-6 text-[#64748b]">
//                         {item.a}
//                       </div>
//                     )}

//                   </div>
//                 );
//               })}

//             </div>

//           </div>

//           <div className="mx-auto mt-12 max-w-[820px] rounded-[22px] bg-[#0d2b5e] px-6 py-8 text-center text-white sm:px-10 sm:py-10">

//             <h2 className="text-[28px] font-extrabold tracking-[-0.03em] sm:text-[34px]">
//               Ready to compare quotes?
//             </h2>

//             <p className="mx-auto mt-2 max-w-[580px] text-[14px] leading-6 text-[#d9e5f7]">
//               Answer the short quiz above and continue to the comparison partner to see options available in your area.
//             </p>

//             <button
//               type="button"
//               onClick={scrollToQuiz}
//               className="mt-5 min-h-12 rounded-xl bg-[#0e9f6e] px-6 py-3 text-[15px] font-extrabold text-white focus:outline-none focus:ring-4 focus:ring-[#86d8ba]"
//             >
//               See If You Qualify →
//             </button>

//           </div>

//         </div>
//       </section>

//       <footer className="border-t border-[#e5e7eb] bg-white">

//         <div className="mx-auto max-w-[1120px] px-4 py-10 text-[12px] leading-5 text-[#5f6b7a] sm:px-6">

//           <p>
//             <strong className="text-[#334155]">
//               Advertising Disclosure:
//             </strong>{" "}
//             This website is an advertisement operated by{" "}
//             {CONFIG.BUSINESS_NAME}, an independent marketing company. We are not an insurance company, agent, or broker, and we do not provide insurance quotes, set rates, or make coverage decisions. By continuing, you will be directed to a third-party comparison service. We may receive compensation when you click links or request quotes, which may influence how offers are presented.
//           </p>

//           <p className="mt-4">
//             *Rates and savings vary based on driver profile, vehicle, location, coverage selected, and provider. Not all consumers will qualify for the lowest rates or for every discount shown.{" "}
//             {CONFIG.SAVINGS_SOURCE
//               ? `${CONFIG.SAVINGS_SOURCE} `
//               : ""}
//             Results may vary. Terms and conditions apply.
//           </p>

//           <p className="mt-4">
//             Discounts mentioned are examples of discounts commonly offered by insurance providers; availability varies by provider and state.
//           </p>

//           <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[12px] font-bold text-[#1557d6]">

//             <a
//               href={CONFIG.PRIVACY_URL}
//               className="underline underline-offset-2"
//             >
//               Privacy Policy
//             </a>

//             <a
//               href={CONFIG.TERMS_URL}
//               className="underline underline-offset-2"
//             >
//               Terms of Use
//             </a>

//             <a
//               href={`mailto:${CONFIG.CONTACT_EMAIL}`}
//               className="underline underline-offset-2"
//             >
//               Contact
//             </a>

//           </div>

//           <p className="mt-5 text-[#667085]">
//             © {new Date().getFullYear()}{" "}
//             {CONFIG.BUSINESS_NAME} ·{" "}
//             {CONFIG.BUSINESS_ADDRESS}
//           </p>

//         </div>

//       </footer>

//       {!quizVisible && (
//         <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#dce2ea] bg-white/95 p-3 shadow-[0_-8px_24px_rgba(15,23,42,0.08)] backdrop-blur md:hidden">

//           <button
//             type="button"
//             onClick={scrollToQuiz}
//             className="min-h-12 w-full rounded-xl bg-[#0e9f6e] px-5 py-3 text-[15px] font-extrabold text-white"
//           >
//             Compare Quotes →
//           </button>

//         </div>
//       )}

//     </main>
//   );
// }




"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const CONFIG = {
  OFFER_URL: "https://example.com/offer",
  BRAND_NAME: "AutoCompare",
  BUSINESS_NAME: "Example Media LLC",
  BUSINESS_ADDRESS: "123 Main Street, Suite 100, Austin, TX 78701",
  CONTACT_EMAIL: "support@example.com",
  PRIVACY_URL: "/privacy",
  TERMS_URL: "/terms",
  SAVINGS_TEXT: "See How Much You Could Save",
  SAVINGS_SOURCE: "",
};

const AUTO_HERO_IMAGE = "/auto-hero.jpg";

const questions = [
  {
    key: "currentlyInsured",
    title: "Do you currently have auto insurance?",
    options: [
      { label: "Yes, I'm currently insured", value: "yes" },
      { label: "No, not right now", value: "no" },
    ],
  },
  {
    key: "vehicles",
    title: "How many vehicles would you like to cover?",
    hint: "Covering more than one vehicle may open up multi-car discounts.",
    options: [
      { label: "One", value: "one" },
      { label: "Two", value: "two" },
      { label: "Three or more", value: "three_or_more" },
    ],
  },
  {
    key: "home",
    title: "Do you own or rent your home?",
    hint: "Bundling auto with home or renters coverage could help you save more.",
    options: [
      { label: "I own my home", value: "own" },
      { label: "I rent", value: "rent" },
      { label: "Other", value: "other" },
    ],
  },
];

const faqItems = [
  {
    q: "Am I required to buy a policy?",
    a: "No. You can compare options and decide whether any available policy fits your needs. There is no obligation to buy or switch.",
  },
  {
    q: "What information do you collect on this page?",
    a: "This page asks only the quiz questions shown here and your ZIP code. Additional information may be requested after you continue to the comparison partner's website.",
  },
  {
    q: "Are you an insurance company?",
    a: `${CONFIG.BRAND_NAME} is an independent marketing website. We are not an insurance company, agent, or broker.`,
  },
  {
    q: "Why can rates differ between providers?",
    a: "Insurance providers use different rating factors, coverage options, underwriting rules, and discounts. Rates can also vary based on driver profile, vehicle, location, and selected coverage.",
  },
  {
    q: "Will the price I see be my final rate?",
    a: "Not necessarily. Any rate shown during the comparison process can change after a provider reviews the information required to issue a policy.",
  },
];

function ShieldCarIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      className="h-10 w-10 shrink-0 text-[#1557d6]"
      fill="none"
    >
      <path
        d="M32 4 52 11v16c0 14.2-8.2 25.8-20 32-11.8-6.2-20-17.8-20-32V11L32 4Z"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M20 36h24l-2.5-8a5 5 0 0 0-4.8-3.5h-9.4a5 5 0 0 0-4.8 3.5L20 36Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <circle cx="25" cy="39" r="2.4" fill="currentColor" />
      <circle cx="39" cy="39" r="2.4" fill="currentColor" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M7 10V7a5 5 0 0 1 10 0v3"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <rect
        x="5"
        y="10"
        width="14"
        height="10"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0"
      aria-hidden="true"
      fill="none"
    >
      <path
        d="m5 12.5 4.2 4.2L19 7"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Chevron({ open }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-5 w-5 transition-transform ${
        open ? "rotate-180" : ""
      }`}
      aria-hidden="true"
      fill="none"
    >
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Page() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const [zip, setZip] = useState("");
  const [zipError, setZipError] = useState("");
  const [openFaq, setOpenFaq] = useState(null);
  const [quizVisible, setQuizVisible] = useState(true);

  const quizRef = useRef(null);

  const currentQuestion = questions[step - 1];
  const progress = (step / 4) * 100;

  const hasNumericSavingsClaim = useMemo(
    () => /[$%]|\d/.test(CONFIG.SAVINGS_TEXT || ""),
    []
  );

  useEffect(() => {
    document.title = `Compare Auto Insurance Quotes | ${CONFIG.BRAND_NAME}`;

    let robots = document.querySelector('meta[name="robots"]');

    if (!robots) {
      robots = document.createElement("meta");
      robots.setAttribute("name", "robots");
      document.head.appendChild(robots);
    }

    robots.setAttribute("content", "noindex,nofollow");

    let description = document.querySelector(
      'meta[name="description"]'
    );

    if (!description) {
      description = document.createElement("meta");
      description.setAttribute("name", "description");
      document.head.appendChild(description);
    }

    description.setAttribute(
      "content",
      "Compare auto insurance quotes from multiple providers in your area."
    );

    if (
      hasNumericSavingsClaim &&
      !CONFIG.SAVINGS_SOURCE.trim()
    ) {
      console.warn(
        "SAVINGS_TEXT contains a number, % or $ but SAVINGS_SOURCE is empty. A visible source is required."
      );
    }
  }, [hasNumericSavingsClaim]);

  useEffect(() => {
    if (!quizRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setQuizVisible(entry.isIntersecting);
      },
      {
        threshold: 0.18,
      }
    );

    observer.observe(quizRef.current);

    return () => observer.disconnect();
  }, []);

  function chooseAnswer(value) {
    if (!currentQuestion) return;

    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.key]: value,
    }));

    setStep((prev) => Math.min(prev + 1, 4));
  }

  function handleBack() {
    setZipError("");
    setStep((prev) => Math.max(1, prev - 1));
  }

  function scrollToQuiz() {
    quizRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!/^\d{5}$/.test(zip)) {
      setZipError("Enter a valid 5-digit ZIP code.");
      return;
    }

    const target = new URL(
      CONFIG.OFFER_URL,
      window.location.origin
    );

    const incoming = new URLSearchParams(
      window.location.search
    );

    incoming.forEach((value, key) => {
      if (!target.searchParams.has(key)) {
        target.searchParams.append(key, value);
      }
    });

    target.searchParams.set("zip", zip);

    Object.entries(answers).forEach(([key, value]) => {
      target.searchParams.set(key, value);
    });

    window.location.href = target.toString();
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f8fb] font-sans text-[#14213d]">

      {/* TOP ADVERTISEMENT BAR */}
      <div className="bg-[#0d2b5e] px-4 py-2 text-center text-[12px] font-semibold tracking-[0.01em] text-white sm:text-[13px]">
        Advertisement · Independent comparison website. Not an insurance company.
      </div>

      {/* HEADER */}
      <header className="border-b border-[#e5e8ef] bg-white">
        <div className="mx-auto flex max-w-[1120px] items-center justify-between gap-4 px-4 py-4 sm:px-6">

          <div className="flex items-center gap-3">
            <ShieldCarIcon />

            <span className="text-[20px] font-extrabold tracking-[-0.02em] text-[#0d2b5e] sm:text-[22px]">
              {CONFIG.BRAND_NAME}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[12px] font-semibold text-[#52606d] sm:text-[13px]">
            <LockIcon />
            Secure SSL connection
          </div>

        </div>
      </header>

      {/* HERO SECTION */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-[1120px] gap-8 px-4 py-8 sm:px-6 sm:py-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:gap-10 lg:py-16">

          {/* HERO LEFT */}
          <div className="pt-1 lg:pt-4">

            <div className="mb-4 inline-flex rounded-full border border-[#cfe0ff] bg-[#eef5ff] px-3 py-1.5 text-[12px] font-bold text-[#1557d6] sm:text-[13px]">
              Compare auto insurance quotes in about 2 minutes
            </div>

            <h1 className="max-w-[680px] text-[36px] font-extrabold leading-[1.08] tracking-[-0.04em] text-[#111827] sm:text-[48px] lg:text-[54px]">
              Compare Auto Insurance Quotes &{" "}
              <span className="text-[#0e9f6e]">
                {CONFIG.SAVINGS_TEXT}
              </span>
            </h1>

            <p className="mt-5 max-w-[700px] text-[16px] leading-7 text-[#4b5563] sm:text-[18px]">
              Answer a few quick questions, then compare auto insurance
              quotes from multiple providers in your area. No obligation
              to buy or switch.
            </p>

            {/* IMAGE + RATE CARD */}
            <div className="relative mt-7 flex min-h-[270px] max-w-[760px] overflow-hidden rounded-[26px] border border-[#dce4ef] shadow-[0_18px_44px_rgba(15,23,42,0.08)] sm:min-h-[320px]">

              <img
                src={AUTO_HERO_IMAGE}
                alt="Generic SUV driving on an open road at sunset"
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* LIGHT GRADIENT FOR TEXT READABILITY */}
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.80)_38%,rgba(255,255,255,0.20)_70%,rgba(255,255,255,0.05)_100%)]" />

              <div className="relative z-10 flex w-full items-start p-6 sm:p-8">

                <div className="max-w-[360px]">

                  <div className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#607085] sm:text-[15px]">
                    Potential rate
                  </div>

                  <div className="mt-3 text-[36px] font-extrabold leading-[1.08] tracking-[-0.04em] text-[#0d2b5e] sm:text-[52px]">
                    Rates as low as
                    <br />
                    $39/month*
                  </div>

                </div>

              </div>

            </div>

            <p className="mt-2 max-w-[760px] text-[12px] leading-5 text-[#667085]">
              Results may vary based on driver, vehicle and location.
              AI generated image. Terms and conditions apply.
            </p>

            {/* HERO BENEFITS */}
            <div className="mt-6 grid gap-3 text-[14px] font-semibold text-[#334155] sm:grid-cols-3">

              {[
                "No obligation",
                "Multiple providers",
                "Only your ZIP on this page",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2"
                >
                  <span className="text-[#0e9f6e]">
                    <CheckIcon />
                  </span>

                  <span>{item}</span>
                </div>
              ))}

            </div>

          </div>

          {/* QUIZ CARD */}
          <div
            ref={quizRef}
            className="rounded-[22px] border border-[#e1e6ed] bg-white p-5 shadow-[0_18px_60px_rgba(15,23,42,0.12)] sm:p-7"
          >

            {/* QUIZ PROGRESS */}
            <div className="mb-5">

              <div className="flex items-center justify-between gap-4">

                <div className="text-[13px] font-bold text-[#64748b]">
                  Step {step} of 4
                </div>

                {step > 1 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="min-h-11 rounded-lg px-3 text-[13px] font-bold text-[#1557d6] hover:bg-[#f3f7ff]"
                  >
                    ← Back
                  </button>
                )}

              </div>

              <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#e7ecf3]">

                <div
                  className="h-full rounded-full bg-[#1557d6] transition-all duration-300"
                  style={{
                    width: `${progress}%`,
                  }}
                />

              </div>

            </div>

            {/* QUESTIONS */}
            {step <= 3 && currentQuestion ? (
              <div>

                <h2 className="text-[26px] font-extrabold leading-[1.2] tracking-[-0.03em] text-[#111827] sm:text-[30px]">
                  {currentQuestion.title}
                </h2>

                {currentQuestion.hint && (
                  <p className="mt-2 text-[13px] leading-5 text-[#64748b]">
                    {currentQuestion.hint}
                  </p>
                )}

                <div className="mt-6 grid gap-3">

                  {currentQuestion.options.map((option) => (
                    <button
                      type="button"
                      key={option.value}
                      onClick={() =>
                        chooseAnswer(option.value)
                      }
                      className="min-h-14 rounded-xl border border-[#cfd8e5] bg-white px-4 py-3 text-left text-[16px] font-bold text-[#14213d] transition hover:border-[#1557d6] hover:bg-[#f6f9ff] focus:outline-none focus:ring-4 focus:ring-[#dbe9ff]"
                    >
                      {option.label}
                    </button>
                  ))}

                </div>

              </div>
            ) : (

              /* ZIP STEP */
              <form onSubmit={handleSubmit}>

                <h2 className="text-[26px] font-extrabold leading-[1.2] tracking-[-0.03em] text-[#111827] sm:text-[30px]">
                  Enter your ZIP code
                </h2>

                <p className="mt-2 text-[13px] leading-5 text-[#64748b]">
                  We use your ZIP to continue to quote options
                  available in your area.
                </p>

                <label
                  htmlFor="zip"
                  className="mt-6 block text-[13px] font-bold text-[#334155]"
                >
                  ZIP code
                </label>

                <input
                  id="zip"
                  name="zip"
                  inputMode="numeric"
                  autoComplete="postal-code"
                  maxLength={5}
                  value={zip}
                  onChange={(e) => {
                    setZip(
                      e.target.value
                        .replace(/\D/g, "")
                        .slice(0, 5)
                    );

                    setZipError("");
                  }}
                  placeholder="5-digit ZIP"
                  className="mt-2 min-h-14 w-full rounded-xl border border-[#cfd8e5] px-4 text-[18px] font-semibold outline-none transition focus:border-[#1557d6] focus:ring-4 focus:ring-[#dbe9ff]"
                />

                {zipError && (
                  <p className="mt-2 text-[13px] font-semibold text-[#b42318]">
                    {zipError}
                  </p>
                )}

                <button
                  type="submit"
                  className="mt-5 min-h-14 w-full rounded-xl bg-[#0e9f6e] px-5 py-3 text-[17px] font-extrabold text-white shadow-[0_10px_24px_rgba(14,159,110,0.24)] transition hover:brightness-95 focus:outline-none focus:ring-4 focus:ring-[#bde9d9]"
                >
                  Compare Quotes →
                </button>

                <div className="mt-4 rounded-xl border border-[#dce4ef] bg-[#f8fafc] p-4">

                  <div className="text-[13px] font-extrabold text-[#0d2b5e]">
                    What happens next
                  </div>

                  <p className="mt-1 text-[12px] leading-5 text-[#5b6777]">
                    You'll continue to our comparison partner's
                    website to answer a few more questions and view
                    quotes available in your area. You're never
                    obligated to buy.
                  </p>

                </div>

              </form>
            )}

            {/* QUIZ FOOTER */}
            <div className="-mx-5 -mb-5 mt-6 grid grid-cols-3 gap-2 border-t border-[#e8edf4] bg-[#f8fafc] px-4 py-3 text-center text-[10px] font-bold text-[#607085] sm:-mx-7 sm:-mb-7 sm:text-[11px]">

              <span>SSL secured</span>

              <span>No obligation</span>

              <span>No payment asked here</span>

            </div>

          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-y border-[#e7eaf0] bg-[#f7f8fb]">

        <div className="mx-auto max-w-[1120px] px-4 py-12 sm:px-6 sm:py-16">

          <div className="text-center">

            <p className="text-[13px] font-extrabold uppercase tracking-[0.11em] text-[#1557d6]">
              Simple process
            </p>

            <h2 className="mt-2 text-[30px] font-extrabold tracking-[-0.03em] text-[#111827] sm:text-[38px]">
              How it works
            </h2>

          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">

            {[
              [
                "1",
                "Answer a few questions",
                "Tell us the basics needed to continue to the comparison process.",
              ],
              [
                "2",
                "Compare your options",
                "Review quote options that may be available through the comparison partner.",
              ],
              [
                "3",
                "Choose what fits",
                "Select a policy that works for you, or keep your current policy.",
              ],
            ].map(([n, title, body]) => (
              <div
                key={n}
                className="rounded-[18px] border border-[#e0e5ec] bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.05)]"
              >

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eaf2ff] text-[15px] font-extrabold text-[#1557d6]">
                  {n}
                </div>

                <h3 className="mt-4 text-[19px] font-extrabold text-[#111827]">
                  {title}
                </h3>

                <p className="mt-2 text-[14px] leading-6 text-[#64748b]">
                  {body}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* DISCOUNTS */}
      <section className="bg-white">

        <div className="mx-auto grid max-w-[1120px] gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2">

          <div>

            <p className="text-[13px] font-extrabold uppercase tracking-[0.11em] text-[#1557d6]">
              Potential discounts
            </p>

            <h2 className="mt-2 text-[30px] font-extrabold tracking-[-0.03em] text-[#111827] sm:text-[36px]">
              Discounts you could explore
            </h2>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">

              {[
                "Bundling",
                "Multi-car",
                "Pay in full",
                "Safe driving",
              ].map((item) => (
                <div
                  key={item}
                  className="flex min-h-14 items-center gap-3 rounded-xl border border-[#e0e6ee] bg-[#fbfcfe] px-4 py-3 font-bold text-[#334155]"
                >

                  <span className="text-[#0e9f6e]">
                    <CheckIcon />
                  </span>

                  {item}

                </div>
              ))}

            </div>

            <p className="mt-4 text-[13px] leading-5 text-[#6b7280]">
              Available discounts depend on the provider,
              your state and your situation.
            </p>

          </div>

          {/* HAVE THESE HANDY */}
          <div className="rounded-[20px] border border-[#dce4ef] bg-[#f8fbff] p-6 sm:p-7">

            <h3 className="text-[24px] font-extrabold tracking-[-0.02em] text-[#0d2b5e]">
              Have these handy
            </h3>

            <div className="mt-5 space-y-4">

              {[
                "Vehicle year, make and model",
                "Basic driver details",
                "Current policy, if any",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-[15px] font-semibold text-[#334155]"
                >

                  <span className="mt-0.5 text-[#0e9f6e]">
                    <CheckIcon />
                  </span>

                  <span>{item}</span>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* TRANSPARENCY + FAQ */}
      <section className="bg-[#f7f8fb]">

        <div className="mx-auto max-w-[1120px] px-4 py-12 sm:px-6 sm:py-16">

          <div className="rounded-[20px] border border-[#dce4ef] bg-white p-6 sm:p-8">

            <div className="text-[13px] font-extrabold uppercase tracking-[0.1em] text-[#1557d6]">
              Transparency
            </div>

            <p className="mt-3 text-[15px] leading-7 text-[#4b5563]">
              {CONFIG.BRAND_NAME} is an independent marketing website,
              not an insurance company, agent or broker. We connect
              you with a third-party comparison service where you can
              view quotes. We may be paid when you continue to that
              service. This never costs you anything extra, and you
              are never required to purchase a policy.
            </p>

          </div>

          {/* FAQ */}
          <div className="mx-auto mt-12 max-w-[820px]">

            <h2 className="text-center text-[30px] font-extrabold tracking-[-0.03em] text-[#111827] sm:text-[36px]">
              Frequently asked questions
            </h2>

            <div className="mt-6 overflow-hidden rounded-[18px] border border-[#dde3eb] bg-white">

              {faqItems.map((item, index) => {
                const open = openFaq === index;

                return (
                  <div
                    key={item.q}
                    className={
                      index
                        ? "border-t border-[#e6eaf0]"
                        : ""
                    }
                  >

                    <button
                      type="button"
                      onClick={() =>
                        setOpenFaq(open ? null : index)
                      }
                      className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left text-[15px] font-extrabold text-[#172033]"
                      aria-expanded={open}
                    >

                      <span>{item.q}</span>

                      <Chevron open={open} />

                    </button>

                    {open && (
                      <div className="px-5 pb-5 text-[14px] leading-6 text-[#64748b]">
                        {item.a}
                      </div>
                    )}

                  </div>
                );
              })}

            </div>

          </div>

          {/* FINAL CTA */}
          <div className="mx-auto mt-12 max-w-[820px] rounded-[22px] bg-[#0d2b5e] px-6 py-8 text-center text-white sm:px-10 sm:py-10">

            <h2 className="text-[28px] font-extrabold tracking-[-0.03em] sm:text-[34px]">
              Ready to compare quotes?
            </h2>

            <p className="mx-auto mt-2 max-w-[580px] text-[14px] leading-6 text-[#d9e5f7]">
              Answer the short quiz above and continue to the
              comparison partner to see options available in
              your area.
            </p>

            <button
              type="button"
              onClick={scrollToQuiz}
              className="mt-5 min-h-12 rounded-xl bg-[#0e9f6e] px-6 py-3 text-[15px] font-extrabold text-white focus:outline-none focus:ring-4 focus:ring-[#86d8ba]"
            >
              See If You Qualify →
            </button>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#e5e7eb] bg-white">

        <div className="mx-auto max-w-[1120px] px-4 py-10 text-[12px] leading-5 text-[#5f6b7a] sm:px-6">

          <p>
            <strong className="text-[#334155]">
              Advertising Disclosure:
            </strong>{" "}
            This website is an advertisement operated by{" "}
            {CONFIG.BUSINESS_NAME}, an independent marketing
            company. We are not an insurance company, agent, or
            broker, and we do not provide insurance quotes, set
            rates, or make coverage decisions. By continuing, you
            will be directed to a third-party comparison service.
            We may receive compensation when you click links or
            request quotes, which may influence how offers are
            presented.
          </p>

          <p className="mt-4">
            *Rates and savings vary based on driver profile,
            vehicle, location, coverage selected, and provider.
            Not all consumers will qualify for the lowest rates
            or for every discount shown.{" "}
            {CONFIG.SAVINGS_SOURCE
              ? `${CONFIG.SAVINGS_SOURCE} `
              : ""}
            Results may vary. Terms and conditions apply.
          </p>

          <p className="mt-4">
            Discounts mentioned are examples of discounts commonly
            offered by insurance providers; availability varies by
            provider and state.
          </p>

          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[12px] font-bold text-[#1557d6]">

            <a
              href={CONFIG.PRIVACY_URL}
              className="underline underline-offset-2"
            >
              Privacy Policy
            </a>

            <a
              href={CONFIG.TERMS_URL}
              className="underline underline-offset-2"
            >
              Terms of Use
            </a>

            <a
              href={`mailto:${CONFIG.CONTACT_EMAIL}`}
              className="underline underline-offset-2"
            >
              Contact
            </a>

          </div>

          <p className="mt-5 text-[#667085]">
            © {new Date().getFullYear()}{" "}
            {CONFIG.BUSINESS_NAME} ·{" "}
            {CONFIG.BUSINESS_ADDRESS}
          </p>

        </div>

      </footer>

      {/* MOBILE STICKY CTA */}
      {!quizVisible && (
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#dce2ea] bg-white/95 p-3 shadow-[0_-8px_24px_rgba(15,23,42,0.08)] backdrop-blur md:hidden">

          <button
            type="button"
            onClick={scrollToQuiz}
            className="min-h-12 w-full rounded-xl bg-[#0e9f6e] px-5 py-3 text-[15px] font-extrabold text-white"
          >
            Compare Quotes →
          </button>

        </div>
      )}

    </main>
  );
}
