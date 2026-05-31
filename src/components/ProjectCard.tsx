import { ExternalLink, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Project } from "@/data/projects";
import Badge from "./Badge";

interface Props {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({ project, featured }: Props) {
  return (
    <div className={`card card-hover flex flex-col p-8 ${featured ? "md:col-span-2" : ""}`}>
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold text-[#1d1d1f] md:text-2xl">{project.name}</h3>
        {featured && (
          <span className="flex-shrink-0 rounded-full bg-[#1d1d1f] px-3 py-1 text-xs font-medium text-white">
            Destaque
          </span>
        )}
      </div>

      <p className="mt-3 leading-relaxed text-[#6e6e73]">{project.description}</p>

      {project.highlights && (
        <ul className={`mt-5 grid gap-2 ${featured ? "sm:grid-cols-2" : ""}`}>
          {project.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-[#424245]">
              <span className="mt-[7px] h-1 w-1 flex-shrink-0 rounded-full bg-[#86868b]" />
              {h}
            </li>
          ))}
        </ul>
      )}

      <div className="mb-7 mt-6 flex flex-wrap gap-2">
        {project.technologies.map((t) => (
          <Badge key={t} label={t} />
        ))}
      </div>

      <div className="mt-auto flex gap-3">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub — ${project.name}`}
            className="flex items-center gap-1.5 rounded-full border border-[#d2d2d7] px-4 py-2 text-sm font-medium text-[#1d1d1f] transition-colors hover:bg-[#f5f5f7]"
          >
            <FaGithub size={14} />
            Código
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver projeto — ${project.name}`}
            className="flex items-center gap-1.5 rounded-full bg-[#1d1d1f] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-black"
          >
            <ExternalLink size={14} />
            Ver Projeto
          </a>
        )}
        {!project.liveUrl && !project.githubUrl && (
          <span className="flex items-center gap-1.5 text-sm text-[#86868b]">
            <ArrowUpRight size={14} /> Projeto corporativo
          </span>
        )}
      </div>
    </div>
  );
}
