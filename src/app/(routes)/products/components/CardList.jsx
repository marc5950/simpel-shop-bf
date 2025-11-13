import Card from "./Card";

const CardList = async () => {
  const url = `https://dummyjson.com/products`;
  const response = await fetch(url);
  const { products } = await response.json();
  return (
    <section className="grid grid-cols-3 gap-12 p-7">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </section>
  );
};

export default CardList;
