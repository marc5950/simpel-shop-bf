"use client";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

const ProductInfo = ({ productData }) => {
  const hasDiscount = productData.discountPercentage > 10;
  const discountedPrice = hasDiscount
    ? (productData.price * (1 - productData.discountPercentage / 100)).toFixed(
        2,
      )
    : null;

  // State til at tracke om sektioner er åbne
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [sizeOpen, setSizeOpen] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      {/* Title */}
      <h2 className="text-3xl font-semibold">{productData.title}</h2>

      {/* Brand */}
      {productData.brand && (
        <Link
          className="w-max hover:underline"
          href={`/products?sortBy=${productData.brand}&order=asc`}
        >
          <p className="cursor-pointer! text-lg text-gray-600">
            Brand:{" "}
            <span className="cursor-pointer! font-medium">
              {productData.brand}
            </span>
          </p>
        </Link>
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

      {/* Product Details - Collapsible */}
      <div className="border-t-2 border-gray-200 pt-4">
        <button
          onClick={() => setDetailsOpen(!detailsOpen)}
          className="flex w-full cursor-pointer items-center justify-between text-lg font-semibold transition-colors hover:text-gray-700"
        >
          <span className="cursor-pointer!">Product Details</span>
          <span className="cursor-pointer!">
            {detailsOpen ? <FaMinus /> : <FaPlus />}
          </span>
        </button>
        <div
          className={`grid transition-all duration-300 ease-in-out ${
            detailsOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="mt-3 flex flex-col gap-2 text-sm">
              {productData.weight && (
                <div className="flex gap-2">
                  <span className="font-medium text-gray-600">Weight:</span>
                  <span>{productData.weight} kg</span>
                </div>
              )}
              {productData.warrantyInformation && (
                <div className="flex gap-2">
                  <span className="font-medium text-gray-600">Warranty:</span>
                  <span>{productData.warrantyInformation}</span>
                </div>
              )}
              {productData.returnPolicy && (
                <div className="flex gap-2">
                  <span className="font-medium text-gray-600">
                    Return Policy:
                  </span>
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
      </div>

      {/* Size & Dimensions - Collapsible */}
      {productData.dimensions && (
        <div className="border-t-2 border-gray-200 pt-4">
          <button
            onClick={() => setSizeOpen(!sizeOpen)}
            className="flex w-full cursor-pointer items-center justify-between text-lg font-semibold transition-colors hover:text-gray-700"
          >
            <span className="cursor-pointer!">Size</span>
            <span className="cursor-pointer!">
              {sizeOpen ? <FaMinus /> : <FaPlus />}
            </span>
          </button>
          <div
            className={`grid transition-all duration-300 ease-in-out ${
              sizeOpen
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="mt-3 flex flex-col gap-2 text-sm">
                {productData.dimensions.width && (
                  <div className="flex gap-2">
                    <span className="font-medium text-gray-600">Width:</span>
                    <span>{productData.dimensions.width} cm</span>
                  </div>
                )}
                {productData.dimensions.height && (
                  <div className="flex gap-2">
                    <span className="font-medium text-gray-600">Height:</span>
                    <span>{productData.dimensions.height} cm</span>
                  </div>
                )}
                {productData.dimensions.depth && (
                  <div className="flex gap-2">
                    <span className="font-medium text-gray-600">Depth:</span>
                    <span>{productData.dimensions.depth} cm</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductInfo;
