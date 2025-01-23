import type { Metadata } from "next";
import NavBar from "@/app/ui/navbar";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Jeopardy",
  description: "New version of Jeopardy",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div>
          <div>
            <NavBar />
          </div>
          <div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

