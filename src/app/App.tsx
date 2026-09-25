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
  GraduationCap,
  Check,
  FileText,
  Award,
} from "lucide-react";

const NAV_LINKS = ["About", "Skills", "Experience", "Projects", "Education", "Certifications", "Achievements", "Contact", "Resume"];

const CERTIFICATIONS = [
  {
    title: "Foundations of Prompt Engineering",
    issuer: "AWS Training & Certification",
    date: "August 2026",
  },
  {
    title: "The Complete Full-Stack Web Development Bootcamp",
    issuer: "Udemy · Dr. Angela Yu (61.5 hours)",
    date: "July 2025",
  },
];

const SKILL_CATEGORIES = [
  {
    icon: Code2,
    label: "Languages",
    skills: ["Java", "JavaScript", "TypeScript"],
  },
  {
    icon: Server,
    label: "Front-End",
    skills: ["HTML5", "CSS3", "React.js", "Redux", "Context API", "Next.js", "Tailwind CSS"],
  },
  {
    icon: Database,
    label: "Back-End",
    skills: ["Node.js", "Express.js", "RESTful APIs", "OAuth Authentication", "JWT", "Payment Integration"],
  },
  {
    icon: Database,
    label: "Database",
    skills: ["MongoDB", "Mongoose ODM", "MySQL"],
  },
  {
    icon: Wrench,
    label: "Tools & Platforms",
    skills: ["Git", "GitHub", "npm", "VS Code", "Postman", "Vercel", "Docker"],
  },
];

const PROJECTS = [
  {
    num: "01",
    name: "Travel-Log",
    subtitle: "Travel Journal & Discovery Platform",
    stack: ["Next.js", "NextAuth", "MongoDB", "Cloudinary", "Mapbox", "REST APIs"],
    description:
      "A full-stack travel journaling platform for publishing geotagged travel logs with cover photos, hidden gems, and tips, plus discovery via an interactive Mapbox map, search, and category filters.",
    points: [
      "Architected full-stack platform using Next.js App Router and MongoDB for geotagged travel logs and discovery",
      "Implemented NextAuth OAuth 2.0 (GitHub/Google) with auto user provisioning and direct browser-to-Cloudinary uploads",
      "Designed a MongoDB indexing strategy (createdAt + .lean()) that cut API response time 41% (887ms → 527ms), eliminating collection scans across 8,000+ records",
      "Verified all endpoints via Postman during development; shipped via Vercel CI/CD with SSR for SEO-friendly URLs and zero-downtime deploys",
    ],
    live: "https://travel-log-project-psi.vercel.app",
    repo: "https://github.com/ayushsareen793/Travel-Log-Project",
  },
  {
    num: "02",
    name: "GetMeACoffee",
    subtitle: "Creator Funding Platform",
    stack: ["Next.js", "NextAuth", "MongoDB", "Razorpay", "REST APIs"],
    description:
      "A full-stack creator monetization platform with personalized /username pages and real-time Razorpay payments, backed by a MongoDB schema for users, profiles, and transactions.",
    points: [
      "Built personalized /username creator pages (Tailwind dark-theme UI) with real-time Razorpay payments and live UI feedback",
      "Engineered server-side Razorpay webhook signature verification to block spoofed/replayed payments, plus collision-safe username generation",
      "Shipped a live top-10 supporters leaderboard with names and messages",
      "Optimized profile lookups with compound MongoDB indexing, cutting lookup time 81% (27ms → 5ms) across 5,000+ records; tested the full payment flow across 10+ Razorpay sandbox transactions and deployed via Vercel CI/CD",
    ],
    live: "https://get-me-acoffee-a-creator-funding-pl.vercel.app",
    repo: "https://github.com/ayushsareen793/GetMeACOFFEE-A-Creator-Funding-Platform",
  },
];

const ACHIEVEMENTS = [
  {
    icon: Terminal,
    title: "Competitive Programming",
    desc: "Solved 200+ algorithmic problems across LeetCode, GeeksforGeeks, and takeUforward, strengthening core data structure and problem-solving skills.",
  },
  {
    icon: BookOpen,
    title: "Research Paper",
    desc: 'First-authored "CampusConnect: A Centralized Web Platform for Discovering Student Opportunities," published in the International Journal of Computer Science Languages (IJCSL), Vol. 4, Issue 2, 2026, ISSN: 3048-944X.',
  },
  {
    icon: Trophy,
    title: "Hackathon Achievements",
    desc: "Secured a Top 40 rank at HackWithDelhi 2024; advanced to the online round of Code Veda 2025 among 6,000+ participants; also competed in Smart India Hackathon 2025 and Troubleshoot Ideathon 2025.",
  },
];

