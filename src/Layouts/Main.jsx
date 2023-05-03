import React from "react";
import Header from "../pages/Shared/Header/Header";
import { Outlet, useNavigation } from "react-router-dom";
import LazyLoad from "react-lazyload";
import Footer from "../pages/Shared/Footer/Footer";
import { FaSpinner } from "react-icons/fa";

const Main = () => {
    const navigation = useNavigation()
  return (
    <div>
      <Header />
      <main>
            {
                navigation.state === 'loading'? <div className="flex items-center justify-center h-[300px]"> <FaSpinner className="text-3xl" /></div>: ''
            }
        <Outlet />
      </main>
      <Footer />

    </div>
  );
};

export default Main;
