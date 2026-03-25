"use client";

import { useState, useMemo } from "react";
import type { Group } from "@/data/types";
import FlashCard from "./FlashCard";
import ProgressBar from "@/components/ui/ProgressBar";
import BackButton from "@/components/ui/BackButton";
import { shuffle } from "@/lib/utils";

interface CardSessionProps {
  group: Group;
  courseSlug: string;
  onComplete: () => void;
  backHref: string;
}

export default function CardSession({
  group,
  courseSlug,
  onComplete,
  backHref,
}: CardSessionProps) {
  const cards = useMemo(() => shuffle(group.cards), [group.cards]);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [exiting, setExiting] = useState(false);

  const current = cards[index];
  const progress = index / cards.length;
  const isLast = index === cards.length - 1;

  const goNext = () => {
    if (exiting) return;
    if (isLast) {
      onComplete();
      return;
    }
    setExiting(true);
    setTimeout(() => {
      setIndex((i) => i + 1);
      setFlipped(false);
      setExiting(false);
    }, 300);
  };

  const handleFlip = () => {
    if (!exiting) setFlipped((f) => !f);
  };

  return (
    <div className="max-w-[520px] mx-auto px-5 pb-10">
      {/* Header */}
      <div className="flex justify-between items-center pt-10 mb-5">
        <BackButton href={backHref} label="← Modules" />
        <div className="text-right">
          <div className="type-heading text-sm">
            {group.label}
          </div>
          <div
            className="text-xs"
            style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
          >
            {index + 1} of {cards.length}
          </div>
        </div>
      </div>

      <ProgressBar progress={progress} accent={group.accent} />

      <FlashCard
        key={index}
        card={current}
        groupLabel={group.label}
        accent={group.accent}
        exiting={exiting}
        flipped={flipped}
        onFlip={handleFlip}
      />

      {/* Next button */}
      <button
        onClick={goNext}
        className="w-full py-[15px] border-none rounded-full text-[15px] text-white cursor-pointer tracking-[0.04em] transition-all duration-200 hover:-translate-y-px"
        style={{
          fontFamily: "var(--font-mono)",
          background: `color-mix(in srgb, ${group.accent} 85%, transparent)`,
          boxShadow: `0 4px 18px ${group.accent}35`,
        }}
      >
        {isLast ? "Complete ❋" : "Next →"}
      </button>

      <p
        className="text-center text-xs mt-3.5"
        style={{ fontFamily: "var(--font-mono)", color: "var(--text-faint)" }}
      >
        Tap card to flip · {cards.length - index - 1} cards remaining
      </p>
    </div>
  );
}
