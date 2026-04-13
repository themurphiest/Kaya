"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import type { Group } from "@/data/types";
import FlashCard from "./FlashCard";
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
  const [entered, setEntered] = useState(false);
  const [prevPressed, setPrevPressed] = useState(false);
  const [nextPressed, setNextPressed] = useState(false);

  const current = cards[index];
  const isFirst = index === 0;
  const isLast = index === cards.length - 1;

  // Entry animation on mount + each card change
  useEffect(() => {
    setEntered(false);
    const raf = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(raf);
  }, [index]);

  // Keyboard: arrow keys for nav, Escape to close
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        window.location.href = backHref;
      } else if (e.key === "ArrowLeft" && !isFirst) {
        goPrev();
      } else if (e.key === "ArrowRight") {
        goNext();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  const goPrev = useCallback(() => {
    if (exiting || isFirst) return;
    setExiting(true);
    setTimeout(() => {
      setIndex((i) => i - 1);
      setFlipped(false);
      setExiting(false);
    }, 280);
  }, [exiting, isFirst]);

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
    }, 280);
  }, [exiting, isLast, onComplete]);

  const handleFlip = () => {
    if (!exiting) setFlipped((f) => !f);
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9000,
        background: "rgba(16, 22, 18, 0.85)",
        backdropFilter: "blur(3px)",
        WebkitBackdropFilter: "blur(3px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        WebkitTapHighlightColor: "transparent",
      }}
    >
      {/* Close button (×) — top-right */}
      <button
        onClick={() => (window.location.href = backHref)}
        aria-label="Close card session"
        style={{
          position: "absolute",
          top: 14,
          right: 14,
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: "none",
          background: "rgba(255,255,255,0.08)",
          color: "rgba(255,255,255,0.7)",
          fontSize: 20,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
          WebkitTapHighlightColor: "transparent",
        }}
      >
        ×
      </button>

      {/* Card counter — top-left */}
      <div
        style={{
          position: "absolute",
          top: 18,
          left: 18,
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          color: "rgba(255,255,255,0.35)",
          letterSpacing: "0.06em",
          zIndex: 10,
        }}
      >
        {index + 1} / {cards.length}
      </div>

      {/* Group label — top-center */}
      <div
        style={{
          position: "absolute",
          top: 18,
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          textTransform: "uppercase" as const,
          letterSpacing: "0.14em",
          color: "rgba(255,255,255,0.3)",
          zIndex: 10,
          whiteSpace: "nowrap",
        }}
      >
        {group.label}
      </div>

      {/* Prev arrow — left side */}
      <button
        onClick={goPrev}
        onPointerDown={() => setPrevPressed(true)}
        onPointerUp={() => setPrevPressed(false)}
        onPointerLeave={() => setPrevPressed(false)}
        aria-label="Previous card"
        tabIndex={0}
        style={{
          position: "absolute",
          left: "max(8px, calc((100vw - min(400px, 100vw - 28px)) / 2 - 52px))",
          top: "50%",
          transform: `translateY(-50%) ${prevPressed ? "translateY(1px)" : ""}`,
          transition: "transform 0.15s ease, opacity 0.2s ease",
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "none",
          background: "rgba(255,255,255,0.06)",
          color: "rgba(255,255,255,0.5)",
          fontSize: 16,
          cursor: isFirst ? "default" : "pointer",
          opacity: isFirst ? 0 : 1,
          pointerEvents: isFirst ? "none" : "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
          fontFamily: "var(--font-mono)",
          WebkitTapHighlightColor: "transparent",
        }}
      >
        ←
      </button>

      {/* Next arrow — right side */}
      <button
        onClick={goNext}
        onPointerDown={() => setNextPressed(true)}
        onPointerUp={() => setNextPressed(false)}
        onPointerLeave={() => setNextPressed(false)}
        aria-label={isLast ? "Complete group" : "Next card"}
        tabIndex={0}
        style={{
          position: "absolute",
          right: "max(8px, calc((100vw - min(400px, 100vw - 28px)) / 2 - 52px))",
          top: "50%",
          transform: `translateY(-50%) ${nextPressed ? "translateY(1px)" : ""}`,
          transition: "transform 0.15s ease",
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "none",
          background: isLast
            ? `color-mix(in srgb, ${group.accent} 60%, transparent)`
            : "rgba(255,255,255,0.06)",
          color: isLast ? "white" : "rgba(255,255,255,0.5)",
          fontSize: isLast ? 14 : 16,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
          fontFamily: "var(--font-mono)",
          WebkitTapHighlightColor: "transparent",
        }}
      >
        {isLast ? "❋" : "→"}
      </button>

      {/* Card — centered, entry animation */}
      <div
        style={{
          width: "min(400px, 100vw - 28px)",
          height: "min(720px, 100vh - 120px)",
          transition: "transform 0.32s cubic-bezier(0.2, 0.7, 0.2, 1), opacity 0.25s ease",
          transform: entered && !exiting
            ? "scale(1) translateY(0)"
            : exiting
              ? "scale(0.96) translateY(4px)"
              : "scale(0.92) translateY(12px)",
          opacity: entered && !exiting ? 1 : 0,
        }}
      >
        <FlashCard
          key={index}
          card={current}
          groupLabel={group.label}
          accent={group.accent}
          flipped={flipped}
          onFlip={handleFlip}
        />
      </div>
    </div>
  );
}
