import { GraduationCap } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import { education } from "@/data/education";

export default function Education() {
  return (
    <section id="formacao" className="px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionWrapper>
          <SectionTitle eyebrow="Acadêmico">Formação</SectionTitle>
        </SectionWrapper>

        <div className="space-y-5">
          {education.map((edu, i) => (
            <SectionWrapper key={i} delay={0.1}>
              <div className="card card-hover flex gap-5 p-7">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center border border-[var(--border-soft)] bg-[rgba(46,232,143,0.1)] text-[var(--accent)]">
                  <GraduationCap size={24} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text)]">{edu.institution}</h3>
                  <p className="text-[var(--text-soft)]">{edu.degree}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-[var(--text-muted)]">
                    <span>{edu.period}</span>
                    <span className="flex items-center gap-1.5 border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] px-2.5 py-1 text-xs text-[var(--text-soft)]">
                      <span className="h-1.5 w-1.5 bg-[var(--accent)]" />
                      {edu.status}
                    </span>
                  </div>
                </div>
              </div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
