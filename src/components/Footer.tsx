import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-soft)] px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-5 sm:flex-row">
        <a href="#hero" className="focus-ring text-base font-semibold text-[var(--text)]">
          Lucas Leão
        </a>

        <p className="text-center text-xs text-[var(--text-muted)]">
          © {new Date().getFullYear()} {profile.name} · Feito com Next.js & Tailwind CSS
        </p>

        <div className="flex gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="focus-ring flex h-11 w-11 items-center justify-center border border-[var(--border)] text-[var(--text-muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            <FaGithub size={17} aria-hidden="true" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="focus-ring flex h-11 w-11 items-center justify-center border border-[var(--border)] text-[var(--text-muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            <FaLinkedin size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
