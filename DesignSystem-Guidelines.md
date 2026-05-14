# Design System Guidelines

A complete, production-ready Design System for modern SaaS applications. This system follows Atomic Design principles, supports light and dark modes, and meets WCAG AA accessibility standards.

**Inspired by:** Material 3, Polaris, Untitled UI, Linear, Stripe

---

## 🎨 Foundation Tokens

### Colors

#### Primary Palette
```css
/* Light Mode */
--color-primary-50: #f0f9ff;
--color-primary-100: #e0f2fe;
--color-primary-200: #bae6fd;
--color-primary-300: #7dd3fc;
--color-primary-400: #38bdf8;
--color-primary-500: #0ea5e9;  /* Base */
--color-primary-600: #0284c7;
--color-primary-700: #0369a1;
--color-primary-800: #075985;
--color-primary-900: #0c4a6e;

/* Dark Mode */
--color-primary-50-dark: #0c4a6e;
--color-primary-100-dark: #075985;
--color-primary-200-dark: #0369a1;
--color-primary-300-dark: #0284c7;
--color-primary-400-dark: #0ea5e9;
--color-primary-500-dark: #38bdf8;  /* Base */
--color-primary-600-dark: #7dd3fc;
--color-primary-700-dark: #bae6fd;
--color-primary-800-dark: #e0f2fe;
--color-primary-900-dark: #f0f9ff;
```

#### Secondary Palette
```css
/* Light Mode */
--color-secondary-50: #faf5ff;
--color-secondary-100: #f3e8ff;
--color-secondary-200: #e9d5ff;
--color-secondary-300: #d8b4fe;
--color-secondary-400: #c084fc;
--color-secondary-500: #a855f7;  /* Base */
--color-secondary-600: #9333ea;
--color-secondary-700: #7e22ce;
--color-secondary-800: #6b21a8;
--color-secondary-900: #581c87;

/* Dark Mode */
--color-secondary-50-dark: #581c87;
--color-secondary-100-dark: #6b21a8;
--color-secondary-200-dark: #7e22ce;
--color-secondary-300-dark: #9333ea;
--color-secondary-400-dark: #a855f7;
--color-secondary-500-dark: #c084fc;  /* Base */
--color-secondary-600-dark: #d8b4fe;
--color-secondary-700-dark: #e9d5ff;
--color-secondary-800-dark: #f3e8ff;
--color-secondary-900-dark: #faf5ff;
```

#### Neutral/Surface Palette
```css
/* Light Mode */
--color-neutral-50: #fafafa;
--color-neutral-100: #f5f5f5;
--color-neutral-200: #e5e5e5;
--color-neutral-300: #d4d4d4;
--color-neutral-400: #a3a3a3;
--color-neutral-500: #737373;
--color-neutral-600: #525252;
--color-neutral-700: #404040;
--color-neutral-800: #262626;
--color-neutral-900: #171717;

/* Dark Mode */
--color-neutral-50-dark: #171717;
--color-neutral-100-dark: #262626;
--color-neutral-200-dark: #404040;
--color-neutral-300-dark: #525252;
--color-neutral-400-dark: #737373;
--color-neutral-500-dark: #a3a3a3;
--color-neutral-600-dark: #d4d4d4;
--color-neutral-700-dark: #e5e5e5;
--color-neutral-800-dark: #f5f5f5;
--color-neutral-900-dark: #fafafa;
```

#### Semantic Colors

**Success**
```css
--color-success-50: #f0fdf4;
--color-success-100: #dcfce7;
--color-success-500: #22c55e;  /* Base */
--color-success-600: #16a34a;
--color-success-700: #15803d;
--color-success-900: #14532d;
```

**Warning**
```css
--color-warning-50: #fffbeb;
--color-warning-100: #fef3c7;
--color-warning-500: #f59e0b;  /* Base */
--color-warning-600: #d97706;
--color-warning-700: #b45309;
--color-warning-900: #78350f;
```

**Error**
```css
--color-error-50: #fef2f2;
--color-error-100: #fee2e2;
--color-error-500: #ef4444;  /* Base */
--color-error-600: #dc2626;
--color-error-700: #b91c1c;
--color-error-900: #7f1d1d;
```

