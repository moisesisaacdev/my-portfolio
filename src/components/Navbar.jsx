import { LuMenu, LuX } from "react-icons/lu";
import { links } from "../data/navgation.js";

import Button from "./Button.jsx";
import { useState } from "react";

export default function Navbar() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <button
        className={`
          p-3 border
          border-border
          rounded-lg
          text-muted
          md:hidden
        `}
        onClick={() => setOpened(!opened)}
      >
        {opened ? <LuX /> : <LuMenu />}
      </button>
      <nav className={`
        flex max-md:px-5 
        gap-5 max-md:flex-col
        max-md:fixed 
        max-md:bg-surface
        max-md:w-full left-0
        top-0 max-md:pb-5 
        md:items-center
        transition-all
        duration-500
        max-md:${opened ? `
          top-20
        ` : ` top-[-100%]`}
      `}>
        <ul className={`
          flex text-muted
          max-md:flex-col 
          max-md:w-full
          max-md:gap-0
          md:gap-4
        `}>
          {links.map((link, index) => {
            return (
              <li
                key={index}
                className={`
                  w-full max-md:py-4
                  max-md:border-b
                  max-md:border-b-border
                  max-md:hover:bg-surface-light
                  max-md:hover:px-5
                  transition-all
                  duration-400 cursor-pointer
                `}
                onClick={() => {
                  setOpened(false);
                  document.querySelector(
                    link.href
                  )?.scrollIntoView({ behavior: 'smooth' }, true);
                }}
              >
                {link.label}
              </li>
            );
          })}
        </ul>
        <Button
          onClick={() => {
            setOpened(false);
            document.querySelector(
              '#contact'
            )?.scrollIntoView({ behavior: 'smooth' }, true);
          }}
        >
          Entre em contacto
        </Button>
      </nav>
      <div
        className={`
          fixed bg-black
          top-20 left-0
          h-full w-full
          opacity-50 -z-1
        `}
        hidden={!opened}
        onClick={() => setOpened(false)}
      />
    </>
  );
}