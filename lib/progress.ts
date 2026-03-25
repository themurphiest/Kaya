import type { ProgressStore } from "@/data/types";

const STORAGE_KEY = "kaya-progress";

function getDefaultStore(): ProgressStore {
  return { completedGroups: {} };
}

export function loadProgress(): ProgressStore {
  if (typeof window === "undefined") return getDefaultStore();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultStore();
    return JSON.parse(raw) as ProgressStore;
  } catch {
    return getDefaultStore();
  }
}

export function saveProgress(store: ProgressStore): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  } catch {
    // localStorage full or unavailable — silent fail
  }
}

export function markGroupComplete(
  courseSlug: string,
  groupId: string
): ProgressStore {
  const store = loadProgress();
  const groups = store.completedGroups[courseSlug] ?? [];
  if (!groups.includes(groupId)) {
    groups.push(groupId);
  }
  store.completedGroups[courseSlug] = groups;
  saveProgress(store);
  return store;
}

export function isGroupCompleted(
  store: ProgressStore,
  courseSlug: string,
  groupId: string
): boolean {
  return store.completedGroups[courseSlug]?.includes(groupId) ?? false;
}

export function isGroupUnlocked(
  store: ProgressStore,
  courseSlug: string,
  groupId: string,
  allGroupIds: string[]
): boolean {
  const idx = allGroupIds.indexOf(groupId);
  if (idx === 0) return true;
  const prevId = allGroupIds[idx - 1];
  return isGroupCompleted(store, courseSlug, prevId);
}

export function getCompletedGroupCount(
  store: ProgressStore,
  courseSlug: string
): number {
  return store.completedGroups[courseSlug]?.length ?? 0;
}

export function hasStartedCourse(
  store: ProgressStore,
  courseSlug: string
): boolean {
  return getCompletedGroupCount(store, courseSlug) > 0;
}
