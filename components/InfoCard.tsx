interface Props {
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
      className={`flex gap-10 items-start ${
        props.reverse && "text-right flex-row-reverse"
      } ${props.className}`}
    >
      <div className="w-1/4">
        <img src={props.pic} className="w-full aspect-square rounded-lg" />
      </div>
      <div className="w-3/4 flex flex-col space-y-3">
        <p className="text-2xl font-bold">{props.title}</p>
        <p className="text-zinc-400">{props.subtitle}</p>
        <div className="flex flex-col space-y-3">{props.children}</div>
      </div>
    </div>
  );
}
