import React from "react";
import img from "../aboutImages/Logo-19.png";

function WelcomeSection() {
  return (
    <div className="container bg-[#1D332D] flex flex-col md:flex-row gap-[2rem] md:gap-0 md:px-[6rem] py-[6rem] px-8 justify-between font-poppins overflow-hidden">
      <div className="flex flex-col justify-between gap-8 2xl:gap-32 md:w-[30%] text-center md:text-left">
        <div>
          <div className="text-3xl text-white font-Acta">Welcome to</div>
          <img
            src={"/homeImages/Logo-19.png"}
            alt=""
            className="w-64 pt-[1rem] mx-auto md:mx-0"
          />
        </div>
        <div className="">
          <p className="text-secondary text-lg">
            At Capseed, we offer tailored financial solutions for both
            businesses and individuals. As private lenders, we provide
            competitive rates and expert guidance.
          </p>
        </div>
      </div>

      <div className="text-lg text-[#FFF] text-center flex flex-col justify-between md:text-left md:w-[60%]">
        <p className="text-[#a8b0a1] text-3xl font-Acta">
          Private Lending for Business
        </p>

        <br />
        <br />
        <div>
          <p className="">
            Capseed Investments Pty Ltd operates within the relevant regulatory
            frameworks and is a proud member of the Australian Financial
            Complaints Authority (AFCA).
          </p>
          <br />
          <p className="">Our membership number is 106928 </p>
          <br />
          <p className="">
            This membership highlights our dedication to delivering top-notch
            service and maintaining the highest level of professionalism. It
            also guarantees that we follow industry best practices and comply
            rigorously with regulatory standards.
          </p>
        </div>
      </div>
    </div>
  );
}

// export default WelcomeSection;
// import React from "react";
// import img from "../aboutImages/Logo-19.png";

// function WelcomeSection() {
// 	return (
// <div className="container flex flex-col md:flex-row items-center md:items-start md:justify-between overflow-hidden gap-[3rem] md:gap-0 px-[3rem] md:px-[6rem] py-[6rem] bg-[#1D332D] text-white h-full">
// 			<div className="flex flex-col justify-between md:w-[30%] flex-1">
// 				<div className="flex flex-col gap-[.5rem]">
// 					<h2 className="lg:text-[2.5rem] text-[2rem]">Welcome to</h2>
// 					<img
// 						src={img}
// 						className="md:w-[17rem] md:h-[2rem] w-[14rem] h-[1.5rem]"
// 						alt=""
// 					/>
// 				</div>
// 				<div>
// 					<p className="text-justify text-[#aab1a3] font-Acta">
// 						At Capseed, we offer customized financial solutions for
// 						businesses and individuals. As private lenders, we
// 						provide competitive rates and expert guidance.
// 					</p>
// 				</div>
// 			</div>
// 			<div className="flex flex-col gap-[1rem] md:w-[60%] flex-1">
// 				<h2 className="md:text-[2.5rem] text-[2rem] text-[#b3baaa]">
// 					Private Lending for Business
// 				</h2>
// 				<p className="text-justify font-Acta text-[#fcfcfc]">
// 					The Capseed Investments Pty Ltd operates under the
// 					appropriate and regulatory frameworks and a member of the
// 					Australian Financial Complaints Authority (AFCA), to ensure
// 					the highest standards of service and to offer our clients.{" "}
// 					<br />
// 					<br />
// 					Member Number: 106928
// 					<br />
// 					<br />
// 					This Membership number signifies our adherence to Australian
// 					Financial Complaints Authority, ensuring that we meet the
// 					industry's best practices and maintain the highest level of
// 					professionalism and compliance.
// 				</p>
// 			</div>
// 		</div>
// 	);
// }

export default WelcomeSection;
