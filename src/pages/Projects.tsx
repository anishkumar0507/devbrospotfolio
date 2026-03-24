const projects = [
  {
    name: "NextComplyAI",
    desc: "AI-powered compliance detection platform for automated monitoring and intelligent regulatory analysis.",
    demo: "https://nextcomplyai.com",
    tech: ["React", "Python", "OpenAI", "FastAPI"],
    color: "rgba(34,211,238,",
    emoji: "🤖",
    preview: "/project-images/image-1773818928286.png",
  },
  {
    name: "NextDoc",
    desc: "Secure document management system with intelligent upload, organization, search and sharing features.",
    demo: "https://www.nextdoc.in/",
    tech: ["Next.js", "Node.js", "PostgreSQL", "AWS S3"],
    color: "rgba(168,85,247,",
    emoji: "📄",
    preview: "/project-images/image-1773818913420.png",
  },
  {
    name: "Hostel Management",
    desc: "Complete hostel administration system for managing students, rooms, fee collection and daily operations.",
    demo: "https://expo.dev/accounts/anish_kumar26/projects/hostelease-mobile/builds/e18702e1-2d87-40fc-b850-4bf87176d9f3",
    tech: ["React", "Express", "MongoDB", "JWT"],
    color: "rgba(99,102,241,",
    emoji: "🏠",
    preview: "/project-images/image-1773818928286.png",
  },
];

export default function Projects() {
  return (
    <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-white px-6 pt-28 pb-20">

      <div className="text-center mb-16 fade-in-1">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
          style={{ background: "rgba(99,102,241,0.06)", border: "1px solid rgba(99,102,241,0.2)" }}>
          <span style={{ fontFamily: "Syne, sans-serif", fontSize: "12px", color: "#6366f1", letterSpacing: "0.12em" }}>OUR WORK</span>
        </div>
        <h2 style={{ fontFamily: "Orbitron, monospace", fontSize: "clamp(28px,5vw,48px)", fontWeight: 900, marginBottom: "16px" }}>
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p style={{ fontFamily: "Syne, sans-serif", color: "rgba(255,255,255,0.5)", maxWidth: "500px", margin: "0 auto", lineHeight: 1.7 }}>
          Real products, real impact. Here's what we've built.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {projects.map((p, i) => (
          <div key={p.name}
            className="shine glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 flex flex-col"
            style={{ animationDelay: `${i * 0.12}s` }}>

            {/* Preview image */}
            <div className="relative overflow-hidden" style={{ height: "160px" }}>
              <img
                src={p.preview}
                alt={`${p.name} preview`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, ${p.color}0.12) 0%, rgba(2,4,8,0.48) 100%)`, zIndex: 2 }} />
              <div style={{ position: "absolute", right: "16px", bottom: "12px", zIndex: 3 }}>
                <span style={{ fontSize: "34px", filter: "drop-shadow(0 0 16px currentColor)", opacity: 0.9 }}>{p.emoji}</span>
              </div>
              {/* Grid pattern overlay */}
              <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(${p.color}0.06) 1px, transparent 1px), linear-gradient(90deg, ${p.color}0.06) 1px, transparent 1px)`, backgroundSize: "24px 24px", zIndex: 1 }} />
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h3 style={{ fontFamily: "Orbitron, monospace", fontSize: "15px", fontWeight: 700, color: "white", marginBottom: "10px" }}>
                {p.name}
              </h3>

              <p style={{ fontFamily: "Syne, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: "16px", flex: 1 }}>
                {p.desc}
              </p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-md text-xs"
                    style={{ fontFamily: "Syne, sans-serif", background: `${p.color}0.08)`, border: `1px solid ${p.color}0.2)`, color: `${p.color}0.9)` }}>
                    {t}
                  </span>
                ))}
              </div>

              {/* Live demo button */}
              <a href={p.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105"
                style={{ fontFamily: "Orbitron, monospace", fontSize: "12px", background: `${p.color}0.1)`, border: `1px solid ${p.color}0.3)`, color: `${p.color}1)` }}>
                <span>↗</span> Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
