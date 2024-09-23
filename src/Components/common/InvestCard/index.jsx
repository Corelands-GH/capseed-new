import React from "react";
import logo from "../../../screen/about/aboutImages/Logo-12-removebg-preview.png";
// import homeSliderData from "../../../data/homeSliderData.json"
// import Whychoose from '../../../screen/home/Whychoose';

function InvestCard({ item, work, text }) {
	return (
		<>
			<div className="md:w-[280px] flex flex-col">
				<div
					className={`${work ? "flex" : ""}   
          ${work ? "mt-12" : "mt-[-8] "} 
          items-start gap-8`}
				>
					<div
						className={`w-12 h-12 font-Acta px-[10px] rounded-md text-white  text-center bg-[#B3BAAA]`}
					>
						<img
							src={"/yellowLogo.png"}
							alt="logo"
							className="h-12 w-12 object-contain "
						/>
					</div>
					<h3
						className={`text-[30px] flex flex-col mb-[2rem] leading-[1] font-Acta ${
							work ? "mt-[0rem]" : "mt-4"
						}`}
					>
						<span className="">{item.title1}</span>
						<span className="">{item.title2}</span>
					</h3>
				</div>

				<p
					className={`${
						text
							? "md:text-[17px] md:ml-[5rem] text-[17px] w-full md:w-[70%] text-wrap"
							: "text-[14px] text-wrap"
					} text-left text-wrap font-light`}
				>
					{item.text}
				</p>
			</div>
		</>
	);
}

export default InvestCard;
