import type { Metadata } from "next";
import { Dekko, Leckerli_One } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nimród Keresztelője",
  description: "Nimród Keresztelője",
};

const sacramento = Dekko({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sacramento",
});

const leckerli = Leckerli_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-leckerli",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" suppressHydrationWarning>
      <body className={`${sacramento.variable} ${leckerli.variable}`}>
        {children}
      </body>
    </html>
  );
}
