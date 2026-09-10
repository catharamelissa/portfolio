import { useState } from "react";

const NAV = "#1B3D6E";
const GOLD = "#B8892A";
const BG = "#0d1520";
const CARD = "#111f30";
const TEXT = "#e0e8f0";
const MUTED = "#7a9bbf";

const achievements = [
  { icon: "⚙️", metric: "Python Automation", desc: "Built automated reporting pipeline adopted by the broader team after the company independently deployed Databricks — zero prior Python background." },
  { icon: "📊", metric: "DDMRP Planning System", desc: "Designed buffer and net-flow planning system for PO Plan Workbook, replacing manual procurement planning ahead of MRP rollout in Sage X3." },
  { icon: "🔗", metric: "Hub-and-Spoke Data Architecture", desc: "Consolidated duplicate Sage X3 data ingestion across departments into a single source of truth — eliminated conflicting reports company-wide." },
  { icon: "🏭", metric: "Subcontract Planning System", desc: "Built end-to-end component planning system coordinating material transfers between internal teams and co-pack vendors." },
  { icon: "📈", metric: "98% Accuracy Improvement", desc: "Replaced all paper-based order management and carrier coordination with Excel-based digital systems — 25–50% time savings." },
  { icon: "🚛", metric: "Fleet Scaled 3→23 Drivers", desc: "Scaled logistics operations from 3 drivers / 8 carriers to 23 drivers / 20 carriers while negotiating a 5% transportation budget reduction." },
  { icon: "✅", metric: "Zero Admin Overtime", desc: "Redesigned billing, inventory, and transportation workflows across 3 departments — eliminated 100% of administrative overtime." },
  { icon: "🏗️", metric: "Plant Launch from Scratch", desc: "Built all supply chain infrastructure at plant opening — supplier onboarding, inventory strategy, logistics, and carrier network." },
];

const projects = [
  { title: "PDQ Layout Planner", desc: "Interactive retail display planner for sizing and arranging product assortments within PDQ trays and baskets. Supports auto-arrangement, weight tracking, drag-and-drop positioning, and XLSX/PDF export.", tags: ["React", "Supply Chain", "Retail Planning", "Operations"], status: "live", url: "https://pdq-layout-planner.vercel.app/" },
  { title: "SC Planning Hub", desc: "A Python pipeline that consolidates ERP exports and supplier trackers into three weekly reports: stockout risk, cross-supplier supply timing, and inventory status.", tags: ["Python", "Pandas", "OpenPyXL", "Data Pipeline"], status: "live", url: "https://sc-planning-hub.vercel.app/" },
  { title: "PO Plan Workbook (DDMRP)", desc: "Demand-Driven MRP buffer and net-flow planning system built in Excel, bridging procurement planning ahead of a full MRP implementation.", tags: ["Excel", "DDMRP", "Sage X3", "Planning"], status: "live", url: "https://ddmrp-demo.vercel.app/" },
  { title: "Subcontract Component Planner", desc: "End-to-end planning system coordinating component transfers, subcontract PO lifecycle, and kit readiness across internal teams and co-pack vendors.", tags: ["Excel", "VBA", "Supply Chain", "Vendor Mgmt"], status: "live", url: "https://subcontract-planner.vercel.app/" },
];

const skills = {
  "ERP Systems": ["Sage X3", "JD Edwards OneWorld", "MS Dynamics 365", "MS Dynamics AX 2009", "MS Dynamics NAV", "AS400"],
  "Data & Analytics": ["SQL (SSMS)", "Python", "Pandas", "OpenPyXL", "Advanced Excel", "VBA & Macros", "Power Pivot"],
  "Supply Chain": ["DDMRP / MRP", "Inventory Planning", "Demand Planning", "S&OP", "Vendor Management", "3PL / Logistics"],
  "Tools & Methods": ["Asana", "TruckMate TMS", "Lean Six Sigma", "SOP Development", "Change Management", "AI-Assisted Workflows"],
};

function Label({ children }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, fontWeight: 700, color: GOLD, textTransform: "uppercase", letterSpacing: 1.5 }}>
      <span style={{ width: 20, height: 2, background: GOLD, display: "inline-block" }} />
      {children}
    </div>
  );
}

