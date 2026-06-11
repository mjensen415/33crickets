# AGENT-CONTEXT — 33Crickets Redesign
Paste this as the kickoff prompt in the "33Crickets Redesign" project, or save as AGENT-CONTEXT.md in the repo root. The two companion files (33crickets-redesign-plan.md and voice.md) should live in the project alongside it.

---

## Prompt

You are working on the 33Crickets website redesign. Read this file fully before writing any code or copy. The full project plan is in `33crickets-redesign-plan.md` and all writing must follow `voice.md`.

### What this project is

A repositioning wearing a redesign costume. 33Crickets is Matt Jensen's existing community consulting brand (live at 33crickets.com on Squarespace, with established social handles). It is being relaunched with a single narrow focus: **community leadership for AI companies, seed to Series B.** The flagship offer is a Fractional VP of Community engagement, productized as a 90-Day Community Foundation Sprint (Diagnose → Build → Operationalize), with ongoing advisory as the extension. Engagements start at $8K/month and that floor is published on the site.

The old service menu (forums, social media, reputation management, platform migration as a standalone) is dead. Do not carry it forward.

### Brand portfolio rules

- 33Crickets owns community and the adoption-debt content engine.
- Coraigen (a Sharpen Consulting offshoot) owns AI cost engineering. Keep the two firewalled on this site unless Matt says otherwise — no cross-linking yet.
- Atlas Line Strategies and RenAIssance are retired. Never reference them.

### Core positioning frames (use these, they are owned IP)

- **Adoption debt** — the gap between buying a product and the workforce actually succeeding with it.
- **The community readiness gap** — companies ship AI products faster than they build the communities that sustain them.

### Receipts (credibility assets)

15+ years in community. Logo roster for the receipts section: Fiverr, Upwork, Lyft, Microsoft, Yammer, LindenLab, OnLive. Flagship program story: the Fiverr Product Advisory Board (5M+ member global community, 100+ countries). Matt is hands-on with the modern AI stack (Claude Code, MCP, agents, n8n), which is part of the pitch to technical buyers.

**Pending verification from Matt before launch:** display basis for each logo (employment vs. client vs. NDA-covered) and final Fiverr PAB public description.

### Technical decisions (already made — do not relitigate)

- Next.js (App Router) + Tailwind, deployed to Vercel from the first commit.
- Five pages: Home, Services (one page, one flagship offer), Thinking (blog), About, Contact.
- Blog is MDX in-repo, no CMS. Must launch with 3 posts minimum or the nav item stays hidden.
- Contact page is a calendar embed, not a form.
- Analytics: Plausible.
- 301 redirect map from old Squarespace URLs (/services, /about, /blog/*, /contact-us) is required before DNS cutover.

### Design direction

Confident, editorial, builder-clean. Closer to a modern dev-tools company than a marketing agency. Generous whitespace, strong type hierarchy, one accent color, no stock photography. Build a design-tokens file first and lock it before components. Cricket mark: keep the name's equity, modernize the mark (open decision: refresh vs. drop — ask Matt at the design-system stage).

### Voice (summary — full rules in voice.md)

Smart friend who has built this at scale. California builder accent: conversational at every altitude, builder vernacular native, VC clichés banned. Paragraph form, short sentences. No em dashes. No throat-clearing openers, no engagement bait, no "excited to announce." Specificity is the personality: real numbers, named programs. Disqualify confidently — the Services page includes an explicit "not a fit if" section. When there's a hard part it goes first, but good news gets said plainly.

### Open decisions (ask Matt, don't assume)

1. Home headline: keep "Turn your customers into your community" as heritage vs. fully new line.
2. Cricket mark refresh vs. retire.
3. Whether the LinkedIn relaunch post receipts line expands from Fiverr-only to the multi-company roster.

### Build order

Layout shell + nav → Home → Services → About/Contact → Blog (MDX) → redirects → launch checklist in the plan's Phase 4. Copy quality beats visual polish if time compresses.

### First session tasks

1. Scaffold the Next.js project and connect Vercel.
2. Create the design-tokens file and present it for approval before any components.
3. Draft Home page copy per voice.md and flag open decision #1 for Matt.
