import type { Course } from "@/data/types";
import { bodyInMotion } from "./body-in-motion";
import { movementConcepts } from "./movement-concepts";
import { thePractice } from "./the-practice";

export const COURSES: Course[] = [
  bodyInMotion,
  movementConcepts,
  thePractice,
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
