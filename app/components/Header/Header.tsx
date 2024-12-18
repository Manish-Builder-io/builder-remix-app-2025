import { Link } from "@remix-run/react";
import { useState } from "react";

// Header Component
const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white py-4 shadow-md">
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-semibold">
          <Link to="/" className="hover:text-gray-300">
            Remix +  Builder
          </Link>
        </div>

        {/* Navigation Links */}
        <ul
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:flex space-x-8 text-lg`}
        >
          <li>
            <Link to="/builder-demo" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="hover:text-gray-300">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-300">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          aria-label="Toggle menu"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            className="stroke-white"
            viewBox="0 0 24 24"
          >
            <path
              d="M3 6h18M3 12h18M3 18h18"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Header;
