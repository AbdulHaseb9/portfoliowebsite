import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Haseeb Sheikh",
  description: "Portfolio Website of Haseeb Sheikh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-bg_color px-6 md:px-10 lg:px-14 large:px-16`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