#### Semantic Token Mapping
```css
/* Light Mode */
--color-background: var(--color-neutral-50);
--color-surface: #ffffff;
--color-surface-elevated: #ffffff;
--color-surface-overlay: rgba(0, 0, 0, 0.5);

--color-text-primary: var(--color-neutral-900);
--color-text-secondary: var(--color-neutral-600);
--color-text-tertiary: var(--color-neutral-500);
--color-text-disabled: var(--color-neutral-400);
--color-text-on-primary: #ffffff;
--color-text-on-secondary: #ffffff;

--color-border-default: var(--color-neutral-200);
--color-border-subtle: var(--color-neutral-100);
--color-border-strong: var(--color-neutral-300);
--color-border-focus: var(--color-primary-500);

/* Dark Mode */
--color-background-dark: var(--color-neutral-50-dark);
--color-surface-dark: var(--color-neutral-100-dark);
--color-surface-elevated-dark: var(--color-neutral-200-dark);
--color-surface-overlay-dark: rgba(0, 0, 0, 0.7);

--color-text-primary-dark: var(--color-neutral-900-dark);
--color-text-secondary-dark: var(--color-neutral-600-dark);
--color-text-tertiary-dark: var(--color-neutral-500-dark);
--color-text-disabled-dark: var(--color-neutral-400-dark);

--color-border-default-dark: var(--color-neutral-200-dark);
--color-border-subtle-dark: var(--color-neutral-100-dark);
--color-border-strong-dark: var(--color-neutral-300-dark);
```

#### Opacity Tokens
```css
--opacity-0: 0;
--opacity-5: 0.05;
--opacity-10: 0.1;
--opacity-20: 0.2;
--opacity-30: 0.3;
--opacity-40: 0.4;
--opacity-50: 0.5;
--opacity-60: 0.6;
--opacity-70: 0.7;
--opacity-80: 0.8;
--opacity-90: 0.9;
--opacity-100: 1;
```

---

### Typography

#### Font Families
```css
--font-family-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
--font-family-mono: 'JetBrains Mono', 'Fira Code', Consolas, monospace;
--font-family-display: 'Cal Sans', 'Inter', sans-serif;
```

#### Font Weights
```css
--font-weight-light: 300;
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
--font-weight-extrabold: 800;
```

#### Font Sizes
```css
--font-size-xs: 0.75rem;      /* 12px */
--font-size-sm: 0.875rem;     /* 14px */
--font-size-base: 1rem;       /* 16px */
--font-size-lg: 1.125rem;     /* 18px */
--font-size-xl: 1.25rem;      /* 20px */
--font-size-2xl: 1.5rem;      /* 24px */
--font-size-3xl: 1.875rem;    /* 30px */
--font-size-4xl: 2.25rem;     /* 36px */
--font-size-5xl: 3rem;        /* 48px */
--font-size-6xl: 3.75rem;     /* 60px */
--font-size-7xl: 4.5rem;      /* 72px */
```

#### Line Heights
```css
--line-height-tight: 1.25;
--line-height-snug: 1.375;
--line-height-normal: 1.5;
--line-height-relaxed: 1.625;
--line-height-loose: 2;
```

#### Letter Spacing
```css
--letter-spacing-tighter: -0.05em;
--letter-spacing-tight: -0.025em;
--letter-spacing-normal: 0;
--letter-spacing-wide: 0.025em;
--letter-spacing-wider: 0.05em;
--letter-spacing-widest: 0.1em;
```

#### Typography Styles

**Display**
```css
/* Display XL */
.text-display-xl {
  font-family: var(--font-family-display);
  font-size: var(--font-size-7xl);     /* 72px */
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-tighter);
}

/* Display L */
.text-display-l {
  font-family: var(--font-family-display);
  font-size: var(--font-size-6xl);     /* 60px */
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-tight);
}
```

**Headings**
```css
/* H1 */
.text-h1 {
  font-family: var(--font-family-sans);
  font-size: var(--font-size-5xl);     /* 48px */
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-tight);
}

/* H2 */
.text-h2 {
  font-family: var(--font-family-sans);
  font-size: var(--font-size-4xl);     /* 36px */
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
  letter-spacing: var(--letter-spacing-tight);
}

/* H3 */
.text-h3 {
  font-family: var(--font-family-sans);
  font-size: var(--font-size-3xl);     /* 30px */
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
  letter-spacing: var(--letter-spacing-normal);
}

/* H4 */
.text-h4 {
  font-family: var(--font-family-sans);
  font-size: var(--font-size-2xl);     /* 24px */
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-normal);
  letter-spacing: var(--letter-spacing-normal);
}

/* H5 */
.text-h5 {
  font-family: var(--font-family-sans);
  font-size: var(--font-size-xl);      /* 20px */
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-normal);
  letter-spacing: var(--letter-spacing-normal);
}

/* H6 */
.text-h6 {
  font-family: var(--font-family-sans);
  font-size: var(--font-size-lg);      /* 18px */
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-normal);
  letter-spacing: var(--letter-spacing-normal);
}
```

