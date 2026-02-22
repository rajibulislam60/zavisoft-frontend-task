import React, { useState } from "react";
import Container from "../Container";
import { IoSearchSharp, IoPerson, IoMenu, IoClose } from "react-icons/io5";
import { BsFire } from "react-icons/bs";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import LogoImage from "../../images/Logo.png";
import { Link } from "react-router";

const Navbar = () => {
  const [open, setOpen] = useState(false); // Mobile menu toggle
  const [menOpen, setMenOpen] = useState(false); // Mobile Men dropdown
  const [womanOpen, setWomanOpen] = useState(false); // Mobile Woman dropdown

  return (
    <div className="py-8">
      <Container>
        <div className="bg-white rounded-[24px] p-6 lg:p-8">
          {/* ===== Top Bar ===== */}
          <div className="flex items-center justify-between">
            {/* Left */}
            <div className="flex items-center gap-4">
              {/* Mobile Menu Button */}
              <button
                className="lg:hidden text-2xl"
                onClick={() => setOpen(!open)}
              >
                {open ? <IoClose /> : <IoMenu />}
              </button>

              {/* Desktop Menu */}
              <ul className="hidden lg:flex gap-10 items-center">
                <Link to="/">
                  <li className="flex gap-1 items-center cursor-pointer">
                    New Drops
                    <span className="text-amber-600">
                      <BsFire />
                    </span>
                  </li>
                </Link>
                <Link to="/products">
                  <li className="cursor-pointer flex items-center gap-1 relative group">
                    Men
                    <MdArrowDropDown className="group-hover:hidden" />
                    <MdArrowDropUp className="hidden group-hover:block" />
                    {/* Desktop Dropdown */}
                    <ul className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 min-w-[120px] opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity">
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Men Tops
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Men Bottoms
                      </li>
                    </ul>
                  </li>
                </Link>

                <Link to="/products">
                  <li className="cursor-pointer flex items-center gap-1 relative group">
                    Woman
                    <MdArrowDropDown className="group-hover:hidden" />
                    <MdArrowDropUp className="hidden group-hover:block" />
                    {/* Desktop Dropdown */}
                    <ul className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 min-w-[120px] opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity">
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Woman Tops
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Woman Bottoms
                      </li>
                    </ul>
                  </li>
                </Link>
              </ul>
            </div>

            {/* Center Logo */}
            <div>
              <img src={LogoImage} alt="Logo" className="h-8 lg:h-10" />
            </div>

            {/* Right Icons */}
            <div className="flex gap-6 items-center">
              <IoSearchSharp className="w-6 h-6 cursor-pointer hidden lg:flex" />
              <IoPerson className="w-6 h-6 cursor-pointer" />
              <div className="w-8 h-8 bg-[#FFA52F] rounded-full flex items-center justify-center text-sm font-medium">
                0
              </div>
            </div>
          </div>

          {/* ===== Mobile Menu ===== */}
          {open && (
            <div className="lg:hidden mt-6 border-t pt-6">
              <ul className="flex flex-col gap-4 text-lg">
                <li className="flex gap-2 items-center">
                  New Drops
                  <span className="text-amber-600">
                    <BsFire />
                  </span>
                </li>

                {/* Mobile Men Dropdown */}
                <li>
                  <button
                    className="flex justify-between w-full items-center"
                    onClick={() => setMenOpen(!menOpen)}
                  >
                    Men
                    {menOpen ? <MdArrowDropUp /> : <MdArrowDropDown />}
                  </button>
                  {menOpen && (
                    <ul className="pl-4 mt-2 flex flex-col gap-2">
                      <li className="hover:text-orange-500 cursor-pointer">
                        Men Tops
                      </li>
                      <li className="hover:text-orange-500 cursor-pointer">
                        Men Bottoms
                      </li>
                    </ul>
                  )}
                </li>

                {/* Mobile Woman Dropdown */}
                <li>
                  <button
                    className="flex justify-between w-full items-center"
                    onClick={() => setWomanOpen(!womanOpen)}
                  >
                    Woman
                    {womanOpen ? <MdArrowDropUp /> : <MdArrowDropDown />}
                  </button>
                  {womanOpen && (
                    <ul className="pl-4 mt-2 flex flex-col gap-2">
                      <li className="hover:text-orange-500 cursor-pointer">
                        Woman Tops
                      </li>
                      <li className="hover:text-orange-500 cursor-pointer">
                        Woman Bottoms
                      </li>
                    </ul>
                  )}
                </li>

                {/* Mobile Search */}
                <li className="flex items-center gap-2 mt-4">
                  <IoSearchSharp className="w-5 h-5" />
                  <span>Search</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
