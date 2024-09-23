import React from "react";
import "../../../../src/App.css";

const Card = () => {
	return (
		<div className="invest2ndbanner cardImage relative bg-cover bg-center h-auto pt-20 pb-20 flex justify-center items-center overflow-hidden ">
			<div className=" md:w-full md:flex justify-center bg-gray-100/30 text-center md:text-start md:justify-around md:items-center my-14">
				{/* Removed the card containing 10%+ p.a. */}
				<h2 className="text-3xl md:text-5xl text-white z-40 md:py-14 md:text-start">
					How your Investment works?
				</h2>
			</div>
		</div>
	);
};

export default Card;

// import React from "react";
// import "../../../../src/App.css";

// const Card = () => {
// 	return (
// 		<div className="invest2ndbanner cardImage relative bg-cover bg-center h-auto pt-20 pb-20 flex justify-center items-center overflow-hidden ">
// 			<div className="absolute top-40 left-0 w-full h-1/2 bg-gray-100 opacity-30 rounded-lg md:block hidden" />

// 			<div className=" md:w-full md:flex justify-center text-center md:text-start md:justify-around md:items-center mt-10">
// 				<div className="bg-primary py-12 text-white p-2 md:p-12 md:w-fit w-full shadow-md z-40 border-8 md:border-10 border-white flex flex-col items-center md:items-start">
// 					<div className="mb-6 md:mb-14 w-16 h-12 md:w-20 md:h-16">
// 						<img src="/Logo.png" alt="" className="h-full" />
// 					</div>
// 					<div className="text-1xl md:text-4xl">10%+ p.a.</div>
// 					<div>
// 						<p className="text-gray-400 mt-2 text-sm w-36 md:text-sm">
// 							Competitive returns from 10% p.a.
// 						</p>
// 					</div>
// 				</div>
// 				<h2 className="text-3xl md:text-5xl text-white z-40 mt-10 md:mt-8 md:text-start">
// 					How your <br className="block " />
// 					Investment works?
// 				</h2>
// 			</div>
// 		</div>
// 	);
// };

// export default Card;
