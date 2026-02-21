import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

const ProductContext = createContext(null);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/products");
        setProducts(res.data);
        console.log(res.data);
      } catch (err) {
        setError("Failed to fetch products.");
      }
    };

    fetchData();
  }, []);

  return (
    <ProductContext.Provider value={{ products, error }}>
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
