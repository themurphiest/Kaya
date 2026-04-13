"use client";

import type { Card } from "@/data/types";
import Image from "next/image";

interface CardFrontProps {
  card: Card;
  groupLabel: string;
  accent: string;
}

export default function CardFront({
  card,
  groupLabel,
  accent,
}: CardFrontProps) {
  return (
    <div
      className="card-face relative flex flex-col rounded-[var(--card-radius)] absolute inset-0 overflow-hidden"
      style={{
        background: "var(--card-bg)",
        backdropFilter: "blur(14px)",
        border: "1.5px solid var(--card-border)",
        boxShadow: "var(--card-shadow)",
      }}
    >
      {/* Radial highlight sheen */}
      <div
        className="absolute inset-0 pointer-events-none rounded-[var(--card-radius)]"
        style={{
          background:
            "radial-gradient(ellipse at 50% 10%, rgba(255,255,255,0.09) 0%, transparent 55%)",
        }}
      />

      {/* Term */}
      <h2 className="type-display text-[22px] sm:text-[26px] leading-tight mb-2 break-words relative z-[1]">
        {card.term}
      </h2>

      {/* Sanskrit (Level 3 only) */}
      {card.sanskrit && (
        <p
          className="relative z-[1]"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "14px",
            fontWeight: 300,
            color: "var(--text-muted)",
            letterSpacing: "0.02em",
            fontStyle: "normal",
            margin: "-8px 0 16px",
          }}
        >
          {card.sanskrit}
        </p>
      )}

      {/* Anatomy image */}
      {card.image && (
        <div
          className="relative w-full mb-3 overflow-hidden rounded-[12px] flex-shrink-0 z-[1]"
          style={{
            height: 360,
            background: "rgba(255, 248, 240, 0.06)",
            border: `1px solid ${accent}15`,
          }}
        >
          <Image
            src={`/images/anatomy/${card.image}`}
            alt={card.term}
            fill
            className="object-cover object-top"
          />
        </div>
      )}

      {/* Brief */}
      <p className="type-body text-[15px] leading-[1.6] flex-1 min-h-0 overflow-y-auto relative z-[1]">
        {card.brief}
      </p>

      {/* Flip cue — bottom-right, matching family position */}
      <div className="flex items-center justify-end gap-1.5 mt-4 relative z-[1]">
        <span
          className="text-[11px] tracking-[0.06em]"
          style={{ fontFamily: "var(--font-mono)", color: accent, opacity: 0.6 }}
        >
          flip
        </span>
        <div
          className="w-[22px] h-[22px] rounded-full flex items-center justify-center text-[12px]"
          style={{
            border: `1px solid ${accent}60`,
            color: accent,
            opacity: 0.6,
          }}
        >
          ↻
        </div>
      </div>
    </div>
  );
}
