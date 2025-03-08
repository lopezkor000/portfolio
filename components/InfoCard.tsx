"use client";

interface Props {
  id: string;
  title: string;
  subtitle?: string;
  pic: string;
  children: React.ReactNode;
  className?: string;
}

export default function InfoCard(props: Props) {
  return (
    <div
      id={props.id}
      className={`flex ${
        window.innerWidth < 500 && "flex-col"
      } gap-10 items-start pb-10 ${props.className}`}
    >
      <img src={props.pic} className="size-60 aspect-square rounded-lg" />
      <div
        className={`${
          !(window.innerWidth < 500) && "w-3/4"
        } flex flex-col space-y-3`}
      >
        <p className="text-2xl font-bold">{props.title}</p>
        <p className="text-zinc-400">{props.subtitle}</p>
        <div className="flex flex-col space-y-5">{props.children}</div>
      </div>
    </div>
  );
}
