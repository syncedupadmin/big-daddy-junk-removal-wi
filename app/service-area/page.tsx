import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../site-header";
import SiteFooter from "../site-footer";
import ContactActions from "../contact-actions";
import { address } from "../site-content";

export const metadata: Metadata = { title: "Service Area | Big Daddy Junk Removal", description: "Big Daddy Junk Removal is based in Wauwatosa and serves Milwaukee-area hauling jobs.", alternates: { canonical: "/service-area" }, robots: { index: false, follow: false }, openGraph: { title: "Service Area | Big Daddy Junk Removal", url: "/service-area", images: [{ url: "/opengraph-image", width: 1200, height: 630 }] } };

export default function ServiceAreaPage() {
  return <><SiteHeader /><main><section className="area-hero" aria-labelledby="area-title"><div><p className="eyebrow">Local junk removal</p><h1 id="area-title">Based in Wauwatosa</h1><p className="route-lede">Big Daddy Junk Removal handles Milwaukee-area hauling from its Wauwatosa base.</p><ContactActions compact /></div><div className="area-marker" aria-hidden="true">WI</div></section>
    <section className="area-detail"><div className="area-copy"><p className="eyebrow">Pickup location</p><h2>Tell us where<br /><span>the job is.</span></h2><p>Call or text the address and job details to confirm whether the pickup location works. The conversation starts with the exact location rather than a broad, assumed radius.</p><ContactActions /></div><figure><Image src="/source-assets/gallery-5.jpg" alt="Big Daddy trailer at a residential pickup in Wauwatosa" width={768} height={1024} /><figcaption>Residential pickup · Business gallery</figcaption></figure></section>
    <section className="address-band"><p className="eyebrow">Business base</p><p>{address}</p></section>
    <section className="next-route"><p className="eyebrow">Ready?</p><Link href="/contact">Choose call or text <span>↗</span></Link></section></main><SiteFooter /></>;
}
