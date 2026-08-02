# Portfolio Visual Polish Specification
## Part 1 — Global Design System & Foundation

---

# Objective

This specification establishes the global visual foundation for the portfolio.

The purpose is **not** to redesign the website.

The purpose is to make the entire portfolio feel slightly more premium through subtle improvements in depth, hierarchy, lighting, and interaction while preserving the existing monochrome aesthetic.

The implementation should be deterministic.

No design decisions should be made during implementation.

---

# Scope

This specification affects the entire application.

The following should be reviewed and updated globally.

- Color tokens
- Background surfaces
- Shadows
- Typography
- Borders
- Dividers
- Focus states
- Selection styling
- Scrollbar styling

Do **not** modify layouts in this specification.

---

# Theme Tokens

The portfolio should continue using only a monochrome palette.

No accent colors should be introduced.

Do not add:

- blue
- purple
- cyan
- green
- pink
- gradients used as decorations

The only gradient permitted is the Hero ambient light defined later.

---

# Background Surface Tokens

Create two reusable background tokens.

## Primary Surface

Used by

- Hero
- Experience
- Skills
- Footer

Implementation

```css
background-color:
#0F0F10;
```

---

## Secondary Surface

Used by

- About
- Projects
- Contact

Implementation

```css
background-color:
#121212;
```

Difference between both surfaces should remain extremely subtle.

No additional surface colors should exist.

---

# Section Background Assignment

Assign backgrounds exactly as follows.

| Section | Background |
|----------|------------|
| Hero | Primary |
| About | Secondary |
| Experience | Primary |
| Projects | Secondary |
| Skills | Primary |
| Contact | Secondary |
| Footer | Primary |

No exceptions.

---

# Section Edge Highlight

Every section using the Secondary Surface should receive a subtle inset highlight.

Implementation

```css
box-shadow:
inset 0 1px 0 rgba(255,255,255,.04);
```

Apply only to

- About
- Projects
- Contact

Do not apply this highlight to

- Hero
- Experience
- Skills
- Footer

Do not apply it to cards or components.

Only section containers.

---

# Border Token

Every border throughout the application should use the same opacity.

Implementation

```css
rgba(255,255,255,.10)
```

Review

- chips
- buttons
- cards
- navigation
- section borders

Ensure consistency.

---

# Divider Token

Every `<hr>` should use

```css
border-color:
rgba(255,255,255,.08);
```

Thickness

```css
1px
```

Spacing

```css
margin-top:56px;

margin-bottom:40px;
```

Use identical spacing everywhere.

---

# Typography

Do not change typography hierarchy.

Only normalize values.

---

## Headings

Do not modify.

Keep existing

- size
- weight
- tracking
- color

---

## Body Text

Every long-form paragraph should use

```css
font-size:
15px;

line-height:
1.75;
```

Applies to

- Hero description
- About paragraphs
- Experience summaries
- Project overviews
- Skills description
- Contact description

---

## Metadata

Examples

- dates
- company names
- attribution
- availability
- role metadata

Use

```css
font-size:
14px;
```

Increase brightness by approximately

```text
5%
```

relative to the current implementation.

---

## Paragraph Contrast

Increase body paragraph brightness by approximately

```text
8%
```

Do not modify

- heading color
- button text
- navigation text

---

# Hero Ambient Lighting

The Hero section should be the only section with ambient lighting.

Implementation

```css
background-image:
radial-gradient(
circle at 50% -10%,
rgba(255,255,255,.035),
transparent 58%
);
```

Requirements

Opacity

≤ 0.04

Gradient radius

58%

No animation.

No additional gradients.

No mesh backgrounds.

---

# Hero Bottom Fade

Blend the Hero into the About section.

Implementation

```css
background-image:

radial-gradient(
circle at 50% -10%,
rgba(255,255,255,.035),
transparent 58%
),

linear-gradient(
180deg,
transparent,
rgba(255,255,255,.015)
);
```

Fade height

```text
80px
```

Opacity must remain extremely subtle.

---

# Primary Shadow

Used only for

- Primary CTA button

Implementation

```css
box-shadow:
0 1px 2px rgba(0,0,0,.35);
```

Hover

```css
box-shadow:
0 3px 12px rgba(0,0,0,.45);
```

Never add

- translateY
- scale
- glow

---

# Secondary Shadow

Used only for

Sticky Navigation

Implementation

```css
box-shadow:
0 2px 12px rgba(0,0,0,.45);
```

No other shadows should be introduced.

---

# Text Selection

Customize global selection.

Implementation

```css
::selection{
background:
rgba(255,255,255,.18);
}
```

No colored selections.

---

# Scrollbar

Desktop only.

Width

```css
8px
```

Track

```css
transparent
```

Thumb

```css
rgba(255,255,255,.18)
```

Thumb Hover

```css
rgba(255,255,255,.28)
```

Border Radius

```css
999px
```

Do not increase scrollbar width.

---

# Focus Ring

Every interactive element must share one focus style.

Implementation

```css
outline:
2px solid currentColor;

outline-offset:
2px;
```

Apply to

- buttons
- navigation links
- footer links
- contact links

Do not remove browser accessibility.

---

# Global Constraints

Do NOT introduce

- colorful gradients
- colored glows
- glassmorphism
- floating shapes
- animated backgrounds
- decorative SVGs
- background patterns
- particles
- textures
- noise overlays

The portfolio must remain monochrome.

---

# Acceptance Criteria

Implementation is complete only if:

- Exactly two background surfaces exist.
- Only Hero contains ambient lighting.
- Only Hero contains a bottom fade.
- Only Secondary Surface sections contain inset highlights.
- Body typography is standardized.
- Metadata typography is standardized.
- Paragraph contrast is increased.
- Divider opacity is identical everywhere.
- Border opacity is identical everywhere.
- Only two shadow levels exist.
- Selection color is customized.
- Desktop scrollbar is customized.
- Every interactive element shares the same focus ring.
- No new colors have been introduced.
```