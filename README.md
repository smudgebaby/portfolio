# Xinyi Portfolio

A modern, responsive photography portfolio website built with React, TypeScript, and Vite. This application serves as a digital archive for showcasing photography collections with a focus on user experience, performance, and aesthetic design.

## Features

### 🖼️ Portfolio & Gallery
- **Category-Based Organization**: organizing photos into distinct collections (e.g., Urban, Nature, Portraits).
- **Masonry/Grid Layouts**: Responsive grid systems that adapt from single-column on mobile to multi-column on larger screens.
- **Lightbox Viewer**:
  - Full-screen image viewing with high-resolution support.
  - Keyboard navigation (Arrow keys to browse, Esc to close).
  - Touch-friendly controls and smooth transitions.
  - Interactive "Curator Insight" providing context for each collection.

### 🧭 Navigation & UX
- **Seamless Routing**: Client-side routing using `react-router-dom` with no page reloads.
- **Scroll Management**: Automatic scroll-to-top functionality upon route changes.
- **Loading States**: Skeleton screens and loading indicators for a perceived faster performance.
- **Error Handling**: 
  - Global React Error Boundaries to prevent app crashes.
  - Fallback UI for missing images or 404 routes.
- **Responsive Design**: Mobile-first approach ensuring perfect rendering on all device sizes.

### 🔍 SEO & Meta Data
- **Dynamic Meta Tags**: Custom `useMetaTags` hook that updates page title, description, and keywords based on the current route or collection.
- **Social Sharing**: Open Graph (OG) tag support for optimized sharing previews on social media.

### 📝 Contact & Interaction
- **Functional Contact Form**: Client-side form handling with validation, loading states, and success feedback.
- **Social Integration**: Footer links to social media platforms (Instagram).

## Tech Stack

- **Core**: [React](https://reactjs.org/) (Hooks, Functional Components)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) for type safety
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- **Routing**: [React Router](https://reactrouter.com/) (HashRouter)

## Project Structure

```
src/
├── components/    # Reusable UI components (Navbar, Lightbox, PhotoCard)
├── hooks/         # Custom React hooks (useMetaTags)
├── pages/         # Page components (Home, CategoryView, About, Contact)
├── services/      # Data services and helper functions
├── constants.ts   # Static data for categories and photos
├── types.ts       # TypeScript interface definitions
└── App.tsx        # Main application entry point
```

## Run Locally

**Prerequisites:**  Node.js (v14+ recommended)


1. Install dependencies:
   `npm install`
2. Run the development server:
   `npm run dev`
3. Build for production:
   `npm run build`
