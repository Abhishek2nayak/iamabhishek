"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import TechBadge from "@/components/ui/TechBadge";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          number="03"
          title="Experience"
          subtitle="Where I've applied my skills in the real world."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/40 via-indigo-500/10 to-transparent hidden md:block" />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="md:pl-16 relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 top-6 w-2.5 h-2.5 rounded-full bg-indigo-500 border-2 border-indigo-500/30 hidden md:block" />

                <GlassCard className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-white font-semibold text-lg">{exp.role}</h3>
                      <p className="text-indigo-400 text-sm">{exp.company}</p>
                    </div>
                    <span className="text-xs font-mono text-gray-500 shrink-0 mt-1">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((point, j) => (
                      <li key={j} className="text-sm text-gray-400 flex gap-3">
                        <span className="text-indigo-500 mt-0.5 shrink-0">—</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <TechBadge key={t} label={t} />
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
