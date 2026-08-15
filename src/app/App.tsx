import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code2,
  Server,
  Database,
  Wrench,
  Terminal,
  Menu,
  X,
  Trophy,
  BookOpen,
  Zap,
  GraduationCap,
} from "lucide-react";

const NAV_LINKS = ["About", "Skills", "Experience", "Projects", "Education", "Achievements", "Contact"];

const SKILL_CATEGORIES = [
  {
    icon: Code2,
    label: "Languages",
    skills: ["C", "Java", "JavaScript ES6+", "TypeScript"],
  },
  {
    icon: Zap,
    label: "Front-End",
    skills: ["HTML5", "CSS3", "React.js", "Next.js", "Tailwind CSS"],
  },
  {
    icon: Server,
    label: "Back-End",
    skills: ["Node.js", "Express.js", "REST APIs", "OAuth", "JWT", "Razorpay"],
  },
  {
    icon: Database,
    label: "Database",
    skills: ["MongoDB", "Mongoose ODM", "MySQL"],
  },
  {
    icon: Wrench,
    label: "Tools & Platforms",
    skills: ["Git", "GitHub", "Postman", "Vercel", "Docker", "VS Code", "npm"],
  },
];

const PROJECTS = [
  {
    num: "01",
    name: "Travel-Log",
    subtitle: "Travel Journal & Discovery Platform",
    stack: ["Next.js", "NextAuth", "MongoDB", "REST APIs"],
    description:
      "A full-stack travel journaling platform where users log destinations, document experiences, and share personal travel stories. Features secure multi-provider OAuth authentication.",
    points: [
      "Architected full-stack platform using Next.js App Router and MongoDB",
      "Integrated NextAuth v4 with GitHub and Google OAuth providers",
      "Debugged server/client component boundaries and session-handling in App Router",
      "Deployed and iterated via Vercel CI/CD pipeline connected to GitHub",
    ],
    live: "https://travel-log-project-psi.vercel.app",
    repo: "https://github.com/ayushsareen793",
  },
  {
    num: "02",
    name: "GetMeACoffee",
    subtitle: "Creator Funding Platform",
    stack: ["Next.js", "NextAuth", "MongoDB", "Razorpay", "REST APIs"],
    description:
      "A full-stack creator monetisation platform enabling fans to support creators via Razorpay real-time payments, with SSR-powered SEO-friendly public creator pages.",
    points: [
      "Built dynamic creator pages using Next.js SSR for shareable, SEO-ready URLs",
      "Engineered scalable MongoDB system across 3 modules: profiles, pages, transactions",
      "Integrated Razorpay for real-time payment processing with live UI feedback",
      "Validated all REST API endpoints with Postman before each deployment",
    ],
    live: "https://get-me-acoffee-a-creator-funding-pl.vercel.app",
    repo: "https://github.com/ayushsareen793",
  },
];

const ACHIEVEMENTS = [
  {
    icon: Terminal,
    title: "Competitive Programming",
    desc: "Consistently solved algorithmic problems on LeetCode and GeeksforGeeks, strengthening core data structures and problem-solving fundamentals.",
  },
  {
    icon: BookOpen,
    title: "Research Paper",
    desc: '"Campus Connect: A Centralized Platform for Discovering Student Opportunities" — authored and currently under review for publication.',
  },
  {
    icon: Trophy,
    title: "Hackathon Achievements",
    desc: "Top 40 at HackWithDelhi 2024 · Online Round of Code Veda 2025 (6,000+ participants) · Smart India Hackathon 2025 · Troubleshoot Ideathon 2025 — 4 events across 2024–2025.",
  },
  {
    icon: GraduationCap,
    title: "Full Stack Bootcamp",
    desc: "Completed Full Stack Web Development Bootcamp on Udemy (2025), reinforcing production-level development practices across the MERN stack.",
  },
];

