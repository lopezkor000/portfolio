import { PropsWithChildren, ReactNode } from "react";

const NavButton = (props: PropsWithChildren) => {
  return (
    <button className="bg-zinc-800 w-32 h-8 rounded">{props.children}</button>
  );
};

export default function NavBar() {
  return (
    <div className="fixed flex flex-col w-36 h-full rounded-r-lg bg-black space-y-5 pt-5">
      <NavButton>About Me</NavButton>
      <NavButton>Experience</NavButton>
      <NavButton>Projects</NavButton>
      <NavButton>Contact Me</NavButton>
    </div>
  );
}
