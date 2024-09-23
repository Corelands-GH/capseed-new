import React from "react";
import "../../../../src/App.css";
import img from "../contactImages/Logo-19.png";

function ContactBanner() {
  return (
    <div className="relative container">
      <div className="container w-full max-h-[800px] contactBanner max-w-full m-0 p-0 flex items-center justify-center lg:justify-center z-50 overflow-hidden">
        <div className="container text-white  flex flex-col gap-[.5rem] z-30 items-center md:items-center">
          <h1 className="text-[2.8rem] text-center lg:text-justify mb-8 ">
            CONTACT US
          </h1>
          <p className="text-[40px] flex flex-col text-center lg:text-justify font-Acta font-extralight leading-[normal]">
            <span> Here to help</span> <span>Chat with us</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactBanner;
