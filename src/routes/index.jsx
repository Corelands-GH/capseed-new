import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../screen/home/index";
import About from "../screen/about/index";
import Apply from "../screen/applyNow/Index";
import Contact from "../screen/contact/index";
import Invest from "../screen/Invest/index";
import PrivacyPolicy from "../screen/privacy";
import Terms from "../screen/terms";
import Borrow from "../screen/borrow";
import NavbarHome from "../screen/home/Navbar";
import Navbar from "../screen/about/navbar/Navbar";
import Footer from "../Components/Footer";

const Root = () => {
	return (
		<div className="">
			{/* <NavbarHome />  */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about-us" element={<About />} />
				<Route path="/privacy-policy" element={<PrivacyPolicy />} />
				<Route path="/terms-and-conditions" element={<Terms />} />
				<Route path="/invest" element={<Invest />} />
				<Route path="/borrow" element={<Borrow />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/apply" element={<Apply />} />
				<Route path="/invest" element={<Invest />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default Root;
