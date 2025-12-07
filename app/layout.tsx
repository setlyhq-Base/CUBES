import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActionButton from "@/components/FloatingActionButton";
import ScrollProgress from "@/components/ScrollProgress";
import PageTransition from "@/components/PageTransition";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "CUBES - Real food. Zero prep. Infinite freshness.",
  description: "CUBES brings you frozen portion-controlled cubes made from fresh vegetables, fruits, and herbs. No prep, no preservatives, no waste. Just drop, cook, and enjoy.",
  keywords: ["frozen food", "meal prep", "healthy cooking", "portion control", "zero waste", "convenience food"],
  authors: [{ name: "CUBES" }],
  openGraph: {
    title: "CUBES - Real food. Zero prep. Infinite freshness.",
    description: "Frozen portion-controlled cubes made from fresh vegetables, fruits, and herbs.",
    type: "website",
    locale: "en_US",
    siteName: "CUBES",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ScrollProgress />
        <Navbar />
        <PageTransition>
          <main className="min-h-screen">
            {children}
          </main>
        </PageTransition>
        <Footer />
        <FloatingActionButton />
      </body>
    </html>
  );
}
