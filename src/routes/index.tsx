import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Github, Linkedin, Mail, Phone, ArrowUpRight, ArrowDown, ArrowUp, Code2, Server, Database, Wrench, Layers, Terminal, Trophy, BookOpen, Check, Menu, X, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import travelAsset from "@/assets/travel-log.png.asset.json";
import coffeeAsset from "@/assets/creator-funding.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ayush Sareen — Full-Stack Developer" },
      { name: "description", content: "Full-Stack Developer building fast, secure MERN & Next.js products with real payments and OAuth." },
      { property: "og:title", content: "Ayush Sareen — Full-Stack Developer" },
      { property: "og:description", content: "MERN & Next.js developer. Live apps, real payments, measurable performance wins." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const EMAIL = "ayushsareen793@gmail.com";
const GITHUB = "https://github.com/ayushsareen793";
const LINKEDIN = "https://www.linkedin.com/in/ayushsareen0808";
const NAV = ["Work", "About", "Experience", "Contact"];


const SKILLS = [
  { icon: Code2, label: "Languages", items: ["Java", "JavaScript", "TypeScript"] },
  { icon: Layers, label: "Front-End", items: ["HTML5", "CSS3", "React.js", "Redux", "Next.js", "Tailwind CSS"] },
  { icon: Server, label: "Back-End", items: ["Node.js", "Express.js", "RESTful APIs", "OAuth / JWT", "Payment Integration"] },
  { icon: Database, label: "Database", items: ["MongoDB", "Mongoose ODM", "MySQL"] },
  { icon: Wrench, label: "Tools", items: ["Git", "GitHub", "npm", "VS Code", "Postman", "Vercel", "Docker"] },
];

const PROJECTS = [
  {
    num: "01", name: "Travel-Log", subtitle: "Travel Journal & Discovery Platform",
    stat: "−41%", statLabel: "API response time",
    stack: ["Next.js", "NextAuth", "MongoDB", "Cloudinary", "Mapbox"],
    points: [
      "Geotagged travel logs with cover photos, hidden gems and tips — discovered via an interactive Mapbox map, search and filters. Lighthouse 90+.",
      "NextAuth OAuth 2.0 (GitHub/Google) with auto-provisioning; direct browser-to-Cloudinary uploads; REST routes verified in Postman.",
      "MongoDB createdAt index + .lean() cut responses 887ms → 527ms across 8,000+ records. Shipped with Vercel CI/CD and SSR.",
    ],
    live: "https://travel-log-project-psi.vercel.app",
    repo: "https://github.com/ayushsareen793/Travel-Log-Project",
  },
  {
    num: "02", name: "GetMeACoffee", subtitle: "Creator Funding Platform",
    stat: "−81%", statLabel: "profile lookup time",
    stack: ["Next.js", "NextAuth", "MongoDB", "Razorpay", "Server Actions"],
    points: [
      "Personalised /username creator pages with real-time Razorpay payments and a dark Tailwind UI scoring Lighthouse 90+.",
      "Server-side webhook signature verification blocks spoofed/replayed payments; collision-safe usernames and a live top-10 supporters board.",
      "Compound indexing cut lookups 27ms → 5ms across 5,000+ records; payment flow tested over 10+ sandbox transactions.",
    ],
    live: "https://get-me-acoffee-a-creator-funding-pl.vercel.app",
    repo: "https://github.com/ayushsareen793/GetMeACOFFEE-A-Creator-Funding-Platform",
  },
];

const ACHIEVEMENTS = [
  { icon: Terminal, title: "200+ Problems Solved", desc: "Algorithmic problems in Java across LeetCode, GeeksforGeeks and takeUforward." },
  { icon: BookOpen, title: "Published Researcher", desc: "First author of “CampusConnect” in IJCSL, Vol. 4, Issue 2, 2026 (ISSN 3048-944X)." },
  { icon: Trophy, title: "Hackathons", desc: "Top 40 at HackWithDelhi 2024; Code Veda 2025 online round among 6,000+; SIH & Troubleshoot Ideathon 2025." },
];

const CERTS = [
  { title: "Foundations of Prompt Engineering", issuer: "AWS Training & Certification", date: "Aug 2026" },
  { title: "Complete Full-Stack Web Development Bootcamp", issuer: "Udemy · Dr. Angela Yu", date: "Jul 2025" },
];

function Chapter({ number, title, children, id }: { number: string; title: string; children: ReactNode; id: string }) {
  return <section id={id} className="editorial-chapter scroll-mt-20"><div className="chapter-heading"><span className="folio">{number} /</span><h2 className="font-display">{title}</h2></div>{children}</section>;
}

function Index() {
  const [menu, setMenu] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  async function copyEmail() {
    try { await navigator.clipboard.writeText(EMAIL); setCopied(true); setCopyError(false); setTimeout(() => setCopied(false), 2200); }
    catch { setCopyError(true); }
  }
  return <div id="top" className="editorial-page">
    <nav className="editorial-nav" aria-label="Main navigation">
      <Button asChild variant="link" className="brand-link"><a href="#top">AYUSH SAREEN<span className="text-accent">®</span></a></Button>
      <span className="nav-caption">FULL-STACK DEVELOPER<br/>NEW DELHI, INDIA</span>
      <div className="desktop-links">{NAV.map(n => <Button asChild variant="link" key={n}><a href={`#${n === "Work" ? "projects" : n.toLowerCase()}`}>{n}</a></Button>)}</div>
      <Button asChild variant="outline" className="resume-link"><a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Résumé <ArrowUpRight/></a></Button>
      <Button variant="ghost" size="icon" className="mobile-menu" aria-label={menu ? "Close menu" : "Open menu"} aria-expanded={menu} onClick={() => setMenu(!menu)}>{menu ? <X/> : <Menu/>}</Button>
      {menu && <div className="mobile-links">{NAV.map(n => <Button asChild variant="ghost" key={n}><a onClick={() => setMenu(false)} href={`#${n === "Work" ? "projects" : n.toLowerCase()}`}>{n}<ArrowUpRight/></a></Button>)}</div>}
    </nav>

    <main>
      <header className="editorial-intro">
        <div className="intro-topline"><span className="folio">PERSONAL PORTFOLIO — 2026</span><span className="availability"><span/>OPEN TO FULL-TIME ROLES</span></div>
        <h1 className="editorial-name font-display"><span>AYUSH</span><span className="surname">SAREEN<span className="name-period">.</span></span></h1>
        <div className="intro-bottom"><p className="intro-role font-display">FULL STACK.<br/><span className="text-accent">FULL COMMITMENT.</span></p><p className="intro-description">I build fast, secure web products. From the first interface to the last database query — every detail matters.</p><Button asChild variant="outline" className="work-link"><a href="#projects">Explore selected work <ArrowDown/></a></Button></div>
      </header>

      <section id="projects" className="selected-work scroll-mt-20">
        <div className="work-header"><div className="flex items-center gap-4"><span className="folio">01 /</span><h2 className="font-display">SELECTED WORK</h2></div><span className="folio">TWO PRODUCTS. BUILT & SHIPPED.</span></div>
        {PROJECTS.map((p, i) => <article className="project-spread" key={p.num}>
          <div className="project-visual"><a href={p.live} target="_blank" rel="noopener noreferrer" aria-label={`Open ${p.name} live project`} className="project-image-link"><img src={i === 0 ? travelAsset.url : coffeeAsset.url} alt={`${p.name} live website homepage`} loading="lazy" width="1440" height="1000"/><span className="image-open"><ArrowUpRight size={24}/></span></a><div className="image-caption"><span>{p.num} — {p.subtitle}</span><span>LIVE PRODUCT <span className="text-accent">↗</span></span></div></div>
          <div className="project-story"><span className="folio">PROJECT / {p.num}</span><h3 className="font-display project-title">{i === 0 ? 'TRAVEL-LOG' : <>GET ME<br/>A COFFEE</>}</h3><div className="project-metric"><strong className="font-display">{p.stat}</strong><span>{p.statLabel}</span></div><p className="project-summary">{p.points[0]}</p><details className="project-details"><summary>Engineering notes <span>+</span></summary><div>{p.points.slice(1).map(point => <p key={point}>{point}</p>)}</div></details><p className="stack-line">{p.stack.join(' / ')}</p><div className="project-actions"><Button asChild variant="link"><a href={p.live} target="_blank" rel="noopener noreferrer">Live project <ArrowUpRight/></a></Button><Button asChild variant="link"><a href={p.repo} target="_blank" rel="noopener noreferrer">Source <Github/></a></Button></div></div>
        </article>)}
      </section>

      <Chapter number="02" title="THE DEVELOPER" id="about"><div className="about-layout"><p className="about-statement font-display">THINK IN SYSTEMS.<br/><span className="text-accent">BUILD FOR PEOPLE.</span></p><div className="about-copy"><p>I'm Ayush, a full-stack developer based in New Delhi. I care about the whole stack — from a considered React interface to well-modelled MongoDB.</p><p>My work spans REST APIs, secure authentication, real payment integrations and CI/CD. I've debugged session management and App Router issues in production.</p><p>B.Tech (CSE) graduate, seeking full-time roles where I can ship impactful products at scale.</p></div></div><div className="stat-strip">{[["02", "LIVE APPS SHIPPED"], ["200+", "DSA PROBLEMS SOLVED"], ["90+", "LIGHTHOUSE SCORE"]].map(([n, label]) => <div key={label}><strong className="font-display">{n}</strong><span className="folio">{label}</span></div>)}</div><div id="skills" className="skill-ledger scroll-mt-20">{SKILLS.map(({icon: Icon, label, items}) => <div className="skill-row" key={label}><h3><Icon size={16}/>{label}</h3><p>{items.join(' · ')}</p></div>)}</div></Chapter>

      <Chapter number="03" title="EXPERIENCE" id="experience"><div className="experience-layout"><div><span className="folio">JUL — AUG 2025</span><p className="text-muted-foreground mt-3">Remote</p></div><div><h3 className="font-display experience-title">WEB DEVELOPMENT INTERN</h3><p className="text-accent text-xl mt-2">SkillCraft Technology</p><ul className="experience-points"><li>Built 3 projects from scratch in vanilla JavaScript, HTML5 and CSS3: an event-driven stopwatch, a real-time scoring quiz, and a responsive landing page.</li><li>Wrote modular, reusable functions with event-driven DOM manipulation and state management, persisted with localStorage.</li><li>Worked with CSS Grid, Flexbox and media queries; debugged DOM state and timing edge cases — lessons now applied to React and Next.js.</li></ul></div></div></Chapter>

      <Chapter number="04" title="BEYOND THE CODE" id="education"><div className="credentials-layout"><div><span className="folio">EDUCATION</span><h3 className="font-display credential-title">B.TECH / COMPUTER<br/>SCIENCE ENGINEERING</h3><p>Greater Noida Institute of Technology (GGSIPU)</p><p className="text-muted-foreground mt-2">Greater Noida · Sept 2022 – June 2026</p><div className="certificates">{CERTS.map(c => <div key={c.title}><span className="folio">{c.date}</span><h4>{c.title}</h4><p className="text-muted-foreground">{c.issuer}</p></div>)}</div></div><div className="achievements">{ACHIEVEMENTS.map(({icon: Icon,title,desc}) => <div key={title}><Icon size={19} className="text-accent"/><div><h3 className="font-display">{title}</h3><p>{desc}</p></div></div>)}</div></div></Chapter>

      <section id="contact" className="contact-editorial scroll-mt-20"><div className="contact-top"><span className="folio">05 / NEXT CHAPTER</span><span className="availability"><span/>OPEN TO OPPORTUNITIES</span></div><h2 className="font-display">LET’S MAKE<br/><a href={`mailto:${EMAIL}`} className="contact-title-link">IT HAPPEN.<ArrowUpRight/></a></h2><div className="contact-bottom"><div><a href={`mailto:${EMAIL}`} className="email-link">{EMAIL}</a><Button variant="ghost" size="icon" onClick={copyEmail} title="Copy email address" aria-label="Copy email address">{copied ? <Check/> : <Copy/>}</Button><span role="status" className="copy-status">{copied ? 'Copied' : copyError ? 'Please use the email link' : ''}</span></div><div className="social-links"><Button asChild variant="link"><a href={GITHUB} target="_blank" rel="noopener noreferrer">GitHub <Github/></a></Button><Button asChild variant="link"><a href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn <Linkedin/></a></Button><Button asChild variant="link"><a href="tel:+918368158779" title="+91-8368158779">Call <Phone/></a></Button></div></div></section>
    </main>
    <footer className="editorial-footer"><span>© {new Date().getFullYear()} AYUSH SAREEN</span><span>NEW DELHI, INDIA</span><Button asChild variant="link"><a href="#top">Back to top <ArrowUp/></a></Button></footer>
  </div>;
}
