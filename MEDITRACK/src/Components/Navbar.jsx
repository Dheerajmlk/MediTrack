import React from "react";
import { Link } from "react-router-dom";
import { FaPlusCircle, FaUser, FaPhone, FaInfoCircle, FaSignOutAlt, FaHome } from "react-icons/fa";
import "../styles/Navbar.css"

export default function Navbar() {
    return (
        <nav className="bg-blue-600 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">
                    <Link to="/">MediTrack</Link>
                </h1>
                <ul className="flex space-x-6">
                    <li>
                        <Link to="/" className="flex items-center space-x-2 hover:text-gray-300">
                            <FaHome /> <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/add-medicine" className="flex items-center space-x-2 hover:text-gray-300">
                            <FaPlusCircle /> <span>Add Medicine</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="flex items-center space-x-2 hover:text-gray-300">
                            <FaPhone /> <span>Contact</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="flex items-center space-x-2 hover:text-gray-300">
                            <FaInfoCircle /> <span>About</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile" className="flex items-center space-x-2 hover:text-gray-300">
                            <FaUser /> <span>Profile</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="flex items-center space-x-2 text-red-400 hover:text-red-600">
                            <FaSignOutAlt /> <span>Logout</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
