"use client";

import { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function HomePage(props: Props) {
  let [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, [setWidth]);

  return (
    <div className={`${width > 500 && "ps-36"} mx-10`}>{props.children}</div>
  );
}
