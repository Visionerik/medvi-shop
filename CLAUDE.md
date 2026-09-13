# Pepvi Landing (Medvi-inspiriert) — Project Memory

## Overview
A telehealth landing page INSPIRED BY the structure of https://home.medvi.org/.
Built with Next.js + Tailwind CSS. LOCAL ONLY — no deployment yet.

## CRITICAL: Branding
- The brand is **Pepvi** — NEVER "MEDVi"/"Medvi". MEDVi is a real US company;
  using their name would impersonate them. If you see "MEDVi" anywhere in this
  codebase, replace it with "Pepvi". Do NOT "correct" Pepvi back to MEDVi.
- No emojis in the UI (owner rule). No flag emojis in the language switcher.

## CRITICAL: Local only, compliance
- Do NOT deploy (no Vercel, no publishing). Owner ships only after legal review
  (prescription-drug platform; doctor + pharmacy partners required).
- No direct checkout for prescription products; flow is eligibility check →
  medical review → partner pharmacy.
- The main product codebase is at
  "/Users/visionerik/ownCloud/Sloothy GmbH/Claude Code/pepvi" (DB, auth, wizard,
  portal, admin, DE/EN i18n). Prefer working THERE; read its COLLAB.md first.

## CRITICAL: No Sloothy/Portimmo Contamination
- This project is COMPLETELY SEPARATE from Sloothy and Portimmo projects.
- Do NOT reference, import, copy, or touch any files under ~/projects/sloothy* or any Portimmo directories.
- This project lives at ~/projects/medvi-shop/ and nowhere else.

## Tech Stack
- Next.js 14+ (App Router)
- Tailwind CSS
- TypeScript
- Vercel for deployment

## Sections to Build (from home.medvi.org)
1. Hero — "Healthcare, redefined for real life" with patient count
2. Weight Loss — GLP-1 medication, doctor-guided care, "Get Started" CTA
3. Women's Health — hormone balance, hair, skin care
4. Metabolic Nutrition — MEDVi Meals, meal prep
5. Supplements — doctor-formulated, evidence-based
6. Men's Health — energy, hormones, performance
7. Peptides & Longevity — recovery, performance, sleep
8. Hair Restoration — regrowth serum
9. Skincare — prescription-strength, personalized
10. Testimonials — patient reviews carousel
11. Footer — legal, pharmacy partners, links

## Design Style
- Clean, modern, healthcare aesthetic
- Soft gradients, rounded cards
- Professional but approachable
- Mobile-responsive

## Verification Loop
1. Claude Code builds the project
2. `npm run build` must pass cleanly
3. `npm run dev` should start without errors
4. Fix any build/runtime errors and repeat until clean
