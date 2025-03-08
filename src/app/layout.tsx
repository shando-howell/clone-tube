import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs"

import "./globals.css";

export const metadata: Metadata = {
  title: "CloneTube",
  description: "CloneTube video sharing platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl="/">
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
