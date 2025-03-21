import { Link, Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import AddMedicine from "./AddMedicine";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white p-6 space-y-4 fixed top-0 left-0 h-full z-10">
        <h2 className="text-2xl font-bold mb-6">MediTrack</h2>
        <nav className="flex flex-col space-y-3">
          <Link to="/dashboard" className="hover:text-yellow-300">Dashboard</Link>
          <Link to="/about" className="hover:text-yellow-300">About</Link>
          <Link to="/addmedicine" className="hover:text-yellow-300">Add Medicine</Link>
          <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
          <Link to="/profile" className="hover:text-yellow-300">Profile</Link>
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
          <Route path="/addmedicine" element={<div className="p-8"><AddMedicine /></div>} />
          <Route path="/contact" element={<div className="p-8"><Contact /></div>} />
          <Route path="/profile" element={<div className="p-8"><Profile /></div>} />
        </Routes>
      </main>
    </div>
  );
};

export default MainLayout;
