import type { Project, Experience, SkillGroup } from "@/types";

export const projects: Project[] = [
  {
    id: "image-compressor",
    title: "Image Compressor",
    tagline: "Full-stack image optimization platform",
    description:
      "A production-grade image compression platform built as a monorepo. Handles bulk uploads, real-time compression previews, and persistent history — all with a clean, fast UI.",
    challenge:
      "Building a file-processing pipeline that stays responsive under load while maintaining quality/size fidelity across formats (JPEG, PNG, WebP).",
    solution:
      "Separated concerns into an API service and a web client via pnpm workspaces. The API handles Sharp-based compression in a queue, while the client streams progress via polling. Prisma ORM manages compression history with PostgreSQL.",
    tech: ["Next.js", "Node.js", "Express", "PostgreSQL", "Prisma", "Sharp", "Docker", "pnpm"],
    liveUrl: "https://image-compressor-web-zb8d.vercel.app/",
    featured: true,
  },
  {
    id: "json-master",
    title: "JSON Master",
    tagline: "Developer-grade data format toolkit",
    description:
      "A zero-dependency, browser-based tool for formatting, validating, and converting between JSON, YAML, and XML. Built for developers who hate tab-switching.",
    challenge:
      "Monaco Editor's full bundle is massive. Needed sub-second load times while still offering an IDE-quality editing experience with format validation.",
    solution:
      "Lazy-loaded Monaco with dynamic imports and a custom Vite config. Format conversion logic (js-yaml, fast-xml-parser) runs entirely client-side — no server round-trips. Comprehensive test suite with Vitest.",
    tech: ["React", "TypeScript", "Vite", "Monaco Editor", "js-yaml", "fast-xml-parser", "Vitest"],
    liveUrl: "https://jsonmaster.netlify.app/",
    featured: true,
  },
  {
    id: "blog-platform",
    title: "Blogging Platform",
    tagline: "Full-stack CMS with real-time likes",
    description:
      "A modern blogging platform with rich content, per-post like counts, and a clean reading experience. Built end-to-end from auth to deployment.",
    challenge:
      "Implementing real-time like updates without WebSockets — needed optimistic UI that stays consistent across tabs and sessions.",
    solution:
      "Used SWR for client-side caching with optimistic mutations. Like endpoints are API routes in Next.js with PostgreSQL-backed counters. Middleware handles auth on protected routes.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "NextAuth", "Tailwind CSS"],
    featured: false,
  },
];

export const experiences: Experience[] = [
  {
    id: "freelance",
    role: "Freelance Full-Stack Developer",
    company: "Independent",
    period: "2023 — Present",
    description: [
      "Built and shipped multiple production web apps for clients across e-commerce, services, and tools verticals",
      "Architected full-stack systems using Next.js, Node.js, and PostgreSQL with CI/CD pipelines",
      "Delivered real-time features (Socket.io, WebRTC) for collaborative and communication-focused products",
    ],
    tech: ["Next.js", "Node.js", "PostgreSQL", "Socket.io", "Docker"],
  },
  {
    id: "self-projects",
    role: "Open Source & Personal Projects",
    company: "GitHub",
    period: "2022 — Present",
    description: [
      "Published developer tools used by hundreds of developers monthly",
      "Built browser extensions, image processing tools, and data format converters",
      "Focused on performance, DX, and clean architecture in every project",
    ],
    tech: ["React", "TypeScript", "Vite", "Chrome Extension APIs"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Framer Motion", "Zustand", "Redux", "React Query"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma ORM", "REST APIs", "Socket.io"],
  },
  {
    category: "Tools & Other",
    skills: ["Docker", "Git", "pnpm", "Vite", "WebRTC", "Vercel", "Netlify"],
  },
];

export const socials = {
  github: "https://github.com/abhishek-nayak",
  linkedin: "https://linkedin.com/in/abhishek-nayak",
  email: "mailto:abhishek@example.com",
};
