// 'use client';
// import Link from "next/link";

// const reasons = [
//   ['$', 'Rates Just', 'Went Up'],
//   ['🚗', 'New 2025', 'Discounts'],
//   ['◆', 'Lower Rates', 'Available'],
//   ['✓', 'Same Coverage,', 'Less Money'],
// ];
// const tags = ['Multi-Car Owners','Homeowners','Short Trip Commuters','School Runs','Grocery Trips'];

// export default function Page() {
//   const go = () => { window.location.href = 'https://h0mlr.ttrk.io/click'; };
//   return (
//     <main className="min-h-screen bg-[#f4f4f4] text-[#111827] font-[Arial,Helvetica,sans-serif]">
//       <article className="mx-auto w-full max-w-[1080px] overflow-hidden border border-[#d6d6d6] bg-white shadow-sm">
//         <div className="px-4 pb-7 pt-2 sm:px-8 md:px-9 md:pb-10 md:pt-7">
//           <div className="bg-red-500 w-full">
//             <div className="text-center text-[10px] font-semibold text-white sm:text-[10px] md:text-[24px]">Updated 2 Hours Ago</div>
//           </div>

//           <h1 className="mx-auto max-w-[960px] text-center text-[28px] font-black mt-1 leading-[1.02] tracking-[-0.045em] text-black sm:text-[48px] md:mt-4 md:text-[62px] lg:text-[68px]">
//             Paying Too Much<br className="hidden sm:block" /> For Auto Insurance Renewals?
//           </h1>

//           <div className="mt-1 text-center font-black leading-[1.08] tracking-[-0.025em] md:mt-4">
//             <div className="text-[18px] text-[#f12d27] sm:text-[24px] md:text-[36px]">Americans Are Saving $652/Year</div>
//             <div className="mt-1 text-[17px] text-black sm:text-[27px] md:text-[34px]">By Switching In Minutes.</div>
//             <div className="mt-2 inline-block bg-[#ffe400] px-3 py-1 text-[22px] text-black sm:text-[30px] md:text-[38px]">See If You Can Save Now.</div>
//           </div>

//           <p className="mt-2 text-center text-[16px] font-medium leading-[1.2] text-[#171717] sm:text-[20px] md:text-[26px]">
//             Get real quotes from top-rated companies in your area.<br />
//             No spam. No fees. Just real savings.
//           </p>

//           <div className="mt-3 overflow-hidden rounded-[20px] sm:mt-6 md:rounded-[24px]">
//             <img src="/hero-reference.png" alt="Auto insurance comparison" className="block h-auto w-full" />
//           </div>

//           <div className="relative mt-5 grid grid-cols-2 overflow-hidden rounded-[20px] border border-[#d8dfd8] md:rounded-[24px]">
//             <div className="bg-[#fff5ed] px-2 py-4 text-center sm:px-5 sm:py-5 md:py-6">
//               <div className="text-[10px] font-bold uppercase text-[#946c50] sm:text-[14px] md:text-[18px]">Current Premium Example</div>
//               <div className="relative mx-auto mt-1 w-fit text-[31px] font-black leading-none text-[#6f7981] sm:text-[48px] md:text-[60px]">
//                 $189/mo
//                 <span className="absolute left-[-3%] top-[52%] h-[4px] w-[106%] -rotate-6 rounded bg-[#ef2d2d] md:h-[5px]" />
//               </div>
//             </div>
//             <div className="bg-[#eff9f0] px-2 py-4 text-center sm:px-5 sm:py-5 md:py-6">
//               <div className="text-[10px] font-bold uppercase text-[#397747] sm:text-[14px] md:text-[18px]">Compare Options From</div>
//               <div className="mt-1 text-[31px] font-black leading-none text-[#0ab13d] sm:text-[48px] md:text-[60px]">$39/mo*</div>
//             </div>
//             <div className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#d4d9d5] bg-white text-[30px] font-black text-[#0ab13d] sm:h-14 sm:w-14 sm:text-[38px] md:h-16 md:w-16">→</div>
//           </div>

