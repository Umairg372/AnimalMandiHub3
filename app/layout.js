import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "AnimalMandiHub - Pakistan's Largest Online Animal Marketplace",
  description:
    "Buy and sell pets, livestock, and birds on AnimalMandiHub. The largest marketplace for all breeds of animals under one roof. Connect directly with sellers across Pakistan.",
  keywords: [
    "animal marketplace",
    "buy animals online",
    "sell livestock",
    "pets for sale",
    "cattle market online",
    "pashu mandi",
    "goat for sale",
    "cow for sale",
    "birds for sale",
    "Pakistan",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
