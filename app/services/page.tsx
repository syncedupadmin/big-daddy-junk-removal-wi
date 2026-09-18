import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../site-header";
import SiteFooter from "../site-footer";
import ContactActions from "../contact-actions";
import { services } from "../site-content";

export const metadata: Metadata = { title: "What We Haul | Big Daddy Junk Removal", description: "Cleanouts, appliances, demo debris, hot tubs, metal pickup, and tree cleanup in the Milwaukee area.", alternates: { canonical: "/services" }, robots: { index: false, follow: false }, openGraph: { title: "What We Haul | Big Daddy Junk Removal", url: "/services", images: [{ url: "/opengraph-image", width: 1200, height: 630 }] } };

export default function ServicesPage() {
  return <><SiteHeader /><main><section className="route-hero route-hero-orange" aria-labelledby="services-page-title"><div><p className="eyebrow">Junk removal services</p><h1 id="services-page-title">What Big Daddy hauls</h1><p className="route-lede">From one bulky appliance to a full cleanout, start with the items, the address, and how much there is.</p><ContactActions compact /></div><div className="route-aside"><b>06</b><span>services listed</span></div></section>
    <section className="service-directory" aria-labelledby="service-list-title"><div className="directory-intro"><p className="eyebrow">Service list</p><h2 id="service-list-title">Find the closest job type</h2><p>If the job combines several categories, describe the whole load when you call or text.</p></div><div className="directory-list">{services.map(([number,title,description])=><article key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div></section>
    <section className="service-proof" aria-labelledby="real-work-title"><div className="proof-heading"><div><p className="eyebrow">Actual work from Big Daddy</p><h2 id="real-work-title">Equipment and completed loads</h2></div><p>These are business-supplied photos of real trailer loads and equipment.</p></div><div className="proof-grid"><figure><Image src="/source-assets/gallery-1.jpg" alt="Furniture and bulky household items loaded into the Big Daddy trailer" width={768} height={1024} /><figcaption>Bulky household pickup</figcaption></figure><figure><Image src="/source-assets/gallery-4.jpg" alt="Big Daddy dump trailer being unloaded" width={768} height={1024} /><figcaption>Dump trailer in action</figcaption></figure><figure><Image src="/source-assets/gallery-5.jpg" alt="Loaded Big Daddy trailer at a residential pickup" width={768} height={1024} /><figcaption>A full residential haul</figcaption></figure></div></section>
    <section className="estimate-band"><div><p className="eyebrow">Volume-based estimates</p><h2>How trailer space affects the estimate</h2></div><div><p>Big Daddy uses an 18-yard dump trailer and charges based on how much of that trailer the job fills. Call or text with the pickup location, item list, and approximate amount.</p><ContactActions /></div></section>
    <section className="next-route"><p className="eyebrow">Next</p><Link href="/how-it-works">See the three-step process <span>↗</span></Link></section></main><SiteFooter /></>;
}
