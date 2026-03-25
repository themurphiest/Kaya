"use client";

interface FlipCueProps {
  accent: string;
}

export default function FlipCue({ accent }: FlipCueProps) {
  return (
    <div className="flex justify-center mt-6">
      <div
        className="flex items-center gap-2 rounded-full px-4 sm:px-5 py-2 text-[12px] sm:text-[13px] tracking-[0.05em] select-none"
        style={{
          fontFamily: "var(--font-mono)",
          background: `${accent}14`,
          border: `1.5px solid ${accent}25`,
          color: accent,
        }}
      >
        <span className="text-base">↻</span>
        Flip for deep dive
      </div>
    </div>
  );
}
