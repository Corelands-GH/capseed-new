import React from "react";
import Navbar from "./Navbar.jsx";
import Homebanner from "./Homebanner.jsx";
import Firstchoice from "./Firstchoice.jsx";
import Whychoose from "./Whychoose.jsx";
import Help from "./Help.jsx";
import Services from "./Services.jsx";
import Cards from "./Cards.jsx";
import Testimonials from "./Testimonials.jsx";
import Guide from "./Guide.jsx";
import NavbarHome from "./Navbar.jsx";

function Home() {
	return (
		<div className="container ">
			<div className="container max-w-full overflow-hidden">
				<NavbarHome />
				<Homebanner />
				<Firstchoice />
				<Whychoose />
				<Help />
				<Services />
				<Cards />
				<Testimonials />
				<Guide />
			</div>
		</div>
	);
}

export default Home;