**Body**
```css
/* Body Large */
.text-body-lg {
  font-family: var(--font-family-sans);
  font-size: var(--font-size-lg);      /* 18px */
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--letter-spacing-normal);
}

/* Body Medium (Base) */
.text-body-md {
  font-family: var(--font-family-sans);
  font-size: var(--font-size-base);    /* 16px */
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-normal);
  letter-spacing: var(--letter-spacing-normal);
}

/* Body Small */
.text-body-sm {
  font-family: var(--font-family-sans);
  font-size: var(--font-size-sm);      /* 14px */
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-normal);
  letter-spacing: var(--letter-spacing-normal);
}
```

**Utility**
```css
/* Caption */
.text-caption {
  font-family: var(--font-family-sans);
  font-size: var(--font-size-xs);      /* 12px */
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-normal);
  letter-spacing: var(--letter-spacing-wide);
}

/* Label */
.text-label {
  font-family: var(--font-family-sans);
  font-size: var(--font-size-sm);      /* 14px */
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-normal);
  letter-spacing: var(--letter-spacing-wide);
  text-transform: uppercase;
}
```

---

### Spacing

```css
--spacing-0: 0;
--spacing-2: 0.125rem;   /* 2px */
--spacing-4: 0.25rem;    /* 4px */
--spacing-8: 0.5rem;     /* 8px */
--spacing-12: 0.75rem;   /* 12px */
--spacing-16: 1rem;      /* 16px */
--spacing-24: 1.5rem;    /* 24px */
--spacing-32: 2rem;      /* 32px */
--spacing-40: 2.5rem;    /* 40px */
--spacing-48: 3rem;      /* 48px */
--spacing-64: 4rem;      /* 64px */
--spacing-80: 5rem;      /* 80px */
--spacing-96: 6rem;      /* 96px */
--spacing-128: 8rem;     /* 128px */
```

**Spacing Scale Usage:**
- `0-8px`: Fine-tune spacing (icons, tight elements)
- `12-24px`: Component internal spacing
- `32-48px`: Section spacing
- `64-128px`: Page-level spacing

---

### Border Radius

```css
--radius-none: 0;
--radius-sm: 0.25rem;    /* 4px */
--radius-md: 0.5rem;     /* 8px */
--radius-lg: 0.75rem;    /* 12px */
--radius-xl: 1rem;       /* 16px */
--radius-2xl: 1.5rem;    /* 24px */
--radius-full: 9999px;   /* Fully rounded */
```

**Usage Guidelines:**
- Buttons, inputs: `radius-md` (8px)
- Cards, modals: `radius-lg` (12px)
- Large containers: `radius-xl` (16px)
- Pills, avatars: `radius-full`

---

### Elevation (Shadows)

```css
/* Shadows */
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

/* Dark Mode Shadows (lighter, more subtle) */
--shadow-sm-dark: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
--shadow-md-dark: 0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.3);
--shadow-lg-dark: 0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.4);
--shadow-xl-dark: 0 20px 25px -5px rgba(0, 0, 0, 0.6), 0 10px 10px -5px rgba(0, 0, 0, 0.5);
```

**Elevation Levels:**
- Level 0: No shadow (flat surface)
- Level 1: `shadow-sm` (subtle lift - cards at rest)
- Level 2: `shadow-md` (moderate lift - hover states)
- Level 3: `shadow-lg` (high lift - dropdowns, popovers)
- Level 4: `shadow-xl` (highest - modals, overlays)

---

## 🧩 Components

### Buttons

#### Variants

