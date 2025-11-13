import Slideshow from "./Slideshow";
import ProductInfo from "./ProductInfo";

const Product = ({ productData }) => {
  return (
    <section className="flex gap-4">
      <Slideshow images={productData.images} />
      <ProductInfo productData={productData} />
    </section>
  );
};

export default Product;
