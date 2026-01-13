# GSAP Horizontal Scroll Implementation Plan

## Goal Description
Implement a horizontal scrolling experience for the "How It Works" section using GSAP ScrollTrigger. The user scrolls vertically, but the content (Asset Owners and Investors sections) moves horizontally.

## Current Structure
- Common header: "HOW IT WORKS" and "How Copym works - for issuers and investors"
- Two panels: Asset Owners and Investors
- Each panel contains a Lottie animation from JSON files:
  - `@echo.copym-v5/src/components/lotties/forassetsowners.json`
  - `@echo.copym-v5/src/components/lotties/forinvestors.json`

## Implementation Plan

### 1. Dependencies
- Install GSAP: `npm install gsap`
- Import GSAP and ScrollTrigger: `import gsap from 'gsap'; import { ScrollTrigger } from 'gsap/ScrollTrigger';`
- Register plugin: `gsap.registerPlugin(ScrollTrigger);`

### 2. Component Structure Changes
- Convert current grid layout to horizontal flex container
- Maintain common header at the top (fixed position)
- Each panel becomes a horizontal slide taking full screen width
- Use refs for GSAP animation control

### 3. Animation Logic
- Pin the section container while scrolling
- Animate the horizontal container using x-axis movement
- Link scroll position to horizontal movement
- Ensure smooth transitions between panels

### 4. Responsive Considerations
- Desktop: Horizontal scroll experience
- Mobile: May need fallback or adapted behavior
- Maintain aspect ratios of Lottie animations

### 5. Implementation Steps
1. Update HowItWorksSection.jsx with horizontal layout
2. Add GSAP animation code in useEffect
3. Test scroll behavior and adjust timing
4. Fine-tune responsive behavior
5. Verify Lottie animations work correctly in horizontal layout

## Files to Modify
- `@echo.copym-v5/src/pages/HomePage/sections/HowItWorksSection.jsx`

## JSON Data Files (Remain Unchanged)
- `@echo.copym-v5/src/components/lotties/forassetsowners.json`
- `@echo.copym-v5/src/components/lotties/forinvestors.json`

## Future Expansion
Once implemented and tested successfully for this section, apply similar horizontal scroll behavior to other sections as needed.

## Perfect Prompt for AI Implementation
Create a horizontal scroll animation for the How It Works section using GSAP ScrollTrigger. The section should have:
1. A fixed header with "HOW IT WORKS" and "How Copym works - for issuers and investors"
2. Two horizontal panels (Asset Owners and Investors) that scroll horizontally when user scrolls vertically
3. Each panel contains a Lottie animation from JSON files
4. The section should be pinned while scrolling
5. Smooth horizontal movement linked to vertical scroll position
6. Maintain responsive design for different screen sizes
7. Use proper GSAP timeline and ScrollTrigger configuration
8. Clean up ScrollTrigger instances to prevent memory leaks
9. Preserve existing styling and layout while changing scroll behavior