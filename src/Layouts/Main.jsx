import React from 'react';
import Header from '../pages/Shared/Header/Header';
import { Outlet} from 'react-router-dom'
import LazyLoad from 'react-lazyload';
import Footer from '../pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <LazyLoad>
            <Header />
            <main>
            <Outlet />
            </main>
            <Footer />
            </LazyLoad>

        </div>
    );
};

export default Main;