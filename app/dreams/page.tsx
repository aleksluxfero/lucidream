"use client";
import {
  mountBackButton,
  showBackButton,
  onBackButtonClick,
} from "@telegram-apps/sdk-react";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  useEffect(() => {
    // Монтируем и показываем кнопку "Назад" при загрузке компонента
    mountBackButton();
    showBackButton();
    onBackButtonClick(() => {
      router.back();
    });
  }, [router]);

  return (
    <div>
      <h1>Сны</h1>
      <Link href="/">На главную</Link>
    </div>
  );
}
