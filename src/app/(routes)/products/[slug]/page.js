import Product from "./components/Product";
import Cart from "@/components/Cart";
import Reviews from "./components/Reviews";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";

const Singleview = async ({ params }) => {
  const { slug } = await params;

  // Hent produkt data baseret på slug
  const response = await fetch(`https://dummyjson.com/products/${slug}`);
  const productData = await response.json();
  console.log("Data om fetchet produkt", productData);

  return (
    <main className="m-10 flex flex-col gap-10">
      <Link
        href="/products"
        className="hover:text-text2 flex items-center gap-2"
      >
        <IoMdArrowRoundBack />
        Tilbage til produkter
      </Link>
      <div className="grid grid-cols-[3fr_1fr] gap-16">
        <Product productData={productData} />
        <Cart />
      </div>
      <span className="h-1 w-[20%] place-self-center rounded bg-gray-200"></span>
      <Reviews reviews={productData.reviews} rating={productData.rating} />
    </main>
  );
};

export default Singleview;
