import React from "react";
import { Link } from "react-router-dom";

function Help() {
	return (
		<div className="container overflow-hidden bg-[#1D332D] flex px-[3rem] flex-col md:flex-row gap-8 text-center md:text-justify  md:items-center items-center  justify-center md:gap-52 pb-14 pt-8 md:py-14 font-poppins font-medium">
			{/* <h1 className="text-white text-[35px]">
				GET THE HELP YOU NEED.{" "}
				<span className="text-[#B3BAAA]">TODAY!</span>
			</h1> */}
			<Link to="/contact">
				<button className="p-4 w-[180px] text-lg items-center text-gray-800 rounded-lg bg-[#B3BAAA]">
					GET IN TOUCH
				</button>
			</Link>
		</div>
	);
}

export default Help;
