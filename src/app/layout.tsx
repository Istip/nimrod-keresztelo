import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import "./globals.css";

const font = Rethink_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nimród Keresztelője",
  description: "Nimród Keresztelője",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <body className={font.className}>{children}</body>
    </html>
  );
}
