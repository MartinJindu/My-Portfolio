import { useState } from "react";
import { Link } from "react-router-dom";
import myPic from "../assets/my_img.jpg";
import { useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Modern icons

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className=" bg-gray-900 text-white px-6 md:px-12 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-grow justify-between items-center">
        {/* Logo Section */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <div className="h-14 w-14 bg-amber-500 rounded-full">
            <img
              src={myPic}
              alt="Profile"
              className=" object-cover rounded-full shadow-lg border-2 hover:border-amber-400"
            />
          </div>
          <span className="ml-3 text-xl font-bold hover:text-amber-400">
            My Portfolio
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 text-lg">
          <Link to="/" className="hover:text-amber-400 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-amber-400 transition">
            About
          </Link>
          <Link to="/portfolio" className="hover:text-amber-400 transition">
            Portfolio
          </Link>
          <Link to="/contact" className="hover:text-amber-400 transition">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl focus:outline-none"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-gray-800 py-4 space-y-4 text-lg">
          <Link
            to="/"
            className="hover:text-amber-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-amber-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/portfolio"
            className="hover:text-amber-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            className="hover:text-amber-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
