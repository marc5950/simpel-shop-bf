"use client";
import Btn from "@/components/Btn";
import useStore from "@/store/cart";

const ProductBuy = ({ product }) => {
  // Hent addToCart funktionen fra cart store
  // Brug useStore hook til at få adgang til tilstanden og handlingerne i cart store
  // 'state' repræsenterer den nuværende tilstand af store
  const addToCart = useStore((state) => state.addToCart);

  // Funktion der håndterer tilføjelse af produkt til kurven
  // Kaldes når knappen klikkes
  const handleAddToCart = () => {
    addToCart(product);
  };

  return <Btn text="Læg i kurv" type="normal" onClick={handleAddToCart} />;
};

export default ProductBuy;
