import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefRecipes = () => {
  const { name, image, description, years_of_experience, number_of_recipes, recipes } = useLoaderData();

  return (
    <div className="h-[1200px] flex flex-col font-Nunito">
      {/* Chef Information and Images */}
      <div className="bg-white pb-8 px-4">
  <div className="max-w-screen-xl mx-auto py-12 md:flex md:justify-center md:items-center">
    <div className="md:w-1/2 lg:w-2/5 md:mb-0 ">
      <img src={image} alt={name} className="w-full h-auto md:w-96 ml-auto rounded-lg" />
    </div>
    <div className="md:w-1/2 lg:w-3/5 md:pl-10">
      <h3 className="text-4xl font-bold text-red-400 mb-4">{name}</h3>
      <p className="text-lg mb-4">{description}</p>
      <div className="flex mb-4">
        <div className="mr-4">
          <p className="text-lg font-bold text-gray-800">Years of Experience:</p>
          <p className="text-lg text-gray-600">{years_of_experience}</p>
        </div>
        <div>
          <p className="text-lg font-bold text-gray-800">Number of Recipes:</p>
          <p className="text-lg text-gray-600">{number_of_recipes}</p>
        </div>
      </div>
    </div>
  </div>
</div>



      {/* Recipes */}
      <div className="flex flex-col items-center p-8">
        <h3 className="text-4xl font-bold text-red-400">Recipes</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
          {recipes.map(recipe => (
            <div key={recipe.recipe_name} className="bg-white shadow rounded-lg overflow-hidden">
              <div className="h-48">
                <img src={recipe.recipe_image} alt={recipe.recipe_name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h4 className="text-lg font-bold">{recipe.recipe_name}</h4>
                <p className="text-sm">{recipe.recipe_description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <p className="text-sm">{recipe.difficulty}</p>
                  <p className="text-sm">{recipe.prep_time} prep / {recipe.cook_time} cook</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefRecipes;

