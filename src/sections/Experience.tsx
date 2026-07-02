import { Calendar, MapPin } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import Badge from "@/components/Badge";
import { experiences } from "@/data/experiences";

export default function Experience() {
  return (
    <section id="experiencia" className="border-y border-[var(--border-soft)] bg-[rgba(255,255,255,0.025)] px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionWrapper>
          <SectionTitle eyebrow="Trajetória">Experiência Profissional</SectionTitle>
        </SectionWrapper>

        <div className="relative">
          <div className="absolute bottom-3 left-[5px] top-3 w-px bg-[var(--border)] md:left-[7px]" />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <SectionWrapper key={exp.id} delay={i * 0.1}>
                <div className="relative pl-9 md:pl-12">
                  <span className="absolute left-0 top-3 h-3 w-3 border-2 border-[var(--bg-soft)] bg-[var(--accent)]" />

                  <div className="card card-hover p-7">
                    <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-semibold text-[var(--text)] md:text-xl">{exp.role}</h3>
                        <p className="font-medium text-[var(--text-soft)]">{exp.company}</p>
                      </div>
                      <span className="border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] px-3 py-1 text-xs font-medium text-[var(--text-muted)]">
                        {exp.type}
                      </span>
                    </div>

                    <div className="mb-5 flex flex-wrap gap-x-5 gap-y-1 text-sm text-[var(--text-muted)]">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={13} aria-hidden="true" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={13} aria-hidden="true" />
                        {exp.location}
                      </span>
                    </div>

                    <ul className="mb-6 space-y-2.5">
                      {exp.description.map((d, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm leading-6 text-[var(--text-soft)]">
                          <span className="mt-2 h-1 w-1 flex-shrink-0 bg-[var(--accent)]" />
                          {d}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((t) => (
                        <Badge key={t} label={t} />
                      ))}
                    </div>
                  </div>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
