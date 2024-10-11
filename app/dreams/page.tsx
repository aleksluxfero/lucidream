"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  hideBackButton,
  isBackButtonSupported,
  mountBackButton,
  offBackButtonClick,
  onBackButtonClick,
  showBackButton,
  unmountBackButton,
} from "@telegram-apps/sdk-react";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    console.log("Заход");
    if (isBackButtonSupported()) {
      console.log("Кнопка поддерживается");
      mountBackButton();
      showBackButton();

      const handleBackButtonClick = () => {
        console.log("Back button clicked");
        // Логика при нажатии
      };

      onBackButtonClick(handleBackButtonClick);

      // Очищаем обработчики и демонтируем кнопку при размонтировании компонента
      return () => {
        offBackButtonClick(handleBackButtonClick);
        hideBackButton();
        unmountBackButton();
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
