# Shop Module Structure

This folder contains the shop pages and components following Next.js App Router best practices.

## Folder Structure

```
shop/
├── (components)/              # Co-located components (not in URL)
│   ├── ShopHeader.tsx        # Page header with title and breadcrumb
│   ├── FilterBar.tsx         # Filter and view options bar
│   ├── ProductGrid.tsx       # Product grid layout
│   └── Pagination.tsx        # Pagination controls
├── categories/               # Category pages
│   ├── page.tsx             # All categories listing
│   └── [slug]/              # Dynamic category page
│       ├── page.tsx         # Category products
│       └── loading.tsx      # Loading state
├── products/                 # Product pages
│   └── [id]/                # Dynamic product detail
│       ├── page.tsx         # Product detail page
│       └── not-found.tsx    # 404 page
├── search/                   # Search pages
│   └── page.tsx             # Search results
├── page.tsx                  # Main shop page
└── loading.tsx              # Shop loading state

## Component Patterns

### (components) Folder
- Uses parentheses to indicate it's NOT part of the URL structure
- Contains reusable components specific to shop pages
- Components are co-located with pages that use them

### Server Components (Default)
- ShopHeader: Static header component
- ProductGrid: Renders product cards from data
- Page components: Fetch data and render

### Client Components
- FilterBar: Interactive filters and sorting
- Pagination: Page navigation with click handlers

## Routes

- `/shop` - Main shop page with all products
- `/shop/categories` - All categories
- `/shop/categories/[slug]` - Products by category
- `/shop/products/[id]` - Product detail
- `/shop/search?q=query` - Search results

## Data Flow

1. Page components fetch data using Server Actions
2. Data passed to co-located components as props
3. Client components handle user interactions
4. Search params used for filtering/pagination
```
