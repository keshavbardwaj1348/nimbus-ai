import { Link } from "react-router-dom";
import { features } from "../data/features";
import PageWrapper from "../components/PageWrapper";

function Home() {
  return (
    <PageWrapper>
      <main className="px-8 py-20">

        {/* HERO SECTION */}
        <section className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl font-extrabold leading-tight">
              Build smarter. <br /> Ship faster.
            </h1>

            <p className="mt-6 text-lg text-slate-300">
              NimbusAI helps modern teams automate workflows, gain real-time
              insights, and ship products faster using AI-powered intelligence.
            </p>

            <Link
              to="/contact"
              className="inline-block mt-8 rounded-xl bg-indigo-600 px-6 py-3 text-lg font-semibold
                         hover:bg-indigo-500 hover:shadow-lg transition-all duration-200"
            >
              Contact Sales
            </Link>
          </div>

          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1664575602276-acd073f104c1"
              alt="NimbusAI Dashboard"
              className="rounded-2xl shadow-2xl border border-slate-800"
            />
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="mx-auto max-w-7xl mt-32">
          <h2 className="text-3xl font-bold mb-12">
            Everything you need to scale faster
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Link
                key={feature.slug}
                to={`/features/${feature.slug}`}
                className="group rounded-2xl bg-slate-900 p-6 transition
                           hover:bg-slate-800 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="text-3xl mb-4 text-indigo-500">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-semibold mb-2">
                  {feature.title}
                </h3>

                <p className="text-slate-400 text-sm">
                  {feature.shortDescription}
                </p>

                <span className="mt-4 inline-block text-sm font-medium text-indigo-400 group-hover:text-indigo-300">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </section>

      </main>
    </PageWrapper>
  );
}

export default Home;
