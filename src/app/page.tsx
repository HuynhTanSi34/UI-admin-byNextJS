"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    document.title = "Đăng nhập";
  }, []);
  const router = useRouter();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <div className="flex flex-col bg-white p-6 justify-between text-black rounded">
          <label className="mb-4">Tên đăng nhập</label>
          <input
            type="text"
            className="mb-4 border-2 border-solid border-gray-200 px-4 py-2"
          />
          <label className="mb-4">Mật khẩu</label>
          <input
            type="password"
            className="mb-4 border-2 border-solid border-gray-200 px-4 py-2"
          />
          <button
            onClick={() => router.push("/admin/dashboard")}
            className="py-4 bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 text-white rounded"
          >
            Đăng nhập
          </button>
        </div>
      </main>
    </div>
  );
}
