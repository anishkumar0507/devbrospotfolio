const services = [
  { title: "Web Development", icon: "🌐", desc: "Modern responsive websites built using React, Next.js, and latest technologies with pixel-perfect UI.", tech: ["React", "Next.js", "TypeScript", "TailwindCSS"] },
  { title: "App Development", icon: "📱", desc: "Scalable web and mobile applications with secure, optimized architecture and smooth UX.", tech: ["React Native", "Node.js", "Firebase"] },
  { title: "API Development", icon: "⚡", desc: "Fast, secure and scalable REST APIs, GraphQL endpoints, and complete backend systems.", tech: ["Express", "PostgreSQL", "REST", "GraphQL"] },
  { title: "AI Integration", icon: "🤖", desc: "Intelligent AI-powered features, LLM integrations, automation tools for modern businesses.", tech: ["OpenAI", "Python", "LangChain"] },
  { title: "UI/UX Design", icon: "🎨", desc: "Clean, modern and professional user interface design with exceptional attention to detail.", tech: ["Figma", "Framer", "Adobe XD"] },
  { title: "Cloud & DevOps", icon: "☁️", desc: "Deployment, CI/CD pipelines, infrastructure setup for reliable and scalable applications.", tech: ["Vercel", "AWS", "Docker", "GitHub Actions"] },
];

export default function Services() {
  return (
    <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-white px-6 pt-28 pb-20">

      <div className="text-center mb-16 fade-in-1">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
          style={{ background: "rgba(168,85,247,0.06)", border: "1px solid rgba(168,85,247,0.2)" }}>
          <span style={{ fontFamily: "Syne, sans-serif", fontSize: "12px", color: "#a855f7", letterSpacing: "0.12em" }}>WHAT WE DO</span>
        </div>
        <h2 style={{ fontFamily: "Orbitron, monospace", fontSize: "clamp(28px,5vw,48px)", fontWeight: 900, color: "white", marginBottom: "16px" }}>
          Our <span className="gradient-text">Services</span>
        </h2>
        <p style={{ fontFamily: "Syne, sans-serif", color: "rgba(255,255,255,0.5)", maxWidth: "500px", margin: "0 auto", lineHeight: 1.7 }}>
          End-to-end digital solutions tailored to your vision and business goals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {services.map((s, i) => (
          <div key={s.title}
            className="shine glass-card rounded-2xl p-7 transition-all duration-300 cursor-default hover:-translate-y-1"
            style={{ animationDelay: `${i * 0.1}s` }}>

            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}>
              {s.icon}
            </div>

            <h3 style={{ fontFamily: "Orbitron, monospace", fontSize: "15px", fontWeight: 700, color: "white", marginBottom: "10px" }}>
              {s.title}
            </h3>

            <p style={{ fontFamily: "Syne, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: "16px" }}>
              {s.desc}
            </p>

            <div className="flex flex-wrap gap-2">
              {s.tech.map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-md text-xs"
                  style={{ fontFamily: "Syne, sans-serif", background: "rgba(34,211,238,0.08)", border: "1px solid rgba(34,211,238,0.15)", color: "rgba(34,211,238,0.8)" }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
