"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import GlassCard from "@/components/ui/GlassCard";
import { Code2, Layers, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    label: "Clean code",
    text: "Readable, maintainable architecture that scales.",
  },
  {
    icon: Layers,
    label: "Full-stack",
    text: "From DB schema to UI animations — end to end.",
  },
  {
    icon: Zap,
    label: "Performance-first",
    text: "Obsessive about load times, bundle sizes, and UX.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          number="01"
          title="About me"
          subtitle="A bit about who I am and how I think about building software."
        />

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <FadeIn delay={0.1}>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                I&apos;m a self-taught full-stack developer with a deep love for
                building things that actually work well. I care about the details
                — the micro-interactions, the query efficiency, the error states
                that most people skip.
              </p>
              <p>
                My approach is product-minded: I think about users first, then
                architecture. I&apos;ve shipped real apps across browser extensions,
                developer tools, image processing pipelines, and content
                platforms.
              </p>
              <p>
                When I&apos;m not coding, I&apos;m probably reading about systems design,
                reverse-engineering well-built products, or experimenting with
                new tech that&apos;s worth knowing about.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="space-y-3">
              {highlights.map(({ icon: Icon, label, text }) => (
                <GlassCard key={label} className="p-4 flex items-start gap-4">
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                    <Icon size={16} className="text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white mb-0.5">{label}</p>
                    <p className="text-sm text-gray-500">{text}</p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
