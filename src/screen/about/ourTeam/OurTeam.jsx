import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import img1 from "../../../assets/images/AboutUs/deepti.jpg";
import huzi from "../../../assets/images/AboutUs/huzi.jpg";
import img2 from "../../../assets/images/AboutUs/john.webp";
import img4 from "../../../assets/images/AboutUs/susmanew.jpg";
import img6 from "../../../assets/images/AboutUs/nicole.webp";
import bell from "../../../assets/images/AboutUs/bell.jpg";
import TeamModal from "../TeamModal";

const leaders = [
  {
    name: "Deepti Alurkkar",
    title: "CHIEF OPERATING OFFICER",
    details:
      "Deepti brings over 15 years of industry experience and a keen eye for operational excellence. Her leadership and strategic vision ensure that our processes run smoothly and efficiently. Deepti is dedicated to fostering a collaborative environment and driving our team towards success. With her extensive knowledge and commitment to innovation, Deepti plays a pivotal role in delivering exceptional service to our clients.",
    email: "EMAIL DEEPTI",
    tel: "0425140718",
    image: img1,
    linkedin: "https://www.linkedin.com/in/deeptialurkar/",
  },
  {
    name: "Huzi Bagasrawala",
    title: "CO-FOUNDER & CEO",
    details:
      "Huzi has 18 years of experience in the financial services sector. He specializes in lending and  commercial business strategy. Well-respected and recognized within the private lending space, he has built a strong reputation among the community.",
    email: "EMAIL Huzi",
    emailTo: "info@capseed.com.au",
    tel: "0411 435 896",
    image: huzi,
    linkedin: "https://www.linkedin.com/in/huzibagasrawala/",
  },
];

const teamMembers = [
  {
    name: "John Ristevski",
    title: "NATIONAL SALES MANAGER",
    details:
      "John has been involved in the financial services industry since 2010. With more than 15 years of experience, he has emerged as a leader in sales and business development across various industries.",
    email: "EMAIL JOHN",
    tel: "0433418982",
    image: img2,
    linkedin: "https://www.linkedin.com/in/john-ristevski-47bb5929/",
  },
  {
    name: "Sushma Krishnan",
    title: "SR. BUSINESS DEVELOPMENT MANAGER",
    details:
      "Sushma has over nine years of dedicated industry experience. Sushma is  dynamic and client-focused. She specializes in identifying the ideal financial products tailored to clients' needs. Bringing extensive knowledge beyond residential property lending but also in commercial space.",
    email: "EMAIL SUSHMA",
    tel: "0452100851",
    image: img4,
    linkedin: "https://www.linkedin.com/in/sushmakrishnan/",
  },
  {
    name: "Nicole Narciso",
    title: "OPERATIONS MANAGER",
    email: "EMAIL Nicole",
    details:
      "Nicole started her career in 2016 across various industries and has made a successful transition to the finance sector. Nicole brings a wealth of experience and dedication to her role, ensuring our operations run smoothly and efficiently.",

    // tel: "0425140718",
    image: img6,
    linkedin: "https://www.linkedin.com/in/shaira-nicole-narciso-665822222/",
  },
  // {
  // 	name: "Bell Silagpo",
  // 	title: "BROKER SUPPORT OFFICER",
  // 	email: "EMAIL JO BAMBA",
  // 	emailTo: "support@capseed.com.au",
  // 	tel: "0425140718",
  // 	image: bell,
  // },
];

