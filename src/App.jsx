import { useEffect, useRef, useState } from "react";
 
/* -------------------------------------------------------------------------- */
/*  Content — every item below comes from Ragul V's resume                     */
/* -------------------------------------------------------------------------- */
 
const PROFILE = {
  name: "RAGUL V",
  role: "Data Analyst",
  summary:
    "Aspiring Data Analyst with a foundation in Python, MySQL, data preprocessing, and database fundamentals. Hands-on experience gained through academic projects and a Full Stack Developer internship, including organizing and processing data, feature extraction, model evaluation, and database operations. Eager to apply analytical thinking, attention to detail, and problem-solving skills in a Junior Data Analyst role.",
  email: "ragulmca2004@gmail.com",
  phone: "+91 8610728830",
  github: "https://github.com/RAGUL72-eng",
  githubHandle: "RAGUL72-eng",
  linkedin: "https://www.linkedin.com/in/v-Ragul",
  linkedinHandle: "v-Ragul",
  workMode: "Hybrid",
};
 
const NAV = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
 
const EXPERIENCE = [
  {
    role: "Full Stack Developer Intern",
    company: "Nurture Infotech",
    period: "Jul 2025 – Aug 2025",
    points: [
      "Worked across front-end and back-end development, gaining practical exposure to application and database workflows.",
      "Contributed to building and maintaining web application features under the guidance of senior developers.",
      "Applied HTML5, CSS3, JavaScript, backend concepts, and database fundamentals to implement application features.",
    ],
  },
];
 
const SKILL_GROUPS = [
  {
    title: "SQL / MySQL",
    items: ["MySQL fundamentals", "CRUD operations", "Database schema design"],
  },
  {
    title: "Python / Pandas / NumPy",
    items: [
      "Python",
      "Pandas",
      "NumPy",
      "Data preprocessing",
      "Feature extraction",
      "Dataset preparation",
      "Data validation",
      "Pattern identification",
      "Model evaluation",
    ],
  },
  {
    title: "Power BI / Excel",
    items: [
      "Power BI",
      "Excel",
      "Pivot Tables",
      "Charts & formulas",
      "Data cleaning",
      "KPIs",
      "Interactive filters",
      "Reporting",
    ],
  },
  {
    title: "Flask / HTML / CSS / JS",
    items: ["Flask", "HTML5", "CSS3", "JavaScript fundamentals"],
  },
];
 
const SOFT_SKILLS = [
  "Analytical thinking",
  "Problem-solving",
  "Attention to detail",
  "Communication",
  "Teamwork",
];
 
const PROJECTS = [
  {
    title: "Fresh Mart Sales & Business Performance Dashboard",
    stack: ["Excel"],
    points: [
      "Created an interactive Excel dashboard to analyze sales and business performance using Pivot Tables, charts, formulas, and data-cleaning techniques.",
      "Presented key business insights through visual reports and dashboard metrics.",
    ],
  },
  {
    title: "Hospital Management System",
    stack: ["SQL", "MySQL"],
    points: [
      "Developed a SQL-based database project for managing hospital-related information.",
      "Used SQL queries, filtering, grouping, joins, and aggregate functions to retrieve and analyze data; worked with relational tables to organize and manage hospital data efficiently.",
    ],
  },
  {
    title: "Manufacturing Industry Analytics Dashboard",
    stack: ["Power BI", "Nova Tech"],
    points: [
      "Created an interactive Power BI dashboard to analyze manufacturing industry data using data transformation, visualizations, KPIs, and interactive filters.",
      "Designed reports to identify trends and support data-driven decision-making.",
    ],
  },
  {
    title: "Personal Portfolio Website",
    stack: ["HTML5", "CSS3", "JavaScript"],
    points: [
      "Designed and built a personal portfolio website from scratch to showcase skills, projects, and resume.",
      "Structured and tested the website across browsers and screen sizes to ensure consistent functionality.",
    ],
  },
];
 
