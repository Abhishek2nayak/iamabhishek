"use client";

import { motion, HTMLMotionProps } from "framer-motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      className={`glass rounded-2xl relative overflow-hidden ${className}`}
      whileHover={hover ? { y: -4, borderColor: "rgba(99,102,241,0.25)" } : undefined}
      transition={{ duration: 0.2, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
