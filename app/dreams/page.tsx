"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { backButton } from "@telegram-apps/sdk-react";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    if (backButton.isSupported()) {
      backButton.mount();

      // Показываем кнопку
      backButton.show();

      // Добавляем обработчик клика
      const offClick = backButton.onClick(() => {
        console.log("Back button clicked");
        // Логика при нажатии
      });

      // Убираем обработчик при размонтировании компонента
      return () => {
        backButton.offClick(offClick);
        backButton.unmount();
      };
    }
  }, []);

  return (
    <div>
      <h1>Сны</h1>
      <Link href="/">На главную</Link>
      <button onClick={() => router.back()}>Назад</button>
    </div>
  );
}
