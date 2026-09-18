import Image from "next/image";
import Link from "next/link";
import SiteHeader from "./site-header";
import SiteFooter from "./site-footer";
import { phone, services } from "./site-content";

export default function Home() {
  return <>
    <SiteHeader />

    <main id="top">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-image"><Image src="/source-assets/gallery-5.jpg" alt="A Big Daddy Junk Removal trailer loaded for hauling in a Wauwatosa neighborhood" fill priority sizes="(max-width: 800px) 100vw, 52vw" /></div>
        <div className="hero-grid" aria-hidden="true"><span /><span /><span /><span /></div>
        <div className="hero-copy">
          <p className="eyebrow"><span className="orange-bar" /> Milwaukee area hauling</p>
          <h1 id="hero-title">CLEAR<br /><em>THE BIG</em><br />STUFF.</h1>
          <p className="hero-dek">Big-item junk removal for the things that are too heavy, too awkward, or simply too much.</p>
          <a className="button button-orange" href={phone}>Call or text for an estimate <span>↗</span></a>
        </div>
        <div className="hero-stamp" aria-label="18 yard dump trailer"><b>18</b><span>YARD<br />DUMP<br />TRAILER</span></div>
        <a className="scroll-cue" href="#services">Scroll to see what we haul <span>↓</span></a>
      </section>

      <section className="intro section-shell" aria-labelledby="intro-title">
        <div className="section-index">BD / 01</div>
        <div><p className="eyebrow">No nonsense. Just gone.</p><h2 id="intro-title">Room to breathe<br /><span>starts here.</span></h2></div>
        <p className="intro-copy">Big Daddy Junk Removal helps homeowners get rid of the bulky stuff that gets in the way. We bring an 18-yard dump trailer and charge based on how much of the trailer your job fills.</p>
      </section>

      <section id="services" className="services section-shell" aria-labelledby="services-title">
        <div className="section-index">BD / 02</div>
        <div className="services-main"><div className="section-heading"><p className="eyebrow">What we haul</p><h2 id="services-title">Big things.<br /><span>Handled.</span></h2><Link className="text-link dark-link" href="/services">See all services <span>↗</span></Link></div>
          <div className="service-list">{services.map(([number, title, description]) => <article className="service-row" key={number}><span className="service-number">{number}</span><h3>{title}</h3><p>{description}</p><span className="service-arrow" aria-hidden="true">↗</span></article>)}</div>
        </div>
      </section>

      <section id="process" className="process section-shell" aria-labelledby="process-title">
        <div className="section-index">BD / 03</div><div className="process-content"><p className="eyebrow">The simple version</p><h2 id="process-title">You point.<br /><span>We lift.</span></h2><div className="process-steps"><div><b>01</b><h3>Call or text</h3><p>Tell us what needs to go and where it is.</p></div><div><b>02</b><h3>Get an estimate</h3><p>We’ll talk through the job and the trailer space it will take.</p></div><div><b>03</b><h3>Make space</h3><p>We load it up and haul it away.</p></div></div><Link className="text-link" href="/how-it-works">See how it works <span>↗</span></Link></div>
      </section>

      <section id="contact" className="contact section-shell" aria-labelledby="contact-title"><div className="contact-mark" aria-hidden="true">BD</div><div><p className="eyebrow">Ready when you are</p><h2 id="contact-title">Let’s make<br /><span>some space.</span></h2><p>Call or text for an estimate. Big Daddy Junk Removal is based at 4543 N 100th St, Wauwatosa, WI 53225.</p><a className="button button-orange" href={phone}>414-600-9705 <span>↗</span></a></div></section>
    </main>

    <SiteFooter />
  </>;
}
