import type { Metadata } from "next";
import { Viewport } from "next";
import { Edu_VIC_WA_NT_Beginner, Exo_2, Geist, Raleway } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const Edu = Edu_VIC_WA_NT_Beginner({
  variable: "--font-edu-vic-wa-nt-beginner",
  subsets: ["latin"],
})

const Exo = Exo_2({
  variable: "--font-Exo-2",
  subsets: ["latin"],
})

const raleway = Raleway({
  variable: "--font-Raleway",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "MHBlog",
  description: "Blog ",
  authors: [{ name: "Maxim harvančík"}],
  manifest: "manifest.json",
  icons: "favicon.ico"
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported but less commonly used
  // interactiveWidget: 'resizes-visual',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://web.cmp.usercentrics.eu/modules/autoblocker.js"></script>
        <script id="usercentrics-cmp" src="https://web.cmp.usercentrics.eu/ui/loader.js" data-settings-id="zBJ9reyj18QlVL" async></script>
      </head>
      <body
        className={`${geistSans.variable} ${Edu.variable} ${Exo.variable} ${raleway.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
