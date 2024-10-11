"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { initBackButton } from "@telegram-apps/sdk";

export default function Page() {
  const router = useRouter();
  const [backButton] = initBackButton();

  useEffect(() => {
    // Показать кнопку "Назад"
    backButton.show();
    console.log("Кнопка сейчас видима:", backButton.isVisible);

    // Добавляем обработчик клика на кнопку "Назад"
    const handleButtonClick = () => {
      console.log("Back button clicked");
      router.push("/");
    };
    backButton.on("click", handleButtonClick);

    return () => {
      // Удаляем обработчик и скрываем кнопку при размонтировании
      backButton.hide();
      backButton.off("click", handleButtonClick);
    };
  }, [router]);

  return (
    <div>
      <h1>Сны</h1>
      <Link href="/">На главную</Link>
      {/* Кастомная кнопка назад, если встроенная не работает */}
      <button onClick={() => router.back()}>Назад</button>
    </div>
  );
}
