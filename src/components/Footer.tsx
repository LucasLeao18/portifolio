import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-[#e8e8ed] px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-5 sm:flex-row">
        <a href="#hero" className="text-base font-semibold tracking-tight text-[#1d1d1f]">
          Lucas Leão
        </a>

        <p className="text-center text-xs text-[#86868b]">
          © {new Date().getFullYear()} {profile.name} · Feito com Next.js & Tailwind CSS
        </p>

        <div className="flex gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d2d2d7] text-[#6e6e73] transition-colors hover:bg-[#f5f5f7] hover:text-[#1d1d1f]"
          >
            <FaGithub size={16} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d2d2d7] text-[#6e6e73] transition-colors hover:bg-[#f5f5f7] hover:text-[#1d1d1f]"
          >
            <FaLinkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