export default function App() {
  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div style={{ background: BG, color: TEXT, fontFamily: "'Inter', system-ui, sans-serif", minHeight: "100vh" }}>

      {/* Nav */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(13,21,32,0.97)", borderBottom: `1px solid ${NAV}44`, padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 56 }}>
        <div style={{ fontWeight: 800, color: "#fff", fontSize: 16, cursor: "pointer" }} onClick={() => scrollTo("hero")}>
          CW<span style={{ color: GOLD }}>.</span>
        </div>
        <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
          {["About", "Achievements", "Projects", "Skills"].map(s => (
            <button key={s} onClick={() => scrollTo(s.toLowerCase())} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 13, fontWeight: 500 }}>
              {s}
            </button>
          ))}
          <a href="/resume.html" target="_blank" rel="noreferrer" style={{ fontSize: 13, fontWeight: 700, color: GOLD, textDecoration: "none" }}>
            Resume
          </a>
          <a href="mailto:catharawigley@outlook.com" style={{ padding: "7px 16px", background: GOLD, color: "#fff", borderRadius: 6, fontSize: 12, fontWeight: 700, textDecoration: "none" }}>
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" style={{ minHeight: "92vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "60px 32px", textAlign: "center", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at 50% 40%, ${NAV}44 0%, transparent 68%)`, pointerEvents: "none" }} />
        <div style={{ maxWidth: 700, position: "relative" }}>
          <div style={{ display: "inline-block", background: `${GOLD}20`, border: `1px solid ${GOLD}55`, borderRadius: 20, padding: "5px 14px", fontSize: 11, color: GOLD, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase", marginBottom: 24 }}>
            Supply Chain Operations & Systems
          </div>
          <h1 style={{ fontSize: "clamp(38px, 6vw, 64px)", fontWeight: 800, color: "#fff", margin: "0 0 16px", lineHeight: 1.1 }}>
            Cathara Wigley
          </h1>
          <p style={{ fontSize: "clamp(15px, 2vw, 19px)", color: MUTED, lineHeight: 1.8, margin: "0 0 40px" }}>
            15+ years building the tools, processes, and structure that make supply chains work — from plant launches to ERP implementations to Python-powered automation.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 60 }}>
            <button onClick={() => scrollTo("projects")} style={{ padding: "13px 28px", background: NAV, color: "#fff", border: "none", borderRadius: 8, fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
              View My Work
            </button>
            <a href="/resume.html" target="_blank" rel="noreferrer" style={{ padding: "13px 28px", background: GOLD, color: "#fff", borderRadius: 8, fontSize: 14, fontWeight: 700, textDecoration: "none" }}>
              View Resume
            </a>
            <a href="https://linkedin.com/in/catharawigley" target="_blank" rel="noreferrer" style={{ padding: "13px 28px", background: "transparent", color: "#fff", border: `1.5px solid ${NAV}99`, borderRadius: 8, fontSize: 14, fontWeight: 700, textDecoration: "none" }}>
              LinkedIn ↗
            </a>
          </div>
          <div style={{ display: "flex", gap: 48, justifyContent: "center", flexWrap: "wrap" }}>
            {[["15+", "Years Experience"], ["8+", "ERP Systems"], ["3", "Industries"], ["100s", "Processes Built"]].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontSize: 30, fontWeight: 800, color: GOLD }}>{n}</div>
                <div style={{ fontSize: 11, color: MUTED, marginTop: 4, textTransform: "uppercase", letterSpacing: 0.5 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" style={{ padding: "80px 32px", maxWidth: 900, margin: "0 auto" }}>
        <Label>About</Label>
        <h2 style={{ fontSize: "clamp(22px, 3.5vw, 34px)", fontWeight: 700, color: "#fff", margin: "12px 0 32px" }}>
          I step into broken systems and build what's missing.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 28 }}>
          <p style={{ color: MUTED, lineHeight: 1.85, fontSize: 14, margin: 0 }}>
            My career has been defined by one pattern: walking into environments where the processes don't exist yet — or exist but aren't working — and building the structure that lets operations scale. That's happened at a plant launch, an ERP rollout, a transportation operation, and now in supply chain planning.
          </p>
          <p style={{ color: MUTED, lineHeight: 1.85, fontSize: 14, margin: 0 }}>
            I'm currently a Supply Chain Execution Planner based in the Dallas-Fort Worth area, where I've self-taught ERP systems, built Python automation pipelines, and designed planning tools teams now depend on. I'm open to remote and hybrid opportunities.
          </p>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" style={{ padding: "80px 32px", background: `${NAV}18` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Label>Achievements</Label>
          <h2 style={{ fontSize: "clamp(22px, 3.5vw, 34px)", fontWeight: 700, color: "#fff", margin: "12px 0 44px" }}>
            Results across every role
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: 18 }}>
            {achievements.map((a, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${NAV}77`, borderRadius: 12, padding: "22px 18px" }}>
                <div style={{ fontSize: 26, marginBottom: 10 }}>{a.icon}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: GOLD, marginBottom: 8 }}>{a.metric}</div>
                <div style={{ fontSize: 12, color: MUTED, lineHeight: 1.75 }}>{a.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" style={{ padding: "80px 32px", maxWidth: 1100, margin: "0 auto" }}>
        <Label>Projects</Label>
        <h2 style={{ fontSize: "clamp(22px, 3.5vw, 34px)", fontWeight: 700, color: "#fff", margin: "12px 0 44px" }}>
          Tools I've built
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 22 }}>
          {projects.map((p, i) => (
            <div key={i} style={{ background: CARD, border: `1px solid ${NAV}77`, borderRadius: 12, padding: "26px 22px", display: "flex", flexDirection: "column", gap: 14 }}>
              <span style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, color: p.status === "live" ? "#2a9d8f" : MUTED, background: p.status === "live" ? "#2a9d8f22" : `${NAV}44`, padding: "3px 10px", borderRadius: 20, alignSelf: "flex-start" }}>
                {p.status === "live" ? "● Live" : "Professional Project"}
              </span>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: "#fff", margin: 0 }}>{p.title}</h3>
              <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.75, margin: 0, flex: 1 }}>{p.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                {p.tags.map(t => (
                  <span key={t} style={{ fontSize: 10, color: GOLD, background: `${GOLD}18`, border: `1px solid ${GOLD}33`, borderRadius: 4, padding: "2px 7px" }}>{t}</span>
                ))}
              </div>
              {p.url && (
                <a href={p.url} target="_blank" rel="noreferrer" style={{ fontSize: 12, fontWeight: 700, color: GOLD, textDecoration: "none", marginTop: 4 }}>
                  View Live ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" style={{ padding: "80px 32px", background: `${NAV}18` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Label>Skills</Label>
          <h2 style={{ fontSize: "clamp(22px, 3.5vw, 34px)", fontWeight: 700, color: "#fff", margin: "12px 0 44px" }}>
            Tools & expertise
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))", gap: 20 }}>
            {Object.entries(skills).map(([cat, items]) => (
              <div key={cat} style={{ background: CARD, border: `1px solid ${NAV}77`, borderRadius: 12, padding: "22px 18px" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: GOLD, textTransform: "uppercase", letterSpacing: 1, marginBottom: 14 }}>{cat}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                  {items.map(item => (
                    <div key={item} style={{ fontSize: 13, color: TEXT, display: "flex", alignItems: "center", gap: 7 }}>
                      <span style={{ color: GOLD, fontSize: 9 }}>▸</span> {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: "80px 32px", textAlign: "center" }}>
        <div style={{ maxWidth: 580, margin: "0 auto" }}>
          <Label>Contact</Label>
          <h2 style={{ fontSize: "clamp(22px, 3.5vw, 34px)", fontWeight: 700, color: "#fff", margin: "12px 0 14px" }}>
            Let's connect
          </h2>
          <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "0 0 36px" }}>
            I'm open to supply chain planning and operations opportunities — remote preferred, hybrid considered for DFW.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="mailto:catharawigley@outlook.com" style={{ padding: "13px 28px", background: NAV, color: "#fff", borderRadius: 8, fontSize: 14, fontWeight: 700, textDecoration: "none" }}>
              Email Me
            </a>
            <a href="https://linkedin.com/in/catharawigley" target="_blank" rel="noreferrer" style={{ padding: "13px 28px", background: "transparent", color: "#fff", border: `1.5px solid ${NAV}99`, borderRadius: 8, fontSize: 14, fontWeight: 700, textDecoration: "none" }}>
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>

      <footer style={{ borderTop: `1px solid ${NAV}44`, padding: "22px 32px", textAlign: "center" }}>
        <div style={{ fontSize: 12, color: MUTED }}>© 2026 Cathara Wigley · Dallas-Fort Worth, TX</div>
      </footer>
    </div>
  );
}
