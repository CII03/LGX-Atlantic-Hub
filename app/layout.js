import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "LGX Atlantic Hub",
  description: "Your ultimate destination for fitness, relaxation, entertainment and unforgettable experiences in Okitipupa.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className="min-h-screen"
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #0d1f38 50%, #132238 100%)",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <Navbar />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}