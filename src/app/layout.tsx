import type { Metadata } from "next";
import "./globals.scss";


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
      <body >
        {children}
      </body>
    </html>
  );
}
