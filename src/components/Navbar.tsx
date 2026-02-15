"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { title: "Home", href: "#" },
    { title: "Services", href: "#services" },
    { title: "Gallery", href: "#gallery" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/70 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold tracking-tight">
          PrimeCut
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-black font-medium">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-gray-700 transition"
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="relative w-8 h-8 flex flex-col justify-between items-center"
          >
            <span
              className={`h-0.5 w-8 bg-black rounded-full transition-transform duration-300 ${
                open ? "rotate-45 translate-y-3" : ""
              }`}
            />
            <span
              className={`h-0.5 w-8 bg-black rounded-full transition-opacity duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-0.5 w-8 bg-black rounded-full transition-transform duration-300 ${
                open ? "-rotate-45 -translate-y-3" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        className="md:hidden overflow-hidden bg-white/90 backdrop-blur-md"
      >
        <div className="flex flex-col gap-6 px-6 py-4 text-black font-medium">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-gray-700 transition"
              onClick={() => setOpen(false)}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}
