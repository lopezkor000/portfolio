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
      className="flex flex-col xl:flex-row gap-10 items-center md:items-start pb-10 w-full px-3"
    >
      <img src={props.pic} className="size-60 aspect-square rounded-lg" />
      <div className="flex flex-col space-y-3">
        <p className="text-2xl font-bold text-center md:text-left">
          {props.title}
        </p>
        <p className="text-zinc-400">{props.subtitle}</p>
        <div className="space-y-5 text-base/7">{props.children}</div>
      </div>
    </div>
  );
}
