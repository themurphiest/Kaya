import { COURSES } from "@/data/courses";
import CourseGrid from "@/components/library/CourseGrid";
import SourcesSheet from "@/components/library/SourcesSheet";

export default function Home() {
  return (
    <main className="max-w-[520px] mx-auto px-5 pb-16">
      {/* Wordmark */}
      <div className="text-center pt-[52px] pb-10">
        <h1 className="type-display text-[38px]">Kaya</h1>
        <p className="type-label mt-2">The body as teacher.</p>
      </div>

      <CourseGrid courses={COURSES} />
      <SourcesSheet />
    </main>
  );
}