function SectionHeader({ num, title }: { num: string; title: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-[#7c3aed] text-sm [font-family:'JetBrains_Mono',monospace]">{num}.</span>
      <h2 className="[font-family:'Chakra_Petch',sans-serif] text-3xl md:text-4xl font-bold text-[#fafafa] tracking-tight">
        {title}
      </h2>
      <div className="flex-1 h-px bg-gradient-to-r from-[rgba(139,92,246,0.4)] to-transparent" />
    </div>
  );
}

function SkillTag({ label }: { label: string }) {
  return (
    <span className="[font-family:'JetBrains_Mono',monospace] text-xs px-2.5 py-1 bg-[rgba(139,92,246,0.07)] border border-[rgba(139,92,246,0.18)] text-[#c4b5fd] rounded-sm">
      {label}
    </span>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div
      className="min-h-screen bg-[#09090b] text-[#fafafa] overflow-x-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Background grid */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.035) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* NAV */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#09090b]/90 backdrop-blur-md border-b border-[rgba(139,92,246,0.15)]"
            : ""
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <button
            onClick={() => scrollTo("about")}
            className="[font-family:'Chakra_Petch',sans-serif] font-bold text-xl tracking-widest text-[#a78bfa] hover:text-[#c4b5fd] transition-colors"
          >
            AS
          </button>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <button
                  onClick={() => scrollTo(link)}
                  className="text-xs text-[#71717a] hover:text-[#a78bfa] transition-colors tracking-widest uppercase [font-family:'JetBrains_Mono',monospace]"
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-[#71717a] hover:text-[#a78bfa] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#09090b]/95 backdrop-blur border-b border-[rgba(139,92,246,0.15)] px-6 py-5">
            <ul className="flex flex-col gap-5">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(link)}
                    className="text-sm text-[#71717a] hover:text-[#a78bfa] transition-colors tracking-widest uppercase [font-family:'JetBrains_Mono',monospace]"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative z-10 min-h-screen flex flex-col justify-center px-6 max-w-6xl mx-auto">
        <div className="pt-24 pb-16">
          <div className="[font-family:'JetBrains_Mono',monospace] text-[#7c3aed] text-sm mb-5 tracking-widest flex items-center gap-2">
            <span className="inline-block w-6 h-px bg-[#7c3aed]" />
            &gt;_ Hello, World!
          </div>

          <h1 className="[font-family:'Chakra_Petch',sans-serif] font-bold leading-none tracking-tight mb-4">
            <span className="block text-6xl sm:text-7xl md:text-9xl bg-gradient-to-r from-[#a78bfa] via-[#c4b5fd] to-[#7c3aed] bg-clip-text text-transparent">
              AYUSH
            </span>
            <span className="block text-6xl sm:text-7xl md:text-9xl text-[#fafafa]">SAREEN</span>
          </h1>

          <div className="[font-family:'JetBrains_Mono',monospace] text-[#a78bfa] text-base md:text-xl mb-7 flex items-center gap-3">
            <span className="text-[#7c3aed] text-xl">▮</span>
            MERN Stack Developer
          </div>

          <p className="text-[#a1a1aa] text-base md:text-lg max-w-2xl leading-relaxed mb-10">
            Full-Stack Developer with hands-on experience building and deploying scalable MERN stack
            applications. Skilled in RESTful API design, JWT/OAuth authentication, and payment gateway
            integration with production deployments via Vercel CI/CD.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:ayushsareen793@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-[#7c3aed] hover:bg-[#6d28d9] text-white transition-colors text-sm [font-family:'JetBrains_Mono',monospace]"
            >
              <Mail size={15} /> Get In Touch
            </a>
            <a
              href="https://github.com/ayushsareen793"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-[rgba(139,92,246,0.35)] hover:border-[#a78bfa] text-[#a78bfa] hover:text-[#c4b5fd] transition-all text-sm [font-family:'JetBrains_Mono',monospace]"
            >
              <Github size={15} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ayushsareen0808"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-[rgba(139,92,246,0.35)] hover:border-[#a78bfa] text-[#a78bfa] hover:text-[#c4b5fd] transition-all text-sm [font-family:'JetBrains_Mono',monospace]"
            >
              <Linkedin size={15} /> LinkedIn
            </a>
          </div>

          <div className="flex flex-wrap gap-6 mt-12 [font-family:'JetBrains_Mono',monospace] text-xs text-[#52525b]">
            <span className="flex items-center gap-2">
              <MapPin size={13} className="text-[#7c3aed]" /> New Delhi, India
            </span>
            <span className="flex items-center gap-2">
              <Phone size={13} className="text-[#7c3aed]" /> +91-8368158779
            </span>
            <span className="flex items-center gap-2">
              <Mail size={13} className="text-[#7c3aed]" /> ayushsareen793@gmail.com
            </span>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 [font-family:'JetBrains_Mono',monospace] text-xs text-[#3f3f46] tracking-[0.3em] animate-bounce">
          ↓ SCROLL
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" className="relative z-10 py-24 px-6 max-w-6xl mx-auto">
        <SectionHeader num="00" title="About Me" />
        <div className="grid md:grid-cols-5 gap-12 mt-14">
          <div className="md:col-span-3 space-y-4">
            <p className="text-[#d4d4d8] leading-relaxed text-base">
              I am a Full-Stack Developer specialising in the MERN ecosystem — building everything from
              polished React interfaces to robust Node.js backends and well-modelled MongoDB schemas.
            </p>
            <p className="text-[#a1a1aa] leading-relaxed text-base">
              My work spans end-to-end: RESTful API architecture, secure authentication flows (JWT, OAuth 2.0,
              NextAuth), third-party payment integrations, and CI/CD pipelines on Vercel. I care deeply about
              writing clean, maintainable code that ships reliably to production.
            </p>
            <p className="text-[#a1a1aa] leading-relaxed text-base">
              Currently in my final year of B.Tech (CSE) at Greater Noida Institute of Technology (GGSIPU),
              actively seeking full-time opportunities where I can build impactful products at scale.
            </p>
          </div>
          <div className="md:col-span-2 space-y-3">
            {[
              { label: "Stack", value: "MERN — MongoDB, Express, React, Node" },
              { label: "Framework", value: "Next.js (App Router + SSR)" },
              { label: "Auth", value: "JWT · OAuth 2.0 · NextAuth v4" },
              { label: "Payments", value: "Razorpay Gateway Integration" },
              { label: "Deploy", value: "Vercel · Docker" },
              { label: "Status", value: "Open to Opportunities ✦" },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="flex gap-3 items-start pb-3 border-b border-[rgba(139,92,246,0.08)]"
              >
                <span className="[font-family:'JetBrains_Mono',monospace] text-[#7c3aed] text-xs min-w-[80px] pt-0.5">
                  {label}:
                </span>
                <span className="text-[#d4d4d8] text-sm leading-snug">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SKILLS ─── */}
      <section id="skills" className="relative z-10 py-24 px-6 max-w-6xl mx-auto">
        <SectionHeader num="01" title="Technical Skills" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-14">
          {SKILL_CATEGORIES.map(({ icon: Icon, label, skills }) => (
            <div
              key={label}
              className="bg-[#111115] border border-[rgba(139,92,246,0.12)] hover:border-[rgba(139,92,246,0.38)] transition-all duration-300 p-6 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 flex items-center justify-center bg-[rgba(139,92,246,0.1)] group-hover:bg-[rgba(139,92,246,0.18)] transition-colors">
                  <Icon size={15} className="text-[#a78bfa]" />
                </div>
                <span className="[font-family:'Chakra_Petch',sans-serif] font-semibold text-sm tracking-wide text-[#e4e4e7]">
                  {label}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <SkillTag key={skill} label={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── EXPERIENCE ─── */}
      <section id="experience" className="relative z-10 py-24 px-6 max-w-6xl mx-auto">
        <SectionHeader num="02" title="Experience" />
        <div className="mt-14 relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-2 bottom-0 w-px bg-gradient-to-b from-[#7c3aed] via-[rgba(124,58,237,0.3)] to-transparent" />

          <div className="pl-10 relative">
            {/* Dot */}
            <div className="absolute left-0 top-1.5 w-[9px] h-[9px] rounded-full bg-[#7c3aed] shadow-[0_0_10px_rgba(124,58,237,0.6)] -translate-x-[4px]" />

            <div className="[font-family:'JetBrains_Mono',monospace] text-[#7c3aed] text-xs tracking-widest mb-2">
              Jul 2025 – Aug 2025 · Remote
            </div>
            <h3 className="[font-family:'Chakra_Petch',sans-serif] text-2xl font-bold text-[#fafafa] mb-1">
              Web Development Intern
            </h3>
            <a
              href="https://skillcrafttech.com"
              className="text-[#a78bfa] text-sm hover:text-[#c4b5fd] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              SkillCraft Technology ↗
            </a>

            <ul className="mt-6 space-y-4">
              {[
                "Developed event-driven interactive applications using vanilla JavaScript, applying DOM manipulation and state management patterns.",
                "Built fully responsive landing pages with CSS Flexbox and media queries, ensuring cross-browser compatibility across mobile and desktop viewports.",
                "Engineered a dynamic quiz application with real-time score tracking, conditional rendering, and local state persistence — concepts directly transferable to React state management.",
              ].map((point, i) => (
                <li key={i} className="flex gap-3 text-[#a1a1aa] text-sm leading-relaxed">
                  <span className="text-[#7c3aed] mt-1 shrink-0 text-xs">▸</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── PROJECTS ─── */}
      <section id="projects" className="relative z-10 py-24 px-6 max-w-6xl mx-auto">
        <SectionHeader num="03" title="Projects" />
        <div className="grid md:grid-cols-2 gap-5 mt-14">
          {PROJECTS.map((p) => (
            <div
              key={p.num}
              className="bg-[#111115] border border-[rgba(139,92,246,0.12)] hover:border-[rgba(139,92,246,0.42)] transition-all duration-300 p-7 flex flex-col group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-5">
                <div>
                  <div className="[font-family:'JetBrains_Mono',monospace] text-[#7c3aed] text-xs mb-1.5 tracking-widest">
                    Project {p.num}
                  </div>
                  <h3 className="[font-family:'Chakra_Petch',sans-serif] text-2xl font-bold text-[#fafafa] leading-tight">
                    {p.name}
                  </h3>
                  <div className="text-[#a78bfa] text-xs mt-1 [font-family:'JetBrains_Mono',monospace]">
                    {p.subtitle}
                  </div>
                </div>
                <div className="flex gap-1 ml-4">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-[#52525b] hover:text-[#a78bfa] transition-colors"
                    aria-label="Live demo"
                  >
                    <ExternalLink size={15} />
                  </a>
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-[#52525b] hover:text-[#a78bfa] transition-colors"
                    aria-label="GitHub repo"
                  >
                    <Github size={15} />
                  </a>
                </div>
              </div>

              <p className="text-[#a1a1aa] text-sm leading-relaxed mb-5">{p.description}</p>

              <ul className="space-y-2.5 flex-1 mb-6">
                {p.points.map((pt, i) => (
                  <li key={i} className="flex gap-2.5 text-xs text-[#71717a] leading-relaxed">
                    <span className="text-[#7c3aed] shrink-0 mt-0.5">▸</span>
                    {pt}
                  </li>
                ))}
              </ul>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 pt-5 border-t border-[rgba(139,92,246,0.08)]">
                {p.stack.map((t) => (
                  <SkillTag key={t} label={t} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── EDUCATION ─── */}
      <section id="education" className="relative z-10 py-24 px-6 max-w-6xl mx-auto">
        <SectionHeader num="04" title="Education" />
        <div className="mt-14 bg-[#111115] border border-[rgba(139,92,246,0.12)] p-8 md:p-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap size={16} className="text-[#7c3aed]" />
                <span className="[font-family:'JetBrains_Mono',monospace] text-[#7c3aed] text-xs tracking-widest uppercase">
                  B.Tech · Computer Science Engineering
                </span>
              </div>
              <h3 className="[font-family:'Chakra_Petch',sans-serif] text-2xl md:text-3xl font-bold text-[#fafafa] mb-2">
                Greater Noida Institute of Technology
              </h3>
              <p className="text-[#a1a1aa] text-sm">GGSIPU · Greater Noida, Uttar Pradesh, India</p>
            </div>
            <div className="md:text-right shrink-0">
              <div className="[font-family:'JetBrains_Mono',monospace] text-[#a78bfa] text-xs tracking-widest mb-2">
                Sept 2022 – June 2026
              </div>
              <div className="[font-family:'Chakra_Petch',sans-serif] font-bold">
                <span className="text-5xl text-[#fafafa]">7.88</span>
                <span className="text-[#7c3aed] text-xl"> / 10.0</span>
              </div>
              <div className="text-[#52525b] text-xs [font-family:'JetBrains_Mono',monospace] mt-1">
                CGPA
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ACHIEVEMENTS ─── */}
      <section id="achievements" className="relative z-10 py-24 px-6 max-w-6xl mx-auto">
        <SectionHeader num="05" title="Achievements" />
        <div className="grid sm:grid-cols-2 gap-4 mt-14">
          {ACHIEVEMENTS.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-[#111115] border border-[rgba(139,92,246,0.12)] hover:border-[rgba(139,92,246,0.38)] transition-all duration-300 p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 flex items-center justify-center bg-[rgba(139,92,246,0.1)] shrink-0">
                  <Icon size={16} className="text-[#a78bfa]" />
                </div>
                <h4 className="[font-family:'Chakra_Petch',sans-serif] font-semibold text-[#e4e4e7] text-sm tracking-wide">
                  {title}
                </h4>
              </div>
              <p className="text-[#a1a1aa] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="relative z-10 py-24 px-6 max-w-6xl mx-auto">
        <SectionHeader num="06" title="Contact" />
        <div className="mt-14">
          <div className="max-w-2xl">
            <p className="text-[#a1a1aa] text-base leading-relaxed mb-10">
              I am currently open to new opportunities — full-time roles, internships, or interesting collaborations.
              Whether you have a role in mind or just want to connect, my inbox is always open.
            </p>

            <a
              href="mailto:ayushsareen793@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#7c3aed] hover:bg-[#6d28d9] text-white transition-colors text-sm [font-family:'JetBrains_Mono',monospace] mb-12"
            >
              <Mail size={16} />
              ayushsareen793@gmail.com
            </a>

            <div className="flex flex-wrap gap-6">
              <a
                href="https://github.com/ayushsareen793"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#52525b] hover:text-[#a78bfa] transition-colors text-sm [font-family:'JetBrains_Mono',monospace]"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ayushsareen0808"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#52525b] hover:text-[#a78bfa] transition-colors text-sm [font-family:'JetBrains_Mono',monospace]"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <a
                href="tel:+918368158779"
                className="flex items-center gap-2 text-[#52525b] hover:text-[#a78bfa] transition-colors text-sm [font-family:'JetBrains_Mono',monospace]"
              >
                <Phone size={16} /> +91-8368158779
              </a>
              <span className="flex items-center gap-2 text-[#52525b] text-sm [font-family:'JetBrains_Mono',monospace]">
                <MapPin size={16} /> New Delhi, India
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-[rgba(139,92,246,0.1)] py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="[font-family:'Chakra_Petch',sans-serif] text-[#a78bfa] font-bold tracking-widest text-sm">
            AS
          </span>
          <p className="text-[#3f3f46] text-xs [font-family:'JetBrains_Mono',monospace]">
            © 2025 Ayush Sareen · Designed & Built with React + Tailwind CSS
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/ayushsareen793"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3f3f46] hover:text-[#7c3aed] transition-colors"
            >
              <Github size={15} />
            </a>
            <a
              href="https://www.linkedin.com/in/ayushsareen0808"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3f3f46] hover:text-[#7c3aed] transition-colors"
            >
              <Linkedin size={15} />
            </a>
            <a
              href="mailto:ayushsareen793@gmail.com"
              className="text-[#3f3f46] hover:text-[#7c3aed] transition-colors"
            >
              <Mail size={15} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
