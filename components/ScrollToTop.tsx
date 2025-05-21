"use client";

import { BiArrowToTop } from "react-icons/bi";

export default function ScrollToTop() {
  const HandleArrowClick = () => scrollTo({ top: 0, behavior: "smooth" });
  return (
    <BiArrowToTop
      onClick={HandleArrowClick}
      className="absolute right-[5%] -top-8 cursor-pointer primary"
      size={32}
    />
  );
}
