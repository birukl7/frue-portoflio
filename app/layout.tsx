import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Frezer Metasebia Girma | Frontend Developer",
  description:
    "Portfolio of Frezer Metasebia Girma, a frontend developer and software engineering graduate specialising in React, Next.js, TypeScript, Flutter, and modern web development.",
  keywords: [
    "Frezer Metasebia Girma",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Flutter",
    "Software Engineer",
    "Portfolio",
    "Addis Ababa",
  ],
  authors: [{ name: "Frezer Metasebia Girma" }],
  openGraph: {
    title: "Frezer Metasebia Girma | Frontend Developer",
    description:
      "Portfolio of Frezer Metasebia Girma, a frontend developer and software engineering graduate specialising in React, Next.js, TypeScript, Flutter, and modern web development.",
    type: "website",
    locale: "en_US",
    url: "https://frezermt.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frezer Metasebia Girma | Frontend Developer",
    description:
      "Frontend developer building thoughtful digital experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-white font-sans text-zinc-900 antialiased dark:bg-[#0a0a0b] dark:text-zinc-100">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="noise">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
