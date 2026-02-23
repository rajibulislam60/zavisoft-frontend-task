import React from "react";
import Container from "../Container";

const CartTitle = () => {
  return (
    <div>
      <Container>
        <div className="pb-8">
          <h2 className="text-[32px] font-semibold">Saving to celebrate </h2>
          <p className="text-[14px] font-semibold">
            Enjoy up to 60% off thousands of styles during the End of Year sale
            - while suppiles last. No code needed.
          </p>
          <button className="text-[14px] font-semibold">
            Join us or Sign-in
          </button>
        </div>
      </Container>
    </div>
  );
};

export default CartTitle;
