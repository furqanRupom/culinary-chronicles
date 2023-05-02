import React, { useContext } from "react";
import "./Home.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { ChefContext } from "../../../Providers/AuthProviders";
const Home = () => {
  const { toggle } = useContext(ChefContext);
  return (
    <div
      className={
        toggle
          ? "relative bg-cover   md:h-screen  font-Nunito bg-image bg-right px-4 sm:px-10 lg:p-20 -z-30"
          : "relative bg-cover font-Nunito bg-image bg-right px-4 sm:h-[400px] md:h-[600px] lg:h-screen  sm:px-10 lg:p-20 z-30"
      }
    >
      <div className="absolute inset-0 bg-black opacity-5"></div>
      <div className="container mx-auto md:px-4 py-10 sm:py-36 md:py-40 lg:py-32">
        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-black mb-4">
          Culinary Chronicles
        </h1>
        <p className="leading-relaxed text-xs md:text-2xl lg:text-3xl text-black mb-4 lg:mb-8">
          Experience the best in fine dining <br /> with our award-winning
          cuisine
        </p>
        <button className=" text-center flex items-center text-lg text-md sm:text-xl lg:text-2xl space-x-1 justify-center   bg-red-400  rounded-full px-6 sm:px-8 py-2 group relative text-white z-30">
          <h2 className="font-semibold">Get Started</h2>
          <div className="-translate-x-1 absolute right-2 sm:right-4 lg:right-2 text-transparent group-hover:text-white group-hover:translate-x-0 duration-300">
            <MdKeyboardArrowRight />
          </div>
        </button>
      </div>
      <div className="absolute inset-0"></div>
    </div>
  );
};

export default Home;
