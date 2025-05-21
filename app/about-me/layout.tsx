import type { Metadata } from "next";
export const metadata: Metadata = {
  title: { absolute: "About-me" },
  description: "A bit about myself",
};

export default function AboutMeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
