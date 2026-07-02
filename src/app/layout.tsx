import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lucas Leão — Full Stack, IA e Segurança",
  description:
    "Portfólio de Lucas Leão, Desenvolvedor Full Stack Júnior com experiência em React, Next.js, Node.js, NestJS, APIs REST, e-commerce e estudos em IA aplicada a fraudes bancárias.",
  keywords: [
    "desenvolvedor full stack júnior",
    "programador júnior",
    "inteligência artificial",
    "machine learning",
    "cibersegurança",
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "TypeScript",
    "Recife",
    "portfólio",
  ],
  openGraph: {
    title: "Lucas Leão — Full Stack, IA e Segurança",
    description:
      "Portfólio de Lucas Leão, Desenvolvedor Full Stack Júnior com experiência em aplicações web, APIs REST, e-commerce e IA aplicada.",
    images: ["https://avatars.githubusercontent.com/u/130196100?v=4"],
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
