import React, { useState } from "react";
import { TbStarFilled } from "react-icons/tb";
import { BiLike } from "react-icons/bi";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { BsCaretRight } from "react-icons/bs";

const Body = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpens, setIsOpens] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropdown1 = () => {
    setIsOpens(!isOpens);
  };
  return (
    <div>
      <div className=" relative mt-10 top-20 w-3/5 ml-10">
        <div className="absolute">
          <h1 className="font-sans text-4xl relative group">
            BurpSite BootCamp
            <div className="absolute left-0 w-0 h-1 bg-blue-500 transform transition-all duration-300 origin-left group-hover:w-full"></div>
          </h1>

          <div className="text-xl mt-9 relative group">
            <p className="text-gray-400 relative z-10 group-hover:text-black transition">
              BurpSuite is an all-in-one tool used for WAPT. There are various
              functions that the burp suite can perform that help one in the
              process of pen-testing a website. We can intercept traffic, such
              as requests and responses sent to web servers, and also perform
              various analyses on those requests. BurpSuite is used by
              professionals in the field of testing security for websites.
              BurpSuite comes in 2 versions: professional, a paid product, and
              the free, Community edition.
            </p>
            <div className="absolute top-0 left-0 w-full h-full z-0 opacity-0 transition group-hover:opacity-20 bg-transparent"></div>
          </div>

          <rating className="flex gap-3 mt-8">
            <TbStarFilled className="w-6 h-6" />
            <TbStarFilled className="w-6 h-6" />
            <TbStarFilled className="w-6 h-6" />
            <TbStarFilled className="w-6 h-6" />
            <TbStarFilled className="w-6 h-6" />
            5.0
          </rating>
          <div className="mt-6">
            <button className="cta">
              <span>Login to Enroll</span>
              <svg viewBox="0 0 13 10" height="10px" width="15px"></svg>
            </button>
          </div>

          <div className=" absolute flex gap-7 mt-8">
            <span className="flex items-center gap-3">
              <BiLike />
              Beginner
            </span>
            <div className="w-0.5 h-5 bg-gray-800 transform rotate-180"></div>
            <span className="flex items-center gap-3">
              <BsFillPersonPlusFill />
              52 Candidates enrolled
            </span>
          </div>
        </div>
      </div>

      
      <div>
        <div className="input">
          <button className="value" onClick={toggleDropdown}>
            <BsCaretRight />
            Academia
          </button>
          {isOpen && (
            <div className="options">
              <p>Option 1</p>
              <p>Option 2</p>
            </div>
          )}
          <button className="value">
            <BsCaretRight />
            CTF Warriors
          </button>
          <button className="value" onClick={toggleDropdown1}>
            <BsCaretRight />
            Business Solutions
          </button>
          {isOpens && (
            <div className="options">
              <p>Option 1</p>
              <p>Option 2</p>
            </div>
          )}
          <button className="value">
            <BsCaretRight />
            Resources
          </button>
        </div>
      </div>
    </div>
  );
};

export default Body;
