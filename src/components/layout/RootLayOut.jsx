import React from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";

const RootLayOut = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayOut;
