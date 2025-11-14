"use client";
import useStore from "@/store/cart";
import Image from "next/image";
import Link from "next/link";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";

const ProductElement = () => {
  // Hent cart og actions fra Zustand store
  const cart = useStore((state) => state.cart);
  const removeFromCart = useStore((state) => state.removeFromCart);
  const updateQuantity = useStore((state) => state.updateQuantity);

  // Hvis kurven er tom
  if (cart.length === 0) {
    return (
      <div className="rounded border border-gray-300 p-6">
        <h2 className="mb-4 text-2xl font-semibold">
          Din indkøbskurv (0 vare)
        </h2>
        <p className="text-gray-500">Din kurv er tom</p>
      </div>
    );
  }

  return (
    <div className="rounded border border-gray-300 p-6">
      <h2 className="mb-6 text-2xl font-semibold">
        Din indkøbskurv ({cart.length} {cart.length === 1 ? "vare" : "varer"})
      </h2>

      {/* Liste over produkter */}
      <div className="flex flex-col gap-6">
        {cart.map((item) => {
          // Beregn pris (med discount hvis > 10%)
          const price =
            item.discountPercentage > 10
              ? item.price * (1 - item.discountPercentage / 100)
              : item.price;

          const originalPrice = item.price;
          const hasDiscount = item.discountPercentage > 10;

          return (
            <div
              key={item.id}
              className="@container flex gap-4 border-b border-gray-200 pb-6"
            >
              {/* Produkt billede */}
              <Link href={`/products/${item.id}`} className="hidden @sm:block">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  width={120}
                  height={120}
                  className="rounded object-cover"
                />
              </Link>

              {/* Produkt info */}
              <div className="flex flex-1 flex-col gap-2">
                {/* Titel */}
                <Link href={`/products/${item.id}`}>
                  <h3 className="text-lg font-medium hover:underline">
                    {item.title}
                  </h3>
                </Link>

                {/* Brand (hvis tilgængelig) */}
                {item.brand && (
                  <p className="text-sm text-gray-600">{item.brand}</p>
                )}

                {/* Pris */}
                <div className="flex flex-col gap-1">
                  <span className="text-xl font-bold text-red-600">
                    ${price.toFixed(2)}
                  </span>
                  {hasDiscount && (
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500 line-through">
                        Oprindeligt: ${originalPrice.toFixed(2)}
                      </span>
                      <span className="text-sm font-semibold text-red-600">
                        -{item.discountPercentage.toFixed(0)}%
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Quantity kontrols og fjern knap - til højre */}
              <div className="flex flex-col items-end justify-between">
                {/* Quantity kontrols */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    <CiSquareMinus className="h-7 w-7 cursor-pointer rounded transition-all duration-300 ease-in-out hover:bg-gray-100" />
                  </button>
                  <span className="min-w-[30px] text-center text-base font-medium">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <CiSquarePlus className="h-7 w-7 cursor-pointer rounded transition-all duration-300 ease-in-out hover:bg-gray-100" />
                  </button>
                </div>

                {/* Fjern knap */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="cursor-pointer text-sm text-red-600 underline hover:text-red-800"
                >
                  Fjern
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductElement;
