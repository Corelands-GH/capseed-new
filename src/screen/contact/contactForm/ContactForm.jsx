import React, { useState } from "react";
import emailjs from "emailjs-com";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function ContactForm() {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		contactNumber: "",
		role: "Borrower",
		message: "",
		privacyPolicy: false,
	});

	const [errors, setErrors] = useState({});
	const [privacyError, setPrivacyError] = useState("");

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData({
			...formData,
			[name]: type === "checkbox" ? checked : value,
		});
	};

	const validate = () => {
		let tempErrors = {};
		if (!formData.firstName)
			tempErrors.firstName = "First Name is required.";
		if (!formData.lastName) tempErrors.lastName = "Last Name is required.";
		if (!formData.message) tempErrors.message = "Message is required.";

		if (!formData.email) tempErrors.email = "Email is required.";
		if (!formData.contactNumber)
			tempErrors.contactNumber = "Contact Number is required.";
		if (!formData.privacyPolicy)
			setPrivacyError("Please agree to the Privacy Policy.");
		else setPrivacyError("");
		setErrors(tempErrors);
		return Object.keys(tempErrors).length === 0 && formData.privacyPolicy;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (validate()) {
			// Format the form data
			const templateParams = {
				from_name: `${formData.firstName} ${formData.lastName}`,
				firstName: formData.firstName,
				lastName: formData.lastName,
				email: formData.email,
				contactNumber: formData.contactNumber,
				role: formData.role,
				message: formData.message,
				privacy_policy: formData.privacyPolicy
					? "Agreed"
					: "Not Agreed",
			};

			emailjs
				.send(
					"service_7mc7n0b", // Replace with your emailjs service ID
					"template_hqjuqqr", // Replace with your emailjs template ID
					templateParams,
					"7capRyCYKsmz9CMRD"
				)
				.then(
					(result) => {
						console.log(result.text);
						alert(
							"Email sent, Our team will get in touch with you sortly!"
						);
						setFormData({
							firstName: "",
							lastName: "",
							email: "",
							contactNumber: "",
							role: "Borrower",
							message: "",
							privacyPolicy: false,
						});
						setErrors({});
						setPrivacyError("");
					},
					(error) => {
						console.log(error.text);
					}
				);
		}
	};

	return (
		<>
			<div className="container z-50 lg:w-[41%] p-[1rem] shadow-slate-800 shadow-[0_10px_30px_0] bg-white md:absolute top-[20%] lg:left-[9rem] overflow-hidden">
				<form
					className="w-full bg-[#1d332d] p-[2rem]"
					onSubmit={handleSubmit}
				>
					<div>
						<h1 className="xl:text-[1.6rem] md:text-[1.2rem] 2xl:text-[2.5rem] text-[1rem] font-bold-700 text-white md:pb-6 xl:pb-8 text-left font-Acta">
							We'd love to hear from you. Please share your
							contact information. We'll be happy to assist you.
						</h1>
					</div>
					<div className="flex flex-col gap-[1rem] font-Acta">
						<div className="flex flex-wrap -mx-3 ">
							<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 font-Acta text-left">
								<label
									className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2"
									htmlFor="firstName"
								></label>
								<input
									className="mb-[.75rem] appearance-none block w-full bg-[#303c36] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
									id="firstName"
									type="text"
									name="firstName"
									value={formData.firstName}
									onChange={handleChange}
									placeholder="First Name"
								/>
								{errors.firstName && (
									<p className="text-red-500 text-xs">
										{errors.firstName}
									</p>
								)}
							</div>
							<div className="w-full md:w-1/2 px-3 text-left">
								<label
									className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2"
									htmlFor="lastName"
								></label>
								<input
									className="mb-[.75rem] appearance-none block w-full bg-[#303c36] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
									id="lastName"
									type="text"
									name="lastName"
									value={formData.lastName}
									onChange={handleChange}
									placeholder="Last Name"
								/>
								{errors.lastName && (
									<p className="text-red-500 text-xs">
										{errors.lastName}
									</p>
								)}
							</div>
						</div>
						<div className="flex flex-wrap -mx-3 text-left">
							<div className="w-full px-3">
								<label
									className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2"
									htmlFor="email"
								></label>
								<input
									className="mb-[.75rem] appearance-none block w-full bg-[#303c36] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
									id="email"
									type="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									placeholder="Email"
								/>
								{errors.email && (
									<p className="text-red-500 text-xs">
										{errors.email}
									</p>
								)}
							</div>
						</div>
						<div className="flex flex-wrap -mx-3  text-left">
							<div className="w-full px-3 text-left">
								<label
									className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2"
									htmlFor="contactNumber"
								></label>
								<input
									className="appearance-none block w-full bg-[#303c36] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
									id="contactNumber"
									type="tel"
									name="contactNumber"
									value={formData.contactNumber}
									onChange={handleChange}
									placeholder="Contact Number"
								/>
								{errors.contactNumber && (
									<p className="text-red-500 text-xs mt-[1rem] ">
										{errors.contactNumber}
									</p>
								)}
							</div>
						</div>
						<div className="flex flex-wrap -mx-3  ">
							<div className="w-full px-3 text-left">
								<label
									className="block tracking-wide text-white text-lg font-medium mb-2 font-Acta"
									htmlFor="role"
								>
									I'm a
								</label>
								<div className="relative">
									<select
										className="block appearance-none w-full bg-[#303c36] text-gray-400 py-3 px-4 pr-8 rounded leading-tight focus:outline-none"
										id="role"
										name="role"
										value={formData.role}
										onChange={handleChange}
									>
										<option value="Borrower">
											Borrower
										</option>
										<option value="Broker">Broker</option>
										<option value="Investor">
											Investor
										</option>
									</select>
									<ArrowDropDownIcon
										className="absolute top-[25%] right-3 text-white"
										color="#FFFFFF"
									/>
								</div>
							</div>
						</div>
						<div className="flex flex-wrap">
							<div className="w-full text-left">
								<label
									className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2"
									htmlFor="message"
								></label>
								<textarea
									className="no-resize appearance-none block w-full bg-[#303c36] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
									id="message"
									name="message"
									rows="4"
									value={formData.message}
									onChange={handleChange}
									placeholder="Your message"
								></textarea>
								{errors.message && (
									<p className="text-red-500 text-xs mb-4">
										{errors.message}
									</p>
								)}
							</div>
						</div>
					</div>

					<div className="flex flex-wrap -mx-3">
						<div className="w-full px-3 text-left">
							<div className="flex items-center  mb-[1rem] text-left">
								<input
									id="privacyPolicy"
									name="privacyPolicy"
									type="checkbox"
									className="form-checkbox h-5 w-5 text-gray-600"
									checked={formData.privacyPolicy}
									onChange={handleChange}
								/>
								<label
									htmlFor="privacyPolicy"
									className="block ml-2 text-sm font-medium text-white"
								>
									I agree to the{" "}
									<a
										href="/privacy-policy"
										className="text-[#dce8dd] hover:underline"
									>
										Privacy Policy
									</a>
								</label>
							</div>
							{privacyError && (
								<p className="text-red-500 text-xs">
									{privacyError}
								</p>
							)}
						</div>
					</div>

					<button
						className="shadow bg-[#b2baaa] w-full mt-3 mb-6 focus:shadow-outline-purple focus:outline-none text-white font-bold py-3 px-4 rounded-md "
						type="submit"
					>
						Submit
					</button>
				</form>
			</div>
		</>
	);
}

export default ContactForm;
