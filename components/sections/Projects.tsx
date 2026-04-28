"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronDown } from "lucide-react";

const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
);
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import TechBadge from "@/components/ui/TechBadge";
import { projects } from "@/lib/data";

export default function Projects() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          number="04"
          title="Projects"
          subtitle="Selected work with architectural depth — not just screenshots."
        />

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlassCard className="p-6 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    {project.featured && (
                      <span className="text-xs font-mono text-indigo-400 mb-1 block">
                        Featured
                      </span>
                    )}
                    <h3 className="text-white font-semibold text-xl">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 text-sm mt-0.5">{project.tagline}</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0 ml-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 flex items-center justify-center rounded-lg glass hover:border-white/20 text-gray-400 hover:text-white transition-all"
                        aria-label="GitHub"
                      >
                        <GithubIcon />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 flex items-center justify-center rounded-lg glass hover:border-white/20 text-gray-400 hover:text-white transition-all"
                        aria-label="Live site"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Case study toggle */}
                <button
                  onClick={() =>
                    setExpanded(expanded === project.id ? null : project.id)
                  }
                  className="flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 transition-colors mb-4 self-start"
                >
                  <span>
                    {expanded === project.id ? "Hide" : "Read"} case study
                  </span>
                  <motion.div
                    animate={{ rotate: expanded === project.id ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={12} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {expanded === project.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden mb-4"
                    >
                      <div className="border-t border-white/5 pt-4 space-y-3">
                        <div>
                          <p className="text-xs font-mono text-gray-500 mb-1 uppercase tracking-wide">
                            Challenge
                          </p>
                          <p className="text-sm text-gray-400 leading-relaxed">
                            {project.challenge}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-mono text-gray-500 mb-1 uppercase tracking-wide">
                            Solution
                          </p>
                          <p className="text-sm text-gray-400 leading-relaxed">
                            {project.solution}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Tech stack */}
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <TechBadge key={t} label={t} />
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
