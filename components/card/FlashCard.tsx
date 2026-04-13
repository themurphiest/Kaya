"use client";

import { useState, useRef, useCallback } from "react";
import type { Card } from "@/data/types";
import CardFront from "./CardFront";
import CardBack from "./CardBack";
import { cn } from "@/lib/utils";

interface FlashCardProps {
  card: Card;
  groupLabel: string;
  accent: string;
  flipped: boolean;
  onFlip: () => void;
}

export default function FlashCard({
  card,
  groupLabel,
  accent,
  flipped,
  onFlip,
}: FlashCardProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [animating, setAnimating] = useState(false);
  const lockRef = useRef(false);

  const handleClick = useCallback(() => {
    if (lockRef.current) return;
    lockRef.current = true;
    setAnimating(true);
    onFlip();
    setTimeout(() => {
      setAnimating(false);
    }, 500);
    setTimeout(() => {
      lockRef.current = false;
    }, 520);
  }, [onFlip]);

  const flipClass = animating
    ? flipped
      ? "flipping-to-back"
      : "flipping-to-front"
    : flipped
      ? "resting-back"
      : "resting-front";

  return (
    <div
      className="card-flip-container cursor-pointer h-full overflow-visible"
      onClick={handleClick}
    >
      <div
        className={cn(
          "card-flip-inner relative w-full h-full",
          flipClass,
        )}
      >
        <CardFront card={card} groupLabel={groupLabel} accent={accent} />
        <CardBack
          card={card}
          accent={accent}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </div>
    </div>
  );
}
