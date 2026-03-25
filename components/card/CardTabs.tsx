"use client";

interface CardTabsProps {
  tabs: { label: string; content: string | string[] }[];
  activeIndex: number;
  onTabChange: (index: number) => void;
  accent: string;
}

export default function CardTabs({
  tabs,
  activeIndex,
  onTabChange,
  accent,
}: CardTabsProps) {
  return (
    <div className="flex gap-1.5 flex-wrap mb-5">
      {tabs.map((tab, i) => (
        <button
          key={tab.label}
          onClick={(e) => {
            e.stopPropagation();
            onTabChange(i);
          }}
          className="text-[11px] tracking-[0.04em] px-2.5 sm:px-3.5 py-1 rounded-full cursor-pointer transition-all duration-150"
          style={{
            fontFamily: "var(--font-mono)",
            background: activeIndex === i ? accent : "transparent",
            color: activeIndex === i ? "white" : "var(--text-muted)",
            border:
              activeIndex === i
                ? `1px solid ${accent}`
                : "1px solid var(--text-faint)",
          }}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
