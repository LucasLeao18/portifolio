import { MapPin, Mail } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import { profile } from "@/data/profile";

const stats = [
  { label: "Anos estudando", value: "5+" },
  { label: "Projetos full stack", value: "21+" },
  { label: "Acessos/mês", value: "2k+" },
  { label: "Experiências", value: "2" },
];

export default function About() {
  const paragraphs = profile.about.split("\n\n");

  return (
    <section id="sobre" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionWrapper>
          <SectionTitle eyebrow="Perfil">Sobre Mim</SectionTitle>
        </SectionWrapper>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Info card */}
          <SectionWrapper delay={0.1} className="lg:col-span-2">
            <div className="card sticky top-24 p-8">
              <div className="mb-6 flex justify-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#1d1d1f] text-3xl font-semibold text-white select-none">
                  LL
                </div>
              </div>
              <h3 className="text-center text-lg font-semibold text-[#1d1d1f]">{profile.name}</h3>
              <p className="mt-1 text-center text-sm text-[#6e6e73]">{profile.title}</p>

              <div className="mt-6 space-y-1 border-t border-[#f0f0f2] pt-5">
                {[
                  { Icon: MapPin, text: profile.location },
                  { Icon: Mail, text: profile.email, href: `mailto:${profile.email}` },
                  { Icon: FaLinkedin, text: "linkedin.com/in/lucasleão18", href: profile.linkedin },
                  { Icon: FaGithub, text: "github.com/LucasLeao18", href: profile.github },
                ].map(({ Icon, text, href }) => {
                  const inner = (
                    <>
                      <Icon size={15} className="flex-shrink-0 text-[#86868b]" />
                      <span className="truncate">{text}</span>
                    </>
                  );
                  return href ? (
                    <a
                      key={text}
                      href={href}
                      target={href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm text-[#424245] transition-colors hover:bg-[#f5f5f7]"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div key={text} className="flex items-center gap-3 px-2 py-2 text-sm text-[#424245]">
                      {inner}
                    </div>
                  );
                })}
              </div>
            </div>
          </SectionWrapper>

          {/* Bio + stats */}
          <SectionWrapper delay={0.2} className="lg:col-span-3">
            <div className="space-y-5">
              {paragraphs.map((p, i) => (
                <p key={i} className="text-lg leading-relaxed text-[#424245]">
                  {p}
                </p>
              ))}

              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[#e8e8ed] bg-[#e8e8ed] sm:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-white p-5 text-center">
                    <p className="text-3xl font-semibold text-[#1d1d1f]">{stat.value}</p>
                    <p className="mt-1 text-xs leading-tight text-[#6e6e73]">{stat.label}</p>
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
