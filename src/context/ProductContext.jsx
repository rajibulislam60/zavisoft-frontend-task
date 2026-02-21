import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

const ProductContext = createContext(null);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsRes = await api.get("/products");
        const CategoriesRes = await api.get("/categories");
        setProducts(productsRes.data);
        console.log(productsRes.data);
        setCategories(CategoriesRes.data);
        console.log(CategoriesRes);
      } catch (err) {
        setError("Failed to fetch products.");
      }
    };

    fetchData();
  }, []);

  return (
    <ProductContext.Provider value={{ products, categories, error }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (context === null) {
    throw new Error("useProducts must be used within ProductProvider");
  }
  return context;
};
