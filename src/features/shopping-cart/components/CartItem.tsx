import { useCartStore } from '../store';
import { CartItem as CartItemType } from '../types';
import { Button } from '@/components/ui/Button';
import { formatCurrency } from '@/utils/helpers';

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCartStore();

  return (
    <div className="flex items-center justify-between border-b border-gray-200 py-4">
      <div className="flex-1">
        <h3 className="font-medium text-gray-900">{item.name}</h3>
        <p className="text-sm text-gray-500">{formatCurrency(item.price)}</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            data-testid={`decrease-${item.id}`}
          >
            -
          </Button>
          <span className="w-8 text-center" data-testid={`quantity-${item.id}`}>
            {item.quantity}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            data-testid={`increase-${item.id}`}
          >
            +
          </Button>
        </div>

        <Button
          variant="danger"
          size="sm"
          onClick={() => removeItem(item.id)}
          data-testid={`remove-${item.id}`}
        >
          Remove
        </Button>
      </div>
    </div>
  );
}
