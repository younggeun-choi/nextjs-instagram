import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import AuthContext from "@/context/AuthContext";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sans.className}>
      <body className="w-full max-w-screen-xl overflow-auto mx-auto">
        <AuthContext>
          <header className="sticky top-0 bg-white z-10 border-b">
            <Navbar />
          </header>
          <main>{children}</main>
        </AuthContext>
      </body>
    </html>
  );
}
