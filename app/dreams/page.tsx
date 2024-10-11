"use client";
import Link from "next/link";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleBackButton = (event: PopStateEvent) => {
      // Если пользователь НЕ на главной странице
      if (pathname !== "/") {
        event.preventDefault(); // Отменяем стандартное поведение
        router.push("/"); // Перенаправляем на главную страницу
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("popstate", handleBackButton);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("popstate", handleBackButton);
      }
    };
  }, [pathname, router]);

  return (
    <div>
      <h1>Сны</h1>
      <Link href="/">На главную</Link>
    </div>
  );
}
