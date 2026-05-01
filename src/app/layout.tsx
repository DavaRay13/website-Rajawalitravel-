import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rajawali Tour Travel | Travel Sukabumi - Bandara Soetta & Jabodetabek",
  description: "Layanan travel door-to-door 24 jam. Rute Sukabumi, Cianjur, Bandung menuju Bandara Soetta, Jakarta, Bogor, Depok, Tangerang, Bekasi. Pesan sekarang!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}