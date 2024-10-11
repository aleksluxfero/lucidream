"use client";
import {
  mountBackButton,
  showBackButton,
  onBackButtonClick,
  isBackButtonMounted,
} from "@telegram-apps/sdk-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    mountBackButton();
    showBackButton();
    setIsMounted(isBackButtonMounted()); // Устанавливаем состояние при монтировании кнопки
  }, []);

  useEffect(() => {
    const handleBackButton = () => {
      router.push("/"); // Отмена стандартного поведения Telegram SDK (например, сворачивание приложения)
    };

    if (isMounted) {
      // Обрабатываем нажатие кнопки "Назад", только если кнопка смонтирована
      const offClick = onBackButtonClick(handleBackButton);

      return () => {
        offClick(); // Очищаем событие при размонтировании
      };
    }
  }, [isMounted, router]);

  return (
    <div>
      <h1>Сны</h1>
      <Link href="/">На главную</Link>
      <button onClick={() => onBackButtonClick(() => console.log("Тест"))}>
        Я забыл
      </button>
    </div>
  );
}
