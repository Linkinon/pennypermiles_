// 'use client';

// const reasons = [
//   ['$', 'Rates Just\nWent Up'],
//   ['🚗', 'New 2025\nDiscounts'],
//   ['◆', 'Lower Rates\nAvailable'],
//   ['✓', 'Same Coverage,\nLess Money'],
// ];
// const tags = ['Multi-Car Owners','Homeowners','Short Trip Commuters','School Runs','Grocery Trips'];

// export default function Page() {
//   const go = () => { window.location.href = 'https://h0mlr.ttrk.io/click'; };
//   return (
//     <main className="min-h-screen bg-[#f3f3f3] font-[Arial,Helvetica,sans-serif] text-[#111827]">
//       <article className="mx-auto w-full max-w-[920px] bg-white px-[14px] pb-8 pt-[18px] shadow-sm sm:px-7 md:px-8">
//         <div className="mx-auto mb-3 w-full bg-[#ff3038] py-[5px] text-center text-[15px] font-extrabold leading-none text-white sm:text-[17px]">
//           Updated 2 Hours Ago
//         </div>

//         <header className="text-center">
//           <h1 className="mx-auto max-w-[850px] text-[31px] font-black leading-[0.98] tracking-[-1.4px] text-black sm:text-[46px] sm:tracking-[-2px] md:text-[55px]">
//             Paying Too Much<br />For Auto Insurance Renewals?
//           </h1>
//           <p className="mt-3 text-[20px] font-black leading-tight text-[#ef2d2d] sm:text-[29px] md:text-[31px]">
//             Americans Are Saving $652/Year
//           </p>
//           <p className="mt-1 text-[19px] font-black leading-tight text-black sm:text-[25px] md:text-[27px]">By Switching In Minutes.</p>
//           <div className="mt-2 inline-block bg-[#ffe20a] px-2 py-[2px] text-[22px] font-black leading-tight text-black sm:text-[30px] md:text-[32px]">
//             See If You Can Save Now.
//           </div>
//           <p className="mt-3 text-[15px] font-medium leading-[1.35] text-[#171717] sm:text-[19px] md:text-[21px]">
//             Get real quotes from top-rated companies in your area.<br />
//             No spam. No fees. Just real savings.
//           </p>
//         </header>

//         <section className="relative mt-5 overflow-hidden rounded-[16px] sm:mt-7 sm:rounded-[20px]">
//           <img src="/hero-reference.png" alt="Family-size compact SUV on an American road" className="h-[172px] w-full object-cover sm:h-[285px] md:h-[320px]" />
//           <div className="absolute bottom-[8px] left-[10px] top-[8px] flex w-[132px] flex-col justify-center rounded-[14px] bg-black/80 px-3 text-white sm:bottom-[18px] sm:left-[20px] sm:top-[18px] sm:w-[215px] sm:px-5">
//             <div className="text-[13px] font-bold leading-[1.25] sm:text-[21px]">Drivers Who<br />Compared<br />Saved an<br />Average of</div>
//             <div className="mt-2 text-[43px] font-black leading-none text-[#00d43b] sm:text-[67px]">$652</div>
//             <div className="mt-1 text-[18px] font-black leading-none text-[#00d43b] sm:text-[27px]">PER YEAR</div>
//           </div>
//         </section>

//         <section className="relative mt-4 grid grid-cols-2 overflow-hidden rounded-[15px] border border-[#d9e3d8] sm:rounded-[20px]">
//           <div className="bg-[#fff5eb] px-2 py-3 text-center sm:px-5 sm:py-5">
//             <div className="text-[9px] font-bold uppercase text-[#956a4c] sm:text-[13px]">Current Premium Example</div>
//             <div className="relative mx-auto mt-1 inline-block text-[31px] font-black leading-none text-[#737b82] sm:text-[48px]">
//               $189/mo
//               <span className="absolute left-[-4px] right-[-5px] top-[54%] h-[3px] -rotate-[6deg] bg-[#ef2d2d] sm:h-[4px]" />
//             </div>
//           </div>
//           <div className="bg-[#eff9ef] px-2 py-3 text-center sm:px-5 sm:py-5">
//             <div className="text-[9px] font-bold uppercase text-[#47784f] sm:text-[13px]">Compare Options From</div>
//             <div className="mt-1 text-[31px] font-black leading-none text-[#00ad3e] sm:text-[48px]">$39/mo*</div>
//           </div>
//           <div className="absolute left-1/2 top-1/2 flex h-[38px] w-[38px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border bg-white text-[24px] font-bold text-[#00ad3e] sm:h-[54px] sm:w-[54px] sm:text-[32px]">→</div>
//         </section>

