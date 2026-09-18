"use client";
import { useState } from "react";
import Link from "next/link";
import { phone, sms } from "./site-content";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  return <>
    <button className="menu-button" type="button" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}><span>{open ? "Close" : "Menu"}</span><i aria-hidden="true"><b /><b /></i></button>
    {open && <div className="mobile-nav" id="mobile-nav"><Link href="/services" onClick={() => setOpen(false)}>What we haul <span>↗</span></Link><Link href="/how-it-works" onClick={() => setOpen(false)}>How it works <span>↗</span></Link><Link href="/service-area" onClick={() => setOpen(false)}>Service area <span>↗</span></Link><Link href="/contact" onClick={() => setOpen(false)}>Contact <span>↗</span></Link><div className="mobile-menu-actions"><a className="button button-orange" href={phone}>Call now <span>↗</span></a><a className="button button-paper" href={sms}>Text for estimate <span>↗</span></a></div></div>}
  </>;
}
