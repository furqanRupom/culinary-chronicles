import React, { useContext, useState } from "react";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { TbChefHat } from "react-icons/tb";
import { RxCross1 } from "react-icons/rx";
import { BiRightArrow } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { ChefContext } from "../../../Providers/AuthProviders";
const Header = () => {

  const {toggle,setToggle} = useContext(ChefContext);
  return (

    <>
    <header className="font-Nunito relative w-full lg:flex justify-between items-center px-4 shadow-lg">
      <div className="flex justify-between  items-center px-2 py-5">
        <div className=" text-xl md:text-3xl font-semibold">
          {" "}
          <h2 className="flex ">
            Culinary
            <TbChefHat />
            Chronicles
          </h2>
        </div>

        <div
          onClick={() => setToggle(true)}
          className="text-3xl cursor-pointer lg:hidden"
        >
          <HiOutlineBars3BottomRight />
        </div>
      </div>
    <div className={ toggle === false ? "absolute w-full -z-20 top-0 left-0 lg:hidden" : 'z-0 lg:hidden'}>
        <div
          className={
            toggle
              ? "absolute lg:hidden w-full h-[500px] top-0 left-0 duration-300 bg-white"
              : "-translate-y-[800px] duration-300 lg:hidden"
          }
        >
          <div className="flex justify-between items-center px-4 py-5">
            <div className="text-xl md:text-3xl font-semibold">
              {" "}
              <h2 className="flex">
                Culinary
                <TbChefHat />
                Chronicles
              </h2>
            </div>

            <div
              onClick={() => setToggle(false)}
              className="text-3xl cursor-pointer"
            >
              <RxCross1 />
            </div>
          </div>
          <hr />
          <div>
            <nav className="flex flex-col px-5 py-4 text-2xl space-y-3">
              <Link className="hover:text-red-400 duration-200 w-fit" to="/">
                Home
              </Link>
              <Link className="hover:text-red-400 duration-200 w-fit" to="/">
                The Experience
              </Link>
              <Link className="hover:text-red-400 duration-200 w-fit" to="/">
                Our Chefs
              </Link>
              <Link className="hover:text-red-400 duration-200 w-fit" to="/">
                Services
              </Link>
              <Link className="hover:text-red-400 duration-200 w-fit" to="/">
                Contact us
              </Link>
            </nav>
            <hr className="mt-4" />
            <button className=" text-center mt-5 flex items-center text-2xl space-x-1 justify-center w-full  bg-gray-200 hover:bg-red-100 rounded-full max-w-md mx-auto px-2 py-2 group">
              <h2 className="font-semibold">login</h2>
              <div className="-translate-x-4 text-transparent group-hover:text-black group-hover:translate-x-0 duration-300">
                <MdKeyboardArrowRight />
              </div>
            </button>
          </div>
        </div>



    </div>
      <div className="hidden lg:block">
        <nav className="flex  px-5 py-4 lg:text-md xl:text-xl lg:space-x-4  xl:space-x-8 items-center">
          <Link className="hover:text-red-400 duration-200 w-fit" to="/">
            Home
          </Link>
          <Link className="hover:text-red-400 duration-200 w-fit" to="/">
            The Experience
          </Link>
          <Link className="hover:text-red-400 duration-200 w-fit" to="/">
            Our Chefs
          </Link>
          <Link className="hover:text-red-400 duration-200 w-fit" to="/">
            Services
          </Link>
          <Link className="hover:text-red-400 duration-200 w-fit" to="/">
            Contact us
          </Link>
        </nav>

      </div>
      <div>
        <div className="hidden lg:flex space-x-3 items-center">
      <button className=" text-center flex items-center text-xl space-x-1 justify-center   bg-gray-200 hover:bg-red-100 rounded-full px-8 py-2 group relative">
              <h2 className="font-semibold">login</h2>
              <div className="-translate-x-1 absolute right-2  text-transparent group-hover:text-black group-hover:translate-x-0 duration-300">
                <MdKeyboardArrowRight />
              </div>
            </button>
      <button className=" text-center flex items-center text-xl space-x-1 justify-center   bg-red-400  rounded-full lg:px-5 xl:px-8 py-2 group relative text-white">
              <h2 className="font-semibold">
                    Enlist
              </h2>
              <div className="-translate-x-1 absolute lg:right-0 xl:right-2 text-transparent group-hover:text-white group-hover:translate-x-0 duration-300">
                <MdKeyboardArrowRight />
              </div>
            </button>

        </div>
      </div>

    </header>

    </>
  );
};

export default Header;
