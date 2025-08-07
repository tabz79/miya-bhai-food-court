# Replit.md

## Overview

Miya Bhai Food Court is a legendary Hyderabadi restaurant website showcasing authentic Nizami cuisine. This is a full-stack React application featuring a restaurant website with multiple branches, menu showcase, table booking, and catering services. The application uses modern web technologies with a focus on mobile-first design, cultural heritage themes, and SEO optimization.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system reflecting Hyderabadi/Nizami heritage
- **UI Components**: shadcn/ui component library with Radix UI primitives for accessibility
- **State Management**: React Query (TanStack Query) for server state management
- **Form Handling**: React Hook Form with Zod validation for type-safe forms

### Component Architecture
- **Modular Design**: All content externalized in `/data` folder for easy editing
- **Reusable Components**: Header, Footer, MenuCard, BranchCard, TestimonialCard
- **Page Components**: Home, Menu, Branches, About, Contact, Catering, Order, Book
- **Mobile-First**: Dedicated MobileNavigation component with bottom navigation

### Design System
- **Color Palette**: Zaffran yellow, biryani brown, charcoal black, jade green, ivory white
- **Typography**: Amiri font for Arabic/Urdu headers, Inter for body text
- **Theme**: Hyderabadi/Nizami cultural elements with modern UX

### Backend Architecture
- **Server**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema**: User management system with extensible schema design
- **Storage Layer**: Abstracted storage interface supporting both memory and database storage
- **API**: RESTful API structure with `/api` prefix routing

### Data Management
- **Database ORM**: Drizzle with migrations support
- **Schema Validation**: Zod schemas for runtime type checking
- **Query Builder**: Type-safe queries with Drizzle's query builder
- **Content Management**: JSON-based content in `/data` folder for easy updates

### SEO & Performance
- **Meta Tags**: Dynamic SEO component with structured data support
- **Schema.org**: JSON-LD structured data for restaurant information
- **Image Optimization**: Responsive images with proper loading strategies
- **Performance**: Vite build optimization with code splitting

### Development Features
- **TypeScript**: Full type safety across frontend and backend
- **Hot Reload**: Vite development server with HMR
- **Path Aliases**: Configured import aliases for clean code organization
- **Error Handling**: Runtime error overlay for development

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Neon PostgreSQL serverless driver for database connectivity
- **drizzle-orm**: Type-safe ORM for database operations and migrations
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight React router alternative

### UI & Styling
- **@radix-ui/***: Comprehensive set of accessible UI primitives
- **tailwindcss**: Utility-first CSS framework with custom configuration
- **class-variance-authority**: Type-safe CSS class variants
- **lucide-react**: Modern icon library with consistent design

### Development Tools
- **vite**: Modern build tool and development server
- **typescript**: Static type checking for JavaScript
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **esbuild**: Fast JavaScript bundler for production builds

### Fonts & Assets
- **Google Fonts**: Amiri (Arabic/Urdu) and Inter (Latin) font families
- **Unsplash Images**: High-quality food photography for menu items

### Payment & Services
- **connect-pg-simple**: PostgreSQL session store for Express
- **date-fns**: Modern date utility library for time formatting
- **nanoid**: Unique ID generation for various use cases

The application is designed to be easily deployable on Replit with minimal configuration, using environment variables for database connections and supporting both development and production environments.