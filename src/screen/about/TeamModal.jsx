import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import CloseIcon from "@mui/icons-material/Close";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	boxShadow: 24,
	p: 2,
};

export default function BasicModal({ open, setOpen, data }) {
	const handleClose = () => setOpen(false);

	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby="modal-title"
			aria-describedby="modal-description"
		>
			<Box
				sx={style}
				className="bg-white md:w-[60vw] sm:w-[80vw] w-[95vw] md:min-h-[50vh] min-h-[60vh] max-h-[90vh] rounded-lg flex md:items-center !outline-none overflow-y-auto"
			>
				<button
					onClick={handleClose}
					className="absolute text-2xl right-3 top-3 px-1 text-white bg-primary rounded-full scale-75 z-[200]"
				>
					<CloseIcon />
				</button>
				<div className="relative flex flex-col md:flex-row justify-around md:gap-8 gap-4 md:items-center mt-10 md:mt-0">
					<div className="relative flex-shrink-0 md:w-1/2 w-full">
						<a href={data?.linkedin} target="_blank">
							<FontAwesomeIcon
								icon={faLinkedinIn}
								size="2x"
								className="absolute bottom-3 right-6 text-white cursor-pointer"
							/>
						</a>
						<img
							src={data?.image}
							alt={data?.name}
							className="w-full h-auto object-cover rounded-lg"
						/>
					</div>
					<div className="flex flex-col justify-center md:w-2/3 w-full p-4 ">
						<h3 className="md:text-4xl text-xl font-medium mt-4 text-[#111E1A] mb-2">
							{data?.name}
						</h3>
						<p className="mt-2 md:text-2xl text-md text-[#565e5b] md:mb-8 mb-2">
							{data?.title}
						</p>
						<p className="mt-4 md:text-xl text-md">
							<a
								href={`mailto:${data?.email}`}
								className="text-brand"
							>
								{data?.email}{" "}
								<span className="pl-[.7rem]">⟶</span>
							</a>
						</p>

						{data?.tel && (
							<p className="mt-2 md:text-xl text-md">
								<a
									href={`tel:${data?.tel}`}
									className="text-brand"
								>
									TEL:{" "}
									<span className="pl-[.2rem]">
										{data?.tel}
									</span>{" "}
									<span className="pl-[.6rem]">⟶</span>
								</a>
							</p>
						)}
						<p className="md:mt-8 mt-4 text-sm text-justify mb-8 md:mb-0">
							{data.details}
						</p>
					</div>
				</div>
			</Box>
		</Modal>
	);
}
