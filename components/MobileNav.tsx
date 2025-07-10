"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  TransitionChild,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface ButtonProps {
  text: string;
  setOpen: Function;
}

function MobileNavButton(props: ButtonProps) {
  const scrollToContent = (id: string) => {
    const node = document.getElementById(id);
    window.scroll({ top: node ? node.offsetTop - 100 : 0, behavior: "smooth" });
  };

  return (
    <button
      className="text-yellow-300 bg-zinc-800 w-64 h-12 rounded hover:text-white"
      onClick={() => {
        props.setOpen(false);
        const start = location.href.indexOf("/", 10);
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
}

interface Props {
  navs: string[];
}

export default function MobileNav(props: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-bl-md px-2.5 py-1.5 bg-zinc-800"
      >
        <Bars3Icon className="text-yellow-300 size-10" />
      </button>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
        />
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <DialogPanel
                transition
                className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
              >
                <TransitionChild>
                  <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 duration-500 ease-in-out data-closed:opacity-0 sm:-ml-10 sm:pr-4">
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="relative rounded-md text-gray-300 hover:text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-hidden"
                    >
                      <span className="absolute -inset-2.5" />
                      <span className="sr-only">Close panel</span>
                      <XMarkIcon aria-hidden="true" className="size-6" />
                    </button>
                  </div>
                </TransitionChild>
                <div className="flex h-full flex-col overflow-y-auto bg-black py-6 shadow-xl">
                  {/* <div className="px-4 sm:px-6">
                    <DialogTitle className="text-base font-semibold text-white">
                      Navigation
                    </DialogTitle>
                  </div> */}
                  <div className="h-full relative flex flex-col gap-12 justify-between px-4 sm:px-6">
                    <div className="flex flex-col gap-5 items-center">
                      {props.navs.map((text) => (
                        <MobileNavButton
                          key={text}
                          text={text}
                          setOpen={setOpen}
                        />
                      ))}
                    </div>
                    <div className="flex justify-center">
                      <a
                        href="/blog"
                        className="flex justify-center items-center text-zinc-800 font-bold bg-yellow-300 w-64 h-12 rounded hover:text-zinc-600"
                      >
                        Blog
                      </a>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}
