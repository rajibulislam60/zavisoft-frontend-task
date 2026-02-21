import React from "react";
import Container from "./../Container";
import ProductImage from "../../images/Rectangle 5.png";
import { useProducts } from "../../context/ProductContext";

const NewDropProducts = () => {
  const { products, error } = useProducts();

  if (error) return <p>{error}</p>;
  return (
    <div className="mt-[90px] mb-[128px]">
      <Container>
        <div>
          <div className="relative overflow-hidden mb-8">
            <h2 className="text-[74px] font-semibold w-[589px] leading-[95%]">
              Don't miss out new drops
            </h2>
            <button className="px-8 py-4 uppercase text-[14px] font-medium text-white bg-[#4A69E2] absolute bottom-0 right-0 rounded-[8px]">
              Shop New Drops
            </button>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {products.slice(0, 4).map((product) => (
              <div key={product.id}>
                <img src={product.images[0]} alt={product.title} />
                <h3 className="text-[24px] font-semibold my-4">
                  {product.title}
                </h3>
                <button className="uppercase text-[14px] font-medium text-center py-[15px] w-full rounded-[8px] text-white bg-[#232321]">
                  view product -{" "}
                  <span className="text-[#FFA52F]">{product.price}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NewDropProducts;
