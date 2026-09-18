import { phone, sms } from "./site-content";

export default function ContactActions({ compact = false }: { compact?: boolean }) {
  return <div className={compact ? "contact-actions compact" : "contact-actions"}><a className="button button-orange" href={phone}>Call now <span>↗</span></a><a className="button button-outline" href={sms}>Text for an estimate <span>↗</span></a></div>;
}
