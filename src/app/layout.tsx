import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Blessed - The Movie | A Comedy Film",
  description: "A heartfelt comedy about Jaybird, her bike rental shop, the colorful customers who roll through, and the unbreakable bond with her assistant Linda.",
  keywords: ["Blessed", "comedy", "movie", "film", "bike rental", "indie film", "Jaybird", "Linda"],
  openGraph: {
    title: "Blessed - The Movie",
    description: "A heartfelt comedy about Jaybird, her bike rental shop, and the unbreakable bond with her assistant Linda.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blessed - The Movie",
    description: "A heartfelt comedy about Jaybird, her bike rental shop, and the unbreakable bond with her assistant Linda.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/react-grab/dist/index.global.js"
        />
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
