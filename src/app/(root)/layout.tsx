import { Montserrat } from "next/font/google";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

import { Sidebar, Topbar } from "@/components/layout";

import "../globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

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
        <body className={montserrat.className}>
          <Topbar />
          <main className="bg-black w-full h-[100vh] pt-16 flex">
            <Sidebar />
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
