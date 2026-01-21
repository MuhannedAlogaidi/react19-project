# Project File Structure Reference

Complete reference of all files in this project and their purposes.

## 📁 Root Configuration Files

| File | Purpose |
|------|---------|
| `package.json` | Dependencies, scripts, and project metadata |
| `tsconfig.json` | TypeScript compiler configuration with path aliases |
| `vite.config.ts` | Vite build tool configuration |
| `vitest.config.ts` | Vitest test runner configuration |
| `playwright.config.ts` | Playwright E2E test configuration |
| `eslint.config.js` | ESLint linting rules (flat config) |
| `.prettierrc` | Prettier code formatting rules |
| `tailwind.config.js` | Tailwind CSS configuration |
| `postcss.config.js` | PostCSS configuration for Tailwind |
| `.gitignore` | Git ignore patterns |
| `.env.example` | Example environment variables |
| `index.html` | HTML entry point |

## 📚 Documentation

| File | Purpose |
|------|---------|
| `README.md` | Complete project documentation |
| `QUICKSTART.md` | 5-minute getting started guide |
| `INSTALLATION.md` | Detailed setup and deployment guide |
| `FILE_STRUCTURE.md` | This file - reference guide |

## 🔧 Build & CI/CD

| Path | Purpose |
|------|---------|
| `.github/workflows/ci.yml` | GitHub Actions CI/CD pipeline |
| `.husky/pre-commit` | Git pre-commit hook for quality checks |
| `.vscode/extensions.json` | Recommended VS Code extensions |
| `.vscode/settings.json` | VS Code workspace settings |

## 📦 Source Code (`src/`)

### Main Files
| File | Purpose |
|------|---------|
| `src/main.tsx` | Application entry point |
| `src/App.tsx` | Root application component |

### Components (`src/components/`)
| Path | Purpose |
|------|---------|
| `components/ui/Button.tsx` | Reusable button component |
| `components/ui/Button.test.tsx` | Button component tests |
| `components/ui/Input.tsx` | Reusable input component |
| `components/layout/Header.tsx` | Application header with navigation |

### Features (`src/features/`)

#### Authentication Feature
| Path | Purpose |
|------|---------|
| `features/auth/index.tsx` | Auth feature main page/export |
| `features/auth/types.ts` | Auth TypeScript interfaces |
| `features/auth/api.ts` | Auth API calls (login, logout) |
| `features/auth/context/AuthContext.tsx` | Auth Context API provider |
| `features/auth/components/LoginForm.tsx` | Login form component |
| `features/auth/components/LoginForm.test.tsx` | Login form tests |

#### Shopping Cart Feature
| Path | Purpose |
|------|---------|
| `features/shopping-cart/index.tsx` | Cart page component |
| `features/shopping-cart/types.ts` | Cart TypeScript interfaces |
| `features/shopping-cart/store.ts` | Zustand cart state store |
| `features/shopping-cart/store.test.ts` | Cart store tests |
| `features/shopping-cart/components/CartItem.tsx` | Individual cart item component |

### Library Configuration (`src/lib/`)
| File | Purpose |
|------|---------|
| `lib/api.ts` | Centralized API client with auth |
| `lib/router.tsx` | React Router configuration |

### State Management (`src/store/`)
| File | Purpose |
|------|---------|
| `store/useUserStore.ts` | Global user state (Zustand) |
| `store/useThemeStore.ts` | Global theme state (Zustand) |

### Context Providers (`src/context/`)
| File | Purpose |
|------|---------|
| `context/AppProviders.tsx` | Wrapper for all global providers |

### Custom Hooks (`src/hooks/`)
| File | Purpose |
|------|---------|
| `hooks/useLocalStorage.ts` | localStorage hook |
| `hooks/useLocalStorage.test.ts` | localStorage hook tests |

### Utilities (`src/utils/`)
| File | Purpose |
|------|---------|
| `utils/helpers.ts` | Helper functions (cn, formatCurrency, etc.) |
| `utils/constants.ts` | App-wide constants |

### Styles (`src/styles/`)
| File | Purpose |
|------|---------|
| `styles/globals.css` | Global CSS with Tailwind directives |

### Types (`src/types/`)
| File | Purpose |
|------|---------|
| `types/index.ts` | Global TypeScript type definitions |

## 🧪 Tests (`tests/`)

### Test Configuration
| File | Purpose |
|------|---------|
| `tests/setup.ts` | Vitest global test setup |
| `tests/utils.tsx` | Test utility functions and wrappers |

### API Mocking
| File | Purpose |
|------|---------|
| `tests/mocks/handlers.ts` | MSW request handlers for API mocking |
| `tests/mocks/server.ts` | MSW server setup for tests |