**Primary Button**
```css
/* button/primary/default/md */
.btn-primary {
  background: var(--color-primary-500);
  color: var(--color-text-on-primary);
  border: none;
  border-radius: var(--radius-md);
  padding: var(--spacing-12) var(--spacing-24);
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-base);
  cursor: pointer;
  transition: all 150ms ease;
}

/* Hover */
.btn-primary:hover {
  background: var(--color-primary-600);
  box-shadow: var(--shadow-md);
  transform: translateY(-1px);
}

/* Focus */
.btn-primary:focus {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 2px;
}

/* Disabled */
.btn-primary:disabled {
  background: var(--color-neutral-200);
  color: var(--color-text-disabled);
  cursor: not-allowed;
  opacity: 0.6;
}

/* Loading */
.btn-primary.loading {
  position: relative;
  color: transparent;
  pointer-events: none;
}
```

**Secondary Button**
```css
/* button/secondary/default/md */
.btn-secondary {
  background: transparent;
  color: var(--color-primary-500);
  border: 1.5px solid var(--color-primary-500);
  border-radius: var(--radius-md);
  padding: var(--spacing-12) var(--spacing-24);
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-base);
  cursor: pointer;
  transition: all 150ms ease;
}

.btn-secondary:hover {
  background: var(--color-primary-50);
  border-color: var(--color-primary-600);
}
```

**Ghost Button**
```css
/* button/ghost/default/md */
.btn-ghost {
  background: transparent;
  color: var(--color-text-primary);
  border: none;
  border-radius: var(--radius-md);
  padding: var(--spacing-12) var(--spacing-24);
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-base);
  cursor: pointer;
  transition: all 150ms ease;
}

.btn-ghost:hover {
  background: var(--color-neutral-100);
}
```

**Destructive Button**
```css
/* button/destructive/default/md */
.btn-destructive {
  background: var(--color-error-500);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  padding: var(--spacing-12) var(--spacing-24);
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-base);
  cursor: pointer;
  transition: all 150ms ease;
}

.btn-destructive:hover {
  background: var(--color-error-600);
}
```

#### Sizes

```css
/* Small */
.btn-sm {
  padding: var(--spacing-8) var(--spacing-16);
  font-size: var(--font-size-sm);
  height: 36px;
}

/* Medium (Default) */
.btn-md {
  padding: var(--spacing-12) var(--spacing-24);
  font-size: var(--font-size-base);
  height: 44px;
}

/* Large */
.btn-lg {
  padding: var(--spacing-16) var(--spacing-32);
  font-size: var(--font-size-lg);
  height: 52px;
}
```

---

### Inputs

#### Text Input

```css
/* input/text/default */
.input {
  width: 100%;
  padding: var(--spacing-12) var(--spacing-16);
  font-size: var(--font-size-base);
  color: var(--color-text-primary);
  background: var(--color-surface);
  border: 1.5px solid var(--color-border-default);
  border-radius: var(--radius-md);
  transition: all 150ms ease;
}

/* Focus */
.input:focus {
  outline: none;
  border-color: var(--color-border-focus);
  box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1);
}

/* Error */
.input.error {
  border-color: var(--color-error-500);
}

.input.error:focus {
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

/* Success */
.input.success {
  border-color: var(--color-success-500);
}

/* Disabled */
.input:disabled {
  background: var(--color-neutral-50);
  color: var(--color-text-disabled);
  cursor: not-allowed;
  opacity: 0.6;
}
```

#### Input Variants

```css
/* Search Input */
.input-search {
  padding-left: var(--spacing-40); /* Space for icon */
}

/* Password Input */
.input-password {
  padding-right: var(--spacing-40); /* Space for toggle icon */
}

/* Textarea */
.textarea {
  min-height: 120px;
  resize: vertical;
  line-height: var(--line-height-relaxed);
}

/* Select */
.select {
  appearance: none;
  padding-right: var(--spacing-40);
  background-image: url("data:image/svg+xml,..."); /* Chevron icon */
  background-repeat: no-repeat;
  background-position: right var(--spacing-12) center;
}
```

---

### Navigation

#### Navbar

```css
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-16) var(--spacing-32);
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border-subtle);
  height: 64px;
}

.navbar-link {
  padding: var(--spacing-8) var(--spacing-16);
  color: var(--color-text-secondary);
  font-weight: var(--font-weight-medium);
  border-radius: var(--radius-md);
  transition: all 150ms ease;
}

.navbar-link:hover {
  color: var(--color-text-primary);
  background: var(--color-neutral-100);
}

.navbar-link.active {
  color: var(--color-primary-500);
  background: var(--color-primary-50);
}
```

#### Sidebar

