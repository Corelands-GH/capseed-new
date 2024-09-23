import React from "react";
import AboutBanner from "./aboutBanner/AboutBanner";
import WelcomeSection from "./welcome/welcomeSection";
import OurTeam from "./ourTeam/OurTeam";
import Navbar from "../../Components/NavbarMain";

function Index() {
	return (
		<div className="container mx-auto">
			<>
				<Navbar />
				<AboutBanner />
				<WelcomeSection />
				<OurTeam />
			</>
		</div>
	);
}

export default Index;
