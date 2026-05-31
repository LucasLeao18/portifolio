interface Props {
  children: React.ReactNode;
  eyebrow?: string;
}

export default function SectionTitle({ children, eyebrow }: Props) {
  return (
    <div className="mb-16 text-center">
      {eyebrow && (
        <span className="mb-3 block text-sm font-medium uppercase tracking-[0.15em] text-[#6e6e73]">
          {eyebrow}
        </span>
      )}
      <h2 className="text-balance text-4xl font-semibold tracking-tight text-[#1d1d1f] md:text-5xl">
        {children}
      </h2>
    </div>
  );
}
