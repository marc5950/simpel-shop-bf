const ProductInfo = ({ productData }) => {
  const hasDiscount = productData.discountPercentage > 10;
  const discountedPrice = hasDiscount
    ? (productData.price * (1 - productData.discountPercentage / 100)).toFixed(
        2,
      )
    : null;

  return (
    <div className="flex flex-col gap-6">
      {/* Title */}
      <h2 className="text-3xl font-semibold">{productData.title}</h2>

      {/* Brand */}
      {productData.brand && (
        <p className="text-lg text-gray-600">
          Brand: <span className="font-medium">{productData.brand}</span>
        </p>
      )}

      {/* Price */}
      <div className="flex items-baseline gap-3">
        {hasDiscount ? (
          <>
            <span className="text-3xl font-bold">${discountedPrice}</span>
            <span className="text-xl text-gray-500 line-through">
              ${productData.price}
            </span>
          </>
        ) : (
          <span className="text-3xl font-bold">${productData.price}</span>
        )}
      </div>

      {/* Description */}
      <p className="max-w-[60ch] text-gray-700">{productData.description}</p>

      {/* Product Details */}
      <div className="border-t-2 border-gray-200 pt-4">
        <h3 className="mb-3 text-lg font-semibold">Product Details</h3>
        <div className="flex flex-col gap-2 text-sm">
          {productData.warrantyInformation && (
            <div className="flex gap-2">
              <span className="font-medium text-gray-600">Warranty:</span>
              <span>{productData.warrantyInformation}</span>
            </div>
          )}
          {productData.returnPolicy && (
            <div className="flex gap-2">
              <span className="font-medium text-gray-600">Return Policy:</span>
              <span>{productData.returnPolicy}</span>
            </div>
          )}
          {productData.shippingInformation && (
            <div className="flex gap-2">
              <span className="font-medium text-gray-600">Shipping:</span>
              <span>{productData.shippingInformation}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
