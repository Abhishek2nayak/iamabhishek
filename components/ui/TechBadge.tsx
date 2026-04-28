interface TechBadgeProps {
  label: string;
  accent?: boolean;
}

export default function TechBadge({ label, accent = false }: TechBadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium tracking-wide border transition-colors duration-200 ${
        accent
          ? "bg-indigo-500/10 border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/20"
          : "bg-white/5 border-white/10 text-gray-400 hover:border-white/20 hover:text-gray-300"
      }`}
    >
      {label}
    </span>
  );
}