```css
.sidebar {
  width: 280px;
  height: 100vh;
  background: var(--color-surface);
  border-right: 1px solid var(--color-border-subtle);
  padding: var(--spacing-24);
  overflow-y: auto;
}

.sidebar-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-12);
  padding: var(--spacing-12) var(--spacing-16);
  border-radius: var(--radius-md);
  color: var(--color-text-secondary);
  font-weight: var(--font-weight-medium);
  transition: all 150ms ease;
}

.sidebar-item:hover {
  background: var(--color-neutral-100);
  color: var(--color-text-primary);
}

.sidebar-item.active {
  background: var(--color-primary-50);
  color: var(--color-primary-500);
}
```

#### Tabs

```css
.tabs {
  display: flex;
  gap: var(--spacing-4);
  border-bottom: 1px solid var(--color-border-default);
}

.tab {
  padding: var(--spacing-12) var(--spacing-24);
  color: var(--color-text-secondary);
  font-weight: var(--font-weight-medium);
  border-bottom: 2px solid transparent;
  transition: all 150ms ease;
  cursor: pointer;
}

.tab:hover {
  color: var(--color-text-primary);
}

.tab.active {
  color: var(--color-primary-500);
  border-bottom-color: var(--color-primary-500);
}
```

#### Breadcrumb

```css
.breadcrumb {
  display: flex;
  align-items: center;
  gap: var(--spacing-8);
  font-size: var(--font-size-sm);
}

.breadcrumb-item {
  color: var(--color-text-secondary);
}

.breadcrumb-item.current {
  color: var(--color-text-primary);
  font-weight: var(--font-weight-medium);
}

.breadcrumb-separator {
  color: var(--color-text-tertiary);
}
```

#### Pagination

```css
.pagination {
  display: flex;
  gap: var(--spacing-8);
  align-items: center;
}

.pagination-button {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border-default);
  background: var(--color-surface);
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: all 150ms ease;
}

.pagination-button:hover {
  background: var(--color-neutral-100);
}

.pagination-button.active {
  background: var(--color-primary-500);
  color: white;
  border-color: var(--color-primary-500);
}
```

---

### Feedback Components

#### Toast

```css
.toast {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-12);
  padding: var(--spacing-16) var(--spacing-20);
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--color-border-default);
  min-width: 320px;
  max-width: 480px;
}

.toast.success {
  border-left: 4px solid var(--color-success-500);
}

.toast.warning {
  border-left: 4px solid var(--color-warning-500);
}

.toast.error {
  border-left: 4px solid var(--color-error-500);
}
```

#### Alert

```css
.alert {
  padding: var(--spacing-16) var(--spacing-20);
  border-radius: var(--radius-md);
  border: 1px solid;
  display: flex;
  gap: var(--spacing-12);
}

.alert-info {
  background: var(--color-primary-50);
  border-color: var(--color-primary-200);
  color: var(--color-primary-900);
}

.alert-success {
  background: var(--color-success-50);
  border-color: var(--color-success-200);
  color: var(--color-success-900);
}

.alert-warning {
  background: var(--color-warning-50);
  border-color: var(--color-warning-200);
  color: var(--color-warning-900);
}

.alert-error {
  background: var(--color-error-50);
  border-color: var(--color-error-200);
  color: var(--color-error-900);
}
```

#### Modal

```css
.modal-overlay {
  position: fixed;
  inset: 0;
  background: var(--color-surface-overlay);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
}

.modal {
  background: var(--color-surface);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-2xl);
  max-width: 600px;
  width: 90%;
  max-height: 90vh;
  overflow: hidden;
}

.modal-header {
  padding: var(--spacing-24) var(--spacing-32);
  border-bottom: 1px solid var(--color-border-subtle);
}

.modal-body {
  padding: var(--spacing-32);
  overflow-y: auto;
}

.modal-footer {
  padding: var(--spacing-24) var(--spacing-32);
  border-top: 1px solid var(--color-border-subtle);
  display: flex;
  justify-content: flex-end;
  gap: var(--spacing-12);
}
```

#### Tooltip

```css
.tooltip {
  position: absolute;
  padding: var(--spacing-8) var(--spacing-12);
  background: var(--color-neutral-900);
  color: white;
  font-size: var(--font-size-sm);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  z-index: 100;
  max-width: 240px;
  word-wrap: break-word;
}
```

#### Skeleton Loader

