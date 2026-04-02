"use client";

interface FlipCueProps {
  accent: string;
}

export default function FlipCue({ accent }: FlipCueProps) {
  return (
    <div
      className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] tracking-[0.05em] select-none z-10"
      style={{
        fontFamily: "var(--font-mono)",
        background: `${accent}14`,
        border: `1.5px solid ${accent}25`,
        color: accent,
      }}
    >
      <span className="text-sm">↻</span>
      Flip
    </div>
  );
}
