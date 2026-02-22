import React, { useState } from "react";
import Container from "../Container";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import { useProducts } from "../../context/ProductContext";
import { Link } from "react-router";

const SuggestProducts = () => {
  const { products = [], error } = useProducts();
  const [startIndex, setStartIndex] = useState(0);

  if (error) return <p>{error}</p>;

  const handleNext = () => {
    if (startIndex + 1 < products.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex - 1 >= 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className=" pt-16">
      <Container>
        <div>
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-[24px] lg:text-[48px] font-semibold uppercase">
              You may also like
            </h2>

            <div className="flex gap-4 items-center text-black">
              <button
                onClick={handlePrev}
                disabled={startIndex === 0}
                className="bg-gray-600 hover:bg-gray-700 p-4 rounded-[8px] disabled:opacity-40"
              >
                <MdKeyboardArrowLeft />
              </button>

              <button
                onClick={handleNext}
                disabled={startIndex + 1 >= products.length}
                className="bg-gray-600 hover:bg-gray-700 p-4 rounded-[8px] disabled:opacity-40"
              >
                <MdKeyboardArrowRight />
              </button>
            </div>
          </div>

          {/* products Grid */}
          <div className="grid grid-cols-4 lg:grid-cols-4  gap-4">
            {products.slice(startIndex, startIndex + 4).map((product) => (
              <Link to={`/products/${product.id}`} key={product.id}>
                <div className="">
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="rounded-[12px] border-2 border-white object-cover"
                  />
                </div>
                <h3 className="text-[24px] font-semibold my-4 line-clamp-2 h-[68px]">
                  {product.title}
                </h3>
                <button className="uppercase text-[14px] font-medium text-center py-[15px] w-full rounded-[8px] text-white bg-[#232321]">
                  view product -{" "}
                  <span className="text-[#FFA52F]">${product.price}</span>
                </button>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SuggestProducts;
