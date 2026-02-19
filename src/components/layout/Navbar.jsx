import React from "react";
import Container from "../Container";
import { IoSearchSharp, IoPerson } from "react-icons/io5";

import LogoImage from "../../images/Logo.png";

const Navbar = () => {
  return (
    <div className="py-8">
      <Container>
        <div className="bg-white rounded-[24px] flex items-center justify-between p-8">
          <div>
            <ul className="flex gap-10 items-center">
              <li>New Drops</li>
              <li>Men</li>
              <li>Woman</li>
            </ul>
          </div>
          <div>
            <img src={LogoImage} alt="Logo" />
          </div>
          <div className="flex gap-10 items-center">
            <IoSearchSharp className="w-7 h-7" />
            <IoPerson className="w-6 h-6" />
            <div className="w-8 h-8 bg-[#FFA52F] rounded-full text-center flex items-center justify-center">
              0
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
