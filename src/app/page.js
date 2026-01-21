import Link from "next/link";

export default function PennyPerMiles() {
  return (
    <div className="min-h-screen text-slate-900 font-sans">
      <div className="max-w-4xl mx-auto p-4">

        {/* Top Disclaimer */}
        <div className="text-center text-[11px] text-red-700 font-semibold">
          Paid advertisement and referral service for auto insurance options. Not a government website.
        </div>

        <div className="bg-white rounded-[14px] overflow-hidden">

          {/* HERO */}
          <section className="px-4 pb-3 text-center">
            <h1 className="text-[30px] font-semibold leading-7 mb-3">
              Auto Insurance Isn’t Getting Cheaper — That’s Why More Drivers Are Taking a Second Look
            </h1>
            <p className="text-[15px] text-slate-700 max-w-205 mx-auto">
              Premium rise quietly, cars sit more than they move, and household costs keep climbing.
              Many drivers are asking whether their current policy still matches how they actually drive.
            </p>
          </section>

          {/* IMAGE */}
          <div className="bg-gray-200 border-y border-gray-200">
            <img
              src="/car-img.jpeg"
              alt="Auto insurance review"
              className="w-full h-full object-cover rounded"
            />
          </div>

          {/* PRIMARY CTA */}
          <section className="bg-sky-100 border-y border-sky-200 px-5 py-5 text-center">
            <strong className="block text-[18px] text-sky-900 mb-1">
              Does Your Current Auto Insurance Still Make Sense?
            </strong>
            <p className="text-[14px] text-sky-800 max-w-190 mx-auto mb-3">
              Take a minute to review coverage options based on your driving habits,
              vehicle, and location. No obligation to switch or purchase.
            </p>

            <a
              href="https://h0mlr.ttrk.io/click"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold text-sm px-6 py-3 rounded-[10px]"
            >
              See Options
            </a>
          </section>

          {/* PRESSURE STRIP */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-4 px-5 py-5 bg-slate-50 border-b border-gray-200">
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <strong className="text-[22px] text-red-600 block">Rates ↑</strong>
              <span className="text-[13px] text-slate-600">
                Premium often increase without notice
              </span>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <strong className="text-[22px] text-red-600 block">Miles ↓</strong>
              <span className="text-[13px] text-slate-600">
                Many cars are driven far less
              </span>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <strong className="text-[22px] text-red-600 block">Costs ↑</strong>
              <span className="text-[13px] text-slate-600">
                Gas, repairs, and living expenses add pressure
              </span>
            </div>
          </section>

          {/* WHY SECTION */}
          <section className="px-5 py-6">
            <h2 className="text-center text-[22px] font-semibold mb-4">
              Why Drivers Are Reviewing Their Policies
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border border-gray-200 rounded-xl p-4">
                <h3 className="text-[16px] font-semibold mb-1">
                  Set-and-Forget Coverage
                </h3>
                <p className="text-[14px] text-slate-600">
                  Policies often stay unchanged for years, even when driving habits shift.
                </p>
              </div>

              <div className="border border-gray-200 rounded-xl p-4">
                <h3 className="text-[16px] font-semibold mb-1">
                  Multiple Cars Per Household
                </h3>
                <p className="text-[14px] text-slate-600">
                  Families with more than one vehicle may have more options than they realize.
                </p>
              </div>

              <div className="border border-gray-200 rounded-xl p-4">
                <h3 className="text-[16px] font-semibold mb-1">
                  Changed Driving Patterns
                </h3>
                <p className="text-[14px] text-slate-600">
                  Commutes, errands, and usage evolve — insurance doesn’t always adjust automatically.
                </p>
              </div>
            </div>
          </section>

          {/* DISCOVERY */}
          <section className="px-5 py-6">
            <h2 className="text-center text-[22px] font-semibold mb-4">
              What Many Drivers Discover After Comparing
            </h2>

            <ul className=" list-disc pl-5 text-[15px] space-y-2 list-inside text-left mx-auto w-fit ">
              <li>How coverage choices affect monthly premium</li>
              <li>Whether mileage or usage-based options are available</li>
              <li>If restructuring coverage fits current driving behavior better</li>
              <li>That reviewing options doesn’t require switching providers</li>
            </ul>

            <p className="text-center text-[12px] text-slate-500 mt-3">
              Availability, coverage, and pricing vary by insurer, state regulations, and driving history.
            </p>
          </section>

          {/* FINAL CTA */}
          <section className="bg-slate-900 text-white text-center px-5 py-6">
            <h2 className="text-[24px] font-semibold mb-2">
              Take 60 Seconds to Review Your Coverage
            </h2>
            <p className="text-[14px] text-indigo-200 mb-4">
              Checking options does not obligate you to change or purchase a policy.
            </p>

            <a
              href="https://h0mlr.ttrk.io/click"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold text-sm px-6 py-3 rounded-[10px]"
            >
              See Options
            </a>
          </section>

        </div>

        {/* FOOTER */}
        <footer className="text-center text-[11px] text-slate-500 mt-5 space-y-2">
          <div>
            <Link href="/privacy" className="underline mx-1">
              Privacy Policy
            </Link>
            |
            <Link href="/terms" className="underline mx-1">
              Terms
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
    </div>
  );
}
