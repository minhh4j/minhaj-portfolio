import { useState } from 'react';
import { ArrowRight, Briefcase } from 'lucide-react';

export default function ExperiencePortfolio() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const experiences = [
    {
      id: 1,
      period: "Aug 2024 - Present",
      title: "MERN Stack Developer",
      company: "Bridgeon Solutions",
      location: "Malappuram, Kerala",
      description:
        "Self-taught MERN Stack developer currently working at Bridgeon Solutions. I have hands-on experience building real-world full-stack applications and have successfully completed three production-level projects.",
      highlights: [
        "Led UI/UX implementation for the Gametic real-time sports collaboration platform",
        "Implemented live chat, notifications, and match coordination using Socket.IO",
        "Worked on three full-stack projects involving Next.js, React, Node.js, Express, and MongoDB",
        "Built responsive, scalable UIs and secure REST APIs",
        "Collaborated with team members using ClickUp, Git, and structured workflows",
      ],
    },
  ];

  return (
    <div
      className="min-h-screen relative"
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

      {/* Ambient gold glow top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[320px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,162,39,0.13) 0%, transparent 70%)",
        }}
      />

      {/* Ambient side glows */}
      <div
        className="absolute top-1/4 left-0 w-[300px] h-[400px] pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-0 w-[300px] h-[400px] pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 px-8 py-16 mx-auto max-w-7xl">

        {/* Section Badge */}
        <div className="flex justify-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full"
            style={{
              color: "#f5d060",
              border: "1px solid rgba(201,162,39,0.35)",
              background: "rgba(201,162,39,0.08)",
              letterSpacing: "0.05em",
            }}
          >
            <Briefcase className="w-4 h-4" style={{ color: "#c9a227" }} />
            Professional Journey
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid items-start gap-12 md:grid-cols-2">

          {/* Left Side - Image */}
          <div className="relative">
            <img
              src="https://plus.unsplash.com/premium_photo-1676998930828-cabd06cb61c5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Preview"
              className="object-cover w-full h-[780px] rounded-2xl"
              style={{
                filter: "brightness(0.85) sepia(0.15) saturate(1.1)",
                boxShadow: "0 0 60px rgba(201,162,39,0.12), 0 24px 48px rgba(0,0,0,0.6)",
              }}
            />
            {/* Gold border frame */}
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                border: "1px solid rgba(201,162,39,0.25)",
                boxShadow: "inset 0 0 40px rgba(201,162,39,0.05)",
              }}
            />
            {/* Bottom gradient fade */}
            <div
              className="absolute bottom-0 left-0 right-0 h-24 rounded-b-2xl pointer-events-none"
              style={{
                background: "linear-gradient(to top, rgba(10,8,0,0.6), transparent)",
              }}
            />
          </div>

          {/* Right Side - Experience */}
          <div>
            {/* Heading */}
            <div className="flex items-center gap-3 mb-8">
              <h2
                className="text-3xl font-bold"
                style={{
                  color: "#f5d060",
                  letterSpacing: "-0.01em",
                  textShadow: "0 0 30px rgba(212,175,55,0.2)",
                }}
              >
                EXPERIENCE
              </h2>
              <ArrowRight className="w-6 h-6" style={{ color: "#c9a227" }} />
            </div>

            {/* Gold divider */}
            <div
              className="w-12 h-[2px] mb-8"
              style={{ background: "linear-gradient(90deg, #c9a227, transparent)" }}
            />

            {/* Dashed Border Container */}
            <div
              className="p-8 rounded-2xl"
              style={{
                border: "1.5px dashed rgba(201,162,39,0.35)",
                background: "rgba(201,162,39,0.04)",
                backdropFilter: "blur(4px)",
              }}
            >
              <div className="space-y-8">
                {experiences.map((exp) => (
                  <div
                    key={exp.id}
                    className="relative pl-4 cursor-pointer"
                    onMouseEnter={() => setHoveredCard(exp.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Hover side bar */}
                    <div
                      className="absolute left-0 top-0 w-[2px] rounded-full transition-all duration-300"
                      style={{
                        height: "100%",
                        background: "linear-gradient(to bottom, #c9a227, #f5d060)",
                        opacity: hoveredCard === exp.id ? 1 : 0,
                        transform: hoveredCard === exp.id ? "scaleY(1)" : "scaleY(0)",
                        transformOrigin: "top",
                      }}
                    />

                    {/* Period */}
                    <div
                      className="mb-2 text-xs font-semibold tracking-widest uppercase"
                      style={{ color: "rgba(201,162,39,0.7)" }}
                    >
                      {exp.period}
                    </div>

                    {/* Title */}
                    <h3
                      className="mb-1 text-2xl font-bold"
                      style={{
                        color: "#f5d060",
                        textShadow: "0 0 20px rgba(212,175,55,0.15)",
                      }}
                    >
                      {exp.title}
                    </h3>

                    {/* Company & Location */}
                    <div
                      className="flex items-center gap-2 mb-4 text-sm"
                      style={{ color: "rgba(210,190,130,0.6)" }}
                    >
                      <Briefcase className="w-4 h-4" style={{ color: "#c9a227" }} />
                      <span>{exp.company}</span>
                      <span style={{ color: "rgba(201,162,39,0.4)" }}>•</span>
                      <span>{exp.location}</span>
                    </div>

                    {/* Description */}
                    <p
                      className="mb-4 leading-relaxed text-sm"
                      style={{ color: "rgba(210,190,130,0.65)" }}
                    >
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-sm"
                          style={{ color: "rgba(210,190,130,0.6)" }}
                        >
                          <span
                            className="mt-[6px] flex-shrink-0 text-[8px]"
                            style={{ color: "#c9a227" }}
                          >
                            ◆
                          </span>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Cards */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {[
                {
                  period: "2022 – 2024",
                  title: "Education",
                  body: "PPTM Higher Secondary School, Cherur — Higher Secondary Education (Commerce & Computer Applications)",
                },
                {
                  period: "2024 – Present",
                  title: "Bridgeon Solutions",
                  body: "Currently working as a Full Stack Developer Intern at Bridgeon Solutions.",
                },
              ].map((card, i) => (
                <div key={i} className="group cursor-pointer">
                  <div
                    className="p-6 rounded-xl transition-all duration-300"
                    style={{
                      background: "rgba(201,162,39,0.05)",
                      border: "1px solid rgba(201,162,39,0.2)",
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = "linear-gradient(135deg, #c9a227 0%, #f5d060 50%, #b8891a 100%)";
                      el.style.border = "1px solid #c9a227";
                      el.style.boxShadow = "0 8px 32px rgba(201,162,39,0.25)";
                      el.querySelectorAll("[data-card-text]").forEach(t => {
                        (t as HTMLElement).style.color = "#0a0800";
                      });
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = "rgba(201,162,39,0.05)";
                      el.style.border = "1px solid rgba(201,162,39,0.2)";
                      el.style.boxShadow = "none";
                      el.querySelectorAll("[data-card-text]").forEach((t, idx2) => {
                        (t as HTMLElement).style.color =
                          idx2 === 0
                            ? "rgba(201,162,39,0.7)"
                            : idx2 === 1
                            ? "#f5d060"
                            : "rgba(210,190,130,0.6)";
                      });
                    }}
                  >
                    <div
                      data-card-text
                      className="mb-2 text-xs font-semibold tracking-widest uppercase transition-colors duration-300"
                      style={{ color: "rgba(201,162,39,0.7)" }}
                    >
                      {card.period}
                    </div>
                    <h4
                      data-card-text
                      className="mb-2 text-lg font-bold transition-colors duration-300"
                      style={{ color: "#f5d060" }}
                    >
                      {card.title}
                    </h4>
                    <p
                      data-card-text
                      className="text-sm leading-relaxed transition-colors duration-300"
                      style={{ color: "rgba(210,190,130,0.6)" }}
                    >
                      {card.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-0"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(8,6,0,0.8))" }}
      />
    </div>
  );
}