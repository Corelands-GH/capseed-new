import React from "react";

function ButtonGreen({ text, background, width,color }) {
  return (
    <div
      className={`p-[1rem] rounded-md text-center ${width ? `w-[${width}]` : 'w-[13rem]'} bg-[${background}]`}
    >
      <h1 className={`text-[18px] ${color ? 'text-black' : 'text-white'}`}>
        {text}
      </h1>
    </div>
  );
}

export default ButtonGreen;

