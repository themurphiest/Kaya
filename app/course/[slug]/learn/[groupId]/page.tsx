"use client";

import { useParams, useRouter } from "next/navigation";
import { getCourseBySlug, getGroupById } from "@/data/courses";
import { markGroupComplete } from "@/lib/progress";
import CardSession from "@/components/card/CardSession";

export default function GroupSessionPage() {
  const params = useParams<{ slug: string; groupId: string }>();
  const router = useRouter();

  const course = getCourseBySlug(params.slug);
  if (!course) return null;

  const group = getGroupById(course, params.groupId);
  if (!group) return null;

  const handleComplete = () => {
    markGroupComplete(course.slug, group.id);
    router.push(`/course/${params.slug}`);
  };

  return (
    <main>
      <CardSession
        group={group}
        courseSlug={course.slug}
        onComplete={handleComplete}
        backHref={`/course/${params.slug}`}
      />
    </main>
  );
}
