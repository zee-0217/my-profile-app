---
name: Sapphire Minimal Portfolio
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#434655'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#747686'
  outline-variant: '#c4c5d7'
  surface-tint: '#2151da'
  primary: '#0037b0'
  on-primary: '#ffffff'
  primary-container: '#1d4ed8'
  on-primary-container: '#cad3ff'
  inverse-primary: '#b7c4ff'
  secondary: '#0058be'
  on-secondary: '#ffffff'
  secondary-container: '#2170e4'
  on-secondary-container: '#fefcff'
  tertiary: '#003ca3'
  on-tertiary: '#ffffff'
  tertiary-container: '#0051d6'
  on-tertiary-container: '#c9d4ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b7c4ff'
  on-primary-fixed: '#001551'
  on-primary-fixed-variant: '#0039b5'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#dbe1ff'
  tertiary-fixed-dim: '#b4c5ff'
  on-tertiary-fixed: '#00174b'
  on-tertiary-fixed-variant: '#003ea8'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0em
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.03em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 2rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The visual identity embodies technical precision, thoughtful craftsmanship, and intellectual clarity. Designed for a high-caliber digital portfolio, the aesthetic combines modern minimalism with refined corporate editorial balance. It targets engineering leaders, product visionaries, design directors, and discerning clients.

The emotional goal is immediate credibility and forward-thinking competence. Content receives utmost prominence across high-contrast typographic layouts, quiet slate structure, and decisive electric sapphire accents that signal intentionality without visual noise.

## Colors

The system uses a deliberate hierarchy anchored by luminous cool-slate foundations and energetic blues:

- **Canvas & Surfaces**: The base canvas operates on `#FFFFFF`, layered against secondary structural canvas tones of `#F8FAFC` and surface card fills of `#FFFFFF`.
- **Primary Accent (`#1D4ED8`)**: Deep royal blue used for authoritative interactive points, primary buttons, active state indicators, and key metric emphases.
- **Secondary Accent (`#3B82F6`)**: Electric sapphire applied to badges, hover state blooms, links, and high-engagement details.
- **Tertiary Accent (`#2563EB`)**: Middle-ground pure blue bridging interactions, active tabs, and focused borders.
- **Neutrals**: Scaled from deep ink `#0F172A` (primary text) through slate `#334155` (secondary text) down to boundary slate `#E2E8F0` and `#CBD5E1` for borders and hairpins.

## Typography

The typography couples the geometric balance of Plus Jakarta Sans for titles with the neutral clarity of Inter for sustained reading.

- Titles utilize negative letter-spacing to produce tight editorial impact.
- Body text retains breathing room through generous line-heights (1.6x - 1.65x).
- Labels, code snippets, and metadata tags stay crisp and legible down to 12px with uppercase tracking where required.

## Layout & Spacing

A 12-column responsive fluid grid aligns desktop views, tapering into 8 columns on tablet devices (breakpoint: `768px`) and 4 columns on mobile (breakpoint: `480px`). Maximum content bounds are constrained at `1280px` centered width.

- **Vertical Rhythm**: Section layouts rely on wide vertical separation (`5rem` to `7rem` between narrative blocks) to establish calm pacing and clarity.
- **Horizontal Rules**: Gaps between cards adhere to strict multi-column rhythm tokens, ensuring visual consistency across project grids and experiential timelines.

## Elevation & Depth

Visual hierarchy uses ultra-subtle ambient drop shadows paired with precision hairline borders (`1px solid #E2E8F0`). 

- **Surface Floor (`Level 0`)**: Flat `#FFFFFF` or `#F8FAFC` foundation.
- **Standard Card Elevation (`Level 1`)**: `0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.03)` with a hairline boundary of `border: 1px solid #E2E8F0`.
- **Card Interactive/Hover State (`Level 2`)**: `0 12px 24px -6px rgba(37, 99, 235, 0.08), 0 4px 6px -2px rgba(15, 23, 42, 0.03)`, subtle negative translation (`translateY(-2px)`), and border transition to `#CBD5E1`.
- **Floating Overlays & Modals (`Level 3`)**: `0 20px 32px -8px rgba(15, 23, 42, 0.08), 0 8px 12px -4px rgba(15, 23, 42, 0.04)`.

## Shapes

The interface embraces a balanced modern curvature using `0.5rem` (`8px`) as standard container rounding, scaling to `1rem` (`16px`) for project cards and case study showcases. 

Small interactive elements such as technology tags, filters, and pill indicators utilize full radius (`9999px`) to distinguish categorical attributes from structural cards.

## Components

### Buttons
- **Primary**: Solid background `#1D4ED8`, text `#FFFFFF`, font-weight 500. On hover, background transitions to `#1E40AF` with a subtle elevation bloom.
- **Secondary/Outline**: Background transparent, border `1px solid #CBD5E1`, text `#0F172A`. On hover, background shifts to `#F8FAFC` and border shifts to `#94A3B8`.
- **Ghost/Tertiary**: Text `#1D4ED8`, padding inline with text. Hover introduces an ambient `#EFF6FF` tint.

### Cards (Project & Experience)
- Fills are pure `#FFFFFF` over `#F8FAFC` background canvases.
- Borders use `1px solid #E2E8F0`.
- Hover triggers a smooth lift (`translateY(-2px)`) accompanied by an electric sapphire tinted glow (`rgba(37, 99, 235, 0.08)`).
- Padding uses `space-lg` to `space-xl` internally to maintain an open, uncluttered portfolio feel.

### Chips & Badges
- **Status/Skill Chips**: Background `#EFF6FF`, text `#1D4ED8`, border `1px solid #DBEAFE`, full-pill curvature (`9999px`), padding `0.25rem 0.75rem`.
- **Category Tags**: Neutral background `#F1F5F9`, text `#475569`, border `1px solid #E2E8F0`.

### Form Fields & Inputs
- Border `1px solid #CBD5E1`, background `#FFFFFF`, text `#0F172A`.
- Active focus state: border color `#2563EB` with an ambient focus ring: `box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15)`.

### Project Showcase Metrics
- High-contrast stat counters using `display-mobile` with text color `#1D4ED8`.
- Accompanied by uppercase descriptive subtext in `label-sm` rendered in `#64748B`.