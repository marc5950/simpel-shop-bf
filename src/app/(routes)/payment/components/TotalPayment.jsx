"use client";
import useStore from "@/store/cart";
import Btn from "@/components/Btn";

const TotalPayment = () => {
  const cart = useStore((state) => state.cart);

  // Beregn subtotal (før discount)
  const subtotal = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  // Beregn total (efter discount)
  const total = cart.reduce((sum, item) => {
    const price =
      item.discountPercentage > 10
        ? item.price * (1 - item.discountPercentage / 100)
        : item.price;
    return sum + price * item.quantity;
  }, 0);

  const hasDiscount = total < subtotal;

  // Levering (gratis hvis over 50)
  const shipping = subtotal >= 50 ? 0 : 39;
  const finalTotal = total + shipping;

  return (
    <div className="rounded border border-gray-300 p-6">
      <h2 className="mb-4 text-xl font-semibold">Pris i alt</h2>

      <div className="flex flex-col gap-3">
        {/* Subtotal */}
        <div className="flex justify-between">
          <span className="text-gray-700">Subtotal</span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>

        {/* Levering */}
        <div className="flex flex-col">
          <div className="flex justify-between">
            <span className="text-gray-700">Levering</span>
            <span className="font-medium">
              {shipping === 0 ? "Gratis" : `$${shipping.toFixed(2)}`}
            </span>
          </div>
          <p className="text-sm text-gray-400">
            Gratis levering ved køb over $50
          </p>
        </div>

        {/* Besparelse hvis discount */}
        {hasDiscount && (
          <div className="flex justify-between text-green-600">
            <span className="font-medium">Besparelse</span>
            <span className="font-semibold">
              -${(subtotal - total).toFixed(2)}
            </span>
          </div>
        )}

        {/* Total */}
        <div className="flex justify-between border-t border-gray-300 pt-3 text-lg">
          <span className="font-semibold">Pris i alt</span>
          <span className="font-bold">${finalTotal.toFixed(2)}</span>
        </div>

        {/* Betal knap */}
        <div className="mt-4">
          <Btn text="Betal" type="primary" />
        </div>
      </div>
    </div>
  );
};

export default TotalPayment;
