import React from "react";
import img from "../../assets/images/books.webp";

function Guide() {
	return (
		<div className="container overflow-hidden md:p-20 p-12 md:py-24 flex flex-col md:flex-row items-center md:items-center justify-center md:justify-evenly font-poppins bg-white">
			<div>
				<img
					src={"/homeImages/Double Cover A4 Brochure Mockups.png"}
					alt=""
					className="md:w-full md:h-[35rem] h-[20rem] rounded-sm object-cover"
				/>
			</div>
			<div className="md:w-[40%] flex flex-col text-center md:text-justify items-center md:items-start  justify-center gap-8 xl:gap-16 pt-[2rem] md:pt-0">
				<h1 className="text-[20px] md:text-[2.5rem] xl:text-[70px] md:flex-col flex-row  font-[600] leading-[40px] md:leading-[4rem] xl:leading-[85px] text-[#1D332D]  justify-center md:justify-start gap-[.5rem] md:gap-0 md:flex hidden">
					<span className="text-4xl font-extralight font-Acta">
						Contact us for our
					</span>{" "}
					<span>Product Guide</span>
				</h1>
				<h1 className="text-[20px] md:text-[2.5rem] xl:text-[70px] md:flex-col flex-row  font-[600] leading-[40px] md:leading-[4rem] xl:leading-[85px] text-[#1D332D]  justify-center md:justify-start gap-[.5rem] md:gap-0 md:hidden block">
					<p className="text-xl font-extralight font-Acta ">
						Contact us for our
					</p>{" "}
					<p className="text-4xl">Product Guide</p>
				</h1>
				<p className="flex flex-col gap-4 font-poppins font-light 2xl:w-5/6 text-[18px] ">
					<span> Want to see how we can help?</span>
					<span>
						We fund both first and second mortgage on an array of
						real estate, including residential, commercial,
						industrial and specialist properties Australia-wide.
					</span>
				</p>
				{/* <button className="p-4 w-[200px] md:w-[240px] text-[20px] md:text-[30px]  text-gray-800 rounded-lg bg-[#B3BAAA]">
					Contact us
				</button> */}
			</div>
		</div>
	);
}

export default Guide;
