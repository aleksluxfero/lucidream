"use client";
import Link from "next/link";
import { backButton } from "@telegram-apps/sdk-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    backButton.mount();
    backButton.show();
    console.log(backButton.isSupported());
    const handleButtonClick = () => {
      if (pathname !== "/") {
        console.log(pathname);
        router.push("/");
        return false;
      }
    };
    backButton.onClick(handleButtonClick);

    return () => {
      backButton.offClick(handleButtonClick);
    };
  }, [pathname, router]);

  return (
    <div>
      <h1>Сны</h1>
      <Link href="/">На главную</Link>
    </div>
  );
}
