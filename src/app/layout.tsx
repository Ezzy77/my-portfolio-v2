import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google"
import Navbar from "@/components/Navbar";
import {ThemeProvider} from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Elisio Cabral",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
      >
          <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow container mx-auto px-8 py-8">
                  {children}
              </main>
              <footer className="container mx-auto px-4 py-6 text-center">
                  © {new Date().getFullYear()} Elisio Cabral Sa. All rights reserved.
              </footer>
          </div>
      </ThemeProvider>
      </body>
      </html>
  );
}
