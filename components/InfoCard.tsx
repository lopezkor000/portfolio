"use client";

import { useEffect, useState } from "react";

interface Props {
  id: string;
  title: string;
  subtitle?: string;
  pic: string;
  children: React.ReactNode;
  className?: string;
}

export default function InfoCard(props: Props) {
  let [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, [setWidth]);

  return (
    <div
      id={props.id}
      className={`flex ${width < 500 && "flex-col"} gap-10 items-start pb-10 ${
        props.className
      }`}
    >
      <img src={props.pic} className="size-60 aspect-square rounded-lg" />
      <div className={`${!(width < 500) && "w-3/4"} flex flex-col space-y-3`}>
        <p className="text-2xl font-bold">{props.title}</p>
        <p className="text-zinc-400">{props.subtitle}</p>
        <div className="flex flex-col space-y-5">{props.children}</div>
      </div>
    </div>
  );
}
