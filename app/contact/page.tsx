import type { Metadata } from "next";
import SiteHeader from "../site-header";
import SiteFooter from "../site-footer";
import { address, phone, phoneLabel } from "../site-content";

export const metadata: Metadata = { title: "Contact | Big Daddy Junk Removal", description: "Call or text Big Daddy Junk Removal at 414-600-9705 for an estimate.", alternates: { canonical: "/contact" }, robots: { index: false, follow: false }, openGraph: { title: "Contact | Big Daddy Junk Removal", url: "/contact", images: [{ url: "/opengraph-image", width: 1200, height: 630 }] } };

export default function ContactPage() {
  return <><SiteHeader /><main><section className="contact-hero" aria-labelledby="contact-page-title"><p className="eyebrow">Let’s talk hauling</p><h1 id="contact-page-title">Make room<br /><span>for better.</span></h1><a className="contact-big-phone" href={phone}>{phoneLabel} <span>↗</span></a></section><section className="contact-detail"><div className="section-index">THE DIRECT LINE</div><div><p className="eyebrow">Call or text</p><h2>One number.<br /><span>No maze.</span></h2><p className="contact-instruction">The public listing asks customers to call or text for an estimate. No online form is presented here, so your request goes through the real phone route.</p><a className="button button-orange" href={phone}>Call or text {phoneLabel} <span>↗</span></a></div><div className="contact-address"><p className="eyebrow">Public address</p><p>{address}</p></div></section></main><SiteFooter /></>;
}
