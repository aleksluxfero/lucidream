"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { mountBackButton, showBackButton } from "@telegram-apps/sdk-react";

export default function Page() {
  const router = useRouter();

  mountBackButton();
  showBackButton();

  return (
    <div>
      <h1>Сны</h1>
      <Link href="/">На главную</Link>
      <button onClick={() => router.back()}>Назад</button>
    </div>
  );
}
