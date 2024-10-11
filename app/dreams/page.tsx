"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  mountBackButton,
  offBackButtonClick,
  onBackButtonClick,
  showBackButton,
} from "@telegram-apps/sdk-react";

export default function Page() {
  const router = useRouter();

  const handleBackButton = () => {
    console.log("button click");
    router.push("/");
  };

  mountBackButton();
  showBackButton();

  onBackButtonClick(handleBackButton);
  offBackButtonClick(handleBackButton);

  return (
    <div>
      <h1>Сны</h1>
      <Link href="/">На главную</Link>
      <button onClick={() => router.back()}>Назад</button>
    </div>
  );
}
