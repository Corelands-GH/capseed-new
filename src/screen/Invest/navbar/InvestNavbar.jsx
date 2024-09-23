import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import img from "../investImages/Logo-19.png";

function InvestNavbar() {
	const [open, setOpen] = useState(false);

	return (
		<>
			<div className="font-orelaga">
				<div className="bg-[#1D332D] relative w-full flex justify-between items-center text-white py-[3rem] px-[3rem] lg:px-[6rem]">
					<a href="/" className="flex items-center">
						<img
							src={img}
							className="sm:w-[15rem] sm:h-[2rem] md:w-[8rem] md:h-[1.3rem] lg:w-[10rem] lg:h-[1.5rem]"
							alt=""
						/>
					</a>
					<div className="hidden md:flex gap-[4rem] text-[1rem] font-poppins">
						<a href="/invest">Invest</a>
						<a href="">Borrow</a>
						<a href="/about-us">About</a>
						<a href="/contact">Contact</a>
					</div>
					<button
						onClick={() => setOpen(!open)}
						className="md:hidden"
					>
						<MenuIcon fontSize="large" />
					</button>
				</div>

				{open && (
					<div className="bg-black h-screen flex flex-col p-8 w-full gap-8 lg:justify-between justify-normal absolute top-0 left-0 z-100 text-white">
						<div className="flex justify-between items-center lg:items-start">
							<a href="/">
								<img
									src={img}
									className="sm:w-[15rem] sm:h-[2rem] md:w-[10rem] md:h-[1.5rem]"
									alt=""
								/>
							</a>
							<button
								onClick={() => setOpen(!open)}
								className="text-white"
							>
								<CloseIcon fontSize="large" />
							</button>
						</div>
						<div className="flex flex-col gap-8">
							<a href="/invest" onClick={() => setOpen(false)}>
								Invest
							</a>
							<hr className="w-[95%]" />
							<a href="" onClick={() => setOpen(false)}>
								Borrow
							</a>
							<hr className="w-[95%]" />
							<a href="/about-us" onClick={() => setOpen(false)}>
								About
							</a>
							<hr className="w-[95%]" />
							<a href="/contact" onClick={() => setOpen(false)}>
								Contact
							</a>
							<hr className="w-[95%]" />
						</div>
					</div>
				)}
			</div>
		</>
	);
}

export default InvestNavbar;
