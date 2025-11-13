"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/10 dark:bg-black/30 border-b border-white/10 text-white transition-all duration-500"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
        {/* LOGO */}
        <h1 className="text-2xl font-bold text-[var(--color-accent)]">
          VyomGarud
        </h1>

        {/* NAV LINKS (Desktop) */}
        <ul className="hidden md:flex gap-8 text-sm uppercase tracking-wide">
          {["About", "Capabilities", "Highlights", "Contact"].map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:text-[var(--color-accent)] transition"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
  href="#contact"
  className="hidden md:block bg-[var(--color-accent)] px-5 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-[var(--color-accent)] transition"
>
  Get in touch
</a>


        {/* MOBILE MENU ICON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col space-y-1"
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <motion.div
          className="md:hidden flex flex-col items-center bg-black/70 backdrop-blur-md py-6 space-y-4 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {["About", "Capabilities", "Highlights", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="hover:text-[var(--color-accent)] transition"
            >
              {link}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
