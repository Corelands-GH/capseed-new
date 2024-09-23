import React from "react";
import "../../../../src/App.css";
import img from "../aboutImages/Logo-19.png";

function AboutBanner() {
  return (
    <div className="container aboutBanner flex items-center justify-center lg:justify-center overflow-hidden bg-blend-overlay bg-gray-700">
      <div className="flex flex-col gap-[.5rem] items-center lg:items-start">
        <h1 className="text-[30px] text-center md:text-justify  md:text-[50px] md:tracking-[.4rem] font-poppins text-white">
          ABOUT US
        </h1>
      </div>
    </div>
  );
}

export default AboutBanner;
