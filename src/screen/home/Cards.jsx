import React from "react";
import product1 from "../../assets/images/Home2.webp";
import product2 from "../../assets/images/HomeProduct2.webp";

function Cards() {
  return (
    <div className="overflow-hidden container  bg-[#f2f2f2] md:px-20 md:py-20 py-4 font-poppins mb-10 ">
      <div className="flex flex-wrap justify-center md:justify-evenly gap-8 w-full">
        <div className="rounded-lg border border-gray-300 p-6 w-full sm:w-[20rem] md:w-[28.125rem] lg:w-[46%] bg-white mb-4 text-center flex flex-col gap-6 shadow-lg shadow-gray-400 py-10 mx-4">
          <div className="">
            <img
              src={product1}
              alt={""}
              className="w-full h-[18.75rem] px-2 sm:h-[15rem] md:h-[18rem] xl:h-[25rem] object-cover "
            />
          </div>
          <div className="flex flex-col gap-6 py-3 mb-12 text-center items-center">
            <h1 className="text-4xl text-center mb-4 text-[#384440] font-Acta font-semibold">
              First Mortgage
            </h1>
            <p className="md:px-10 sm:px-4 text-[#37423f] pb-8 text-center text-[16px] md:w-3/4">
              Our First Mortgage loan options offer affordability with minimal
              paperwork and prompt processing. Benefit from competitive interest
              rates and secure funding against your property.
            </p>
          </div>
          <div>
            <a href="/borrow">
              <button className="p-4 px-8 mb-6 text-lg items-center text-[#384440] rounded-lg bg-[#B3BAAA]">
                LEARN MORE
              </button>
            </a>
          </div>
        </div>
        <div className="rounded-lg border border-gray-300 p-6 w-full sm:w-[20rem] md:w-[28.125rem] lg:w-[46%] bg-white mb-4 text-center flex flex-col gap-6 shadow-lg shadow-gray-400 py-10 mx-4">
          <div className="">
            <img
              src={product2}
              alt={""}
              className="w-full h-[18.75rem] px-2 sm:h-[15rem] md:h-[18rem] xl:h-[25rem] object-cover "
            />
          </div>
          <div className="flex flex-col gap-6 py-3 mb-12 text-center items-center">
            <h1 className="text-4xl text-center mb-4 text-[#384440] font-Acta font-semibold">
              Second Mortgage
            </h1>
            <p className="md:px-10 sm:px-4 text-[#37423f] pb-8 text-center text-[16px] md:w-3/4">
              At Capseed, we offer a straightforward and efficient process
              designed to address your second mortgage needs effectively. Our
              approach ensures that obtaining additional short-term financing
              against your property is seamless and uncomplicated.We provide
              clear information about the terms and conditions of the second
              mortgage, ensuring that you fully understand the financial
              commitments and benefits involved.
            </p>
          </div>
          <div>
            <a href="/borrow">
              <button className="p-4 px-8 mb-6 text-lg items-center text-[#384440] rounded-lg bg-[#B3BAAA]">
                LEARN MORE
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;

{
  /* <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-[1rem]">
        <div className=' rounded-sm p-6 md:w-[28.125rem] border-2 border-red-500 bg-white md:my-10 md:mx-0  xl:mx-10 text-center flex flex-col gap-6 shadow-lg shadow-gray-400'>
          <div className=''>
            <img src={img} alt="" className='w-[25rem] h-[18.75] md:h-[18rem] xl:h-[25rem]' />
          </div>
          <div className='flex flex-col gap-6'>
            <h1 className='xl:text-[28px] md:text-[1.5rem] text-center text-[#384440] font-Acta'>Fisrt Mortgage Loans</h1>
            <p className='md:px-10 text-[#37423f]'>Avial low interest Funding against your Property</p>
          </div>
          <div>
            <button className='p-4 w-[180px] items-center text-[#384440] rounded-lg bg-[#B3BAAA]'>LEARN MORE</button>
          </div>
        </div>

        <div className='rounded-sm p-6 md:w-[450px] bg-white md:my-10 md:mx-0  xl:mx-10 text-center flex flex-col gap-6 shadow-lg shadow-gray-400'>
          <div className=''>
            <img src={img2} alt="" className='w-[25rem] h-[18.75] md:h-[18rem] xl:h-[25rem]' />
          </div>
          <div className='flex flex-col gap-6'>
            <h1 className='xl:text-[28px] md:text-[1.5rem] text-center text-[#384440]  font-Acta'>Second Mortgage Loans</h1>
            <p className='md:px-10 text-[#37423f]'>Avial low interest Funding against your Property</p>
          </div>
          <div>
            <button className='p-4 w-[180px] items-center text-[#384440] rounded-lg bg-[#B3BAAA]'>LEARN MORE</button>
          </div>
        </div>

        <div className='rounded-sm p-6 md:w-[450px] bg-white md:my-10 md:mx-0  xl:mx-10 text-center flex flex-col gap-6 shadow-lg shadow-gray-400'>
          <div className=''>
            <img src={img3} alt="" className='w-[25rem] h-[18.75] md:h-[18rem] xl:h-[25rem]' />
          </div>
          <div className='flex flex-col gap-6'>
            <h1 className='xl:text-[28px] md:text-[1.5rem] text-center font-Acta flex flex-col lg:flex-row justify-center'><span className='pr-2 text-[#384440]' >Bridge </span> <span>Loans</span> </h1>
            <p className='md:px-10 text-[#37423f]'>Avial low interest Funding against your Property</p>
          </div>
          <div>
            <button className='p-4 w-[180px] items-center text-[#384440] rounded-lg bg-[#B3BAAA]'>LEARN MORE</button>
          </div>
        </div>

      </div>
      
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-6 mt-[3rem]">
        <div className='rounded-sm flex flex-col md:flex-row p-6  md:w-[39.0625rem] md:h-[400px] items-center bg-white  md:gap-10 shadow-lg shadow-gray-400'>
          <div className=''>
            <img src="https://images.unsplash.com/photo-1641326201918-3cafc641038e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" alt="" className='w-[400px] md:w-[350px] h-[300px] md:h-[350px]' />
          </div>
          <div className='rounded-sm flex flex-col justify-between items-center gap-4'>
            <h1 className='text-[22px] md:text-[30px] text-center flex gap-[10px] mt-10 font-Acta'><span>Caveat</span> <span>Loans</span></h1>
            <p className='text-center  w-[300px] md:w-[230px] text-[#37423f]'>Quick, Short-Term Financing For Real Estate Development</p>
            <button className='p-4 w-[180px] items-center text-[#384440] rounded-lg bg-[#B3BAAA]'>LEARN MORE</button>
          </div>
        </div>

        <div className=' flex flex-col md:flex-row p-6  md:w-[625px] md:h-[400px] items-center bg-white md:gap-6 shadow-lg shadow-gray-400'>
          <div className=''>
            <img src={img5} alt="" className='w-[350px] md:w-[350px] h-[300px] md:h-[350px]' />
          </div>
          <div className='flex flex-col justify-between items-center gap-4'>
            <h1 className='text-[22px] md:text-[30px] text-center flex md:flex-col flex-row  mt-10 font-Acta gap-[10px]'><span>Commercial</span> <span>Property</span> <span>Finance</span></h1>
            <p className='text-center w-[300px] md:w-[200px] text-[#37423f] '>Loans For Buying Retail Spaces, offices & other Commercial Properties</p>
            <button className='p-4 w-[180px] items-center text-[#384440] rounded-lg bg-[#B3BAAA]'>LEARN MORE</button>
          </div>
        </div>

      </div> */
}
