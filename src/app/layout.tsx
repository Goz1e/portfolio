import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gozie.vercel.app/"),
  title: "Emmanuel's portfolio",
  description: "Nwachukwu Emmanuel's Front-end portfolio",
  category: "technology",
  generator: "Nwachukwu Emmanuel",

  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "https://gozie.vercel.app/",
  },

  authors: [{ name: "Nwachukwu Emmanuel" }],
  creator: "Nwachukwu Emmanuel",
  publisher: "GTX Finance",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    images:
      "https://res.cloudinary.com/dpboshzzm/image/upload/v1753640217/og-image_ifb12l.png",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
