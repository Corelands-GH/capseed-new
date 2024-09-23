import React from "react";
import ContactForm from "../contactForm/ContactForm";
import logo from "../../../assets/images/logo-white.png";

function Getintouch() {
	return (
		<>
			<div className="container !relative bg-cover bg-center h-[auto] pt-[4rem] bg-[#1d332d] pb-[4rem] text-right">
				<ContactForm />
				<div className=" md:pl-[9rem] text-white mt-10 md:mt-2 flex gap-[1rem]  flex-col items-center md:items-end justify-center lg:pr-[10rem]">
					<div className="bg-[#1D332D] w-[14rem] rounded-md text-center">
						<img
							src={logo}
							className="w-[10rem] h-[1.2rem] mx-auto md:mx-0 md:ml-auto"
							alt=""
						/>
					</div>
					<h1 className="md:text-[2.5rem] 2xl:text-[3rem] text-center md:text-justify mb-4 font-Acta">
						Get in touch
					</h1>
					<p className=" flex flex-col text-center md:text-justify">
						<span> Need assistance or have questions?</span>{" "}
						<span>Our team at capseed is here to help.</span>
					</p>
					<p className="flex flex-col text-center md:text-right text-secondary">
						<span> Contact us today to discuss your financing</span>
						needs to learn more about our services. <span></span>
					</p>
				</div>
			</div>
		</>
	);
}

export default Getintouch;
