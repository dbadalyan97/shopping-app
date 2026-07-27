import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { DictionaryProvider } from "@/provider/DictionaryProvider";
import { getDictionary } from "@/dictionary/get-dictionary";

import "./globals.css";
import { Navbar } from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getDictionary();

  return {
    title: dictionary.meta.title,
    description: dictionary.meta.description,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dictionary = await getDictionary();

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DictionaryProvider dictionary={dictionary}>
          <div className="mx-auto p-4 sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-6xl">
            <Navbar />
            {children}
          </div>
        </DictionaryProvider>
      </body>
    </html>
  );
}
