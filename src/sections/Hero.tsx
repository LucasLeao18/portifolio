"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  BrainCircuit,
  Code2,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "@/data/profile";

const focusCards = [
  { Icon: Code2, label: "Full stack", value: "Next.js, Node.js e APIs" },
  { Icon: BrainCircuit, label: "IA aplicada", value: "Fraude bancária e dados" },
  { Icon: ShieldCheck, label: "Segurança", value: "Autenticação e boas práticas" },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const fadeUp = (delay = 0) => ({
    initial: false,
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduceMotion ? 0 : 0.25, delay: reduceMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section
      id="hero"
      className="relative flex min-h-dvh items-center px-6 pb-16 pt-28"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="text-left">
          <motion.div
            {...fadeUp()}
            className="mb-6 flex items-center gap-3 lg:hidden"
          >
            <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden border border-[var(--border)] bg-[var(--card)]">
              <Image
                src={profile.avatar}
                alt=""
                fill
                priority
                sizes="64px"
                className="object-cover"
                aria-hidden="true"
              />
            </div>
            <span className="inline-flex min-h-11 items-center gap-2 border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm font-medium text-[var(--text-soft)]">
              <span className="h-2 w-2 flex-shrink-0 bg-[var(--accent)]" />
              Disponível para oportunidades júnior e colaboração
            </span>
          </motion.div>

          <motion.span
            {...fadeUp()}
            className="hidden min-h-11 items-center gap-2 border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm font-medium text-[var(--text-soft)] lg:inline-flex"
          >
            <span className="h-2 w-2 bg-[var(--accent)]" />
            Disponível para oportunidades júnior e colaboração
          </motion.span>

          <motion.h1
            {...fadeUp(0.05)}
            className="mt-8 max-w-4xl text-balance text-5xl font-semibold leading-[1.02] text-[var(--text)] sm:text-6xl lg:text-7xl"
          >
            Lucas Leão
          </motion.h1>

          <motion.p
            {...fadeUp(0.12)}
            className="mt-5 max-w-3xl text-xl font-medium leading-relaxed text-[var(--text-soft)] md:text-2xl"
          >
            {profile.title}
          </motion.p>

          <motion.p
            {...fadeUp(0.18)}
            className="mt-5 max-w-2xl text-base leading-8 text-[var(--text-muted)] md:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            {...fadeUp(0.24)}
            className="mt-8 flex flex-wrap gap-3"
          >
            {profile.focus.map((item) => (
              <span
                key={item}
                className="border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] px-3 py-2 text-sm font-medium text-[var(--text-soft)]"
              >
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div
            {...fadeUp(0.3)}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projetos"
              className="focus-ring inline-flex min-h-11 items-center gap-2 bg-[var(--accent)] px-6 py-3 text-base font-semibold text-[#06210f] transition-colors hover:bg-[var(--accent-strong)]"
            >
              Ver projetos
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a
              href="#contato"
              className="focus-ring inline-flex min-h-11 items-center gap-2 border border-[var(--border)] bg-[var(--card)] px-6 py-3 text-base font-semibold text-[var(--text)] transition-colors hover:border-[var(--accent)]"
            >
              Falar comigo
            </a>
          </motion.div>

          <motion.div
            {...fadeUp(0.36)}
            className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-[var(--text-muted)]"
          >
            <span className="flex min-h-11 items-center gap-2">
              <MapPin size={16} aria-hidden="true" />
              Recife, PE · Remoto
            </span>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir GitHub de Lucas Leão"
              className="focus-ring flex min-h-11 items-center gap-2 transition-colors hover:text-[var(--accent)]"
            >
              <FaGithub size={17} aria-hidden="true" /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir LinkedIn de Lucas Leão"
              className="focus-ring flex min-h-11 items-center gap-2 transition-colors hover:text-[var(--accent)]"
            >
              <FaLinkedin size={17} aria-hidden="true" /> LinkedIn
            </a>
          </motion.div>
        </div>

        <motion.div
          {...fadeUp(0.18)}
          className="relative mx-auto w-full max-w-[420px] lg:max-w-none"
        >
          <div className="relative mx-auto aspect-square w-full max-w-[360px] overflow-hidden border border-[var(--border)] bg-[var(--card)] p-2 shadow-[0_28px_90px_-55px_rgba(46,232,143,0.75)]">
            <div className="relative h-full w-full overflow-hidden">
              <Image
                src={profile.avatar}
                alt="Foto de Lucas Leão"
                fill
                priority
                sizes="(min-width: 1024px) 360px, 82vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {focusCards.map(({ Icon, label, value }) => (
              <div
                key={label}
                className="border border-[var(--border-soft)] bg-[rgba(17,22,31,0.78)] p-4 backdrop-blur"
              >
                <Icon size={18} className="mb-3 text-[var(--accent)]" aria-hidden="true" />
                <p className="text-sm font-semibold text-[var(--text)]">{label}</p>
                <p className="mt-1 text-xs leading-5 text-[var(--text-muted)]">{value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#sobre"
        aria-label="Ir para a seção sobre"
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ delay: reduceMotion ? 0 : 1, duration: reduceMotion ? 0 : 0.5 }}
        className="focus-ring absolute bottom-6 left-1/2 hidden min-h-11 -translate-x-1/2 items-center justify-center text-[var(--text-muted)] transition-colors hover:text-[var(--accent)] md:flex"
      >
        <motion.span
          animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
          transition={reduceMotion ? undefined : { repeat: Infinity, duration: 1.8 }}
        >
          <ArrowDown size={24} aria-hidden="true" />
        </motion.span>
      </motion.a>
    </section>
  );
}
