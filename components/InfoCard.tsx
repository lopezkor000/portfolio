interface Props {
  id: string;
  title: string;
  subtitle?: string;
  pic: string;
  children: React.ReactNode;
  reverse?: boolean;
  className?: string;
}

export default function InfoCard(props: Props) {
  return (
    <div
      id={props.id}
      className={`flex gap-10 items-start pb-10 ${
        props.reverse && "text-right flex-row-reverse"
      } ${props.className}`}
    >
      <img src={props.pic} className="size-60 aspect-square rounded-lg" />
      <div className="w-3/4 flex flex-col space-y-3">
        <p className="text-2xl font-bold">{props.title}</p>
        <p className="text-zinc-400">{props.subtitle}</p>
        <div
          className={`flex flex-col space-y-5 ${
            props.reverse && "place-items-end"
          }`}
        >
          {props.children}
        </div>
      </div>
    </div>
  );
}
