import React from "react";
import ContactForm from "../contactForm/ContactForm";

function Headoffice() {
	return (
		<>
			<div className="container py-[6rem] lg:pl-[9rem] text-white flex justify-center items-center lg:relative overflow-hidden">
				{/* <ContactForm/> */}
				<div className="container mx-auto lg:pr-[10rem] text-black flex flex-col text-center  items-center lg:items-end lg:text-right justify-center gap-[1.5rem] md:gap-[1rem] 2xl:gap-[1.6rem] ">
					<h1 className="text-3xl 2xl:text-[2.3rem] font-Acta text-brand font-medium ">
						Head Office
					</h1>
					<p className="text-[1rem] 2xl:text-[1.5rem] ">
						Suite 19A Ground Floor <br /> 75 Lorimer Street, <br />
						Southbank VIC 3038
					</p>
					<h1 className="text-3xl 2xl:text-[2.3rem] font-Acta text-brand mt-4 font-medium">
						Mail Us
					</h1>
					<p className="text-[1rem] 2xl:text-[1.5rem] ">
						support@capseed.com.au
					</p>
					<h1 className="text-3xl 2xl:text-[2.3rem] font-Acta text-brand mt-4 font-medium">
						Phone
					</h1>
					{/* <p className="ltext-[1.5rem] 2xl:text-[2.5rem] "> 0 426 805 278</p> */}
					<p>
						{" "}
						<a
							href="tel:+0426805278"
							className="text-[1rem] 2xl:text-[1.5rem]"
						>
							+61 426 805 278
						</a>
					</p>
				</div>
			</div>
		</>
	);
}

export default Headoffice;
