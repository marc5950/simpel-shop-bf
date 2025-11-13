const ProductInfo = ({ title, desc }) => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-3xl font-semibold">{title}</h2>
      <p className="max-w-[60ch]">{desc}</p>
    </div>
  );
};

export default ProductInfo;