//         <button onClick={go} className="mt-4 w-full rounded-[13px] bg-[#0fbd51] py-[14px] text-[20px] font-black text-white shadow-sm sm:rounded-[17px] sm:py-[18px] sm:text-[30px]">
//           CHECK MY RATES NOW&nbsp; ›
//         </button>
//         <div className="mt-2 text-center text-[13px] font-medium text-[#242b35] sm:text-[17px]">🔒 &nbsp; Fast, Secure &amp; Free – Takes 60 Seconds</div>

//         <section className="mt-5 rounded-[16px] border border-[#dedede] px-2 pb-3 pt-3 sm:mt-6 sm:rounded-[20px] sm:px-5 sm:pb-5">
//           <h2 className="text-center text-[15px] font-black sm:text-[20px]">Why Drivers Are Checking:</h2>
//           <div className="mt-2 grid grid-cols-4 divide-x divide-[#e2e2e2]">
//             {reasons.map(([icon,label]) => (
//               <div key={label} className="px-1 text-center sm:px-3">
//                 <div className="mx-auto flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#0b2b43] text-[19px] font-black text-white sm:h-[48px] sm:w-[48px] sm:text-[24px]">{icon}</div>
//                 <div className="mt-2 whitespace-pre-line text-[9px] font-bold leading-[1.15] sm:text-[13px]">{label}</div>
//               </div>
//             ))}
//           </div>
//         </section>

//         <div className="mt-4 text-center text-[13px] sm:text-[17px]"><span className="text-[20px] text-[#ffc800] sm:text-[26px]">★★★★★</span> &nbsp; Trusted by Over <strong className="text-[#08a93b]">6 Million</strong> Drivers</div>

//         <div className="mt-4 flex flex-wrap justify-center gap-2 sm:gap-3">
//           {tags.map(tag => <span key={tag} className="rounded-full border border-[#cbdced] bg-[#f6faff] px-3 py-[7px] text-[11px] font-bold text-[#26496a] sm:px-5 sm:py-2 sm:text-[14px]">{tag}</span>)}
//         </div>

//         <p className="mx-auto mt-4 max-w-[850px] text-[13px] leading-[1.45] text-[#2d4963] sm:mt-5 sm:text-[17px]">
//           Great fit for <strong>multi-car households</strong>, <strong>homeowners bundling policies</strong>, and <strong>short-trip drivers</strong> doing school runs, grocery trips and everyday commuting.
//         </p>

//         <section className="mt-5 flex items-center gap-4 rounded-[16px] border border-[#d7e7d7] bg-[#f2fbf2] px-4 py-4 sm:rounded-[20px] sm:px-6 sm:py-5">
//           <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full border-4 border-[#0caf49] text-[29px] font-black text-[#0caf49] sm:h-[72px] sm:w-[72px]">✓</div>
//           <div><h3 className="text-[17px] font-black text-black sm:text-[23px]">Shop &amp; Save With Confidence</h3><p className="mt-1 text-[12px] leading-[1.35] text-black sm:text-[16px]">Comparing quotes won’t affect your credit score<br className="hidden sm:block" /> and there’s never any obligation to buy.</p></div>
//         </section>

//         <footer className="mt-6 text-center text-[9px] leading-5 text-[#77818b] sm:text-[10px]">
//           <div><a href="/privacy" className="underline">Privacy Policy</a> | <a href="/terms" className="underline">Terms</a></div>
//           <div>This site may receive compensation from insurance partners. We are not an insurance company or agency.</div>
//           <div className="mt-1">*Rates and savings vary by driver, location, coverage and insurer. Use only with approved campaign sourcing.</div>
//         </footer>
//       </article>
//     </main>
//   );
// }


'use client';

const reasons = [
  ['$', 'Rates Just', 'Went Up'],
  ['🚗', 'New 2025', 'Discounts'],
  ['◆', 'Lower Rates', 'Available'],
  ['✓', 'Same Coverage,', 'Less Money'],
];

