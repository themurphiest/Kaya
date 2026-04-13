"use client";

import { useState, useMemo, useCallback } from "react";
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

/* ── Press-state hook (shared family interaction: translateY(1px) on press) ── */
function usePressState() {
  const [pressed, setPressed] = useState(false);
  const handlers = {
    onPointerDown: () => setPressed(true),
    onPointerUp: () => setPressed(false),
    onPointerLeave: () => setPressed(false),
  };
  const style = {
    transform: pressed ? "translateY(1px)" : "translateY(0)",
    transition: "transform 0.15s ease",
    WebkitTapHighlightColor: "transparent" as const,
  };
  return { handlers, style };
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

  const prevPress = usePressState();
  const nextPress = usePressState();

  const current = cards[index];
  const isLast = index === cards.length - 1;

  const goPrev = useCallback(() => {
    if (exiting || index === 0) return;
    setExiting(true);
    setTimeout(() => {
      setIndex((i) => i - 1);
      setFlipped(false);
      setExiting(false);
    }, 300);
  }, [exiting, index]);

  const goNext = useCallback(() => {
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
  }, [exiting, isLast, onComplete]);

  const handleFlip = () => {
    if (!exiting) setFlipped((f) => !f);
  };

  return (
    <div className="flex flex-col h-dvh items-center px-3">
      {/* Header */}
      <div className="flex justify-between items-center gap-4 pt-6 mb-3 flex-shrink-0 w-full" style={{ maxWidth: "min(400px, 100vw - 28px)" }}>
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

      {/* Card */}
      <div className="flex-1 min-h-0 mb-2" style={{ width: "min(400px, 100vw - 28px)", maxHeight: "min(720px, 100vh - 120px)" }}>
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

      {/* Navigation — press-state arrows, family interaction pattern */}
      <div className="flex-shrink-0 pb-4 flex items-center gap-3" style={{ width: "min(400px, 100vw - 28px)" }}>
        {index > 0 ? (
          <button
            onClick={goPrev}
            role="button"
            tabIndex={0}
            aria-label="Previous card"
            className="nav-arrow"
            style={{
              ...prevPress.style,
              width: 48,
              height: 48,
              borderRadius: "50%",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              background: `color-mix(in srgb, ${group.accent} 40%, transparent)`,
              color: "white",
              fontSize: 18,
              fontFamily: "var(--font-mono)",
            }}
            {...prevPress.handlers}
          >
            ←
          </button>
        ) : (
          <div style={{ width: 48, flexShrink: 0 }} />
        )}

        <button
          onClick={goNext}
          role="button"
          tabIndex={0}
          aria-label={isLast ? "Complete group" : "Next card"}
          className="nav-arrow"
          style={{
            ...nextPress.style,
            flex: 1,
            height: 48,
            borderRadius: 24,
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-mono)",
            fontSize: 15,
            letterSpacing: "0.04em",
            color: "white",
            background: `color-mix(in srgb, ${group.accent} 85%, transparent)`,
            boxShadow: `0 4px 18px ${group.accent}35`,
          }}
          {...nextPress.handlers}
        >
          {isLast ? "Complete ❋" : "Next →"}
        </button>
      </div>
    </div>
  );
}
