# Jharkhand Tourism Explorer - Project Structure

## 📁 Project Layout

```
src/
├── 📁 assets/                    # Static assets and images
│   ├── 🖼️ jharkhand-hero.jpg      # Main hero section background
│   ├── 🖼️ jharkhand-real-map.png  # Interactive map background
│   ├── 🖼️ hundru-falls.jpg       # Waterfall images
│   ├── 🖼️ dassam-falls.jpg
│   ├── 🖼️ jonha-falls.jpg
│   ├── 🖼️ netarhat-sunrise.jpg    # Hill station images
│   ├── 🖼️ betla-national-park.jpg # Wildlife sanctuary images
│   └── 🖼️ rock-garden.jpg        # Other attractions
│
├── 📁 components/                # Reusable UI components
│   ├── 🎯 Header.tsx             # Navigation header with animated buttons
│   ├── 🦸 Hero.tsx               # Landing page hero section
│   ├── 🗺️ InteractiveMap.tsx      # Main interactive map with popups
│   ├── 📊 LocationAnalytics.tsx   # Tourism analytics dashboard
│   ├── 🖼️ Gallery.tsx            # Categorized photo gallery
│   ├── 🎨 BackgroundElements.tsx  # Animated background elements
│   └── 📁 ui/                    # Shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       └── ... (other UI components)
│
├── 📁 pages/                     # Main page components
│   ├── 🏠 Index.tsx              # Main page layout
│   ├── ⭐ Features.tsx           # Features showcase page
│   ├── 💧 Waterfalls.tsx         # Dedicated waterfalls section
│   └── 🚫 NotFound.tsx           # 404 error page
│
├── 📁 lib/                       # Utility functions
│   └── utils.ts                  # Common utilities (cn function)
│
├── 📁 hooks/                     # Custom React hooks
│   ├── use-mobile.tsx
│   └── use-toast.ts
│
├── 🎨 index.css                  # Global styles and design system
├── 🚀 main.tsx                   # Application entry point
└── 🔧 vite-env.d.ts              # TypeScript definitions
```

## 🎨 Design System

The project uses a comprehensive design system defined in `src/index.css`:

### Colors (HSL format)
- **Primary**: Forest Green (--primary: 152 60% 25%)
- **Secondary**: Waterfall Blue (--secondary: 200 70% 45%)
- **Accent**: Earth Tone (--accent: 35 45% 65%)

### Gradients
- `bg-gradient-nature`: Forest to waterfall gradient
- `bg-gradient-waterfall`: Waterfall blue gradient
- `bg-gradient-forest`: Forest green gradient
- `bg-gradient-overlay`: Map overlay gradient

### Animations
- `animate-fade-in`: Fade in with slide up
- `animate-pulse-glow`: Glowing pulse effect
- `animate-bounce-soft`: Gentle bounce animation
- `hover-lift`: Scale and translate on hover
- `hover-scale`: Simple scale on hover

## 🖼️ Image Management

### Where to Add/Change Images:

1. **Hero Section Background**
   - File: `src/assets/jharkhand-hero.jpg`
   - Used in: `src/components/Hero.tsx`
   - Purpose: Main landing page background

2. **Interactive Map Background**
   - File: `src/assets/jharkhand-real-map.png`
   - Used in: `src/components/InteractiveMap.tsx`
   - Purpose: Map overlay for location markers

3. **Gallery Images**
   - Location: `src/assets/`
   - Files: `hundru-falls.jpg`, `dassam-falls.jpg`, `jsonha-falls.jpg`, etc.
   - Used in: `src/components/Gallery.tsx`
   - Categories: Temples, Waterfalls, Hill Stations, Others

4. **Waterfall Section Images**
   - Used in: `src/pages/Waterfalls.tsx`
   - Import as ES6 modules: `import imageName from "@/assets/image.jpg"`

### Adding New Images:
1. Place image in `src/assets/` folder
2. Import in component: `import newImage from "@/assets/new-image.jpg"`
3. Use in JSX: `<img src={newImage} alt="Description" />`

## 📱 Responsive Design

The application is fully responsive with:
- Mobile-first approach
- Tailwind CSS breakpoints (md:, lg:, xl:)
- Adaptive navigation (mobile hamburger menu)
- Flexible grid layouts

## 🚀 Development Setup

### Prerequisites
- Node.js 16+
- npm or yarn or pnpm

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🎯 Key Features

1. **Interactive Map** (`InteractiveMap.tsx`)
   - Click markers to see location details
   - Tourism analytics dashboard
   - Gallery preview integration

2. **Categorized Gallery** (`Gallery.tsx`)
   - Filter by: All, Temples, Waterfalls, Hill Stations, Others
   - Modal view with navigation
   - Smooth animations

3. **Enhanced Navigation** (`Header.tsx`)
   - Animated buttons: Destinations, Gallery, Features, Waterfalls
   - Smooth scroll to sections
   - Gradient hover effects

4. **Analytics Dashboard** (`LocationAnalytics.tsx`)
   - Visitor statistics
   - Ratings and reviews
   - Best time to visit
   - Weather information

## 🔧 Customization Guide

### Adding New Locations:
1. Edit `src/components/InteractiveMap.tsx`
2. Add to `locations` array with:
   - id, name, type, icon, position, description, attractions

### Adding New Gallery Categories:
1. Edit `src/components/Gallery.tsx`
2. Add to `categories` array
3. Update gallery items with new category

### Styling Changes:
1. Edit `src/index.css` for global styles
2. Use existing design tokens
3. Follow HSL color format
4. Use semantic class names

## 📦 Dependencies

### Core
- React 18+ with TypeScript
- Vite for build tooling
- Tailwind CSS for styling

### UI Components
- Radix UI primitives
- Lucide React for icons
- Custom shadcn/ui components

### Animations
- Tailwind CSS animations
- Custom keyframes in index.css

## 🌐 Deployment

The application is ready for deployment to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Build assets are generated in `/dist` folder after running `npm run build`.

## 🗺️ Navigation Flow

1. **Landing** → Hero section with call-to-action buttons
2. **Explore** → Interactive map with location details
3. **Features** → Platform capabilities showcase
4. **Waterfalls** → Dedicated waterfall information
5. **Gallery** → Categorized photo collection
6. **Footer** → Additional information and links

This structure provides a comprehensive tourism platform for Jharkhand with smooth navigation, detailed information, and engaging user interactions.