# TechFlow - Digital Agency Website

## Overview

TechFlow is a modern digital agency website built with a full-stack TypeScript architecture. The application showcases a professional portfolio-style website for a technology consulting company, featuring smooth animations, responsive design, and a contact form system. The project uses a modern tech stack with React for the frontend, Express.js for the backend, and Drizzle ORM for database operations.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Animations**: Framer Motion for smooth transitions and scroll-triggered animations
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Forms**: React Hook Form with Zod validation
- **Theme**: Custom dark/light theme system with CSS variables

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Pattern**: RESTful API design
- **Session Management**: Express sessions with PostgreSQL storage
- **Development**: Hot reload with Vite integration

### Build System
- **Build Tool**: Vite for frontend bundling
- **Bundler**: esbuild for server-side bundling
- **TypeScript**: Strict mode with path mapping
- **Development**: Integrated development server with HMR

## Key Components

### Frontend Components
1. **Layout Components**: 
   - Navbar with smooth scroll navigation and theme toggle
   - Hero section with animated content
   - Service showcase with grid layout
   - About section with company information
   - Testimonials with customer feedback
   - Contact form with validation
   - Footer with social links

2. **UI System**: 
   - Complete shadcn/ui component library integration
   - Custom theme provider with persistent theme storage
   - Responsive design patterns
   - Accessible form components with proper validation

3. **Animation System**:
   - Scroll-triggered animations using Framer Motion
   - Smooth page transitions
   - Interactive hover effects
   - Loading states and micro-interactions

### Backend Components
1. **API Routes**:
   - `POST /api/contact` - Contact form submission
   - `GET /api/contact` - Retrieve contact submissions (admin)

2. **Data Layer**:
   - Contact submissions table with proper schema
   - Users table for potential admin functionality
   - Zod schema validation for type safety

3. **Storage System**:
   - Abstract storage interface for flexibility
   - In-memory storage implementation for development
   - Database storage ready for production

## Data Flow

1. **User Interaction**: Users navigate the single-page application and interact with the contact form
2. **Form Submission**: React Hook Form validates data using Zod schemas before submission
3. **API Communication**: TanStack Query manages API calls with proper error handling and caching
4. **Server Processing**: Express.js validates incoming data and stores it using Drizzle ORM
5. **Database Storage**: PostgreSQL stores contact submissions with proper timestamps
6. **Response Handling**: Success/error feedback shown via toast notifications

## External Dependencies

### Core Technologies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library
- **react-hook-form**: Form state management
- **zod**: Runtime type validation

### UI Libraries
- **@radix-ui**: Headless UI components for accessibility
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library
- **class-variance-authority**: Component variant management

### Development Tools
- **tsx**: TypeScript execution for development
- **vite**: Build tool and development server
- **esbuild**: Fast JavaScript bundler

## Deployment Strategy

### Development
- Local development with hot module replacement
- In-memory storage for rapid prototyping
- Environment variable configuration for database connection

### Production
- **Frontend**: Static build deployed to CDN
- **Backend**: Node.js server with production optimizations
- **Database**: Neon serverless PostgreSQL for scalability
- **Environment**: Configuration via environment variables

### Build Process
1. Frontend assets built with Vite and optimized for production
2. Backend bundled with esbuild for efficient Node.js execution
3. Database migrations managed via Drizzle Kit
4. Single deployment artifact containing both frontend and backend

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

### June 28, 2025 - Design Updates & Feature Enhancements
✓ Updated logo with blue "JAYNEX" and IT company icon (lightning bolt in blue box)
✓ Changed Services navigation from click to hover-based dropdown
✓ Redesigned Hero section with full background image overlay and "Experience The Best IT Solutions" tagline
✓ Updated button styling to match reference design (blue primary, white outline)
✓ Added scrolling services ticker at bottom of hero section
✓ Moved "Get A Quote" button to top of features grid in Why Trust Us section
✓ Enhanced testimonials with blue gradient side effects and improved pause/resume functionality
✓ Added world map with vector arrow and "Here we are" banner to contact section
✓ Increased page margins across all sections (max-w-8xl, px-8/12/16)
✓ Implemented two-row infinite testimonials carousel with hover stop functionality

## Changelog

### Initial Development
- June 28, 2025: Initial TechFlow landing page setup with full-stack architecture