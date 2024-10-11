"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  isBackButtonMounted,
  mountBackButton,
  offBackButtonClick,
  onBackButtonClick,
  showBackButton,
} from "@telegram-apps/sdk-react";
import { useEffect, useState } from "react";

export default function Page() {
  const router = useRouter();
  const [buttonMounted, setButtonMounted] = useState(false);

  useEffect(() => {
    mountBackButton();
    showBackButton();
    if (isBackButtonMounted()) {
      setButtonMounted(true);
    }
  }, []);

  useEffect(() => {
    console.log("состояние маунтинга", buttonMounted);
    if (buttonMounted) {
      const handleBackButton = () => {
        console.log("button click");
        router.push("/");
      };
      onBackButtonClick(handleBackButton);
      return () => {
        offBackButtonClick(handleBackButton);
      };
    }
  }, [buttonMounted, router]);

  return (
    <div>
      <h1>Сны</h1>
      <Link href="/">На главную</Link>
      <button onClick={() => router.back()}>Назад</button>
    </div>
  );
}
