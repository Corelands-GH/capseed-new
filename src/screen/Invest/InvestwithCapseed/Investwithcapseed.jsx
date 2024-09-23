import React from "react";
import img from "../investImages/Logo-19.png";
// import '../../../src/App.css'

function Investwithcapseed() {
  return (
    <>
      <div className="bg-[#1d332d] flex flex-col lg:flex-row lg:justify-between  px-[2rem] md:px-[6rem] py-[4rem] md:py-[8rem] gap-[4rem] lg:gap-0  text-white lg:text-justify overflow-hidden">
        <div className="lg:w-[40%] flex flex-col  items-center lg:items-start justify-between text-center lg:text-justify">
          <div className="flex flex-col items-center lg:block mb-5">
            <h1 className="text-4xl font-Acta mb-3">Invest with</h1>
            <img src={img} alt="" className="w-2/5" />
          </div>
          <p className="text-lg sm:w-[60%] text-secondary">
            Capseed provides customized alternative funding solutions for
            Australian SMEs and exclusive real estate-backed investment
            opportunities for sophisticated investors, ensuring personalized,
            secure, and well-informed financial decisions.
          </p>
        </div>
        <div className="lg:w-[60%] flex flex-col  items-center lg:items-start text-center lg:text-justify">
          <h1 className="text-3xl mb-7 text-secondary font-Acta">
            Customize your portfolio to fit your needs
          </h1>
          <p className=" text-lg mb-5">
            At Capseed, we specialise in providing alternative funding solutions
            uniquely tailored to the needs of SME clients across Australia. Our
            portfolio includes three secured loan options, each designed to
            accommodate different risk profiles and financial goals.
          </p>
          <p className=" text-lg mb-5">
            For discerning investors, we offer exclusive opportunities to invest
            directly in real estate-backed transactions with conservative
            loan-to-value ratios. These investments are categorized as
            unregulated loans under the National Consumer Credit Protection Act,
            ensuring they are used predominantly for business and investment
            purposes.
          </p>
          <p className=" text-lg">
            We provide comprehensive information on each loan, empowering you to
            make informed decisions and tailor your investment portfolio to suit
            your individual preferences.
          </p>
        </div>
      </div>
    </>
  );
}

export default Investwithcapseed;
