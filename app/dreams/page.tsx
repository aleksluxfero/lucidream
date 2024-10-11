"use client";
import {
  isBackButtonMounted,
  isBackButtonSupported,
  mountBackButton,
  showBackButton,
} from "@telegram-apps/sdk-react";
import Link from "next/link";

export default function Page() {
  if (isBackButtonSupported()) {
    mountBackButton();
  }
  if (isBackButtonMounted()) {
    showBackButton();
  }

  return (
    <div>
      <h1>Сны</h1>
      <Link href="/">На главную</Link>
    </div>
  );
}
