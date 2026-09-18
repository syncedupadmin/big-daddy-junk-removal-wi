import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./mobile-menu";
import { phone, phoneLabel, sms } from "./site-content";

export default function SiteHeader() {
  return <header className="site-header">
    <Link className="brand-lockup" href="/" aria-label="Big Daddy Junk Removal home"><span className="brand-logo"><Image src="/source-assets/logo.jpg" alt="" width={1000} height={1000} priority /></span><span className="brand-name"><strong>Big Daddy</strong><small>Junk Removal</small></span></Link>
    <nav className="desktop-nav" aria-label="Primary navigation"><Link href="/services">What we haul</Link><Link href="/how-it-works">How it works</Link><Link href="/service-area">Service area</Link><Link href="/contact">Contact</Link></nav>
    <div className="header-actions"><a href={phone}>Call</a><a href={sms}>Text</a><span>{phoneLabel}</span></div>
    <MobileMenu />
  </header>;
}
