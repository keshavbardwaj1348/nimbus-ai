import PageWrapper from "../components/PageWrapper";

function Landing() {
  return (
    <PageWrapper>
      <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
        <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            <h1 className="text-5xl font-extrabold leading-tight">
              The AI platform built for
              <span className="text-indigo-500"> modern teams</span>
            </h1>

            <p className="mt-6 text-lg text-slate-300">
              NimbusAI helps engineering and product teams automate workflows,
              monitor performance, and ship faster — without complexity.
            </p>

            <ul className="mt-8 space-y-4 text-slate-300">
              <li>✔ Automate repetitive workflows instantly</li>
              <li>✔ Real-time insights into system performance</li>
              <li>✔ Enterprise-grade security by default</li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="bg-slate-900 rounded-2xl p-8 shadow-2xl border border-slate-800">
            <h2 className="text-2xl font-bold mb-6">
              Get early access
            </h2>

            <form className="space-y-4">
              <input className="w-full rounded-lg bg-slate-800 px-4 py-3" placeholder="Full Name" />
              <input className="w-full rounded-lg bg-slate-800 px-4 py-3" placeholder="Work Email" />
              <input className="w-full rounded-lg bg-slate-800 px-4 py-3" placeholder="Company Name" />

              <button className="w-full rounded-xl bg-indigo-600 py-3 font-semibold hover:bg-indigo-500 transition">
                Request Access
              </button>
            </form>
          </div>

        </section>
      </main>
    </PageWrapper>
  );
}

export default Landing;
