import React from "react";
import Bannar from "../components/home/Bannar";
import NewDropProducts from "../components/home/NewDropProducts";
import Categories from "../components/home/Categories";
import Review from "../components/home/Review";

const Home = () => {
  return (
    <div>
      <Bannar />
      <NewDropProducts />
      <Categories />
      <Review />
    </div>
  );
};

export default Home;
