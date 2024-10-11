"use client";
import { mountBackButton, showBackButton } from "@telegram-apps/sdk-react";
import Link from "next/link";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    // Монтируем и показываем кнопку "Назад" при загрузке компонента
    mountBackButton();
    showBackButton();
  }, []);

  return (
    <div>
      <h1>Сны</h1>
      <Link href="/">На главную</Link>
    </div>
  );
}
