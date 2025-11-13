"use client";
import useStore from "@/store/cart";
import Image from "next/image";
import Btn from "./Btn";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";

const Cart = () => {
  const cart = useStore((state) => state.cart);
  const removeFromCart = useStore((state) => state.removeFromCart);
  const updateQuantity = useStore((state) => state.updateQuantity);

  const total = cart.reduce((sum, item) => {
    const price =
      item.discountPercentage > 0
        ? item.price * (1 - item.discountPercentage / 100)
        : item.price;
    return sum + price * item.quantity;
  }, 0);

  if (cart.length === 0) {
    return (
      <section className="h-min rounded border border-gray-300 p-4">
        <h2 className="mb-4 text-xl font-semibold">Din kurv</h2>
        <p className="text-gray-500">Din kurv er tom</p>
      </section>
    );
  }

  return (
    <section className="h-min rounded border border-gray-300 p-4">
      <h2 className="mb-4 text-xl font-semibold">Din kurv</h2>

      <div className="flex flex-col gap-4">
        {cart.map((item) => {
          const price =
            item.discountPercentage > 0
              ? item.price * (1 - item.discountPercentage / 100)
              : item.price;

          return (
            <div
              key={item.id}
              className="flex gap-3 border-b border-gray-200 pb-4"
            >
              {/* Thumbnail */}
              <Image
                src={item.thumbnail}
                alt={item.title}
                width={60}
                height={60}
                className="rounded object-cover"
              />

              {/* Info */}
              <div className="flex flex-1 flex-col gap-1">
                <h3 className="text-sm font-medium">{item.title}</h3>
                <p className="text-sm text-gray-600">${price.toFixed(2)}</p>

                {/* Quantity controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    <CiSquareMinus className="h-6 w-6 cursor-pointer rounded transition-all duration-300 hover:bg-gray-100" />
                  </button>
                  <span className="text-sm">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <CiSquarePlus className="h-6 w-6 cursor-pointer rounded transition-all duration-300 hover:bg-gray-100" />
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-auto cursor-pointer text-sm text-red-600 hover:text-red-800"
                  >
                    Fjern
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Total */}
      <div className="flex flex-col gap-4 border-t border-gray-300 pt-4">
        <p className="flex justify-between text-lg font-semibold">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </p>
        <Btn text="Gå til betaling" type="primary" />
      </div>
    </section>
  );
};

export default Cart;
