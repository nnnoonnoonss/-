import Link from "next/link";
import { nav, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-semibold text-slate-900 dark:text-white">{site.name}</p>
            <p className="mt-1 max-w-sm text-sm text-slate-500 dark:text-slate-400">
              {site.description}
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="mt-8 text-xs text-slate-400 dark:text-slate-600">
          이 가이드는 학습 참고용으로 제작되었으며, 정확한 응시 자격·일정·기준은 반드시 공식 기관의
          최신 공지를 확인하시기 바랍니다.
        </p>
      </div>
    </footer>
  );
}
