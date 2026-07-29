import Link from "next/link";
import { SOCIAL_LINKS } from "../lib/site";

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  return (
    <header className={`site-header ${overlay ? "is-overlay" : "is-solid"}`}>
      <Link className="wordmark" href="/" aria-label="Being Tea Co. home">
        <span className="seal">B</span>
        <span>Being Tea Co.</span>
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/learn">Tea library</Link>
        <Link href="/brew">Brew</Link>
        <Link href="/journal">Journal</Link>
        <Link href="/shop">Tea &amp; tools</Link>
        <Link className="nav-cta" href="/about">
          About
        </Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <Link className="wordmark footer-mark" href="/">
        <span className="seal">B</span>
        <span>Being Tea Co.</span>
      </Link>
      <p>Tea culture from leaf to golden light.</p>
      <div className="footer-links">
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/disclosures">Disclosures</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
        <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer">
          Instagram
        </a>
        <a href={SOCIAL_LINKS.x} target="_blank" rel="noreferrer">
          X
        </a>
        <a href={SOCIAL_LINKS.archive} target="_blank" rel="noreferrer">
          Archive
        </a>
      </div>
      <small>
        Independent tea education · Established 2015 ·{" "}
        <Link href="/standards">Editorial standards</Link>
      </small>
    </footer>
  );
}
