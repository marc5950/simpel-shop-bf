"use client";
import useStore from "@/store/cart";
import Btn from "@/components/Btn";
import {
  calculateSubtotal,
  calculateTotal,
  calculateShipping,
  calculateSavings,
} from "@/utils/priceCalculations";

const TotalPayment = () => {
  const cart = useStore((state) => state.cart);

  // Beregn subtotal (før discount)
  const subtotal = calculateSubtotal(cart);

  // Beregn total (efter discount)
  const total = calculateTotal(cart);

  const hasDiscount = total < subtotal;

  // Levering (gratis hvis over 50)
  const { shipping, freeShippingThreshold } = calculateShipping(subtotal);
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
          {shipping !== 0 && (
            <p className="text-sm text-gray-400">
              Gratis levering ved køb over ${freeShippingThreshold}
            </p>
          )}
        </div>

        {/* Besparelse hvis discount */}
        {hasDiscount && (
          <div className="flex justify-between text-green-600">
            <span className="font-medium">Besparelse</span>
            <span className="font-semibold">
              -${calculateSavings(subtotal, total).toFixed(2)}
            </span>
          </div>
        )}

        {/* Total */}
        <div className="flex justify-between border-t border-gray-300 pt-3 text-lg">
          <span className="font-semibold">Pris i alt</span>
          <span className="font-bold">${finalTotal.toFixed(2)}</span>
        </div>

        {/* Betal knap */}
        <div className="group relative mt-4 w-max">
          <Btn text="Betal" type="primary" />
          <span className="tooltiptext bg-bg2 absolute -top-3 left-[110%] hidden w-max rounded p-2 group-hover:block">
            Bare send mobilepay min løve
          </span>
        </div>
      </div>
    </div>
  );
};

export default TotalPayment;
