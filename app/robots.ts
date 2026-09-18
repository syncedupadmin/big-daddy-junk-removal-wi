import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: "*", disallow: "/" }, sitemap: "https://big-daddy-junk-removal-demo.vercel.app/sitemap.xml" }; }
