import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "../site-header";
import SiteFooter from "../site-footer";
import ContactActions from "../contact-actions";
import { address, phoneLabel } from "../site-content";

export const metadata: Metadata = { title: "Contact | Big Daddy Junk Removal", description: "Call or text Big Daddy Junk Removal at 414-600-9705 for an estimate.", alternates: { canonical: "/contact" }, robots: { index: false, follow: false }, openGraph: { title: "Contact | Big Daddy Junk Removal", url: "/contact", images: [{ url: "/opengraph-image", width: 1200, height: 630 }] } };

export default function ContactPage() {
  return <><SiteHeader /><main><section className="contact-hero" aria-labelledby="contact-page-title"><div><p className="eyebrow">Start the estimate</p><h1 id="contact-page-title">Call or text Big Daddy</h1><p>Choose the route that works for you. For a text, include the pickup address, what needs to go, and roughly how much there is.</p><ContactActions /></div><figure><Image src="/source-assets/gallery-4.jpg" alt="Big Daddy Junk Removal dump trailer" width={768} height={1024} /></figure></section>
    <section className="contact-detail"><div><p className="eyebrow">One direct number</p><h2>{phoneLabel}</h2><p className="contact-instruction">Use the same number for a phone call or text message. There is no online form to slow down the first conversation.</p><ContactActions /></div><aside><p className="eyebrow">Helpful to include</p><ul><li>Pickup address</li><li>Item description</li><li>Approximate amount</li></ul><p className="eyebrow address-label">Wauwatosa base</p><p>{address}</p></aside></section></main><SiteFooter /></>;
}
