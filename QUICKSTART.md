# Quick Start Guide

## 🚀 Get Running in 5 Minutes

### 1. Install Dependencies

```bash
npm install
```

### 2. Setup Environment

```bash
cp .env.example .env
```

### 3. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` 🎉

## 🧪 Run Tests

```bash
# Unit tests
npm run test

# E2E tests (make sure dev server is running)
npm run test:e2e
```

## 🏗️ Build for Production

```bash
npm run build
npm run preview
```

## 📝 Create a New Feature

### Example: Adding a "Products" feature

1. Create feature folder:
```bash
mkdir -p src/features/products/{components,hooks}
```

2. Create types (`src/features/products/types.ts`):
```typescript
export interface Product {
  id: string;
  name: string;
  price: number;
}
```

3. Create Zustand store (`src/features/products/store.ts`):
```typescript
import { create } from 'zustand';
import { Product } from './types';

interface ProductState {
  products: Product[];
  addProduct: (product: Product) => void;
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  addProduct: (product) =>
    set((state) => ({ products: [...state.products, product] })),
}));
```

4. Create component (`src/features/products/components/ProductList.tsx`):
```typescript
import { useProductStore } from '../store';

export function ProductList() {
  const products = useProductStore((state) => state.products);
  
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}
```

5. Write tests (`src/features/products/store.test.ts`):
```typescript
import { describe, it, expect } from 'vitest';
import { useProductStore } from './store';

describe('useProductStore', () => {
  it('adds product', () => {
    const { addProduct } = useProductStore.getState();
    addProduct({ id: '1', name: 'Test', price: 9.99 });
    
    const { products } = useProductStore.getState();
    expect(products).toHaveLength(1);
  });
});
```

## 🔧 Common Tasks

### Add a new route

Edit `src/lib/router.tsx`:
```typescript
{
  path: '/products',
  element: <ProductsPage />,
}
```

### Add global state

Create Zustand store in `src/store/`:
```typescript
// src/store/useSettingsStore.ts
import { create } from 'zustand';

interface SettingsState {
  language: string;
  setLanguage: (lang: string) => void;
}

export const useSettingsStore = create<SettingsState>((set) => ({
  language: 'en',
  setLanguage: (language) => set({ language }),
}));
```

### Mock API endpoint

Add to `tests/mocks/handlers.ts`:
```typescript
http.get('/api/products', () => {
  return HttpResponse.json([
    { id: '1', name: 'Product 1', price: 29.99 },
  ]);
}),
```

## 🎨 Styling Tips

Using Tailwind with the `cn` utility:
```typescript
import { cn } from '@/utils/helpers';

<div className={cn(
  'base-class',
  isActive && 'active-class',
  className
)} />
```

## 📚 Next Steps

- Read the full [README.md](./README.md)
- Explore the [project structure](./README.md#-project-structure)
- Check out example features in `src/features/`
- Review test examples in `*.test.tsx` files

## 🆘 Troubleshooting

**Port 3000 already in use?**
```bash
# Change port in vite.config.ts
server: {
  port: 3001,
}
```

**ESLint errors?**
```bash
npm run lint:fix
```

**Type errors?**
```bash
npm run type-check
```

## 📞 Need Help?

- Open an issue on GitHub
- Check existing issues and discussions
- Review the documentation
