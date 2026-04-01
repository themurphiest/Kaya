import type { Course } from "@/data/types";
import { howYourBodyWorks } from "./how-your-body-works";
import { whatModernLifeDoes } from "./what-modern-life-does";
import { whatYourBodyNeeds } from "./what-your-body-needs";
import { thePractice } from "./the-practice";

export const COURSES: Course[] = [
  howYourBodyWorks,
  whatModernLifeDoes,
  whatYourBodyNeeds,
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
