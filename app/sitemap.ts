import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { return ["/", "/services", "/how-it-works", "/service-area", "/contact"].map((path) => ({ url: `https://big-daddy-junk-removal-wi.vercel.app${path}`, lastModified: new Date() })); }
