import React from 'react';
import ServicesHome from './ServicesHome';
import BannerHome from './BannerHome/BannerHome'

const Home = () => {
    return (
        <div>
            <BannerHome></BannerHome>
            <ServicesHome/>
        </div>
    );
};

export default Home;