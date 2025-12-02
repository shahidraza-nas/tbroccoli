# Copilot Instructions for tbroccoli

## Project Overview

This is a **Next.js 16** (App Router) project using **React 19**, **TypeScript 5**, and **Tailwind CSS 4** with PostCSS. It follows a **frontend-only architecture** that consumes REST APIs from a separate **NestJS backend**.

## Architecture & Structure

- **Frontend-Only:** Next.js handles UI, routing, and SSR. All business logic lives in the NestJS backend
- **Src Directory:** All code lives in `src/` following modern Next.js conventions
- **App Router:** Routes in `src/app/` with route groups for organization
- **Import Aliases:** Use `@/*` to import from `src/` (e.g., `import { Component } from '@/components/ui/button'`)
- **Styling:** Tailwind CSS 4 with inline theme configuration in `src/app/globals.css` using `@theme inline` directive
- **Fonts:** Geist Sans and Geist Mono loaded via `next/font/google` with CSS variables

## Directory Structure

```
src/
├── app/                          # Next.js App Router
│   ├── (authenticated)/         # Protected routes (dashboard, profile, etc.)
│   ├── (marketing)/             # Public routes (homepage, about, pricing)
│   ├── auth/                    # Auth pages (login, register)
│   ├── api/                     # Minimal API routes (proxying only)
│   ├── globals.css
│   ├── layout.tsx
│   └── error.tsx
├── actions/                      # Server Actions for data mutations
├── components/
│   ├── ui/                      # Base UI components (shadcn/ui style)
│   ├── layout/                  # Header, sidebar, footer
│   ├── products/                # Product feature components
│   ├── users/                   # User feature components (future)
│   └── [feature]/               # Each feature has its own folder
├── lib/
│   ├── api/                     # API client for NestJS backend
│   ├── utils.ts                 # Utility functions (cn, etc.)
│   └── constants.ts             # App constants
├── schemas/                      # Zod validation schemas
├── types/                        # TypeScript type definitions
├── hooks/                        # Custom React hooks
└── contexts/                     # React Context providers
```

## Key Configuration Conventions

### TypeScript
- **Target:** ES2017 with strict mode enabled
- **JSX:** Uses `react-jsx` transform (no React imports needed)
- **Module Resolution:** `bundler` strategy for Next.js compatibility
- Path alias `@/*` maps to project root

### Next.js Configuration
- **Config Format:** Uses TypeScript (`next.config.ts`) not JavaScript
- Default Next.js 16 configuration currently in place

### ESLint
- **Format:** Modern flat config (`eslint.config.mjs`) using `defineConfig`
- **Presets:** Combines `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`
- **Ignores:** `.next/`, `out/`, `build/`, `next-env.d.ts`

### Tailwind CSS
- **Version 4:** Uses new `@tailwindcss/postcss` plugin (not `tailwindcss/postcss`)
- **Theme System:** Custom CSS variables defined in `:root` with `@theme inline` directive
- **Design Tokens:** `--font-geist-sans`, `--font-geist-mono`, `--background`, `--foreground`
- **Dark Mode:** Uses `prefers-color-scheme` media query in `globals.css`

## Development Workflow

### Commands
```bash
npm run dev     # Start dev server on http://localhost:3000
npm run build   # Production build
npm start       # Run production build locally
npm run lint    # Run ESLint
```

### Component Patterns
- **Server Components by default:** Components in `app/` are React Server Components unless marked with `'use client'`
- **Metadata:** Export `metadata` object from pages for SEO (see `app/layout.tsx`)
- **Image Optimization:** Always use `next/image` for images (see `app/page.tsx` examples)
- **Font Loading:** Define fonts in layout with CSS variables, apply via `className`

### Styling Patterns
- **Utility-First:** Use Tailwind utility classes directly in JSX
- **Responsive Design:** Mobile-first with `sm:`, `md:` breakpoints
- **Dark Mode:** Use `dark:` prefix for dark mode variants (e.g., `dark:bg-black`)
- **Custom Values:** Reference CSS variables like `bg-foreground`, `text-background`

## Route Organization

### Route Groups
- `(authenticated)/` - Protected routes requiring authentication (dashboard, profile, settings, products)
- `(marketing)/` - Public marketing pages (homepage, about, pricing, contact)
- `auth/` - Authentication pages (login, register) without route grouping
- Route groups **do not affect URLs** - they only organize code and share layouts

### Loading States
- Add `loading.tsx` alongside `page.tsx` for automatic loading UI
- Use `<Skeleton />` components from `@/components/ui/skeleton` for loading states
- Loading boundaries show while Server Components fetch data

### Co-located Components
- Use `(components)/` folders next to pages to co-locate page-specific components
- Example: `products/[id]/(components)/ProductDetails.tsx`
- This pattern keeps related code together without affecting routes

## Backend Integration (NestJS)

### API Client Pattern
- All API calls go through centralized client in `src/lib/api/`
- API base URL: `NEXT_PUBLIC_API_URL` (defaults to `http://localhost:3001`)
- Automatic token injection via interceptors
- Standard response format: `{ data, error }`

### Server Actions
- Server Actions live in `src/actions/` organized by domain (auth, user, product)
- Always mark files with `"use server"` directive
- Return consistent shape: `{ success: boolean, data?, error? }`
- Use `revalidatePath()` after mutations to refresh cached data

### Data Fetching
- **Server Components:** Fetch data directly in async components (for SEO/initial load)
- **Client Components:** Use hooks or `useEffect` with API client
- **NO database connections** - all data comes from NestJS backend
- **NO business logic** - keep components presentational

## Important Notes

- **React 19:** This project uses React 19 - be aware of breaking changes from React 18
- **Tailwind 4:** Uses new PostCSS-only architecture - no `tailwind.config.js` needed with inline themes
- **Flat ESLint Config:** Uses modern ESLint 9 flat config format, not legacy `.eslintrc`
- **WSL Environment:** Development happens in Windows Subsystem for Linux
- **Frontend-Only:** Never add database code, ORMs, or business logic to Next.js

## File Conventions

- `page.tsx` - Route page component
- `layout.tsx` - Layout wrapper with shared UI
- `loading.tsx` - Loading skeleton for the route
- `error.tsx` - Error boundary for the route
- `(folder)/` - Route group (doesn't affect URL)
- `[param]/` - Dynamic route segment
- `.action.ts` - Server Action file suffix
- `globals.css` - Global styles with Tailwind imports
- `next.config.ts` - Next.js configuration (TypeScript format)
- `eslint.config.mjs` - ESLint flat config (ESM format)
