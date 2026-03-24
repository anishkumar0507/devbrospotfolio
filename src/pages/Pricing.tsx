const pricing = [
  {
    title: "Basic",
    price: "₹10,000",
    period: "one-time",
    desc: "Simple responsive website with modern design and animations.",
    features: ["5 Pages", "Responsive Design", "Contact Form", "Basic SEO", "2 Revisions"],
    color: "rgba(34,211,238,",
    popular: false,
  },
  {
    title: "Web App",
    price: "₹20,000",
    period: "one-time",
    desc: "Full stack web application with backend, database & authentication.",
    features: ["Full Stack App", "Database Integration", "Auth System", "API Development", "5 Revisions"],
    color: "rgba(168,85,247,",
    popular: true,
  },
  {
    title: "Mobile App",
    price: "₹30,000",
    period: "one-time",
    desc: "Advanced cross-platform mobile app with full features and deployment.",
    features: ["iOS + Android", "Push Notifications", "Backend API", "App Store Deploy", "Unlimited Revisions"],
    color: "rgba(99,102,241,",
    popular: false,
  },
  {
    title: "Enterprise",
    price: "Custom Quote",
    period: "contact us",
    desc: "Custom SaaS platform, AI tools, or enterprise-grade digital solutions.",
    features: ["Custom Architecture", "AI Integration", "Dedicated Support", "SLA Agreement", "Full Source Code"],
    color: "rgba(251,191,36,",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-white px-6 pt-28 pb-20">

      <div className="text-center mb-16 fade-in-1">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
          style={{ background: "rgba(251,191,36,0.06)", border: "1px solid rgba(251,191,36,0.2)" }}>
          <span style={{ fontFamily: "Syne, sans-serif", fontSize: "12px", color: "#fbbf24", letterSpacing: "0.12em" }}>TRANSPARENT PRICING</span>
        </div>
        <h2 style={{ fontFamily: "Orbitron, monospace", fontSize: "clamp(28px,5vw,48px)", fontWeight: 900, marginBottom: "16px" }}>
          Pricing <span className="gradient-text">Plans</span>
        </h2>
        <p style={{ fontFamily: "Syne, sans-serif", color: "rgba(255,255,255,0.5)", maxWidth: "500px", margin: "0 auto", lineHeight: 1.7 }}>
          Fair, transparent pricing. No hidden costs. Just great work.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full">
        {pricing.map((plan) => (
          <div key={plan.title}
            className="shine glass-card rounded-2xl p-7 transition-all duration-300 hover:-translate-y-2 flex flex-col relative"
            style={{
              border: plan.popular ? `1px solid ${plan.color}0.5)` : undefined,
              boxShadow: plan.popular ? `0 0 40px ${plan.color}0.1)` : undefined,
            }}>

            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold"
                style={{ fontFamily: "Orbitron, monospace", background: "linear-gradient(135deg, rgba(168,85,247,0.8), rgba(99,102,241,0.8))", border: "1px solid rgba(168,85,247,0.5)", color: "white", whiteSpace: "nowrap", fontSize: "10px" }}>
                ★ MOST POPULAR
              </div>
            )}

            <h3 style={{ fontFamily: "Orbitron, monospace", fontSize: "14px", fontWeight: 700, color: `${plan.color}0.9)`, marginBottom: "12px", letterSpacing: "0.05em" }}>
              {plan.title}
            </h3>

            <div className="mb-4">
              <span style={{ fontFamily: "Orbitron, monospace", fontSize: "28px", fontWeight: 900, color: "white" }}>{plan.price}</span>
              <span style={{ fontFamily: "Syne, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.4)", marginLeft: "8px" }}>{plan.period}</span>
            </div>

            <p style={{ fontFamily: "Syne, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.5)", lineHeight: 1.6, marginBottom: "20px" }}>
              {plan.desc}
            </p>

            <ul className="flex flex-col gap-2.5 mb-6 flex-1">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2.5">
                  <span style={{ color: `${plan.color}0.9)`, fontSize: "14px" }}>✓</span>
                  <span style={{ fontFamily: "Syne, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.65)" }}>{f}</span>
                </li>
              ))}
            </ul>

            <a href="/contact"
              className="flex items-center justify-center py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105"
              style={{ fontFamily: "Orbitron, monospace", fontSize: "12px", background: `${plan.color}0.1)`, border: `1px solid ${plan.color}0.35)`, color: `${plan.color}1)` }}>
              Get Started →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
