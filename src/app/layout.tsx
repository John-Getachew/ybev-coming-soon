import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Black EV",
  description: `YourBlackEV (YBEV) serves as a comprehensive solution in the EV rental landscape, meticulously crafted for rideshare drivers. Recognizing the multifaceted challenges of today's drivers, YBEV doesn't just offer cars; it provides tools, resources, and a robust support system.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
