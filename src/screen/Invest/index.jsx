import React from "react";
// import Navbar from "../about/navbar/Navbar"
import Investwithus from "./Invetwithus/Investwithus";
import Investwithcapseed from "./InvestwithCapseed/Investwithcapseed";
import Points from "./Point/Points";
import Card from "./Card/Card";
import HowInvestmentWorks from "./HowInvestmentworks/HowInvestmentworks";
import SimplifidInvestment from "./SimplifidIvestment/SimplifiedInvestment";

import InvestmentWorks from "./investmentworks";
import Navbar from "../../Components/NavbarMain";

function Index() {
	return (
		<div className="container mx-auto">
			<Navbar />
			<Investwithus />
			<Investwithcapseed />
			<Points />
			<Card />
			<HowInvestmentWorks />
			<InvestmentWorks />
			<SimplifidInvestment />
		</div>
	);
}

export default Index;
