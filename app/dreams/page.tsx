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
    backButton.mount();
    console.log("The button is", isVisible ? "visible" : "invisible");
    backButton.show();
    console.log("mounted", isBackButtonMounted());
    const handleButtonClick = () => {
      console.log("back button");
      router.push("/");
    };
    backButton.onClick(handleButtonClick);
    return () => {
      console.log("Стираем");
      backButton.hide();
      backButton.offClick(handleButtonClick);
    };
  }, [isVisible, router]);

  return (
    <div>
      <h1>Сны</h1>
      <Link href="/">На главную</Link>
      <button onClick={() => router.back()}>Назад</button>
    </div>
  );
}
