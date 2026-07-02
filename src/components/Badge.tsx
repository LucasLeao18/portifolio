interface Props {
  label: string;
}

export default function Badge({ label }: Props) {
  return (
    <span className="inline-flex items-center border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] px-3 py-1 text-xs font-medium text-[var(--text-soft)] transition-colors hover:border-[var(--border)] hover:bg-[rgba(255,255,255,0.06)]">
      {label}
    </span>
  );
}
