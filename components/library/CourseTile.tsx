"use client";

import Link from "next/link";
import type { Course } from "@/data/types";

interface CourseTileProps {
  course: Course;
  hasStarted: boolean;
  completedCount: number;
}

export default function CourseTile({
  course,
  hasStarted,
  completedCount,
}: CourseTileProps) {
  const isAvailable = course.status === "available";
  const totalGroups = course.groups.length;
  const totalCards = course.groups.reduce(
    (sum, g) => sum + g.cards.length,
    0
  );

  const inner = (
    <div
      className="rounded-[20px] p-[28px_24px] transition-all duration-250 w-full"
      style={{
        background: isAvailable
          ? "var(--card-bg)"
          : "rgba(255, 255, 255, 0.03)",
        border: isAvailable
          ? "1.5px solid var(--card-border)"
          : "1.5px solid rgba(255, 255, 255, 0.05)",
        backdropFilter: isAvailable ? "blur(14px)" : "none",
        boxShadow: isAvailable ? "var(--card-shadow)" : "none",
        opacity: isAvailable ? 1 : 0.55,
        cursor: isAvailable ? "pointer" : "default",
      }}
      onMouseEnter={(e) => {
        if (isAvailable)
          e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {/* Accent bar */}
      <div
        className="w-8 h-1 rounded-full mb-5"
        style={{
          background: isAvailable ? course.accent : "var(--text-faint)",
        }}
      />

      <h3
        className="type-heading text-[22px] mb-1"
        style={{
          color: isAvailable
            ? "var(--text-primary)"
            : "var(--text-muted)",
        }}
      >
        {course.title}
      </h3>
      <p
        className="type-label mb-4"
        style={{
          color: isAvailable ? course.accent : "var(--text-faint)",
        }}
      >
        {course.subtitle}
      </p>

      <div
        className="flex items-center flex-wrap gap-x-3 gap-y-1 text-[11px]"
        style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
      >
        {isAvailable ? (
          <>
            <span>{totalGroups} modules</span>
            <span>·</span>
            <span>{totalCards} cards</span>
            {hasStarted && (
              <>
                <span>·</span>
                <span style={{ color: course.accent }}>
                  {completedCount}/{totalGroups} complete
                </span>
              </>
            )}
          </>
        ) : (
          <span className="type-label" style={{ color: "var(--text-faint)" }}>
            Coming Soon
          </span>
        )}
      </div>
    </div>
  );

  if (!isAvailable) return inner;

  return (
    <Link href={`/course/${course.slug}`} className="block no-underline">
      {inner}
    </Link>
  );
}
