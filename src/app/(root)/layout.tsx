import { Inter } from "next/font/google";
import type { Metadata } from "next";

import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Voltwise",
  description: "Track your electricity metrics",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en">
        <body className={inter.className}>
          <main className="bg-black w-full h-[100vh]">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
