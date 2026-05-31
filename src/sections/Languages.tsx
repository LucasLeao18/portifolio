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
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f5f5f7] text-[#1d1d1f]">
                      <LanguagesIcon size={18} />
                    </span>
                    <div>
                      <span className="font-semibold text-[#1d1d1f]">{lang.name}</span>
                      <span className="ml-2 text-sm text-[#6e6e73]">{lang.level}</span>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-[#86868b]">{lang.percent}%</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#e8e8ed]">
                  <div
                    className="h-full rounded-full bg-[#1d1d1f]"
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
