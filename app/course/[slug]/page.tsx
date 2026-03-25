"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { getCourseBySlug } from "@/data/courses";
import {
  loadProgress,
  isGroupCompleted,
  isGroupUnlocked,
} from "@/lib/progress";
import type { ProgressStore } from "@/data/types";

export default function CourseDetailPage() {
  const params = useParams<{ slug: string }>();
  const course = getCourseBySlug(params.slug);
  const [progress, setProgress] = useState<ProgressStore | null>(null);

  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  if (!course || course.status !== "available") return null;

  const allGroupIds = course.groups.map((g) => g.id);

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
        className="text-sm leading-relaxed mb-6"
        style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
      >
        {course.description}
      </p>

      {/* Divider */}
      <div
        className="mb-6"
        style={{ borderTop: "1px solid var(--text-faint)" }}
      />

      {/* Group rows */}
      <div className="flex flex-col gap-0">
        {course.groups.map((group) => {
          const completed =
            progress !== null &&
            isGroupCompleted(progress, course.slug, group.id);
          const unlocked =
            progress === null ||
            isGroupUnlocked(progress, course.slug, group.id, allGroupIds);
          const locked = !unlocked;

          const indicator = completed ? "❋" : locked ? "—" : "→";

          const row = (
            <div
              className="flex items-center py-4"
              style={{
                borderBottom: "1px solid var(--text-faint)",
                opacity: locked ? 0.4 : 1,
              }}
            >
              <span className="text-xl mr-4 w-8 text-center">{group.icon}</span>
              <div className="flex-1 min-w-0">
                <div
                  className="text-sm font-medium"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {group.label}
                </div>
                <div
                  className="text-xs"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--text-muted)",
                  }}
                >
                  {group.cards.length} cards
                </div>
              </div>
              <span
                className="text-base ml-3"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: completed
                    ? course.accent
                    : "var(--text-muted)",
                }}
              >
                {indicator}
              </span>
            </div>
          );

          if (locked) {
            return <div key={group.id}>{row}</div>;
          }

          return (
            <Link
              key={group.id}
              href={`/course/${course.slug}/learn/${group.id}`}
              className="no-underline"
              style={{ color: "inherit" }}
            >
              {row}
            </Link>
          );
        })}
      </div>
    </main>
  );
}
