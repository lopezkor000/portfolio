"use client";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function HomePage(props: Props) {
  return (
    <div className={`${window.innerWidth > 500 && "ps-36"} mx-10`}>
      {props.children}
    </div>
  );
}
