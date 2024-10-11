"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BackButton } from "@/components/BackButton";

export default function Page() {
  const router = useRouter();

  return (
    <div>
      <h1>Сны</h1>
      <Link href="/">На главную</Link>
      <BackButton />
      <button onClick={() => router.back()}>Назад</button>
    </div>
  );
}
