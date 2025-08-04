import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { I18nProvider } from "@/lib/i18n"; // Updated import for I18nProvider
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KNC Innovation - Software, Blockchain & AI Solutions",
  description:
    "Innovating software, blockchain, and AI solutions for a smarter future. Building cutting-edge technology since 2018.",
  keywords:
    "blockchain, AI, machine learning, full stack development, smart contracts, trading bots, software development",
  authors: [{ name: "KNC Innovation" }],
  creator: "KNC Innovation",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kncinnovation.com",
    title: "KNC Innovation - Software, Blockchain & AI Solutions",
    description:
      "Innovating software, blockchain, and AI solutions for a smarter future. Building cutting-edge technology since 2018.",
    siteName: "KNC Innovation",
  },
  twitter: {
    card: "summary_large_image",
    title: "KNC Innovation - Software, Blockchain & AI Solutions",
    description:
      "Innovating software, blockchain, and AI solutions for a smarter future. Building cutting-edge technology since 2018.",
    creator: "@kncinnovation",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <I18nProvider>
            <Navigation />
            <main>{children}</main>
            <Footer />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
