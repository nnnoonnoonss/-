import Link from "next/link";
import {
  featureHighlights,
  overviewStats,
  roadmap,
  site,
} from "@/lib/content";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-indigo-50 to-white dark:border-slate-800 dark:from-slate-900 dark:to-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
            {site.shortName} Prep Guide
          </p>
          <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            {site.tagline}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-slate-600 dark:text-slate-300">
            {site.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/schedule"
              className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
            >
              학습 일정 보기
            </Link>
            <Link
              href="/subjects"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              과목별 자료 살펴보기
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {overviewStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-200 p-5 text-center dark:border-slate-800"
            >
              <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            왜 이 가이드로 준비해야 할까요?
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {featureHighlights.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-slate-950 dark:ring-slate-800"
              >
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap preview */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            학습 로드맵 미리보기
          </h2>
          <Link
            href="/schedule"
            className="text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-400"
          >
            전체 일정 보기 →
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {roadmap.map((step) => (
            <div
              key={step.phase}
              className="rounded-2xl border border-slate-200 p-5 dark:border-slate-800"
            >
              <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                {step.phase} · {step.period}
              </p>
              <h3 className="mt-2 font-semibold text-slate-900 dark:text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            지금 바로 학습 계획을 세워보세요
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-slate-600 dark:text-slate-400">
            궁금한 점이 있다면 자주 묻는 질문 페이지에서 먼저 확인해보세요.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link
              href="/resources"
              className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-700"
            >
              추천 자료 보기
            </Link>
            <Link
              href="/faq"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              FAQ 보기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
