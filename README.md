# i-Gizmo Frontend

React frontend application for the i-Gizmo educational platform.

## Features

- User authentication (login/register)
- AI-powered study chat interface
- File upload and material management
- User profile with progress tracking
- Responsive design with dark theme

## Project Structure

```
src/
  ├── components/           # Reusable UI components
  │   ├── Card.js          # Generic card component
  │   ├── Header.js        # Navigation header
  │   └── Footer.js        # Page footer
  ├── layouts/             # Page layout wrappers
  │   └── MainLayout.js    # Main application layout
  ├── pages/               # Application pages
  │   ├── Home.js          # Landing page
  │   ├── LoginPage.jsx    # User login
  │   ├── RegisterPage.jsx # User registration
  │   ├── StudyPage.jsx    # AI study interface
  │   ├── MaterialsPage.jsx# File upload and materials
  │   ├── ProfilePage.jsx  # User profile and progress
  │   ├── About.js         # About page
  │   └── NotFound.js      # 404 error page
  ├── hooks/               # Custom React hooks
  │   ├── useFetch.js      # Data fetching hook
  │   └── useLocalStorage.js # Local storage management
  ├── App.js              # Main application component
  └── index.js            # Application entry point
```

## Installation

```bash
git clone https://github.com/VirtusRnD/i_Gizmo.git
cd i_Gizmo/frontend
npm install
npm start
```

## Scripts

```bash
npm start          # Development server
npm run build      # Production build
npm test           # Run tests
```

## Dependencies

### Core

- React (^18.2.0)
- React Router DOM (^6.11.2)
- React Icons (^5.5.0)
- Lucide React (^0.525.0)

### Styling

- Tailwind CSS (^3.4.4)
- PostCSS (^8.4.39)
- Autoprefixer (^10.4.19)

## Routes

```
/              # Home page
/login         # User login
/register      # User registration
/materials     # File upload
/study         # AI chat interface
/profile       # User dashboard
/about         # About page
```

## CSS Architecture

- Component-specific CSS files
- Tailwind utility classes
- CSS variables for theming
- Responsive breakpoints: mobile (<768px), tablet (768-1024px), desktop (>1024px)

## Custom Hooks

### useFetch

```javascript
const { data, loading, error } = useFetch("/api/endpoint");
```

### useLocalStorage

```javascript
const [value, setValue] = useLocalStorage("key", defaultValue);
```

## Environment Variables

Create `.env` file:

```
REACT_APP_API_URL=your_api_url
REACT_APP_VERSION=1.0.0
```

## Development

### Component Structure

```javascript
import React from "react";
import "./Component.css";

const Component = ({ prop1, prop2 }) => {
  return <div className="component-container">{/* content */}</div>;
};

export default Component;
```

### Code Style

- Functional components with hooks
- Consistent naming conventions
- Component-specific CSS files

## Troubleshooting

- **Module not found**: `npm install`
- **Port conflicts**: `PORT=3001 npm start`
- **Build errors**: `npm start -- --reset-cache`

## Team

VirtusRnD - i-Gizmo educational platform
