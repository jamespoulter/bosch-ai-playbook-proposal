import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bosch AI Playbook Programme | ThreePoint",
  description: "A transformational AI strategy programme to equip Bosch with the frameworks, skills, and confidence to lead in the AI era",
  icons: {
    icon: "/threepoint-icon.png",
    shortcut: "/threepoint-icon.png",
    apple: "/threepoint-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} font-sans antialiased bg-navy text-cream`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
