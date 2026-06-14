"use client";

import { motion } from "motion/react";
import { Dumbbell, Armchair, Beer, ShoppingBag, PartyPopper, Check } from "lucide-react";

const services = [
  {
    icon: Dumbbell,
    title: "Gym Services",
    description: "Our state-of-the-art gym facility features premium equipment including treadmills, weight machines, free weights, and cardio stations. Whether you're a beginner or advanced athlete, our space is designed to support your fitness goals.",
    features: ["Premium cardio equipment", "Free weights & machines", "Spacious workout area", "Professional-grade equipment"],
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1080&q=80",
    color: "linear-gradient(135deg, #d4af37, #c9a961)",
  },
  {
    icon: Armchair,
    title: "VIP Relaxation Lounge",
    description: "Escape to our exclusive VIP lounge, designed for ultimate comfort and relaxation. Featuring plush sofas, modern television, air conditioning, and premium speakers. Perfect for unwinding, socializing, or private meetings in absolute style.",
    features: ["Luxury sofas & seating", "Modern TV & sound system", "Air-conditioned comfort", "Karaoke & movies"],
    image: "https://images.unsplash.com/photo-1761330439671-a7f20c285c5e?w=1080&q=80",
    color: "linear-gradient(135deg, #c9a961, #b8945f)",
  },
  {
    icon: Beer,
    title: "Outdoor Bar",
    description: "Experience the perfect blend of relaxation and entertainment at our outdoor bar. Wide selection of refreshing beverages in a vibrant open-air atmosphere. Whether catching up with friends or enjoying a solo evening, the vibe is always right.",
    features: ["Wide drink selection", "Open air seating", "Great evening atmosphere", "Perfect for socializing"],
    image: "https://images.unsplash.com/photo-1764397576287-8e5fd265353b?w=1080&q=80",
    color: "linear-gradient(135deg, #b8945f, #d4af37)",
  },
  {
    icon: ShoppingBag,
    title: "Mini Mart",
    description: "Our on-site mini mart offers convenient access to essentials and refreshments. Stocked with snacks, beverages, personal care items, and more. Everything you need without leaving the hub.",
    features: ["Snacks & beverages", "Personal care items", "Daily essentials", "Convenient & affordable"],
    image: "https://images.unsplash.com/photo-1687422808311-a776f467a468?w=1080&q=80",
    color: "linear-gradient(135deg, #d4af37, #8b7355)",
  },
  {
    icon: PartyPopper,
    title: "Event Hosting & Parties",
    description: "Transform your celebrations into unforgettable experiences at LGX Atlantic Hub. Perfect for birthdays, corporate events, and private parties. With DJ services, professional sound systems, and customizable setups, we bring the energy all night long.",
    features: ["DJ & hypeman services", "Professional sound system", "Customizable event setup", "Birthday & corporate events"],
    image: "https://images.unsplash.com/photo-1560286399-277c82e2e53a?w=1080&q=80",
    color: "linear-gradient(135deg, #c9a961, #d4af37)",
  },
];

export default function ServicesPage() {
  return (
    <div style={{ minHeight: "100vh", paddingBottom: "80px" }}>

      {/* Header */}
      <div style={{ textAlign: "center", padding: "80px 40px 64px" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-bold text-white" style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", marginBottom: "16px" }}>
            Our Services
          </h1>
          <p style={{ color: "#9ca3af", fontSize: "1.05rem", maxWidth: "600px", margin: "0 auto", lineHeight: 1.8 }}>
            Discover the full range of premium services at LGX Atlantic Hub, designed to elevate your lifestyle and create memorable experiences.
          </p>
        </motion.div>
      </div>

      {/* Services list */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 40px", display: "flex", flexDirection: "column", gap: "100px" }}>
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "60px",
              alignItems: "center",
            }}
          >
            {/* Image */}
            <div style={{ order: index % 2 === 1 ? 2 : 1 }}>
              <div style={{ borderRadius: "20px", overflow: "hidden", aspectRatio: "4/3" }}>
                <img
                  src={service.image}
                  alt={service.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s" }}
                  onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                />
              </div>
            </div>

            {/* Content */}
            <div style={{ order: index % 2 === 1 ? 1 : 2 }}>
              <div style={{ width: "64px", height: "64px", borderRadius: "16px", background: service.color, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
                <service.icon color="white" size={28} />
              </div>
              <h2 className="font-bold text-white" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", marginBottom: "16px" }}>
                {service.title}
              </h2>
              <p style={{ color: "#d1d5db", fontSize: "0.95rem", lineHeight: 1.9, marginBottom: "28px" }}>
                {service.description}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {service.features.map((feature) => (
                  <div key={feature} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: service.color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Check color="white" size={13} />
                    </div>
                    <span style={{ color: "#9ca3af", fontSize: "0.92rem" }}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}