import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./mobile-menu";
import { phone, phoneLabel } from "./site-content";

export default function SiteHeader() {
  return <header className="site-header">
    <Link className="brand-logo" href="/" aria-label="Big Daddy Junk Removal home"><Image src="/source-assets/logo.jpg" alt="Big Daddy Junk Haul" width={1000} height={1000} priority /></Link>
    <nav className="desktop-nav" aria-label="Primary navigation"><Link href="/services">What we haul</Link><Link href="/how-it-works">How it works</Link><Link href="/service-area">Service area</Link><Link href="/contact">Contact</Link></nav>
    <a className="header-call" href={phone}>Call / text <strong>{phoneLabel}</strong></a>
    <MobileMenu />
  </header>;
}
