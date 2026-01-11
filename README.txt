Nimbus Sites (US-only) – Netlify-ready site
====================================

Primary goal: get as many people as possible to complete onboarding (Tally)
Onboarding URL: https://tally.so/r/2EakoA

Funnel logic
-----------
Ad -> Landing page (no pricing friction) -> CTA to onboarding form -> (later: pay hosting via Nimbus Sites) -> build in <10 days -> 1 revision -> go live

Pages
-----
/index.html        Variant A (Google Ads / cold intent)
/variant-b.html    Variant B (Meta/TikTok/influencer traffic)
/pricing.html      Pricing page (push Annual + Lifetime) – still CTA to onboarding
/legal/*           Legal pages (preserved from your bundle)

Google Ads -> Variant A section alignment (headline match)
---------------------------------------------------------
Use these ad groups and ensure the clicked intent sees the same headline + first screen.

Ad Group 1: "Free Business Website" (high intent)
- Ad headline: "Business Website Built Free"
- Variant A hero: H1 "Everything Your Business Needs to Get Online — Built Free"
- Above-the-fold confirmation: pill "You only pay for hosting" + CTA "Get Your Free Site"

Ad Group 2: "Website + Hosting Bundle"
- Ad headline: "Website + Hosting, Done For You"
- Variant A section: "Included at No Extra Cost" (Website + copy + logo + email + hosting)
- Proof: trust strip + examples grid immediately after hero

Ad Group 3: "No Upfront Cost Website"
- Ad headline: "No Upfront Website Cost"
- Variant A section: "Starting a business online shouldn’t cost thousands."
- Message continuity: "$1,000–$5,000 upfront" contrast block

Ad Group 4: "Done-For-You Website Fast"
- Ad headline: "Website Built in Under 10 Days"
- Variant A section: "How Nimbus Sites Works" (Step 3: build in <10 days)
- Reinforcement: hero subline includes "Built in under 10 days"

Implementation note:
- Keep Variant A more explanatory (Google intent)
- Keep Variant B shorter + faster CTA (social traffic)

Deploy
------
Drag-and-drop the folder into Netlify, or connect a repo.
Netlify redirects are in netlify.toml
