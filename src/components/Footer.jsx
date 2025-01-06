import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { GrGamepad } from "react-icons/gr";
const Footer = () => {
  return (
    <div>
      <footer className="bg-base-200 text-black py-10 ">
        <div className="container w-10/12  mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold uppercase mb-4">
              What is the Support Time
            </h3>
            <p className="text-sm">
              All of your emails will be reviewed and checked manually
              carefully. However, based on the number of support tickets and the
              nature of the request itself:
            </p>
            <ul className="text-sm mt-4">
              <li className="mb-1">
                <span className="text-green-400 font-semibold">
                  Support Time:
                </span>{" "}
                Monday – Friday
              </li>
              <li className="mb-1">
                <span className="text-green-400 font-semibold">
                  Response Time:
                </span>{" "}
                24 Hours – 48 Hours
              </li>
              <li>
                <span className="text-green-400 font-semibold">Timezone:</span>{" "}
                Our Timezone is GMT+7
              </li>
            </ul>
          </div>

          {/* Center Section */}
          <div className="flex flex-col items-center">
            <div className="mb-4 flex items-center font-bold text-3xl">
              <GrGamepad className="text-3xl" /> Game
            </div>
            <p className="text-sm mb-4">
              COPYRIGHT © 2024{" "}
              <span className="text-green-400">Rising Bamboo</span>. ALL RIGHTS
              RESERVED.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/takmim00" className="text-2xl hover:text-green-400">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/takmim_00/" className="text-2xl hover:text-green-400">
                <FaInstagram />
              </a>
              <a href="https://x.com/MTakmim58515" className="text-2xl hover:text-green-400">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold uppercase mb-4">
              Information
            </h3>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="hover:text-green-400">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400">
                  Our Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400">
                  How To Get Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400">
                  License Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
