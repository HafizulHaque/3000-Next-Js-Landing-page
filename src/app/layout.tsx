import type { Metadata } from "next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "a designer portfolio page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className={formular.className}>{children}</body> */}
      <body>{children}</body>
    </html>
  );
}
