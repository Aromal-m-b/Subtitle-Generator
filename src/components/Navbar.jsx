import React, { useState } from "react";
import logo from "../assets/Scribe-Icon.png";

const NAV_ITEMS = [
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ's", href: "#faq" },
  { label: "Blogs", href: "#blogs" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-[80px] bg-[#010308] border-b-2 border-[#56585d] px-6 flex items-center">

        {/* Logo (Left) */}
        <div className="flex items-center gap-4 z-10">
          <img src={logo} alt="Scribe Logo" className="h-14" />
          <h1 className="text-white font-bold text-xl md:text-3xl">
            Scribe
          </h1>
        </div>

        {/* Center Nav Items (Desktop Only) */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-10">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white hover:text-gray-400"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right Section */}
        <div className="ml-auto flex items-center gap-4">

          {/* Get Started Button (Desktop) */}
          <button className="hidden md:block bg-[#56585d] px-4 py-2 rounded text-white hover:bg-gray-700 transition">
            Get Started
          </button>

          {/* Hamburger (Mobile) */}
          <button
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Full Screen Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-[#010308] flex flex-col">

          {/* Mobile Header */}
          <div className="h-[100px] px-6 flex items-center justify-between border-b-2 border-[#56585d]">
            <h1 className="text-white text-2xl font-bold">
              Scribe
            </h1>

            <button
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="text-white text-2xl"
            >
              ✕
            </button>
          </div>

          {/* Mobile Nav Items */}
          <div className="flex flex-col items-center justify-center flex-1 gap-10 text-xl">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-white hover:text-gray-400"
              >
                {item.label}
              </a>
            ))}

            <button className="bg-[#56585d] px-6 py-3 rounded text-white hover:bg-gray-700 transition">
              Get Started
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
