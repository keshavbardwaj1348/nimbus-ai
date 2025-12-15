import { Link, useLocation } from "react-router-dom";

function GlobalCTA() {
  const location = useLocation();

  if (location.pathname === "/contact") return null;

  return (
    <div className="mt-32 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-8 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to see NimbusAI in action?
        </h2>

        <p className="text-slate-300 mb-8">
          Talk to our team and transform your workflows today.
        </p>

        <Link
          to="/contact"
          className="inline-block rounded-xl bg-indigo-600 px-8 py-4 text-lg font-semibold
                     hover:bg-indigo-500 hover:scale-105 transition-all"
        >
          Contact Sales
        </Link>
      </div>
    </div>
  );
}

export default GlobalCTA;
