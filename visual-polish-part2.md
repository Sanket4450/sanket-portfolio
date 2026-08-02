# Portfolio Visual Polish Specification
## Part 2 — Navigation, Buttons & Interactive Components

---

# Objective

This specification standardizes every interactive component in the portfolio.

After implementation:

- every button behaves identically
- every navigation item behaves identically
- every outlined action behaves identically
- every technology chip behaves identically
- every hover transition follows the same timing
- every interaction feels subtle and premium

No interaction should attract attention through animation.

Interaction quality should come from consistency.

---

# Scope

This specification applies to

- Navigation
- Hero CTA
- Contact CTA
- Secondary buttons
- Technology chips
- Navigation links
- Interactive links

Do not modify layouts.

Only update interaction behavior and styling.

---

# Global Transition System

Every interactive element must share exactly the same transition.

Implementation

```css
transition:
background-color 200ms ease-out,
border-color 200ms ease-out,
color 200ms ease-out,
box-shadow 200ms ease-out,
opacity 200ms ease-out;
```

Equivalent Tailwind

```text
transition-colors
transition-shadow
duration-200
ease-out
```

No component should use

- duration-300
- duration-500
- ease-in
- spring animations

---

# Sticky Navigation

When page scroll position exceeds

```text
24px
```

apply the following changes.

Background

```css
rgba(18,18,18,.92)
```

Backdrop

```css
backdrop-filter:
blur(14px);
```

Shadow

```css
box-shadow:
0 2px 12px rgba(0,0,0,.45);
```

Transition

```text
200ms ease-out
```

Navigation height must remain unchanged.

---

# Active Navigation Item

Current section should be visually distinguishable.

Implementation

Text

```css
font-weight:
600;
```

Underline

```css
height:
2px;

border-radius:
999px;

width:
100%;
```

Animation

```text
200ms ease-out
```

Inactive navigation items

Remain unchanged.

Do NOT use

- background fills
- pills
- badges
- gradients
- animated indicators

---

# Navigation Hover

Hover should only modify

- text color
- opacity

Do NOT

- move
- scale
- translate

Hover animation

```text
200ms ease-out
```

---

# Primary Buttons

Applies to

- Hero CTA
- Email button

Height

```text
48px
```

Horizontal padding

```text
24px
```

Icon gap

```text
8px
```

Border radius

```text
10px
```

Font

```text
14px

500
```

Default shadow

```css
0 1px 2px rgba(0,0,0,.35)
```

Hover shadow

```css
0 3px 12px rgba(0,0,0,.45)
```

Hover background

Darken approximately

```text
5%
```

Do NOT

- scale
- translate
- glow

---

# Secondary Buttons

Applies to

- LinkedIn
- GitHub
- Resume

Height

```text
48px
```

Horizontal padding

```text
24px
```

Border

```text
1px
```

Radius

```text
10px
```

Hover background

```css
rgba(255,255,255,.03)
```

Hover border

Increase opacity approximately

```text
15%
```

Hover text

Increase opacity approximately

```text
10%
```

No movement.

---

# Icon System

Every button icon

```text
16px
```

Gap

```text
8px
```

No exceptions.

---

# Technology Chips

Apply identical styling everywhere.

Current implementations should be unified.

Height

```text
28px
```

Padding

```text
10px horizontal

4px vertical
```

Radius

```text
8px
```

Border

```text
1px
```

Font

```text
12px

500
```

Default background

```css
rgba(255,255,255,.025)
```

Hover background

```css
rgba(255,255,255,.045)
```

Hover border

Increase opacity approximately

```text
15%
```

Cursor

```css
cursor:
default;
```

Technology chips should never appear clickable.

---

# Links

Applies to

- footer links
- navigation links
- contact links

Hover

Only change

- text color
- opacity

Transition

```text
200ms ease-out
```

No underline animation.

No movement.

---

# Cursor Rules

Buttons

```text
pointer
```

Links

```text
pointer
```

Technology chips

```text
default
```

Text

```text
text
```

Keep browser expectations intact.

---

# Hover Restrictions

Hover effects may modify only

- color
- background
- border
- opacity
- shadow

Never animate

- width
- height
- margin
- padding
- translate
- rotate
- scale
- skew
- blur

No floating effects.

---

# Contact Buttons

Verify all contact buttons share

- identical height
- identical border radius
- identical icon size
- identical horizontal padding
- identical transition
- identical hover behavior

Only the Email button should remain visually primary.

All remaining actions should remain outlined.

---

# Interaction Consistency Audit

Review every interactive element in the application.

Verify identical implementation for

Navigation

Hero CTA

Email button

Resume button

LinkedIn button

GitHub button

Technology chips

Footer links

No component should introduce a unique interaction style.

---

# Acceptance Criteria

Implementation is complete only if

✓ Navigation gains sticky background, blur, and shadow after 24px scroll.

✓ Active navigation uses a 2px underline.

✓ All navigation transitions use 200ms ease-out.

✓ All primary buttons share identical dimensions.

✓ All secondary buttons share identical dimensions.

✓ Technology chips share identical styling.

✓ Technology chips never appear clickable.

✓ Every button uses identical transition timing.

✓ Icons use a consistent 16px size.

✓ Hover effects modify only color, border, background, opacity, and shadow.

✓ No scaling, translation, glow, or animated movement exists anywhere in the portfolio.

✓ The interaction language feels completely unified across the entire website.