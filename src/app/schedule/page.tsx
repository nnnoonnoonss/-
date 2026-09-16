import type { Metadata } from "next";
import { roadmap, scheduleWeeks } from "@/lib/content";

export const metadata: Metadata = {
  title: "학습 일정",
  description: "D-90부터 시험 당일까지 단계별 학습 일정을 확인하세요.",
};

export default function SchedulePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
        Study Schedule
      </p>
      <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
        학습 일정
      </h1>
      <p className="mt-4 text-slate-600 dark:text-slate-400">
        아래 일정은 평균 12주 준비 기간을 기준으로 한 예시입니다. 본인의 기초 수준과 남은
        기간에 맞춰 자유롭게 조정하세요.
      </p>

      {/* Phase overview */}
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {roadmap.map((step) => (
          <div
            key={step.phase}
            className="rounded-2xl border border-slate-200 p-5 dark:border-slate-800"
          >
            <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
              {step.phase} · {step.period}
            </p>
            <h2 className="mt-1 font-semibold text-slate-900 dark:text-white">
              {step.title}
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* Weekly breakdown */}
      <h2 className="mt-14 text-xl font-bold text-slate-900 dark:text-white">
        주차별 상세 계획
      </h2>
      <ol className="mt-6 space-y-6 border-l-2 border-indigo-200 pl-6 dark:border-indigo-900">
        {scheduleWeeks.map((week) => (
          <li key={week.range} className="relative">
            <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-indigo-600" />
            <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
              {week.range}
            </p>
            <h3 className="mt-1 font-semibold text-slate-900 dark:text-white">
              {week.focus}
            </h3>
            <ul className="mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-400">
              {week.tasks.map((task) => (
                <li key={task} className="flex gap-2">
                  <span className="text-indigo-500">·</span>
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}
