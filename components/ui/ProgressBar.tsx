"use client";

interface ProgressBarProps {
  progress: number;
  accent: string;
}

export default function ProgressBar({ progress, accent }: ProgressBarProps) {
  return (
    <div
      className="h-[3px] rounded-sm mb-7 overflow-hidden"
      style={{ background: "rgba(255, 255, 255, 0.12)" }}
    >
      <div
        className="h-full rounded-sm transition-[width] duration-500 ease-out"
        style={{ width: `${progress * 100}%`, background: accent }}
      />
    </div>
  );
}
