import React from "react";
import homeSliderData from "../../data/homeSliderData.json";
import { Link } from "react-router-dom";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/scrollbar";
// import "swiper/css/navigation";

// import "../../../src/style.css";
// import {  Keyboard, Navigation } from "swiper/modules";
import Flexible from "../../Components/propsUsable/fexibleCard";

function Whychoose() {
	// const slides = new Array(8).fill(<Flexible />); // Creates an array with 8 Flexible components
	return (
		<div className="container overflow-hidden flex flex-col xl:flex-row">
			<div
				className="p-8 flex flex-col items-center lg:items-start  
        gap-8 md:gap-16 bg-[#f2f2f2] xl:w-[50%]  md:pt-[9rem] md:pb-24 px-[4rem] md:pl-32"
			>
				<h3 className="text-[15px] tracking-[8px] font-medium text-center md:text-left">
					WHY CHOOSE CAPSEED?
				</h3>
				<p className="text-center md:text-left text-[1rem] xl:text-[24px] 2xl:text-[30px] pr-0 flex flex-col font-medium leading-[30px] md:leading-[40px] font-Acta">
					Choose Capseed for tailored, flexible lending solutions with
					exceptional customer service, quick approvals, and a
					seamless, hassle-free process
				</p>
				<Link to="/borrow">
					{" "}
					<button className="py-[0.8rem] px-[2rem] md:text-[18px] items-center text-[#1c322c] rounded-md bg-[#B3BAAA]">
						MORE INFO
					</button>
				</Link>
			</div>

			<div className="md:w-[100%] w-full flex justify-start md:justify-between flex-wrap items-center px-[4rem] bg-white md:pr-32 py-12">
				<div className="w-full flex items-start gap-y-2 flex-wrap justify-between gap-5 ">
					{homeSliderData.paragraphs.map((item) => (
						<div
							key={item.id}
							className="flex-col flex items-start justify-evenly flex-wrap py-8 md:py-2"
						>
							<Flexible item={item} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Whychoose;
