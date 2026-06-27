"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/services", label: "Services" },
  { path: "/book", label: "Book a Space" },
  { path: "/gallery", label: "Gallery" },
  { path: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50"
      style={{ background: "rgba(10,22,40,0.85)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px" }}>
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-4">
            <div
              className="w-12 h-12 flex items-center justify-center flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #d4af37, #c9a961)", borderRadius: "14px" }}
            >
              <span className="font-bold text-lg" style={{ color: "#0a1628" }}>LGX</span>
            </div>
            <div>
              <div className="font-bold text-white text-lg leading-tight">LGX Atlantic Hub</div>
              <div className="text-xs" style={{ color: "#d4af37" }}>Your Ultimate Experience</div>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="rounded-full text-sm font-medium transition-all"
                style={
                isActive(link.path)
                ? { background: "linear-gradient(135deg, #d4af37, #c9a961)", color: "#0a1628", padding: "10px 24px" }
                : { color: "#d1d5db", padding: "10px 20px" }
               }
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-white"
            style={{ background: "rgba(255,255,255,0.08)" }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
           initial={{ opacity: 0, height: 0 }}
           animate={{ opacity: 1, height: "auto" }}
           exit={{ opacity: 0, height: 0 }}
           style={{ background: "rgba(10,22,40,0.97)", borderTop: "1px solid rgba(255,255,255,0.08)", overflow: "hidden" }}
          >
           <div style={{ padding: "20px 28px", display: "flex", flexDirection: "column", gap: "8px" }}>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl text-sm font-medium transition-all"
                  style={
                  isActive(link.path)
                  ? { background: "linear-gradient(135deg, #d4af37, #c9a961)", color: "#0a1628", padding: "14px 20px", display: "block" }
                  : { color: "#d1d5db", padding: "14px 20px", display: "block" }
                  }
                >
                 {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}