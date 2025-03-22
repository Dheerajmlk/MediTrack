import { Link, Routes, Route, useLocation } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
// import AddMedicine from "./AddMedicine";

const MainLayout = () => {
  const location = useLocation();
  const navLinks = [
    { to: "/dashboard", label: "Dashboard" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
    { to: "/profile", label: "Profile" },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-blue-900 to-blue-700 text-white p-6 space-y-6 fixed top-0 left-0 h-full shadow-lg z-10">
        <h2 className="text-3xl font-extrabold tracking-wide mb-8 text-yellow-300">MediTrack</h2>
        <nav className="flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`py-2 px-4 rounded-md transition-all duration-300 hover:bg-blue-800 hover:text-yellow-300 ${
                location.pathname === link.to ? "bg-blue-800 text-yellow-300" : "text-white"
              }`}
            >
              {link.label}
            </Link>
            
          ))}
        </nav>
      </aside>

      {/* Content Area */}
      <main className="ml-64 flex-1 bg-gray-50 h-screen overflow-y-auto">
        <Routes>
          <Route
            path="/dashboard"
            element={
              <div className="p-8">
                <Dashboard />
              </div>
            }
          />
          
          <Route path="/about" element={<div className="p-8"><About /></div>} />
          {/* <Route path="/addmedicine" element={<div className="p-8"><AddMedicine /></div>} /> */}
          <Route path="/contact" element={<div className="p-8"><Contact /></div>} />
          <Route path="/profile" element={<div className="p-8"><Profile /></div>} />

        </Routes>
      </main>
    </div>
  );
};

export default MainLayout;
