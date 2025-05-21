import type { Metadata } from "next";
export const metadata: Metadata = {
  title: { absolute: "Contact" },
  description: "You can contact me here",
};

export default function AboutMeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
