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
    if (isBackButtonSupported()) {
      mountBackButton();
    }
    if (isBackButtonMounted()) {
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
