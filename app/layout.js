import Navbar from "@/components/Navbar";
import Container from "@/components/Container";
import { Geist, Geist_Mono, Poppins, Roboto } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const robotoSans = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  style: "normal",
  weight: ["400"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  style: "normal",
  weight: ["400"],
});

export const metadata = {
  title: "welcome to CirQL Sync",
  description:
    "We build smart, scalable, and SQL-native solutions for enterprises powered by Oracle PL/SQL",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${robotoSans.variable} ${poppins.variable} antialiased`}
        cz-shortcut-listen="true"
      >
        <header className="block m-auto bg-white dark:bg-[#0a0a0a] bg-opacity-90 sticky top-0 shadow lg:px-8 backdrop-blur-lg backdrop-saturate-150 z-[9999]">
          <Navbar />
        </header>
        <main className="h-1/2">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
