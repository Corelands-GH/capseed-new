import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../src/App.css";
import homeVideo from "../../assets/video/bannerVid.webm";

function Homebanner() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const videoElement = document.createElement("video");
    videoElement.src = homeVideo;
    videoElement.onloadeddata = () => {
      setIsVideoLoaded(true);
    };
    videoElement.onerror = () => {
      console.error("Error loading video");
    };
  }, []);

  return (
    <div className="no-scrollbar flex flex-col items-center justify-center text-white font-poppins bg-cover h-[70vh] lg:h-screen max-h-[1400px] w-full bg-top relative">
      <div
        className={`container homebanner overflow-hidden flex flex-col items-center justify-center text-white font-poppins bg-cover h-[70vh] lg:h-screen w-full bg-top relative ${
          isVideoLoaded ? "video-loaded" : ""
        }`}
        style={{
          backgroundImage: isVideoLoaded
            ? "none"
            : 'linear-gradient(rgba(0, 0, 0, 0.356), rgba(0, 0, 0, 0.311)), url("./assets/images/HomeBanner.webp")',
        }}
      >
        {isVideoLoaded && (
          <>
            <video
              autoPlay
              loop
              muted
              className="absolute inset-0 object-cover w-full h-full"
              style={{ zIndex: -2 }}
            >
              <source src={homeVideo} type="video/webm" />
              Your browser does not support the video tag.
            </video>
            <div
              className="absolute inset-0 bg-black opacity-35"
              style={{ zIndex: -1 }}
            ></div>
          </>
        )}
        <div className="md:w-[30%] w-[80%] md:mr-[27rem] md:mt-0 mt-[4rem] text-center md:text-left relative">
          <h1 className="text-[25px] md:text-[50px] text-center md:text-left tracking-wide font-semibold drop-shadow-2xl">
            FUNDING YOUR FUTURE
          </h1>
          <p className="md:text-[16px] md:text-justify text-[16px] md:pr-[6rem] mb-10 text-justify">
            We tailor flexible lending solutions to meet your unique financial
            needs, ensuring a personalised experience.
          </p>
          <Link to="/contact">
            <button className="p-2 md:w-[220px] w-[180px] text-[20px] items-center rounded-lg bg-[#1D332D]">
              ENQUIRE NOW
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Homebanner;
