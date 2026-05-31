import { Mail, MessageCircle, MapPin, ArrowUpRight } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import { profile } from "@/data/profile";

const contactLinks = [
  { Icon: Mail, label: "E-mail", value: profile.email, href: `mailto:${profile.email}` },
  { Icon: MessageCircle, label: "WhatsApp", value: profile.phone, href: profile.whatsapp },
  { Icon: FaLinkedin, label: "LinkedIn", value: "linkedin.com/in/lucasleão18", href: profile.linkedin },
  { Icon: FaGithub, label: "GitHub", value: "github.com/LucasLeao18", href: profile.github },
];

export default function Contact() {
  return (
    <section id="contato" className="bg-[#f5f5f7] px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionWrapper>
          <SectionTitle eyebrow="Contato">Vamos Conversar</SectionTitle>
        </SectionWrapper>

        <SectionWrapper delay={0.1}>
          <div className="mb-12 text-center">
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#424245]">
              Estou aberto a oportunidades como{" "}
              <span className="font-medium text-[#1d1d1f]">Desenvolvedor Full Stack Júnior</span>,{" "}
              <span className="font-medium text-[#1d1d1f]">Programador Júnior</span> ou{" "}
              <span className="font-medium text-[#1d1d1f]">Desenvolvedor de Software Júnior</span>.
            </p>
            <p className="mt-3 flex items-center justify-center gap-1.5 text-sm text-[#86868b]">
              <MapPin size={14} />
              {profile.location}
            </p>
          </div>
        </SectionWrapper>

        <div className="grid gap-4 sm:grid-cols-2">
          {contactLinks.map((link, i) => (
            <SectionWrapper key={link.label} delay={i * 0.08}>
              <a
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="card card-hover group flex items-center gap-4 p-5"
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#1d1d1f] text-white">
                  <link.Icon size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium uppercase tracking-widest text-[#86868b]">{link.label}</p>
                  <p className="truncate text-sm font-medium text-[#1d1d1f]">{link.value}</p>
                </div>
                <ArrowUpRight
                  size={18}
                  className="flex-shrink-0 text-[#c7c7cc] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#1d1d1f]"
                />
              </a>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
