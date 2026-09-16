import type { Metadata } from "next";
import { faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "자주 묻는 질문",
  description: "준비 기간, 합격 기준, 재응시 등 자주 묻는 질문에 대한 답변입니다.",
};

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
        FAQ
      </p>
      <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
        자주 묻는 질문
      </h1>
      <p className="mt-4 text-slate-600 dark:text-slate-400">
        준비 과정에서 가장 많이 궁금해하는 질문들을 모았습니다. 더 궁금한 점은 공식 안내
        채널을 통해 확인해주세요.
      </p>

      <div className="mt-10 space-y-3">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-2xl border border-slate-200 p-5 dark:border-slate-800"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-slate-900 dark:text-white">
              {faq.question}
              <span className="text-indigo-500 transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}
