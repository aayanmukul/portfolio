import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "EE Portfolio – Electrical Engineering Student at Georgia Tech",
  description: "Electrical engineering portfolio showcasing projects in power systems, digital signal processing, and renewable energy technologies. Georgia Tech EE student with experience in research and industry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Fallback styles in case Tailwind doesn't load */
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              margin: 0;
              padding: 0;
              background-color: white;
              color: #333;
            }
            .dark body {
              background-color: #0a0a0a;
              color: #acacac;
            }
            /* Test styles to verify CSS is working */
            .test-css {
              background-color: red !important;
              color: white !important;
              padding: 10px !important;
              margin: 10px !important;
            }
          `
        }} />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="test-css">CSS Test - If you see this in red, CSS is working</div>
        {children}
      </body>
    </html>
  );
}
