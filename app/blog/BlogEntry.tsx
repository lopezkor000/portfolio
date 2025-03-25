interface Props {
  title: string;
}

export function BlogEntry(props: Props) {
  return <div>{props.title}</div>;
}
