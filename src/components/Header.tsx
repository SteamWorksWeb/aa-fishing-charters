"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, Menu, X, ChevronDown } from "lucide-react";

type NavLink = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/captain-sonny-richards-of-sebastian-fl" },
  {
    label: "My Trips",
    children: [
      { label: "Deep Drop", href: "/trips/deep-drop" },
      { label: "Wildlife Splash", href: "/trips/wildlife-splash" },
      { label: "Inshore Dash", href: "/trips/inshore-dash" },
      { label: "Reef Quest", href: "/trips/reef-quest" },
      { label: "Sandbar Fun", href: "/trips/sandbar-fun" },
      { label: "Reef Romp", href: "/trips/reef-romp" },
    ],
  },
  { label: "Target Species", href: "/sebastian-fl-fish-species" },
  {
    label: "Learn More",
    children: [
      { label: "Mystery Marlin", href: "/mystery-marlin" },
      { label: "Things To Do", href: "/things-to-do" },
      { label: "Merchandise", href: "/merchandise" },
      { label: "Gift Card", href: "/gift-card" },
    ],
  },
  { label: "Reviews", href: "/sebastian-fl-fishing-charter-reviews" },
  { label: "Photos", href: "/sebastian-fl-fishing-charter-photos" },
  { label: "Rates", href: "/sebastian-fl-fishing-charter-rates" },
  { label: "Reports", href: "/sebastian-fl-fishing-reports" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="w-full z-50 sticky top-0"
    >
      {/* ── Top Utility Bar ── */}
      <div className="bg-slate-900 text-slate-200 text-sm py-2 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-y-1">

          {/* Left — Phone & Email */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
            <a
              href="tel:+17726632922"
              id="utility-bar-phone"
              className="flex items-center gap-1.5 hover:text-orange-400 transition-colors duration-200"
            >
              <Phone className="w-3.5 h-3.5 shrink-0" />
              <span>(772) 663-2922</span>
            </a>
            <a
              href="mailto:aquaholic075@gmail.com"
              id="utility-bar-email"
              className="flex items-center gap-1.5 hover:text-orange-400 transition-colors duration-200"
            >
              <Mail className="w-3.5 h-3.5 shrink-0" />
              <span>aquaholic075@gmail.com</span>
            </a>
          </div>

          {/* Right — Social Icons */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/captainsonnyrichards"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-slate-400 hover:text-orange-400 transition-colors duration-200"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="https://instagram.com/aaoffshore"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-slate-400 hover:text-orange-400 transition-colors duration-200"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Nav Bar ── */}
      <div className="bg-[#0d1b2a]/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/30">
        <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/logo2.webp"
              alt="AA Fishing Charter Logo"
              width={220}
              height={75}
              className="object-contain h-auto max-h-[60px] md:max-h-[75px] w-auto transition-opacity duration-200 group-hover:opacity-85"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                {link.href ? (
                  <Link
                    href={link.href}
                    className="flex items-center px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-md transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button className="flex items-center gap-1 px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-md transition-all duration-200 cursor-default">
                    {link.label}
                    <ChevronDown size={14} className="opacity-70 group-hover:rotate-180 transition-transform duration-200" />
                  </button>
                )}
                
                {/* Dropdown */}
                {link.children && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                    <div className="bg-white rounded-lg shadow-xl py-2 min-w-[200px] border border-slate-100">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-slate-700 hover:text-orange-500 hover:bg-slate-50 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="/sebastian-fl-fishing-charter-rates"
              id="header-book-cta"
              className="hidden md:inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold px-5 py-2 rounded-md shadow-md hover:shadow-orange-500/40 transition-all duration-300"
            >
              Book Now
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-md hover:bg-white/10 transition-colors text-slate-300"
              aria-label="Toggle mobile menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden border-t border-white/10 bg-[#0a1520]"
            >
              <div className="px-4 py-4 space-y-1">
                {/* Mobile contact row */}
                <div className="flex flex-col gap-2 pb-3 border-b border-white/10 mb-3">
                  <a href="tel:+17726632922" className="flex items-center gap-2 text-sm text-slate-400">
                    <Phone size={14} /> (772) 663-2922
                  </a>
                  <a href="mailto:aquaholic075@gmail.com" className="flex items-center gap-2 text-sm text-slate-400">
                    <Mail size={14} /> aquaholic075@gmail.com
                  </a>
                </div>

                {navLinks.map((link) => (
                  <div key={link.label}>
                    {link.href ? (
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <>
                        <div className="block px-3 py-2 text-sm text-slate-400 font-semibold uppercase tracking-wider mt-2">
                          {link.label}
                        </div>
                        <div className="flex flex-col ml-3 border-l border-white/10 pl-2">
                          {link.children?.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className="block px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ))}

                <div className="pt-3 border-t border-white/10">
                  <a
                    href="/sebastian-fl-fishing-charter-rates"
                    className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 rounded-md text-sm transition-colors duration-200"
                  >
                    Book Your Trip
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
