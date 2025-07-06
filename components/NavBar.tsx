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
      onClick={() => {
        const start = location.href.indexOf("/", 7);
        if (
          location.href.slice(start) !== "/" &&
          location.href.slice(start, start + 2) !== "/#"
        )
          location.href = `/#${props.text}`;
        else scrollToContent(props.text);
      }}
    >
      {props.text}
    </button>
  );
};

export default function NavBar() {
  return (
    <div className="fixed flex flex-col w-36 h-full rounded-r-lg bg-black space-y-5 pt-5 invisible md:visible">
      <div className="grow flex flex-col space-y-5">
        <NavButton text="About Me" />
        <NavButton text="Education" />
        <NavButton text="Experience" />
        <NavButton text="Projects" />
        <NavButton text="Contact Me" />
      </div>
      <div className="py-10">
        <a
          href="/blog"
          className="flex justify-center items-center text-yellow-300 bg-zinc-800 w-32 h-8 rounded-e hover:text-white"
        >
          Blog
        </a>
      </div>
    </div>
  );
}
