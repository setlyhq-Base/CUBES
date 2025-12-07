import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActionButton from "@/components/FloatingActionButton";
import ScrollProgress from "@/components/ScrollProgress";
import PageTransition from "@/components/PageTransition";
import PWAInstallPrompt from "@/components/PWAInstallPrompt";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "CUBES - Real food. Zero prep. Infinite freshness.",
  description: "CUBES brings you frozen portion-controlled cubes made from fresh vegetables, fruits, and herbs. No prep, no preservatives, no waste. Just drop, cook, and enjoy.",
  keywords: ["frozen food", "meal prep", "healthy cooking", "portion control", "zero waste", "convenience food"],
  authors: [{ name: "CUBES" }],
  manifest: "/manifest.json",
  themeColor: "#2D5016",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    viewportFit: "cover",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "CUBES",
  },
  openGraph: {
    title: "CUBES - Real food. Zero prep. Infinite freshness.",
    description: "Frozen portion-controlled cubes made from fresh vegetables, fruits, and herbs.",
    type: "website",
    locale: "en_US",
    siteName: "CUBES",
  },
  icons: {
    icon: [
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icons/icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/icons/icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="CUBES" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-180x180.png" />
      </head>
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
        <PWAInstallPrompt />
      </body>
    </html>
  );
}
