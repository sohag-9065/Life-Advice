import React from 'react';
import ServicesHome from './ServicesHome';
import BannerHome from './BannerHome/BannerHome'
import BusinessSummary from './BusinessSummary';
import MobileApp from './MobileApp';
import Contact from './Contact';

const Home = () => {
    return (
        <div>
            <BannerHome />
            <ServicesHome/>
            <BusinessSummary />
            <MobileApp />
            <Contact />
        </div>
    );
};

export default Home;