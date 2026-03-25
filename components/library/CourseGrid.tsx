"use client";

import { useState, useEffect } from "react";
import type { Course } from "@/data/types";
import type { ProgressStore } from "@/data/types";
import { loadProgress, getCompletedGroupCount, hasStartedCourse } from "@/lib/progress";
import CourseTile from "./CourseTile";

interface CourseGridProps {
  courses: Course[];
}

export default function CourseGrid({ courses }: CourseGridProps) {
  const [progress, setProgress] = useState<ProgressStore>({
    completedGroups: {},
  });

  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {courses.map((course) => (
        <CourseTile
          key={course.id}
          course={course}
          hasStarted={hasStartedCourse(progress, course.slug)}
          completedCount={getCompletedGroupCount(progress, course.slug)}
        />
      ))}
    </div>
  );
}
