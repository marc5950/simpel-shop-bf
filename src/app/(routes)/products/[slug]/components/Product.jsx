import Slideshow from "./Slideshow";
import ProductInfo from "./ProductInfo";
import ProductBuy from "./ProductBuy";

const Product = ({ productData }) => {
  return (
    <section className="flex gap-6">
      <Slideshow images={productData.images} />
      <div className="flex flex-col gap-10">
        <ProductInfo productData={productData} />
        <ProductBuy product={productData} />
      </div>
    </section>
  );
};

export default Product;
