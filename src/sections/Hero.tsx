"use client";
import { motion } from "framer-motion";
import { ChevronDown, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24 pb-20 text-center"
    >
      <motion.span
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#e8e8ed] bg-[#f5f5f7] px-4 py-1.5 text-sm text-[#6e6e73]"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
        Disponível para novas oportunidades
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="max-w-4xl text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-[#1d1d1f] md:text-7xl"
      >
        Lucas <span className="text-[#6e6e73]">Leão</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mt-6 text-xl font-medium text-[#1d1d1f] md:text-2xl"
      >
        {profile.title}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="mt-5 max-w-2xl text-balance text-base leading-relaxed text-[#6e6e73] md:text-lg"
      >
        {profile.bio}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-3"
      >
        <a
          href="#projetos"
          className="rounded-full bg-[#1d1d1f] px-7 py-3 text-base font-medium text-white transition-colors hover:bg-black"
        >
          Ver Projetos
        </a>
        <a
          href="#contato"
          className="rounded-full border border-[#d2d2d7] bg-white px-7 py-3 text-base font-medium text-[#1d1d1f] transition-colors hover:bg-[#f5f5f7]"
        >
          Entrar em Contato
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="mt-8 flex items-center gap-5 text-sm text-[#6e6e73]"
      >
        <span className="flex items-center gap-1.5">
          <MapPin size={14} /> Recife, PE · Remoto
        </span>
        <span className="h-3 w-px bg-[#d2d2d7]" />
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="flex items-center gap-1.5 transition-colors hover:text-[#1d1d1f]"
        >
          <FaGithub size={15} /> GitHub
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="flex items-center gap-1.5 transition-colors hover:text-[#1d1d1f]"
        >
          <FaLinkedin size={15} /> LinkedIn
        </a>
      </motion.div>

      <motion.a
        href="#sobre"
        aria-label="Rolar para baixo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#86868b]"
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ChevronDown size={24} />
        </motion.div>
      </motion.a>
    </section>
  );
}
