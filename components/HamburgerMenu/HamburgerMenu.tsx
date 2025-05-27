"use client";

import { useState } from "react";
import HeaderNavLinks from "../NavLinks/NavLinks";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="flex items-center space-x-4 sm:hidden">
      {/* Navigation links */}
      <div
        style={{ display: isOpen ? "flex" : "none" }}
        // className={`${isOpen ? "flex" : "hidden"}`}
      >
        <HeaderNavLinks />
      </div>
      {/* Hamburger menu */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="hamburger-menu"
      >
        <span
          className={`bg-black ease-in-out ${
            isOpen ? "translate-y-2 -rotate-45 " : ""
          }`}
        ></span>
        <span
          className={`bg-black ease-in-out ${isOpen ? "opacity-0" : ""}`}
        ></span>
        <span
          className={`bg-black ease-in-out ${
            isOpen ? "-translate-y-[10px] rotate-45" : ""
          }`}
        ></span>
      </button>
    </section>
  );
}
