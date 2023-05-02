import React from 'react';
import Header from '../pages/Shared/Header/Header';
import {Outlet} from 'react-router-dom'
import LazyLoad from 'react-lazyload';

const Main = () => {
    return (
        <div>
            <LazyLoad>
            <Header />
            <Outlet />
            </LazyLoad>

        </div>
    );
};

export default Main;