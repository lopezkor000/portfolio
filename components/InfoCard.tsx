"use client";

import { useContext } from "react";
import { WidthContext } from "@/components/Context";

interface Props {
  id: string;
  title: string;
  subtitle?: string;
  pic: string;
  children: React.ReactNode;
  className?: string;
}

export default function InfoCard(props: Props) {
  const width = useContext(WidthContext);

  return (
    <div
      id={props.id}
      className={`flex ${
        width < 500 && "flex-col"
      } gap-10 items-start pb-10 w-full`}
    >
      <img src={props.pic} className="size-60 aspect-square rounded-lg" />
      <div className="flex flex-col space-y-3">
        <p className="text-2xl font-bold">{props.title}</p>
        <p className="text-zinc-400">{props.subtitle}</p>
        <div className="space-y-5">{props.children}</div>
      </div>
    </div>
  );
}
