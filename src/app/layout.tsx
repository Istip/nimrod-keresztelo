import type { Metadata } from "next";
import { Grandstander, Nerko_One } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nimród Keresztelője",
  description: "Szeretettelm meghívunk Nimród kisfiunk keresztelőjére.",
  referrer: "origin-when-cross-origin",
  keywords: ["keresztelő", "meghívó", "Nimród"],
  metadataBase: new URL("https://nimrod-keresztelo.vercel.app"),
  openGraph: {
    type: "website",
    url: "https://nimrod-keresztelo.vercel.app/",
    title: "NIMRÓD",
    description: "Szeretettelm meghívunk Nimród kisfiunk keresztelőjére.",
    siteName: "Nimród Keresztelője",
    images: [{ url: "/nimiarc.jpg" }],
  },
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
