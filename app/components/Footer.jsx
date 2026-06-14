"use client";
import Link from "next/link";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/services", label: "Services" },
  { path: "/book", label: "Book a Space" },
  { path: "/gallery", label: "Gallery" },
  { path: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer style={{ background: "rgba(0,0,0,0.4)", borderTop: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(20px)" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "64px 40px 40px" }}>

        {/* Three columns */}
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: "48px", marginBottom: "48px" }}>

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
              <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "linear-gradient(135deg, #d4af37, #c9a961)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ color: "#0a1628", fontWeight: 700, fontSize: "13px" }}>LGX</span>
              </div>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: "1rem" }}>LGX Atlantic Hub</span>
            </div>
            <p style={{ color: "#6b7280", fontSize: "0.88rem", lineHeight: 1.8, maxWidth: "220px" }}>
              Your ultimate destination for parties, fitness, relaxation, and more in Okitipupa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ color: "#fff", fontWeight: 600, fontSize: "0.95rem", marginBottom: "20px" }}>Quick Links</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  style={{ color: "#6b7280", fontSize: "0.88rem", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#d4af37"}
                  onMouseLeave={e => e.currentTarget.style.color = "#6b7280"}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ color: "#fff", fontWeight: 600, fontSize: "0.95rem", marginBottom: "20px" }}>Contact</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <p style={{ color: "#6b7280", fontSize: "0.88rem" }}>Okitipupa, Ondo State</p>
              <p style={{ color: "#6b7280", fontSize: "0.88rem" }}>WhatsApp: +234 XXX XXX XXXX</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "28px", textAlign: "center" }}>
          <p style={{ color: "#4b5563", fontSize: "0.82rem" }}>© 2026 LGX Atlantic Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}