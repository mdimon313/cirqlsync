import Navbar from "@/components/Navbar";
import Container from "@/components/Container";
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

export const metadata = {
  title: "welcome to CirQL Sync",
  description:
    "We build smart, scalable, and SQL-native solutions for enterprises powered by Oracle PL/SQL",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        cz-shortcut-listen="true"
      >
        <header className="block m-auto bg-white bg-opacity-90 sticky shadow lg:px-8 backdrop-blur-lg backdrop-saturate-150 z-[9999]">
          {/* <Container> */}
          <Navbar />
          {/* </Container> */}
        </header>
        <Container>
          <main className="h-1/2">{children}</main>
        </Container>
      </body>
    </html>
  );
}