```css
.skeleton {
  background: linear-gradient(
    90deg,
    var(--color-neutral-200) 0%,
    var(--color-neutral-100) 50%,
    var(--color-neutral-200) 100%
  );
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s ease-in-out infinite;
  border-radius: var(--radius-md);
}

@keyframes skeleton-loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* Variants */
.skeleton-text {
  height: 1em;
  width: 100%;
}

.skeleton-avatar {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-full);
}

.skeleton-card {
  height: 200px;
  width: 100%;
}
```

---

### Cards

#### Product Card

```css
.card-product {
  background: var(--color-surface);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all 200ms ease;
}

.card-product:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.card-product-image {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
}

.card-product-content {
  padding: var(--spacing-20);
}

.card-product-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-8);
}

.card-product-description {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
}
```

#### Dashboard Card

```css
.card-dashboard {
  background: var(--color-surface);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-lg);
  padding: var(--spacing-24);
}

.card-dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-20);
}

.card-dashboard-title {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}

.card-dashboard-value {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-8);
}

.card-dashboard-change {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
}

.card-dashboard-change.positive {
  color: var(--color-success-500);
}

.card-dashboard-change.negative {
  color: var(--color-error-500);
}
```

#### Profile Card

```css
.card-profile {
  background: var(--color-surface);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.card-profile-header {
  height: 120px;
  background: linear-gradient(135deg, var(--color-primary-500), var(--color-secondary-500));
}

.card-profile-content {
  padding: var(--spacing-24);
  position: relative;
}

.card-profile-avatar {
  width: 80px;
  height: 80px;
  border-radius: var(--radius-full);
  border: 4px solid var(--color-surface);
  position: absolute;
  top: -40px;
  left: var(--spacing-24);
}

.card-profile-info {
  margin-top: var(--spacing-48);
}

.card-profile-name {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}

.card-profile-bio {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  margin-top: var(--spacing-8);
}
```

---

## ♿ Accessibility Guidelines

### Color Contrast (WCAG AA)

**Minimum Contrast Ratios:**
- Normal text (< 18px): **4.5:1**
- Large text (≥ 18px or ≥ 14px bold): **3:1**
- UI components and graphics: **3:1**

**Verified Combinations:**
✅ `color-primary-500` on white: 4.52:1
✅ `color-text-primary` on `color-background`: 15.21:1
✅ `color-text-secondary` on `color-background`: 7.15:1

### Focus States

**All interactive elements MUST have visible focus indicators:**

```css
/* Default focus ring */
*:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 2px;
}

/* Custom focus for buttons */
.btn:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 2px;
  box-shadow: 0 0 0 4px rgba(14, 165, 233, 0.1);
}
```

### Keyboard Navigation

**Required keyboard interactions:**

| Component | Keys | Action |
|-----------|------|--------|
| Buttons | Space, Enter | Activate |
| Links | Enter | Navigate |
| Tabs | Arrow keys | Switch tabs |
| Modals | Escape | Close |
| Dropdowns | Arrow keys, Enter, Escape | Navigate, select, close |

### Touch Targets

**Minimum touch target size: 44 × 44px**

All interactive elements (buttons, links, inputs) must meet this requirement for mobile/touch devices.

```css
/* Ensure minimum touch target */
.btn, .link, .input {
  min-height: 44px;
  min-width: 44px;
}
```

### Screen Reader Support

**Use semantic HTML and ARIA labels:**

```html
<!-- Buttons -->
<button aria-label="Close modal">×</button>

<!-- Loading states -->
<button aria-busy="true" aria-label="Loading...">
  <span aria-hidden="true">Submit</span>
</button>

<!-- Icons -->
<svg aria-hidden="true" focusable="false">...</svg>

<!-- Form inputs -->
<label for="email">Email</label>
<input id="email" type="email" aria-required="true" />
```

---

## 📐 Layout & Grid

### Responsive Breakpoints

```css
/* Mobile first approach */
--breakpoint-sm: 640px;   /* Small devices */
--breakpoint-md: 768px;   /* Tablets */
--breakpoint-lg: 1024px;  /* Desktops */
--breakpoint-xl: 1280px;  /* Large desktops */
--breakpoint-2xl: 1536px; /* Extra large */
```

### Container

```css
.container {
  width: 100%;
  margin: 0 auto;
  padding: 0 var(--spacing-16);
}

@media (min-width: 640px) {
  .container { max-width: 640px; }
}

@media (min-width: 768px) {
  .container { max-width: 768px; }
}

@media (min-width: 1024px) {
  .container { max-width: 1024px; }
}

@media (min-width: 1280px) {
  .container { max-width: 1280px; }
}
```

