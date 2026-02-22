import React, { useEffect, useState } from "react";

const ProductGallery = ({ images }) => {
  const [activeImage, setActiveImage] = useState("");

  useEffect(() => {
    if (images?.length) {
      setActiveImage(images[0]);
    }
  }, [images]);

  if (!images?.length) return null;

  return (
    <div>
      {/* ================= DESKTOP (LG) ================= */}
      <div className="hidden lg:grid grid-cols-2 gap-4">
        {images.slice(0, 4).map((img, index) => (
          <button
            key={index}
            onClick={() => setActiveImage(img)}
            className={`overflow-hidden border-2 transition ${
              activeImage === img ? "border-blue-600" : "border-transparent"
            }`}
          >
            <img
              src={img}
              alt={`product-${index}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* ================= MOBILE (SM) ================= */}
      <div className="lg:hidden">
        {/* Main Image */}
        <div className="bg-gray-100 rounded-[20px] flex items-center justify-center mb-4">
          <img
            src={activeImage}
            alt="Active Product"
            className="w-full max-w-[320px] object-contain"
          />
        </div>

        {/* Thumbnails */}
        <div className="flex gap-3 justify-center">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(img)}
              className={`w-[64px] h-[64px] rounded-[12px] border-2 transition ${
                activeImage === img ? "border-blue-600" : "border-gray-300"
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-contain" />
            </button>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-3">
          {images.map((img, index) => (
            <span
              key={index}
              className={`w-2 h-2 rounded-full ${
                activeImage === img ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
