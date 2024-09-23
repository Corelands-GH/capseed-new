import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import img from "../aboutImages/Logo-19.png";

const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<div className="font-orelaga ">
			<div className="container max-w-full m-0 p-0 bg-[#1D332D] relative w-full flex justify-between items-center text-white py-[2rem] px-[3rem] lg:px-[6rem]">
				<a href="/" className="flex items-center">
					<img
						src={img}
						className="sm:w-[15rem] sm:h-[2rem] md:w-[8rem] md:h-[1.3rem] lg:w-[10rem] h-[1.5rem]"
						alt=""
					/>
				</a>
				<div className="invisible md:flex md:visible items-center gap-[4rem] text-[1rem] font-poppins">
					<a href="/invest">Invest</a>
					<a href="/borrow">Borrow</a>
					<a href="/about-us">About us</a>
					{/* <a href="/apply">Apply</a> */}

					<a href="/contact">Contact</a>
					<button
						onClick={() => setOpen(!open)}
						className="hidden md:block"
					>
						<MenuIcon fontSize="large" />
					</button>
				</div>
				<button onClick={() => setOpen(!open)} className="md:hidden">
					<MenuIcon fontSize="large" />
				</button>
			</div>

			{open && (
				<div className=" bg-primary h-screen flex flex-col p-8 w-full gap-8 justify-normal  absolute top-0 left-0 z-[100] text-white">
					<div className="flex justify-between items-center lg:items-start">
						<a href="/">
							<img
								src={img}
								className="sm:w-[15rem] sm:h-[2rem] w-[10rem] h-[1.5rem]"
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
						<a href="/apply" onClick={() => setOpen(false)}>
							Services
						</a>
						<hr className="w-[95%]" />
						<a href="/process" onClick={() => setOpen(false)}>
							Process
						</a>
						<hr className="w-[95%]" />
						<a href="/about-us" onClick={() => setOpen(false)}>
							About us
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
	);
};

export default Navbar;
