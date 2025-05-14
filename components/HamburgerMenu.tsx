"use client";

import { useState } from "react";
import HeaderNavLinks from "./NavLinks";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center space-x-6 sm:hidden">
      {/* Navigation links */}
      <div className={`${isOpen ? "flex" : "hidden"}`}>
        <HeaderNavLinks />
      </div>
      {/* Hamburger menu */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex flex-col items-center justify-center space-y-[6px] w-10 h-10 cursor-pointer"
      >
        <span
          className={`w-6 h-[3px] black-bg transition-all duration-300 ease-in-out ${isOpen ? "translate-y-2 rotate-45 " : ""}`}
        ></span>
        <span
          className={`w-6 h-[3px] black-bg transition-all duration-300 ease-in-out ${isOpen ? "opacity-0" : ""}`}
        ></span>
        <span
          className={`w-6 h-[3px] black-bg transition-all duration-300 ease-in-out ${isOpen ? "-translate-y-[10px] -rotate-45" : ""}`}
        ></span>
      </button>
    </div>
  );
}
