import Link from "next/link";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";

const quickLinks = [
  { label: "Home",           href: "/" },
  { label: "About",          href: "/captain-sonny-richards-of-sebastian-fl" },
  { label: "Target Species", href: "/sebastian-fl-fish-species" },
  { label: "Reviews",        href: "/sebastian-fl-fishing-charter-reviews" },
  { label: "Photos",         href: "/sebastian-fl-fishing-charter-photos" },
  { label: "Rates",          href: "/sebastian-fl-fishing-charter-rates" },
  { label: "Reports",        href: "/sebastian-fl-fishing-reports" },
  { label: "Contact",        href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Col 1 — Brand */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="inline-block">
            <Image
              src="/images/logo2.webp"
              alt="AA Fishing Charter Logo"
              width={220}
              height={75}
              className="object-contain h-auto max-h-[60px] w-auto opacity-90 hover:opacity-100 transition-opacity"
            />
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed">
            Premier inshore and offshore fishing charters on Florida&apos;s Treasure Coast. Captain Sonny Richards — putting you on fish since day one.
          </p>
          <p className="text-slate-500 text-xs mt-auto pt-4 border-t border-white/10">
            © {new Date().getFullYear()} AA Fishing Charter. All rights reserved.
          </p>
        </div>

        {/* Col 2 — Quick Links */}
        <div>
          <p className="text-white font-semibold text-sm uppercase tracking-[0.15em] mb-5">Quick Links</p>
          <ul className="space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-slate-400 hover:text-orange-400 text-sm transition-colors duration-200">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Contact */}
        <div>
          <p className="text-white font-semibold text-sm uppercase tracking-[0.15em] mb-5">Contact Captain Sonny</p>
          <ul className="space-y-3">
            <li>
              <a href="tel:+17726632922" className="flex items-center gap-2.5 text-slate-400 hover:text-orange-400 text-sm transition-colors duration-200">
                <Phone className="w-4 h-4 shrink-0 text-orange-500" />
                (772) 663-2922
              </a>
            </li>
            <li>
              <a href="mailto:aquaholic075@gmail.com" className="flex items-center gap-2.5 text-slate-400 hover:text-orange-400 text-sm transition-colors duration-200">
                <Mail className="w-4 h-4 shrink-0 text-orange-500" />
                aquaholic075@gmail.com
              </a>
            </li>
            <li className="pt-2">
              <p className="text-slate-500 text-xs leading-relaxed">
                Based in Sebastian, FL.<br />
                Fishing the Indian River, Sebastian Inlet & Atlantic Ocean.
              </p>
            </li>
          </ul>
        </div>

        {/* Col 4 — Social */}
        <div>
          <p className="text-white font-semibold text-sm uppercase tracking-[0.15em] mb-5">Follow the Action</p>
          <div className="flex items-center gap-4 mb-5">
            {/* Facebook */}
            <a href="https://www.facebook.com/captainsonnyrichards" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/10 flex items-center justify-center text-slate-400 hover:text-orange-400 transition-all duration-200">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="https://instagram.com/aaoffshore" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/10 flex items-center justify-center text-slate-400 hover:text-orange-400 transition-all duration-200">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>
          <p className="text-slate-500 text-xs leading-relaxed">
            Follow us for real-time catch updates, trip availability announcements, and behind-the-scenes moments from the water.
          </p>

          <div className="mt-6 pt-5 border-t border-white/10">
            <Link href="/sebastian-fl-fishing-charter-rates" className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-4 rounded-md text-sm transition-colors duration-200">
              Book a Trip
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
