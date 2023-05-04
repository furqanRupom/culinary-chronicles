import React, { useContext, useState } from "react";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { TbChefHat } from "react-icons/tb";
import { RxCross1 } from "react-icons/rx";
import { BiRightArrow } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { ChefContext } from "../../../Providers/AuthProviders";
import ActiveLink from "../../../ActiveLink/ActiveLink";
import LazyLoad from "react-lazyload";
const Header = () => {
  const { toggle, setToggle, user, logOut } = useContext(ChefContext);
  // console.log(user?.photoURL);

  const navigate = useNavigate();
  const signOut = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <>
      <header className="font-Nunito relative  w-full lg:flex justify-between items-center px-4 bg-gray-100 py-3">
        <div className="flex justify-between  items-center px-2 py-5">
          <div className=" text-xl md:text-3xl font-semibold">
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
        <div
          className={
            toggle === false
              ? "absolute w-full -z-20 top-0 left-0 lg:hidden"
              : "z-0 lg:hidden"
          }
        >
          <div
            className={
              toggle
                ? "absolute lg:hidden w-full pb-12 z-20 top-0 left-0 duration-300 bg-white translate-y-0 "
                : "-translate-y-[800px] duration-500 lg:hidden"
            }
          >
            <div className="flex justify-between items-center px-4 py-5">
              <div className="text-xl md:text-3xl font-semibold flex items-center space-x-4">
                {" "}
                <h2 className="flex">
                  Culinary
                  <TbChefHat />
                  Chronicles
                </h2>
                {user && (

                  <>

                  <div className=" group cursor-pointer">
                    <img
                      className="w-10 h-10 border-red-400 border-2 object-cover rounded-[100%]"
                      src={`${user?.photoURL}`}
                      alt=""
                    />

                    <div className=" hidden group-hover:block absolute pt-1  w-full bg-white ">
                      <h3 className=" text-red-400 font-bold">
                        {user.displayName}
                      </h3>
                    </div>
                  </div>

                  </>
                )}
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
                <ActiveLink className="w-fit" to="/">
                  <button className="hover:text-red-400 duration-200 ">
                    Home
                  </button>
                </ActiveLink>
                <ActiveLink className="w-fit" to="/blog">
                  <button className="hover:text-red-400 duration-200 ">
                    Blog
                  </button>
                </ActiveLink>

              </nav>
              <hr className="mt-4" />

              {user ? (
                <>
                  <button
                    onClick={signOut}
                    className=" text-center bg-red-400  flex items-center text-xl space-x-3 justify-center w-full  text-white rounded-full max-w-sm mx-auto px-3 py-2 group"
                  >
                    <h3 className="font-semibold">Sign out</h3>
                    <div className="text-lg">
                      <FiLogOut />
                    </div>
                  </button>
                </>
              ) : (
                <Link to="/user/login">
                  <button className=" text-center mt-5 flex items-center text-2xl space-x-1 justify-center   bg-gray-200  rounded-full mx-auto px-8 py-2 group">
                    <h3 className="font-semibold">Sign In</h3>
                    <div className=" absolute translate-x-10 text-transparent group-hover:text-black group-hover:translate-x-12 duration-300">
                      <MdKeyboardArrowRight />
                    </div>
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* large size */}
        <div className="hidden lg:block">
          <nav className="flex  px-5 py-4 lg:text-md xl:text-xl lg:space-x-4  xl:space-x-8 items-center">
            <ActiveLink className="w-fit" to="/">
              <button className="hover:text-red-400 duration-200 ">Home</button>
            </ActiveLink>
            <ActiveLink className="w-fit" to="/blog">
              <button className="hover:text-red-400 duration-200 ">
                Blog
              </button>
            </ActiveLink>

          </nav>
        </div>
        <div>
          <div className="hidden lg:flex space-x-3 items-center z-50">
            {user ? (
              <div className="flex space-x-3 items-center">
                <div className="group cursor-pointer">
                  <img
                    className="w-16 h-10 border-red-400 border-2 object-cover rounded-[100%] "
                    src={`${user?.photoURL}`}
                    alt=""
                  />
                  <div className=" hidden group-hover:block absolute pt-1   bg-white ">
                    <h3 className=" text-red-400 font-bold">
                      {user.displayName}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={signOut}
                  className=" text-center bg-red-400  flex items-center text-xl space-x-3 justify-center w-full  text-white rounded-full max-w-md mx-auto px-3 py-2 group"
                >
                  <h3 className="font-semibold">Sign out</h3>
                  <div className="text-lg">
                    <FiLogOut />
                  </div>
                </button>
              </div>
            ) : (
              <Link to="/user/login">
                <button className=" text-center  flex items-center text-2xl space-x-1 justify-center   bg-gray-200  rounded-full mx-auto px-8 py-2 group">
                  <h3 to="/user/login" className="font-semibold">
                    Sign In
                  </h3>
                  <div className=" absolute translate-x-10 text-transparent group-hover:text-black group-hover:translate-x-12 duration-300">
                    <MdKeyboardArrowRight />
                  </div>
                </button>
              </Link>
            )}
          </div>
        </div>
      </header>
      <hr />
    </>
  );
};

export default Header;
