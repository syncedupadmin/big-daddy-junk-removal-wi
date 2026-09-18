import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../site-header";
import SiteFooter from "../site-footer";
import ContactActions from "../contact-actions";

export const metadata: Metadata = { title: "How It Works | Big Daddy Junk Removal", description: "Call or text Big Daddy Junk Removal to talk through your pickup and volume-based estimate.", alternates: { canonical: "/how-it-works" }, robots: { index: false, follow: false }, openGraph: { title: "How It Works | Big Daddy Junk Removal", url: "/how-it-works", images: [{ url: "/opengraph-image", width: 1200, height: 630 }] } };

export default function HowItWorksPage() {
  return <><SiteHeader /><main><section className="route-hero route-hero-dark route-hero-photo" aria-labelledby="process-page-title"><div><p className="eyebrow">A direct three-step process</p><h1 id="process-page-title">How a pickup works</h1><p className="route-lede">Start with a call or text. Describe the load, talk through the trailer space, and plan the pickup.</p><ContactActions compact /></div><figure><Image src="/source-assets/gallery-4.jpg" alt="Big Daddy dump trailer equipment" width={768} height={1024} /></figure></section>
    <section className="process-detail" aria-labelledby="steps-title"><div className="process-heading"><p className="eyebrow">How it works</p><h2 id="steps-title">Three steps.<br /><span>One clear start.</span></h2></div><div className="step-stack"><article><b>01</b><div><h3>Share the job</h3><p>Call or text the pickup address, the items that need to go, and an idea of how much there is.</p></div></article><article><b>02</b><div><h3>Talk through trailer space</h3><p>Big Daddy uses an 18-yard dump trailer. The estimate is based on how much of that trailer your job fills.</p></div></article><article><b>03</b><div><h3>Clear the load</h3><p>Once the pickup details are set, Big Daddy loads the items and hauls them away.</p></div></article></div></section>
    <section className="prep-band"><div><p className="eyebrow">Useful details to send</p><h2>A faster first<br /><span>conversation.</span></h2></div><ul><li>Pickup address</li><li>Type of items</li><li>Approximate amount</li><li>Where the items are located</li></ul><ContactActions /></section>
    <section className="next-route next-route-dark"><p className="eyebrow">Need to confirm location?</p><Link href="/service-area">Check the service area <span>↗</span></Link></section></main><SiteFooter /></>;
}
