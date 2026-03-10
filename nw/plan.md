

# Byron East — Sales Page Overhaul (Based on PDF Blueprint)

## Core Philosophy from the PDF

The uploaded "Anatomy of a Highly Efficient Sales Page" teaches a specific sales page structure. Here's how we apply each principle to Byron East:

1. **First touchpoint must be impactful** -- no wasted space, no decorative filler. The hero must hit with a specific promise immediately.
2. **Heading = clear, specific promise** -- not generic "Your team on the ground." Instead, something like: "We'll beat your China factory price — or we'll tell you honestly we can't."
3. **Subheading = the uppercut** -- reinforces with specifics: "Your on-the-ground sourcing team inside China's factories. No middlemen. No markups. No guesswork."
4. **Hero context section** -- a short, honest explanation (no script feel, personality and vulnerability). Replace the current bland subtext with a direct, conversational pitch.
5. **No testimonials placeholder** -- the PDF says skip testimonials; a bold guarantee builds trust faster. Replace "coming soon" with a guarantee section.
6. **Show pricing / services transparently** -- don't hide behind vague cards. Show what each service includes clearly, with a direct CTA.
7. **Frictionless CTA** -- one primary action (Book a Call), no competing CTAs diluting focus.
8. **Footer: NO social links** -- the PDF explicitly says social links send prospects back up the funnel. Remove YouTube/Instagram/LinkedIn from the footer.

---

## Changes by File

### 1. Home Page (`src/pages/Index.tsx`) — Complete restructure

**New section order following the PDF anatomy:**

1. **Hero** -- Specific promise headline (not generic). Subheading as the "uppercut." One single CTA button ("Book a Free Consultation"). Remove "Our Story" secondary button -- it's a distraction.
2. **Context / "Why"** -- Short, conversational section explaining what Byron East does and why it matters. Written like talking to a friend, not corporate copy. Honest, direct, a bit vulnerable.
3. **The 3 Services** -- Presented as a clear comparison/feature table (inspired by the PDF's pricing table format). Each service shows what's included so prospects can self-select. Direct "Learn More" or "Book a Call" per service.
4. **Guarantee Section** -- Replace the empty testimonials section with a bold guarantee: "If we can't beat your current price, we'll tell you. No invoice. No obligation." This builds trust faster than placeholder testimonials.
5. **Single focused CTA** -- One final call-to-action. No competing buttons.

**Remove:**
- The repetitive `text-[11px] uppercase tracking-[0.3em]` labels on every section (AI pattern)
- "Who we work with" pills (weak, adds nothing)
- Testimonials "coming soon" (hurts credibility)
- Secondary/ghost CTAs that compete with the primary action

### 2. Navbar (`src/components/Navbar.tsx`)

- Simplify: minimal branding (logo text only, smaller)
- Remove services dropdown complexity -- just link to a services anchor on the home page or keep simple direct links
- Single prominent CTA: "Book a Call"

### 3. Footer (`src/components/Footer.tsx`)

- **Remove social links entirely** (YouTube, Instagram, LinkedIn) -- per the PDF, these send prospects back up the funnel
- Keep it minimal: copyright, privacy policy link, contact email only

### 4. CTA Section (`src/components/CTASection.tsx`)

- Simplify to one single button (Book a Consultation)
- Remove "Send a Message" competing CTA
- Bigger, bolder headline
- Less decorative clutter

### 5. Service Pages (all 3)

- Add a clear "What you get" list (check marks, not border-left lines)
- Add a "Who this is for" one-liner
- End with single focused CTA
- Remove the repetitive label pattern

### 6. Contact Page (`src/pages/Contact.tsx`)

- Keep the form but make it simpler
- Emphasize Calendly booking as primary action (the PDF says: no calls needed, but for B2B services a call is the conversion event -- so make booking frictionless and primary)

### 7. About Page (`src/pages/About.tsx`)

- More personal, less corporate
- Written conversationally per the PDF's advice: "if you can't just riff from the heart about what you do, you're in the wrong profession"

### 8. Global CSS (`src/index.css`)

- No structural changes needed, just ensure the design stays clean

---

## Key Copy Changes

| Current (Generic) | New (Specific, per PDF rules) |
|---|---|
| "Your team on the ground inside China's factories" | "We'll beat your China factory price -- or tell you honestly we can't." |
| "China Sourcing & Supply Chain" label | Remove entirely |
| "We sit across the table from your suppliers..." | "You're overpaying your Chinese suppliers by 15-30%. We go direct to your factories, negotiate face-to-face, and bring you a better deal. If we can't, you pay nothing." |
| "Don't take our word for it" + "coming soon" | Bold guarantee: "Our promise: if we can't improve your deal, you don't pay a cent." |

---

## Mobile Considerations

- Single-column layout throughout on mobile
- Large tap targets (min 48px) on all CTAs
- Hero text sized appropriately (text-3xl on mobile, not text-5xl)
- No horizontal scrolling anywhere
- Sticky mobile CTA bar consideration at bottom

---

## What We're NOT Doing

- No video embed (the PDF recommends VSL but Byron East doesn't have one yet -- we'll leave space for it later)
- No pricing table (Byron East is consultation-based, not direct checkout)
- No fancy animations that distract from the message