const EMAIL = "ayushsareen793@gmail.com";

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
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    if (id === "Resume") {
      window.open("/resume.pdf", "_blank");
      setMenuOpen(false);
      return;
    }
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const copyEmail = async (e: React.MouseEvent) => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = EMAIL;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      className="min-h-screen bg-[#09090b] text-[#fafafa] overflow-x-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Toast Notification */}
      {copied && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[60] flex items-center gap-2 px-5 py-3 bg-[#111115] border border-[#7c3aed] text-[#a78bfa] text-sm [font-family:'JetBrains_Mono',monospace] shadow-[0_0_20px_rgba(124,58,237,0.3)] animate-[fadeIn_0.3s_ease-out]">
          <Check size={14} className="text-[#7c3aed]" />
          Email copied to clipboard!
        </div>
      )}

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
            onClick={() => scrollTo("About")}
            className="[font-family:'Chakra_Petch',sans-serif] font-bold text-xl tracking-widest text-[#a78bfa] hover:text-[#c4b5fd] transition-colors cursor-pointer"
          >
            AS
          </button>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <button
                  onClick={() => scrollTo(link)}
                  className="text-xs text-[#71717a] hover:text-[#a78bfa] transition-colors tracking-widest uppercase [font-family:'JetBrains_Mono',monospace] cursor-pointer"
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-[#71717a] hover:text-[#a78bfa] transition-colors cursor-pointer"
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
                    className="text-sm text-[#71717a] hover:text-[#a78bfa] transition-colors tracking-widest uppercase [font-family:'JetBrains_Mono',monospace] cursor-pointer"
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
            Full-Stack Developer
          </div>

          <p className="text-[#a1a1aa] text-base md:text-lg max-w-2xl leading-relaxed mb-10">
            Full-Stack Developer skilled in the MERN and Next.js ecosystem, with two live applications
            featuring real payment integration and secure multi-provider authentication (OAuth, JWT).
            Proficient in RESTful API design, MongoDB, and shipping via CI/CD, with hands-on debugging of
            real issues in session management and App Router architecture.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${EMAIL}`}
              onClick={copyEmail}
              className="flex items-center gap-2 px-6 py-3 bg-[#7c3aed] hover:bg-[#6d28d9] text-white transition-colors text-sm [font-family:'JetBrains_Mono',monospace] cursor-pointer"
            >
              <Mail size={15} /> Get In Touch
            </a>
            <a
              href="https://github.com/ayushsareen793"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-[rgba(139,92,246,0.35)] hover:border-[#a78bfa] text-[#a78bfa] hover:text-[#c4b5fd] transition-all text-sm [font-family:'JetBrains_Mono',monospace] cursor-pointer"
            >
              <Github size={15} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ayush-sareen-792283255"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-[rgba(139,92,246,0.35)] hover:border-[#a78bfa] text-[#a78bfa] hover:text-[#c4b5fd] transition-all text-sm [font-family:'JetBrains_Mono',monospace] cursor-pointer"
            >
              <Linkedin size={15} /> LinkedIn
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-[rgba(139,92,246,0.35)] hover:border-[#a78bfa] text-[#a78bfa] hover:text-[#c4b5fd] transition-all text-sm [font-family:'JetBrains_Mono',monospace] cursor-pointer"
            >
              <FileText size={15} /> Resume
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
              <Mail size={13} className="text-[#7c3aed]" /> {EMAIL}
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
              I am a Full-Stack Developer specialising in the MERN and Next.js ecosystem — building
              everything from polished React interfaces to robust Node.js backends and well-modelled
              MongoDB schemas.
            </p>
            <p className="text-[#a1a1aa] leading-relaxed text-base">
              My work spans end-to-end: RESTful API architecture, secure multi-provider authentication
              (JWT, OAuth 2.0, NextAuth), real payment integrations, and CI/CD pipelines on Vercel. I've
              shipped two live applications and hands-on debugged real issues in session management and
              App Router architecture.
            </p>
            <p className="text-[#a1a1aa] leading-relaxed text-base">
              B.Tech (CSE) graduate actively seeking full-time opportunities where I can build impactful
              products at scale and contribute to production-grade systems.
            </p>
          </div>
          <div className="md:col-span-2 space-y-3">
            {[
              { label: "Stack", value: "MERN — MongoDB, Express, React, Node" },
              { label: "Framework", value: "Next.js (App Router + SSR)" },
              { label: "Auth", value: "JWT · OAuth 2.0 · NextAuth" },
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
            <div className="absolute left-0 top-1.5 w-[9px] h-[9px] rounded-full bg-[#7c3aed] shadow-[0_0_10px_rgba(124,58,237,0.6)]" />

            <div className="[font-family:'JetBrains_Mono',monospace] text-xs text-[#7c3aed] mb-2 tracking-wide">
              Jul – Aug 2025
            </div>
            <h3 className="[font-family:'Chakra_Petch',sans-serif] text-xl font-semibold text-[#fafafa] mb-1">
              Web Development Intern
            </h3>
            <div className="text-[#a78bfa] text-sm mb-4">SkillCraft Technology · Remote</div>
            <ul className="space-y-3">
              {[
                "Built 3 vanilla JS (ES6+) apps: a stopwatch with event-driven DOM manipulation and state management, a landing page with responsive design (CSS3 Flexbox, Grid, media queries), and a quiz app with real-time scoring and localStorage persistence.",
                "Wrote modular, reusable JavaScript functions and responsive CSS architectures that directly translated into faster React component design and cleaner Next.js page structures.",
                "Debugged DOM state edge cases and timing bugs without framework abstractions, solidifying the underlying mechanics now applied to React state logic and Next.js App Router session handling.",
              ].map((point, i) => (
                <li key={i} className="flex gap-3 text-[#a1a1aa] text-sm leading-relaxed">
                  <span className="text-[#7c3aed] mt-1">▸</span>
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
        <div className="mt-14 space-y-8">
          {PROJECTS.map((project) => (
            <div
              key={project.num}
              className="bg-[#111115] border border-[rgba(139,92,246,0.12)] hover:border-[rgba(139,92,246,0.38)] transition-all duration-300 p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <span className="[font-family:'JetBrains_Mono',monospace] text-[#7c3aed] text-xs">
                    {project.num}.
                  </span>
                  <h3 className="[font-family:'Chakra_Petch',sans-serif] text-2xl font-bold text-[#fafafa] mt-1">
                    {project.name}
                  </h3>
                  <div className="text-[#a78bfa] text-sm mt-1">{project.subtitle}</div>
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 bg-[#7c3aed] hover:bg-[#6d28d9] text-white transition-colors text-xs [font-family:'JetBrains_Mono',monospace] cursor-pointer"
                  >
                    <ExternalLink size={13} /> Live Demo
                  </a>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 border border-[rgba(139,92,246,0.35)] hover:border-[#a78bfa] text-[#a78bfa] transition-all text-xs [font-family:'JetBrains_Mono',monospace] cursor-pointer"
                  >
                    <Github size={13} /> Repo
                  </a>
                </div>
              </div>
              <p className="text-[#a1a1aa] text-sm leading-relaxed mb-5">{project.description}</p>
              <ul className="space-y-2 mb-5">
                {project.points.map((point, i) => (
                  <li key={i} className="flex gap-3 text-[#a1a1aa] text-sm leading-relaxed">
                    <span className="text-[#7c3aed] mt-1">▸</span>
                    {point}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <SkillTag key={tech} label={tech} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── EDUCATION ─── */}
      <section id="education" className="relative z-10 py-24 px-6 max-w-6xl mx-auto">
        <SectionHeader num="04" title="Education" />
        <div className="mt-14 bg-[#111115] border border-[rgba(139,92,246,0.12)] p-8 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
          <div className="w-12 h-12 flex items-center justify-center bg-[rgba(139,92,246,0.1)] shrink-0">
            <GraduationCap size={22} className="text-[#a78bfa]" />
          </div>
          <div className="flex-1">
            <h3 className="[font-family:'Chakra_Petch',sans-serif] text-xl font-semibold text-[#fafafa]">
              Bachelor of Technology, Computer Science Engineering
            </h3>
            <div className="text-[#a78bfa] text-sm mt-1">
              Greater Noida Institute of Technology (GGSIPU) · Greater Noida, India
            </div>
            <div className="[font-family:'JetBrains_Mono',monospace] text-xs text-[#71717a] mt-2">
              Sept 2022 – June 2026
            </div>
          </div>
          <div className="[font-family:'JetBrains_Mono',monospace] text-sm text-[#7c3aed] shrink-0">
            CGPA: 7.88 / 10.0
          </div>
        </div>
      </section>

      {/* ─── CERTIFICATIONS ─── */}
      <section id="certifications" className="relative z-10 py-24 px-6 max-w-6xl mx-auto">
        <SectionHeader num="05" title="Certifications" />
        <div className="grid sm:grid-cols-2 gap-4 mt-14">
          {CERTIFICATIONS.map(({ title, issuer, date }) => (
            <div
              key={title}
              className="bg-[#111115] border border-[rgba(139,92,246,0.12)] hover:border-[rgba(139,92,246,0.38)] transition-all duration-300 p-6 flex gap-4"
            >
              <div className="w-8 h-8 flex items-center justify-center bg-[rgba(139,92,246,0.1)] shrink-0">
                <Award size={15} className="text-[#a78bfa]" />
              </div>
              <div>
                <h3 className="[font-family:'Chakra_Petch',sans-serif] font-semibold text-sm text-[#e4e4e7] mb-1.5">
                  {title}
                </h3>
                <div className="text-[#a78bfa] text-xs [font-family:'JetBrains_Mono',monospace] mb-1">
                  {issuer}
                </div>
                <div className="text-[#71717a] text-xs [font-family:'JetBrains_Mono',monospace]">{date}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── ACHIEVEMENTS ─── */}
      <section id="achievements" className="relative z-10 py-24 px-6 max-w-6xl mx-auto">
        <SectionHeader num="06" title="Achievements" />
        <div className="grid sm:grid-cols-2 gap-4 mt-14">
          {ACHIEVEMENTS.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-[#111115] border border-[rgba(139,92,246,0.12)] hover:border-[rgba(139,92,246,0.38)] transition-all duration-300 p-6"
            >
              <div className="w-8 h-8 flex items-center justify-center bg-[rgba(139,92,246,0.1)] mb-4">
                <Icon size={15} className="text-[#a78bfa]" />
              </div>
              <h3 className="[font-family:'Chakra_Petch',sans-serif] font-semibold text-sm text-[#e4e4e7] mb-2">
                {title}
              </h3>
              <p className="text-[#a1a1aa] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="relative z-10 py-24 px-6 max-w-6xl mx-auto">
        <SectionHeader num="07" title="Contact" />
        <div className="mt-14 text-center max-w-xl mx-auto">
          <p className="text-[#a1a1aa] text-base leading-relaxed mb-8">
            Open to full-time opportunities and collaborations. Feel free to reach out — I usually reply within a
            day.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${EMAIL}`}
              onClick={copyEmail}
              className="flex items-center gap-2 px-6 py-3 bg-[#7c3aed] hover:bg-[#6d28d9] text-white transition-colors text-sm [font-family:'JetBrains_Mono',monospace] cursor-pointer"
            >
              <Mail size={15} /> Get In Touch
            </a>
            <a
              href="https://github.com/ayushsareen793"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-[rgba(139,92,246,0.35)] hover:border-[#a78bfa] text-[#a78bfa] hover:text-[#c4b5fd] transition-all text-sm [font-family:'JetBrains_Mono',monospace] cursor-pointer"
            >
              <Github size={15} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ayush-sareen-792283255"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-[rgba(139,92,246,0.35)] hover:border-[#a78bfa] text-[#a78bfa] hover:text-[#c4b5fd] transition-all text-sm [font-family:'JetBrains_Mono',monospace] cursor-pointer"
            >
              <Linkedin size={15} /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 py-8 px-6 border-t border-[rgba(139,92,246,0.1)] text-center [font-family:'JetBrains_Mono',monospace] text-xs text-[#52525b]">
        © {new Date().getFullYear()} Ayush Sareen. Built with React &amp; Tailwind CSS.
      </footer>
    </div>
  );
}
