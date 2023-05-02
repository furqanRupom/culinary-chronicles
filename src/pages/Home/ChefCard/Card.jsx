import React from "react";
// import { FaCookie } from 'react-icons/fa';
import { TbChefHat } from "react-icons/tb";

const Card = ({ chefInfo }) => {
  const {
    name,
    years_of_experience,
    number_of_recipes,
    amount_of_likes,
    image,
  } = chefInfo;
  return (
    <>
      <div className="relative bg-white shadow-lg rounded-lg overflow-hidden group ">
        <div className="absolute top-0 left-0 flex items-center p-4 z-10">
          <TbChefHat className="text-red-500 mr-2" size={24} />
          <div className="font-bold text-white">CulinaryChronicles</div>
        </div>
        <img
          className="w-full h-[340px] md:h-[450px] object-cover transition duration-300 ease-in-out transform group-hover:scale-105"
          src={image}
          alt={name}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-70 transition duration-300"></div>
        <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-bl from-transparent to-slate-900">
          <h2 className="text-2xl font-bold mb-2 text-white">{name}</h2>
          <p className="text-gray-200 text-base mb-2">
            {years_of_experience} years of experience
          </p>
          <p className="text-gray-200 text-base mb-2">
            {amount_of_likes} recipe likes
          </p>
          <p className="text-gray-200 text-base mb-2">
            {number_of_recipes} recipes
          </p>
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full mb-2">
            View Recipe
          </button>
        </div>
      </div>
    
    </>
  );
};

export default Card;