### E2E Tests
| File | Purpose |
|------|---------|
| `tests/e2e/auth.spec.ts` | Authentication flow E2E tests |
| `tests/e2e/cart.spec.ts` | Shopping cart E2E tests |

## 📊 Test Coverage

All `.test.ts` and `.test.tsx` files are co-located with their source files for easy maintenance.

### Coverage Requirements
- **Lines:** 80%
- **Functions:** 80%
- **Branches:** 80%
- **Statements:** 80%

## 🎯 File Naming Conventions

| Convention | Usage |
|------------|-------|
| `*.tsx` | React components |
| `*.ts` | TypeScript logic (no JSX) |
| `*.test.tsx` | Component tests |
| `*.test.ts` | Logic/hook tests |
| `*.spec.ts` | E2E tests |
| `*.config.ts` | Configuration files |
| `index.tsx` | Feature entry/export point |
| `types.ts` | TypeScript type definitions |
| `api.ts` | API service layer |
| `store.ts` | Zustand state store |

## 📂 Directory Purposes

| Directory | Purpose |
|-----------|---------|
| `src/assets/` | Static files (images, fonts, icons) |
| `src/components/ui/` | Base reusable UI components |
| `src/components/layout/` | Layout components (Header, Footer) |
| `src/features/` | Self-contained feature modules |
| `src/lib/` | Third-party library configurations |
| `src/hooks/` | Reusable custom hooks |
| `src/store/` | Global Zustand stores |
| `src/context/` | Global React Context providers |
| `src/utils/` | Pure utility functions |
| `src/styles/` | Global styles and themes |
| `src/types/` | Global TypeScript types |
| `tests/e2e/` | Playwright end-to-end tests |
| `tests/mocks/` | MSW API mocking |
| `.github/workflows/` | GitHub Actions workflows |
| `.husky/` | Git hooks |
| `.vscode/` | VS Code configuration |

## 🔍 How to Find Things

### "Where do I add...?"

**A new page?**
→ Create in `src/features/[feature-name]/index.tsx`
→ Add route to `src/lib/router.tsx`

**A new component?**
→ Reusable: `src/components/ui/`
→ Feature-specific: `src/features/[feature]/components/`

**Global state?**
→ Zustand: `src/store/use[Name]Store.ts`
→ Context: `src/context/[Name]Context.tsx`

**API endpoint?**
→ `src/features/[feature]/api.ts`
→ Mock in `tests/mocks/handlers.ts`

**Custom hook?**
→ Global: `src/hooks/use[Name].ts`
→ Feature: `src/features/[feature]/hooks/use[Name].ts`

**Utility function?**
→ `src/utils/helpers.ts`

**TypeScript type?**
→ Feature-specific: `src/features/[feature]/types.ts`
→ Global: `src/types/index.ts`

**Test?**
→ Co-located with source file: `[file].test.tsx`
→ E2E: `tests/e2e/[feature].spec.ts`

**Environment variable?**
→ `.env` (create from `.env.example`)
→ Access with `import.meta.env.VITE_[NAME]`

## 📖 Quick Reference

**Path Aliases** (configured in `tsconfig.json`):
- `@/*` → `src/*`
- `@/components/*` → `src/components/*`
- `@/features/*` → `src/features/*`
- `@/hooks/*` → `src/hooks/*`
- `@/lib/*` → `src/lib/*`
- `@/store/*` → `src/store/*`
- `@/utils/*` → `src/utils/*`
- `@/types/*` → `src/types/*`

**Import Examples:**
```typescript
import { Button } from '@/components/ui/Button';
import { useUserStore } from '@/store/useUserStore';
import { cn } from '@/utils/helpers';
import { User } from '@/types';
```

## 🎨 File Size Guidelines

- **Components:** < 300 lines (extract if larger)
- **Stores:** < 200 lines (split if larger)
- **Utils:** < 100 lines per function
- **Tests:** No hard limit (comprehensive coverage)

## 🔄 Related Files

When working on a feature, you'll typically touch:

1. **Component** (`features/[name]/components/[Name].tsx`)
2. **Types** (`features/[name]/types.ts`)
3. **API** (`features/[name]/api.ts`)
4. **State** (`features/[name]/store.ts` or `context/`)
5. **Tests** (`[Name].test.tsx`, `e2e/[name].spec.ts`)
6. **Router** (`lib/router.tsx`)

---

**This structure follows:**
- ✅ Feature-based architecture
- ✅ Co-location principle
- ✅ Clear separation of concerns
- ✅ Scalable organization
- ✅ Easy navigation
