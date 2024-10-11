"use client";
import Link from "next/link";
import {
  isBackButtonMounted,
  mountBackButton,
  offBackButtonClick,
  onBackButtonClick,
} from "@telegram-apps/sdk-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Монтируем кнопку "Назад", если она не монтирована
    if (!isBackButtonMounted()) {
      mountBackButton();
    }

    // Обработчик нажатия на кнопку "Назад"
    const handleBackButton = () => {
      // Проверяем, если пользователь не на главной странице
      if (pathname !== "/") {
        router.push("/"); // Перенаправляем на главную страницу
        return false; // Отменяем стандартное поведение
      }
      return true; // Если на главной, позволяем выполнить стандартное действие
    };

    // Подписываемся на событие нажатия кнопки "Назад"
    const offClick = onBackButtonClick(handleBackButton);

    // Очищаем подписку при размонтировании компонента
    return () => {
      offClick();
      offBackButtonClick(handleBackButton); // Отключаем обработчик
    };
  }, [pathname, router]);

  return (
    <div>
      <h1>Сны</h1>
      <Link href="/">На главную</Link>
    </div>
  );
}