//           <button onClick={go} className="mt-5 w-full rounded-[18px] bg-[linear-gradient(180deg,#18c85c,#08a842)] py-4 text-center text-[22px] font-black text-white shadow-sm sm:text-[28px] md:rounded-[20px] md:py-5 md:text-[34px]">
//             CHECK MY RATES NOW&nbsp; ›
//           </button>
//           <div className="mt-3 text-center text-[14px] font-medium text-[#202938] sm:text-[17px] md:text-[21px]">🔒 &nbsp; Fast, Secure &amp; Free – Takes 60 Seconds</div>

//           <section className="mt-5 rounded-[20px] border border-[#d9d9d9] bg-[#fcfcfc] px-2 py-4 sm:px-4 md:mt-6 md:rounded-[24px]">
//             <h2 className="text-center text-[17px] font-black sm:text-[20px] md:text-[24px]">Why Drivers Are Checking:</h2>
//             <div className="mt-2 grid grid-cols-4">
//               {reasons.map((r,i)=><div key={r[1]} className={`px-1 text-center ${i ? 'border-l border-[#e1e1e1]' : ''}`}>
//                 <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#10283d] text-[22px] font-black text-white sm:h-12 sm:w-12 md:h-14 md:w-14 md:text-[27px]">{r[0]}</div>
//                 <div className="mt-2 text-[11px] font-bold leading-[1.15] sm:text-[14px] md:text-[17px]">{r[1]}<br/>{r[2]}</div>
//               </div>)}
//             </div>
//           </section>

//           <div className="mt-5 text-center text-[15px] sm:text-[18px] md:text-[21px]"><span className="text-[22px] tracking-[2px] text-[#ffc900] md:text-[28px]">★★★★★</span> <span className="ml-2">Trusted by Over <strong className="text-[#08a842]">6 Million</strong> Drivers</span></div>

//           <div className="mt-5 flex flex-wrap justify-center gap-2 sm:gap-3">
//             {tags.map(tag=><span key={tag} className="rounded-full border border-[#ccdaeb] bg-[#f7fbff] px-4 py-2 text-[13px] font-bold text-[#21456a] sm:text-[15px] md:px-5 md:text-[18px]">{tag}</span>)}
//           </div>

//           <p className="mx-auto mt-5 max-w-[930px] text-[15px] leading-[1.55] text-[#29435e] sm:text-[18px] md:text-[22px]">
//             Great fit for <strong>multi-car households</strong>, <strong>homeowners bundling policies</strong>, and <strong>short-trip drivers</strong> doing school runs, grocery trips and everyday commuting.
//           </p>

//           <section className="mt-5 flex items-center gap-4 rounded-[20px] border border-[#d6e5d6] bg-[#f4fbf4] px-4 py-4 md:gap-6 md:px-7 md:py-5">
//             <div className="flex h-14 w-14 shrink-0 items-center justify-center text-[45px] text-[#09a844] md:h-20 md:w-20 md:text-[60px]">🛡️</div>
//             <div><h2 className="text-[18px] font-black text-black sm:text-[21px] md:text-[27px]">Shop &amp; Save With Confidence</h2><p className="mt-1 text-[13px] leading-[1.4] text-black sm:text-[16px] md:text-[20px]">Comparing quotes won’t affect your credit score<br className="hidden sm:block" /> and there’s never any obligation to buy.</p></div>
//           </section>

//           {/* FOOTER */}
//                   <footer className="text-center text-[11px] text-slate-500 mt-5 space-y-2">
//                     <div>
//                       <Link href="/privacy" className="underline mx-1">
//                         Privacy Policy
//                       </Link>
//                       |
//                       <Link href="/terms" className="underline mx-1">
//                         Terms
//                       </Link>
//                       |
//                       <Link href="/disclosure" className="underline mx-1">
//                         Affiliate Disclosure
//                       </Link>
//                     </div>
          
//                     <p>
//                       This site may receive compensation from insurance partners.
//                       We are not an insurance company or agency.
//                     </p>
          
//                     <p>
//                       PennyPerMiles · 1007 N Orange St, 4th Floor, Suite 1382, Wilmington, DE 19801 · United States
//                     </p>
//                   </footer>
//         </div>
//       </article>
//     </main>
//   );
// }



