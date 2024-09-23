import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import img from "./homeImages/Logo-18.png";
import img2 from "../../assets/images/logo-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faInstagram,
	faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const NavbarHome = () => {
	const [open, setOpen] = useState(false);
	const currentPath = window.location.pathname;

	const navLinks = [
		{ path: "/", label: "Home" },
		{ path: "/invest", label: "Invest" },
		{ path: "/borrow", label: "Borrow" },
		{ path: "/about-us", label: "About us" },
		{ path: "/contact", label: "Contact us" },
	];

	return (
		<div className="relative container">
			<div className="container max-w-full m-0 bg-transparent absolute w-full flex justify-between items-center text-white p-8 md:p-[3rem] md:py-16 lg:px-[6rem] z-50">
				<a href="/" className="flex items-center">
					<img src={img2} className=" md:h-[25px] h-full" alt="" />
				</a>
				<div className="md:flex md:visible invisible gap-[4rem] text-[1rem] items-center font-poppins">
					{navLinks.map((link) => (
						<a
							key={link.path}
							href={link.path}
							className={`${
								currentPath === link.path
									? "text-secondary"
									: ""
							} ${
								currentPath === link.path
									? "pointer-events-none"
									: ""
							}`}
						>
							{link.label}
						</a>
					))}
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
				<div className="bg-primary fixed h-full w-full top-0 left-0 flex flex-col p-12 gap-8 justify-between z-[100] text-white">
					<div className="flex justify-between items-center">
						<button
							onClick={() => setOpen(!open)}
							className="text-white"
						>
							<CloseIcon fontSize="large" />
						</button>
						<a href="/" className="h-fit">
							<img
								src="/homeImages/Logo-19.png"
								className="md:h-[25px] h-5"
								alt=""
							/>
						</a>
					</div>
					<div className="flex flex-col items-end gap-8">
						{navLinks.map((link) => (
							<a
								key={link.path}
								href={link.path}
								className={`${
									currentPath === link.path
										? "text-secondary"
										: ""
								} ${
									currentPath === link.path
										? "pointer-events-none"
										: ""
								} uppercase text-xl`}
								onClick={() => setOpen(false)}
							>
								{link.label}
							</a>
						))}
						<a
							href={"/apply"}
							className={`${
								currentPath === "/apply" ? "text-secondary" : ""
							} ${
								currentPath === "/apply"
									? "pointer-events-none"
									: ""
							} uppercase text-xl`}
							onClick={() => setOpen(false)}
						>
							Apply now
						</a>
					</div>
					<div className="text-right flex flex-col items-end">
						<div className="mb-8 text-2xl font-Acta">
							Contact us on Socials
						</div>
						<div className="socials flex gap-4 gap-x-8 font-Acta text-lg">
							<a
								href="https://www.facebook.com/profile.php?id=61559601560822"
								target="_blank"
								className="text-white"
							>
								<FontAwesomeIcon
									icon={faFacebook}
									className="text-white mr-2"
									size="md"
								/>
								Facebook
							</a>
							<a
								href="https://www.linkedin.com/company/capseed/"
								target="_blank"
								className="text-white"
							>
								<FontAwesomeIcon
									icon={faLinkedinIn}
									className="text-white mr-2"
									size="md"
								/>
								Linkedin
							</a>
							<a
								href="https://www.instagram.com/capseed_au/"
								target="_blank"
								className="text-white"
							>
								<FontAwesomeIcon
									icon={faInstagram}
									className="text-white mr-2"
									size="md"
								/>
								Instagram
							</a>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default NavbarHome;
