"use client";

import { type PropsWithChildren } from "react";
import { useDidMount } from "@/hooks/useDidMount";
import { useTelegramMock } from "@/hooks/useTelegramMock";
import { expandViewport } from "@telegram-apps/sdk-react";

function App(props: PropsWithChildren) {
  if (process.env.NODE_ENV === "development") {
    console.log("Devolopment");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useTelegramMock();
  }
  expandViewport();
  return <>{props.children}</>;
}

export function Root(props: PropsWithChildren) {
  // Unfortunately, Telegram Mini Apps does not allow us to use all features of the Server Side
  // Rendering. That's why we are showing loader on the server side.
  const didMount = useDidMount();

  return didMount ? <App>{props.children}</App> : <div>Loading</div>;
}
