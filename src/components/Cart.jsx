"use client";
import useStore from "@/store/cart";
import Image from "next/image";
import Btn from "./Btn";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import Link from "next/link";

const Cart = () => {
  // ==================== ZUSTAND STATE ====================
  // Hent cart array fra Zustand store
  const cart = useStore((state) => state.cart);
  // Hent removeFromCart function fra store
  const removeFromCart = useStore((state) => state.removeFromCart);
  // Hent updateQuantity function fra store
  const updateQuantity = useStore((state) => state.updateQuantity);

  // ==================== BEREGNINGER ====================
  // Beregn total pris EFTER discount (kun hvis discount > 10%)
  // reduce() summerer alle priser i kurven
  const total = cart.reduce((sum, item) => {
    // Beregn pris for dette item (med discount hvis > 10%)
    const price =
      item.discountPercentage > 10
        ? item.price * (1 - item.discountPercentage / 100) // Med discount
        : item.price; // Uden discount
    // Læg til sum (pris * antal)
    return sum + price * item.quantity;
  }, 0); // Start fra 0

  // Beregn total pris FØR discount
  // Bruges til at vise hvor meget der er sparet
  const totalBeforeDiscount = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  // Tjek om der er nogen discount i kurven
  // Bruges til at vise/skjule discount UI
  const hasDiscount = total < totalBeforeDiscount;

  // ==================== TOM KURV ====================
  // Vis besked hvis kurven er tom
  if (cart.length === 0) {
    return (
      <section className="h-min rounded border border-gray-300 p-4">
        <h2 className="mb-4 text-xl font-semibold">Din kurv</h2>
        <p className="text-gray-500">Din kurv er tom</p>
      </section>
    );
  }

  // ==================== KURV MED PRODUKTER ====================
  return (
    <section className="h-min rounded border border-gray-300 p-4">
      <h2 className="mb-4 text-xl font-semibold">Din kurv</h2>

      {/* Liste over produkter i kurven */}
      <div className="flex flex-col gap-4">
        {/* Map gennem alle produkter i cart array */}
        {cart.map((item) => {
          // Beregn pris for dette specifikke produkt
          const price =
            item.discountPercentage > 10
              ? item.price * (1 - item.discountPercentage / 100)
              : item.price;

          return (
            <div
              key={item.id}
              className="@container flex gap-3 border-b border-gray-200 pb-4"
            >
              {/* Produkt thumbnail billede */}
              <Image
                src={item.thumbnail}
                alt={item.title}
                width={60}
                height={60}
                className="hidden rounded object-cover @3xs:block"
                style={{ width: "auto", height: "auto" }}
              />

              {/* Produkt information */}
              <div className="flex flex-1 flex-col gap-1">
                {/* Produkt titel (klikbar link) */}
                <Link className="hover:underline" href={`/products/${item.id}`}>
                  <h3 className="cursor-pointer! text-sm font-medium">
                    {item.title}
                  </h3>
                </Link>

                {/* Pris sektion - vis discount hvis relevant */}
                <div className="flex items-center gap-2">
                  {/* Aktuel pris (efter discount) */}
                  <p className="text-sm font-semibold text-gray-800">
                    ${price.toFixed(2)}
                  </p>
                  {/* Vis discount info kun hvis discount > 10% */}
                  {item.discountPercentage > 10 && (
                    <>
                      {/* Original pris (gennemstreget) */}
                      <p className="text-xs text-gray-500 line-through">
                        ${item.price.toFixed(2)}
                      </p>
                    </>
                  )}
                </div>

                {/* Mængde kontrol knapper */}
                <div className="flex items-center gap-2">
                  {/* Minus knap - reducer quantity med 1 */}
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    <CiSquareMinus className="h-6 w-6 cursor-pointer rounded transition-all duration-300 ease-in-out hover:bg-gray-100" />
                  </button>
                  {/* Vis nuværende quantity */}
                  <span className="text-sm">{item.quantity}</span>
                  {/* Plus knap - øg quantity med 1 */}
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <CiSquarePlus className="h-6 w-6 cursor-pointer rounded transition-all duration-300 ease-in-out hover:bg-gray-100" />
                  </button>
                  {/* Fjern knap - fjern produkt fra kurv */}
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

      {/* ==================== TOTAL SEKTION ==================== */}
      <div className="flex flex-col gap-2 border-t border-gray-300 pt-4">
        {/* Vis subtotal (før discount) - kun hvis der ER discount */}
        {hasDiscount && (
          <p className="flex justify-between gap-2 text-sm text-gray-600">
            <span>Subtotal:</span>
            <span className="line-through">
              ${totalBeforeDiscount.toFixed(2)}
            </span>
          </p>
        )}
        {/* Vis besparelse - kun hvis der ER discount */}
        {hasDiscount && (
          <p className="text-primary03 flex justify-between gap-2 text-sm font-semibold">
            <span>Besparelse:</span>
            <span className="text-green-600">
              -${(totalBeforeDiscount - total).toFixed(2)}
            </span>
          </p>
        )}
        {/* Total pris (efter discount) - vises altid */}
        <p className="flex justify-between gap-2 py-2 text-lg font-semibold">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </p>
        {/* Gå til betaling knap */}
        <Link href="/payment">
          <Btn text="Gå til betaling" type="primary" />
        </Link>
      </div>
    </section>
  );
};

export default Cart;
