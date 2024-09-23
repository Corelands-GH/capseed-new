import React from "react";
import ProductCard from "../../Components/common/productCard";
import ButtonGreen from "../../Components/common/button";
import { Link } from "react-router-dom";
import Navbar from "../../Components/NavbarMain";
import Guide from "../home/Guide";
import product1 from "../../assets/images/Home2.webp";
import product2 from "../../assets/images/HomeProduct2.webp";

const selectedCards = [
  {
    id: 1,
    title: "First Mortgage Loans",
    description:
      "A first mortgage is a type of loan where the property you are purchasing or using as security serves as collateral. This means the lender holds the title to the property as assurance for the loan. Because this type of mortgage has the highest claim on the property, it typically offers several advantages over second mortgages or caveats. <br /> <br/>Our first mortgage products are designed to be cost-effective, with competitive interest rates and favorable terms.The application process is streamlined, requiring minimal paperwork, which makes it easier for you to get approved.We prioritize fast processing times so you can secure your mortgage and proceed with your financial goals without unnecessary delays. <br /> <br/> In summary, a first mortgage is a highly advantageous option if you are looking for a cost-effective and efficient way to finance the purchase of a new property or access funds from an existing one. Its favourable interest rates, higher borrowing limits, and swift processing make it an excellent choice for various financial needs.",
    image: product1,
  },
  {
    id: 2,
    title: "Second Mortgage Loans",
    description:
      "A second mortgage is a type of loan that you can take out on a property that already has an existing primary mortgage. This additional loan is often used for specific purposes such as consolidating debt, or funding significant expenses.<br /> <br/> At Capseed, we offer a clear and straightforward process for obtaining a second mortgage. We ensure you understand all aspects of the loan, including terms and conditions.We pride ourselves on a fast and efficient service to meet your second mortgage needs, helping you access funds quickly and with minimal hassle.   <br /> <br/>Our approach is designed to make the process of securing a second mortgage as smooth and straightforward as possible. If you’re considering a second mortgage, Capseed provides a reliable and efficient option to help you achieve your financial goals. ",
    image: product2,
  },
];
function Borrow() {
  return (
    <div className="container mx-auto w-full overflow-hidden">
      <Navbar />

      <div className="borrowBanner container flex items-center justify-center lg:justify-normal overflow-hidden">
        <div className="flex flex-col items-center lg:justify-center lg:w-[50%] w-[90%] lg:items-start lg:ml-[6rem] text-center md:text-left text-white ">
          <h1 className="text-5xl sm:text-6xl pb-[2rem] ">
            Efficient, Adaptive Loans
          </h1>
          <p className="mb-10 sm:ml-0 text-sm sm:text-[20px] md:text-sm w-[70%] lg:text-justify">
            {/* Life's challenges can come without warning, and many are
						not equipped to respond swiftly at Capseed. We
						specialized in efficient and adaptive loan solution to
						help you navigate through situation */}
            At Capseed, we understand that each individual's or business’s
            circumstances are unique. That’s why we specialise in offering loan
            solutions that are both efficient and adaptable. Our goal is to
            provide tailored financial support that meets your specific needs
            and helps you manage any unforeseen challenges with
            confidence.Whether you're dealing with an emergency, planning a
            significant investment, or simply need to improve your financial
            stability, Capseed is here to support you through every step of the
            process.
          </p>
          <Link to="/contact">
            <ButtonGreen text="CONTACT US" background="#1D332D" width="13rem" />
          </Link>
        </div>
      </div>
      <div className="container bg-[#1D332D] flex flex-col md:flex-row gap-[2rem] md:gap-0 p-8 md:p-14 xl:p-20 2xl:p-28 xl:px-32 2xl:px-32  justify-between font-poppins overflow-hidden">
        <div className="flex flex-col justify-between gap-8 2xl:gap-32 md:w-1/3 text-center md:text-left">
          <div>
            <div className="text-3xl  text-white font-Acta">Borrow with</div>
            <img
              src={"/homeImages/Logo-19.png"}
              alt=""
              className="w-64 pt-[1rem] mx-auto md:mx-0"
            />
          </div>
          <div className="text-nowrap text-lg">
            <p className="mb-4 text-secondary">Loan amounts: $100K - $10M</p>
            <p className="mb-4 text-[#B3BAAA]">
              Terms: 3-36 months with an ability to extend.
            </p>
            <p className="mb-4 text-[#B3BAAA]">
              No doc loans with interest rates from 10.99%
            </p>
          </div>
        </div>

        <div className="text-lg md:pl-20 lg:pl-24 xl:pl-36 2xl:pl-60 text-[#fff] text-center md:text-left">
          <p className="text-[#a8b0a1] text-3xl font-Acta">
            Non-Bank industry's first choice in private lending.
          </p>

          <br />
          <p className="">
            At Capseed, we aim to create wealth opportunities by offering
            innovative financial solutions tailored to sophisticated, wholesale,
            and institutional investors. By capitalising on changing market
            conditions and exploring niche sectors often overlooked by larger
            fund managers, we seek to provide attractive investment
            opportunities with a strong focus on high returns, risk management,
            and effective exit strategies. Many of our investments are secured
            by real property assets, adding an extra layer of security.
          </p>
          <br />
          <p className="">
            We are committed to prioritising our investors' interests. We take
            substantial positions in each fund and, in some cases, assume
            first-loss risks to safeguard your investments. Our flexible
            investment approach is supported by well-defined policies and
            enhanced by both our in-house expertise and external advisors.
          </p>
          <br />
          <p className="">
            As a private lending group, Capseed also supports Australia's small
            businesses with competitive commercial finance options. We offer
            favourable terms and quick approvals, having provided over $100
            million in loans. We hold Australian Financial Services and Credit
            Licenses, ensuring that we operate with the highest standards of
            professionalism and compliance.
          </p>
        </div>
      </div>

      <div className=" mt-[3rem] ml-[9rem] mb-[4rem] text-center md:text-left"></div>
      <div className="justify-center gap-[1rem] flex flex-col items-center px-8 md:px-32 mb-16">
        <>
          <h1 className=" text-[40px] w-full text-left mb-[2rem] font-Acta">
            Our Products
          </h1>
          {selectedCards.map((card, index) => (
            <ProductCard
              key={card.id}
              cardproduct={card}
              index={index}
              width="100%"
              fontBold
              width1
              height
              reorder
              btnName
              padding
            />
          ))}
        </>
      </div>

      {/* <Cards /> */}
      <Guide />
    </div>
  );
}

export default Borrow;
