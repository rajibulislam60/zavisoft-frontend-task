import React from "react";
import Container from "../Container";
import BgImage from "../../images/image 14.png";
import ExtraImage from "../../images/Frame 11.png";

const Bannar = () => {
  return (
    <div>
      <Container>
        <div>
          {/* Heading */}
          <h1 className="text-[60px] lg:text-[190px] font-bold uppercase text-black text-center leading-none mb-10 py-6">
            Do it <span className="text-[#4A69E2]">Right</span>
          </h1>

          {/* Banner */}
          <div
            className="w-full h-[600px] bg-no-repeat bg-center bg-cover rounded-[64px] relative overflow-hidden"
            style={{
              backgroundImage: `url(${BgImage})`,
            }}
          >
            <div className="absolute top-[160px] -left-[80px] -rotate-90">
              <div className="bg-black rounded-b-lg">
                <h4 className="text-white px-6 py-3 text-sm tracking-wide">
                  Nike product of the year
                </h4>
              </div>
            </div>
            {/* Bottom-Left Content */}
            <div className="absolute left-12 bottom-12 w-full max-w-[490px]">
              <h3 className="text-[48px] lg:text-[74px] font-semibold text-white leading-tight">
                NIKE AIR MAX
              </h3>
              <p className="text-[18px] lg:text-[24px] text-[#E7E7E3] font-semibold mb-6">
                Nike introducing the new air max for everyone's comfort
              </p>
              <button className="uppercase bg-[#4A69E2] px-8 py-4 text-white rounded-[8px] hover:bg-blue-700 transition">
                Shop Now
              </button>
            </div>

            {/* Bottom-Right Image */}
            <div className="absolute right-8 bottom-8">
              <img
                src={ExtraImage}
                alt="Extra Image"
                className="w-[140px] lg:w-[180px] rounded-xl"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Bannar;
