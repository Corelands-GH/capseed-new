import React from "react";
import img from "./homeImages/Logo-18.png";
import { Link } from "react-router-dom";

function Footer({ bgColor }) {
	return (
		<div
			className={`container w-full flex flex-col md:flex-row gap-[1rem] bg-white justify-center md:justify-between px-[6rem] py-[3rem] items-center  ${bgColor}`}
		>
			<div className="text-center md:text-justify pb-[1rem] md:pb-0 text-[#35443d] font-Acta">
				<p className="mb-6">
					© 2024 Capseed Investments Pvt Ltd. All rights reserved.
				</p>
				<p className="mb-2">
					<Link to="/privacy-policy">
						<span>Privacy Policy</span>
					</Link>
					<span>
						<Link className="ml-2" to="/terms-and-conditions">
							{" "}
							Terms & Conditions
						</Link>
					</span>
				</p>
				<a href="https://corelands.com.au/coming-soon/" target="_blank">
					Website by{" "}
					<span className="font-semibold  text-[#101f1a] font-poppins">
						STUDIO CORELANDS
					</span>
				</a>
			</div>
			<div>
				<img src={img} alt="" className="w-[18.75rem]" />
			</div>
		</div>
	);
}

export default Footer;
