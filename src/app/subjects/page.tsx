import type { Metadata } from "next";
import { subjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "과목별 자료",
  description: "영역별 출제 범위와 핵심 개념, 추천 자료를 확인하세요.",
};

export default function SubjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
        Subject Guide
      </p>
      <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
        과목별 자료
      </h1>
      <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
        총 4개 영역으로 구성됩니다. 각 영역의 핵심 주제와 추천 학습 자료를 확인하고, 본인의
        취약 영역부터 우선적으로 학습해보세요.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {subjects.map((subject, index) => (
          <div
            key={subject.slug}
            className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-sm font-semibold text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300">
                {index + 1}
              </span>
              <h2 className="font-semibold text-slate-900 dark:text-white">
                {subject.title}
              </h2>
            </div>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
              {subject.summary}
            </p>

            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-500">
              핵심 주제
            </p>
            <ul className="mt-2 space-y-1 text-sm text-slate-700 dark:text-slate-300">
              {subject.topics.map((topic) => (
                <li key={topic} className="flex gap-2">
                  <span className="text-indigo-500">·</span>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>

            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-500">
              추천 자료
            </p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {subject.resources.map((resource) => (
                <li
                  key={resource}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                >
                  {resource}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
