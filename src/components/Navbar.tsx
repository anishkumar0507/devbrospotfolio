import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/team", label: "Team" },
  { to: "/projects", label: "Projects" },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(2,4,8,0.85)" : "rgba(2,4,8,0.4)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderBottom: scrolled ? "1px solid rgba(34,211,238,0.15)" : "1px solid rgba(255,255,255,0.06)",
        boxShadow: scrolled ? "0 4px 30px rgba(34,211,238,0.06)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
            style={{
              background: "linear-gradient(135deg, rgba(34,211,238,0.2), rgba(168,85,247,0.2))",
              border: "1px solid rgba(34,211,238,0.4)",
              boxShadow: "0 0 15px rgba(34,211,238,0.2)",
            }}
          >
            <span style={{ fontFamily: "Orbitron, monospace", fontSize: "12px", fontWeight: 700, color: "#22d3ee" }}>DB</span>
          </div>
          <span style={{ fontFamily: "Orbitron, monospace", fontWeight: 700, fontSize: "16px", background: "linear-gradient(135deg, #22d3ee, #a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Dev Bro's
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const active = location.pathname === link.to;
            return (
              <Link key={link.to} to={link.to}
                className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300"
                style={{ fontFamily: "Syne, sans-serif", color: active ? "#22d3ee" : "rgba(255,255,255,0.65)", background: active ? "rgba(34,211,238,0.08)" : "transparent", border: active ? "1px solid rgba(34,211,238,0.2)" : "1px solid transparent", textShadow: active ? "0 0 12px rgba(34,211,238,0.5)" : "none" }}
              >{link.label}</Link>
            );
          })}
          <Link to="/contact"
            className="ml-3 px-5 py-2 text-sm font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            style={{ fontFamily: "Orbitron, monospace", background: "linear-gradient(135deg, rgba(34,211,238,0.15), rgba(168,85,247,0.15))", border: "1px solid rgba(34,211,238,0.4)", color: "#22d3ee", boxShadow: "0 0 15px rgba(34,211,238,0.15)" }}
          >Hire Us</Link>
        </div>

        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`block w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-2" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          {links.map((link) => (
            <Link key={link.to} to={link.to}
              className="py-3 px-4 rounded-lg text-sm font-medium"
              style={{ color: location.pathname === link.to ? "#22d3ee" : "rgba(255,255,255,0.7)", background: location.pathname === link.to ? "rgba(34,211,238,0.08)" : "rgba(255,255,255,0.02)", fontFamily: "Syne, sans-serif" }}
            >{link.label}</Link>
          ))}
        </div>
      )}
    </nav>
  );
}
