"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Dumbbell, Armchair, Beer, ShoppingBag, PartyPopper, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Dumbbell,
    title: "Gym Services",
    description: "State-of-the-art equipment for your fitness journey",
    color: "linear-gradient(135deg, #d4af37, #c9a961)",
  },
  {
    icon: Armchair,
    title: "VIP Lounge",
    description: "Exclusive relaxation space for premium comfort",
    color: "linear-gradient(135deg, #c9a961, #b8945f)",
  },
  {
    icon: Beer,
    title: "Outdoor Bar",
    description: "Refreshing drinks in a vibrant atmosphere",
    color: "linear-gradient(135deg, #b8945f, #d4af37)",
  },
  {
    icon: ShoppingBag,
    title: "Mini Mart",
    description: "Convenience essentials at your fingertips",
    color: "linear-gradient(135deg, #d4af37, #8b7355)",
  },
  {
    icon: PartyPopper,
    title: "Event Hosting",
    description: "Unforgettable parties and celebrations",
    color: "linear-gradient(135deg, #c9a961, #d4af37)",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* background blobs */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(88,28,135,0.65), rgba(131,24,67,0.55), rgba(30,58,138,0.65))" }} />
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
            style={{ background: "rgba(212,175,55,0.18)", filter: "blur(90px)" }}
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full"
            style={{ background: "rgba(201,169,97,0.14)", filter: "blur(90px)" }}
          />
        </div>

        {/* hero content */}
        <div style={{ position: "relative", zIndex: 10, textAlign: "center", width: "100%", maxWidth: "900px", margin: "0 auto", padding: "0 24px" }}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <h1 className="font-bold text-white mb-6" style={{ fontSize: "clamp(2.6rem, 6.5vw, 5.2rem)", lineHeight: 1.1 }}>
              Welcome to
              <br />
              <span style={{ background: "linear-gradient(135deg, #d4af37, #c9a961, #b8945f)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                LGX Atlantic Hub
              </span>
            </h1>
            <p
              className="text-gray-300 mx-auto"
              style={{
              fontSize: "clamp(1rem, 2vw, 1.15rem)",
              lineHeight: 1.8,
              maxWidth: "580px",
              marginBottom: "48px",
              marginTop: "16px",
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "center",
              }}
            >
               Your ultimate destination for fitness, relaxation, entertainment, and unforgettable experiences all in one premium location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/book" className="inline-flex items-center gap-2 font-semibold transition-transform hover:scale-105"
                style={{ background: "linear-gradient(135deg, #d4af37, #c9a961)", color: "#0a1628", padding: "15px 36px", borderRadius: "50px", fontSize: "1rem" }}>
                Book Your Space <ArrowRight size={18} />
              </Link>
              <Link href="/services" className="inline-flex items-center font-medium transition-transform hover:scale-105"
                style={{ color: "#fff", padding: "15px 36px", borderRadius: "50px", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.25)", fontSize: "1rem" }}>
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>

        {/* scroll indicator */}
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* ── OUR SERVICES ── */}
      <section style={{ padding: "96px 0" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 40px" }}>

          {/* heading */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: "56px" }}>
            <h2 className="font-bold text-white" style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", marginBottom: "12px" }}>
              Our Services
            </h2>
            <p style={{ color: "#9ca3af", fontSize: "1.05rem" }}>Everything you need, all in one place</p>
          </motion.div>

          {/* cards grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                style={{
                  background: "#0d1c30",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "16px",
                  padding: "36px 32px",
                  transition: "transform 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.02)"}
                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
              >
                <div style={{ width: "64px", height: "64px", borderRadius: "16px", background: service.color, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
                  <service.icon color="white" size={28} />
                </div>
                <h3 className="text-white font-bold" style={{ fontSize: "1.3rem", marginBottom: "10px" }}>
                  {service.title}
                </h3>
                <p style={{ color: "#9ca3af", fontSize: "0.92rem", lineHeight: 1.7 }}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* view all button */}
          <div style={{ display: "flex", justifyContent: "center", marginTop: "48px" }}>
            <Link href="/services" className="inline-flex items-center gap-2 font-medium transition-transform hover:scale-105"
              style={{ color: "#fff", padding: "13px 36px", borderRadius: "50px", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.18)", fontSize: "0.95rem" }}>
              View All Services <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "0 40px 96px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ background: "linear-gradient(135deg, #d4af37, #c9a961)", borderRadius: "24px", padding: "72px 56px", textAlign: "center" }}
          >
            <h2 className="font-bold" style={{ color: "#0a1628", fontSize: "clamp(1.8rem, 4vw, 3rem)", lineHeight: 1.2, marginBottom: "16px" }}>
              Ready to Experience LGX?
            </h2>
            <p style={{ color: "rgba(10,22,40,0.72)", fontSize: "1.05rem", maxWidth: "460px", margin: "0 auto 40px", lineHeight: 1.7 }}>
              Book your space today and join the ultimate lifestyle destination in Okitipupa
            </p>
            <Link href="/book" className="inline-flex items-center gap-2 font-bold transition-transform hover:scale-105"
              style={{ background: "#0a1628", color: "#d4af37", padding: "17px 44px", borderRadius: "50px", fontSize: "1rem" }}>
              Book Now <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}