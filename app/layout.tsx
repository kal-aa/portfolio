import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="min-h-[55vh] mt-[130px]">{children}</div>
        <div className="mt-[90px]">
          <Footer />
        </div>
      </body>
    </html>
  );
}

// sm	640px
// xl	1280px
