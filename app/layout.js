import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar.js";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";
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
  title: "Payment Crowdfunding Webapp",
  description: "This is an platform where you can contribute to your favorite user",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
          <SessionWrapper>
            <Navbar />
            <div className="min-h-[83vh]">
              {children}
            </div>
            <Footer />
          </SessionWrapper>
        </div>
      </body>
    </html>
  );
}
