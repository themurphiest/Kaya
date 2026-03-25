import type { Course } from "@/data/types";
import bodyInMotion from "./body-in-motion";
import breathwork from "./breathwork";
import mindfulness from "./mindfulness";
import yogaSanskrit from "./yoga-sanskrit";

export const COURSES: Course[] = [
  bodyInMotion,
  breathwork,
  mindfulness,
  yogaSanskrit,
];

export function getCourseBySlug(slug: string): Course | undefined {
  return COURSES.find((c) => c.slug === slug);
}

export function getGroupById(
  course: Course,
  groupId: string
): Course["groups"][number] | undefined {
  return course.groups.find((g) => g.id === groupId);
}
