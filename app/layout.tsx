import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kaya — Wellness Micro-Learning",
  description:
    "Deep, calm, beautifully designed courses on anatomy, breathwork, mindfulness, and yoga.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="z-content">{children}</div>
      </body>
    </html>
  );
}
