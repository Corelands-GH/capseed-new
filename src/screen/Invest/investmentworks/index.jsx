import React from "react";
import Flexible from "../../../Components/propsUsable/fexibleCard";
import investmentWorksDiv from "../../../data/investmentworkDiv.json";
import { Link } from "react-router-dom";
import InvestCard from "../../../Components/common/InvestCard";

function InvestmentWorks() {
  return (
    <div className="w-full flex justify-center bg-gray-100 overflow-hidden">
      <div className="w-[100%] md:flex  md:justify-between items-center justify-center bg-white">
        <div
          className="text-white p-12  flex-col md:w-2/3 items-center 
           lg:items-start gap-8 md:gap-16 w-[100%] md:pt-32 
           md:pl-32 md:pb-24 bg-[#1D332D] h-full hidden md:flex"
        >
          <h3 className="text-[15px] tracking-widest">
            HOW YOUR INVESTMENT WORKS
          </h3>
          <p className="text-center md:text-left text-[1rem] xl:text-[24px] 2xl:text-[30px] pr-0 flex  flex-col leading-[30px] md:leading-[40px] font-Acta">
            Capseed ensures that your investment creates a significant impact by
            empowering businesses and individuals in the SME sector through a
            comprehensive, growth-oriented approach. Our strategy focuses on
            fostering development and success, providing robust support tailored
            to both the unique needs of each business and the broader goals of
            the sector.
          </p>
          {/* <Link to="/contact">
						<button className="py-[0.8rem] px-[2rem] md:text-[18px] items-center text-[#1c322c] rounded-md bg-[#B3BAAA]">
							MORE INFO
						</button>
					</Link> */}
        </div>

        <div className="text-left w-full pb-8 mx-2">
          <div className="p-3 flex justify-around flex-wrap">
            {investmentWorksDiv.works?.slice(0, 2).map((workitem, index) => (
              <InvestCard item={workitem} work key={index} text />
            ))}
          </div>

          <div className=" p-3 flex justify-around flex-wrap">
            {investmentWorksDiv.works?.slice(2, 4)?.map((workitem, index) => (
              <InvestCard item={workitem} work key={index} text />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvestmentWorks;
