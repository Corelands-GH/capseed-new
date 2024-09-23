import React from "react";
import "../../../../src/App.css";
import img from "../../../screen/about/aboutImages/Logo-12.png";
import ButtonGreen from "../../common/button";
import { Link } from "react-router-dom";

function AboutBannerProto({ title, desc }) {
	return (
		<div className="aboutBanner container flex items-center justify-center lg:justify-normal overflow-hidden">
			<div className="flex flex-col items-center lg:justify-center lg:w-[50%] w-[70%]   lg:items-start lg:ml-[6rem] text-center  lg:text-justify text-white ">
				<h1 className="text-4xl sm:text-6xl pb-[2rem] ">{title}</h1>
				<p className="mb-10 sm:ml-0 text-sm sm:text-[20px] md:text-sm w-[60%]">
					{desc}
				</p>
				<Link to="/contact">
					<ButtonGreen
						text="CONTACT US"
						background="#1D332D"
						width="13rem"
					/>
				</Link>
			</div>
		</div>
	);
}

export default AboutBannerProto;
