import React from "react";
import { Link } from "react-router-dom";
import logo from "../../about/aboutImages/Logo-12-removebg-preview.png";

function SimplifidInvestment() {
	return (
		<div className=" mx-auto px-4 py-32 text-center overflow-hidden w-5/6">
			<p className="text-md text-center mb-[-10px] text-lg tracking-widest text-brand">
				SIMPLIFIED INVESTMENTS
			</p>
			<h2 className="text-[40px] text-center mb-8 font-Acta tracking-wide">
				How to Invest
			</h2>
			<div className=" flex  flex-col md:flex-row items-center mt-14">
				{/* <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center text-3xl font-bold">
                            <img src={logo} alt="" className=' w-1/2' />
                        </div>
                        <h3 className="text-xl font-bold mt-4">Apply</h3>
                        <p className="text-gray-600 mt-2">
                            Complete our straightforward application and certification
                            documents to become an investor.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center text-3xl font-bold">
                            <img src={logo} alt="" className='w-1/2' />
                        </div>
                        <h3 className="text-xl font-bold mt-4">Invest</h3>
                        <p className="text-gray-600 mt-2">
                            Choose from our range of private credit opportunities to match
                            your portfolio needs.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center text-3xl font-bold">
                            <img src={logo} alt="" className='w-1/2' />
                        </div>
                        <h3 className="text-xl font-bold mt-4">Return</h3>
                        <p className="text-gray-600 mt-2">
                            Enjoy consistent returns and manage your portfolio with the help of
                            our Investor Relations Team.
                        </p>
                    </div> */}
				<div className="relative flex flex-col md:flex-row items-center md:space-x-6">
					<div className="flex flex-col items-center">
						<div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center text-3xl font-bold">
							<img
								src={"/Logo.png"}
								alt=""
								className="w-full p-2 z-50"
							/>
						</div>
						<div className="absolute top-[2rem]  h-[0.2px] bg-black z-0  left-[17%] w-[64%] md:block hidden "></div>
						<h3 className="text-3xl font-extralight font-Acta mt-6">
							Apply
						</h3>
						<p className="mt-6 md:w-1/2 font-light">
							Complete our straight forward application and
							certification documents to become an investor.
						</p>
					</div>
					<div className="flex flex-col items-center">
						<div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center text-3xl font-bold">
							<img
								src={"/Logo.png"}
								alt=""
								className="w-full p-2 z-50"
							/>
						</div>
						<h3 className="text-3xl font-extralight font-Acta mt-6">
							Invest
						</h3>
						<p className="mt-6 md:w-1/2 font-light">
							Choose from our range of private credit
							opportunities to match your portfolio needs.
						</p>
					</div>
					<div className="flex flex-col items-center">
						<div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center text-3xl font-bold">
							<img
								src={"/Logo.png"}
								alt=""
								className="w-full p-2 z-50"
							/>
						</div>
						<h3 className="text-3xl font-extralight font-Acta mt-6">
							Return
						</h3>
						<p className="mt-6 md:w-1/2 font-light">
							Enjoy consistent returns and manage your portfolio
							with the help of our Investor Relations Team.
						</p>
					</div>
					{/* Horizontal line */}
				</div>
			</div>
			{/* <div>
				<Link to="/contact">
					<button className="bg-black text-white px-12 py-3 rounded-xl mt-12 hover:bg-gray-800 text-xl">
						CONTACT US
					</button>
				</Link>
			</div> */}
		</div>
	);
}

export default SimplifidInvestment;
