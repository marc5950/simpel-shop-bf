import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  // Anvender 'persist' middleware til at gemme tilstanden i localStorage
  persist(
    // Definerer tilstanden og handlingerne for cart store
    // 'set' bruges til at opdatere tilstanden
    // 'get' bruges til at få adgang til den nuværende tilstand
    (set, get) => ({
      // Initial state
      cart: [],
      // Actions
      // Function som tilføjer et produkt til kurven
      addToCart: (product) => {
        // Hent den nuværende tilstand af kurven
        const current = get().cart;
        // Tjek om produktet allerede er i kurven (baseret på id)
        // find returnerer det første matchende element eller undefined
        // 'item' er hvert produkt i kurven
        // 'product' er det nye produkt der skal tilføjes
        const existingItem = current.find((item) => item.id === product.id);

        if (existingItem) {
          // Hvis produktet findes, øg quantity
          set({
            cart: current.map((item) =>
              // Hvis produktet matcher, øg quantity med 1
              // ellers behold det uændret
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
        // Fjern produktet fra kurven baseret på id
        set({
          cart: get().cart.filter((item) => item.id !== productId),
        });
      },
      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          // Hvis quantity er 0 eller mindre, fjern produktet
          get().removeFromCart(productId);
        } else {
          // Opdater quantity for det specifikke produkt
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
