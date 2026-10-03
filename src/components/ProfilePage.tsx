import { ArrowUpRight, CheckCircle2, CircleCheck, Mail, MapPin, Phone } from 'lucide-react';
import SiteFrame, { PageHero } from '@/components/SiteFrame';

type Section = { heading?: string; intro?: string; paragraphs?: string[]; bullets?: string[] };
type ProfileProps = { current: string; label: string; title: React.ReactNode; intro: string; number: string; sections: Section[]; message?: { name: string; initials: string; text: string } };

export default function ProfilePage({ current, label, title, intro, number, sections, message }: ProfileProps) {
  return <SiteFrame current={current}>
    <PageHero label={label} title={title}><p>{intro}</p></PageHero>
    <section className="profile-page section-space">
      <aside className="profile-index"><span>{number}</span><p>Omashwini<br />Multiservices<br />Private Limited</p></aside>
      <div className="profile-content">{sections.map((section, index) => <article className={`profile-section reveal delay-${index % 3}`} key={`${section.heading}-${index}`}>
        {section.heading && <h2>{section.heading}</h2>}{section.intro && <p className="large-copy">{section.intro}</p>}{section.paragraphs?.map((text, i) => <p key={i}>{text}</p>)}
        {section.bullets && <ul>{section.bullets.map(item => <li key={item}><CheckCircle2 size={17} />{item}</li>)}</ul>}
      </article>)}</div>
    </section>
    {message && <section className="director-message"><div className="message-initial">{message.initials}</div><div><span className="overline">DIRECTOR’S MESSAGE / {message.name.toUpperCase()}</span><p>“{message.text}”</p></div></section>}
  </SiteFrame>;
}

export function OfficePage() { return <SiteFrame current="/offices/"><PageHero label="09 / OUR OFFICES" title={<>Reach us across our<br /><em>named locations.</em></>}><p>Our company identity connects Lucknow, Ayodhya, Bhilai and Patiala.</p></PageHero><section className="office-grid section-space">{[
['Ayodhya', 'Registered Office', 'No. 186, Naka Road, Avon Medical Store, Shiv Nagar, Ayodhya, Uttar Pradesh, 224001'],
['Lucknow', 'Office Location', 'Lucknow, Uttar Pradesh, India'], ['Bhilai', 'Office Location', 'Nehru Chowk, No. 18 Road, Near Bhilai Power House, Chhattisgarh'], ['Patiala', 'Office Location', 'Focal Point, Dolatpur, Near Gurudwara, Patiala, Punjab']
].map(([place, type, address], i) => <article className={`office-location reveal delay-${i % 3}`} key={place}><MapPin size={30}/><span className="overline">{type}</span><h2>{place}</h2><p>{address}</p>{place === 'Ayodhya' && <><a href="tel:+919369606009"><Phone size={16}/>+91 93696 06009</a><a href="mailto:omashwini.2023@gmail.com"><Mail size={16}/>omashwini.2023@gmail.com</a></>}</article>)}</section></SiteFrame>; }

export function DirectorsPage() { const base = process.env.NEXT_PUBLIC_BASE_PATH || ''; return <SiteFrame current="/directors/"><PageHero label="10 / DIRECTORS & MESSAGES" title={<>Guided by<br /><em>responsibility.</em></>}><p>Meet the directors named in the company’s founding documents.</p></PageHero><section className="directors-page section-space">{[
['AK', 'Ashwini Kumar Shukla', 'Every strong company begins with trust. Our focus is to build responsible, practical relationships and to serve every stakeholder with clarity and commitment.'],
['AS', 'Ashish Shukla', 'We believe progress comes from consistent action, respect for people and the confidence to take thoughtful next steps together.']
].map(([initials, name, text], i) => <article className={`director-card reveal delay-${i}`} key={name}><div className="director-mark"><span>{initials}</span><img src={`${base}/omashwini-mark.png`} alt="" /></div><div><span className="overline blue">DIRECTOR</span><h2>{name}</h2><p className="director-quote">“{text}”</p><div className="signature">{name}</div></div></article>)}</section><section className="board-note"><CircleCheck size={26}/><p>The Board of Directors named in the provided company documentation is Ashwini Kumar Shukla and Ashish Shukla.</p></section></SiteFrame>; }
