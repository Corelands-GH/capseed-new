import React from "react";
import ApplyBanner from "./applyBanner/applyBanner";
import Navbar from "../../Components/NavbarMain";
import LoanDetail from "./loanDetail/loanDetail";

function Apply() {
	return (
		<div className=" max-w-full m-0 p-0 overflow-hidden container mx-auto ">
			<Navbar />
			<ApplyBanner />
			<LoanDetail />

			{/* navItems={navItems} */}
		</div>
	);
}

export default Apply;
