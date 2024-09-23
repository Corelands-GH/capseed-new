import React from "react";
// import Image from "./image/mapbanner.png"

const Map = () => {
	return (
		<div className="container w-full h-[45rem] overflow-hidden">
			<div className="lg:flex w-[100%] h-[45rem] mx-auto justify-between">
				{/* <img 
                src={Image}
                alt="" className='lg:w-[45%] w-[100%] px-3 mx-auto'
                width={10}
                height={10}
                sizes='100vw' /> */}
				<div className="lg:w-[100%]  sm:py-0  mt-[30px] lg:mt-[0px] w-[100%]   mx-auto ">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.4972910244405!2d144.93882628461617!3d-37.82524239970619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad667f5edfe676b%3A0x77e9168ee8362aab!2s75%20Lorimer%20St%2C%20Docklands%20VIC%203008%2C%20Australia!5e0!3m2!1sen!2sin!4v1724079038844!5m2!1sen!2sin"
						className="w-[100%]  lg:h-[100%] h-[45rem] md:h-[500px]"
						style={{ border: 0 }}
						allowFullScreen=""
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
					{/* <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113883.39422423101!2d75.792384!3d26.8763136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db699af2ea7af%3A0x7d979cd62bdc8058!2sBirla%20Mandir%2C%20Jaipur!5e0!3m2!1sen!2sin!4v1697651180444!5m2!1sen!2sin"
                        className='w-[100%]  lg:h-[100%] h-[45rem] md:h-[500px]'
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe> */}
				</div>
			</div>
		</div>
	);
};

export default Map;
