"use client";
import { useLaunchParams } from "@telegram-apps/sdk-react";

export default function Home() {
  const lp = useLaunchParams();

  return <div>{JSON.stringify(lp)}</div>;
}
