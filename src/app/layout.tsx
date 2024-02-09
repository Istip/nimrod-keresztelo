import type { Metadata } from "next";
import { Grandstander, Nerko_One } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nimród Keresztelője",
  description: "Nimród Keresztelője",
};

const sacramento = Grandstander({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sacramento",
});

const leckerli = Nerko_One({
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

// old default: Dekko
// old title: Leckerli_One
