import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { GeistMono } from "geist/font/mono";
import Providers from "@/components/providers";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "Faizan Writes",
  description: "A blog application with Admin CMS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistMono.className}>
        <Providers>
          <ThemeProvider
            attribute="class"
            enableSystem
            defaultTheme="system"
            disableTransitionOnChange
          >
            <Navbar />
            {children}
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
