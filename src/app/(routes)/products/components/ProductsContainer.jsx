import FilterBtn from "./FilterBtn";
import SeachBar from "./SearchBar";
import CardList from "./CardList";

const ProductsContainer = () => {
  return (
    <section className="mx-10 p-4">
      <FilterBtn />
      <SeachBar />
      <CardList />
    </section>
  );
};

export default ProductsContainer;
