import { useTypingEffect } from "../hooks/useTypingEffect";

const TYPING_WORDS = ["Web Development", "App Development", "AI Solutions", "UI/UX Design", "API Architecture"];

const FloatShape = ({ style, children }: { style: React.CSSProperties; children: React.ReactNode }) => (
  <div className="absolute pointer-events-none select-none" style={style}>{children}</div>
);

export default function About() {
  const typed = useTypingEffect(TYPING_WORDS);

  return (
    <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-white px-6 text-center pt-20 overflow-hidden">

      {/* 3D Floating Shapes */}
      <FloatShape style={{ top: "12%", left: "5%", opacity: 0.25, animation: "floatY 7s ease-in-out infinite" }}>
        <div style={{ width: 80, height: 80, border: "2px solid rgba(34,211,238,0.6)", borderRadius: "12px", transform: "rotate(20deg)", boxShadow: "0 0 20px rgba(34,211,238,0.2)" }} />
      </FloatShape>

      <FloatShape style={{ top: "20%", right: "8%", opacity: 0.2, animation: "floatX 9s ease-in-out infinite" }}>
        <div style={{ width: 60, height: 60, background: "rgba(168,85,247,0.15)", border: "2px solid rgba(168,85,247,0.5)", borderRadius: "50%", boxShadow: "0 0 25px rgba(168,85,247,0.3)", backdropFilter: "blur(8px)" }} />
      </FloatShape>

      <FloatShape style={{ bottom: "20%", left: "8%", opacity: 0.2, animation: "floatY 6s ease-in-out infinite reverse" }}>
        <div style={{ width: 50, height: 50, border: "2px solid rgba(99,102,241,0.6)", transform: "rotate(45deg)", boxShadow: "0 0 20px rgba(99,102,241,0.2)" }} />
      </FloatShape>

      <FloatShape style={{ bottom: "25%", right: "5%", opacity: 0.18, animation: "spin-slow 20s linear infinite" }}>
        <svg width="100" height="100" viewBox="0 0 100 100">
          {[0, 60, 120, 180, 240, 300].map((deg, i) => (
            <circle key={i} cx={50 + 35 * Math.cos((deg * Math.PI) / 180)} cy={50 + 35 * Math.sin((deg * Math.PI) / 180)} r="4" fill="rgba(34,211,238,0.7)" />
          ))}
        </svg>
      </FloatShape>

      <FloatShape style={{ top: "55%", left: "3%", opacity: 0.15, animation: "floatX 11s ease-in-out infinite reverse" }}>
        <div style={{ width: 40, height: 120, border: "1px solid rgba(34,211,238,0.4)", borderRadius: "20px", background: "rgba(34,211,238,0.04)", backdropFilter: "blur(4px)" }} />
      </FloatShape>

      {/* Badge */}
      <div className="fade-in-1 inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
        style={{ background: "rgba(34,211,238,0.06)", border: "1px solid rgba(34,211,238,0.2)", boxShadow: "0 0 20px rgba(34,211,238,0.08)" }}>
        <span className="w-2 h-2 rounded-full bg-cyan-400" style={{ boxShadow: "0 0 8px #22d3ee", animation: "pulse-glow 2s infinite" }} />
        <span style={{ fontFamily: "Syne, sans-serif", fontSize: "13px", color: "#22d3ee", letterSpacing: "0.1em" }}>
          AVAILABLE FOR PROJECTS
        </span>
      </div>

      {/* Main Heading */}
      <h1 className="fade-in-2 text-5xl md:text-7xl font-black mb-6 leading-tight"
        style={{ fontFamily: "Orbitron, monospace", letterSpacing: "-0.02em" }}>
        <span style={{ color: "rgba(255,255,255,0.9)" }}>Innovate.</span>
        <br />
        <span className="gradient-text">Develop.</span>
        <br />
        <span style={{ color: "rgba(255,255,255,0.9)" }}>Dominate.</span>
      </h1>

      {/* Typing */}
      <div className="fade-in-3 flex items-center justify-center gap-3 mb-8">
        <span style={{ fontFamily: "Syne, sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.5)" }}>We build</span>
        <span
          className="typing-cursor"
          style={{ fontFamily: "Orbitron, monospace", fontSize: "16px", fontWeight: 600, color: "#22d3ee", minWidth: "220px", textAlign: "left", textShadow: "0 0 10px rgba(34,211,238,0.5)" }}
        >{typed}</span>
      </div>

      {/* Description */}
      <p className="fade-in-3 text-base md:text-lg max-w-2xl mb-10 leading-relaxed"
        style={{ fontFamily: "Syne, sans-serif", color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>
        Dev Bro's is a team of modern developers specializing in web, app and AI applications.
        We build <span style={{ color: "rgba(168,85,247,0.9)" }}>scalable</span>, <span style={{ color: "rgba(34,211,238,0.9)" }}>secure</span>, and
        high-performance digital solutions that push boundaries.
      </p>

      {/* CTA Buttons */}
      <div className="fade-in-4 flex flex-wrap gap-4 justify-center">
        <a href="/projects"
          className="px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 hover:-translate-y-1"
          style={{ fontFamily: "Orbitron, monospace", background: "linear-gradient(135deg, rgba(34,211,238,0.2), rgba(168,85,247,0.2))", border: "1px solid rgba(34,211,238,0.4)", color: "#22d3ee", boxShadow: "0 0 25px rgba(34,211,238,0.15)", backdropFilter: "blur(12px)" }}>
          View Projects →
        </a>
        <a href="/contact"
          className="px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 hover:-translate-y-1"
          style={{ fontFamily: "Orbitron, monospace", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.8)", backdropFilter: "blur(12px)" }}>
          Contact Us
        </a>
      </div>

      {/* Stats */}
      <div className="fade-in-4 flex gap-10 mt-16 flex-wrap justify-center">
        {[
          { value: "3+", label: "Projects Delivered" },
          { value: "3", label: "Expert Developers" },
          { value: "100%", label: "Client Satisfaction" },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <div style={{ fontFamily: "Orbitron, monospace", fontSize: "28px", fontWeight: 900, background: "linear-gradient(135deg, #22d3ee, #a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              {s.value}
            </div>
            <div style={{ fontFamily: "Syne, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.4)", marginTop: "4px", letterSpacing: "0.08em" }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
