import { useCartStore } from './store';
import { CartItem } from './components/CartItem';
import { Button } from '@/components/ui/Button';
import { formatCurrency } from '@/utils/helpers';

export default function CartPage() {
  const { items, getTotal, clearCart } = useCartStore();
  const total = getTotal();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-6 text-3xl font-bold">Shopping Cart</h1>
        <p className="text-gray-600">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Shopping Cart</h1>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <div className="rounded-lg border border-gray-200 p-6">
          <h2 className="mb-4 text-xl font-semibold">Order Summary</h2>

          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span data-testid="cart-total">{formatCurrency(total)}</span>
            </div>
            <div className="border-t border-gray-200 pt-2">
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>{formatCurrency(total)}</span>
              </div>
            </div>
          </div>

          <Button className="mt-6 w-full">Checkout</Button>
          <Button
            variant="outline"
            className="mt-2 w-full"
            onClick={clearCart}
            data-testid="clear-cart"
          >
            Clear Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
