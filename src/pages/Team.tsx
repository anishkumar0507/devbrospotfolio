const team = [
  {
    name: "Ankit Rai",
    role: "Frontend Developer",
    bio: "Crafting pixel-perfect UIs and immersive user experiences with React & Tailwind.",
    skills: ["React", "TypeScript", "TailwindCSS", "Figma"],
    gradient: "from-cyan-500 to-blue-500",
    glow: "rgba(34,211,238,0.3)",
    initials: "AR",
  },
  {
    name: "Piyush Kumar",
    role: "AI Engineer",
    bio: "Building intelligent systems and LLM-powered applications that think and adapt.",
    skills: ["Python", "OpenAI", "LangChain", "ML/DL"],
    gradient: "from-purple-500 to-pink-500",
    glow: "rgba(168,85,247,0.3)",
    initials: "PK",
  },
  {
    name: "Anish Kumar",
    role: "Backend Developer",
    bio: "Architecting robust, scalable backend systems and blazing-fast REST APIs.",
    skills: ["Node.js", "PostgreSQL", "Express", "Docker"],
    gradient: "from-blue-500 to-indigo-500",
    glow: "rgba(99,102,241,0.3)",
    initials: "AK",
  },
];

export default function Team() {
  return (
    <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-white px-6 pt-28 pb-20">

      <div className="text-center mb-16 fade-in-1">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
          style={{ background: "rgba(34,211,238,0.06)", border: "1px solid rgba(34,211,238,0.2)" }}>
          <span style={{ fontFamily: "Syne, sans-serif", fontSize: "12px", color: "#22d3ee", letterSpacing: "0.12em" }}>THE CREW</span>
        </div>
        <h2 style={{ fontFamily: "Orbitron, monospace", fontSize: "clamp(28px,5vw,48px)", fontWeight: 900, marginBottom: "16px" }}>
          Meet The <span className="gradient-text">Team</span>
        </h2>
        <p style={{ fontFamily: "Syne, sans-serif", color: "rgba(255,255,255,0.5)", maxWidth: "500px", margin: "0 auto", lineHeight: 1.7 }}>
          Three specialists. One goal — to build exceptional digital products.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
        {team.map((member, i) => (
          <div key={member.name}
            className="shine glass-card rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center"
            style={{ animationDelay: `${i * 0.15}s` }}>

            {/* Avatar placeholder */}
            <div className="relative mb-6">
              <div
                className="w-24 h-24 rounded-2xl flex items-center justify-center text-2xl font-black"
                style={{
                  background: `linear-gradient(135deg, ${member.glow.replace("0.3", "0.2")}, rgba(0,0,0,0.3))`,
                  border: `2px solid ${member.glow}`,
                  boxShadow: `0 0 30px ${member.glow}`,
                  fontFamily: "Orbitron, monospace",
                  color: "white",
                  fontSize: "20px",
                }}>
                {member.initials}
              </div>
              {/* Online dot */}
              <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green-400"
                style={{ border: "2px solid #020408", boxShadow: "0 0 8px rgba(74,222,128,0.6)" }} />
            </div>

            <h3 style={{ fontFamily: "Orbitron, monospace", fontSize: "15px", fontWeight: 700, color: "white", marginBottom: "4px" }}>
              {member.name}
            </h3>

            <div className="px-3 py-1 rounded-full mb-4"
              style={{ background: `${member.glow.replace("0.3", "0.08")}`, border: `1px solid ${member.glow.replace("0.3", "0.3")}` }}>
              <span style={{ fontFamily: "Syne, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.7)", letterSpacing: "0.05em" }}>
                {member.role}
              </span>
            </div>

            <p style={{ fontFamily: "Syne, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: "20px" }}>
              {member.bio}
            </p>

            <div className="flex flex-wrap gap-2 justify-center">
              {member.skills.map((sk) => (
                <span key={sk} className="px-2.5 py-1 rounded-md text-xs"
                  style={{ fontFamily: "Syne, sans-serif", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)" }}>
                  {sk}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-10 text-sm" style={{ fontFamily: "Syne, sans-serif", color: "rgba(255,255,255,0.3)", fontStyle: "italic" }}>
        * Real photos coming soon
      </p>
    </section>
  );
}
