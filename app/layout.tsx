import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

// Mengonfigurasi font Roboto dari Google Fonts
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "NusaGo Portfolio",
  description: "Portfolio Integration System - NusaGo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${roboto.className} bg-zinc-50 antialiased`}>
        {children}
      </body>
    </html>
  );
}