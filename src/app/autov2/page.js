'use client';

const reasons = [
  ['$', 'Rates Just\nWent Up'],
  ['🚗', 'New 2025\nDiscounts'],
  ['◆', 'Lower Rates\nAvailable'],
  ['✓', 'Same Coverage,\nLess Money'],
];
const tags = ['Multi-Car Owners','Homeowners','Short Trip Commuters','School Runs','Grocery Trips'];

export default function Page() {
  const go = () => { window.location.href = 'https://h0mlr.ttrk.io/click'; };
  return (
    <main className="min-h-screen bg-[#f3f3f3] font-[Arial,Helvetica,sans-serif] text-[#111827]">
      <article className="mx-auto w-full max-w-[920px] bg-white px-[14px] pb-8 pt-[18px] shadow-sm sm:px-7 md:px-8">
        <div className="mx-auto mb-3 w-full bg-[#ff3038] py-[5px] text-center text-[15px] font-extrabold leading-none text-white sm:text-[17px]">
          Updated 2 Hours Ago
        </div>

        <header className="text-center">
          <h1 className="mx-auto max-w-[850px] text-[31px] font-black leading-[0.98] tracking-[-1.4px] text-black sm:text-[46px] sm:tracking-[-2px] md:text-[55px]">
            Paying Too Much<br />For Auto Insurance Renewals?
          </h1>
          <p className="mt-3 text-[20px] font-black leading-tight text-[#ef2d2d] sm:text-[29px] md:text-[31px]">
            Americans Are Saving $652/Year
          </p>
          <p className="mt-1 text-[19px] font-black leading-tight text-black sm:text-[25px] md:text-[27px]">By Switching In Minutes.</p>
          <div className="mt-2 inline-block bg-[#ffe20a] px-2 py-[2px] text-[22px] font-black leading-tight text-black sm:text-[30px] md:text-[32px]">
            See If You Can Save Now.
          </div>
          <p className="mt-3 text-[15px] font-medium leading-[1.35] text-[#171717] sm:text-[19px] md:text-[21px]">
            Get real quotes from top-rated companies in your area.<br />
            No spam. No fees. Just real savings.
          </p>
        </header>

        <section className="relative mt-5 overflow-hidden rounded-[16px] sm:mt-7 sm:rounded-[20px]">
          <img src="/family-suv-hero.jpg" alt="Family-size compact SUV on an American road" className="h-[172px] w-full object-cover sm:h-[285px] md:h-[320px]" />
          <div className="absolute bottom-[8px] left-[10px] top-[8px] flex w-[132px] flex-col justify-center rounded-[14px] bg-black/80 px-3 text-white sm:bottom-[18px] sm:left-[20px] sm:top-[18px] sm:w-[215px] sm:px-5">
            <div className="text-[13px] font-bold leading-[1.25] sm:text-[21px]">Drivers Who<br />Compared<br />Saved an<br />Average of</div>
            <div className="mt-2 text-[43px] font-black leading-none text-[#00d43b] sm:text-[67px]">$652</div>
            <div className="mt-1 text-[18px] font-black leading-none text-[#00d43b] sm:text-[27px]">PER YEAR</div>
          </div>
        </section>

        <section className="relative mt-4 grid grid-cols-2 overflow-hidden rounded-[15px] border border-[#d9e3d8] sm:rounded-[20px]">
          <div className="bg-[#fff5eb] px-2 py-3 text-center sm:px-5 sm:py-5">
            <div className="text-[9px] font-bold uppercase text-[#956a4c] sm:text-[13px]">Current Premium Example</div>
            <div className="relative mx-auto mt-1 inline-block text-[31px] font-black leading-none text-[#737b82] sm:text-[48px]">
              $189/mo
              <span className="absolute left-[-4px] right-[-5px] top-[54%] h-[3px] -rotate-[6deg] bg-[#ef2d2d] sm:h-[4px]" />
            </div>
          </div>
          <div className="bg-[#eff9ef] px-2 py-3 text-center sm:px-5 sm:py-5">
            <div className="text-[9px] font-bold uppercase text-[#47784f] sm:text-[13px]">Compare Options From</div>
            <div className="mt-1 text-[31px] font-black leading-none text-[#00ad3e] sm:text-[48px]">$39/mo*</div>
          </div>
          <div className="absolute left-1/2 top-1/2 flex h-[38px] w-[38px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border bg-white text-[24px] font-bold text-[#00ad3e] sm:h-[54px] sm:w-[54px] sm:text-[32px]">→</div>
        </section>

        <button onClick={go} className="mt-4 w-full rounded-[13px] bg-[#0fbd51] py-[14px] text-[20px] font-black text-white shadow-sm sm:rounded-[17px] sm:py-[18px] sm:text-[30px]">
          CHECK MY RATES NOW&nbsp; ›
        </button>
        <div className="mt-2 text-center text-[13px] font-medium text-[#242b35] sm:text-[17px]">🔒 &nbsp; Fast, Secure &amp; Free – Takes 60 Seconds</div>

        <section className="mt-5 rounded-[16px] border border-[#dedede] px-2 pb-3 pt-3 sm:mt-6 sm:rounded-[20px] sm:px-5 sm:pb-5">
          <h2 className="text-center text-[15px] font-black sm:text-[20px]">Why Drivers Are Checking:</h2>
          <div className="mt-2 grid grid-cols-4 divide-x divide-[#e2e2e2]">
            {reasons.map(([icon,label]) => (
              <div key={label} className="px-1 text-center sm:px-3">
                <div className="mx-auto flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#0b2b43] text-[19px] font-black text-white sm:h-[48px] sm:w-[48px] sm:text-[24px]">{icon}</div>
                <div className="mt-2 whitespace-pre-line text-[9px] font-bold leading-[1.15] sm:text-[13px]">{label}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-4 text-center text-[13px] sm:text-[17px]"><span className="text-[20px] text-[#ffc800] sm:text-[26px]">★★★★★</span> &nbsp; Trusted by Over <strong className="text-[#08a93b]">6 Million</strong> Drivers</div>

        <div className="mt-4 flex flex-wrap justify-center gap-2 sm:gap-3">
          {tags.map(tag => <span key={tag} className="rounded-full border border-[#cbdced] bg-[#f6faff] px-3 py-[7px] text-[11px] font-bold text-[#26496a] sm:px-5 sm:py-2 sm:text-[14px]">{tag}</span>)}
        </div>

        <p className="mx-auto mt-4 max-w-[850px] text-[13px] leading-[1.45] text-[#2d4963] sm:mt-5 sm:text-[17px]">
          Great fit for <strong>multi-car households</strong>, <strong>homeowners bundling policies</strong>, and <strong>short-trip drivers</strong> doing school runs, grocery trips and everyday commuting.
        </p>

        <section className="mt-5 flex items-center gap-4 rounded-[16px] border border-[#d7e7d7] bg-[#f2fbf2] px-4 py-4 sm:rounded-[20px] sm:px-6 sm:py-5">
          <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full border-4 border-[#0caf49] text-[29px] font-black text-[#0caf49] sm:h-[72px] sm:w-[72px]">✓</div>
          <div><h3 className="text-[17px] font-black text-black sm:text-[23px]">Shop &amp; Save With Confidence</h3><p className="mt-1 text-[12px] leading-[1.35] text-black sm:text-[16px]">Comparing quotes won’t affect your credit score<br className="hidden sm:block" /> and there’s never any obligation to buy.</p></div>
        </section>

        <footer className="mt-6 text-center text-[9px] leading-5 text-[#77818b] sm:text-[10px]">
          <div><a href="/privacy" className="underline">Privacy Policy</a> | <a href="/terms" className="underline">Terms</a></div>
          <div>This site may receive compensation from insurance partners. We are not an insurance company or agency.</div>
          <div className="mt-1">*Rates and savings vary by driver, location, coverage and insurer. Use only with approved campaign sourcing.</div>
        </footer>
      </article>
    </main>
  );
}

