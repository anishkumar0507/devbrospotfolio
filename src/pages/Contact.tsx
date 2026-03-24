import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatusMessage({
        type: "error",
        text: "Email service is not configured. Please add EmailJS environment variables.",
      });
      return;
    }

    setIsSending(true);
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
          to_email: "devbros8800@gmail.com",
        },
        { publicKey }
      );

      setSent(true);
      setStatusMessage({ type: "success", text: "Message sent successfully. We will get back to you soon." });
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    } catch {
      setSent(false);
      setStatusMessage({ type: "error", text: "Failed to send message. Please try again." });
    } finally {
      setIsSending(false);
    }
  };

  const inputStyle = {
    fontFamily: "Syne, sans-serif",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "12px",
    padding: "12px 16px",
    color: "white",
    fontSize: "14px",
    width: "100%",
    outline: "none",
    transition: "all 0.3s ease",
  };

  return (
    <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-white px-6 pt-28 pb-20">

      <div className="text-center mb-14 fade-in-1">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
          style={{ background: "rgba(34,211,238,0.06)", border: "1px solid rgba(34,211,238,0.2)" }}>
          <span style={{ fontFamily: "Syne, sans-serif", fontSize: "12px", color: "#22d3ee", letterSpacing: "0.12em" }}>GET IN TOUCH</span>
        </div>
        <h2 style={{ fontFamily: "Orbitron, monospace", fontSize: "clamp(28px,5vw,48px)", fontWeight: 900, marginBottom: "16px" }}>
          Contact <span className="gradient-text">Dev Bro's</span>
        </h2>
        <p style={{ fontFamily: "Syne, sans-serif", color: "rgba(255,255,255,0.5)", maxWidth: "500px", margin: "0 auto", lineHeight: 1.7 }}>
          Have a project in mind? Let's talk and turn your idea into reality.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl w-full">

        {/* Contact Info */}
        <div className="lg:col-span-2 flex flex-col gap-5">
          {[
            { icon: "📧", label: "Email", value: "devbros8800@gmail.com", href: "mailto:devbros8800@gmail.com", color: "rgba(34,211,238," },
            { icon: "📍", label: "Location", value: "Jamshedpur, Jharkhand", href: "#", color: "rgba(99,102,241," },
          ].map((c) => (
            <a key={c.label} href={c.href}
              className="shine glass-card rounded-2xl p-5 flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 no-underline">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                style={{ background: `${c.color}0.1)`, border: `1px solid ${c.color}0.2)` }}>
                {c.icon}
              </div>
              <div>
                <div style={{ fontFamily: "Orbitron, monospace", fontSize: "11px", color: `${c.color}0.8)`, letterSpacing: "0.08em", marginBottom: "2px" }}>{c.label}</div>
                <div style={{ fontFamily: "Syne, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.75)" }}>{c.value}</div>
              </div>
            </a>
          ))}

          <div className="glass-card rounded-2xl p-5 mt-2">
            <div style={{ fontFamily: "Orbitron, monospace", fontSize: "12px", color: "#22d3ee", marginBottom: "12px", letterSpacing: "0.08em" }}>RESPONSE TIME</div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400" style={{ boxShadow: "0 0 8px rgba(74,222,128,0.6)" }} />
              <span style={{ fontFamily: "Syne, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>Usually within 24 hours</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="shine glass-card rounded-2xl p-8 flex flex-col gap-4">

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label style={{ fontFamily: "Syne, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.4)", letterSpacing: "0.05em" }}>YOUR NAME</label>
                <input type="text" name="name" value={form.name} onChange={handleChange}
                  placeholder="John Doe" style={inputStyle} required />
              </div>
              <div className="flex flex-col gap-1.5">
                <label style={{ fontFamily: "Syne, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.4)", letterSpacing: "0.05em" }}>EMAIL</label>
                <input type="email" name="email" value={form.email} onChange={handleChange}
                  placeholder="john@example.com" style={inputStyle} required />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label style={{ fontFamily: "Syne, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.4)", letterSpacing: "0.05em" }}>SUBJECT</label>
              <select name="subject" value={form.subject} onChange={handleChange} style={{ ...inputStyle, cursor: "pointer" }} required>
                <option value="" style={{ background: "#020408" }}>Select a service...</option>
                <option value="web" style={{ background: "#020408" }}>Web Development</option>
                <option value="app" style={{ background: "#020408" }}>App Development</option>
                <option value="ai" style={{ background: "#020408" }}>AI Integration</option>
                <option value="design" style={{ background: "#020408" }}>UI/UX Design</option>
                <option value="other" style={{ background: "#020408" }}>Other</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label style={{ fontFamily: "Syne, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.4)", letterSpacing: "0.05em" }}>MESSAGE</label>
              <textarea name="message" value={form.message} onChange={handleChange}
                placeholder="Tell us about your project..." rows={5} style={{ ...inputStyle, resize: "none" }} required />
            </div>

            <button type="submit"
              disabled={isSending}
              className="w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5"
              style={{ fontFamily: "Orbitron, monospace", fontSize: "13px", background: sent ? "rgba(74,222,128,0.2)" : "linear-gradient(135deg, rgba(34,211,238,0.2), rgba(168,85,247,0.2))", border: sent ? "1px solid rgba(74,222,128,0.4)" : "1px solid rgba(34,211,238,0.4)", color: sent ? "#4ade80" : "#22d3ee", boxShadow: sent ? "0 0 20px rgba(74,222,128,0.15)" : "0 0 20px rgba(34,211,238,0.1)" }}>
              {isSending ? "Sending..." : sent ? "✓ Message Sent!" : "Send Message →"}
            </button>

            {statusMessage && (
              <div
                className="rounded-xl px-4 py-3 text-sm"
                style={{
                  fontFamily: "Syne, sans-serif",
                  background: statusMessage.type === "success" ? "rgba(74,222,128,0.12)" : "rgba(248,113,113,0.12)",
                  border: statusMessage.type === "success" ? "1px solid rgba(74,222,128,0.35)" : "1px solid rgba(248,113,113,0.35)",
                  color: statusMessage.type === "success" ? "#86efac" : "#fca5a5",
                }}
              >
                {statusMessage.text}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
