import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Calvin Cheng | Full-Stack Developer",
  description:
    "Self-taught full-stack developer based in Montreal. From electrical engineering to building modern web applications with React, Next.js, and TypeScript.",
  openGraph: {
    title: "Calvin Cheng | Full-Stack Developer",
    description:
      "Self-taught full-stack developer based in Montreal. From electrical engineering to building modern web applications.",
    type: "website",
    url: "https://chengcalvin.github.io",
  },
  twitter: {
    card: "summary",
    title: "Calvin Cheng | Full-Stack Developer",
    description:
      "Self-taught full-stack developer based in Montreal.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
