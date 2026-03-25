"use client";

import { useRouter } from "next/navigation";

interface BackButtonProps {
  href?: string;
  label?: string;
}

export default function BackButton({
  href,
  label = "← Back",
}: BackButtonProps) {
  const router = useRouter();

  return (
    <button
      onClick={() => (href ? router.push(href) : router.back())}
      className="bg-none border-none text-[13px] cursor-pointer tracking-[0.05em] p-0 transition-colors max-w-full overflow-hidden text-ellipsis whitespace-nowrap block"
      style={{
        fontFamily: "var(--font-mono)",
        color: "var(--text-muted)",
      }}
    >
      {label}
    </button>
  );
}
