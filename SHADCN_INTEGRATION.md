# Shadcn/UI Integration Guide

## Overview
This project has been successfully integrated with shadcn/ui components, converted from TypeScript to JavaScript for compatibility with the existing Vite + React setup.

## What Was Done

### 1. Project Structure Setup
- ✅ Created `src/components/ui/` directory (shadcn standard)
- ✅ All required dependencies were already installed:
  - `lucide-react` (v0.344.0)
  - `@radix-ui/react-slot` (v1.2.3)
  - `class-variance-authority` (v0.7.1)
  - `clsx` and `tailwind-merge` (for `cn` utility)

### 2. Components Created

#### Button Component (`src/components/ui/button.jsx`)
- Converted from TypeScript to JavaScript
- Uses `class-variance-authority` for variant management
- Supports all shadcn button variants (default, destructive, outline, secondary, ghost, link)
- Supports all sizes (default, sm, lg, icon)
- Includes `asChild` prop for composition

#### Hero Section Component (`src/components/ui/hero-section-6.jsx`)
- Modern hero section with navigation
- Responsive design with mobile menu
- Email signup form
- Dark/light mode image switching
- Custom logo component
- **Key Features:**
  - Fixed navigation with backdrop blur
  - Mobile hamburger menu with animations
  - Email subscription form
  - Feature highlights list
  - Responsive image display

### 3. Configuration Updates

#### Vite Config (`vite.config.js`)
- Added path alias `@` pointing to `./src`
- Enables `@/lib/utils` imports

#### CSS Variables (`src/index.css`)
- Added shadcn/ui CSS custom properties
- Light and dark theme support
- All necessary color tokens for components

### 4. Test Integration
- Created `src/pages/HeroTest.jsx` for component testing
- Added route `/hero-test` in `App.jsx`

## How to Use

### Basic Button Usage
```jsx
import { Button } from '@/components/ui/button'

// Default button
<Button>Click me</Button>

// Variants
<Button variant="outline">Outline</Button>
<Button variant="destructive">Delete</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>

// As child (for links)
<Button asChild>
  <a href="/link">Link Button</a>
</Button>
```

### Hero Section Usage
```jsx
import { HeroSection } from '@/components/ui/hero-section-6'

// Full hero section with navigation
<HeroSection />
```

### Demo Component
```jsx
import { Demo } from '@/components/ui/demo'

// Quick showcase
<Demo />
```

## Testing the Integration

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Visit the test page:**
   - Navigate to `http://localhost:5999/hero-test`
   - This will show the complete Hero Section component

3. **Test responsive behavior:**
   - Resize browser window to test mobile menu
   - Check dark/light mode image switching

## Component Customization

### Customizing the Hero Section

#### Menu Items
Edit the `menuItems` array in `hero-section-6.jsx`:
```jsx
const menuItems = [
    { name: 'Features', href: '#' },
    { name: 'Solution', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'About', href: '#' },
]
```

#### Content
- **Title:** Change the main heading text
- **Description:** Update the subtitle paragraph
- **Images:** Replace Unsplash URLs with your own images
- **Logo:** Modify the SVG in the `Logo` component

#### Styling
- All styling uses Tailwind CSS classes
- CSS variables are defined in `src/index.css`
- Dark mode support is built-in

### Customizing the Button
The Button component uses `class-variance-authority` for variants. You can:
- Add new variants in the `buttonVariants` configuration
- Modify existing variant styles
- Add new sizes

## File Structure
```
src/
├── components/
│   └── ui/                    # shadcn components
│       ├── button.jsx         # Button component
│       ├── hero-section-6.jsx # Hero section
│       └── demo.jsx           # Demo component
├── lib/
│   └── utils.js              # cn utility function
├── pages/
│   └── HeroTest.jsx          # Test page
└── index.css                 # CSS variables and styles
```

## Dependencies
All required dependencies were already present:
- ✅ `lucide-react` - Icons
- ✅ `@radix-ui/react-slot` - Component composition
- ✅ `class-variance-authority` - Variant management
- ✅ `clsx` & `tailwind-merge` - Class utilities
- ✅ `tailwindcss` - Styling
- ✅ `react` & `react-dom` - Core framework

## Next Steps

1. **Replace the existing Hero component** in your Marketplace page with the new shadcn Hero Section
2. **Customize the content** to match your brand and messaging
3. **Add more shadcn components** as needed using the same pattern
4. **Consider adding a theme toggle** for dark/light mode switching

## Troubleshooting

### Import Issues
If you see import errors with `@/` paths:
1. Ensure Vite config has the alias configured
2. Restart the development server
3. Check that the path is correct

### Styling Issues
If components don't look right:
1. Verify CSS variables are loaded in `index.css`
2. Check that Tailwind CSS is properly configured
3. Ensure no conflicting styles are overriding shadcn classes

### Mobile Menu Issues
If the mobile menu doesn't work:
1. Check that the state management is working
2. Verify CSS classes for animations
3. Test on actual mobile devices

## Benefits of This Integration

1. **Consistent Design System** - shadcn provides a solid foundation
2. **Accessibility** - Built-in ARIA attributes and keyboard navigation
3. **Responsive Design** - Mobile-first approach
4. **Type Safety** - Even in JavaScript, the component structure is clear
5. **Customizable** - Easy to modify and extend
6. **Modern Stack** - Uses current best practices and libraries