const tags = ['Multi-Car Owners', 'Homeowners', 'Short Trip Commuters', 'School Runs', 'Grocery Trips'];

export default function Page() {
  const go = () => {
    window.location.href = 'https://h0mlr.ttrk.io/click';
  };

  return (
    <main className="min-h-screen bg-[#f4f4f4] font-[Arial,Helvetica,sans-serif] text-[#111827]">
      <article className="mx-auto w-full max-w-[1080px] overflow-hidden border border-[#d6d6d6] bg-white shadow-sm">
        <div className="px-[14px] pb-5 pt-[11px] sm:px-8 sm:pb-8 sm:pt-5 md:px-9 md:pb-10 md:pt-7">

          <div className="w-full bg-[#ff2f39] py-[3px] text-center text-[12px] font-black leading-none text-white sm:bg-transparent sm:py-0 sm:text-[18px] sm:text-[#f12621] md:text-[24px]">
            Updated 2 Hours Ago
          </div>

          <h1 className="mx-auto mt-[8px] max-w-[960px] text-center text-[25px] font-black leading-[0.98] tracking-[-0.045em] text-black sm:mt-3 sm:text-[48px] md:mt-4 md:text-[62px] lg:text-[68px]">
            Paying Too Much
            <br />
            For Auto Insurance Renewals?
          </h1>

          <div className="mt-[4px] text-center font-black leading-[1.05] tracking-[-0.025em] sm:mt-3 md:mt-4">
            <div className="text-[16px] text-[#f12d27] sm:text-[28px] md:text-[36px]">
              Americans Are Saving $652/Year
            </div>
            <div className="mt-[4px] text-[14px] text-black sm:mt-1 sm:text-[27px] md:text-[34px]">
              By Switching In Minutes.
            </div>
            <div className="mt-[5px] inline-block bg-[#ffe400] px-[7px] py-[2px] text-[17px] text-black sm:mt-2 sm:px-3 sm:py-1 sm:text-[30px] md:text-[38px]">
              See If You Can Save Now.
            </div>
          </div>

          <p className="mt-[3px] text-center text-[12px] font-medium leading-[1.35] text-[#171717] sm:mt-4 sm:text-[20px] sm:leading-[1.55] md:text-[26px]">
            Get real quotes from top-rated companies in your area.
            <br />
            No spam. No fees. Just real savings.
          </p>

          <div className=" overflow-hidden rounded-[11px] sm:mt-6 sm:rounded-[20px] md:rounded-[24px]">
            <img
              src="/hero-reference.png"
              alt="Auto insurance comparison"
              className="block h-auto w-full"
            />
          </div>

          <div className="relative mt-[9px] grid grid-cols-2 overflow-hidden rounded-[11px] border border-[#d8dfd8] sm:mt-5 sm:rounded-[20px] md:rounded-[24px]">
            <div className="bg-[#fff5ed] px-1 py-[9px] text-center sm:px-5 sm:py-5 md:py-6">
              <div className="text-[7px] font-bold uppercase text-[#946c50] sm:text-[14px] md:text-[18px]">
                Current Premium Example
              </div>
              <div className="relative mx-auto mt-[2px] w-fit text-[24px] font-black leading-none text-[#6f7981] sm:mt-1 sm:text-[48px] md:text-[60px]">
                $189/mo
                <span className="absolute left-[-3%] top-[52%] h-[2px] w-[106%] -rotate-6 rounded bg-[#ef2d2d] sm:h-[4px] md:h-[5px]" />
              </div>
            </div>

            <div className="bg-[#eff9f0] px-1 py-[9px] text-center sm:px-5 sm:py-5 md:py-6">
              <div className="text-[7px] font-bold uppercase text-[#397747] sm:text-[14px] md:text-[18px]">
                Compare Options From
              </div>
              <div className="mt-[2px] text-[24px] font-black leading-none text-[#0ab13d] sm:mt-1 sm:text-[48px] md:text-[60px]">
                $39/mo*
              </div>
            </div>

            <div className="absolute left-1/2 top-1/2 flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#d4d9d5] bg-white text-[18px] font-black text-[#0ab13d] sm:h-14 sm:w-14 sm:text-[38px] md:h-16 md:w-16">
              →
            </div>
          </div>

          <button
            onClick={go}
            className="mt-[9px] w-full rounded-[10px] bg-[linear-gradient(180deg,#18c85c,#08a842)] py-[10px] text-center text-[17px] font-black text-white shadow-sm sm:mt-5 sm:rounded-[18px] sm:py-4 sm:text-[28px] md:rounded-[20px] md:py-5 md:text-[34px]"
          >
            CHECK MY RATES NOW&nbsp; ›
          </button>

          <div className="mt-[2px] text-center text-[10px] font-medium text-[#202938] sm:mt-3 sm:text-[17px] md:text-[21px]">
            🔒 &nbsp; Fast, Secure &amp; Free – Takes 60 Seconds
          </div>

          <section className="mt-[3px] rounded-[11px] border border-[#d9d9d9] bg-[#fcfcfc] px-1 py-[8px] sm:mt-5 sm:rounded-[20px] sm:px-4 sm:py-4 md:mt-6 md:rounded-[24px]">
            <h2 className="text-center text-[11px] font-black sm:text-[20px] md:text-[24px]">
              Why Drivers Are Checking:
            </h2>
            <div className="mt-[5px] grid grid-cols-4 sm:mt-2">
              {reasons.map((r, i) => (
                <div
                  key={r[1]}
                  className={`px-[2px] text-center ${i ? 'border-l border-[#e1e1e1]' : ''}`}
                >
                  <div className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-[#10283d] text-[13px] font-black text-white sm:h-12 sm:w-12 sm:text-[22px] md:h-14 md:w-14 md:text-[27px]">
                    {r[0]}
                  </div>
                  <div className="mt-[4px] text-[7px] font-bold leading-[1.08] sm:mt-2 sm:text-[14px] sm:leading-[1.15] md:text-[17px]">
                    {r[1]}
                    <br />
                    {r[2]}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-[4px] whitespace-nowrap text-center text-[9px] sm:mt-5 sm:text-[18px] md:text-[21px]">
            <span className="text-[14px] tracking-[1px] text-[#ffc900] sm:text-[22px] sm:tracking-[2px] md:text-[28px]">
              ★★★★★
            </span>
            <span className="ml-[5px] sm:ml-2">
              Trusted by Over <strong className="text-[#08a842]">6 Million</strong> Drivers
            </span>
          </div>

          <div className="mt-[9px] flex flex-wrap justify-center gap-[5px] sm:mt-5 sm:gap-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#ccdaeb] bg-[#f7fbff] px-[9px] py-[4px] text-[8px] font-bold text-[#21456a] sm:px-4 sm:py-2 sm:text-[15px] md:px-5 md:text-[18px]"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="mx-auto mt-[9px] max-w-[930px] text-[9px] leading-[1.45] text-[#29435e] sm:mt-5 sm:text-[18px] sm:leading-[1.55] md:text-[22px]">
            Great fit for <strong>multi-car households</strong>, <strong>homeowners bundling policies</strong>, and <strong>short-trip drivers</strong> doing school runs, grocery trips and everyday commuting.
          </p>

          <section className="mt-[9px] flex items-center gap-[9px] rounded-[11px] border border-[#d6e5d6] bg-[#f4fbf4] px-[10px] py-[8px] sm:mt-5 sm:gap-4 sm:rounded-[20px] sm:px-4 sm:py-4 md:gap-6 md:px-7 md:py-5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center text-[29px] text-[#09a844] sm:h-14 sm:w-14 sm:text-[45px] md:h-20 md:w-20 md:text-[60px]">
              🛡️
            </div>
            <div>
              <h2 className="text-[12px] font-black text-black sm:text-[21px] md:text-[27px]">
                Shop &amp; Save With Confidence
              </h2>
              <p className="mt-[2px] text-[8px] leading-[1.35] text-black sm:mt-1 sm:text-[16px] sm:leading-[1.4] md:text-[20px]">
                Comparing quotes won’t affect your credit score and there’s never any obligation to buy.
              </p>
            </div>
          </section>

          <footer className="mt-[10px] text-center text-[6px] leading-[1.6] text-[#7a838d] sm:mt-5 sm:text-[10px]">
            <div className="underline">Privacy Policy | Terms</div>
            <div className="mt-[3px]">
              This site may receive compensation from insurance partners. We are not an insurance company or agency.
            </div>
          </footer>
        </div>
      </article>
    </main>
  );
}


