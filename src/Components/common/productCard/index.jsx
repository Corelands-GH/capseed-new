import React from "react";
import { Link } from "react-router-dom";

function formatDescription(description) {
	const words = description.split(" ");
	let formattedDescription = "";
	for (let i = 0; i < words.length; i++) {
		formattedDescription += words[i] + " ";
		if ((i + 1) % 45 === 0) {
			// Adjust the number to fit approximately three lines
			formattedDescription += "<br/><br/>"; // Two line breaks for a space
		}
	}
	return formattedDescription.trim();
}

function ProductCard({
	cardproduct,
	index,
	width,
	fontBold,
	width1,
	height,
	reorder,
	btnName,
	padding,
}) {
	const isReversed = index === 1; // Reverse layout for the second card (index 1)
	// const formattedDescription = formatDescription(cardproduct.description);
	const formattedDescription = cardproduct?.description;

	return (
		<div
			key={cardproduct.id}
			className={`shadow-lg rounded-sm p-6 w-full sm:w-[96%] md:w-[100%] lg:w-[100%] xl:w-[48%] bg-white mb-4 md:flex ${
				isReversed ? "md:flex-row-reverse" : "md:flex-row"
			} text-center md:text-left md:gap-4 shadow-lg shadow-gray-400`}
			style={{ width: width }}
		>
			<div
				className={`flex-shrink-0 overflow-hidden max-w-[600px] w-full ${
					width1 ? "md:w-[50%]" : "md:w-[55%]"
				}`}
			>
				<img
					src={cardproduct.image}
					alt={cardproduct.title}
					className={`w-full h-full object-cover ${
						height ? "xl:h-[35rem]" : "h-[18.75rem]"
					}`}
				/>
			</div>
			<div
				className={`${
					isReversed ? "md:items-start" : "md:items-end"
				} flex flex-col md:justify-between justify-center items-center px-4 md:pt-4 pt-0 text-center md:text-left gap-4`}
			>
				{reorder ? (
					<>
						<p
							className={`md:px-0 sm:px-4 font-light mt-4 md:mt-0 text-[16px] 2xl:!text-[19px] text-[#37423f] ${
								fontBold ? "font-medium" : "font-normal"
							}`}
							dangerouslySetInnerHTML={{
								__html: formattedDescription,
							}}
						></p>

						<h1 className="md:text-end xl:text-[32px] md:text-[2rem] sm:text-[1.2rem] text-2xl text-[#384440] font-medium my-4 md:my-0 font-Acta">
							{cardproduct.title}
						</h1>
					</>
				) : (
					<>
						<h1 className="xl:text-[28px] md:text-[1.5rem] sm:text-[1.2rem] md:text-center text-start text-[#384440]">
							{cardproduct.title}
						</h1>
						<p
							className={`md:px-0 sm:px-4 text-[#37423f] ${
								fontBold ? "font-bold" : "font-normal"
							}`}
							dangerouslySetInnerHTML={{
								__html: formattedDescription,
							}}
						></p>
						<Link to="/contact">
							<button
								className={`${
									padding ? "px-8" : "px-0"
								} p-4 items-center text-[#384440] rounded-lg bg-[#B3BAAA]`}
							>
								LEARN MORE
							</button>
						</Link>
					</>
				)}
			</div>
		</div>
	);
}

export default ProductCard;
