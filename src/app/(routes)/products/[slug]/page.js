import Product from "./components/Product";
import Cart from "@/components/Cart";
import Reviews from "./components/Reviews";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";

// Async funktion til at hente og vise data for et enkelt produkt baseret på slug
// 'params' objektet indeholder ruteparametre, herunder 'slug'
// 'slug' bruges til at identificere det specifikke produkt
const Singleview = async ({ params }) => {
  const { slug } = await params;

  // Hent produkt data baseret på slug
  const response = await fetch(`https://dummyjson.com/products/${slug}`);
  // Konverter respons til JSON
  const productData = await response.json();
  console.log("Data om fetchet produkt", productData);

  return (
    <main className="m-10 flex flex-col gap-10">
      <Link
        href="/products"
        className="hover:text-text2 flex items-center gap-2 transition-all duration-200 ease-in-out"
      >
        <IoMdArrowRoundBack />
        Tilbage
      </Link>
      <div className="grid gap-16 sm:grid-cols-[3fr_1fr]">
        <Product productData={productData} />
        <Cart />
      </div>
      <span className="h-1 w-[20%] place-self-center rounded bg-gray-200"></span>
      <Reviews reviews={productData.reviews} rating={productData.rating} />
    </main>
  );
};

export default Singleview;
