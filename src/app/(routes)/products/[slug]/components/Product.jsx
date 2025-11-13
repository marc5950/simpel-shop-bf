import Slideshow from "./Slideshow";
import ProductInfo from "./ProductInfo";

const Product = ({ productData }) => {
  console.log("Data i Product komponenten", productData);
  return (
    <section className="flex gap-4">
      <Slideshow images={productData.images} />
      <ProductInfo title={productData.title} desc={productData.description} />
    </section>
  );
};

export default Product;
