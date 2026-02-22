import React from "react";
import Container from "../Container";
import ReviewImage1 from "../../images/Frame 1440.png";
import ReviewImage2 from "../../images/Frame 1443.png";
import ReviewImage3 from "../../images/Frame 1444.png";

const Review = () => {
  return (
    <div className="py-[128px]">
      <Container>
        <div>
          <div className="flex justify-between items-center mb-[48px]">
            <h2 className="uppercase text-[24px] lg:text-[74px] font-semibold w-[172px] lg:w-[589px] leading-[95%]">
              Reviews
            </h2>
            <button className="px-7 lg:px-8 py-3 lg:py-4 uppercase text-[14px] font-medium text-white bg-[#4A69E2] rounded-[8px]">
              See all
            </button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-full">
            <img src={ReviewImage1} alt="Review Image" />
            <img src={ReviewImage2} alt="Review Image" />
            <img src={ReviewImage3} alt="Review Image" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Review;
