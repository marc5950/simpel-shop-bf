import { create } from "zustand";
import { persist } from "zustand/middleware";

// Opretter en Zustand store til at håndtere shopping cart state
const useStore = create(
  // Anvender 'persist' middleware til at gemme tilstanden i localStorage
  // Dette betyder at kurven bevares selvom brugeren lukker browseren
  persist(
    // Definerer tilstanden og handlingerne for cart store
    // 'set' bruges til at opdatere tilstanden
    // 'get' bruges til at få adgang til den nuværende tilstand
    (set, get) => ({
      // ==================== INITIAL STATE ====================
      // Array der holder alle produkter i kurven
      cart: [],

      // ==================== ACTIONS ====================

      // Tilføj et produkt til kurven
      // Hvis produktet allerede findes, øges quantity med 1
      // Hvis produktet er nyt, tilføjes det med quantity: 1
      addToCart: (product) => {
        // Hent den nuværende tilstand af kurven
        const current = get().cart;

        // Tjek om produktet allerede er i kurven (baseret på id)
        // find() returnerer det første matchende element eller undefined
        // 'item' er hvert produkt i kurven
        // 'product' er det nye produkt der skal tilføjes
        const existingItem = current.find((item) => item.id === product.id);

        if (existingItem) {
          // Produktet findes allerede - øg quantity
          set({
            // map() går gennem alle produkter i kurven
            cart: current.map(
              (item) =>
                // Hvis produktet matcher, øg quantity med 1
                // Spread operator (...item) kopierer alle produktets properties
                // og overskriver kun quantity
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item, // Behold andre produkter uændret
            ),
          });
        } else {
          // Produktet findes ikke - tilføj det med quantity 1
          set({
            // Spread operator (...current) kopierer alle eksisterende produkter
            // og tilføjer det nye produkt til sidst
            cart: [...current, { ...product, quantity: 1 }],
          });
        }
      },

      // Fjern et produkt fra kurven baseret på product id
      removeFromCart: (productId) => {
        set({
          // filter() opretter et nyt array uden produkter der matcher id'et
          // Beholder kun produkter hvor item.id !== productId
          cart: get().cart.filter((item) => item.id !== productId),
        });
      },

      // Opdater quantity for et specifikt produkt
      // Bruges til + og - knapperne i Cart komponenten
      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          // Hvis quantity er 0 eller mindre, fjern produktet helt
          get().removeFromCart(productId);
        } else {
          // Opdater quantity for det specifikke produkt
          set({
            // map() gennem alle produkter og opdater det matchende
            cart: get().cart.map(
              (item) =>
                item.id === productId
                  ? { ...item, quantity } // Opdater quantity
                  : item, // Behold andre produkter uændret
            ),
          });
        }
      },
    }),
    {
      // Navn på localStorage key hvor data gemmes
      // Du kan se dette i Browser DevTools → Application → Local Storage
      name: "cart-storage",
    },
  ),
);

export default useStore;
