"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  number: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({
  number,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <motion.div
      className="mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="text-indigo-400 font-mono text-sm">{number}</span>
        <div className="h-px flex-1 max-w-[60px] bg-indigo-500/30" />
      </div>
      <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-gray-400 text-base max-w-xl">{subtitle}</p>
      )}
    </motion.div>
  );
}
