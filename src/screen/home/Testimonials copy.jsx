import React, { useRef } from "react";
import StarIcon from "@mui/icons-material/Star";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../../../src/style.css";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";

const testimonials = [
	{
		name: "John S",
		title: "Broker Partner",
		stars: 5,
		reviewTitle: "Great experience with Capseed.",
		details:
			"Capseed has been a game-changer for my business. Their private leading solutions are tailored are flexible. making the process smooth and hassle-free. The team is professional and always ready to assess. Highly recommended!",
	},
	{
		name: "Emily R",
		title: "Broker Partner",
		stars: 5,
		reviewTitle: "Quick and Efficient.",
		details:
			"I had a great experience with Capseed. Their lending options are diverse, and they were able to provide a solution that perfectly matched my needs. The customer service was exceptional, and the process was quick and efficient.",
	},
	{
		name: "Mark L",
		title: "Broker Partner",
		stars: 5,
		reviewTitle: "Excellent private lending services.",
		details:
			"Capseed offers excellent private lending services. The entire process was straight forward, and the staff were knowledgeable and helpful. I was able to get the funding I needed quickly and without any issues. Great company!",
	},
	{
		name: "Mark L",
		title: "Broker Partner",
		stars: 5,
		reviewTitle: "Excellent private lending services.",
		details:
			"Capseed offers excellent private lending services. The entire process was straight forward, and the staff were knowledgeable and helpful. I was able to get the funding I needed quickly and without any issues. Great company!",
	},
];

function Testimonials() {
	const prevRef = useRef(null);
	const nextRef = useRef(null);

	return (
		<div className="bg-primary p-8 md:px-20 py-24">
			<h1 className="text-4xl text-white mb-10 md:ml-[85px] font-Acta">
				Testimonials
			</h1>
			<div className="container overflow-hidden bg-[#1D332D] flex-col md:flex-row items-center md:items-start text-white flex justify-between gap-10 font-poppins">
				{/* <button
					ref={prevRef}
					className="custom-swiper-button-prev hidden md:block mt-[30px] text-brand"
				>
					<WestIcon />
				</button> */}
				<Swiper
					slidesPerView={3}
					spaceBetween={10}
					keyboard={{ enabled: true }}
					breakpoints={{
						340: {
							slidesPerView: 1,
							centeredSlides: true,
							spaceBetween: 20,
						},
						640: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 3,
							spaceBetween: 10,
						},
						1024: {
							slidesPerView: 3,
							spaceBetween: 30,
						},
					}}
					loop={true}
					navigation={{
						prevEl: prevRef.current,
						nextEl: nextRef.current,
					}}
					onBeforeInit={(swiper) => {
						swiper.params.navigation.prevEl = prevRef.current;
						swiper.params.navigation.nextEl = nextRef.current;
					}}
					modules={[Navigation, Keyboard]}
					className="mySwiper padding-swiper mt-6"
				>
					{testimonials.map((testimonial, i) => (
						<SwiperSlide key={i}>
							<div className="md:w-[90%] flex flex-col gap-10">
								<div className="flex flex-col gap-4">
									<h1 className="text-[23px] font-poppins text-[#a3aa9d]">
										<span className="text-white mr-2">
											{testimonial.name}
										</span>
										<span className="font-[500]">
											{testimonial.title}
										</span>
									</h1>
									<p>
										{[...Array(testimonial.stars)].map(
											(_, starIndex) => (
												<StarIcon
													fontSize="medium"
													key={starIndex}
												/>
											)
										)}
									</p>
								</div>
								<h2 className="text-[24px] font-Acta text-[#B3BAAA]">
									{testimonial.reviewTitle}
								</h2>
								<p className="text-[16px] text-justify font-poppins text-[#d1d2d2]">
									{testimonial.details}
								</p>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				{/* <button
					ref={nextRef}
					className="custom-swiper-button-next hidden md:block mt-[30px] text-brand"
				>
					<EastIcon />
				</button> */}
			</div>
		</div>
	);
}

export default Testimonials;
