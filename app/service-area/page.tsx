import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../site-header";
import SiteFooter from "../site-footer";
import { address, phone } from "../site-content";

export const metadata: Metadata = { title: "Service Area | Big Daddy Junk Removal", description: "Big Daddy Junk Removal is based in Wauwatosa and publicly listed for the Milwaukee area.", alternates: { canonical: "/service-area" }, robots: { index: false, follow: false }, openGraph: { title: "Service Area | Big Daddy Junk Removal", url: "/service-area", images: [{ url: "/opengraph-image", width: 1200, height: 630 }] } };

export default function ServiceAreaPage() {
  return <><SiteHeader /><main><section className="area-hero" aria-labelledby="area-title"><div className="area-pin" aria-hidden="true">WI</div><div><p className="eyebrow">Where we’re based</p><h1 id="area-title">Wauwatosa.<br /><span>Milwaukee area.</span></h1><p className="route-lede">Big Daddy Junk Removal is publicly listed at a Wauwatosa address and in Milwaukee-area directories.</p></div></section><section className="area-detail"><div className="section-index">THE ADDRESS</div><div className="area-address"><p className="eyebrow">Start here</p><h2>{address}</h2><p>That is the public business address currently available. No precise service radius is published, so call or text to confirm whether a specific pickup location works.</p><a className="button button-orange" href={phone}>Call or text to confirm <span>↗</span></a></div></section><section className="area-note"><p className="eyebrow">A clear answer</p><h2>No invented<br /><span>radius.</span></h2><p>Tell us where the job is and what needs to go. We’ll confirm the details directly.</p></section><section className="next-route"><p className="eyebrow">Next up</p><Link href="/contact">Get the number <span>↗</span></Link></section></main><SiteFooter /></>;
}