function OurTeam() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({});

  const handleToggle = (member) => {
    setShow(!show);
    setData(member);
  };

  return (
    <div className="container overflow-hidden">
      <div className="md:p-[6rem] p-[3rem] flex flex-col md:flex-row items-center md:items-start gap-[1rem] md:gap-0 justify-between bg-[#F4F4F4]">
        <p className="md:w-[40%] tracking-[.2rem] font-medium mt-2 text-[1.5rem]">
          MEET OUR TEAM
        </p>
        <h2 className="text-[1.5rem] text-center md:text-justify md:text-[2rem] md:w-[61%] ">
          Meet our team of exceptional leaders and professionals
        </h2>
      </div>

      <div className=" mx-auto md:p-[6rem] flex flex-col lg:flex-row justify-between items-center">
        <div className="flex flex-col md:w-[40%] mt-[9.6rem]">
          <h2 className="text-2xl font-light font-poppins text-center md:text-left">
            OUR TEAM
          </h2>
          <hr className="h-px border-[0.5px] border-[#B3BAAA] lg:w-3/4 mt-[1rem] mb-8 md:mb-0" />
        </div>
        <div className="flex flex-col md:flex-row md:gap-[3rem] gap-[3rem] items-center md:items-start md:w-[61%] justify-start">
          <div className="md:w-[8rem] relative"></div>
          {leaders.map((member) => (
            <div key={member.name} className="md:w-[17rem] relative">
              <button onClick={() => handleToggle(member)} className="relative">
                <a href={member?.linkedin} target="_blank">
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    size="2x"
                    // onClick={() => handleToggle(member)}
                    className="absolute bottom-3 right-5 text-white cursor-pointer"
                  />
                </a>
                <img
                  src={member.image}
                  alt={member.name}
                  className="md:w-[17rem] w-[16rem] rounded"
                />
              </button>
              <h3 className="text-2xl font-medium mt-4 font-Acta">
                {member.name}
              </h3>
              <p className="text-[.7rem] mt-2 text-[#565e5b] font-light">
                {member.title}
              </p>
              <p className="mt-4 text-[.6rem]">
                <a href={`mailto:${member.email}`} className="text-[#7c8971]">
                  {member.email} <span className="pl-[.7rem]">⟶</span>
                </a>
              </p>
              {member.tel && (
                <p className="mt-2 text-[.6rem]">
                  <a href={`tel:${member.tel}`} className="text-[#7c8971]">
                    TEL: <span className="pl-[.2rem]">{member.tel}</span>{" "}
                    <span className="pl-[.6rem]">⟶</span>
                  </a>
                </p>
              )}
            </div>
          ))}
          <div className="md:w-[8rem] relative"></div>
        </div>
      </div>
      <div className=" mx-auto md:px-[6rem] md:pb-[6rem] flex flex-col lg:flex-row justify-between items-center">
        <div className="flex flex-col md:w-[40%] mt-[9.6rem]">
          <hr className="h-px border-[1.5px] border-transparent lg:w-3/4 mt-[1rem]" />
        </div>
        <div className="flex flex-col md:flex-row mb-4 md:gap-[3rem] gap-[3rem] items-center md:items-start md:w-[61%] justify-start">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="md:w-[17rem] relative cursor-pointer"
              onClick={() => handleToggle(member)}
            >
              <div className="relative">
                <a href={member?.linkedin} target="_blank">
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    size="2x"
                    href="https://www.linkedin.com/in/john-ristevski-47bb5929/"
                    className="absolute bottom-5 right-5 z-50 text-white cursor-pointer"
                  />
                </a>
                <img
                  src={member.image}
                  alt={member.name}
                  className="md:w-[17rem] w-[16rem] rounded"
                />
              </div>

              <h3 className="text-2xl font-medium mt-4 font-Acta">
                {member.name}
              </h3>
              <p className="text-[.7rem] mt-2 text-[#565e5b] font-light">
                {member.title}
              </p>
              <p className="mt-4 text-[.6rem]">
                <a href={`mailto:${member.email}`} className="text-[#7c8971]">
                  {member.email} <span className="pl-[.7rem]">⟶</span>
                </a>
              </p>
              {member.tel && (
                <p className="mt-2 text-[.6rem]">
                  <a href={`tel:${member.tel}`} className="text-[#7c8971]">
                    TEL: <span className="pl-[.2rem]">{member.tel}</span>{" "}
                    <span className="pl-[.6rem]">⟶</span>
                  </a>
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <TeamModal open={show} setOpen={setShow} data={data} />
    </div>
  );
}

export default OurTeam;
