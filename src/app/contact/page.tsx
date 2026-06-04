import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Contact Captain Sonny | AA Fishing Charter in Sebastian, FL",
  description: "Get in touch with Captain Sonny Richards to book your Sebastian FL fishing charter. Call (772) 663-2922 to secure your date.",
};

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-20">
      {/* ── HEADER ── */}
      <section className="bg-slate-900 py-16 px-4 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-0" />
        <Image src="/images/hero-2.webp" alt="Sebastian FL Water" fill className="object-cover object-center opacity-30 z-0" sizes="100vw" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Captain Sonny</h1>
          <p className="text-slate-300 text-lg">Ready to book or have a question? Let&apos;s talk fishing.</p>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Contact Details */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Get In Touch</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              The fastest way to reach me and check availability is always by phone. Call or text me directly. If I&apos;m out on the water, leave a message and I&apos;ll get back to you as soon as I hit the dock.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="text-orange-500 w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Call or Text</h3>
                  <a href="tel:+17726632922" className="text-slate-600 hover:text-orange-500 transition-colors text-lg">(772) 663-2922</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="text-orange-500 w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Email</h3>
                  <a href="mailto:aquaholic075@gmail.com" className="text-slate-600 hover:text-orange-500 transition-colors text-lg">aquaholic075@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="text-orange-500 w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Location</h3>
                  <p className="text-slate-600 text-lg">Sebastian, Florida</p>
                  <p className="text-slate-500 text-sm">Fishing the Indian River & Offshore Reefs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Form (Visual Mockup for now or just extra info) */}
          <div className="bg-white rounded-xl shadow-md border border-slate-200 p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1">Name</label>
                <input type="text" id="name" className="w-full border border-slate-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-1">Phone Number</label>
                <input type="tel" id="phone" className="w-full border border-slate-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="(555) 555-5555" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1">What trip are you interested in?</label>
                <textarea id="message" rows={4} className="w-full border border-slate-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="I'm looking to book a 6-hour offshore trip next month..."></textarea>
              </div>
              <button type="button" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-md transition-colors">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}
