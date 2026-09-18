"use client";
import { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  return <>
    <button className="menu-button" type="button" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}><span>{open ? "Close" : "Menu"}</span><i aria-hidden="true"><b /><b /></i></button>
    {open && <div className="mobile-nav" id="mobile-nav"><a href="#services" onClick={() => setOpen(false)}>What we haul <span>↗</span></a><a href="#process" onClick={() => setOpen(false)}>How it works <span>↗</span></a><a href="#contact" onClick={() => setOpen(false)}>Contact <span>↗</span></a><a className="button button-orange" href="tel:+14146009705">Call or text <span>↗</span></a></div>}
  </>;
}
