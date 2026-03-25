"use client";

import { useState } from "react";
import type { Card } from "@/data/types";
import CardFront from "./CardFront";
import CardBack from "./CardBack";
import { cn } from "@/lib/utils";

interface FlashCardProps {
  card: Card;
  groupLabel: string;
  accent: string;
  exiting: boolean;
  flipped: boolean;
  onFlip: () => void;
}

export default function FlashCard({
  card,
  groupLabel,
  accent,
  exiting,
  flipped,
  onFlip,
}: FlashCardProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div
      className="card-flip-container cursor-pointer mb-4 overflow-visible"
      onClick={onFlip}
    >
      <div
        className={cn(
          "card-flip-inner relative w-full",
          flipped && "flipped",
          exiting && "exiting"
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
