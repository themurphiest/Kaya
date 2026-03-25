"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { getCourseBySlug } from "@/data/courses";
import { loadProgress, isGroupCompleted } from "@/lib/progress";
import type { ProgressStore, Group, Level } from "@/data/types";

const LEVEL_SECTIONS: { level: Level; title: string }[] = [
  { level: 1, title: "Level 1 — The Ingredients" },
  { level: 2, title: "Level 2 — The Concepts" },
  { level: 3, title: "Level 3 — The Practice" },
];

export default function CourseDetailPage() {
  const params = useParams<{ slug: string }>();
  const course = getCourseBySlug(params.slug);
  const [progress, setProgress] = useState<ProgressStore | null>(null);

  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  if (!course || course.status !== "available") return null;

  const groupsByLevel = (level: Level): Group[] =>
    course.groups.filter((g) => g.level === level);

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

      {/* Level sections */}
      {LEVEL_SECTIONS.map(({ level, title }) => {
        const groups = groupsByLevel(level);
        if (groups.length === 0 && level !== 3) return null;

        return (
          <section key={level} className="mb-8">
            {/* Level header */}
            <div
              className="mb-3"
              style={{ borderTop: "1px solid var(--text-faint)" }}
            />
            <h2
              className="text-[11px] tracking-[0.12em] uppercase mb-4"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--text-faint)",
                fontWeight: 400,
              }}
            >
              {title}
            </h2>

            {/* Group rows */}
            {groups.length > 0 ? (
              <div className="flex flex-col gap-0">
                {groups.map((group) => {
                  const completed =
                    progress !== null &&
                    isGroupCompleted(progress, course.slug, group.id);

                  return (
                    <Link
                      key={group.id}
                      href={`/course/${course.slug}/learn/${group.id}`}
                      className="no-underline"
                      style={{ color: "inherit" }}
                    >
                      <div
                        className="flex items-center py-4"
                        style={{
                          borderBottom: "1px solid var(--text-faint)",
                        }}
                      >
                        <span className="text-xl mr-4 w-8 text-center">
                          {group.icon}
                        </span>
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
                              ? group.accent
                              : "var(--text-muted)",
                          }}
                        >
                          {completed ? "❋" : "→"}
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <p
                className="text-xs"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--text-faint)",
                }}
              >
                Coming soon
              </p>
            )}
          </section>
        );
      })}
    </main>
  );
}
