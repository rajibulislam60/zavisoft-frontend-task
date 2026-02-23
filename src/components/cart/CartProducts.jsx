import React from "react";
import Container from "../Container";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineDeleteForever } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import CartImage from "../../images/Rectangle 5.png";

const CartProducts = () => {
  return (
    <div className="py-10">
      <Container>
        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Cart Item */}
          <div className="bg-white rounded-[24px] w-full lg:w-[60%] p-6">
            {/* Cart Header */}
            <div className="">
              <h2 className="text-[32px] font-semibold">Your Bag</h2>
              <p className="text-[14px] font-medium text-gray-600">
                Items in your bag are not reserved — check out now to make them
                yours.
              </p>
            </div>
            <div className="mt-12 flex gap-6">
              {/* Product Image */}
              <img
                src={CartImage}
                alt="Product"
                className="w-[156px] lg:w-[207px] h-[216px] lg:h-[225px] object-cover rounded-[16px]"
              />

              {/* Product Info */}
              <div className="flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-[20px] font-semibold mb-1">
                    Product Name
                  </h3>
                  <p className="text-[14px] text-gray-600">
                    Men's Road Running Shoes
                  </p>
                  <p className="text-[14px] text-gray-600">
                    Enamel Blue / University White
                  </p>

                  {/* Size & Quantity */}
                  <div className="flex gap-6 mt-4 text-[14px] font-medium">
                    <button className="flex items-center gap-2 ">
                      Size <span>10</span>
                      <IoIosArrowDown />
                    </button>

                    <button className="flex items-center gap-2 ">
                      Qty <span>1</span>
                      <IoIosArrowDown />
                    </button>
                  </div>
                </div>

                {/* Price */}
                <div className="lg:hidden flex items-start">
                  <h3 className="text-blue-700 text-[18px] font-semibold">
                    $125.00
                  </h3>
                </div>

                {/* Actions */}
                <div className="flex gap-5  text-gray-600">
                  <button className="hover:text-black">
                    <FaRegHeart size={18} />
                  </button>
                  <button className="hover:text-red-600">
                    <MdOutlineDeleteForever size={20} />
                  </button>
                </div>
              </div>

              {/* Price */}
              <div className="hidden flex items-start">
                <h3 className="text-blue-700 text-[18px] font-semibold">
                  $125.00
                </h3>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-[24px] lg:bg-[#e7e7e3] lg:rounded-none p-6 w-full lg:w-[40%] h-fit">
            <h3 className="text-[24px] font-semibold mb-6">Order Summary</h3>

            <div className="space-y-3 text-[14px] font-medium">
              <p className="flex justify-between">
                1 Item <span>$125.00</span>
              </p>

              <p className="flex justify-between">
                Delivery <span>$6.23</span>
              </p>

              <p className="flex justify-between text-gray-500">
                Tax Sales <span>$0.00</span>
              </p>

              <hr />

              <p className="flex justify-between text-[20px] font-semibold">
                Total <span>$131.23</span>
              </p>
            </div>

            <button className="w-full mt-6 py-4 rounded-[10px] bg-black text-white font-semibold hover:bg-gray-900">
              Checkout
            </button>

            <button className="mt-4 underline text-[14px] text-gray-600 hover:text-black">
              Use a promo code
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartProducts;
