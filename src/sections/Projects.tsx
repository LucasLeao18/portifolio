import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projetos" className="border-y border-[var(--border-soft)] bg-[rgba(255,255,255,0.025)] px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionWrapper>
          <SectionTitle eyebrow="Portfólio">Projetos</SectionTitle>
        </SectionWrapper>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <SectionWrapper key={project.id} delay={(i % 2) * 0.1}>
              <ProjectCard project={project} featured={project.id === 1} />
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
