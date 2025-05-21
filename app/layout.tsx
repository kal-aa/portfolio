import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ToastNotification from "@/components/ToastNotification";

export const metadata: Metadata = {
  title: { default: "kal-portfolio", template: "%s" },
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
        <ToastNotification />
        <div className="mt-[90px]">
          <Footer />
        </div>
      </body>
    </html>
  );
}

// sm	640px
// xl	1280px
