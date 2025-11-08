# NY TENA KABARY - Malagasy Traditional Oratory

## Overview

NY TENA KABARY is a digital presentation platform for traditional Malagasy oratory (Kabary) used in ceremonial occasions including marriages (am-panambadiana), funerals (am-pandevenana), famadihana, and visits (famangiana). The application serves as a cultural archive and educational resource, presenting traditional speeches and ceremonial protocols in an elegant, readable format inspired by high-quality editorial sites.

The application is a single-page React application with a focus on content presentation, featuring a sidebar navigation system and beautifully formatted traditional text content organized by ceremony type.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React with TypeScript using Vite as the build tool

**UI Component System**: 
- Shadcn/ui component library (New York style variant) built on Radix UI primitives
- Tailwind CSS for styling with custom design tokens
- Component-based architecture with reusable UI elements

**Design Philosophy**:
- Editorial-inspired layout optimizing for long-form reading
- Cultural reverence balanced with modern web design
- Typography-first approach using Noto Serif for content and Poppins for UI elements
- Vibrant accent colors honoring ceremonial nature
- Maximum content width of 4xl (prose width) for optimal readability
- Mobile-responsive design with adaptive sidebar navigation

**Key Layout Components**:
- `KabaryHeader`: Sticky header with site title and mobile menu toggle
- `TableOfContents`: Sidebar navigation (fixed on desktop, sheet drawer on mobile) with section links and active state tracking
- `KabarySection`: Content card component with colored left border indicating ceremony type
- `KabaryContent`: Main content container organizing all ceremonial text sections

**Routing**: Wouter for lightweight client-side routing (currently single-page with home and 404 routes)

**State Management**: React Query (@tanstack/react-query) for server state management with custom query client configuration

### Backend Architecture

**Server Framework**: Express.js with TypeScript

**API Structure**:
- RESTful API design with routes prefixed with `/api`
- Middleware for JSON parsing and request logging
- Custom logging middleware tracking request duration and responses

**Data Layer**:
- Abstracted storage interface (`IStorage`) allowing for multiple storage implementations
- Current implementation: In-memory storage (`MemStorage`) using Map data structure
- Prepared for database integration with Drizzle ORM

**Development Setup**:
- Vite middleware integration for hot module replacement in development
- Separate build process for client (Vite) and server (esbuild)
- Development and production environment configurations

### Data Storage Solutions

**Current Implementation**: In-memory storage for user data

**Prepared Database Integration**:
- Drizzle ORM configured for PostgreSQL
- Schema defined in `shared/schema.ts` with user table
- Neon serverless database support via `@neondatabase/serverless`
- Migration system configured via `drizzle.config.ts`
- Session management prepared with `connect-pg-simple`

**Schema Design**:
- Users table with UUID primary keys, username, and password fields
- Zod validation schemas for type-safe data insertion

**Content Storage**: Traditional Kabary text content is currently embedded in React components. The architecture supports future migration to database-backed content management.

### Authentication and Authorization

**Current State**: Basic user schema defined but authentication not yet implemented

**Prepared Infrastructure**:
- User model with username/password fields
- Storage interface with user CRUD methods
- Foundation for session-based authentication with PostgreSQL session store

### Design System

**Color System**:
- HSL-based color tokens for theme consistency
- Section-specific accent colors (purple, blue, green, orange, pink, cyan)
- Light mode optimized with prepared dark mode variables
- Custom CSS variables for borders, elevations, and shadows

**Typography Scale**:
- Base font size: 18px for optimal reading
- Heading scale: 2xl to 5xl
- Font weights: 400 (body), 500-600 (UI), 700 (headings)
- Leading: relaxed for comfortable long-form reading

**Spacing System**: Tailwind's 4px-based spacing scale (units: 4, 6, 8, 12, 16, 20)

**Component Variants**: Class Variance Authority (CVA) for consistent component styling variants

## External Dependencies

### Core Framework Dependencies
- **React 18**: UI framework with TypeScript support
- **Express**: Node.js web server framework
- **Vite**: Build tool and development server
- **Wouter**: Lightweight routing library

### UI Component Libraries
- **Radix UI**: Headless UI primitives for accessible components (accordion, dialog, dropdown, popover, scroll-area, select, toast, tooltip, etc.)
- **Shadcn/ui**: Pre-built component patterns using Radix UI
- **Lucide React**: Icon library

### Styling and Design
- **Tailwind CSS**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **clsx / tailwind-merge**: Class name utilities

### Data Management
- **@tanstack/react-query**: Server state management and data fetching
- **Drizzle ORM**: TypeScript ORM for PostgreSQL
- **@neondatabase/serverless**: Neon serverless Postgres driver
- **Zod**: Schema validation library
- **drizzle-zod**: Zod integration for Drizzle schemas

### Form Handling
- **React Hook Form**: Form state management (via @hookform/resolvers)
- **Zod resolvers**: Form validation with Zod schemas

### Development Tools
- **TypeScript**: Type safety and developer experience
- **esbuild**: Fast JavaScript bundler for server code
- **tsx**: TypeScript execution for development
- **@replit/vite-plugin-***: Replit-specific development tooling

### Utility Libraries
- **date-fns**: Date manipulation and formatting
- **nanoid**: Unique ID generation
- **cmdk**: Command palette component
- **embla-carousel-react**: Carousel/slider component
- **vaul**: Drawer component library

### Fonts
- **Google Fonts**: Noto Serif (content) and Poppins (UI) loaded via CDN

### Future Integration Points
- PostgreSQL database (via DATABASE_URL environment variable)
- Session management with PostgreSQL session store
- Potential authentication system integration
- Content management system for Kabary text