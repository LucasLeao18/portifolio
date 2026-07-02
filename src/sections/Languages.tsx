import { Languages as LanguagesIcon } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import { languages } from "@/data/languages";

export default function Languages() {
  return (
    <section id="idiomas" className="px-6 py-28">
      <div className="mx-auto max-w-2xl">
        <SectionWrapper>
          <SectionTitle eyebrow="Comunicação">Idiomas</SectionTitle>
        </SectionWrapper>

        <div className="space-y-5">
          {languages.map((lang, i) => (
            <SectionWrapper key={lang.name} delay={i * 0.1}>
              <div className="card p-7">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center border border-[var(--border-soft)] bg-[rgba(46,232,143,0.1)] text-[var(--accent)]">
                      <LanguagesIcon size={18} aria-hidden="true" />
                    </span>
                    <div>
                      <span className="font-semibold text-[var(--text)]">{lang.name}</span>
                      <span className="ml-2 text-sm text-[var(--text-muted)]">{lang.level}</span>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-[var(--text-muted)]">{lang.percent}%</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden bg-[var(--border-soft)]">
                  <div
                    className="h-full bg-[var(--accent)]"
                    style={{ width: `${lang.percent}%` }}
                  />
                </div>
              </div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