const EDUCATION = [
{
degree: "Master of Computer Applications (MCA)",
school: "K.S.R. College of Engineering, Tiruchengode",
year: "2026",
},
{
degree: "B.Sc. Information Technology",
school: "Gobi Arts and Science College, Gobi",
year: "2024",
},
{
degree: "Higher Secondary (12th Grade)",
school: "",
year: "",
score: "Percentage: 78%",
},
];
,
  },
];
 
const CERTIFICATES = [
  {
    title: "UI/UX Design",
    detail:
      "User Research, Wireframing, Prototyping, User-Centered Design, Interface Design",
  },
  {
    title: "Full Stack Web Development",
    detail:
      "Front-End Development, Back-End Development, REST APIs, and Database Management",
  },
];
 
/* -------------------------------------------------------------------------- */
/*  Design tokens                                                              */
/* -------------------------------------------------------------------------- */
 
const C = {
  bg: "#080808",
  text: "#ffffff",
  muted: "#a1a1aa",
  accent: "#8b5cf6",
  accentSoft: "rgba(139, 92, 246, 0.14)",
  accentLine: "rgba(139, 92, 246, 0.45)",
  surface: "rgba(255, 255, 255, 0.03)",
  border: "rgba(255, 255, 255, 0.08)",
};
 
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');
 
  html { scroll-behavior: smooth; }
  body { margin: 0; background: ${C.bg}; }
 
  .rp-root {
    background: ${C.bg};
    color: ${C.text};
    font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
  .rp-display { font-family: 'Space Grotesk', 'Inter', system-ui, sans-serif; }
  .rp-root section { scroll-margin-top: 80px; }
  .rp-root ::selection { background: ${C.accent}; color: #fff; }
 
  /* Keyboard focus */
  .rp-root a:focus-visible, .rp-root button:focus-visible {
    outline: 2px solid ${C.accent};
    outline-offset: 3px;
    border-radius: 8px;
  }
 
  /* Navbar */
  .rp-nav {
    background: rgba(8, 8, 8, 0.72);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border-bottom: 1px solid ${C.border};
  }
  .rp-nav-link {
    position: relative;
    color: ${C.muted};
    font-size: 0.9rem;
    padding: 6px 2px;
    transition: color .2s ease;
  }
  .rp-nav-link::after {
    content: "";
    position: absolute; left: 0; bottom: -2px;
    height: 2px; width: 100%;
    background: ${C.accent};
    transform: scaleX(0); transform-origin: left;
    transition: transform .25s ease;
  }
  .rp-nav-link:hover, .rp-nav-link.active { color: ${C.text}; }
  .rp-nav-link:hover::after, .rp-nav-link.active::after { transform: scaleX(1); }
  .rp-progress {
    position: absolute; left: 0; bottom: -1px; height: 2px;
    background: ${C.accent}; width: 0%;
    transition: width .1s linear;
  }
 
  /* Buttons */
  .rp-btn {
    display: inline-flex; align-items: center; gap: 10px;
    padding: 12px 20px; border-radius: 12px;
    font-size: 0.92rem; font-weight: 500;
    text-decoration: none;
    transition: transform .2s ease, background .2s ease, border-color .2s ease, box-shadow .2s ease;
  }
  .rp-btn:hover { transform: translateY(-2px); }
  .rp-btn-primary { background: ${C.accent}; color: #fff; border: 1px solid ${C.accent}; }
  .rp-btn-primary:hover { box-shadow: 0 10px 30px -8px rgba(139, 92, 246, 0.7); background: #9b73f8; }
  .rp-btn-ghost { background: ${C.surface}; color: ${C.text}; border: 1px solid ${C.border}; }
  .rp-btn-ghost:hover { border-color: ${C.accentLine}; background: ${C.accentSoft}; }
 
  /* Cards */
  .rp-card {
    background: ${C.surface};
    border: 1px solid ${C.border};
    border-radius: 16px;
    transition: transform .25s ease, border-color .25s ease, background .25s ease, box-shadow .25s ease;
  }
  .rp-card:hover {
    transform: translateY(-4px);
    border-color: ${C.accentLine};
    background: rgba(139, 92, 246, 0.05);
    box-shadow: 0 18px 40px -22px rgba(139, 92, 246, 0.55);
  }
 
  /* Chips */
  .rp-chip {
    display: inline-block;
    padding: 5px 12px; border-radius: 999px;
    font-size: 0.8rem; color: #d4d4d8;
    border: 1px solid ${C.border};
    background: rgba(255, 255, 255, 0.025);
    transition: color .2s ease, border-color .2s ease, background .2s ease;
  }
  .rp-chip:hover { color: #fff; border-color: ${C.accentLine}; background: ${C.accentSoft}; }
  .rp-chip-accent { color: #c4b5fd; border-color: ${C.accentLine}; background: ${C.accentSoft}; }
 
  /* Hero */
  .rp-hero-glow {
    position: absolute; inset: 0; pointer-events: none;
    background: radial-gradient(520px circle at var(--mx, 70%) var(--my, 30%), rgba(139, 92, 246, 0.2), transparent 60%);
    transition: background .15s ease-out;
  }
  .rp-name {
    font-size: clamp(3.6rem, 15vw, 10rem);
    line-height: 0.9;
    letter-spacing: -0.045em;
    font-weight: 700;
    margin: 0;
  }
  .rp-name span {
    display: inline-block;
    opacity: 0;
    transform: translateY(40px);
    animation: rp-rise .8s cubic-bezier(.2,.8,.2,1) forwards;
  }
  .rp-name .v { color: ${C.accent}; }
  .rp-fade { opacity: 0; animation: rp-fade .8s ease forwards; }
  @keyframes rp-rise { to { opacity: 1; transform: translateY(0); } }
  @keyframes rp-fade { to { opacity: 1; } }
 
  /* Scroll reveal */
  .rp-reveal { opacity: 0; transform: translateY(22px); transition: opacity .7s ease, transform .7s ease; }
  .rp-reveal.in { opacity: 1; transform: none; }
 
  /* Experience rail */
  .rp-rail { border-left: 2px solid ${C.accentLine}; }
  .rp-dot {
    position: absolute; left: -7px; top: 6px;
    width: 12px; height: 12px; border-radius: 999px;
    background: ${C.accent};
    box-shadow: 0 0 0 5px ${C.accentSoft};
  }
 
  .rp-link { color: ${C.text}; text-decoration: none; border-bottom: 1px solid ${C.accentLine}; transition: color .2s, border-color .2s; }
  .rp-link:hover { color: #c4b5fd; border-color: ${C.accent}; }
 
  .rp-top {
    position: fixed; right: 20px; bottom: 20px; z-index: 40;
    width: 44px; height: 44px; border-radius: 999px;
    display: flex; align-items: center; justify-content: center;
    background: ${C.accent}; color: #fff; border: none; cursor: pointer;
    transition: opacity .25s ease, transform .25s ease;
  }
  .rp-top:hover { transform: translateY(-3px); }
 
  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    .rp-name span, .rp-fade { animation: none; opacity: 1; transform: none; }
    .rp-reveal { opacity: 1; transform: none; transition: none; }
    .rp-card:hover, .rp-btn:hover, .rp-top:hover { transform: none; }
  }
`;
 
/* -------------------------------------------------------------------------- */
/*  Small building blocks                                                      */
/* -------------------------------------------------------------------------- */
 
const Icon = ({ children, size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);
 
const MailIcon = (p) => (
  <Icon {...p}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </Icon>
);
const GithubIcon = (p) => (
  <Icon {...p}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </Icon>
);
const LinkedinIcon = (p) => (
  <Icon {...p}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </Icon>
);
const ArrowUpIcon = (p) => (
  <Icon {...p}>
    <path d="M12 19V5M5 12l7-7 7 7" />
  </Icon>
);
const MenuIcon = (p) => (
  <Icon {...p}>
    <path d="M3 6h18M3 12h18M3 18h18" />
  </Icon>
);
const CloseIcon = (p) => (
  <Icon {...p}>
    <path d="M18 6L6 18M6 6l12 12" />
  </Icon>
);
 
/** Fades children in once when they scroll into view. */
function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
 
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
 
  return (
    <div
      ref={ref}
      className={`rp-reveal ${shown ? "in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
 
function SectionHeading({ title, note }) {
  return (
    <div className="mb-10 md:mb-14">
      <h2
        className="rp-display text-3xl sm:text-4xl md:text-5xl"
        style={{ fontWeight: 700, letterSpacing: "-0.03em", margin: 0 }}
      >
        {title}
      </h2>
      {note && (
        <p className="mt-3 text-base" style={{ color: C.muted, maxWidth: "36rem" }}>
          {note}
        </p>
      )}
    </div>
  );
}
 
/* -------------------------------------------------------------------------- */
/*  Navbar                                                                     */
/* -------------------------------------------------------------------------- */
 
function Navbar({ active, progress }) {
  const [open, setOpen] = useState(false);
 
  return (
    <header className="rp-nav" style={{ position: "sticky", top: 0, zIndex: 50 }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16">
        <a
          href="#home"
          className="rp-display"
          style={{
            color: C.text,
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "1.15rem",
            letterSpacing: "-0.02em",
          }}
        >
          RAGUL <span style={{ color: C.accent }}>V</span>
        </a>
 
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`rp-nav-link ${active === n.id ? "active" : ""}`}
              style={{ textDecoration: "none" }}
            >
              {n.label}
            </a>
          ))}
        </nav>
 
        <button
          type="button"
          className="md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          style={{
            background: "transparent",
            border: `1px solid ${C.border}`,
            color: C.text,
            borderRadius: 10,
            padding: 8,
            display: "flex",
            cursor: "pointer",
          }}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
 
      {open && (
        <nav
          className="md:hidden px-5 pb-4 flex flex-col"
          aria-label="Mobile"
          style={{ borderTop: `1px solid ${C.border}` }}
        >
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={() => setOpen(false)}
              style={{
                color: active === n.id ? C.text : C.muted,
                textDecoration: "none",
                padding: "12px 0",
                borderBottom: `1px solid ${C.border}`,
              }}
            >
              {n.label}
            </a>
          ))}
        </nav>
      )}
 
      <div className="rp-progress" style={{ width: `${progress}%` }} />
    </header>
  );
}
 
