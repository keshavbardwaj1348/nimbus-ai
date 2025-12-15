import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  // Hide navbar on landing page
  if (location.pathname === "/landing") return null;

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-slate-950/80 border-b border-slate-800">
      <nav className="mx-auto max-w-7xl px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <span className="text-indigo-500">⚡</span>
          NimbusAI
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link
            to="/"
            className="text-slate-300 hover:text-white transition"
          >
            Home
          </Link>

          <Link
            to="/features/smart-automation"
            className="text-slate-300 hover:text-white transition"
          >
            Features
          </Link>

          <Link
            to="/contact"
            className="text-slate-300 hover:text-white transition"
          >
            Contact
          </Link>
        </div>

        {/* CTA */}
        <Link
          to="/contact"
          className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold
                     hover:bg-indigo-500 transition"
        >
          Contact Sales
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
