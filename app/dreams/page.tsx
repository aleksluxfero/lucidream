"use client";
import {} from "@telegram-apps/sdk-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <div>
      <h1>Сны</h1>
      <Link href="/">На главную</Link>
      <button onClick={() => router.back()}>Назад</button>
    </div>
  );
}