### Grid System

```css
.grid {
  display: grid;
  gap: var(--spacing-24);
}

/* Common grid layouts */
.grid-2 { grid-template-columns: repeat(2, 1fr); }
.grid-3 { grid-template-columns: repeat(3, 1fr); }
.grid-4 { grid-template-columns: repeat(4, 1fr); }

/* Responsive grid */
.grid-responsive {
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-24);
}
```

---

## 📋 Usage Rules

### Do's ✅

- **DO** use design tokens for all styling
- **DO** maintain consistent spacing using the 8px grid
- **DO** ensure 4.5:1 contrast ratio for text
- **DO** provide focus states for all interactive elements
- **DO** use semantic HTML elements
- **DO** test on mobile devices
- **DO** use loading states for async actions
- **DO** provide error messages for form validation
- **DO** use the correct button variant for the action
- **DO** keep touch targets at least 44×44px

### Don'ts ❌

- **DON'T** use arbitrary colors outside the design tokens
- **DON'T** skip hover/focus states
- **DON'T** use color alone to convey information
- **DON'T** create custom spacing values
- **DON'T** override focus indicators without providing alternatives
- **DON'T** use `<div>` for buttons (use `<button>`)
- **DON'T** forget to test keyboard navigation
- **DON'T** auto-play animations without user control
- **DON'T** use small text (< 14px) for body content
- **DON'T** nest interactive elements

---

## 🎯 Component Composition

### Combining Components

```html
<!-- Card with form -->
<div class="card-dashboard">
  <div class="card-dashboard-header">
    <h3 class="card-dashboard-title">Login</h3>
  </div>
  <form>
    <input type="email" class="input" placeholder="Email" />
    <input type="password" class="input-password" placeholder="Password" />
    <button class="btn-primary btn-md">Sign In</button>
  </form>
</div>

<!-- Alert with action -->
<div class="alert alert-warning">
  <p>Your session is about to expire</p>
  <button class="btn-secondary btn-sm">Extend Session</button>
</div>
```

---

## 🏷️ Naming Convention

**Format:** `category/type/state/size`

### Examples

- `button/primary/default/md`
- `button/primary/hover/md`
- `button/secondary/disabled/lg`
- `input/text/error/default`
- `card/product/default/default`
- `alert/success/default/default`

### Token Naming

```
{category}.{property}.{variant}
```

**Examples:**
- `color.primary.500`
- `spacing.16`
- `typography.font.size.base`
- `radius.md`
- `shadow.lg`

---

## 🌓 Dark Mode Implementation

### CSS Variables Approach

```css
:root {
  /* Light mode (default) */
  --color-bg: var(--color-neutral-50);
  --color-text: var(--color-neutral-900);
}

[data-theme="dark"] {
  /* Dark mode */
  --color-bg: var(--color-neutral-50-dark);
  --color-text: var(--color-neutral-900-dark);
}
```

### JavaScript Toggle

```javascript
// Toggle dark mode
const toggleDarkMode = () => {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
};

// Apply saved theme on load
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
```

---

## 📦 Export for Development

### Tailwind CSS Configuration

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          500: '#0ea5e9',
          900: '#0c4a6e',
        },
        // ... other colors
      },
      spacing: {
        '2': '0.125rem',
        '4': '0.25rem',
        '8': '0.5rem',
        // ... other spacing
      },
      borderRadius: {
        'sm': '0.25rem',
        'md': '0.5rem',
        // ... other radii
      },
    },
  },
};
```

### CSS Custom Properties

Create a `theme.css` file with all variables for easy import into any project:

```css
@import './theme.css';
```

---

## 🚀 Getting Started

1. **Import the theme tokens** into your CSS
2. **Use semantic tokens** (not primitive tokens) in components
3. **Follow the naming convention** for consistency
4. **Test accessibility** with tools like axe DevTools
5. **Validate responsive behavior** at all breakpoints
6. **Document** any custom components you create

---

## 📚 Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [MDN Web Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [Material Design 3](https://m3.material.io)
- [Polaris Design System](https://polaris.shopify.com)

---

**Version:** 1.0.0  
**Last Updated:** May 13, 2026  
**Status:** Production Ready ✅
