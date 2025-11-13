"use client";
import Btn from "@/components/Btn";
import useStore from "@/store/cart";

const ProductBuy = ({ product }) => {
  const addToCart = useStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return <Btn text="Læg i kurv" type="normal" onClick={handleAddToCart} />;
};

export default ProductBuy;
