import React from "react";
import LazyLoad from "react-lazyload";

const About = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 md:gap-10 lg:gap-5     xl:gap-10 justify-items-center items-center">
      <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="lg:text-center">
            <h2 className="text-base text-red-400 font-semibold tracking-wide uppercase mb-4">
              About Culinary Chronicles
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl font-Nunito">
              Discover the Story Behind Our Website
            </p>
          </div>
          <div className="mt-8 space-y-6">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Welcome to Culinary Chronicles, a culinary haven established in
              2010 by the esteemed Chef John Doe. Our mission is to share our
              passion for cooking with the world and create a community of food
              enthusiasts who can exchange ideas, recipes, and tips. Over the
              years, we've become a popular destination for those who love to
              cook and eat.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Our website is a treasure trove of culinary delights from
              different cuisines and cultures. Whether you crave a classic
              French dish or a fiery Indian curry, you'll find it here. We also
              feature a section for healthy and vegetarian recipes, so everyone
              can find something they love.
            </p>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Thanks to our loyal community, Culinary Chronicles has become one
              of the most popular food websites on the internet. We're thrilled
              to serve millions of visitors every month who come to our website
              for inspiration and guidance in the kitchen.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              In addition to our website, Culinary Chronicles offers a range of
              services to our guests. Our experienced chefs provide cooking
              classes, private dining experiences, and catering for events.
              We'll work with you to create a customized menu that meets your
              needs and exceeds your expectations.
            </p>
          </div>
        </div>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-3">
        <div className="lg:row-span-2 ">
            <LazyLoad className="h-full">

            <img
              className="rounded-2xl lg:h-full lg:object-cover"
              src="https://img.freepik.com/free-photo/mid-shot-chef-holding-plate-with-pasta-making-ok-sign_23-2148794087.jpg?w=996&t=st=1683055682~exp=1683056282~hmac=985c71952ce32a7763fbe1222eb1506647493836349127a6c50ea77243cb33b9"
              alt=""
            />

            </LazyLoad>

        </div>
        <div className="">
          <LazyLoad>
            <img
              className="rounded-2xl lg:h-full lg:object-cover"
              src="https://www.finedininglovers.com/sites/g/files/xknfdk626/files/2021-07/chef%20%281%29.jpg"
              alt=""
            />
          </LazyLoad>
        </div>
        <div className="md:col-span-2 lg:col-span-1 ">
          <LazyLoad>
            <img
              className="rounded-2xl md:w-full lg:w-auto lg:h-full lg:object-cover"
              src="https://media.istockphoto.com/id/1408797987/photo/chef-decorating-a-plate-while-working-in-the-kitchen-at-a-restaurant.jpg?b=1&s=170667a&w=0&k=20&c=051trCkQfpVapBF2QVgpL0Hm-OftxJt1zzR-5Jgwj8A="
              alt=""
            />
          </LazyLoad>
        </div>
        <div>
          <LazyLoad>
            <img
              className="rounded-2xl lg:h-full lg:object-cover"
              src="https://a2s4r4h8.stackpathcdn.com/wp-content/uploads/2022/10/Chefs-Cutting-Ingredients.jpg"
              alt=""
            />
          </LazyLoad>
        </div>

        <div>
          <LazyLoad>
            <img
              className="rounded-2xl lg:h-full lg:object-cover"
              src="https://thumbs.dreamstime.com/b/female-chef-holding-plate-prepared-pasta-kitchen-female-chef-holding-plate-prepared-pasta-kitchen-hotel-135827202.jpg"
              alt=""
            />
          </LazyLoad>
        </div>
        <div className="md:col-span-2 lg:col-span-3">
          <LazyLoad>
            <img
              className="rounded-2xl lg:w-full "
              src="https://www.betterteam.com/images/chef-job-description-6000x4000-20201119.jpeg"
              alt=""
            />
          </LazyLoad>
        </div>
      </div>
    </section>
  );
};

export default About;
