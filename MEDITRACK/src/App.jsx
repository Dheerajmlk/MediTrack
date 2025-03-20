import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import About from "./Components/About";
import AddMedicine from "./Components/AddMedicine";
import Contact from "./Components/Contact";
import Profile from "./Components/Profile";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();
  const shouldShowNavbar = isAuthenticated && location.pathname !== "/";

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/About" element={<About />} />
        <Route path="/AddMedicine" element={<AddMedicine />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </>
  );
}
