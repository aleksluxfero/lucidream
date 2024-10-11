"use client";
import { mountBackButton, showBackButton } from "@telegram-apps/sdk-react";
import Link from "next/link";

export default function Page() {
  mountBackButton();
  showBackButton();

  return (
    <div>
      <h1>Сны</h1>
      <Link href="/">На главную</Link>
    </div>
  );
}
