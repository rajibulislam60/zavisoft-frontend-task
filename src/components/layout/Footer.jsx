import React from "react";
import { FaFacebook, FaTiktok, FaTwitter, FaInstagram } from "react-icons/fa";
import Container from "../Container";
import FooterLogoImage from "../../images/Logo-footer.png";

const Footer = () => {
  return (
    <div>
      <Container>
        <div className="bg-black rounded-[24px] pt-8 px-[29px]">
          <div className="flex flex-col lg:flex-row justify-between gap-10">
            {/* About Section */}
            <section className="w-full lg:w-[45%]">
              <h3 className="text-[#FFA52F] text-3xl lg:text-4xl font-semibold mb-4">
                About Us
              </h3>
              <p className="w-full lg:w-[446px] text-white text-base lg:text-lg font-medium">
                We are the biggest hyperstore in the universe. We got you all
                covered with our exclusive collections and latest drops.
              </p>
            </section>

            {/* List Sections */}
            <section className="w-full lg:w-[50%] flex flex-col sm:flex-row justify-between gap-8 lg:gap-4">
              {/* Categories */}
              <div>
                <h4 className="text-[#FFA52F] text-xl lg:text-2xl font-semibold mb-2">
                  Categories
                </h4>
                <ul className="text-white text-base lg:text-lg font-medium flex flex-col gap-1">
                  <li>Runners</li>
                  <li>Sneakers</li>
                  <li>Basketball</li>
                  <li>Outdoor</li>
                  <li>Golf</li>
                  <li>Hiking</li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-[#FFA52F] text-xl lg:text-2xl font-semibold mb-2">
                  Company
                </h4>
                <ul className="text-white text-base lg:text-lg font-medium flex flex-col gap-1">
                  <li>About</li>
                  <li>Contact</li>
                  <li>Blogs</li>
                </ul>
              </div>

              {/* Follow Us */}
              <div>
                <h4 className="text-[#FFA52F] text-xl lg:text-2xl font-semibold mb-2">
                  Follow Us
                </h4>
                <ul className="flex gap-4 lg:gap-6 text-white text-2xl lg:text-3xl">
                  <li>
                    <FaFacebook className="hover:text-[#FFA52F] transition-colors" />
                  </li>
                  <li>
                    <FaInstagram className="hover:text-[#FFA52F] transition-colors" />
                  </li>
                  <li>
                    <FaTwitter className="hover:text-[#FFA52F] transition-colors" />
                  </li>
                  <li>
                    <FaTiktok className="hover:text-[#FFA52F] transition-colors" />
                  </li>
                </ul>
              </div>
            </section>
            {/* Footer logo */}
          </div>
          <div className="mt-[97px]">
            <img src={FooterLogoImage} alt="Footer Logo" />
          </div>
        </div>

        {/* Optional: Bottom Note */}
        <div className="text-center text-sm lg:text-base py-4 mt-6">
          © All rights reserved.
        </div>
      </Container>
    </div>
  );
};

export default Footer;
