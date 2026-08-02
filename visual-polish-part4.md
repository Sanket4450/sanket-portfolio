# Portfolio Visual Polish Specification
## Part 4 — Motion System, Reveal Animations & Micro-Interactions

---

# Objective

This specification standardizes every animation and micro-interaction across the portfolio.

The portfolio should feel responsive and polished without drawing attention to animation itself.

Every animation should support the content rather than become part of the content.

Motion should feel calm, intentional, and consistent.

---

# Scope

This specification applies to

- Reveal component
- Navigation
- Hero
- Experience
- Projects
- Skills
- Contact
- Footer
- Buttons
- Technology chips
- Hover interactions

No layout modifications are included.

---

# Motion Principles

Every animation should satisfy the following principles.

- Fast
- Predictable
- Consistent
- Minimal
- Non-distracting

The user should notice smoothness, not animation.

---

# Reveal Animation

Every Reveal component throughout the portfolio must use the exact same animation.

Animation

```text
Fade In

+

Translate Y
```

---

## Initial State

```css
opacity:0;

transform:
translateY(12px);
```

---

## Final State

```css
opacity:1;

transform:
translateY(0);
```

---

## Duration

```css
500ms
```

---

## Timing Function

```css
ease-out
```

---

## Delay Rules

Reveal timing should follow one consistent sequence.

Section Eyebrow

```text
0ms
```

Heading

```text
50ms
```

Description

```text
100ms
```

Primary Content

```text
150ms
```

Secondary Content

```text
200ms
```

Lists

Increment each sibling

```text
50ms
```

Maximum Reveal Delay

```text
300ms
```

Never exceed

```text
300ms
```

---

# Reveal Consistency

Every section should reveal in the same order.

```text
Eyebrow

↓

Heading

↓

Description

↓

Primary Content

↓

Secondary Content
```

Do not reveal random elements independently.

---

# Navigation Animation

Navigation should animate only

- background
- blur
- shadow
- text color

Duration

```css
200ms
```

Timing

```css
ease-out
```

Do not animate

- height
- width
- position

---

# Navigation Active State

When active navigation changes

Animate

- underline opacity
- underline width
- text color

Duration

```css
200ms
```

Underline should never bounce.

---

# Hero CTA

Hover animation

Only animate

- background
- shadow

Duration

```css
200ms
```

Do not animate

- translate
- scale

---

# Secondary Buttons

Hover should animate only

- background
- border
- text color

Duration

```css
200ms
```

No movement.

---

# Technology Chips

Hover animation

Only

Background

↓

Border

↓

Text Color

Duration

```css
200ms
```

Do not animate

- size
- padding
- transform

Cursor remains

```css
default
```

---

# Lists

Engineering Highlights

Outcomes

Experience Highlights

No staggered animation between bullets.

Reveal the entire list together.

Avoid sequential bullet animations.

---

# Divider Animation

None.

Dividers remain static.

---

# Typography

Never animate

- font size
- font weight
- letter spacing
- line height

---

# Icons

Never animate

- rotation
- bounce
- scale

Icons should remain static.

---

# Hover Behavior Rules

Allowed

- color
- opacity
- background
- border
- shadow

Forbidden

- translate
- scale
- rotate
- skew
- blur
- floating
- elastic effects

---

# Page Load

When the page loads

Only content should animate.

Backgrounds remain static.

No animated gradients.

No animated lighting.

No animated blur.

---

# Scroll Behavior

Enable

```css
scroll-behavior:
smooth;
```

Every section should define

```css
scroll-margin-top:
80px;
```

This ensures navigation links align correctly beneath the sticky navigation.

---

# Motion Performance

Animations should only affect

- opacity
- color
- background
- border
- box-shadow
- transform (Reveal only)

Avoid animating

- width
- height
- margin
- padding
- grid
- flex
- position

This prevents layout recalculations.

---

# Accessibility

Animations should respect

```css
prefers-reduced-motion
```

When reduced motion is enabled

- disable Reveal translations
- disable fade transitions
- disable smooth scrolling

Content should appear immediately.

Hover styles remain functional.

---

# Timing Matrix

| Element | Duration | Delay | Timing |
|----------|---------:|------:|--------|
| Reveal | 500ms | 0–300ms | ease-out |
| Navigation | 200ms | 0 | ease-out |
| Primary Button | 200ms | 0 | ease-out |
| Secondary Button | 200ms | 0 | ease-out |
| Technology Chips | 200ms | 0 | ease-out |
| Navigation Underline | 200ms | 0 | ease-out |

No other timing values should exist.

---

# Interaction Audit

Review every interactive element.

Verify

- Navigation
- Hero CTA
- Email Button
- Resume Button
- GitHub Button
- LinkedIn Button
- Technology Chips
- Navigation Links

All should share identical interaction timing.

---

# Acceptance Criteria

Implementation is complete only if

✓ Every Reveal component uses the same animation.

✓ Every Reveal uses 500ms ease-out.

✓ Reveal translation is exactly 12px.

✓ Reveal delays never exceed 300ms.

✓ Navigation transitions use 200ms.

✓ Buttons use identical hover timing.

✓ Technology chips use identical hover timing.

✓ Lists reveal together instead of bullet-by-bullet.

✓ Smooth scrolling is enabled.

✓ Every section uses an 80px scroll margin.

✓ Reduced-motion users receive a motion-safe experience.

✓ No animation changes layout.

✓ No scaling, bouncing, floating, or decorative animation exists anywhere in the portfolio.

The final motion system should feel consistent, understated, and invisible—enhancing the experience without becoming a visual feature itself.