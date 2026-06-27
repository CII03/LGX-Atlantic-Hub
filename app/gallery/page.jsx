"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ZoomIn } from "lucide-react";

const galleryItems = [
  { url: "https://images.unsplash.com/photo-1560286399-277c82e2e53a?w=1080&q=80", caption: "Epic celebration vibes", category: "Events" },
  { url: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1080&q=80", caption: "Premium gym equipment", category: "Gym" },
  { url: "https://images.unsplash.com/photo-1764397576287-8e5fd265353b?w=1080&q=80", caption: "Outdoor bar sunset", category: "Bar" },
  { url: "https://images.unsplash.com/photo-1761330439671-a7f20c285c5e?w=1080&q=80", caption: "VIP lounge interior", category: "Lounge" },
  { url: "https://images.unsplash.com/photo-1711743658461-38c875d37c8e?w=1080&q=80", caption: "Party energy", category: "Events" },
  { url: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=1080&q=80", caption: "Workout zone", category: "Gym" },
  { url: "https://images.unsplash.com/photo-1687422808311-a776f467a468?w=1080&q=80", caption: "Mini mart essentials", category: "Facilities" },
  { url: "https://images.unsplash.com/photo-1544476613-a6ad8bb6862c?w=1080&q=80", caption: "Dancing celebration", category: "Events" },
  { url: "https://images.unsplash.com/photo-1682184805271-11671b7ecf4c?w=1080&q=80", caption: "Luxury lounge space", category: "Lounge" },
];

const categories = ["All", "Events", "Gym", "Bar", "Lounge", "Facilities"];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div style={{ minHeight: "100vh", padding: "80px 24px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: "center", marginBottom: "40px" }}
        >
          <h1 className="font-bold text-white" style={{ fontSize: "clamp(2.2rem, 5vw, 3.2rem)", marginBottom: "16px" }}>
            Gallery
          </h1>
          <p style={{ color: "#9ca3af", fontSize: "1rem", lineHeight: 1.8, maxWidth: "560px", margin: "0 auto" }}>
            Explore moments from our events, facilities, and the vibrant atmosphere at LGX Atlantic Hub
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px", marginBottom: "56px" }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "12px 28px",
                borderRadius: "50px",
                fontSize: "0.9rem",
                fontWeight: 500,
                border: "none",
                cursor: "pointer",
                transition: "transform 0.2s",
                ...(activeCategory === cat
                  ? { background: "linear-gradient(135deg, #d4af37, #c9a961)", color: "#0a1628" }
                  : { background: "rgba(255,255,255,0.06)", color: "#9ca3af", border: "1px solid rgba(255,255,255,0.1)" }
                ),
              }}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: "20px" }}>
          {filtered.map((image, index) => (
            <motion.div
              key={image.url}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              style={{ position: "relative", aspectRatio: "1", borderRadius: "16px", overflow: "hidden", cursor: "pointer" }}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.url}
                alt={image.caption}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.1) 60%, transparent)",
                display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "20px",
              }}>
                <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
                  <div>
                    <p style={{ color: "#d4af37", fontSize: "0.75rem", fontWeight: 600, marginBottom: "4px" }}>{image.category}</p>
                    <p style={{ color: "#fff", fontSize: "0.9rem", fontWeight: 500 }}>{image.caption}</p>
                  </div>
                  <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "rgba(212,175,55,0.2)", border: "1px solid rgba(212,175,55,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <ZoomIn size={16} color="#d4af37" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginTop: "64px" }}
        >
          <p style={{ color: "#9ca3af", marginBottom: "20px" }}>Want to be part of the LGX experience?</p>
          
          <a  href="/book"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "16px 40px", borderRadius: "50px", fontWeight: 700, fontSize: "0.95rem", background: "linear-gradient(135deg, #d4af37, #c9a961)", color: "#0a1628", textDecoration: "none" }}
          >
            Book a Space
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: "fixed", inset: 0, zIndex: 50, background: "rgba(0,0,0,0.95)", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              style={{ position: "absolute", top: "20px", right: "20px", width: "44px", height: "44px", borderRadius: "50%", background: "rgba(255,255,255,0.1)", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
            >
              <X color="white" size={20} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              style={{ maxWidth: "900px", width: "100%" }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImage.url} alt={selectedImage.caption} style={{ width: "100%", maxHeight: "75vh", objectFit: "contain", borderRadius: "16px" }} />
              <div style={{ textAlign: "center", marginTop: "16px" }}>
                <p style={{ color: "#d4af37", fontSize: "0.8rem", fontWeight: 600, marginBottom: "4px" }}>{selectedImage.category}</p>
                <p style={{ color: "#fff", fontSize: "0.9rem" }}>{selectedImage.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}