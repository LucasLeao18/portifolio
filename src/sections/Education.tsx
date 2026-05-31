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
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-[#f5f5f7] text-[#1d1d1f]">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1d1d1f]">{edu.institution}</h3>
                  <p className="text-[#424245]">{edu.degree}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-[#86868b]">
                    <span>{edu.period}</span>
                    <span className="flex items-center gap-1.5 rounded-full border border-[#e8e8ed] bg-[#f5f5f7] px-2.5 py-0.5 text-xs text-[#424245]">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
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
