import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { FaRegHeart } from "react-icons/fa";
import Container from "../components/Container";
import { useProducts } from "../context/ProductContext";
import ProductGallery from "../components/product/ProductGallery";
import SuggestProducts from "../components/product/SuggestProducts";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products } = useProducts();
  const [selectedSize, setSelectedSize] = useState(41);

  const product = products?.find((item) => item.id === Number(id));

  if (!product) {
    return <p className="text-center py-20">Loading...</p>;
  }

  return (
    <div className="py-12">
      <Container>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* IMAGE GALLERY */}
            <ProductGallery images={product.images} />

            {/* PRODUCT INFO */}
            <div>
              <span className="inline-block uppercase bg-blue-600 px-4 py-1 text-white rounded-full text-xs mb-3">
                New Release
              </span>

              <h2 className="text-[28px] font-semibold">{product.title}</h2>

              <p className="text-[22px] font-semibold text-blue-600 mt-1">
                ${product.price}
              </p>

              {/* SIZE */}
              <div className="mt-6">
                <div className="flex justify-between mb-2">
                  <p className="font-medium">Size</p>
                  <button className="text-sm underline">Size chart</button>
                </div>

                <div className="flex gap-3 flex-wrap">
                  {[38, 39, 40, 41, 42, 43, 44, 45].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-[44px] h-[44px] rounded-[8px] border transition ${
                        selectedSize === size
                          ? "bg-black text-white"
                          : "hover:border-black"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="mt-8 flex gap-3 w-full">
                <button
                  onClick={() => navigate("/cart")}
                  className="w-full flex-1 uppercase bg-black text-white py-3 rounded-[8px] hover:bg-gray-900"
                >
                  Add to cart
                </button>

                <button className="bg-black text-white p-3 rounded-[8px] hover:bg-gray-900">
                  <FaRegHeart size={18} />
                </button>
              </div>

              <button
                onClick={() => navigate("/cart")}
                className="uppercase w-full bg-blue-600 text-white py-3 rounded-[8px] mt-4 hover:bg-blue-700"
              >
                Buy it now
              </button>

              {/* ABOUT */}
              <div className="mt-10">
                <h4 className="font-semibold mb-2">About the product</h4>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          </div>
          <div>
            <SuggestProducts />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetails;
