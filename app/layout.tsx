import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Custom Local Fonts
const lucyRose = localFont({
  src: "../public/font/LucyRosePERSONAL-Regular.otf",
  variable: "--font-lucy-rose",
  display: "swap",
  weight: "400",
});

const cormorant = localFont({
  src: "../public/font/CormorantGaramond-Regular.ttf",
  variable: "--font-cormorant",
  display: "swap",
  weight: "400",
});

// Google Font for CTA/Buttons
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nafa & Ali Wedding",
  description: "The Wedding of Nafa & Ali - 2 Mei 2025",
  openGraph: {
    title: "Nafa & Ali Wedding",
    description: "Join us in celebrating our special day - 2 Mei 2025",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${lucyRose.variable} ${cormorant.variable} ${poppins.variable}`}>
      <body className={cormorant.className}>
        {children}
      </body>
    </html>
  );
}
