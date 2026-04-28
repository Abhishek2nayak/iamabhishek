"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import TechBadge from "@/components/ui/TechBadge";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          number="02"
          title="Skills"
          subtitle="Technologies I work with regularly in production."
        />

        <div className="grid md:grid-cols-3 gap-4">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
            >
              <GlassCard className="p-6 h-full">
                <p className="text-xs font-mono text-indigo-400 mb-4 uppercase tracking-widest">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <TechBadge key={skill} label={skill} />
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
