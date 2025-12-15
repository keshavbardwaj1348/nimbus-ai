// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Home from "./pages/Home";
// import Feature from "./pages/Feature";
// import Landing from "./pages/Landing";
// import Contact from "./pages/Contact";
// import GlobalCTA from "./components/GlobalCTA";

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="min-h-screen bg-slate-950 text-white">
        
//         {/* NAVBAR */}
//         <nav className="flex items-center justify-between px-8 py-5">
//           <div className="flex items-center gap-2 text-xl font-bold">
//             <span className="text-indigo-500">⚡</span>
//             NimbusAI
//           </div>
//         </nav>

//         {/* ROUTES */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/landing" element={<Landing />} />
//           <Route path="/features/:slug" element={<Feature />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>

//         {/* GLOBAL CTA */}
//         <GlobalCTA />
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;


import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Feature from "./pages/Feature";
import Landing from "./pages/Landing";
import Contact from "./pages/Contact";

import Navbar from "./components/Navbar";
import GlobalCTA from "./components/GlobalCTA";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-white">

        {/* NAVBAR */}
        <Navbar />

        {/* ROUTES */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/features/:slug" element={<Feature />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* GLOBAL CTA */}
        <GlobalCTA />
      </div>
    </BrowserRouter>
  );
}

export default App;
