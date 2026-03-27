"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { getCourseBySlug } from "@/data/courses";
import { loadProgress, isGroupCompleted } from "@/lib/progress";
import type { ProgressStore } from "@/data/types";

export default function CourseDetailPage() {
  const params = useParams<{ slug: string }>();
  const course = getCourseBySlug(params.slug);
  const [progress, setProgress] = useState<ProgressStore | null>(null);

  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  if (!course || course.status !== "available") return null;

  return (
    <main className="max-w-[520px] mx-auto px-5 pb-16">
      {/* Back link */}
      <div className="pt-10 mb-8">
        <Link
          href="/"
          className="text-sm no-underline"
          style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
        >
          ← Library
        </Link>
      </div>

      {/* Title + subtitle */}
      <h1
        className="text-[32px] leading-tight mb-1"
        style={{ fontFamily: "var(--font-mono)", fontStyle: "italic" }}
      >
        {course.title}
      </h1>
      <p
        className="text-base mb-4"
        style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
      >
        {course.subtitle}
      </p>

      {/* Description */}
      <p
        className="text-sm leading-relaxed mb-8"
        style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
      >
        {course.description}
      </p>

      {/* Group tiles */}
      <div className="flex flex-col gap-3 mt-2">
        {course.groups.map((group) => {
          const completed =
            progress !== null &&
            isGroupCompleted(progress, course.slug, group.id);

          return (
            <Link
              key={group.id}
              href={`/course/${course.slug}/learn/${group.id}`}
              className="no-underline group"
              style={{ color: "inherit" }}
            >
              <div
                className="flex items-center gap-4 rounded-2xl p-4 transition-all duration-200 group-hover:-translate-y-px"
                style={{
                  background: "var(--card-bg)",
                  backdropFilter: "blur(14px)",
                  border: "1.5px solid var(--card-border)",
                  boxShadow: "var(--card-shadow)",
                }}
              >
                {/* Icon square */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-[22px] shrink-0"
                  style={{
                    background: `${group.accent}18`,
                    border: `1px solid ${group.accent}25`,
                  }}
                >
                  {group.icon}
                </div>

                {/* Label + subtitle */}
                <div className="flex-1 min-w-0">
                  <div
                    className="text-[17px] leading-snug"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontStyle: "italic",
                    }}
                  >
                    {group.label}
                  </div>
                  <div
                    className="text-xs mt-0.5"
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: "var(--text-muted)",
                    }}
                  >
                    {group.cards.length} cards
                  </div>
                </div>

                {/* Status indicator */}
                <span
                  className="text-lg shrink-0"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: completed
                      ? group.accent
                      : "var(--text-faint)",
                  }}
                >
                  {completed ? "❋" : "→"}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
