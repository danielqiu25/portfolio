# Portfolio Content Plan

Working document. Decides *what* goes on the site and *at what depth*, before any code is written.

> **Note:** if you'd rather this not be public, add `content-plan.md` to `.gitignore`.
> It contains no sensitive data, but it is strategy notes rather than portfolio content.

---

## Positioning

Second-year Waterloo CS (AI specialization) targeting **ML/AI engineering, software engineering, and data science** co-op roles.

The differentiator is not GPA and not award count. It is:

1. **Shipped production AI at a real company in first year** — RAG feature live in Askuity's product
2. **Range** — model work, data pipelines, and from-scratch algorithms, not just notebooks
3. **Unusual leadership depth** — 6 years to the top cadet rank, 4 years coaching robotics

Most CS portfolios have none of #3 and a weak version of #1.

---

## Sitemap

| Route | Purpose |
|---|---|
| `/` | Hero, positioning line, 3 featured projects, highlights strip |
| `/projects` | All projects, filterable by tag (ML · Data · Systems) |
| `/projects/[slug]` | Per-project case study |
| `/experience` | Home Depot Askuity, Robotics Head Coach |
| `/about` | Narrative, education, skills, coursework, contact |
| `/beyond` | Leadership, competitions, activities |
| `/resume` | Sanitized PDF (no phone number) |

**Nav:** Projects · Experience · About · Beyond · Résumé

---

## Projects

Ordered by strength. Each needs: problem, approach, result, what you'd do differently.

### 1. Accessible Route Planner — *Systems / Algorithms*
Newhacks 2025, **1st of 300+**. Dijkstra from scratch with a custom binary min-heap, 5,000+ Toronto
sidewalk segments, accessibility-weighted cost function. Strongest project: real algorithmic content,
a win to point at, and a problem that obviously matters.

### 2. Environmental AI Predictor — *ML / Data*
CXC Hackathon. FastAPI backend, Random Forest vs Logistic Regression vs XGBoost, stratified splits,
async multi-API feature fetch with fallbacks. The model comparison and the fallback design are the
interesting parts — lead with those, not "I used Random Forest."

### 3. life-debugger — *Product / Full-stack AI*
Shipped app with an AI feature. Only project that is a product rather than a submission.
**Needs a real write-up** — the repo description is currently doing all the work.

### 4. CIFAR-10 Prediction Model — *demote or deepen*
Honest assessment: CIFAR-10 is the single most common beginner CV project. As-is it adds nothing a
reviewer hasn't seen 200 times. Two options — cut it, or make it non-generic (architecture comparison,
ablations, augmentation study, error analysis). Decide before it ships.

### Not featured: Retail-Insights-Agent
Home Depot take-home. **Confirm the assessment terms permit publication** before it appears anywhere.
Currently a public repo. If restricted, make it private and describe the work in prose only.

### Gap
No **live, interactive ML demo** hosted on the site. For ML/AI roles this is the highest-leverage
thing you could add — a Vercel serverless endpoint running real inference beats any static write-up.
Candidate for after v1 ships.

---

## Deferred: visual design pass

Text-only reads as competent but forgettable. After structure and content are settled, add:

- **Colour system** beyond the current neutral base — one accent used with restraint, not a palette
- **Project imagery** — screenshots, route-map renders, confusion matrices, architecture diagrams.
  Real artifacts from the work beat stock illustration every time.
- **A hero visual** — the routing graph or an agent architecture diagram are the strongest candidates
- **Motion**, sparingly — scroll reveals or a subtle hero animation

Sequenced last on purpose: visuals designed around content that then changes get thrown away.

---

## Experience

**Data Scientist Intern — Home Depot Askuity** (May–Aug 2026)
Headline item. RAG vector search in production, Airflow DAG automation, 2,000-query usage analysis
that drove roadmap prioritization. Lead with the analysis → decision → shipped feature arc; that
story shows judgment, not just implementation.

**Robotics Head Coach — Caution Tape Robotics** (Sep 2022 – Aug 2026)
Four years, ongoing, paid. Curriculum design, 16 students placed competitively, PID control and
sensor fusion work. Frame the duration prominently — sustained commitment is the signal.

---

## Beyond: prioritized

### Tier A — full narrative treatment

**Air Cadets — 351 Silver Star Squadron** (6 years)
Chief Warrant Officer (WO1), highest cadet rank. Led Canada's largest squadron, 300–400 cadets,
plus a 38-person senior team. Planned and ran squadron operations.

> Translate out of military jargon. "WO1" means nothing to a tech recruiter.
> Write it as scope: *highest cadet rank; led a 400-person organization and a 38-person senior team.*

**Marksmanship** — team captain 2 years, member 6. National Gold Pin, Ontario Rifle & Pistol
provincials top 10, multiple team golds. Sub-section under cadets. Memorable and specific.

**Mathematics competitions** — one dense aggregated block, *not* a list of twenty:
> AIME qualifier (2022, AMC 10 Honor Roll). Certificate of Distinction in Euclid, Fermat, Hypatia,
> CSMC, CIMC, Cayley, Galois, COMC, and the Canadian Computing Competition. Group IV/V Honour Roll.
> 1st place, regional Canadian Team Mathematics Contest (2023); 2nd (2024).

**VEX Robotics — competitor** (distinct from coaching)
Over Under: tournament finalist, Create Award, World Championship qualification. Driver, builder,
designer, strategist. Team raised $2,000+ for SickKids.

### Tier B — compact list, one line each
- Student Athletic Council — Treasurer, Secretary, 4 years
- Math Club executive — organized events, taught 45 students
- Coding Club — 4 years, taught 30 students
- Cadet drill team — regional silver and bronze

### Tier C — single combined line
- Athletics: varsity ultimate frisbee (regional 3rd), badminton (regionals), U16 rep volleyball
- Volunteering: Markham Public Library summer camp
- Programs: NYU Tandon ML pre-college, UofT CREATE engineering design

### Cut entirely
Grade 9 subject awards (Music, Phys Ed) · school honour roll · individual cadet rank promotions
(implied by ending at the top rank) · individual regional marksmanship pins (aggregate instead)

**Why cut:** ~45 undifferentiated award rows means a reviewer reads none of them. Ranking is what
makes the top items land.

---

## Education

Waterloo CS Honours Co-op, AI Specialization · Sep 2025 – May 2030
Cumulative 88.0 · Term Distinction (Fall 2025, Winter 2026) · Excellent Standing

**Add to the résumé — currently missing:**
- University of Waterloo President's Scholarship of Distinction (2026)
- Nortel Institute Scholarship (2026)

Coursework worth surfacing: CS 135 (90), CS 136, MATH 135 (95), MATH 136, MATH 137, PHIL 145 (95).

---

## Privacy rules

- **Never publish** the transcript PDF. Contains Student ID and Ontario Education Number — a
  permanent government identifier.
- **Never commit** either PDF to this repo. Public GitHub history is effectively permanent.
- **Strip the phone number** from the hosted résumé. Route contact through email or a form.
- Decide on a **permanent contact email** — `dlqiu@uwaterloo.ca` expires at graduation.
