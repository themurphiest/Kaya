"use client";

import type { Card } from "@/data/types";
import CardTabs from "./CardTabs";

interface CardBackProps {
  card: Card;
  accent: string;
  activeTab: number;
  onTabChange: (index: number) => void;
}

export default function CardBack({
  card,
  accent,
  activeTab,
  onTabChange,
}: CardBackProps) {
  const currentTab = card.tabs[activeTab];

  return (
    <div
      className="card-face card-face-back absolute inset-0 flex flex-col rounded-[var(--card-radius)] p-[32px_28px_28px] overflow-y-auto"
      style={{
        background: "rgba(255, 255, 255, 0.08)",
        backdropFilter: "blur(14px)",
        border: `1.5px solid ${accent}20`,
        boxShadow: "var(--card-shadow)",
      }}
    >
      {/* Header */}
      <div className="mb-[18px]">
        <div className="type-label mb-1.5" style={{ color: accent }}>
          Deep Dive
        </div>
        <div className="type-heading text-[22px] leading-tight">
          {card.term}
        </div>
      </div>

      {/* Tabs */}
      <CardTabs
        tabs={card.tabs}
        activeIndex={activeTab}
        onTabChange={onTabChange}
        accent={accent}
      />

      {/* Tab content */}
      <div className="flex-1">
        {currentTab && (
          <>
            {typeof currentTab.content === "string" ? (
              currentTab.label === "Injury Risk" ? (
                <div>
                  <div
                    className="inline-block text-[10px] tracking-[0.1em] rounded-full px-3 py-0.5 mb-3.5"
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: "#E8A87C",
                      background: "rgba(232, 168, 124, 0.10)",
                      border: "1px solid rgba(232, 168, 124, 0.20)",
                    }}
                  >
                    Common Risk
                  </div>
                  <p
                    className="text-sm leading-[1.7] m-0"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 300,
                      color: "var(--text-secondary)",
                    }}
                  >
                    {currentTab.content}
                  </p>
                </div>
              ) : (
                <p className="type-body text-[15px] m-0">
                  {currentTab.content}
                </p>
              )
            ) : (
              <div>
                <p className="type-label mb-3.5">
                  Movements that activate this muscle
                </p>
                <div className="flex flex-col gap-2.5">
                  {currentTab.content.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-[7px] shrink-0"
                        style={{ background: accent }}
                      />
                      <span
                        className="text-sm leading-[1.5]"
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontWeight: 300,
                          color: "var(--text-secondary)",
                        }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Flip back cue */}
      <div className="flex items-center justify-end gap-1.5 mt-5">
        <span
          className="text-[11px] tracking-[0.06em]"
          style={{ fontFamily: "var(--font-mono)", color: "var(--text-faint)" }}
        >
          flip back
        </span>
        <div
          className="w-[22px] h-[22px] rounded-full flex items-center justify-center text-[11px]"
          style={{
            border: "1px solid var(--text-faint)",
            color: "var(--text-faint)",
          }}
        >
          ↺
        </div>
      </div>
    </div>
  );
}
