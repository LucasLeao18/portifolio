import { Award, Calendar } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <section id="certificacoes" className="bg-[#f5f5f7] px-6 py-28">
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
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#f5f5f7] text-[#1d1d1f]">
                    {isCert ? <Award size={20} /> : <Calendar size={20} />}
                  </div>
                  <span className="mb-2 inline-block w-fit rounded-full border border-[#e8e8ed] bg-white px-2.5 py-0.5 text-xs text-[#6e6e73]">
                    {cert.type}
                  </span>
                  <h3 className="text-sm font-semibold leading-snug text-[#1d1d1f]">{cert.title}</h3>
                  {cert.description !== cert.type && (
                    <p className="mt-1.5 text-xs text-[#86868b]">{cert.description}</p>
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
