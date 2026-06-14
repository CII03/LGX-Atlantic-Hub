"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ZoomIn } from "lucide-react";

const galleryItems = [
  {
    url: "https://images.unsplash.com/photo-1560286399-277c82e2e53a?w=1080&q=80",
    caption: "Epic celebration vibes",
    category: "Events",
  },
  {
    url: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1080&q=80",
    caption: "Premium gym equipment",
    category: "Gym",
  },
  {
    url: "https://images.unsplash.com/photo-1764397576287-8e5fd265353b?w=1080&q=80",
    caption: "Outdoor bar sunset",
    category: "Bar",
  },
  {
    url: "https://images.unsplash.com/photo-1761330439671-a7f20c285c5e?w=1080&q=80",
    caption: "VIP lounge interior",
    category: "Lounge",
  },
  {
    url: "https://images.unsplash.com/photo-1711743658461-38c875d37c8e?w=1080&q=80",
    caption: "Party energy",
    category: "Events",
  },
  {
    url: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=1080&q=80",
    caption: "Workout zone",
    category: "Gym",
  },
  {
    url: "https://images.unsplash.com/photo-1687422808311-a776f467a468?w=1080&q=80",
    caption: "Mini mart essentials",
    category: "Facilities",
  },
  {
    url: "https://images.unsplash.com/photo-1544476613-a6ad8bb6862c?w=1080&q=80",
    caption: "Dancing celebration",
    category: "Events",
  },
  {
    url: "https://images.unsplash.com/photo-1682184805271-11671b7ecf4c?w=1080&q=80",
    caption: "Luxury lounge space",
    category: "Lounge",
  },
];

const categories = ["All", "Events", "Gym", "Bar", "Lounge", "Facilities"];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Gallery</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore moments from our events, facilities, and the vibrant atmosphere at LGX Atlantic Hub
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all hover:scale-105"
              style={
                activeCategory === cat
                  ? { background: "linear-gradient(135deg, #d4af37, #c9a961)", color: "#0a1628" }
                  : { background: "rgba(255,255,255,0.08)", color: "#9ca3af", border: "1px solid rgba(255,255,255,0.1)" }
              }
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filtered.map((image, index) => (
            <motion.div
              key={image.url}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.2), transparent)" }}
              >
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs font-semibold mb-1" style={{ color: "#d4af37" }}>
                      {image.category}
                    </p>
                    <p className="text-white text-sm font-medium">{image.caption}</p>
                  </div>
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(212,175,55,0.2)", border: "1px solid rgba(212,175,55,0.4)" }}
                  >
                    <ZoomIn size={16} style={{ color: "#d4af37" }} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No photos in this category yet.</p>
          </div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-4">Want to be part of the LGX experience?</p>
          
         <a href="/book"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform text-sm"
            style={{ background: "linear-gradient(135deg, #d4af37, #c9a961)", color: "#0a1628" }}
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.95)" }}
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full transition-colors"
              style={{ background: "rgba(255,255,255,0.1)" }}
            >
              <X className="text-white" size={20} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.caption}
                className="w-full max-h-[80vh] object-contain rounded-2xl"
              />
              <div className="text-center mt-4">
                <p className="text-xs font-semibold mb-1" style={{ color: "#d4af37" }}>
                  {selectedImage.category}
                </p>
                <p className="text-white text-sm">{selectedImage.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}