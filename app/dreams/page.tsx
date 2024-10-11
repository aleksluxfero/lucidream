"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  backButton,
  isBackButtonMounted,
  useSignal,
} from "@telegram-apps/sdk-react";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();
  const isVisible = useSignal(backButton.isVisible);

  useEffect(() => {
    // Монтируем кнопку, если она ещё не была смонтирована
    if (!isBackButtonMounted()) {
      console.log("Монтируем кнопку назад");
      backButton.mount();
    }

    console.log("mounted", isBackButtonMounted());

    const handleButtonClick = () => {
      console.log("Back button clicked");
      router.push("/");
    };

    // Подписываемся на событие клика
    backButton.onClick(handleButtonClick);

    return () => {
      console.log("Снимаем обработчик и скрываем кнопку");
      backButton.hide();
      backButton.offClick(handleButtonClick);
    };
  }, [router]);

  useEffect(() => {
    // Отслеживаем изменение состояния видимости кнопки
    if (!isVisible) {
      console.log("Кнопка не видна, делаем её видимой");
      backButton.show();
    }
    console.log("Кнопка сейчас", isVisible ? "видна" : "невидима");
  }, [isVisible]);

  return (
    <div>
      <h1>Сны</h1>
      <Link href="/">На главную</Link>
      <button onClick={() => router.back()}>Назад</button>
    </div>
  );
}
