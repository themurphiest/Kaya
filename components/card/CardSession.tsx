"use client";

import { useState, useMemo } from "react";
import type { Group } from "@/data/types";
import FlashCard from "./FlashCard";
import BackButton from "@/components/ui/BackButton";
import { shuffle } from "@/lib/utils";

interface CardSessionProps {
  group: Group;
  courseSlug: string;
  courseTitle: string;
  onComplete: () => void;
  backHref: string;
}

export default function CardSession({
  group,
  courseSlug,
  courseTitle,
  onComplete,
  backHref,
}: CardSessionProps) {
  const cards = useMemo(() => shuffle(group.cards), [group.cards]);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [exiting, setExiting] = useState(false);

  const current = cards[index];
  const isLast = index === cards.length - 1;

  const goPrev = () => {
    if (exiting || index === 0) return;
    setExiting(true);
    setTimeout(() => {
      setIndex((i) => i - 1);
      setFlipped(false);
      setExiting(false);
    }, 300);
  };

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
    <div className="flex flex-col h-dvh max-w-[520px] mx-auto px-5">
      {/* Header — fixed, does not grow */}
      <div className="flex justify-between items-center gap-4 pt-6 mb-3 flex-shrink-0">
        <div className="min-w-0 shrink">
          <BackButton href={backHref} label={`← ${courseTitle}`} />
        </div>
        <div className="text-right shrink-0">
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

      {/* Card — fills all remaining space */}
      <div className="flex-1 min-h-0 mb-2">
        <FlashCard
          key={index}
          card={current}
          groupLabel={group.label}
          accent={group.accent}
          exiting={exiting}
          flipped={flipped}
          onFlip={handleFlip}
        />
      </div>

      {/* Navigation — pinned at bottom */}
      <div className="flex-shrink-0 pb-4 flex gap-2">
        {index > 0 && (
          <button
            onClick={goPrev}
            className="py-[15px] px-5 border-none rounded-full text-[15px] text-white cursor-pointer tracking-[0.04em] transition-all duration-200 hover:-translate-y-px"
            style={{
              fontFamily: "var(--font-mono)",
              background: `color-mix(in srgb, ${group.accent} 50%, transparent)`,
            }}
          >
            ←
          </button>
        )}
        <button
          onClick={goNext}
          className="flex-1 py-[15px] border-none rounded-full text-[15px] text-white cursor-pointer tracking-[0.04em] transition-all duration-200 hover:-translate-y-px"
          style={{
            fontFamily: "var(--font-mono)",
            background: `color-mix(in srgb, ${group.accent} 85%, transparent)`,
            boxShadow: `0 4px 18px ${group.accent}35`,
          }}
        >
          {isLast ? "Complete ❋" : "Next →"}
        </button>
      </div>
    </div>
  );
}
