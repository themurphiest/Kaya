"use client";

import type { Card } from "@/data/types";
import Image from "next/image";
import FlipCue from "./FlipCue";

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
      className="card-face relative flex flex-col rounded-[var(--card-radius)] p-[28px_28px_24px] absolute inset-0 overflow-hidden"
      style={{
        background: "var(--card-bg)",
        backdropFilter: "blur(14px)",
        border: "1.5px solid var(--card-border)",
        boxShadow: "var(--card-shadow)",
      }}
    >
      {/* Module tag */}
      <div className="type-label mb-2" style={{ color: accent }}>
        {groupLabel}
      </div>

      {/* Term */}
      <h2 className="type-display text-[22px] sm:text-[26px] leading-tight mb-3 break-words">
        {card.term}
      </h2>

      {/* Sanskrit (Level 3 only) */}
      {card.sanskrit && (
        <p
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
          className="relative w-full mb-3 overflow-hidden rounded-[12px] flex-shrink-0"
          style={{
            height: 300,
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
      <p className="type-body text-[15px] leading-[1.6] flex-1 overflow-y-auto">
        {card.brief}
      </p>

      <FlipCue accent={accent} />
    </div>
  );
}