/* -------------------------------------------------------------------------- */
/*  Sections                                                                   */
/* -------------------------------------------------------------------------- */
 
function Hero() {
  const ref = useRef(null);
 
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
 
  const letters = PROFILE.name.split("");
 
  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={onMove}
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div className="rp-hero-glow" />
      <div
        className="max-w-6xl mx-auto px-5 sm:px-8 pt-16 sm:pt-24 pb-20 sm:pb-28"
        style={{ position: "relative" }}
      >
        <h1 className="rp-display rp-name" aria-label={PROFILE.name}>
          {letters.map((ch, i) => (
            <span
              key={i}
              aria-hidden="true"
              className={ch === "V" ? "v" : ""}
              style={{
                animationDelay: `${i * 70}ms`,
                whiteSpace: "pre",
              }}
            >
              {ch}
            </span>
          ))}
        </h1>
 
        <p
          className="rp-display rp-fade mt-6 text-2xl sm:text-3xl"
          style={{ color: C.accent, fontWeight: 600, animationDelay: "600ms" }}
        >
          {PROFILE.role}
        </p>
 
        <p
          className="rp-fade mt-6 text-base sm:text-lg"
          style={{
            color: C.muted,
            maxWidth: "44rem",
            lineHeight: 1.75,
            animationDelay: "760ms",
          }}
        >
          {PROFILE.summary}
        </p>
 
        <div
          className="rp-fade mt-10 flex flex-wrap gap-3"
          style={{ animationDelay: "920ms" }}
        >
          <a href={`mailto:${PROFILE.email}`} className="rp-btn rp-btn-primary">
            <MailIcon /> Email
          </a>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rp-btn rp-btn-ghost"
          >
            <GithubIcon /> GitHub
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rp-btn rp-btn-ghost"
          >
            <LinkedinIcon /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
 
function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal>
          <SectionHeading title="Experience" />
        </Reveal>
 
        {EXPERIENCE.map((job) => (
          <Reveal key={job.company}>
            <div className="rp-rail ml-1.5 pl-7 sm:pl-10" style={{ position: "relative" }}>
              <span className="rp-dot" />
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3
                  className="rp-display text-xl sm:text-2xl"
                  style={{ fontWeight: 600, margin: 0, letterSpacing: "-0.02em" }}
                >
                  {job.role}
                </h3>
                <span style={{ color: C.muted, fontSize: "0.9rem" }}>{job.period}</span>
              </div>
              <p style={{ color: C.accent, margin: "6px 0 0", fontWeight: 500 }}>
                {job.company}
              </p>
              <ul
                className="mt-5"
                style={{
                  color: "#d4d4d8",
                  lineHeight: 1.75,
                  paddingLeft: "1.1rem",
                  maxWidth: "46rem",
                  margin: "20px 0 0",
                }}
              >
                {job.points.map((p) => (
                  <li key={p} style={{ marginBottom: 8 }}>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
 
function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28" style={{ background: "#0b0b0d" }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal>
          <SectionHeading title="Skills" />
        </Reveal>
 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SKILL_GROUPS.map((g, i) => (
            <Reveal key={g.title} delay={i * 80}>
              <div className="rp-card p-6 h-full">
                <h3
                  className="rp-display text-lg sm:text-xl"
                  style={{ fontWeight: 600, margin: 0, letterSpacing: "-0.01em" }}
                >
                  {g.title}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span key={s} className="rp-chip">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
 
        <Reveal delay={120}>
          <div className="mt-8 flex flex-wrap items-center gap-2">
            <span style={{ color: C.muted, fontSize: "0.9rem", marginRight: 6 }}>
              Soft skills
            </span>
            {SOFT_SKILLS.map((s) => (
              <span key={s} className="rp-chip rp-chip-accent">
                {s}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
 
function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal>
          <SectionHeading title="Projects" />
        </Reveal>
 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 90}>
              <article className="rp-card p-6 sm:p-7 h-full flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.stack.map((t) => (
                    <span key={t} className="rp-chip rp-chip-accent">
                      {t}
                    </span>
                  ))}
                </div>
                <h3
                  className="rp-display text-xl sm:text-2xl"
                  style={{ fontWeight: 600, margin: 0, letterSpacing: "-0.02em", lineHeight: 1.2 }}
                >
                  {p.title}
                </h3>
                <ul
                  style={{
                    color: "#d4d4d8",
                    lineHeight: 1.7,
                    paddingLeft: "1.1rem",
                    margin: "16px 0 0",
                    fontSize: "0.95rem",
                  }}
                >
                  {p.points.map((pt) => (
                    <li key={pt} style={{ marginBottom: 8 }}>
                      {pt}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
 
        <Reveal delay={100}>
          <p className="mt-8" style={{ color: C.muted }}>
            More work on{" "}
            <a
              className="rp-link"
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ({PROFILE.githubHandle})
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
 
function Education() {
  return (
    <section id="education" className="py-20 sm:py-28" style={{ background: "#0b0b0d" }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal>
          <SectionHeading title="Education" />
        </Reveal>
 
        <div className="grid grid-cols-1 gap-4">
          {EDUCATION.map((e, i) => (
            <Reveal key={e.degree} delay={i * 80}>
              <div className="rp-card p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <h3
                    className="rp-display text-lg sm:text-xl"
                    style={{ fontWeight: 600, margin: 0, letterSpacing: "-0.01em" }}
                  >
                    {e.degree}
                  </h3>
                  {e.school && (
                    <p style={{ color: C.muted, margin: "6px 0 0" }}>{e.school}</p>
                  )}
       
{e.score && !e.score.startsWith("CGPA:") && (
  <p
    style={{
      color: C.accent,
      margin: "6px 0 0",
      fontSize: "0.9rem",
    }}
  >
    {e.score}
  </p>
)}
                  </p>
                </div>
                {e.year && (
                  <span
                    className="rp-display text-2xl sm:text-3xl"
                    style={{ fontWeight: 700, color: C.text }}
                  >
                    {e.year}
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
 
        <Reveal delay={100}>
          <h3
            className="rp-display text-xl sm:text-2xl mt-14 mb-5"
            style={{ fontWeight: 600, letterSpacing: "-0.02em" }}
          >
            Certificates
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CERTIFICATES.map((c) => (
              <div key={c.title} className="rp-card p-6">
                <h4
                  className="rp-display text-lg"
                  style={{ fontWeight: 600, margin: 0 }}
                >
                  {c.title}
                </h4>
                <p style={{ color: C.muted, margin: "8px 0 0", lineHeight: 1.65, fontSize: "0.93rem" }}>
                  {c.detail}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
 
function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            title="Contact"
            note="Open to Junior Data Analyst roles. Email is the fastest way to reach me."
          />
        </Reveal>
 
        <Reveal delay={80}>
          <div className="rp-card p-6 sm:p-8">
            <dl
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              style={{ margin: 0 }}
            >
              {[
                {
                  k: "Email",
                  v: PROFILE.email,
                  href: `mailto:${PROFILE.email}`,
                },
                {
                  k: "Phone",
                  v: PROFILE.phone,
                  href: `tel:${PROFILE.phone.replace(/\s/g, "")}`,
                },
                {
                  k: "LinkedIn",
                  v: `linkedin.com/in/${PROFILE.linkedinHandle}`,
                  href: PROFILE.linkedin,
                  ext: true,
                },
                {
                  k: "GitHub",
                  v: `github.com/${PROFILE.githubHandle}`,
                  href: PROFILE.github,
                  ext: true,
                },
                
              ].map((row) => (
                <div key={row.k}>
                  <dt style={{ color: C.muted, fontSize: "0.85rem" }}>{row.k}</dt>
                  <dd style={{ margin: "6px 0 0", wordBreak: "break-word" }}>
                    {row.href ? (
                      <a
                        className="rp-link"
                        href={row.href}
                        {...(row.ext
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {row.v}
                      </a>
                    ) : (
                      row.v
                    )}
                  </dd>
                </div>
              ))}
            </dl>
 
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${PROFILE.email}`} className="rp-btn rp-btn-primary">
                <MailIcon /> Email me
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rp-btn rp-btn-ghost"
              >
                <LinkedinIcon /> LinkedIn
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rp-btn rp-btn-ghost"
              >
                <GithubIcon /> GitHub
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
 
function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${C.border}` }}>
      <div
        className="max-w-6xl mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-2"
        style={{ color: C.muted, fontSize: "0.88rem" }}
      >
        <span>
          © {new Date().getFullYear()} {PROFILE.name}
        </span>
        <span>{PROFILE.role}</span>
      </div>
    </footer>
  );
}
 
/* -------------------------------------------------------------------------- */
/*  App                                                                        */
/* -------------------------------------------------------------------------- */
 
export default function App() {
  const [active, setActive] = useState("home");
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);
 
  // Scroll progress bar + back-to-top visibility
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? (doc.scrollTop / max) * 100 : 0);
      setShowTop(doc.scrollTop > 600);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
 
  // Highlight the nav link for the section in view
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);
 
  return (
    <div className="rp-root min-h-screen">
      <style>{CSS}</style>
      <Navbar active={active} progress={progress} />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
 
      <button
        type="button"
        className="rp-top"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{
          opacity: showTop ? 1 : 0,
          pointerEvents: showTop ? "auto" : "none",
        }}
      >
        <ArrowUpIcon />
      </button>
    </div>
  );
}
 

