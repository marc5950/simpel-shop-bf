import Product from "./components/Product";
import Cart from "@/components/Cart";
import Reviews from "./components/Reviews";

const Singleview = async ({ params }) => {
  const { slug } = await params;

  // Hent produkt data baseret på slug
  const response = await fetch(`https://dummyjson.com/products/${slug}`);
  const productData = await response.json();
  console.log("Data om fetchet produkt", productData);

  return (
    <main className="m-6 flex flex-col gap-6">
      <div className="grid grid-cols-[1fr_300px]">
        <Product productData={productData} />
        <Cart />
      </div>
      <span className="h-1 rounded bg-black"></span>
      <Reviews productData={productData.reviews} />
    </main>
  );
};

export default Singleview;
