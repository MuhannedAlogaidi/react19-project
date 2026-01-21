import { describe, it, expect, beforeEach } from 'vitest';
import { useCartStore } from '@/features/shopping-cart/store';

describe('useCartStore', () => {
  beforeEach(() => {
    useCartStore.setState({ items: [] });
  });

  it('starts with empty cart', () => {
    const { items } = useCartStore.getState();
    expect(items).toEqual([]);
  });

  it('adds item to cart', () => {
    const { addItem } = useCartStore.getState();
    addItem({ id: '1', name: 'Product 1', price: 29.99 });

    const { items } = useCartStore.getState();
    expect(items).toHaveLength(1);
    expect(items[0]).toMatchObject({
      id: '1',
      name: 'Product 1',
      price: 29.99,
      quantity: 1,
    });
  });

  it('increases quantity when adding existing item', () => {
    const { addItem } = useCartStore.getState();
    addItem({ id: '1', name: 'Product 1', price: 29.99 });
    addItem({ id: '1', name: 'Product 1', price: 29.99 });

    const { items } = useCartStore.getState();
    expect(items).toHaveLength(1);
    expect(items[0].quantity).toBe(2);
  });

  it('removes item from cart', () => {
    const { addItem, removeItem } = useCartStore.getState();
    addItem({ id: '1', name: 'Product 1', price: 29.99 });
    removeItem('1');

    const { items } = useCartStore.getState();
    expect(items).toHaveLength(0);
  });

  it('updates item quantity', () => {
    const { addItem, updateQuantity } = useCartStore.getState();
    addItem({ id: '1', name: 'Product 1', price: 29.99 });
    updateQuantity('1', 5);

    const { items } = useCartStore.getState();
    expect(items[0].quantity).toBe(5);
  });

  it('removes item when quantity is set to 0', () => {
    const { addItem, updateQuantity } = useCartStore.getState();
    addItem({ id: '1', name: 'Product 1', price: 29.99 });
    updateQuantity('1', 0);

    const { items } = useCartStore.getState();
    expect(items).toHaveLength(0);
  });

  it('calculates total correctly', () => {
    const { addItem, getTotal } = useCartStore.getState();
    addItem({ id: '1', name: 'Product 1', price: 29.99 });
    addItem({ id: '2', name: 'Product 2', price: 49.99 });

    expect(getTotal()).toBe(79.98);
  });

  it('calculates item count correctly', () => {
    const { addItem, getItemCount } = useCartStore.getState();
    addItem({ id: '1', name: 'Product 1', price: 29.99 });
    addItem({ id: '1', name: 'Product 1', price: 29.99 });
    addItem({ id: '2', name: 'Product 2', price: 49.99 });

    expect(getItemCount()).toBe(3);
  });

  it('clears cart', () => {
    const { addItem, clearCart } = useCartStore.getState();
    addItem({ id: '1', name: 'Product 1', price: 29.99 });
    addItem({ id: '2', name: 'Product 2', price: 49.99 });
    clearCart();

    const { items } = useCartStore.getState();
    expect(items).toHaveLength(0);
  });
});
