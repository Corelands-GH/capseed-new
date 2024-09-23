import React from "react";
import { Link } from "react-router-dom";

function Investwithus() {
  return (
    <>
      <div className="investBanner flex items-center justify-center lg:justify-normal overflow-hidden">
        <div className="flex flex-col items-center lg:justify-center lg:w-[30rem] w-[70%] lg:items-start lg:ml-[6rem] text-center md:text-left text-white ">
          <h1 className="text-5xl sm:text-6xl pb-[2rem] font-light ">
            Invest with us
          </h1>
          <span className="mb-10 sm:ml-0 text-sm sm:text-md tracking-wider md:w-5/6">
            We offer secure investment opportunities for sophisticated
            investors, with diversified Australian property portfolios tailored
            to your preferences. You choose exactly where your money is
            invested, ensuring peace of mind and control.
          </span>
          <Link to="/contact">
            <button className="py-2.5 px-9 text-lg sm:text-xl rounded-lg bg-[#1D332D] uppercase">
              Register your Interest
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Investwithus;
