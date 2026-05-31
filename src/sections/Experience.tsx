import { Calendar, MapPin } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import Badge from "@/components/Badge";
import { experiences } from "@/data/experiences";

export default function Experience() {
  return (
    <section id="experiencia" className="bg-[#f5f5f7] px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionWrapper>
          <SectionTitle eyebrow="Trajetória">Experiência Profissional</SectionTitle>
        </SectionWrapper>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[5px] top-3 bottom-3 w-px bg-[#d2d2d7] md:left-[7px]" />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <SectionWrapper key={exp.id} delay={i * 0.1}>
                <div className="relative pl-9 md:pl-12">
                  {/* Dot */}
                  <span className="absolute left-0 top-3 h-3 w-3 rounded-full border-2 border-[#f5f5f7] bg-[#1d1d1f]" />

                  <div className="card card-hover p-7">
                    <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-semibold text-[#1d1d1f] md:text-xl">{exp.role}</h3>
                        <p className="font-medium text-[#424245]">{exp.company}</p>
                      </div>
                      <span className="rounded-full border border-[#e8e8ed] bg-[#f5f5f7] px-3 py-1 text-xs font-medium text-[#6e6e73]">
                        {exp.type}
                      </span>
                    </div>

                    <div className="mb-5 flex flex-wrap gap-x-5 gap-y-1 text-sm text-[#86868b]">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={13} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={13} />
                        {exp.location}
                      </span>
                    </div>

                    <ul className="mb-6 space-y-2.5">
                      {exp.description.map((d, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm leading-relaxed text-[#424245]">
                          <span className="mt-[7px] h-1 w-1 flex-shrink-0 rounded-full bg-[#86868b]" />
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
