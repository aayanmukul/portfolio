import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "Aayan's Portfolio – EE @ Georgia Tech",
  description: "Electrical engineering portfolio showcasing projects in power systems, circuit technology, and renewable energy technologies. Georgia Tech EE student with experience in research and industry.",
  icons: {
    icon: "/flower-dark.png",
    shortcut: "/flower-dark.png",
    apple: "/flower-dark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
