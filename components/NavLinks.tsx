"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks({ flexP = "flex-col" }: { flexP?: string }) {
  const path = usePathname();

  return (
    <div
      className={`flex ${flexP} items-center ${flexP === "flex-row" ? "space-y-0 space-x-[32px]" : "space-y-2"}`}
    >
      <Link href="/contact">
        <div
          className={`${path.includes("/contact") ? "secondary" : "hover:text-[rgba(38,31,34,0.75)]"}`}
        >
          Contact
        </div>
      </Link>
      <Link href="/about-me" className="text-center">
        <div
          className={`${path.includes("/about-me") ? "secondary" : "hover:text-[rgba(38,31,34,0.75)]"}`}
        >
          About me
        </div>
      </Link>
    </div>
  );
}
