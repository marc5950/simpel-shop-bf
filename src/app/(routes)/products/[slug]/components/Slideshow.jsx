"use client";
import Image from "next/image";
import { useState } from "react";

const Slideshow = ({ images }) => {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [currentImage, setCurrentImage] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPosition({ x, y });
  };

  return (
    <div className="">
      <div
        className="relative w-full overflow-hidden rounded border-2 border-black"
        onMouseMove={handleMouseMove}
      >
        <Image
          src={images[currentImage]}
          alt="Product Image"
          width={500}
          height={500}
          loading="eager"
          className="h-auto w-full cursor-zoom-in p-4 transition-transform duration-200 ease-out hover:scale-130"
          style={{
            transformOrigin: `${position.x}% ${position.y}%`,
          }}
        />
      </div>

      {/* Thumbnails */}
      <div className="mt-4 flex gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`cursor-pointer overflow-hidden rounded border-2 transition-all hover:scale-105 ${
              currentImage === index
                ? "border-black"
                : "border-gray-300 hover:border-gray-500"
            }`}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              width={80}
              height={80}
              className="cursor-pointer object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
