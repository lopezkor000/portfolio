"use client";

import { createContext, useEffect, useState } from "react";

export const WidthContext = createContext(0);

export function WidthContextProvider(props: React.PropsWithChildren) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <WidthContext.Provider value={width}>
      {props.children}
    </WidthContext.Provider>
  );
}
