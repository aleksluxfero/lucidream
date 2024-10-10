import { useEffect, useState } from "react";

export function useDidMount() {
  const [didMount, setDidMount] = useState<boolean>(false);
  useEffect(() => {
    setDidMount(true);
  }, []);
  return didMount;
}
