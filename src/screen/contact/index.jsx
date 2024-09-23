import React from "react";
import ContactBanner from "./contactBanner/ContactBanner";
// import Navbar from './Navbar/Navbar'
import Getintouch from "./Getintouch/Getintouch";
import Headoffice from "./Headoffice/Headoffice";
import Map from "./Map/Map";

import ContactForm from "./contactForm/ContactForm";
import Navbar from "../../Components/NavbarMain";

function Contact() {
	return (
		<div className="container mx-auto relative max-w-full ">
			<Navbar />
			<ContactBanner />
			<Getintouch />
			{/* <ContactForm /> */}
			<Headoffice />
			<Map />
		</div>
	);
}

export default Contact;
