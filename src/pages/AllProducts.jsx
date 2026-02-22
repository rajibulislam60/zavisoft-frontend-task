import React, { useState } from "react";
import { Link } from "react-router";
import Container from "../components/Container";
import { useProducts } from "../context/ProductContext";

const PRODUCTS_PER_PAGE = 12;

const AllProducts = () => {
  const { products = [], error } = useProducts();
  const [currentPage, setCurrentPage] = useState(1);

  if (error) return <p>{error}</p>;

  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const currentProducts = products.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE,
  );

  return (
    <div className="py-16">
      <Container>
        {/* HEADER */}
        <h2 className="text-[24px] lg:text-[48px] font-semibold uppercase mb-10">
          All Products
        </h2>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {currentProducts.map((product) => (
            <Link
              to={`/products/${product.id}`}
              key={product.id}
              className="group"
            >
              <div className="rounded-[12px] overflow-hidden border">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-full h-[220px] object-cover group-hover:scale-105 transition"
                />
              </div>

              {/* FIXED 2 LINE TITLE */}
              <h3 className="text-[18px] font-semibold mt-4 line-clamp-2 min-h-[48px]">
                {product.title}
              </h3>

              <button className="uppercase text-[14px] font-medium text-center py-[15px] w-full rounded-[8px] text-white bg-[#232321]">
                view product -{" "}
                <span className="text-[#FFA52F]">${product.price}</span>
              </button>
            </Link>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="flex justify-center items-center gap-3 mt-12 flex-wrap">
          {/* Prev */}
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 border rounded disabled:opacity-40"
          >
            Prev
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }).map((_, index) => {
            const page = index + 1;
            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 border rounded ${
                  currentPage === page
                    ? "bg-black text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            );
          })}

          {/* Next */}
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border rounded disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </Container>
    </div>
  );
};

export default AllProducts;
