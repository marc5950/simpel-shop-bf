import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (product) => {
        const current = get().cart;
        // Tjek om produktet allerede er i kurven (baseret på id)
        const existingItem = current.find((item) => item.id === product.id);

        if (existingItem) {
          // Hvis produktet findes, øg quantity
          set({
            cart: current.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item,
            ),
          });
        } else {
          // Hvis produktet ikke findes, tilføj det med quantity 1
          set({
            cart: [...current, { ...product, quantity: 1 }],
          });
        }
      },
      removeFromCart: (productId) => {
        set({
          cart: get().cart.filter((item) => item.id !== productId),
        });
      },
      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          // Hvis quantity er 0 eller mindre, fjern produktet
          get().removeFromCart(productId);
        } else {
          set({
            cart: get().cart.map((item) =>
              item.id === productId ? { ...item, quantity } : item,
            ),
          });
        }
      },
    }),
    {
      name: "cart-storage",
    },
  ),
);

export default useStore;
