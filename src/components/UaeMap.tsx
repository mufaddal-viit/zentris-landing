import { UAE_PATHS } from "@/lib/uae-paths";

export default function UaeMap({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1000 788"
      className={`uae-map ${className}`}
      aria-hidden
      focusable="false"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {UAE_PATHS.map((p) => (
        <path key={p.id} id={p.id} d={p.d}>
          <title>{p.name}</title>
        </path>
      ))}
    </svg>
  );
}
