# PMO Website Implementation Guide

## Project Overview
**Organization:** Lagos State Parastatals Monitoring Office (PMO)
**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS, WPGraphQL
**Platform:** WordPress CMS with WPGraphQL backend + Next.js frontend

## Vision
Improve Efficiency and Effectiveness of all State-Owned Parastatals

## Mission
Improve the performance of all State-owned Parastatals through internal process re-engineering and improved Corporate Governance

## Mandate
Monitor and ensure Government-Owned Companies are managed in accordance with administrative guidelines

---

## Implementation Checklist

### Phase 1: Project Setup & Structure ✓ (In Progress)

#### 1.1 Directory Structure
- [ ] `/src/app` - Next.js app directory (pages)
- [ ] `/src/components` - Reusable UI components
  - [ ] `Navigation.tsx` - Main navigation/header
  - [ ] `Footer.tsx` - Footer component
  - [ ] `Card.tsx` - Generic card component
  - [ ] `Button.tsx` - Button component
  - [ ] `Section.tsx` - Section wrapper component
  - [ ] `Hero.tsx` - Hero banner component
- [ ] `/src/lib` - Utilities and helpers
  - [ ] `graphql.ts` - GraphQL client setup
  - [ ] `queries.ts` - GraphQL queries
  - [ ] `api-client.ts` - API integration
- [ ] `/src/types` - TypeScript types
  - [ ] `index.ts` - Global types
  - [ ] `wordpress.ts` - WordPress/WPGraphQL types
- [ ] `/src/hooks` - Custom React hooks
  - [ ] `useWPGraphQL.ts` - WPGraphQL data fetching hook
- [ ] `/public` - Static assets
  - [ ] `/images` - Images folder
  - [ ] `/icons` - Icon assets

#### 1.2 Dependencies to Install
- [ ] `@apollo/client` - GraphQL client
- [ ] `graphql` - GraphQL library
- [ ] `graphql-request` - GraphQL request client (alternative)
- [ ] `classnames` - Utility for combining classnames
- [ ] `react-icons` - Icon library

---

### Phase 2: Navigation & Layout ✓ (In Progress)

#### 2.1 Navigation Structure
Routes to create:
- [ ] `/` - Home (index)
- [ ] `/about` - About Us
- [ ] `/directorate` - The Directorate
- [ ] `/events` - Our Events
- [ ] `/programmes` - Programmes
- [ ] `/media` - Media
- [ ] `/contact` - Contact Us

#### 2.2 Components to Build
- [ ] `Navigation.tsx` - Responsive navbar with all tabs
  - [ ] Mobile menu toggle
  - [ ] Active route highlighting
  - [ ] Logo/branding area
- [ ] `Footer.tsx` - Footer with links and info
- [ ] `RootLayout.tsx` - Update main layout with Navigation & Footer

---

### Phase 3: Homepage Design

#### 3.1 Homepage Sections
- [ ] Hero Banner
  - [ ] PMO Logo/Branding
  - [ ] Tagline or main CTA
  - [ ] Background image/gradient
- [ ] Vision Section
  - [ ] Large heading with vision statement
  - [ ] Supporting description
- [ ] Mission Section
  - [ ] Mission statement with icon
  - [ ] Supporting description
- [ ] Mandate Section
  - [ ] Mandate overview with bullet points
- [ ] Quick Links Section
  - [ ] Links to key pages (Directorate, Events, Programmes)
- [ ] Latest News/Events Section
  - [ ] 3-4 featured items from WPGraphQL
- [ ] Call-to-Action Section
  - [ ] Contact/Get Involved button

#### 3.2 Homepage Component Structure
```
HomePage
├── HeroBanner
├── VisionSection
├── MissionSection
├── MandateSection
├── QuickLinks
├── LatestNews (from WPGraphQL)
├── LatestEvents (from WPGraphQL)
└── CTASection
```

---

### Phase 4: Page Implementation

#### 4.1 About Us Page
- [ ] Organization history
- [ ] Core values
- [ ] Organizational structure overview
- [ ] Key achievements

