# AI SaaS - React + Redux Toolkit + TypeScript

A modern, production-ready React application built with Redux Toolkit for state management, following best practices for scalable SaaS applications.

## 🌐 Live Demo

[![Deploy to GitHub Pages](https://github.com/kanstantsinhrytsuk/ai-react-redux/actions/workflows/deploy-github-pages.yml/badge.svg)](https://github.com/kanstantsinhrytsuk/ai-react-redux/actions/workflows/deploy-github-pages.yml)

**🔗 [View Live Demo](https://kanstantsinhrytsuk.github.io/ai-react-redux/)**

## 🚀 Features

- **Modern React 18** with TypeScript
- **Redux Toolkit (RTK)** for predictable state management
- **React Router** for client-side routing
- **React Hook Form** with Zod validation
- **Tailwind CSS** for styling
- **Authentication System** with protected routes
- **Component Library** with reusable UI components
- **Testing Setup** with Vitest and React Testing Library
- **ESLint & TypeScript** for code quality
- **Feature-based Architecture** for scalability
- **GitHub Pages Deployment** with automated CI/CD

## 📁 Project Structure

```
src/
├── app/                          # Redux store configuration
│   ├── store.ts                  # Store setup and configuration
│   └── hooks.ts                  # Typed Redux hooks
├── components/                   # Reusable components
│   ├── ui/                       # Basic UI components
│   ├── layout/                   # Layout components
│   └── common/                   # Common components
├── features/                     # Feature-based modules
│   └── auth/                     # Authentication feature
│       ├── components/           # Auth-specific components
│       ├── hooks/                # Auth-specific hooks
│       ├── services/             # Auth API services
│       ├── slice.ts              # Redux slice
│       ├── selectors.ts          # Redux selectors
│       └── index.ts              # Feature exports
├── pages/                        # Page components
├── services/                     # API services
├── hooks/                        # Global custom hooks
├── lib/                          # Utility functions
├── types/                        # TypeScript type definitions
└── test/                         # Test configuration
```

## 🛠️ Technology Stack

### Core
- **React 18** - Modern React with hooks
- **TypeScript** - Type safety and better DX
- **Vite** - Fast build tool and dev server

### State Management
- **Redux Toolkit (RTK)** - State management with less boilerplate
- **React Redux** - React bindings for Redux

### Routing & Forms
- **React Router v6** - Client-side routing
- **React Hook Form** - Performant forms with easy validation
- **Zod** - TypeScript-first schema validation

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **tailwind-merge** - Merge Tailwind classes efficiently
- **clsx** - Conditional class names

### Testing
- **Vitest** - Fast unit testing
- **React Testing Library** - Simple component testing
- **@testing-library/jest-dom** - Custom matchers

### Development
- **ESLint** - Code linting
- **TypeScript Compiler** - Type checking
- **Hot Module Replacement** - Fast development iteration

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- Yarn (recommended) or npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   yarn install
   ```

3. Start the development server:
   ```bash
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Demo Credentials

For testing the authentication system:
- **Email:** admin@example.com
- **Password:** password

## 📋 Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn typecheck` - Run TypeScript type checking
- `yarn lint` - Run ESLint
- `yarn lint:fix` - Fix ESLint errors
- `yarn test` - Run tests
- `yarn test:ui` - Run tests with UI
- `yarn test:coverage` - Run tests with coverage

## 🏗️ Architecture Patterns

### Feature-based Organization
Each feature (like `auth`) contains all related files:
- Components specific to the feature
- Redux slice and selectors
- Custom hooks
- API services
- Types and schemas

### Redux Toolkit Best Practices
- **Typed hooks** for useSelector and useDispatch
- **createAsyncThunk** for async operations
- **Immer** for immutable updates (built into RTK)
- **RTK Query** ready for advanced data fetching

### Component Patterns
- **Compound components** for complex UI
- **Custom hooks** for business logic
- **TypeScript interfaces** for props
- **Error boundaries** for error handling

## 🔐 Authentication System

The authentication system includes:

- **Login/Register forms** with validation
- **JWT token management** with localStorage
- **Protected routes** that require authentication
- **Public routes** that redirect authenticated users
- **Auto token verification** on app load
- **Logout functionality** with cleanup

### Auth Flow
1. User submits login/register form
2. Redux action dispatches async thunk
3. API call made (currently mocked)
4. Token stored in localStorage
5. User redirected to dashboard
6. Protected routes check authentication status

## 🧪 Testing Strategy

### Unit Tests
- **Redux slices** - Test actions and reducers
- **Custom hooks** - Test business logic
- **Utility functions** - Test pure functions

### Integration Tests
- **Component rendering** - Test component behavior
- **User interactions** - Test form submissions
- **Route navigation** - Test protected routes

### E2E Tests (Future)
- **Authentication flow** - Complete user journey
- **Feature workflows** - End-to-end scenarios

## 🔧 Configuration

### Environment Variables
Create a `.env` file for configuration:
```env
VITE_API_URL=http://localhost:3001/api
```

### TypeScript Configuration
The project uses strict TypeScript configuration with:
- Strict mode enabled
- No implicit any
- Unused locals/parameters detection
- Import/export consistency

### ESLint Configuration
Configured with:
- React hooks rules
- TypeScript rules
- Import rules
- Accessibility rules

## 🚀 Deployment

### GitHub Pages (Automated)

This project automatically deploys to GitHub Pages on every push to the `main` branch.

**Live Demo:** [https://kanstantsinhrytsuk.github.io/ai-react-redux/](https://kanstantsinhrytsuk.github.io/ai-react-redux/)

The deployment process includes:
- **Automated builds** on push to main
- **Quality checks** (TypeScript, ESLint, tests)
- **Optimized production builds** with code splitting
- **Secure deployment** with minimal permissions

#### Manual Deployment

To manually trigger a deployment:
1. Go to the "Actions" tab in your GitHub repository
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow"

### Build for Production

```bash
yarn build
```

The build artifacts will be stored in the `dist/` directory with:
- **Code splitting** for optimal loading
- **Minified assets** for faster downloads
- **Source maps** disabled for production
- **Optimized chunks** (vendor, redux, router, ui)

### Alternative Deployment Options

#### Deploy to Vercel

1. Connect your repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main

#### Deploy to Netlify

1. Build the project: `yarn build`
2. Upload the `dist/` folder to Netlify
3. Configure redirects for SPA routing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Code Style
- Use TypeScript for all new files
- Follow the existing file structure
- Add tests for new features
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The library that makes it all possible
- [Redux Toolkit](https://redux-toolkit.js.org/) - The official, opinionated toolset for Redux
- [Tailwind CSS](https://tailwindcss.com/) - The utility-first CSS framework
- [Vite](https://vitejs.dev/) - The fast build tool

---

**Happy coding!** 🎉
