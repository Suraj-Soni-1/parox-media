import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 768 : true
  );

  useEffect(() => {
    function handleResize() {
      const desktop = window.innerWidth >= 768;
      setIsDesktop(desktop);
      if (desktop) setMenuOpen(false);
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const links = (
    <>
      <li>
        <a href="#home" className="hover:text-green-600 transition" onClick={() => setMenuOpen(false)}>
          Home
        </a>
      </li>
      <li>
        <a href="#services" className="hover:text-green-600 transition" onClick={() => setMenuOpen(false)}>
          Services
        </a>
      </li>
      <li>
        <a href="#cases" className="hover:text-green-600 transition" onClick={() => setMenuOpen(false)}>
          Case Studies
        </a>
      </li>
      <li>
        <a href="#process" className="hover:text-green-600 transition" onClick={() => setMenuOpen(false)}>
          Process
        </a>
      </li>
      <li>
        <a href="#contact" className="hover:text-green-600 transition" onClick={() => setMenuOpen(false)}>
          Contact
        </a>
      </li>
    </>
  );

  return (
    <nav className="bg-white text-black px-6 py-4 flex justify-between items-center shadow-md relative">
      {/* Left - Logo */}
      <div className="text-2xl font-bold">LOGO</div>

      {/* Center - Desktop Links */}
      {isDesktop && (
        <ul className="flex items-center space-x-8 text-lg">{links}</ul>
      )}

      {/* Right - Button (desktop only) */}
      {isDesktop ? (
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
          Let’s Work Together
        </button>
      ) : (
        // Mobile Hamburger
        <button
          onClick={() => setMenuOpen((s) => !s)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
          className="focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      )}

      {/* Mobile dropdown */}
      {!isDesktop && menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white flex flex-col items-center space-y-4 py-6 shadow-md z-50">
          {links}
          <li>
            <button
              onClick={() => setMenuOpen(false)}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
              Let’s Work Together
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}
