"use client";
import Link from "next/link";
import { onBackButtonClick } from "@telegram-apps/sdk-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleBackButton = () => {
      // Если пользователь НЕ на главной странице
      if (pathname !== "/") {
        router.push("/"); // Перенаправляем на главную страницу
      }
      return false;
    };

    // Подписываемся на событие onBackButtonClick
    const unsubscribe = onBackButtonClick(handleBackButton);

    // Очищаем подписку при размонтировании компонента
    return () => {
      unsubscribe();
    };
  }, [router, pathname]);

  return (
    <div>
      <h1>Сны</h1>
      <Link href="/">На главную</Link>
    </div>
  );
}
