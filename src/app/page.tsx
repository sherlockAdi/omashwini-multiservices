import { ArrowDown, ArrowUpRight, Building2, UsersRound, BriefcaseBusiness } from 'lucide-react';
import SiteFrame from '@/components/SiteFrame';

const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
export default function Home() {
  return <SiteFrame current="/">
    <section className="home-hero">
      <div className="home-hero-media" style={{ backgroundImage: `linear-gradient(90deg, #063f77 2%, rgba(3,54,108,.73) 45%, rgba(3,50,100,.18)), url(${base}/hero.jpg)` }} />
      <div className="hero-grid" />
      <div className="home-hero-copy reveal"><span className="overline">COMPANY PROFILE / EST. 2023</span><h1>Progress through<br /><em>trusted</em> and<br />professional services.</h1><p>Omashwini Multiservices Private Limited connects people and opportunities with a focused, responsible approach.</p><a className="gold-button" href={`${base}/about/`}>Explore our story <ArrowUpRight size={18} /></a></div>
      <div className="scroll-prompt">SCROLL TO DISCOVER <ArrowDown size={16} /></div><img className="home-mark" src={`${base}/omashwini-mark.png`} alt="Omashwini mark" />
    </section>
    <section className="stats-band"><div><b>2023</b><span>Established in Uttar Pradesh</span></div><div><b>04</b><span>Operating locations named in our identity</span></div><div><b>Active</b><span>Private limited company status</span></div></section>
    <section className="split-intro section-space"><div className="reveal"><span className="overline blue">ABOUT OMASHWINI</span><h2>People are at the heart of <em>every possibility.</em></h2></div><div className="reveal delay-1"><p className="large-copy">We are a people-first multiservices company based in Ayodhya, Uttar Pradesh.</p><p>With a clear legal identity and a forward-looking mindset, we bring care, clarity and practical attention to every connection we build.</p><a className="text-button" href={`${base}/about/`}>Read about us <ArrowUpRight size={17} /></a></div></section>
    <section className="service-band"><div><span className="overline">WHAT GUIDES US</span><h2>One company.<br /><em>Many possibilities.</em></h2></div><div className="service-cards">{[[UsersRound, 'People first', 'Relationships begin with listening and understanding.'], [BriefcaseBusiness, 'Multiservices', 'A practical and open approach to diverse requirements.'], [Building2, 'Reliable foundation', 'A registered private company built for the long term.']].map(([Icon, title, text]) => { const I = Icon as typeof UsersRound; return <article key={title as string}><I size={30} /><h3>{title as string}</h3><p>{text as string}</p></article>; })}</div></section>
  </SiteFrame>;
}
