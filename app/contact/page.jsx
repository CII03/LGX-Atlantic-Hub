"use client";

import { motion } from "motion/react";
import { MapPin, Phone, MessageCircle, Clock, Share2, Camera } from "lucide-react";

const WHATSAPP_NUMBER = "2348160566598";

const contactCards = [
  { icon: MapPin, title: "Location", details: ["LGX Atlantic Hub", "Okitipupa, Ondo State"], color: "linear-gradient(135deg, #d4af37, #c9a961)" },
  { icon: Phone, title: "Phone", details: ["+234 816 056 6598", "Available daily"], color: "linear-gradient(135deg, #c9a961, #b8945f)" },
  { icon: MessageCircle, title: "WhatsApp", details: ["+234 816 056 6598", "Quick response guaranteed"], color: "linear-gradient(135deg, #b8945f, #d4af37)" },
  { icon: Clock, title: "Opening Hours", details: ["Mon–Thu: 6AM – 11PM", "Fri–Sun: 6AM – 2AM"], color: "linear-gradient(135deg, #d4af37, #8b7355)" },
];

const openingHours = [
  { day: "Monday – Thursday", hours: "6:00 AM – 11:00 PM" },
  { day: "Friday – Saturday", hours: "6:00 AM – 2:00 AM" },
  { day: "Sunday", hours: "8:00 AM – 11:00 PM" },
];

export default function ContactPage() {
  return (
    <div style={{ minHeight: "100vh", padding: "80px 24px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
          style={{ marginBottom: "56px" }}
        >
          <h1 className="font-bold text-white" style={{ fontSize: "clamp(2.2rem, 5vw, 3.2rem)", marginBottom: "16px" }}>
            Get in Touch
          </h1>
          <p style={{ color: "#9ca3af", fontSize: "1rem", lineHeight: 1.8, maxWidth: "560px", margin: "0 auto" }}>
            Have questions or ready to book? We're here to help. Reach out through any of the channels below.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: "20px", marginBottom: "56px" }}>
          {contactCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(10px)", borderRadius: "16px", padding: "28px 24px", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: card.color, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px" }}>
                <card.icon color="white" size={22} />
              </div>
              <h3 style={{ color: "#fff", fontWeight: 600, fontSize: "1rem", marginBottom: "10px" }}>{card.title}</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                {card.details.map((detail, i) => (
                  <p key={i} style={{ color: "#9ca3af", fontSize: "0.85rem" }}>{detail}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Opening Hours + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "24px", marginBottom: "56px" }}>

          {/* Opening Hours */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(10px)", borderRadius: "16px", padding: "32px", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "linear-gradient(135deg, #d4af37, #c9a961)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Clock color="#0a1628" size={20} />
              </div>
              <h2 style={{ color: "#fff", fontWeight: 700, fontSize: "1.15rem" }}>Opening Hours</h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {openingHours.map((schedule, i) => (
                <div key={schedule.day} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 0", borderBottom: i < openingHours.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                  <span style={{ color: "#d1d5db", fontSize: "0.88rem" }}>{schedule.day}</span>
                  <span style={{ color: "#fff", fontSize: "0.88rem", fontWeight: 600 }}>{schedule.hours}</span>
                </div>
              ))}
            </div>
            <p style={{ color: "#6b7280", fontSize: "0.78rem", marginTop: "20px", lineHeight: 1.7 }}>
              Special events and private bookings may have extended hours. Contact us for details.
            </p>
          </motion.div>

          {/* Map + Social */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(10px)", borderRadius: "16px", padding: "32px", border: "1px solid rgba(255,255,255,0.08)", textAlign: "center", flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "linear-gradient(135deg, #d4af37, #c9a961)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                <MapPin color="#0a1628" size={26} />
              </div>
              <h3 style={{ color: "#fff", fontWeight: 700, marginBottom: "6px" }}>LGX Atlantic Hub</h3>
              <p style={{ color: "#9ca3af", fontSize: "0.88rem", marginBottom: "20px" }}>Okitipupa, Ondo State, Nigeria</p>
              
              <a href="https://maps.google.com/?q=Okitipupa+Ondo+State+Nigeria"
                target="_blank"
                rel="noopener noreferrer"
                style={{ padding: "11px 28px", borderRadius: "50px", fontSize: "0.88rem", fontWeight: 700, background: "linear-gradient(135deg, #d4af37, #c9a961)", color: "#0a1628", textDecoration: "none" }}
              >
                Get Directions
              </a>
            </div>

            <div style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(10px)", borderRadius: "16px", padding: "24px", border: "1px solid rgba(255,255,255,0.08)" }}>
              <h3 style={{ color: "#fff", fontWeight: 700, marginBottom: "16px" }}>Follow Us</h3>
              <div style={{ display: "flex", gap: "12px" }}>
                <a href="#" style={{ flex: 1, padding: "13px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontSize: "0.88rem", fontWeight: 600, background: "linear-gradient(135deg, #d4af37, #c9a961)", color: "#0a1628", textDecoration: "none" }}>
                 <Camera size={18} /> Instagram
                </a>
                <a href="#" style={{ flex: 1, padding: "13px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontSize: "0.88rem", fontWeight: 600, background: "linear-gradient(135deg, #b8945f, #8b7355)", color: "#fff", textDecoration: "none" }}>
                 <Share2 size={18} /> Facebook
                </a>
              </div>
            </div>
          </motion.div>
        </div>
 
        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ background: "linear-gradient(135deg, #d4af37, #c9a961)", borderRadius: "24px", padding: "56px 40px", textAlign: "center" }}
        >
          <h2 style={{ color: "#0a1628", fontWeight: 700, fontSize: "clamp(1.6rem, 4vw, 2.4rem)", marginBottom: "12px" }}>
            Ready to Book?
          </h2>
          <p style={{ color: "rgba(10,22,40,0.75)", fontSize: "1rem", marginBottom: "32px" }}>
            Don't wait — secure your spot at LGX Atlantic Hub today
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "16px 36px", borderRadius: "50px", fontWeight: 700, fontSize: "0.95rem", background: "#0a1628", color: "#d4af37", textDecoration: "none" }}
            >
              <MessageCircle size={18} /> WhatsApp Us
            </a>
            
            <a href="tel:+2348160566598"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "16px 36px", borderRadius: "50px", fontWeight: 700, fontSize: "0.95rem", background: "#fff", color: "#0a1628", textDecoration: "none" }}
            >
              <Phone size={18} /> Call Now
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}