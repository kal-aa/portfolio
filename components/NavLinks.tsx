"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks({ flexP = "flex-col" }: { flexP?: string }) {
  const path = usePathname();

  return (
    <section
      className={`flex ${flexP} items-center ${flexP === "flex-row" ? "space-x-8" : "space-y-2"}`}
    >
      <Link href="/contact">
        <div
          className={`${path.includes("/contact") ? "secondary" : "link-hover"}`}
        >
          Contact
        </div>
      </Link>
      <Link href="/about-me" className="text-center">
        <div
          className={`${path.includes("/about-me") ? "secondary" : "link-hover"}`}
        >
          About me
        </div>
      </Link>
    </section>
  );
}
