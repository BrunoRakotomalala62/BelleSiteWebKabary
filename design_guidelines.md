# Design Guidelines: NY TENA KABARY - Malagasy Traditional Oratory

## Design Approach

**Selected Approach:** Custom cultural content presentation inspired by high-quality editorial sites like Medium and traditional book layouts, with vibrant accent colors honoring the ceremonial nature of Kabary.

**Design Philosophy:** Create a reverent yet modern digital presentation of traditional Malagasy oratory that balances cultural respect with contemporary web elegance.

## Core Design Elements

### Typography

**Primary Font:** Noto Serif (Google Fonts) - elegant, supports Unicode, excellent for long-form reading
- Headings: 700 weight
- Body text: 400 weight
- Size scale: Base 18px (optimized for reading), Headings: 2xl-4xl

**Accent Font:** Poppins (Google Fonts) - modern, clean for UI elements
- Navigation/UI: 500-600 weight

**Text Hierarchy:**
- Page title (NY TENA KABARY): text-5xl, font-bold
- Section titles (TOROTAKILA, etc.): text-3xl, font-bold with vibrant colors
- Subsection headers: text-2xl, font-semibold
- Body content: text-lg, leading-relaxed for comfortable reading
- Important passages: font-bold Unicode formatting

### Layout System

**Spacing Units:** Tailwind units of 4, 6, 8, 12, 16, 20
- Section padding: py-16 to py-20
- Card spacing: p-8
- Content margins: mb-6 to mb-12
- Tight spacing for related elements: gap-4

**Container Strategy:**
- Maximum width: max-w-4xl for optimal reading (prose width)
- Sidebar navigation: Fixed width 280px
- Full-width header/footer with contained inner content

### Component Library

**Navigation Components:**
- Sticky sidebar table of contents with smooth scroll
- Top header with site title and optional breadcrumbs
- Section navigation with active state indicators

**Content Cards:**
- Elevated cards (shadow-lg) for each Kabary section
- Rounded corners (rounded-xl)
- Distinct background treatments per section type
- Generous padding (p-8) for breathing room

**Typography Components:**
- Colored section headers with left border accent (border-l-4)
- Drop caps for opening passages
- Pull quotes for important ceremonial phrases
- Numbered or decorative list styling for structured content

**Layout Patterns:**
- Single column reading layout (no multi-column for body text)
- Table of contents navigation (2-column on desktop: TOC + content)
- Section dividers with decorative elements

### Vibrant Color Strategy for Section Titles

Each major section receives a distinct vibrant color:
- TOROTAKILA: Vibrant purple (#8B5CF6)
- Alasarona sections: Deep blue (#3B82F6)
- Kabary am-panambadiana: Emerald green (#10B981)
- Fanompoana: Orange (#F97316)
- Tena kabary: Rose (#F43F5E)
- Other sections: Rotate through teal, indigo, amber

**Color Implementation:**
- Section titles use their assigned vibrant color
- Left border accent matches title color
- Subtle background tint (opacity 5-10%) within cards

### Icons & Assets

**Icons:** Heroicons (outline style via CDN)
- Decorative elements for section breaks
- Navigation indicators (chevrons, menu)
- Scroll indicators

**Images:** Not required for this content-focused site

## Interaction Design

**Navigation:**
- Smooth scroll to sections when clicking TOC
- Active section highlighting in sidebar
- Sticky positioning for persistent navigation access

**Animations:** Minimal and purposeful only
- Fade-in on scroll for section cards (subtle)
- Smooth scroll behavior
- No distracting effects that detract from reading

## Accessibility

- High contrast text (dark text on light backgrounds)
- Proper heading hierarchy (h1 → h6)
- Semantic HTML for all content sections
- Focus indicators for keyboard navigation
- ARIA labels for navigation elements

## Mobile Responsiveness

**Mobile (<768px):**
- Collapsible hamburger TOC
- Full-width cards
- Reduced padding (p-6 instead of p-8)
- Stack navigation vertically

**Tablet (768px-1024px):**
- Condensed sidebar (240px)
- Maintain two-column layout

**Desktop (>1024px):**
- Full sidebar navigation visible
- Optimal reading width maintained

## Special Requirements

- All text must be Unicode-compatible for Malagasy characters
- Bold formatting (`<strong>` tags) for emphasized passages
- Preserve original text structure from images exactly
- Section organization matching TOROTAKILA structure
- Print-friendly styling (optional print stylesheet)

**Implementation Priority:** Reading experience, content accuracy, visual elegance, cultural respect.