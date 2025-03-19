"use client";

import { useTransitionRouter } from "next-view-transitions";

export default function Home() {
  const router = useTransitionRouter();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div>
          <button
            onClick={() => {
              router.push("/about"); // 修正: パスを `/about` に戻す
            }}
          >
            Go to /about
          </button>
        </div>
      </main>
    </div>
  );
}
