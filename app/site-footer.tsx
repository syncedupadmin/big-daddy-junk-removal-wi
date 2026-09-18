import Image from "next/image";
import Link from "next/link";
import { address, phone, phoneLabel } from "./site-content";

export default function SiteFooter() {
  return <footer className="site-footer"><div className="footer-top"><Link className="footer-logo" href="/" aria-label="Big Daddy Junk Removal home"><Image src="/source-assets/logo.jpg" alt="Big Daddy Junk Haul" width={1000} height={1000} /></Link><a className="footer-phone" href={phone}>{phoneLabel} <span>↗</span></a></div><div className="footer-links"><Link href="/services">What we haul</Link><Link href="/how-it-works">How it works</Link><Link href="/service-area">Service area</Link><Link href="/contact">Contact</Link></div><div className="footer-bottom"><span>{address}</span><a href="https://syncedupsolutions.com">Powered by SyncedUp</a></div></footer>;
}
