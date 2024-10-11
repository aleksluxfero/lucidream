"use client";
import {
  isBackButtonMounted,
  isBackButtonSupported,
  mountBackButton,
  showBackButton,
} from "@telegram-apps/sdk-react";
import Link from "next/link";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    console.log(isBackButtonSupported());
    if (isBackButtonSupported()) {
      console.log("Монтируем кнопку");
      mountBackButton();
    }
    console.log(isBackButtonMounted());
    if (isBackButtonMounted()) {
      console.log("Показываем кнопку");
      showBackButton();
    }
  }, []);

  return (
    <div>
      <h1>Сны</h1>
      <Link href="/">На главную</Link>
    </div>
  );
}
