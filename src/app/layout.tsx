import type { Metadata } from "next";
import "./globals.scss";

import {Poppins} from 'next/font/google'

const  Inter = Poppins({subsets: ["latin"], weight:['300', '400',"500",'600']})
export const metadata: Metadata = {
  title: "Gustavo Araujo",
  description: "Gustavo Araujo é desenvolvedor web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Inter.className}>
        {children}
      </body>
    </html>
  );
}
