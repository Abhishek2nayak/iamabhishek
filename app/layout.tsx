import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abhishek Nayak — Full-Stack Developer",
  description:
    "Full-stack developer specializing in React, Next.js, Node.js, and scalable web applications. Building products that matter.",
  keywords: [
    "Abhishek Nayak",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "Portfolio",
  ],
  authors: [{ name: "Abhishek Nayak" }],
  openGraph: {
    title: "Abhishek Nayak — Full-Stack Developer",
    description:
      "Full-stack developer specializing in React, Next.js, Node.js, and scalable web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
