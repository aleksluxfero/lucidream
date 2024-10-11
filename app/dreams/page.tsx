"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { backButton } from "@telegram-apps/sdk-react";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    backButton.show();
    return () => {
      backButton.hide();
    };
  }, []);

  return (
    <div>
      <h1>Сны</h1>
      <Link href="/">На главную</Link>
      <button onClick={() => router.back()}>Назад</button>
    </div>
  );
}
