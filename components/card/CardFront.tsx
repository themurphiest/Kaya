"use client";

import type { Card } from "@/data/types";
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
      className="card-face relative flex flex-col rounded-[var(--card-radius)] p-[44px_36px_32px]"
      style={{
        background: "var(--card-bg)",
        backdropFilter: "blur(14px)",
        border: "1.5px solid var(--card-border)",
        boxShadow: "var(--card-shadow)",
      }}
    >
      {/* Module tag */}
      <div className="type-label mb-5" style={{ color: accent }}>
        {groupLabel}
      </div>

      {/* Term */}
      <h2 className="type-display text-[28px] sm:text-4xl leading-tight mb-4 break-words">
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

      {/* Brief */}
      <p className="type-body text-base mb-6 flex-1">
        {card.brief}
      </p>

      {/* Mnemonic */}
      <div
        className="rounded-[14px] p-[16px_20px]"
        style={{
          background: `${accent}0C`,
          border: `1px solid ${accent}1A`,
        }}
      >
        <div className="type-label mb-2" style={{ color: accent }}>
          Memory Hook
        </div>
        <p
          className="text-sm leading-[1.6] m-0"
          style={{
            fontFamily: "var(--font-sans)",
            fontStyle: "italic",
            fontWeight: 300,
            color: "var(--text-secondary)",
          }}
        >
          {card.mnemonic}
        </p>
      </div>

      <FlipCue accent={accent} />
    </div>
  );
}
