import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

import "../../../src/style.css";
import { Autoplay, Keyboard, Scrollbar, Navigation } from "swiper/modules";

function Services() {
	return (
		<div className="w-full container overflow-hidden bg-white">
			<div className="container overflow-hidden    w-[60%]  flex flex-col lg:flex-row justify-between pt-16 pb-8 md:py-28 items-center gap-[2rem] bg-white">
				<div className="flex flex-col  md:pl-[2rem] xl:pl-0 md:w-[40%]">
					<p className="text-3xl font-[400] text-[#76806b] font-Acta">
						What we offer?
					</p>
					<p className=" text-[30px] md:text-[2.4rem] xl:text-[36px] font-[600]">
						OUR SERVICES
					</p>
				</div>
				<div className=" md:w-[50%] text-[25px] xl:text-[18px] md:text-[1rem] tracking-[1px] text-center md:text-justify text-lg">
					At Capseed, we prioritize understanding your unique
					financial situation and borrowing needs. We offer
					personalized and flexible lending solutions, including First
					Mortgages and Second Mortgages, designed to work for you.
				</div>
			</div>
		</div>
	);
}

export default Services;
