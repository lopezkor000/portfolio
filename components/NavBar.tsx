"use client";

interface ButtonProps {
  text: string;
}

const NavButton = (props: ButtonProps) => {
  const scrollToContent = (id: string) => {
    const node = document.getElementById(id);
    window.scroll({ top: node ? node.offsetTop - 100 : 0, behavior: "smooth" });
  };

  return (
    <button
      className="text-yellow-300 bg-zinc-800 w-32 h-8 rounded-e hover:text-white"
      onClick={() => scrollToContent(props.text)}
    >
      {props.text}
    </button>
  );
};

export default function NavBar() {
  return (
    <div className="fixed flex flex-col w-36 h-full rounded-r-lg bg-black space-y-5 pt-5">
      <NavButton text="About Me" />
      <NavButton text="Experience" />
      <NavButton text="Projects" />
      <NavButton text="Contact Me" />
    </div>
  );
}
