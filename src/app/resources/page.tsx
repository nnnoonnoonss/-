import type { Metadata } from "next";
import { resourceCategories } from "@/lib/content";

export const metadata: Metadata = {
  title: "추천 자료",
  description: "공식 자료, 교재, 문제 풀이, 커뮤니티 등 검증된 학습 자료를 확인하세요.",
};

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
        Resources
      </p>
      <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
        추천 자료
      </h1>
      <p className="mt-4 text-slate-600 dark:text-slate-400">
        학습 단계에 맞춰 필요한 자료를 골라 활용하세요. 공식 자료를 우선순위로 두고, 나머지는
        보조 자료로 활용하는 것을 권장합니다.
      </p>

      <div className="mt-10 space-y-6">
        {resourceCategories.map((category) => (
          <div
            key={category.title}
            className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800"
          >
            <h2 className="font-semibold text-slate-900 dark:text-white">
              {category.title}
            </h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              {category.description}
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {category.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 rounded-xl bg-slate-50 px-3 py-2 text-sm text-slate-700 dark:bg-slate-900/60 dark:text-slate-300"
                >
                  <span className="mt-0.5 text-indigo-500">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