#### 4.2 The Directorate Page
- [ ] Team member profiles (fetched from WPGraphQL)
- [ ] Grid layout with member cards
- [ ] Member details:
  - [ ] Photo
  - [ ] Name
  - [ ] Position/Title
  - [ ] Bio/Description
  - [ ] Contact info (optional)

#### 4.3 Our Events Page
- [ ] Events listing (fetched from WPGraphQL)
- [ ] Event card component with:
  - [ ] Event date
  - [ ] Event title
  - [ ] Event description
  - [ ] Location
  - [ ] Register/Learn More button
- [ ] Filters (by date, category)
- [ ] Pagination if needed

#### 4.4 Programmes Page
- [ ] List of programmes/initiatives
- [ ] Programme cards with:
  - [ ] Programme name
  - [ ] Description
  - [ ] Objectives
  - [ ] Status
  - [ ] Link to details (if applicable)

#### 4.5 Media Page
- [ ] News/press releases (fetched from WPGraphQL)
- [ ] Media items with:
  - [ ] Title
  - [ ] Date published
  - [ ] Featured image
  - [ ] Excerpt
  - [ ] Link to full article
- [ ] Categories/filters for media
- [ ] Search functionality

#### 4.6 Contact Us Page
- [ ] Contact form
  - [ ] Name field
  - [ ] Email field
  - [ ] Subject field
  - [ ] Message field
  - [ ] Submit button
- [ ] Contact information display:
  - [ ] Office address
  - [ ] Phone number(s)
  - [ ] Email address(es)
  - [ ] Office hours
- [ ] Map (if applicable)
- [ ] Social media links (if applicable)

---

### Phase 5: WPGraphQL Integration

#### 5.1 Setup
- [ ] Install Apollo Client dependencies
- [ ] Configure Apollo Client with WordPress endpoint
- [ ] Set up GraphQL queries for:
  - [ ] Posts (News/Media)
  - [ ] Custom post type: Events
  - [ ] Custom post type: Programmes
  - [ ] Custom post type: Team Members
  - [ ] Pages (About, Contact info)

#### 5.2 GraphQL Queries
- [ ] Query: getNews() - fetch latest posts
- [ ] Query: getEvents() - fetch events
- [ ] Query: getProgrammes() - fetch programmes
- [ ] Query: getTeamMembers() - fetch directorate
- [ ] Query: getEventById() - fetch single event details
- [ ] Query: getPostById() - fetch full post/news item

#### 5.3 Data Fetching Patterns
- [ ] Server-side data fetching (Next.js)
- [ ] Client-side data fetching with hooks
- [ ] Error handling
- [ ] Loading states
- [ ] Caching strategy

---

### Phase 6: UI/UX Components

#### 6.1 Reusable Components
- [ ] `Button.tsx` - Variants (primary, secondary, outline)
- [ ] `Card.tsx` - News card, event card, profile card
- [ ] `Section.tsx` - Container with consistent padding/max-width
- [ ] `Hero.tsx` - Hero banner with image/gradient
- [ ] `Modal.tsx` - For event details or forms (optional)
- [ ] `Badge.tsx` - For tags, status, categories
- [ ] `Grid.tsx` - Responsive grid layout

#### 6.2 Styling
- [ ] Tailwind CSS configuration
- [ ] Color scheme definition
- [ ] Typography scale
- [ ] Spacing system
- [ ] Responsive breakpoints

---

### Phase 7: Features & Functionality

#### 7.1 Core Features
- [ ] Responsive design (mobile, tablet, desktop)
- [ ] SEO optimization (metadata, sitemap, robots.txt)
- [ ] Fast page loads (Next.js optimization)
- [ ] Accessible components (WCAG 2.1 AA)

#### 7.2 Advanced Features (Optional)
- [ ] Search functionality
- [ ] Event filtering/sorting
- [ ] Newsletter signup
- [ ] Social media integration
- [ ] Dark mode toggle
- [ ] Multi-language support (if needed)

---

### Phase 8: Testing & Optimization

#### 8.1 Testing
- [ ] Unit tests for components
- [ ] Integration tests for pages
- [ ] E2E tests for critical flows

