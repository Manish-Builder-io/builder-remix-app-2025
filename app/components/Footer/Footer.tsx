import { Link } from "@remix-run/react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Footer Left: Links or Logo */}
        <div className="text-center md:text-left">
          <p className="text-lg font-semibold">Remix Builder App</p>
          <p className="text-sm text-gray-400 mt-2">
            &copy; 2024 Remix Builder App. All Rights Reserved.
          </p>
        </div>

        {/* Footer Right: Navigation Links */}
        <div className="mt-4 md:mt-0 flex space-x-6 text-lg">
          <Link to="/builder-demo" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-400">
            About
          </Link>
          <Link to="/blogs" className="hover:text-gray-400">
            Blog
          </Link>
          <Link to="/contact" className="hover:text-gray-400">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
