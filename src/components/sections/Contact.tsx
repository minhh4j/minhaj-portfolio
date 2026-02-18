import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SendIcon, PhoneIcon, MailIcon, MapPinIcon } from "lucide-react";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    botcheck: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError("");

    try {
      if (formData.botcheck) { setIsSubmitting(false); return; }

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "5cb9d3f8-ee40-4942-b08e-7c24f14da2a7",
          subject: "New message from Portfolio Website",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", message: "", botcheck: "" });
        setTimeout(() => setSubmitSuccess(false), 3000);
      } else {
        setSubmitError("Something went wrong. Please try again.");
      }
    } catch {
      setSubmitError("Error sending message. Please check internet & try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const contactInfo = [
    { icon: <PhoneIcon size={18} />, title: "Phone",    content: "9496870816",          href: "tel:+919496870816" },
    { icon: <MailIcon  size={18} />, title: "Email",    content: "minhajdevv@gmail.com", href: "mailto:minhajdevv@gmail.com" },
    { icon: <MapPinIcon size={18}/>, title: "Location", content: "Malappuram, Kerala, India" },
  ];

  // Shared input style
  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "10px 16px",
    background: "rgba(201,162,39,0.05)",
    border: "1px solid rgba(201,162,39,0.2)",
    borderRadius: "10px",
    color: "#f5d060",
    outline: "none",
    fontSize: "14px",
    transition: "border-color 0.2s, box-shadow 0.2s",
  };

  return (
    <section
      id="contact"
      className="relative py-20 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #0a0800 0%, #100c00 40%, #0d0900 70%, #080600 100%)",
      }}
    >
      {/* Grain texture */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[600px] h-[280px]"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,162,39,0.12) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full blur-3xl"
          style={{ background: "rgba(212,175,55,0.06)" }}
        />
        <div
          className="absolute top-1/3 left-0 w-[300px] h-[300px] rounded-full blur-3xl"
          style={{ background: "rgba(212,175,55,0.05)" }}
        />
      </div>

      <div className="container relative z-10 px-4 mx-auto md:px-6">

        {/* ── Section Header ── */}
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-semibold rounded-full"
            style={{
              color: "#f5d060",
              border: "1px solid rgba(201,162,39,0.35)",
              background: "rgba(201,162,39,0.08)",
              letterSpacing: "0.05em",
            }}
          >
            <MailIcon size={14} style={{ color: "#c9a227" }} />
            Contact
          </div>

          <div
            className="w-16 h-[2px] mx-auto mb-5"
            style={{ background: "linear-gradient(90deg, transparent, #c9a227, transparent)" }}
          />

          <h2
            className="mb-3 text-3xl font-bold tracking-tight md:text-4xl"
            style={{ color: "#fff", letterSpacing: "-0.02em" }}
          >
            Get{" "}
            <span
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundImage: "linear-gradient(135deg, #c9a227 0%, #f5d060 50%, #b8891a 100%)",
                backgroundClip: "text",
              }}
            >
              In Touch
            </span>
          </h2>

          <p className="max-w-xl mx-auto text-base" style={{ color: "rgba(210,190,130,0.6)" }}>
            Have a project in mind or want to chat? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid max-w-5xl gap-12 mx-auto md:grid-cols-2">

          {/* ── LEFT: CONTACT INFO ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              className="mb-4 text-2xl font-bold"
              style={{ color: "#f5d060" }}
              variants={itemVariants}
            >
              Let's Talk
            </motion.h3>

            {/* Gold divider */}
            <motion.div variants={itemVariants} className="mb-6">
              <div
                className="w-10 h-[2px]"
                style={{ background: "linear-gradient(90deg, #c9a227, transparent)" }}
              />
            </motion.div>

            <motion.p
              className="mb-8 text-base leading-relaxed"
              style={{ color: "rgba(210,190,130,0.6)" }}
              variants={itemVariants}
            >
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Fill out the form, and
              I'll get back to you as soon as possible.
            </motion.p>

            <motion.div className="space-y-5" variants={itemVariants}>
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className="p-3 rounded-xl flex-shrink-0"
                    style={{
                      background: "linear-gradient(135deg, #c9a227 0%, #f5d060 100%)",
                      boxShadow: "0 4px 16px rgba(201,162,39,0.2)",
                    }}
                  >
                    <span style={{ color: "#0a0800" }}>{item.icon}</span>
                  </div>

                  <div>
                    <h4 className="font-bold mb-0.5" style={{ color: "#f5d060" }}>
                      {item.title}
                    </h4>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm transition-colors duration-200"
                        style={{ color: "rgba(210,190,130,0.6)" }}
                        onMouseEnter={e => (e.currentTarget.style.color = "#f5d060")}
                        onMouseLeave={e => (e.currentTarget.style.color = "rgba(210,190,130,0.6)")}
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-sm" style={{ color: "rgba(210,190,130,0.6)" }}>
                        {item.content}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: FORM ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.form
              onSubmit={handleSubmit}
              className="p-6 rounded-2xl space-y-5"
              style={{
                background: "rgba(201,162,39,0.04)",
                border: "1px solid rgba(201,162,39,0.18)",
                backdropFilter: "blur(6px)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              }}
              variants={itemVariants}
            >
              {/* Success */}
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    className="p-4 rounded-xl text-sm font-medium"
                    style={{
                      background: "rgba(201,162,39,0.1)",
                      border: "1px solid rgba(201,162,39,0.4)",
                      color: "#f5d060",
                    }}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    ✅ Thanks for your message! I'll get back to you soon.
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Error */}
              <AnimatePresence>
                {submitError && (
                  <motion.div
                    className="p-4 rounded-xl text-sm font-medium"
                    style={{
                      background: "rgba(200,50,50,0.1)",
                      border: "1px solid rgba(200,50,50,0.3)",
                      color: "#f87171",
                    }}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    ❌ {submitError}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Honeypot */}
              <input type="text" name="botcheck" value={formData.botcheck} onChange={handleChange} className="hidden" />

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block mb-1.5 text-xs font-semibold tracking-wider uppercase"
                  style={{ color: "rgba(201,162,39,0.7)" }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  style={{ ...inputStyle, colorScheme: "dark" }}
                  onFocus={e => {
                    e.currentTarget.style.borderColor = "rgba(201,162,39,0.6)";
                    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(201,162,39,0.1)";
                  }}
                  onBlur={e => {
                    e.currentTarget.style.borderColor = "rgba(201,162,39,0.2)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-1.5 text-xs font-semibold tracking-wider uppercase"
                  style={{ color: "rgba(201,162,39,0.7)" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  style={{ ...inputStyle, colorScheme: "dark" }}
                  onFocus={e => {
                    e.currentTarget.style.borderColor = "rgba(201,162,39,0.6)";
                    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(201,162,39,0.1)";
                  }}
                  onBlur={e => {
                    e.currentTarget.style.borderColor = "rgba(201,162,39,0.2)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block mb-1.5 text-xs font-semibold tracking-wider uppercase"
                  style={{ color: "rgba(201,162,39,0.7)" }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  style={{ ...inputStyle, resize: "none", colorScheme: "dark" }}
                  onFocus={e => {
                    e.currentTarget.style.borderColor = "rgba(201,162,39,0.6)";
                    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(201,162,39,0.1)";
                  }}
                  onBlur={e => {
                    e.currentTarget.style.borderColor = "rgba(201,162,39,0.2)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                style={{
                  background: isSubmitting
                    ? "rgba(201,162,39,0.4)"
                    : "linear-gradient(135deg, #c9a227 0%, #f5d060 50%, #b8891a 100%)",
                  color: "#0a0800",
                  boxShadow: isSubmitting ? "none" : "0 4px 20px rgba(201,162,39,0.3)",
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                }}
                onMouseEnter={e => {
                  if (!isSubmitting) {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 28px rgba(201,162,39,0.45)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                  }
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(201,162,39,0.3)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="w-4 h-4 animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <SendIcon size={16} />
                    Send Message
                  </>
                )}
              </button>
            </motion.form>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-0"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(8,6,0,0.8))" }}
      />
    </section>
  );
};