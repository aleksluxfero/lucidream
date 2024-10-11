"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { backButton, useSignal } from "@telegram-apps/sdk-react";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();
  const isVisible = useSignal(backButton.isVisible);

  useEffect(() => {
    console.log("The button is", isVisible ? "visible" : "invisible");
  }, [isVisible]);

  useEffect(() => {
    backButton.mount();
    backButton.show();
    return () => {
      backButton.hide();
    };
  }, []);

  return (
    <div>
      <h1>Сны</h1>
      <Link href="/">На главную</Link>
      <button onClick={() => router.back()}>Назад</button>
    </div>
  );
}
