import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// ─── Sub-nav links per section of the site ────────────────────────────────────
// These always show the same set of quick links regardless of which tab is hovered.
// Mirrors the most-visited pages, styled like the screenshot (flat, light bar).
// Links map to the visible scroll sections on the homepage
const SUB_LINKS = [
  { label: "About",       href: "#about" },
  { label: "Programmes",  href: "#programs" },
  { label: "Why Ishan Pharmacy", href: "#why-ishan-law" },
  { label: "Placements",  href: "#placements" },
  { label: "Campus",      href: "#campus" },
  { label: "News",        href: "#news" },
  { label: "Admissions",  href: "/admissions" },
  { label: "Contact",     href: "/contact" },
];

// How far down the page (px) before the sub-nav appears
const SHOW_THRESHOLD = 120;

export default function SubNav() {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_THRESHOLD);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // run once on mount
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Only show on the homepage "/"
  if (location.pathname !== "/") return null;

  return (
    <div
      className={`
        hidden md:block fixed left-0 right-0 z-40 transition-all duration-300
        ${visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"}
      `}
      // sits just below the main header (header is ~64px when scrolled)
      style={{ top: "64px" }}
    >
      <div className="bg-white/95 backdrop-blur-md border-b border-border/60 shadow-sm">
        <nav className="flex items-center justify-center gap-0 overflow-x-auto scrollbar-none">
          {SUB_LINKS.map((link) => {
            const isHashLink = link.href.startsWith("#");
            const isActive = !isHashLink && location.pathname === link.href;
            const cls = `shrink-0 px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] border-b-2 transition-all duration-200 whitespace-nowrap ${
              isActive
                ? "border-[hsl(var(--gold))] text-navy"
                : "border-transparent text-foreground/50 hover:text-navy hover:border-[hsl(var(--gold)/0.5)]"
            }`;
            return isHashLink ? (
              <a key={link.href} href={link.href} className={cls}>{link.label}</a>
            ) : (
              <Link key={link.href} to={link.href} className={cls}>{link.label}</Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
