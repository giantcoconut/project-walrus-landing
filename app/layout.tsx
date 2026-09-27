import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "walrus | News-to-claims signal engine",
  description:
    "walrus turns breaking headlines into structured claims and stake-backed signals for real-time narrative discovery."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
