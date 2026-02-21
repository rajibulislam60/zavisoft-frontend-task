import React, { useState } from "react";
import Container from "../Container";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import { useProducts } from "../../context/ProductContext";

const Categories = () => {
  const { categories = [], error } = useProducts();
  const [startIndex, setStartIndex] = useState(0);

  if (error) return <p>{error}</p>;

  const handleNext = () => {
    if (startIndex + 1 < categories.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex - 1 >= 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="bg-black text-white pt-16">
      <Container>
        <div>
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-[24px] lg:text-[74px] font-semibold uppercase">
              Categories
            </h2>

            <div className="flex gap-4 items-center text-black">
              <button
                onClick={handlePrev}
                disabled={startIndex === 0}
                className="bg-[#E7E7E3] hover:bg-white p-4 rounded-[8px] disabled:opacity-40"
              >
                <MdKeyboardArrowLeft />
              </button>

              <button
                onClick={handleNext}
                disabled={startIndex + 1 >= categories.length}
                className="bg-[#E7E7E3] hover:bg-white p-4 rounded-[8px] disabled:opacity-40"
              >
                <MdKeyboardArrowRight />
              </button>
            </div>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-tl-[32px]">
            {categories.slice(startIndex, startIndex + 2).map((item, index) => (
              <div key={item.id} className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className={`w-full object-cover ${
                    index === 0 ? "rounded-tl-[32px]" : ""
                  }`}
                />

                {/* Optional overlay title */}
                <div>
                  <h4 className="absolute bottom-4 left-4 text-black text-[24px] lg:text-[36px] font-semibold">
                    {item.name}
                  </h4>
                  <button className="absolute bottom-4 right-4 p-2 lg:p-3 bg-black text-white rounded-[8px]">
                    <GoArrowUpRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Categories;
