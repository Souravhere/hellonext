import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Hello To Next",
  description: "This is my first next js frontend project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased px-3`}
      >
        <nav className="w-1/2 mx-auto h-fit py-2 bg-slate-900 rounded-lg border border-blue-600 mt-2">
          <h1 className="text-center font-semibold text-blue-400 text-xl">Sourav Chhimpa</h1>
        </nav>
        {children}
      </body>
    </html>
  );
}
