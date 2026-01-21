# React 19 Project - Complete Setup Guide

## 📦 What's Included

This is a production-ready React 19 application with complete testing infrastructure and CI/CD pipeline.

### Core Stack
- **React 19** - Latest React with concurrent features
- **TypeScript** - Full type safety
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first styling

### State Management
- **Zustand** - Global state (cart, user, theme)
- **Context API** - Feature-specific state (auth forms)

### Testing Suite
- **Vitest** - Unit/integration tests (80%+ coverage required)
- **React Testing Library** - Component testing
- **Playwright** - E2E tests across browsers
- **MSW** - API mocking for tests

### Code Quality
- **ESLint** - Linting with TypeScript rules
- **Prettier** - Code formatting with Tailwind plugin
- **Husky** - Git hooks for pre-commit checks
- **lint-staged** - Only lint staged files

### CI/CD
- **GitHub Actions** - Complete pipeline
  - Lint & format check
  - Type checking
  - Unit tests with coverage
  - E2E tests
  - Build verification
  - Auto-deploy on main branch

## 🚀 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm 9+ or yarn 1.22+

### Step 1: Navigate to Project
```bash
cd react19-project
```

### Step 2: Install Dependencies
```bash
npm install
```

This will install all dependencies and setup Husky git hooks automatically.

### Step 3: Environment Setup
```bash
cp .env.example .env
```

Edit `.env` if you need to change the API URL.

### Step 4: Start Development Server
```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## 🧪 Running Tests

### Unit Tests
```bash
# Run tests in watch mode
npm run test

# Run tests once
npm run test -- --run

# Generate coverage report
npm run test:coverage

# Open Vitest UI
npm run test:ui
```

Coverage thresholds are set to 80% - the build will fail if coverage drops below this.

### E2E Tests
```bash
# Run all E2E tests
npm run test:e2e

# Run in UI mode
npm run test:e2e:ui

# Run specific browser
npm run test:e2e -- --project=chromium
```

## 🏗️ Project Structure

```
react19-project/
├── .github/
│   └── workflows/
│       └── ci.yml              # CI/CD pipeline
│
├── src/
│   ├── components/
│   │   ├── ui/                 # Button, Input, etc.
│   │   └── layout/             # Header, Footer
│   │
│   ├── features/               # Feature modules
│   │   ├── auth/              # Login/logout with Context API
│   │   └── shopping-cart/     # Cart with Zustand
│   │
│   ├── lib/
│   │   ├── api.ts             # Centralized API client
│   │   └── router.tsx         # React Router config
│   │
│   ├── store/                 # Global Zustand stores
│   ├── context/               # Global Context providers
│   ├── hooks/                 # Custom hooks
│   ├── utils/                 # Helper functions
│   ├── styles/                # Global CSS
│   └── types/                 # TypeScript types
│
├── tests/
│   ├── e2e/                   # Playwright tests
│   ├── mocks/                 # MSW handlers
│   ├── setup.ts               # Test configuration
│   └── utils.tsx              # Test utilities
│
└── Configuration files         # All configs included
```

## 📝 Available Scripts

### Development
- `npm run dev` - Start dev server (http://localhost:3000)
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Testing
- `npm run test` - Run unit tests
- `npm run test:ui` - Open Vitest UI
- `npm run test:coverage` - Coverage report
- `npm run test:e2e` - Run E2E tests
- `npm run test:e2e:ui` - Playwright UI

### Code Quality
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Auto-fix linting errors
- `npm run format` - Format with Prettier
- `npm run format:check` - Check formatting
- `npm run type-check` - TypeScript validation

## 🎯 Features Demonstrated

### 1. Authentication Feature (Context API)
- Login form with validation
- Error handling
- Loading states
- User session management
- Tests included

**Try it:**
- Navigate to `/login`
- Email: `test@example.com`
- Password: `password123`

### 2. Shopping Cart (Zustand)
- Add/remove items
- Update quantities
- Calculate totals
- Persist in store
- Comprehensive tests

**Try it:**
- Navigate to `/cart`
- Interact with cart items

### 3. Theme Toggler (Zustand)
- Light/dark mode
- Persisted in localStorage
- Global state management

## 🔧 Key Patterns

### Adding New Features

1. Create feature folder in `src/features/`
2. Add types, components, and state management
3. Write unit tests
4. Add E2E tests if needed
5. Update router if creating new pages

### State Management Decision Tree

**Use Zustand when:**
- Global app state
- Cross-feature state
- Performance-critical updates
- Examples: cart, user, theme

**Use Context API when:**
- Feature-scoped state
- Form state
- Loading/error states
- Examples: auth forms, modal state

### Testing Strategy

**Unit Tests:**
- All components
- All hooks
- All stores
- All utilities

**E2E Tests:**
- Critical user flows
- Authentication
- Checkout process
- Cross-browser compatibility

## 🚢 Deployment

### Build for Production
```bash
npm run build
```

Output in `dist/` directory.

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

### Environment Variables
Don't forget to set `VITE_API_URL` in your hosting platform!

## 🔍 CI/CD Pipeline

The GitHub Actions workflow runs on:
- Push to `main` or `develop`
- Pull requests to `main` or `develop`

### Pipeline Stages:

1. **Quality** (Lint, Format, Types)
2. **Unit Tests** (With coverage)
3. **E2E Tests** (Playwright)
4. **Build** (Production build)
5. **Deploy** (Auto-deploy on main)

### Coverage Requirements:
- Lines: 80%
- Functions: 80%
- Branches: 80%
- Statements: 80%

## 📚 Documentation

- **README.md** - Complete project documentation
- **QUICKSTART.md** - 5-minute setup guide
- **THIS FILE** - Installation and setup

## 🐛 Troubleshooting

### Port Already in Use
Edit `vite.config.ts`:
```typescript
server: {
  port: 3001, // Change port
}
```

### Module Not Found Errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Type Errors
```bash
npm run type-check
```

### Test Failures
```bash
# Clear test cache
npm run test -- --clearCache

# Update snapshots
npm run test -- -u
```

## 🤝 Contributing

1. Create feature branch
2. Make changes
3. Run tests: `npm run test`
4. Run linter: `npm run lint:fix`
5. Commit (pre-commit hooks will run)
6. Push and create PR

## ✅ Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Start dev server: `npm run dev`
3. ✅ Run tests: `npm run test`
4. ✅ Explore the code structure
5. ✅ Read QUICKSTART.md for feature examples
6. ✅ Build something amazing! 🚀

## 📞 Support

- Check documentation in README.md
- Review example features in `src/features/`
- Look at test examples
- Open an issue on GitHub

---

**Built with ❤️ using React 19 and modern best practices**
