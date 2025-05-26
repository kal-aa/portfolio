"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function NavLinks({ flexP = "flex-col" }: { flexP?: string }) {
  const path = usePathname();

  return (
    <section
      className={`flex ${flexP} items-center ${
        flexP === "flex-row" ? "space-x-6" : "space-y-2"
      }`}
    >
      <Link
        href="/contact"
        className={`${path.includes("/contact") ? "secondary" : "link-hover"}`}
      >
        Contact
      </Link>
      <Link
        href="/about-me"
        className={`text-center ${
          path.includes("/about-me") ? "secondary" : "link-hover"
        }`}
      >
        About me
      </Link>
    </section>
  );
}

export default React.memo(NavLinks);
