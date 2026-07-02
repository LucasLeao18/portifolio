import { Award, Calendar } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <section id="certificacoes" className="border-y border-[var(--border-soft)] bg-[rgba(255,255,255,0.025)] px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionWrapper>
          <SectionTitle eyebrow="Conquistas">Eventos & Certificações</SectionTitle>
        </SectionWrapper>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {certifications.map((cert, i) => {
            const isCert = cert.type === "Certificação";
            return (
              <SectionWrapper key={i} delay={i * 0.1}>
                <div className="card card-hover flex h-full flex-col p-7">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center border border-[var(--border-soft)] bg-[rgba(46,232,143,0.1)] text-[var(--accent)]">
                    {isCert ? <Award size={20} aria-hidden="true" /> : <Calendar size={20} aria-hidden="true" />}
                  </div>
                  <span className="mb-2 inline-block w-fit border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] px-2.5 py-1 text-xs text-[var(--text-muted)]">
                    {cert.type}
                  </span>
                  <h3 className="text-sm font-semibold leading-snug text-[var(--text)]">{cert.title}</h3>
                  {cert.description !== cert.type && (
                    <p className="mt-2 text-xs leading-5 text-[var(--text-muted)]">{cert.description}</p>
                  )}
                </div>
              </SectionWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
