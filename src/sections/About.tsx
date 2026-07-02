import Image from "next/image";
import { BrainCircuit, Code2, Mail, MapPin, ShieldCheck } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import { profile } from "@/data/profile";

const stats = [
  { label: "Acessos mensais no Ads Flow", value: "2k+" },
  { label: "Projetos full stack", value: "21+" },
  { label: "Formação em Sistemas de Informação", value: "UPE" },
  { label: "Foco atual em IA e segurança", value: "IA" },
];

const pillars = [
  {
    Icon: Code2,
    title: "Construção full stack",
    text: "Interfaces, APIs REST, autenticação, painéis administrativos, integrações e deploy.",
  },
  {
    Icon: BrainCircuit,
    title: "IA aplicada",
    text: "Estudo de Python e machine learning para resolver problemas como detecção de fraude bancária.",
  },
  {
    Icon: ShieldCheck,
    title: "Mentalidade de segurança",
    text: "Interesse em cibersegurança com prática em validação, JWT, sanitização e proteção de dados.",
  },
];

export default function About() {
  const paragraphs = profile.about.split("\n\n");

  return (
    <section id="sobre" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionWrapper>
          <SectionTitle eyebrow="Perfil">Sobre Mim</SectionTitle>
        </SectionWrapper>

        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <SectionWrapper delay={0.1}>
            <aside className="card sticky top-24 p-6">
              <div className="relative mx-auto aspect-square w-32 overflow-hidden border border-[var(--border)] bg-[var(--bg-soft)]">
                <Image
                  src={profile.avatar}
                  alt="Foto de Lucas Leão"
                  fill
                  sizes="128px"
                  className="object-cover"
                />
              </div>

              <h3 className="mt-6 text-center text-lg font-semibold text-[var(--text)]">{profile.name}</h3>
              <p className="mt-2 text-center text-sm leading-6 text-[var(--text-muted)]">{profile.title}</p>

              <div className="mt-6 space-y-1 border-t border-[var(--border-soft)] pt-5">
                {[
                  { Icon: MapPin, text: profile.location },
                  { Icon: Mail, text: profile.emailLabel, href: "#contato" },
                  { Icon: FaLinkedin, text: "linkedin.com/in/lucasleão18", href: profile.linkedin },
                  { Icon: FaGithub, text: "github.com/LucasLeao18", href: profile.github },
                ].map(({ Icon, text, href }) => {
                  const isExternal = href && !href.startsWith("#");
                  const inner = (
                    <>
                      <Icon size={16} className="flex-shrink-0 text-[var(--accent)]" aria-hidden="true" />
                      <span className="truncate">{text}</span>
                    </>
                  );

                  return href ? (
                    <a
                      key={text}
                      href={href}
                      target={isExternal ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="focus-ring flex min-h-11 items-center gap-3 px-2 py-2 text-sm text-[var(--text-soft)] transition-colors hover:bg-[rgba(255,255,255,0.04)] hover:text-[var(--text)]"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div key={text} className="flex min-h-11 items-center gap-3 px-2 py-2 text-sm text-[var(--text-soft)]">
                      {inner}
                    </div>
                  );
                })}
              </div>
            </aside>
          </SectionWrapper>

          <SectionWrapper delay={0.2}>
            <div className="space-y-8">
              <div className="space-y-5">
                {paragraphs.map((p, i) => (
                  <p key={i} className="text-lg leading-8 text-[var(--text-soft)]">
                    {p}
                  </p>
                ))}
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {pillars.map(({ Icon, title, text }) => (
                  <div key={title} className="card h-full p-5">
                    <Icon size={20} className="mb-4 text-[var(--accent)]" aria-hidden="true" />
                    <h3 className="text-base font-semibold text-[var(--text)]">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{text}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 overflow-hidden border border-[var(--border-soft)] sm:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-5">
                    <p className="text-3xl font-semibold text-[var(--accent)]">{stat.value}</p>
                    <p className="mt-2 text-xs leading-5 text-[var(--text-muted)]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </SectionWrapper>
        </div>
      </div>
    </section>
  );
}
