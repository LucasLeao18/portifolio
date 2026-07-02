"use client";

import { Mail, MessageCircle, MapPin, ArrowUpRight } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import { profile } from "@/data/profile";

const emailCodes = [
  108, 117, 99, 97, 115, 108, 101, 97, 111, 112, 101, 115, 115, 111, 97, 108, 64, 103, 109,
  97, 105, 108, 46, 99, 111, 109,
];
const mailtoCodes = [109, 97, 105, 108, 116, 111, 58];
const whatsappUrlCodes = [104, 116, 116, 112, 115, 58, 47, 47, 119, 97, 46, 109, 101, 47];
const whatsappCodes = [53, 53, 56, 49, 57, 56, 53, 50, 53, 50, 55, 55, 57];

const contactLinks = [
  { Icon: Mail, label: "E-mail", value: profile.emailLabel, action: "email" },
  { Icon: MessageCircle, label: "WhatsApp", value: profile.whatsappLabel, action: "whatsapp" },
  { Icon: FaLinkedin, label: "LinkedIn", value: "linkedin.com/in/lucasleao18", href: profile.linkedin },
  { Icon: FaGithub, label: "GitHub", value: "github.com/LucasLeao18", href: profile.github },
] as const;

function decode(codes: readonly number[]) {
  return String.fromCharCode(...codes);
}

function openContact(action: "email" | "whatsapp") {
  if (action === "email") {
    window.location.href = `${decode(mailtoCodes)}${decode(emailCodes)}`;
    return;
  }

  window.open(`${decode(whatsappUrlCodes)}${decode(whatsappCodes)}`, "_blank", "noopener,noreferrer");
}

export default function Contact() {
  const cardClass =
    "card card-hover focus-ring group flex min-h-[92px] items-center gap-4 p-5 text-left";

  return (
    <section id="contato" className="border-t border-[var(--border-soft)] bg-[rgba(255,255,255,0.025)] px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionWrapper>
          <SectionTitle eyebrow="Contato">Vamos Conversar</SectionTitle>
        </SectionWrapper>

        <SectionWrapper delay={0.1}>
          <div className="mb-12 text-center">
            <p className="mx-auto max-w-2xl text-lg leading-8 text-[var(--text-soft)]">
              Estou aberto a oportunidades como{" "}
              <span className="font-semibold text-[var(--text)]">Desenvolvedor Full Stack Júnior</span>,{" "}
              <span className="font-semibold text-[var(--text)]">Programador Júnior</span> ou{" "}
              <span className="font-semibold text-[var(--text)]">Desenvolvedor de Software Júnior</span>.
            </p>
            <p className="mt-4 flex items-center justify-center gap-2 text-sm text-[var(--text-muted)]">
              <MapPin size={14} aria-hidden="true" />
              {profile.location}
            </p>
          </div>
        </SectionWrapper>

        <div className="grid gap-4 sm:grid-cols-2">
          {contactLinks.map((link, i) => {
            const Icon = link.Icon;
            const content = (
              <>
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center border border-[var(--border-soft)] bg-[rgba(46,232,143,0.1)] text-[var(--accent)]">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium uppercase text-[var(--text-muted)]">{link.label}</p>
                  <p className="truncate text-sm font-semibold text-[var(--text)]">{link.value}</p>
                </div>
                <ArrowUpRight
                  size={18}
                  className="flex-shrink-0 text-[var(--text-muted)] transition-colors group-hover:text-[var(--accent)]"
                  aria-hidden="true"
                />
              </>
            );

            return (
              <SectionWrapper key={link.label} delay={i * 0.08}>
                {"action" in link ? (
                  <button
                    type="button"
                    onClick={() => openContact(link.action)}
                    className={`${cardClass} w-full cursor-pointer`}
                    aria-label={`Abrir ${link.label}`}
                  >
                    {content}
                  </button>
                ) : (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cardClass}
                    aria-label={`Abrir ${link.label}`}
                  >
                    {content}
                  </a>
                )}
              </SectionWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
