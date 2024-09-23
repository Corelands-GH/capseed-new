import React, { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";

function Footer({ headingText, homepage }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let isValid = true;

    if (!formData.firstName) {
      alert("First Name is required.");
      isValid = false;
    }

    if (!formData.lastName) {
      alert("Last Name is required.");
      isValid = false;
    }

    if (!formData.email) {
      alert("Email is required.");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const templateParams = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
      };

      emailjs
        .send(
          "service_9414jmo", // Replace with your emailjs service ID
          "template_ottfqjc", // Replace with your emailjs template ID
          templateParams,
          "nsoUfkG5dMoNH5WNk" // Replace with your emailjs user ID
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("Thank you for signing up! We'll keep you updated.");
            setFormData({
              firstName: "",
              lastName: "",
              email: "",
            });
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };
  return (
    <>
      <div className="container overflow-hidden bg-[#1D332D] md:px-20 flex flex-col items-center w-full p-5 pt-0">
        {/* <div className="bg-[#1D332D] flex flex-col md:flex-row gap-10 justify-center md:gap-40 py-14 items-center w-full">
					<h1 className="text-white text-[1.8rem] md:text-[35px] text-center md:text-left">
						When bank says No,{" "}
						<span className="text-secondary">
							Capseed Says Yes!
						</span>
					</h1>
				</div> */}
        {/* <span className="h-[1px] border-[0.5px] border-white w-full"></span> */}

        <div className="text-[#748368] p-0 lg:p-10 lg:pt-0 flex flex-col lg:flex-row lg:justify-between w-[100%]">
          <div className=" flex flex-col lg:flex-row lg:justify-between w-[100%] border-t-[0.5px] border-white lg:pt-10">
            <div className="flex flex-col gap-y-5 gap-x-10 mt-10">
              <div>
                <img
                  src={"/homeImages/Logo-19.png"}
                  alt=""
                  className="2xl:w-[240px] w-[260px] lg:w-[11.5rem] mb-4"
                />
              </div>
              <ul className="flex flex-col 2xl:text-justify text-[#b1b9a9] gap-6 text-[20px] w-[220px] h-full justify-between">
                <li>
                  <a href="/borrow">Borrow</a>
                </li>
                <li>
                  <a href="/invest">Invest</a>
                </li>
                <li>
                  <a href="/about-us">About Us</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
                <li>
                  <a href="/apply">Apply Now</a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col mt-8 leading-8 overflow-hidden">
              <h1 className="text-4xl mb-2 font-Acta">Contact us</h1>
              <ul className="flex flex-col text-[20px] w-[320px] mt-[1rem] ">
                <li className=" text-[0.3rem] xs:text-xl md:text-lg font-Acta ">
                  Head Office
                </li>
                <li className="2xl:text-[0.8rem] lg:text-[1rem] xs:text-xl md:text-xs text-[#9da2a1] mt-[1px] !leading-normal">
                  Suite 19A Ground Floor <br />{" "}
                  <span className="">75 Lorimer Street,</span> <br />{" "}
                  <span className="">Southbank VIC 3038</span>
                </li>
                <li className="2xl:text-[0.8rem] lg:text-[1rem] xs:text-xl md:text-xs text-[#9da2a1] mt-6">
                  9:00am-5:00pm
                </li>
                <li className="2xl:text-[0.8rem] lg:text-[1rem] xs:text-xl mt-[10px] md:text-xs text-[#9da2a1] mb-4 leading-normal">
                  Monday-Friday <br />{" "}
                  <p className="mt-[10px]">(E.S.T Australia)</p>
                </li>

                <li>
                  <span className=" text-[0.3rem] xs:text-xl md:text-lg text-[#758368] font-Acta">
                    Mail us
                  </span>
                  <br />
                  <a
                    href="mailto:support@capseed.com.au"
                    className="2xl:text-[0.8rem] lg:text-[1rem] xs:text-xl md:text-xs text-[#9da2a1] hover:underline"
                  >
                    support@capseed.com.au
                  </a>
                </li>
                <li>
                  <span className=" text-[0.3rem] xs:text-xl md:text-lg font-Acta">
                    Phone
                  </span>
                  <br />
                  <a
                    href="tel:+0426805278"
                    className=" text-[#9da2a1] lg:text-[1rem] xs:text-xl md:text-md"
                  >
                    +61 426 805 278
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col mt-4 lg:mt-6 2xl:mt-4 gap-y-5 gap-x-10 justify-between">
              <div>
                <h1 className="text-[30px] lg:text-[2rem] 2xl::text-[50px] mb-4 font-Acta">
                  Socials
                </h1>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/profile.php?id=61559601560822"
                    target="_blank"
                    className="border-[1px] border-gray-500 p-2 text-white"
                  >
                    <FacebookIcon fontSize="medium" />
                  </a>
                  <a
                    href="https://www.instagram.com/capseed_au/"
                    target="_blank"
                    className="border-[1px] border-gray-500 p-2 text-white"
                  >
                    <InstagramIcon
                      href="https://www.instagram.com/capseed_au/"
                      fontSize="medium"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/capseed/"
                    target="_blank"
                    className="border-[1px] border-gray-500 p-2 text-white"
                  >
                    <LinkedInIcon
                      href="https://www.linkedin.com/company/capseed/"
                      fontSize="medium"
                    />
                  </a>
                </div>
              </div>

              <div>
                <h1 className="text-[30px] lg:text-[2rem] 2xl::text-[50px] mb-4 font-Acta">
                  Stay updated
                </h1>

                <form onSubmit={handleSubmit} className="flex flex-col ">
                  <div className="flex flex-col md:flex-row gap-4 md:gap-0 ">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name *"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="bg-transparent !font-extralight border-gray-500 text-xl placeholder:text-xl placeholder:text-[#c7c9c8] border-[1px] p-6 lg:w-[10rem]  2xl:w-[270px]"
                    />

                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name *"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="bg-transparent !font-extralight text-xl border-gray-500 placeholder:text-xl placeholder:text-[#c7c9c8] border-[1px] p-6 lg:w-[10rem]  2xl:w-[270px]"
                    />
                  </div>
                  <div className=" flex flex-col md:flex-row  pt-4 md:py-0 gap-4 md:gap-0 ">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address*"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-transparent !font-extralight text-xl placeholder:text-xl placeholder:text-[#c7c9c8] border-[1px] border-gray-500 p-6 md:w-[16.6rem] lg:w-[12rem] 2xl:w-[22rem]"
                    />

                    <button
                      type="submit"
                      className="p-4 text-xl border-[1px] md:w-[11rem] lg:w-[8rem]  2xl:w-[11.7rem] bg-[#b3bbab] text-[#273a35]"
                    >
                      Sign up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* white footer */}
      <div
        className={`container w-full flex flex-col md:flex-row gap-[1rem] bg-white justify-center md:justify-between px-[7rem] py-[3rem] items-center `}
      >
        <div className="text-center md:text-justify pb-[1rem] md:pb-0 text-[#35443d]">
          <p className="mb-6">
            © 2024 Capseed Investments Pty Ltd. All rights reserved.
          </p>
          <p className="mb-2">
            <Link to="/privacy-policy">
              <span>Privacy Policy</span>
            </Link>
            <span>
              <Link className="ml-2" to="/terms-and-conditions">
                {" "}
                Terms & Conditions
              </Link>
            </span>
          </p>
          <a
            href="https://corelands.com.au/coming-soon/"
            target="_blank"
            className="scale-50"
          >
            Website by{" "}
            <span className="font-semibold  text-[#101f1a] font-poppins">
              STUDIO CORELANDS
            </span>
          </a>
        </div>
        <div>
          <img
            src={"/homeImages/Logo-18.png"}
            alt=""
            className="w-[18.75rem]"
          />
        </div>
      </div>
    </>
  );
}

export default Footer;
