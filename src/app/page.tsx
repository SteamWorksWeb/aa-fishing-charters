"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Heart, DollarSign, ShieldCheck, ArrowRight, ChevronDown,
  Anchor, Fish, Sunset, CheckCircle2, ChevronRight,
} from "lucide-react";

/* ─── Shared animation preset ─── */
const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true },
  transition: { duration: 0.6 },
};

/* ─── DATA ─── */
const painPoints = [
  { icon: Heart,       title: "Patient & Beginner Friendly", body: "Zero intimidation. Whether you're chasing deep-water Mahi or introducing the kids to inshore fishing, Captain Sonny brings unmatched patience and hospitality." },
  { icon: DollarSign,  title: "Transparent Pricing",         body: "No hidden fuel surcharges. All premium gear, tackle, and necessary licenses are included in your upfront rate." },
  { icon: ShieldCheck, title: "Safety & Comfort",            body: "Immaculately maintained, fully inspected vessels designed for a smooth, safe ride from the Indian River to the offshore reefs." },
];

const services = [
  { icon: Fish,   title: "Inshore Adventure",   price: "$500", duration: "4 Hours", img: "/images/trip-inshore.jpg",   desc: "Target Snook, Redfish, and Trout on the Indian River Lagoon — perfect for all ages and skill levels.", href: "/sebastian-fl-fishing-charter-rates" },
  { icon: Anchor, title: "Offshore Trolling",   price: "$950", duration: "6 Hours", img: "/images/trip-reef-6hr.jpg", desc: "Head to the natural reef system offshore for Mahi, Kingfish, Sailfish, and more big-game action.", href: "/sebastian-fl-fishing-charter-rates" },
  { icon: Sunset, title: "Wildlife / Eco Tour", price: "$150", duration: "2 Hours", img: "/images/trip-wildlife.jpg", desc: "A relaxed cruise along the beautiful Indian River — spot dolphins, manatees, and coastal birds.", href: "/sebastian-fl-fishing-charter-rates" },
];

const galleryImages = [
  { src: "/images/gallery-mahi-1.png",       alt: "Mahi-mahi catch offshore Sebastian" },
  { src: "/images/gallery-sailfish-1.png",   alt: "Atlantic Sailfish catch" },
  { src: "/images/gallery-redfish.jpg",      alt: "Redfish on the Indian River flats" },
  { src: "/images/gallery-snook-1.jpg",      alt: "Snook fishing Sebastian FL" },
  { src: "/images/gallery-mahi-2.png",       alt: "Mahi catch on the Atlantic" },
  { src: "/images/gallery-sailfish-2.png",   alt: "Sailfish release Sebastian" },
  { src: "/images/gallery-kingmackerel.jpg", alt: "King Mackerel offshore Florida" },
  { src: "/images/gallery-duo.jpg",          alt: "Happy anglers with their catch" },
];

const faqs = [
  { q: "What should I bring?",              a: "Sunscreen, sunglasses, a hat, non-marking shoes, food and drinks you enjoy, and your camera. We handle everything else." },
  { q: "Are licenses included?",             a: "Yes — all necessary Florida fishing licenses are included in your charter rate. You simply show up and fish." },
  { q: "What is the cancellation policy?",  a: "We offer a full refund with 48+ hours notice. Cancellations within 48 hours are subject to a 50% cancellation fee. Weather cancellations receive a full refund or free reschedule." },
  { q: "How many people can come?",         a: "Our vessel comfortably accommodates up to 6 passengers. Private charters ensure personalized attention for your entire group." },
  { q: "Do you go out in rough weather?",   a: "Safety is our top priority. Captain Sonny monitors conditions closely and will communicate any weather concerns well in advance. If we need to reschedule, we'll make it right." },
];

const reports = [
  { date: "May 28, 2025", category: "Offshore Report", title: "Mahi Season is ON — 50-Mile Spread is Loaded", excerpt: "The weed lines are stacked 40–60 miles out. We boated a 12-fish box in under 4 hours. Don't miss this window.", img: "/images/gallery-mahi-3.png" },
  { date: "May 15, 2025", category: "Inshore Report",  title: "Snook on the Flats — Indian River Heating Up",  excerpt: "Water temps hit 76°F and the Snook bite has gone absolutely crazy around the mangrove points. Light tackle paradise.", img: "/images/gallery-snook-1.jpg" },
  { date: "May 2,  2025", category: "Offshore Report", title: "Sailfish Surprise — Two Releases in One Morning", excerpt: "Trolled the reef edge and got into a surprise Sailfish bite. Two releases before 10am. The bite is out there.", img: "/images/gallery-sailfish-2.png" },
];

