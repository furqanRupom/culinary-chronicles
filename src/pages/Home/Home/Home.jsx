import React, { useContext } from "react";
import "./Home.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { ChefContext } from "../../../Providers/AuthProviders";
import { useLoaderData } from "react-router-dom";
import Card from "../ChefCard/Card";
import About from "../About/About";
import Recipe from "../Recipe/Recipe";
const Home = () => {
  const { toggle } = useContext(ChefContext);
  const chefInformationData = useLoaderData();
  return (
    <>
      <div
        className={
          toggle
            ? "relative bg-cover   md:h-[1000px]  font-Nunito bg-image bg-right px-4 sm:px-10 lg:p-20 -z-30"
            : "relative bg-cover font-Nunito bg-image bg-right px-4 sm:h-[400px] md:h-[600px] xl:h-[1000px]  sm:px-10 lg:p-20 z-30"
        }
      >
        <div className="absolute inset-0 bg-black opacity-5"></div>
        <div className="container mx-auto md:px-4 py-10 sm:py-32 md:py-40 lg:py-48">
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-7xl font-bold text-black mb-4">
            Culinary Chronicles
          </h1>
          <p className="leading-relaxed md:text-2xl lg:text-4xl text-black mb-4 lg:mb-8">
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

      <div className="bg-gray-100 py-20 md:py-32 lg:py-44 px-10">
        <About />
      </div>

      <div className="pt-20 pb-12 font-Nunito bg-gray-100 px-4">
        <h2 className="text-xl md:text-4xl font-bold text-center py-3">
          Our Culinary Team
        </h2>
        <p className="leading-relaxed  md:text-md py-3 ">
          Discover the talented individuals who bring your favorite dishes to
          life! Our culinary team is made up of experienced chefs, sous chefs,
          pastry chefs, and line cooks who are passionate about creating
          unforgettable dining experiences. From sourcing the freshest
          ingredients to carefully crafting each plate, our team is dedicated to
          delivering the highest quality cuisine. Get to know our team and learn
          more about their unique backgrounds, training, and culinary
          specialties.
        </p>
        <div className="grid gap-y-10 md:gap-20 lg:gap-x-10 xl:gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 mb-8">
          {chefInformationData.map((chefInfo) => (
            <Card key={chefInfo.id} chefInfo={chefInfo} />
          ))}
        </div>
      </div>

            <div className="bg-gray-100">
            <Recipe />
            </div>

    </>
  );
};

export default Home;