'use client';
import Link from "next/link";

const reasons = [
  ['$', 'Rates Just', 'Went Up'],
  ['🚗', 'New 2025', 'Discounts'],
  ['◆', 'Lower Rates', 'Available'],
  ['✓', 'Same Coverage,', 'Less Money'],
];
const tags = ['Multi-Car Owners','Homeowners','Short Trip Commuters','School Runs','Grocery Trips'];

export default function Page() {
  const go = () => { window.location.href = 'https://h0mlr.ttrk.io/click'; };
  return (
    <main className="min-h-screen bg-[#f4f4f4] text-[#111827] font-[Arial,Helvetica,sans-serif]">
      <article className="mx-auto w-full max-w-[950px] overflow-hidden border border-[#d6d6d6] bg-white shadow-sm">
        <div className="px-4 pb-7 pt-2 sm:px-8 md:px-9 md:pb-6 ">
          <div className="bg-red-500 w-full">
            <div className="text-center text-[10px] font-semibold text-white sm:text-[10px] md:text-[12px]">Updated 2 Hours Ago</div>
          </div>

          <h1 className="mx-auto max-w-[960px] text-center text-[28px] font-black mt-1 leading-[1]  tracking-[-0.03em] text-black  md:mt-3 sm:text-4xl">
            Paying Too Much<br className="hidden sm:block" /> For Auto Insurance Renewals?
          </h1>

          <div className="mt-1 text-center font-black leading-[1.1] tracking-[-0.02em] md:mt-1">
            <div className="text-[18px] text-[#f12d27] sm:text-[20px] md:text-[24px]">Americans Are Saving $652/Year</div>
            <div className="mt-1 text-[17px] text-black sm:text-[20px] md:text-[22px]">By Switching In Minutes.</div>
            <div className="mt-2 inline-block bg-[#ffe400] px-3 py-1 text-[22px] text-black sm:text-[20px] md:mt-1 md:text-[23px]">See If You Can Save Now.</div>
          </div>

          <p className="mt-2 text-center text-[14px] font-medium leading-[1] text-[#171717] sm:text-[16px] md:mt-2 md:text-[17px]">
            Get real quotes from top-rated companies in your area.<br />
            No spam. No fees. Just real savings.
          </p>

          <div className="mt-2 overflow-hidden rounded-[20px] sm:mt-1 md:mt-4 md:rounded-[24px]">
            <img src="/hero-reference.png" alt="Auto insurance comparison" className="block h-auto w-full md:h-[300px] md:w-full md:object-cover " />
          </div>

          <div className="relative mt-2 grid grid-cols-2 overflow-hidden rounded-[20px] border border-[#d8dfd8] md:mt-4 md:rounded-[24px]">
            <div className="bg-[#fff5ed] px-2 py-4 text-center sm:px-5 sm:py-5 md:py-4">
              <div className="text-[10px] font-bold uppercase text-[#946c50] sm:text-[12px] md:text-[13px]">Current Premium Example</div>
              <div className="relative mx-auto mt-1 w-fit text-[31px] font-black leading-none text-[#6f7981] sm:text-[32px] ">
                $189/mo
                <span className="absolute left-[-3%] top-[52%] h-[4px] w-[106%] -rotate-6 rounded bg-[#ef2d2d] md:h-[4px]" />
              </div>
            </div>
            <div className="bg-[#eff9f0] px-2 py-4 text-center sm:px-5 sm:py-5 md:py-4">
              <div className="text-[10px] font-bold uppercase text-[#397747] sm:text-[14px] md:text-[13px]">Compare Options From</div>
              <div className="mt-1 text-[31px] font-black leading-none text-[#0ab13d] sm:text-[32px] ">$39/mo*</div>
            </div>
            <div className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#d4d9d5] bg-white text-[30px] font-black text-[#0ab13d] sm:h-14 sm:w-14 sm:text-[38px] md:h-12 md:w-12 md:text-[24px]">→</div>
          </div>

          <button onClick={go} className="mt-5 w-full rounded-[18px] bg-[linear-gradient(180deg,#18c85c,#08a842)] py-4 text-center text-[22px] font-black text-white shadow-sm sm:text-[28px] md:mt-4 md:rounded-[16px] md:py-3 md:text-[22px]">
            CHECK MY RATES NOW&nbsp; ›
          </button>
          <div className="mt-3 text-center text-[14px] font-medium text-[#202938] sm:text-[17px] md:mt-2 md:text-[15px]">🔒 &nbsp; Fast, Secure &amp; Free – Takes 60 Seconds</div>

          <section className="mt-5 rounded-[20px] border border-[#d9d9d9] bg-[#fcfcfc] px-2 py-4 sm:px-4 md:mt-4 md:rounded-[24px] md:py-3">
            <h2 className="text-center text-[17px] font-black sm:text-[20px] md:text-[18px]">Why Drivers Are Checking:</h2>
            <div className="mt-2 grid grid-cols-4 md:mt-2">
              {reasons.map((r,i)=><div key={r[1]} className={`px-1 text-center ${i ? 'border-l border-[#e1e1e1]' : ''}`}>
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#10283d] text-[22px] font-black text-white sm:h-12 sm:w-12 md:h-10 md:w-10 md:text-[17px]">{r[0]}</div>
                <div className="mt-2 text-[11px] font-bold leading-[1.2] sm:text-[14px] md:mt-1 md:text-[13px]">{r[1]}<br/>{r[2]}</div>
              </div>)}
            </div>
          </section>

          <div className="mt-5 text-center text-[15px] sm:text-[18px] md:mt-3 md:text-[15px]"><span className="text-[22px] tracking-[2px] text-[#ffc900] md:text-[20px]">★★★★★</span> <span className="ml-2">Trusted by Over <strong className="text-[#08a842]">6 Million</strong> Drivers</span></div>

          <div className="mt-5 flex flex-wrap justify-center gap-2 sm:gap-3 md:mt-3">
            {tags.map(tag=><span key={tag} className="rounded-full border border-[#ccdaeb] bg-[#f7fbff] px-4 py-2 text-[13px] font-bold text-[#21456a] sm:text-[15px] md:px-3 md:py-1 md:text-[13px]">{tag}</span>)}
          </div>

          <p className="mx-auto mt-5 max-w-[930px] text-[15px] leading-[1.6] text-[#29435e] sm:text-[18px] md:mt-3 md:text-[16px]">
            Great fit for <strong>multi-car households</strong>, <strong>homeowners bundling policies</strong>, and <strong>short-trip drivers</strong> doing school runs, grocery trips and everyday commuting.
          </p>

          <section className="mt-5 flex items-center gap-4 rounded-[20px] border border-[#d6e5d6] bg-[#f4fbf4] px-4 py-4 md:mt-4 md:gap-4 md:px-5 md:py-3">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center text-[45px] text-[#09a844] md:h-12 md:w-12 md:text-[32px]">🛡️</div>
            <div><h2 className="text-[18px] font-black text-black sm:text-[21px] md:text-[18px]">Shop &amp; Save With Confidence</h2><p className="mt-1 text-[13px] leading-[1.5] text-black sm:text-[16px] md:text-[14px]">Comparing quotes won’t affect your credit score<br className="hidden sm:block" /> and there’s never any obligation to buy.</p></div>
          </section>

          {/* FOOTER */}
                  <footer className="text-center text-[11px] text-slate-500 mt-5 space-y-2 md:mt-3">
                    <div>
                      <Link href="/privacy" className="underline mx-1">
                        Privacy Policy
                      </Link>
                      |
                      <Link href="/terms" className="underline mx-1">
                        Terms
                      </Link>
                      |
                      <Link href="/disclosure" className="underline mx-1">
                        Affiliate Disclosure
                      </Link>
                    </div>
          
                    <p>
                      This site may receive compensation from insurance partners.
                      We are not an insurance company or agency.
                    </p>
          
                    <p>
                      PennyPerMiles · 1007 N Orange St, 4th Floor, Suite 1382, Wilmington, DE 19801 · United States
                    </p>
                  </footer>
        </div>
      </article>
    </main>
  );
}
