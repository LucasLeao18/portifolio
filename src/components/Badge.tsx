interface Props {
  label: string;
}

export default function Badge({ label }: Props) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#e8e8ed] bg-[#f5f5f7] px-3 py-1 text-xs font-medium text-[#1d1d1f] transition-colors hover:bg-[#ececef]">
      {label}
    </span>
  );
}
