"use client";
import { useLaunchParams } from "@telegram-apps/sdk-react";
import Link from "next/link";

export default function Home() {
  const lp = useLaunchParams();

  console.log(lp);
  return (
    <div>
      <h1>Главная</h1>
      <div>{lp.platform}</div>
      <div>{lp.initData?.user?.id}</div>
      <div>{lp.initData?.user?.photoUrl}</div>
      <Link href="/dreams">Сны</Link>
    </div>
  );
}
