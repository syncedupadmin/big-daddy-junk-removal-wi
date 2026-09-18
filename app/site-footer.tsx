import Image from "next/image";
import Link from "next/link";
import { address, phone, phoneLabel, sms } from "./site-content";

export default function SiteFooter() {
  return <><footer className="site-footer"><div className="footer-top"><Link className="footer-brand" href="/" aria-label="Big Daddy Junk Removal home"><span className="footer-logo"><Image src="/source-assets/logo.jpg" alt="" width={1000} height={1000} /></span><span><strong>Big Daddy</strong><small>Junk Removal · Wauwatosa</small></span></Link><div className="footer-actions"><a href={phone}>Call <span>{phoneLabel}</span></a><a href={sms}>Text for an estimate <b>↗</b></a></div></div><div className="footer-links"><Link href="/services">What we haul</Link><Link href="/how-it-works">How it works</Link><Link href="/service-area">Service area</Link><Link href="/contact">Contact</Link></div><div className="footer-bottom"><span>{address}</span><a href="https://syncedupsolutions.com">Powered by SyncedUp</a></div></footer><div className="mobile-action-bar" aria-label="Quick contact"><a href={phone}>Call now</a><a href={sms}>Text estimate</a></div></>;
}
