# React 19 Production-Ready Project

A modern, fully-tested React 19 application with TypeScript, featuring best practices for state management, testing, and CI/CD.

## 🚀 Features

- ⚡️ **React 19** - Latest React with new features
- 🔷 **TypeScript** - Type safety throughout
- 🎨 **Tailwind CSS** - Utility-first styling
- 🔄 **React Router v7** - Client-side routing
- 🐻 **Zustand** - Lightweight state management
- ⚙️ **Context API** - Component tree state
- ✅ **Vitest** - Fast unit testing
- 🎭 **Playwright** - E2E testing
- 🔧 **MSW** - API mocking
- 📦 **Vite** - Lightning-fast build tool
- 🔍 **ESLint + Prettier** - Code quality
- 🐶 **Husky** - Git hooks
- 🔄 **GitHub Actions** - CI/CD pipeline

## 📁 Project Structure

```
src/
├── assets/                 # Static files
├── components/             # Shared components
│   ├── ui/                # Base UI components (Button, Input)
│   └── layout/            # Layout components (Header, Footer)
├── features/              # Feature modules
│   ├── auth/              # Authentication
│   │   ├── components/    # Auth components
│   │   ├── context/       # Auth Context API
│   │   ├── api.ts         # Auth API calls
│   │   └── types.ts       # Auth types
│   └── shopping-cart/     # Shopping cart
│       ├── components/    # Cart components
│       ├── store.ts       # Zustand store
│       └── types.ts       # Cart types
├── lib/                   # Third-party configs
│   ├── api.ts            # API client
│   └── router.tsx        # React Router setup
├── hooks/                 # Global custom hooks
├── store/                 # Global Zustand stores
├── context/               # Global Context providers
├── utils/                 # Helper functions
├── styles/                # Global styles
└── types/                 # Global TypeScript types
```

## 🏁 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
# Development
npm run dev              # Start dev server

# Build
npm run build           # Build for production
npm run preview         # Preview production build

# Testing
npm run test            # Run unit tests
npm run test:ui         # Open Vitest UI
npm run test:coverage   # Generate coverage report
npm run test:e2e        # Run E2E tests
npm run test:e2e:ui     # Open Playwright UI

# Code Quality
npm run lint            # Run ESLint
npm run lint:fix        # Fix ESLint errors
npm run format          # Format with Prettier
npm run format:check    # Check formatting
npm run type-check      # TypeScript type checking
```

## 🧪 Testing

### Unit Tests (Vitest + React Testing Library)

```bash
npm run test
```

Example test:
```typescript
import { render, screen } from '@testing-library/react';
import { Button } from '@/components/ui/Button';

test('renders button', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});
```

### E2E Tests (Playwright)

```bash
npm run test:e2e
```

Example test:
```typescript
import { test, expect } from '@playwright/test';

test('login flow', async ({ page }) => {
  await page.goto('/login');
  await page.fill('[data-testid="email-input"]', 'test@example.com');
  await page.click('[data-testid="login-button"]');
  await expect(page).toHaveURL('/');
});
```

## 🏗️ Architecture

### State Management

**Zustand** - For global app state:
- User authentication state
- Theme preferences
- Shopping cart

**Context API** - For feature-specific state:
- Auth loading/error states
- Form state
- Feature flags

### API Integration

- Centralized API client (`lib/api.ts`)
- MSW for mocking in tests
- TypeScript interfaces for all responses

### Code Quality

- **ESLint** - Enforces code standards
- **Prettier** - Consistent formatting
- **Husky** - Pre-commit hooks
- **lint-staged** - Lint only staged files

## 🔄 CI/CD Pipeline

GitHub Actions workflow includes:

1. **Code Quality** - Lint, format check, type check
2. **Unit Tests** - Run all unit tests with coverage
3. **E2E Tests** - Run Playwright tests
4. **Build** - Production build
5. **Deploy** - Auto-deploy to production (on main branch)

### Pipeline Stages

```yaml
quality → test → e2e → build → deploy
```

## 📦 Building for Production

```bash
npm run build
```

Output in `dist/` directory, ready for deployment to:
- Vercel
- Netlify
- AWS S3 + CloudFront
- Any static hosting

## 🔐 Environment Variables

Create `.env` file:

```env
VITE_API_URL=https://api.example.com
```

## 🎯 Best Practices

✅ TypeScript strict mode enabled
✅ Path aliases for clean imports
✅ Component co-location (tests next to components)
✅ Feature-based architecture
✅ Comprehensive test coverage (>80%)
✅ Automated CI/CD
✅ Git hooks for quality gates
✅ Accessible components
✅ Responsive design

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📝 License

MIT

## 🙏 Acknowledgments

- React Team for React 19
- Vercel for Vite
- Playwright Team
- Zustand maintainers
