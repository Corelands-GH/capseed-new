import React from "react";
import "../../../../src/App.css";
import img from "../applyImages/Logo-19.png";

function ApplyBanner() {
	return (
		<div className="applyBanner flex justify-center items-center lg:justify-normal w-full">
			<div className="  lg:pl-[9rem] text-white justify-center items-center lg:justify-normal  lg:items-start  flex flex-col gap-[.5rem]">
				<div className="bg-[#1D332D] w-[14rem] p-[1rem_2rem] rounded-md">
					<img src={img} className="w-[10rem] h-[1.2rem] " alt="" />
				</div>
				<h1 className="md:text-[2.2rem] text-[1.7rem] font-poppins mb-8">
					APPLICATION FORM
				</h1>
				<p className="md:text-[30px] text-[1.2rem] flex flex-col text-center md:text-justify ">
					<span> Here to assist</span> <span>our Brokers</span>
				</p>
			</div>
		</div>
	);
}

export default ApplyBanner;
