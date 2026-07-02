import { BrainCircuit, Code2, Layers, Server, Database, Shield, Cloud, FlaskConical, Plug } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import Badge from "@/components/Badge";
import { skills } from "@/data/skills";

const categoryIcons: Record<string, React.ElementType> = {
  "IA & Dados": BrainCircuit,
  "Linguagens & Fundamentos": Code2,
  "Frontend": Layers,
  "Backend": Server,
  "Banco de Dados": Database,
  "Segurança": Shield,
  "DevOps & Infraestrutura": Cloud,
  "Testes & Qualidade": FlaskConical,
  "Integrações & E-commerce": Plug,
};

const marquee = [
  "Java", "Python", "Machine Learning", "IA", "Cibersegurança", "Lua",
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "NestJS",
  "Express", "Prisma", "MongoDB", "Docker", "Redis", "Tailwind CSS",
];

export default function Skills() {
  return (
    <section id="habilidades" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionWrapper>
          <SectionTitle eyebrow="Stack">Habilidades Técnicas</SectionTitle>
        </SectionWrapper>

        {/* Marquee */}
        <SectionWrapper>
          <div className="marquee-mask mb-12 flex w-full min-w-0 overflow-hidden">
            <div className="marquee-track flex shrink-0 gap-3 pr-3">
              {[...marquee, ...marquee].map((t, i) => (
                <span
                  key={i}
                  className="whitespace-nowrap border border-[var(--border-soft)] bg-[rgba(255,255,255,0.035)] px-4 py-2 text-sm font-medium text-[var(--text-soft)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </SectionWrapper>

        <div className="grid gap-5 md:grid-cols-2">
          {skills.map((cat, i) => {
            const Icon = categoryIcons[cat.name] ?? Layers;
            return (
              <SectionWrapper key={cat.name} delay={(i % 2) * 0.08}>
                  <div className="card card-hover h-full p-7">
                  <h3 className="mb-5 flex items-center gap-3 text-base font-semibold text-[var(--text)]">
                    <span className="flex h-9 w-9 items-center justify-center border border-[var(--border-soft)] bg-[rgba(46,232,143,0.1)] text-[var(--accent)]">
                      <Icon size={17} aria-hidden="true" />
                    </span>
                    {cat.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <Badge key={item} label={item} />
                    ))}
                  </div>
                </div>
              </SectionWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
