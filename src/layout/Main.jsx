import React from 'react';
import { Outlet } from 'react-router-dom';
import FooterSection from '../components/FooterSection';
import Header from '../components/Header';

const Main = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Header />
            <Outlet />
            <FooterSection />
        </div>
    );
};

export default Main;