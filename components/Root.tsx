"use client";

import { type PropsWithChildren } from "react";
import { useLaunchParams } from "@telegram-apps/sdk-react";
import { useTelegramMock } from "@/hooks/useTelegramMock";
import { useDidMount } from "@/hooks/useDidMount";

function App(props: PropsWithChildren) {
  const lp = useLaunchParams();

  const isDarkTheme = lp.themeParams
    ? lp.themeParams.bgColor === "#17212b"
    : false;

  console.log(lp);
  console.log(isDarkTheme);

  return <div>{props.children}</div>;
}

function RootInner({ children }: PropsWithChildren) {
  // Mock Telegram environment in development mode if needed.
  if (process.env.NODE_ENV === "development") {
    console.log("Devolopment");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useTelegramMock();
  }

  return <App>{children}</App>;
}

export function Root(props: PropsWithChildren) {
  // Unfortunately, Telegram Mini Apps does not allow us to use all features of the Server Side
  // Rendering. That's why we are showing loader on the server side.
  const didMount = useDidMount();

  return didMount ? <RootInner {...props} /> : <div>Loading</div>;
}
