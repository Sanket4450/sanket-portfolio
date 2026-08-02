# Portfolio Visual Polish Specification
## Part 3 — Typography, Layout Rhythm & Section Hierarchy

---

# Objective

Standardize typography, spacing, section rhythm, and reading experience across the entire portfolio.

The implementation should make every section feel like part of the same design system.

No content changes should be made.

Only spacing, typography, widths, and hierarchy should be refined.

---

# Scope

This specification applies to

- Hero
- About
- Experience
- Projects
- Skills
- Contact
- Footer

Do not modify layouts beyond spacing and typography.

---

# Section Vertical Padding

Every section should use identical vertical spacing.

Desktop

```css
padding-top:112px;
padding-bottom:112px;
```

Equivalent

```text
py-28
```

Tablet

```css
96px
```

Mobile

```css
80px
```

No section should override these values.

---

# Section Header Rhythm

Every section header should follow this exact spacing.

```text
Eyebrow

↓

12px

↓

Heading

↓

16px

↓

Description

↓

64px

↓

Content
```

Equivalent

```text
Eyebrow
mb-3

Heading
mb-4

Description
mb-16
```

Apply to

- About
- Experience
- Projects
- Skills
- Contact

---

# Eyebrow Typography

Font size

```css
14px
```

Weight

```css
500
```

Letter spacing

```css
0.16em
```

Transform

```css
uppercase
```

Bottom margin

```css
12px
```

Every section should use identical eyebrow styling.

---

# Section Heading

Desktop

```css
36px
```

Mobile

```css
32px
```

Weight

```css
700
```

Line height

```css
1.15
```

Letter spacing

```css
-0.02em
```

Maximum width

```css
650px
```

Do not vary heading sizes between sections.

---

# Section Description

Maximum width

```css
700px
```

Font size

```css
15px
```

Line height

```css
1.75
```

Bottom margin

```css
64px
```

Applies to

- About
- Experience
- Projects
- Skills
- Contact

---

# Paragraph Width Rules

Use consistent reading widths.

Hero description

```css
max-width:640px;
```

About paragraphs

```css
max-width:680px;
```

Experience summaries

```css
max-width:620px;
```

Project overview

```css
max-width:560px;
```

Skills description

```css
max-width:700px;
```

Contact description

```css
max-width:620px;
```

Do not allow long paragraphs to span the full container width.

---

# Reading Rhythm

Long-form content should follow this spacing.

```text
Heading

↓

16px

↓

Paragraph

↓

40px

↓

Subheading

↓

16px

↓

List

↓

40px

↓

Next Block
```

Avoid arbitrary spacing values.

---

# Divider Rhythm

Every divider should use identical spacing.

```css
margin-top:56px;
margin-bottom:40px;
```

No divider should use custom margins.

---

# List Rhythm

Applies to

- Experience Highlights
- Engineering Highlights
- Outcomes

Vertical spacing

```css
12px
```

Bullet gap

```css
12px
```

Bullet size

```css
10px
```

Maximum text width

```css
620px
```

Ensure every list feels identical.

---

# Technology Groups

Spacing

```text
Category Label

↓

8px

↓

Technology Chips

↓

20px

↓

Next Category
```

No category should visually merge into the next.

---

# Grid Gaps

About Principles

Desktop

```css
48px
```

Projects

Horizontal

```css
64px
```

Vertical

```css
40px
```

Skills

Horizontal

```css
48px
```

Vertical

```css
48px
```

Experience Technologies

Horizontal

```css
32px
```

Vertical

```css
20px
```

Keep these values consistent.

---

# Metadata Typography

Applies to

- dates
- companies
- project attribution
- availability
- footer metadata

Font size

```css
14px
```

Line height

```css
1.6
```

Brightness

Increase approximately

```text
5%
```

relative to current implementation.

---

# Body Typography

Every long paragraph

Font size

```css
15px
```

Line height

```css
1.75
```

Brightness

Increase approximately

```text
8%
```

Maintain consistent typography across all sections.

---

# Footer

Vertical padding

```css
32px
```

Keep footer visually compact.

Do not introduce additional spacing.

---

# Contact Section Rhythm

Maintain current layout.

Use the following spacing.

```text
Heading

↓

24px

↓

Description

↓

48px

↓

Availability

↓

36px

↓

CTA Buttons
```

Do not modify content.

Only adjust spacing.

---

# Alignment Rules

Verify that

- every section header starts on the same horizontal line
- every paragraph begins on the same alignment line
- technology chips align with category labels
- lists align with paragraph text
- dividers align with container edges

No section should appear offset.

---

# Responsive Rules

Desktop

Keep all defined widths.

Tablet

Reduce only

- grid columns
- outer padding

Do not change typography.

Mobile

Reduce only

- section padding
- heading size

Maintain

- paragraph widths
- reading rhythm
- spacing hierarchy

---

# Visual Consistency Audit

Review every section.

Verify

✓ Eyebrow spacing is identical.

✓ Heading spacing is identical.

✓ Description spacing is identical.

✓ Paragraph widths follow specification.

✓ Lists follow identical spacing.

✓ Technology groups follow identical spacing.

✓ Divider spacing is identical.

✓ Footer remains compact.

✓ Contact spacing matches specification.

✓ No arbitrary spacing values remain.

---

# Acceptance Criteria

Implementation is complete only if

- Every section header follows the exact same rhythm.
- Every section description uses identical typography.
- Every paragraph respects its defined maximum width.
- Every metadata element uses 14px typography.
- Every long-form paragraph uses 15px typography with 1.75 line-height.
- Divider spacing is consistent throughout the portfolio.
- Technology groups use consistent spacing.
- Lists use consistent spacing.
- Responsive behavior preserves the same reading experience across all breakpoints.
- The entire portfolio reads as one cohesive editorial layout.