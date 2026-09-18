import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://big-daddy-junk-removal-wi.vercel.app"),
  title: "Big Daddy Junk Removal | Milwaukee Area",
  description: "Big-item junk removal and hauling in the Milwaukee area. Call or text 414-600-9705 for an estimate.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Big Daddy Junk Removal | Milwaukee Area",
    description: "Cleanouts, demo removal, appliance removal, hot tubs, and more. Call or text for an estimate.",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Big Daddy Junk Removal" }],
  },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
