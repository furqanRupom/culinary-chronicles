import React from "react";
import PieChartWithCustomizedLabel from "./Charts";
import ChefPieChart from "./Charts";

const Recipe = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto py-20 items-center shadow p-10 rounded-lg font-Nunito bg-white justify-items-center px-12">

        <div>
      <h3 className="text-2xl font-bold pb-6">What is the most reserved type of cuisine in Recife?</h3>

      <p className="leading-relaxed lg:font-md">
        At Culinary Chronicles, we welcome chefs from all over the world to
        bring their unique culinary expertise to our kitchen. Our team of
        talented chefs specialize in a variety of cuisines, including
        Mediterranean, Asian, and more. With a diverse range of culinary
        backgrounds and experiences, our chefs are dedicated to creating
        flavorful and unforgettable dishes for our guests to enjoy. Come and
        experience the best of global cuisine at Culinary Chronicles.
      </p>
      <p className="pt-6 leading-relaxed lg:font-md">
      We pride ourselves on offering a wide range of cuisine styles to cater to all tastes and preferences. From traditional Australian fare to exotic Asian dishes, from hearty European cuisine to spicy South American specialties, we've got something for everyone. Our chefs are passionate about bringing new and exciting flavors to the table, and they are always experimenting with new techniques and ingredients to keep things fresh and interesting.
      </p>



        </div>


<ChefPieChart />



    </div>
  );
};

export default Recipe;
