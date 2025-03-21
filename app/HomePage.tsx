"use client";

import { useContext } from "react";
import { WidthContext } from "@/components/Context";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function HomePage(props: Props) {
  const width = useContext(WidthContext);

  return (
    <div className={`${width > 500 && "ps-36"} mx-10`}>{props.children}</div>
  );
}
