import React from "react";
import logo from "../../../screen/about/aboutImages/Logo-12-removebg-preview.png";

function Flexible({ item, work, text }) {
	return (
		<>
			<div className="md:w-[280px] flex flex-col gap-4 ">
				<div
					className={`${work ? "flex" : ""}   
          ${work ? "mt-12" : "mt-[-8] "} 
          items-start gap-8`}
				>
					<div
						className={` ${
							work ? " w-[45px] p-4" : "w-[40px]"
						} font-Acta px-[10px]  rounded-md text-white  text-center bg-[#B3BAAA]  mt-4`}
					>
						{work ? (
							<img
								src={logo}
								alt="logo"
								className="h-full w-full object-cover "
							/>
						) : (
							<p className="text-[32px] font-light ">
								{item.icon}
							</p>
						)}
					</div>
					<h3
						className={`text-[30px] flex flex-col mb-[2rem] font-Acta leading-none ${
							work ? "mt-[0rem]" : "mt-4"
						}`}
					>
						<div className="">{item.title1}</div>
						<div className="">{item.title2}</div>
					</h3>
				</div>

				<p
					className={`${
						text
							? "md:text-[14px] ml-[5rem] text-[14px] w-full md:w-[70%] text-wrap"
							: "text-[14px] text-wrap "
					} text-justify text-wrap font-light`}
				>
					{item.text}
				</p>
			</div>
		</>
	);
}

export default Flexible;