/* ─── PAGE ─── */
export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <Image src="/images/hero-1.webp" alt="Fishing on the Sebastian Water with Captain Sonny Richards" fill priority fetchPriority="high" quality={85} className="object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#0d1b2a] z-10" />

        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }} className="text-orange-400 text-sm uppercase tracking-[0.25em] font-semibold mb-4">
            Sebastian, FL · Indian River · Offshore Reefs
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Unforgettable Days on the{" "}<span className="text-orange-400">Sebastian Water.</span><br />Built for Your Family.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
            Captain Sonny Richards delivers world-class inshore and offshore fishing adventures — from the calm Indian River Lagoon to the deep Atlantic. All skill levels welcome.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sebastian-fl-fishing-charter-rates" id="hero-book-cta" className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-md text-base shadow-xl hover:shadow-orange-500/50 transition-all duration-300 group">
              View Trips & Rates <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/captain-sonny-richards-of-sebastian-fl" id="hero-captain-cta" className="inline-flex items-center justify-center gap-2 border-2 border-white/70 text-white font-semibold px-8 py-4 rounded-md text-base hover:bg-white hover:text-slate-900 transition-all duration-300">
              Meet Captain Sonny
            </Link>
          </motion.div>
        </div>

        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 z-20">
          <ChevronDown size={28} />
        </motion.div>
      </section>

      {/* ── PAIN POINTS ── */}
      <section className="bg-white py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {painPoints.map((pt, i) => {
            const Icon = pt.icon;
            return (
              <motion.div key={pt.title} {...fadeUp} transition={{ duration: 0.55, delay: i * 0.1 }} className="group flex flex-col gap-4 bg-white border border-slate-200 hover:border-orange-500/40 rounded-xl p-8 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md">
                <span className="w-12 h-12 rounded-[10px] bg-orange-500/15 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-orange-400" strokeWidth={1.8} />
                </span>
                <h3 className="text-slate-900 text-xl font-bold leading-snug">{pt.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{pt.body}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="bg-slate-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-14">
            <p className="text-orange-400 text-sm uppercase tracking-[0.2em] font-semibold mb-3">What We Offer</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Choose Your Adventure</h2>
            <p className="text-slate-600 max-w-xl mx-auto text-base">From calm backwater flats to deep Atlantic swells — AA Fishing Charter has the right trip for your crew.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.title} {...fadeUp} transition={{ duration: 0.6, delay: i * 0.12 }} className="group bg-white border border-slate-200 hover:border-orange-500/40 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md flex flex-col">
                  <div className="relative h-52 overflow-hidden">
                    <Image src={s.img} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width:768px)100vw,33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-2.5 py-1 rounded-md">{s.duration}</span>
                  </div>
                  <div className="p-6 flex flex-col flex-1 gap-3">
                    <div className="flex items-center gap-2">
                      <Icon className="w-5 h-5 text-orange-400" strokeWidth={1.8} />
                      <h3 className="text-slate-900 text-lg font-bold">{s.title}</h3>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed flex-1">{s.desc}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-orange-400 font-bold text-lg">Starting at {s.price}</span>
                      <Link href={s.href} className="inline-flex items-center gap-1.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold px-4 py-2 rounded-md transition-all duration-200 group/btn">
                        Book Now <ArrowRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div {...fadeUp} className="text-center mt-10">
            <Link href="/sebastian-fl-fishing-charter-rates" className="inline-flex items-center gap-2 border border-slate-200 hover:border-orange-500/60 text-slate-600 hover:text-orange-500 px-6 py-3 rounded-md text-sm font-medium transition-all duration-300">
              View All Trips & Rates <ChevronRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT CAPTAIN SONNY ── */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp} className="relative h-[480px] md:h-[560px] rounded-xl overflow-hidden shadow-xl shadow-slate-200">
            <Image src="/images/captain-sonny.webp" alt="Captain Sonny Richards of AA Fishing Charter, Sebastian FL" fill className="object-cover object-top" sizes="(max-width:768px)100vw,50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5">
              <p className="text-white font-bold text-lg leading-tight">Captain Sonny Richards</p>
              <p className="text-orange-400 text-sm font-semibold">Sebastian, FL · Licensed USCG Captain</p>
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }}>
            <p className="text-orange-400 text-sm uppercase tracking-[0.2em] font-semibold mb-4">Your Captain</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">Born & Raised on These Waters</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Captain Sonny Richards isn&apos;t just a fishing guide — he&apos;s a lifelong Sebastian local who grew up navigating every bend of the Indian River Lagoon and every reef on the Atlantic shelf. That intimate, local knowledge is your biggest advantage on the water.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Whether you&apos;re a first-time angler or a seasoned tournament fisherman, Sonny tailors every trip to your experience level and goals. His priority is simple: put you on fish, keep you safe, and make sure you leave with a story worth telling.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "USCG Licensed Captain — fully insured",
                "Lifelong Sebastian, FL local — unmatched local knowledge",
                "All ages & skill levels welcomed and accommodated",
                "All tackle, gear & licenses included in your rate",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-600 text-sm">
                  <CheckCircle2 size={16} className="shrink-0 mt-0.5 text-orange-400" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/captain-sonny-richards-of-sebastian-fl" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-md transition-all duration-300 group shadow-lg hover:shadow-orange-500/30">
              Learn More About Sonny <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="bg-slate-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <p className="text-orange-400 text-sm uppercase tracking-[0.2em] font-semibold mb-3">Recent Catches</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Life on the Water</h2>
            <p className="text-slate-600 max-w-lg mx-auto text-base">Every trip tells a story. Here&apos;s a look at what&apos;s been coming over the rail.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <motion.div key={img.src} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.07 }} className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer">
                <Image src={img.src} alt={img.alt} fill className="object-cover group-hover:scale-110 transition-transform duration-700" sizes="(max-width:768px)50vw,25vw" />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <p className="text-white text-xs font-medium leading-tight">{img.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="text-center mt-10">
            <Link href="/sebastian-fl-fishing-charter-photos" className="inline-flex items-center gap-2 border border-slate-200 hover:border-orange-500/60 text-slate-600 hover:text-orange-500 px-6 py-3 rounded-md text-sm font-medium transition-all duration-300">
              View Full Gallery <ChevronRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <p className="text-orange-400 text-sm uppercase tracking-[0.2em] font-semibold mb-3">Good to Know</p>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600 text-base">Everything you need to know before you step aboard.</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.08 }} className="bg-white border border-slate-200 hover:border-orange-500/30 shadow-sm rounded-xl p-6 transition-all duration-200">
                <h3 className="text-slate-900 font-semibold text-base mb-2">{faq.q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FISHING REPORTS ── */}
      <section className="bg-slate-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <p className="text-orange-400 text-sm uppercase tracking-[0.2em] font-semibold mb-3">Latest Updates</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Fishing Reports</h2>
            <p className="text-slate-600 max-w-lg mx-auto text-base">Stay current with what&apos;s biting. Captain Sonny shares regular updates straight from the water.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reports.map((r, i) => (
              <motion.article key={r.title} {...fadeUp} transition={{ duration: 0.6, delay: i * 0.12 }} className="group bg-white border border-slate-200 hover:border-orange-500/30 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md">
                <div className="relative h-48 overflow-hidden">
                  <Image src={r.img} alt={r.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width:768px)100vw,33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute top-3 left-3 bg-orange-500/90 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md">{r.category}</span>
                </div>
                <div className="p-5">
                  <p className="text-slate-500 text-xs mb-2">{r.date}</p>
                  <h3 className="text-slate-900 font-bold text-base mb-2 leading-snug group-hover:text-orange-500 transition-colors">{r.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{r.excerpt}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative overflow-hidden py-24 px-4">
        <Image src="/images/hero-2.webp" alt="Open water Sebastian FL" fill className="object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        <motion.div {...fadeUp} className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-orange-400 text-sm uppercase tracking-[0.25em] font-semibold mb-4">Don&apos;t Wait — Spots Fill Fast</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Ready for Your Unforgettable<br />Day on the Water?
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            Call Captain Sonny directly or book online. Limited spots available — especially during peak Mahi and Sailfish season.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sebastian-fl-fishing-charter-rates" id="final-cta-book" className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-md text-lg shadow-xl hover:shadow-orange-500/50 transition-all duration-300 group">
              Book Your Trip Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="tel:+17726632922" id="final-cta-call" className="inline-flex items-center justify-center gap-2 border-2 border-white/70 text-white font-semibold px-10 py-4 rounded-md text-lg hover:bg-white hover:text-slate-900 transition-all duration-300">
              Call (772) 663-2922
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
