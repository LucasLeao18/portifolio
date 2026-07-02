import { ArrowUpRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Project } from "@/data/projects";
import Badge from "./Badge";

interface Props {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({ project, featured }: Props) {
  return (
    <article
      className={`card card-hover flex h-full flex-col p-6 md:p-8 ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold text-[var(--text)] md:text-2xl">{project.name}</h3>
        {featured && (
          <span className="flex-shrink-0 border border-[var(--accent)] bg-[rgba(46,232,143,0.12)] px-3 py-1 text-xs font-semibold text-[var(--accent)]">
            Destaque
          </span>
        )}
      </div>

      <p className="mt-4 leading-7 text-[var(--text-muted)]">{project.description}</p>

      {project.highlights && (
        <ul className={`mt-6 grid gap-3 ${featured ? "sm:grid-cols-2" : ""}`}>
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex items-start gap-3 text-sm leading-6 text-[var(--text-soft)]">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-[var(--accent)]" />
              {highlight}
            </li>
          ))}
        </ul>
      )}

      <div className="mb-7 mt-6 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <Badge key={technology} label={technology} />
        ))}
      </div>

      <div className="mt-auto flex flex-wrap gap-3">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Abrir código no GitHub: ${project.name}`}
            className="focus-ring inline-flex min-h-11 items-center gap-2 border border-[var(--border)] px-4 py-2 text-sm font-semibold text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            <FaGithub size={15} aria-hidden="true" />
            Código
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Abrir projeto: ${project.name}`}
            className="focus-ring inline-flex min-h-11 items-center gap-2 bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-[#06210f] transition-colors hover:bg-[var(--accent-strong)]"
          >
            <ExternalLink size={15} aria-hidden="true" />
            Ver projeto
          </a>
        )}
        {!project.liveUrl && !project.githubUrl && (
          <span className="inline-flex min-h-11 items-center gap-2 text-sm text-[var(--text-muted)]">
            <ArrowUpRight size={15} aria-hidden="true" /> Projeto corporativo
          </span>
        )}
      </div>
    </article>
  );
}
