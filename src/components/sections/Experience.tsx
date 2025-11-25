import React, { useState } from 'react';
import { ArrowRight, Code, Briefcase } from 'lucide-react';

export default function ExperiencePortfolio() {
  const [hoveredCard, setHoveredCard] = useState(null);

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
    "Collaborated with team members using ClickUp, Git, and structured workflows"
  ]
}
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="px-8 py-16 mx-auto max-w-7xl">

        {/* Main Content Grid */}
        <div className="grid items-start gap-12 md:grid-cols-2">
          {/* Left Side - Image/Visual */}
<img 
  src="https://plus.unsplash.com/premium_photo-1676998930828-cabd06cb61c5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  alt="Preview"
  className="object-cover w-full h-5/6 rounded-2xl"
/>
          {/* Right Side - Experience Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-3xl font-bold text-yellow-400">EXPERIENCE</h2>
              <ArrowRight className="w-6 h-6 text-yellow-400" />
            </div>

            {/* Dashed Border Container */}
            <div className="p-8 border-2 border-dashed border-yellow-400/30 rounded-2xl bg-gray-800/50">
              <div className="space-y-8">
                {experiences.map((exp) => (
                  <div 
                    key={exp.id}
                    className="relative cursor-pointer group"
                    // onMouseEnter={() => setHoveredCard(exp.)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Period */}
                    <div className="mb-2 text-sm font-semibold text-yellow-400/70">
                      {exp.period}
                    </div>

                    {/* Title */}
                    <h3 className="mb-1 text-2xl font-bold text-yellow-400">
                      {exp.title}
                    </h3>


                    {/* Company & Location */}
                    <div className="flex items-center gap-2 mb-4 text-sm text-gray-400">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.company}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>

                    {/* Description */}
                    <p className="mb-4 leading-relaxed text-gray-300">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-2 flex-shrink-0"></div>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Hover Effect Line */}
                    <div 
                      className={`absolute left-0 top-0 w-1 h-full bg-yellow-400 rounded-full transition-all duration-300 ${
                        hoveredCard === exp.id ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
                      }`}
                    ></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Experience Cards (if you want to add more) */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="cursor-pointer group">
                <div className="p-6 transition-colors duration-300 bg-gray-800 border border-yellow-400/20 rounded-xl hover:bg-yellow-400 hover:border-yellow-400">
                  <div className="mb-2 text-sm font-semibold text-yellow-400 group-hover:text-black">
                    2022 - 2024
                  </div>
                  <h4 className="mb-2 text-lg font-bold text-yellow-400 group-hover:text-black">
                    Education
                  </h4>
                  <p className="text-sm text-gray-300 group-hover:text-black">
                    PPTM Higher Secondary School, Cherur
                    Higher Secondary Education (Commerce Computer Applications)
                  </p>
                </div>
              </div>

              <div className="cursor-pointer group">
                <div className="p-6 transition-colors duration-300 bg-gray-800 border border-yellow-400/20 rounded-xl hover:bg-yellow-400 hover:border-yellow-400">
                  <div className="mb-2 text-sm font-semibold text-yellow-400 group-hover:text-black">
                    2024 - Present
                  </div>
                  <h4 className="mb-2 text-lg font-bold text-yellow-400 group-hover:text-black">
                    Bridgeon Solutions
                  </h4>
                  <p className="text-sm text-gray-300 group-hover:text-black">
                    Currently working as a Full Stack Developer Intern at Bridgeon Solutions 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}