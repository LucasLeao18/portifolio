import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lucas Leão — Desenvolvedor Full Stack Júnior",
  description:
    "Portfólio de Lucas Leão, Desenvolvedor Full Stack Júnior com experiência em React, Next.js, Node.js, NestJS, APIs REST e soluções web escaláveis.",
  keywords: [
    "desenvolvedor full stack júnior",
    "programador júnior",
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "TypeScript",
    "Recife",
    "portfólio",
  ],
  openGraph: {
    title: "Lucas Leão — Desenvolvedor Full Stack Júnior",
    description:
      "Portfólio de Lucas Leão, Desenvolvedor Full Stack Júnior com experiência em React, Next.js, Node.js, NestJS e APIs REST.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