#### 8.2 Performance
- [ ] Image optimization (next/image)
- [ ] Bundle size analysis
- [ ] Core Web Vitals optimization
- [ ] Caching strategies

#### 8.3 SEO
- [ ] Meta tags on all pages
- [ ] Open Graph tags
- [ ] Structured data (Schema.org)
- [ ] Sitemap generation
- [ ] robots.txt configuration

---

### Phase 9: Deployment & Maintenance

#### 9.1 Pre-deployment
- [ ] Environment variables setup (.env.local)
- [ ] WordPress endpoint configuration
- [ ] Build optimization
- [ ] Final testing

#### 9.2 Deployment
- [ ] Deploy to Vercel (or hosting of choice)
- [ ] DNS configuration
- [ ] SSL certificate
- [ ] Monitoring setup

#### 9.3 Maintenance
- [ ] Regular content updates
- [ ] Monitoring for errors
- [ ] Performance tracking
- [ ] Security updates

---

## Key Decisions to Make

### 1. WPGraphQL Endpoint
**Status:** ⏳ Pending
- [ ] Confirm WordPress instance URL
- [ ] Confirm WPGraphQL is enabled
- [ ] Get endpoint URL (usually `https://your-domain.com/graphql`)

### 2. Content Management Strategy
**Status:** ⏳ Pending
- [ ] Which content comes from WordPress?
  - [ ] Posts/News
  - [ ] Events
  - [ ] Team members
  - [ ] Programmes
- [ ] Which content is static?

### 3. Design & Branding
**Status:** ⏳ Pending
- [ ] Primary color scheme
- [ ] Secondary colors
- [ ] Logo/branding guidelines
- [ ] Typography preferences
- [ ] Do you have existing brand colors/fonts?

### 4. Features Priority
**Status:** ⏳ Pending
- [ ] Must-have: Homepage, About, Directorate, Contact
- [ ] Important: Events, Programmes, Media
- [ ] Nice-to-have: Search, filters, newsletter

---

## File Structure Overview

```
pmo-app/
├── src/
│   ├── app/
│   │   ├── layout.tsx          (Root layout with Nav & Footer)
│   │   ├── page.tsx            (Homepage)
│   │   ├── about/
│   │   │   └── page.tsx        (About Us)
│   │   ├── directorate/
│   │   │   └── page.tsx        (The Directorate)
│   │   ├── events/
│   │   │   ├── page.tsx        (Events listing)
│   │   │   └── [id]/           (Event details page)
│   │   ├── programmes/
│   │   │   └── page.tsx        (Programmes)
│   │   ├── media/
│   │   │   └── page.tsx        (Media/News)
│   │   └── contact/
│   │       └── page.tsx        (Contact Us)
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Card.tsx
│   │   ├── Button.tsx
│   │   ├── Section.tsx
│   │   └── ... (other components)
│   ├── lib/
│   │   ├── graphql.ts
│   │   ├── queries.ts
│   │   └── api-client.ts
│   ├── types/
│   │   ├── index.ts
│   │   └── wordpress.ts
│   └── hooks/
│       └── useWPGraphQL.ts
├── public/
│   └── images/
├── .env.local               (Environment variables)
├── PMO_IMPLEMENTATION_GUIDE.md  (This file)
└── package.json

```

---

## Progress Tracking

### How to Use This Guide

1. **Daily Progress**: Check off items as completed
2. **Phase Completion**: Mark phases as complete when all items done
3. **Status Updates**: Update the status section with progress
4. **Blocking Issues**: Document any blockers in a separate section
5. **Timeline**: Add dates as milestones are achieved

### Current Status

```
Project Start Date: [To be filled]
Phase 1: 0% Complete
Phase 2: 0% Complete
Phase 3: 0% Complete
Phase 4: 0% Complete
Phase 5: 0% Complete
Phase 6: 0% Complete
Phase 7: 0% Complete
Phase 8: 0% Complete
Phase 9: 0% Complete

Overall Progress: 0%
```

---

## Notes

- Keep this document updated as you progress
- Use this as a reference for priority and timeline
- Update blocked items and dependencies
- Add any learnings or decisions made
