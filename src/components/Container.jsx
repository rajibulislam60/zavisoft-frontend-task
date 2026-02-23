import React from "react";

const Container = ({ children }) => {
  return (
    <div
      className="mx-auto
        w-[95%]
        px-0
        sm:max-w-[540px]
        md:max-w-[720px]
        lg:max-w-[960px]
        xl:max-w-[1140px]
        2xl:max-w-[1320px]"
    >
      {children}
    </div>
  );
};

export default Container;
