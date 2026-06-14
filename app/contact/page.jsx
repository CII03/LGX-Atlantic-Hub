"use client";

import { motion } from "motion/react";
import { MapPin, Phone, MessageCircle, Clock, Instagram, Facebook } from "lucide-react";

const WHATSAPP_NUMBER = "234XXXXXXXXXX"; // Replace with his actual number

const contactCards = [
  {
    icon: MapPin,
    title: "Location",
    details: ["LGX Atlantic Hub", "Okitipupa, Ondo State"],
    color: "linear-gradient(135deg, #d4af37, #c9a961)",
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+234 XXX XXX XXXX", "Available daily"],
    color: "linear-gradient(135deg, #c9a961, #b8945f)",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    details: ["+234 XXX XXX XXXX", "Quick response guaranteed"],
    color: "linear-gradient(135deg, #b8945f, #d4af37)",
  },
  {
    icon: Clock,
    title: "Opening Hours",
    details: ["Mon–Thu: 6AM – 11PM", "Fri–Sun: 6AM – 2AM"],
    color: "linear-gradient(135deg, #d4af37, #8b7355)",
  },
];

const openingHours = [
  { day: "Monday – Thursday", hours: "6:00 AM – 11:00 PM" },
  { day: "Friday – Saturday", hours: "6:00 AM – 2:00 AM" },
  { day: "Sunday", hours: "8:00 AM – 11:00 PM" },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have questions or ready to book? We're here to help. Reach out through any of the channels below.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {contactCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all hover:scale-105"
              style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(10px)" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: card.color }}
              >
                <card.icon className="text-white" size={22} />
              </div>
              <h3 className="text-white font-semibold mb-2">{card.title}</h3>
              <div className="space-y-1">
                {card.details.map((detail, i) => (
                  <p key={i} className="text-gray-400 text-sm">{detail}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Opening Hours + Map Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">

          {/* Opening Hours */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-8 border border-white/10"
            style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(10px)" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #d4af37, #c9a961)" }}
              >
                <Clock className="text-[#0a1628]" size={20} />
              </div>
              <h2 className="text-xl font-bold text-white">Opening Hours</h2>
            </div>
            <div className="space-y-4">
              {openingHours.map((schedule) => (
                <div
                  key={schedule.day}
                  className="flex justify-between items-center py-3 border-b border-white/5 last:border-0"
                >
                  <span className="text-gray-300 text-sm">{schedule.day}</span>
                  <span className="text-white text-sm font-semibold">{schedule.hours}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-xs mt-6">
              Special events and private bookings may have extended hours. Contact us for details.
            </p>
          </motion.div>

          {/* Map + Social */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            {/* Map Placeholder */}
            <div
              className="rounded-2xl p-8 border border-white/10 flex items-center justify-center flex-col text-center"
              style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(10px)", minHeight: "200px" }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                style={{ background: "linear-gradient(135deg, #d4af37, #c9a961)" }}
              >
                <MapPin className="text-[#0a1628]" size={28} />
              </div>
              <h3 className="text-white font-bold mb-1">LGX Atlantic Hub</h3>
              <p className="text-gray-400 text-sm mb-4">Okitipupa, Ondo State, Nigeria</p>
              
             <a href="https://maps.google.com/?q=Okitipupa+Ondo+State+Nigeria"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform"
                style={{ background: "linear-gradient(135deg, #d4af37, #c9a961)", color: "#0a1628" }}
             >
                Get Directions
              </a>
            </div>

            {/* Social Media */}
            <div
              className="rounded-2xl p-6 border border-white/10"
              style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(10px)" }}
            >
              <h3 className="text-white font-bold mb-4">Follow Us</h3>
              <div className="flex gap-3">
                
                <a href="#"
                  className="flex-1 p-3 rounded-xl flex items-center justify-center gap-2 hover:scale-105 transition-transform text-sm font-semibold"
                  style={{ background: "linear-gradient(135deg, #d4af37, #c9a961)", color: "#0a1628" }}
                >
                  <Instagram size={18} />
                  Instagram
                </a>
                
                  
                <a href="#"
                  className="flex-1 p-3 rounded-xl flex items-center justify-center gap-2 hover:scale-105 transition-transform text-sm font-semibold"
                  style={{ background: "linear-gradient(135deg, #b8945f, #8b7355)", color: "#fff" }}
                >
                  <Facebook size={18} />
                  Facebook
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
          className="rounded-3xl p-10 md:p-14 text-center"
          style={{ background: "linear-gradient(135deg, #d4af37, #c9a961)" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: "#0a1628" }}>
            Ready to Book?
          </h2>
          <p className="text-lg mb-8" style={{ color: "rgba(10,22,40,0.85)" }}>
            Don't wait — secure your spot at LGX Atlantic Hub today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform text-sm"
              style={{ background: "#0a1628", color: "#d4af37" }}
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
            
            <a href="tel:+234XXXXXXXXXX"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform text-sm"
              style={{ background: "#fff", color: "#0a1628" }}
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}