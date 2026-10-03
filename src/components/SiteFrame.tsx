'use client';

import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useState, type ReactNode } from 'react';

const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
const links = [['Home', '/'], ['About', '/about/'], ['Mission', '/mission/'], ['Services', '/business/'], ['Technology', '/technology/'], ['Directors', '/directors/'], ['Contact', '/offices/']];

function Brand() {
  return <a className="brand" href={`${base}/`} aria-label="Omashwini home"><img src={`${base}/omashwini-mark.png`} alt="" /><span><b>OMASHWINI</b><small>MULTISERVICES PRIVATE LIMITED</small></span></a>;
}

export default function SiteFrame({ children, current }: { children: ReactNode; current?: string }) {
  const [open, setOpen] = useState(false);
  return <><a className="skip" href="#main">Skip to content</a><header className="site-header"><Brand /><button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Close navigation' : 'Open navigation'}>{open ? <X /> : <Menu />}</button><nav className={open ? 'nav open' : 'nav'} aria-label="Main navigation">{links.map(([label, href]) => <a key={href} onClick={() => setOpen(false)} aria-current={current === href ? 'page' : undefined} href={`${base}${href}`}>{label}</a>)}</nav></header><main id="main">{children}</main><footer className="site-footer"><div className="footer-brand"><Brand /><p>Professional services, meaningful connections, and steady progress.</p></div><div><span className="overline">REGISTERED OFFICE</span><address>186 Sheo Nagar Naka, Faizabad RS,<br />Faizabad, Uttar Pradesh, 224001, India</address></div><div><span className="overline">CONNECT</span><a href="mailto:omashwini.2023@gmail.com">omashwini.2023@gmail.com <ArrowUpRight size={15} /></a><a href="tel:+918303677778">+91 83036 77778 <ArrowUpRight size={15} /></a></div><div className="copyright">© {new Date().getFullYear()} Omashwini Multiservices Private Limited <span>CIN: U78300UP2023PTC182052</span></div></footer></>;
}

export function PageHero({ label, title, children }: { label: string; title: ReactNode; children?: ReactNode }) {
  return <section className="page-hero"><div className="page-hero-copy reveal"><span className="overline">{label}</span><h1>{title}</h1>{children}</div><img className="hero-mark" src={`${base}/omashwini-mark.png`} alt="" /></section>;
}
