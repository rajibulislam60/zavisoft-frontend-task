import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayOut from "./components/layout/RootLayOut";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import AllProducts from "./pages/AllProducts";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route>
        <Route path="/" element={<RootLayOut />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Route>
      </Route>
    </>,
  ),
);

const App = () => {
  return (
    <div className="bg-[#E7E7E3]">
      <RouterProvider router={router} />,
    </div>
  );
};

export default App;
