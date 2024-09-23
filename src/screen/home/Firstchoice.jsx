import React from "react";
import img from "./homeImages/Logo-19.png";

function Firstchoice() {
	return (
		<div className="container  bg-[#1D332D] flex flex-col md:flex-row gap-[2rem] md:gap-0 p-14 xl:p-20 2xl:p-28 xl:px-32 2xl:px-32  justify-between font-poppins overflow-hidden">
			<div className="flex flex-col justify-between gap-8 ">
				<div>
					<img src={img} alt="" className="w-[180px] pt-[1rem]" />
				</div>
				<div className="text-nowrap">
					<p className="text-[30px] xl:text-[39.5px] text-white font-Acta">
						Your first choice in
					</p>
					<p className="text-[30px] xl:text-[40px] text-[#B3BAAA]">
						PRIVATE LENDING
					</p>
				</div>
			</div>

			<div className="lg:text-[18px] md:w-3/4 xl:text-[20px] 2xl:text-[18px] md:pl-20 lg:pl-24 xl:pl-36 2xl:pl-60 text-white">
				<p className="">
					<span className="">
						At Capseed, we help businesses and individuals navigate
						finance with customized solutions and competitive rates.{" "}
					</span>
					As private lenders, we offer a range of services including
					Commercial Property Finance, Caveat Loans, Bridge Loans,
					First Mortgages, and Second Mortgages. Our experienced team
					guides you through the loan process, ensuring you have the
					information needed to make the right decisions.
				</p>
				<br />
				<p className="">
					We value genuine interactions and strive to build strong,
					lasting relationships with our clients. Our commitment to
					exceptional service and support ensures a seamless
					experience from application to disbursement. Contact our
					team today and take the first step towards a brighter
					financial future.
				</p>
			</div>
		</div>
	);
}

export default Firstchoice;
