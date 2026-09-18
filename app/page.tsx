import Image from "next/image";
import MobileMenu from "./mobile-menu";

const phone = "tel:+14146009705";

const services = [
  ["01", "Cleanouts", "Clear a home, garage, basement, or move-out without the heavy lifting."],
  ["02", "Demo removal", "When the tear-out is done, we handle the mess left behind."],
  ["03", "Appliances", "Large appliances and hard-to-move items, removed with care."],
  ["04", "Hot tubs", "A practical path out for bulky, built-in backyard equipment."],
  ["05", "Metal pickup", "Free appliance and metal pickup when items are outside the house."],
  ["06", "Tree cleanup", "Small-to-medium tree cut-up and removal."],
];

export default function Home() {
  return <>
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Big Daddy Junk Removal home"><span>BIG DADDY</span><small>JUNK REMOVAL</small></a>
      <nav className="desktop-nav" aria-label="Primary navigation"><a href="#services">What we haul</a><a href="#process">How it works</a><a href="#contact">Contact</a></nav>
      <a className="header-call" href={phone}>Call / text <strong>414-600-9705</strong></a>
      <MobileMenu />
    </header>

    <main id="top">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-image"><Image src="https://images.pexels.com/photos/7464403/pexels-photo-7464403.jpeg?auto=compress&dpr=1&h=1200&w=2000" alt="Worker loading discarded materials for removal" fill priority sizes="(max-width: 800px) 100vw, 58vw" /></div>
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
        <div className="services-main"><div className="section-heading"><p className="eyebrow">What we haul</p><h2 id="services-title">Big things.<br /><span>Handled.</span></h2></div>
          <div className="service-list">{services.map(([number, title, description]) => <article className="service-row" key={number}><span className="service-number">{number}</span><h3>{title}</h3><p>{description}</p><span className="service-arrow" aria-hidden="true">↗</span></article>)}</div>
        </div>
      </section>

      <section id="process" className="process section-shell" aria-labelledby="process-title">
        <div className="section-index">BD / 03</div><div className="process-content"><p className="eyebrow">The simple version</p><h2 id="process-title">You point.<br /><span>We lift.</span></h2><div className="process-steps"><div><b>01</b><h3>Call or text</h3><p>Tell us what needs to go and where it is.</p></div><div><b>02</b><h3>Get an estimate</h3><p>We’ll talk through the job and the trailer space it will take.</p></div><div><b>03</b><h3>Make space</h3><p>We load it up and haul it away.</p></div></div><a className="text-link" href={phone}>Start with a call or text <span>↗</span></a></div>
      </section>

      <section id="contact" className="contact section-shell" aria-labelledby="contact-title"><div className="contact-mark" aria-hidden="true">BD</div><div><p className="eyebrow">Ready when you are</p><h2 id="contact-title">Let’s make<br /><span>some space.</span></h2><p>Call or text for an estimate. Big Daddy Junk Removal is based at 4543 N 100th St, Wauwatosa, WI 53225.</p><a className="button button-orange" href={phone}>414-600-9705 <span>↗</span></a></div></section>
    </main>

    <footer className="site-footer"><div className="footer-top"><a className="wordmark footer-mark" href="#top"><span>BIG DADDY</span><small>JUNK REMOVAL</small></a><a className="footer-phone" href={phone}>414-600-9705 <span>↗</span></a></div><div className="footer-bottom"><span>4543 N 100th St · Wauwatosa, WI 53225</span><a href="https://syncedupsolutions.com">Powered by SyncedUp</a></div></footer>
  </>;
}
